'use client';

import { useState } from 'react';
import { useActionTracker } from '@/hooks/useActionTracker';
import type { ActionCategory, ActionStatus, ActionItem } from '@/types/actions';
import {
  CheckCircle2, Circle, AlertTriangle, ExternalLink, ChevronDown, ChevronUp,
  Plane, Building2, Ticket, Car, Shield, UtensilsCrossed, Loader2, RotateCcw
} from 'lucide-react';

const CATEGORY_CONFIG: Record<ActionCategory, { label: string; icon: typeof Plane; color: string }> = {
  flight: { label: 'Flights', icon: Plane, color: 'blue' },
  accommodation: { label: 'Hotels', icon: Building2, color: 'purple' },
  activity: { label: 'Activities', icon: Ticket, color: 'amber' },
  car_rental: { label: 'Car', icon: Car, color: 'orange' },
  pass: { label: 'Passes', icon: Shield, color: 'green' },
  dining: { label: 'Dining', icon: UtensilsCrossed, color: 'rose' },
};

const STATUS_CYCLE: ActionStatus[] = ['pending', 'booked', 'verified', 'needs_attention'];

function StatusIcon({ status }: { status: ActionStatus }) {
  switch (status) {
    case 'pending': return <Circle className="w-5 h-5 text-gray-300" />;
    case 'booked': return <CheckCircle2 className="w-5 h-5 text-blue-500" />;
    case 'verified': return <CheckCircle2 className="w-5 h-5 text-green-500" />;
    case 'needs_attention': return <AlertTriangle className="w-5 h-5 text-amber-500" />;
  }
}

function getDeadlineUrgency(deadline?: string): 'overdue' | 'urgent' | 'soon' | 'ok' | 'none' {
  if (!deadline) return 'none';
  const now = new Date();
  const dl = new Date(deadline);
  const daysLeft = Math.ceil((dl.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  if (daysLeft < 0) return 'overdue';
  if (daysLeft <= 7) return 'urgent';
  if (daysLeft <= 30) return 'soon';
  return 'ok';
}

function formatDeadline(deadline: string): string {
  const dl = new Date(deadline);
  const now = new Date();
  const daysLeft = Math.ceil((dl.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  if (daysLeft < 0) return `${Math.abs(daysLeft)}d overdue`;
  if (daysLeft === 0) return 'Today!';
  if (daysLeft === 1) return 'Tomorrow';
  if (daysLeft <= 7) return `${daysLeft}d left`;
  return dl.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function formatCost(amount?: number): string {
  if (amount == null) return '';
  return `$${amount.toLocaleString()}`;
}

export default function ActionTracker() {
  const {
    items, isLoading, isSaving,
    updateStatus, updateItem, resetItem,
    pendingCount, bookedCount, verifiedCount, totalCount,
    totalEstimated, totalActual,
  } = useActionTracker();

  const [filter, setFilter] = useState<ActionCategory | 'all'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = filter === 'all' ? items : items.filter(i => i.category === filter);
  const progress = totalCount > 0 ? ((bookedCount + verifiedCount) / totalCount) * 100 : 0;

  const cycleStatus = (item: ActionItem) => {
    const idx = STATUS_CYCLE.indexOf(item.status);
    const next = STATUS_CYCLE[(idx + 1) % STATUS_CYCLE.length];
    updateStatus(item.id, next);
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex items-center justify-center">
        <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <Ticket className="w-5 h-5" />
            <h2 className="font-semibold">Action Tracker</h2>
            {isSaving && <Loader2 className="w-3 h-3 animate-spin text-white/60" />}
          </div>
          <div className="text-white/90 text-sm font-medium">
            {bookedCount + verifiedCount}/{totalCount} done
          </div>
        </div>
        <div className="mt-2 h-1.5 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white/80 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 flex items-center gap-3 text-xs text-white/80">
          <span>{pendingCount} pending</span>
          <span>{bookedCount} booked</span>
          <span>{verifiedCount} verified</span>
        </div>
      </div>

      {/* Category filters */}
      <div className="p-2 border-b border-gray-100 flex gap-1 overflow-x-auto">
        <button
          onClick={() => setFilter('all')}
          className={`px-2.5 py-1 text-xs rounded-full whitespace-nowrap transition-colors ${
            filter === 'all' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          All ({totalCount})
        </button>
        {(Object.entries(CATEGORY_CONFIG) as [ActionCategory, typeof CATEGORY_CONFIG.flight][]).map(([cat, cfg]) => {
          const count = items.filter(i => i.category === cat).length;
          if (count === 0) return null;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-2.5 py-1 text-xs rounded-full whitespace-nowrap transition-colors ${
                filter === cat ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cfg.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Items list */}
      <div className="max-h-[500px] overflow-y-auto">
        {filtered.map(item => {
          const urgency = getDeadlineUrgency(item.deadline);
          const isExpanded = expandedId === item.id;
          const cfg = CATEGORY_CONFIG[item.category];

          return (
            <div
              key={item.id}
              className={`border-b border-gray-50 last:border-0 ${
                item.status === 'verified' ? 'bg-green-50/50' :
                item.status === 'booked' ? 'bg-blue-50/30' :
                urgency === 'overdue' ? 'bg-red-50' :
                urgency === 'urgent' ? 'bg-amber-50/50' :
                'bg-white'
              }`}
            >
              <div
                className="flex items-start gap-2.5 p-3 cursor-pointer hover:bg-gray-50/50 transition-colors"
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
              >
                {/* Status toggle */}
                <button
                  onClick={(e) => { e.stopPropagation(); cycleStatus(item); }}
                  className="mt-0.5 hover:scale-110 transition-transform"
                  title={`Status: ${item.status} (click to cycle)`}
                >
                  <StatusIcon status={item.status} />
                </button>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className={`text-sm font-medium ${
                      item.status === 'verified' ? 'text-green-700 line-through' :
                      item.status === 'booked' ? 'text-blue-700' :
                      'text-gray-800'
                    }`}>
                      {item.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                    <span className={`text-[10px] px-1.5 py-0.5 rounded bg-${cfg.color}-100 text-${cfg.color}-700`}>
                      {cfg.label}
                    </span>
                    {item.deadline && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                        urgency === 'overdue' ? 'bg-red-100 text-red-700 font-bold' :
                        urgency === 'urgent' ? 'bg-amber-100 text-amber-700 font-bold' :
                        urgency === 'soon' ? 'bg-yellow-50 text-yellow-700' :
                        'bg-gray-100 text-gray-500'
                      }`}>
                        {formatDeadline(item.deadline)}
                      </span>
                    )}
                    {item.estimatedCost != null && (
                      <span className="text-[10px] text-gray-400">
                        {item.actualCost != null && item.actualCost !== item.estimatedCost
                          ? <>{formatCost(item.actualCost)} <span className="line-through">{formatCost(item.estimatedCost)}</span></>
                          : formatCost(item.estimatedCost)
                        }
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1">
                  {item.bookingUrl && (
                    <a
                      href={item.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded transition-colors"
                      title="Open booking site"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-gray-300" /> : <ChevronDown className="w-3.5 h-3.5 text-gray-300" />}
                </div>
              </div>

              {/* Expanded details */}
              {isExpanded && (
                <div className="px-3 pb-3 pl-10 space-y-2">
                  {item.description && (
                    <p className="text-xs text-gray-500">{item.description}</p>
                  )}

                  {/* Confirmation number */}
                  <div className="flex items-center gap-2">
                    <label className="text-xs text-gray-500 w-24">Confirmation:</label>
                    <input
                      type="text"
                      value={item.confirmationNumber ?? ''}
                      onChange={(e) => updateItem(item.id, { confirmationNumber: e.target.value || undefined })}
                      onClick={(e) => e.stopPropagation()}
                      placeholder="Enter confirmation #"
                      className="text-xs border border-gray-200 rounded px-2 py-1 flex-1 focus:outline-none focus:border-blue-300"
                    />
                  </div>

                  {/* Actual cost */}
                  <div className="flex items-center gap-2">
                    <label className="text-xs text-gray-500 w-24">Actual cost:</label>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-400">$</span>
                      <input
                        type="number"
                        value={item.actualCost ?? ''}
                        onChange={(e) => updateItem(item.id, { actualCost: e.target.value ? Number(e.target.value) : undefined })}
                        onClick={(e) => e.stopPropagation()}
                        placeholder={item.estimatedCost?.toString() ?? '0'}
                        className="text-xs border border-gray-200 rounded px-2 py-1 w-24 focus:outline-none focus:border-blue-300"
                      />
                      {item.estimatedCost != null && (
                        <span className="text-[10px] text-gray-400">est. {formatCost(item.estimatedCost)}</span>
                      )}
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="flex items-start gap-2">
                    <label className="text-xs text-gray-500 w-24 pt-1">Notes:</label>
                    <textarea
                      value={item.notes ?? ''}
                      onChange={(e) => updateItem(item.id, { notes: e.target.value || undefined })}
                      onClick={(e) => e.stopPropagation()}
                      rows={2}
                      className="text-xs border border-gray-200 rounded px-2 py-1 flex-1 focus:outline-none focus:border-blue-300 resize-none"
                    />
                  </div>

                  {/* Status buttons */}
                  <div className="flex items-center gap-1.5 pt-1">
                    {STATUS_CYCLE.map(s => (
                      <button
                        key={s}
                        onClick={(e) => { e.stopPropagation(); updateStatus(item.id, s); }}
                        className={`text-[10px] px-2 py-1 rounded transition-colors ${
                          item.status === s
                            ? s === 'pending' ? 'bg-gray-200 text-gray-700' :
                              s === 'booked' ? 'bg-blue-200 text-blue-700' :
                              s === 'verified' ? 'bg-green-200 text-green-700' :
                              'bg-amber-200 text-amber-700'
                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                        }`}
                      >
                        {s.replace('_', ' ')}
                      </button>
                    ))}
                    <button
                      onClick={(e) => { e.stopPropagation(); resetItem(item.id); }}
                      className="text-[10px] px-2 py-1 rounded bg-gray-100 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors ml-auto"
                      title="Reset to defaults"
                    >
                      <RotateCcw className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer - cost summary */}
      <div className="p-3 bg-gray-50 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500">Estimated total</span>
          <span className="font-medium text-gray-700">{formatCost(totalEstimated)}</span>
        </div>
        {totalActual !== totalEstimated && (
          <div className="flex items-center justify-between text-xs mt-0.5">
            <span className="text-gray-500">Actual total</span>
            <span className={`font-medium ${totalActual > totalEstimated ? 'text-red-600' : 'text-green-600'}`}>
              {formatCost(totalActual)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
