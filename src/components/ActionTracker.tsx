'use client';

import { useState } from 'react';
import { useActionTracker } from '@/hooks/useActionTracker';
import type { ActionCategory, ActionItem } from '@/types/actions';
import {
  CheckCircle2, Circle, ExternalLink, ChevronDown, ChevronUp,
  Plane, Building2, Ticket, Car, Shield, UtensilsCrossed, Loader2,
  AlertTriangle, ArrowRight
} from 'lucide-react';

const CATEGORY_ICONS: Record<ActionCategory, typeof Plane> = {
  flight: Plane,
  accommodation: Building2,
  activity: Ticket,
  car_rental: Car,
  pass: Shield,
  dining: UtensilsCrossed,
};

const CATEGORY_COLORS: Record<ActionCategory, string> = {
  flight: 'bg-blue-100 text-blue-700',
  accommodation: 'bg-purple-100 text-purple-700',
  activity: 'bg-amber-100 text-amber-700',
  car_rental: 'bg-orange-100 text-orange-700',
  pass: 'bg-green-100 text-green-700',
  dining: 'bg-rose-100 text-rose-700',
};

function getUrgency(deadline?: string): { label: string; className: string } | null {
  if (!deadline) return null;
  const now = new Date();
  const dl = new Date(deadline);
  const daysLeft = Math.ceil((dl.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  if (daysLeft < 0) return { label: `${Math.abs(daysLeft)}d overdue!`, className: 'bg-red-500 text-white font-bold' };
  if (daysLeft === 0) return { label: 'TODAY!', className: 'bg-red-500 text-white font-bold' };
  if (daysLeft === 1) return { label: 'Tomorrow!', className: 'bg-red-500 text-white font-bold' };
  if (daysLeft <= 3) return { label: `${daysLeft}d left`, className: 'bg-red-100 text-red-700 font-bold' };
  if (daysLeft <= 7) return { label: `${daysLeft}d left`, className: 'bg-amber-100 text-amber-700 font-semibold' };
  if (daysLeft <= 30) return { label: dl.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }), className: 'bg-yellow-50 text-yellow-700' };
  return { label: dl.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }), className: 'bg-gray-100 text-gray-500' };
}

function ItemRow({ item, isNext, isExpanded, onToggle, onExpand, onUpdateItem }: {
  item: ActionItem;
  isNext: boolean;
  isExpanded: boolean;
  onToggle: () => void;
  onExpand: () => void;
  onUpdateItem: (id: string, updates: Partial<ActionItem>) => void;
}) {
  const done = item.status === 'booked' || item.status === 'verified';
  const urgency = !done ? getUrgency(item.deadline) : null;
  const CatIcon = CATEGORY_ICONS[item.category];

  return (
    <div className={`border-b border-gray-100 last:border-0 transition-colors ${
      done ? 'bg-gray-50 opacity-60' :
      isNext ? 'bg-teal-50 border-l-4 border-l-teal-500' :
      urgency?.className.includes('red-500') ? 'bg-red-50' :
      ''
    }`}>
      <div className="flex items-center gap-2.5 p-3 cursor-pointer" onClick={onExpand}>
        {/* Checkbox */}
        <button
          onClick={(e) => { e.stopPropagation(); onToggle(); }}
          className="shrink-0 hover:scale-110 transition-transform"
        >
          {done
            ? <CheckCircle2 className="w-5 h-5 text-green-500" />
            : <Circle className="w-5 h-5 text-gray-300 hover:text-teal-400" />
          }
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            {isNext && !done && (
              <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-teal-500 text-white font-bold uppercase tracking-wider shrink-0">
                Next
              </span>
            )}
            <span className={`text-sm font-medium truncate ${done ? 'line-through text-gray-400' : 'text-gray-800'}`}>
              {item.title}
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
            <span className={`text-[10px] px-1.5 py-0.5 rounded inline-flex items-center gap-0.5 ${CATEGORY_COLORS[item.category]}`}>
              <CatIcon className="w-2.5 h-2.5" />
              {item.category.replace('_', ' ')}
            </span>
            {urgency && (
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${urgency.className}`}>
                {urgency.label}
              </span>
            )}
            {item.estimatedCost != null && (
              <span className="text-[10px] text-gray-400">
                {item.actualCost != null ? `$${item.actualCost}` : `~$${item.estimatedCost}`}
              </span>
            )}
          </div>
        </div>

        {/* Book button */}
        {item.bookingUrl && !done && (
          <a
            href={item.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`shrink-0 inline-flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg transition-colors ${
              isNext
                ? 'bg-teal-500 text-white hover:bg-teal-600 font-medium'
                : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
            }`}
          >
            {isNext ? 'Book' : <ExternalLink className="w-3 h-3" />}
            {isNext && <ArrowRight className="w-3 h-3" />}
          </a>
        )}

        {done && item.bookingUrl && (
          <a
            href={item.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="shrink-0 p-1.5 text-gray-300 hover:text-blue-500 rounded transition-colors"
          >
            <ExternalLink className="w-3 h-3" />
          </a>
        )}

        <button onClick={(e) => { e.stopPropagation(); onExpand(); }} className="shrink-0 p-0.5">
          {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-gray-300" /> : <ChevronDown className="w-3.5 h-3.5 text-gray-300" />}
        </button>
      </div>

      {/* Expanded */}
      {isExpanded && (
        <div className="px-3 pb-3 pl-10 space-y-2 text-xs">
          {item.description && <p className="text-gray-500">{item.description}</p>}

          <div className="flex items-center gap-2">
            <label className="text-gray-500 w-20">Confirm #:</label>
            <input
              type="text"
              value={item.confirmationNumber ?? ''}
              onChange={(e) => onUpdateItem(item.id, { confirmationNumber: e.target.value || undefined })}
              onClick={(e) => e.stopPropagation()}
              placeholder="Enter after booking"
              className="border border-gray-200 rounded px-2 py-1 flex-1 focus:outline-none focus:border-teal-300"
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="text-gray-500 w-20">Actual $:</label>
            <input
              type="number"
              value={item.actualCost ?? ''}
              onChange={(e) => onUpdateItem(item.id, { actualCost: e.target.value ? Number(e.target.value) : undefined })}
              onClick={(e) => e.stopPropagation()}
              placeholder={item.estimatedCost?.toString() ?? '0'}
              className="border border-gray-200 rounded px-2 py-1 w-24 focus:outline-none focus:border-teal-300"
            />
            {item.estimatedCost != null && (
              <span className="text-gray-400">est. ${item.estimatedCost}</span>
            )}
          </div>

          {item.notes && (
            <div className="p-2 bg-gray-50 rounded text-gray-500 text-[11px]">
              {item.notes}
            </div>
          )}

          {done && (
            <button
              onClick={(e) => { e.stopPropagation(); onToggle(); }}
              className="text-[10px] px-2 py-1 rounded bg-gray-100 text-gray-500 hover:bg-amber-50 hover:text-amber-600 transition-colors"
            >
              Mark as not done
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default function ActionTracker() {
  const {
    items, isLoading, isSaving,
    updateStatus, updateItem,
    pendingCount, bookedCount, verifiedCount, totalCount,
    totalEstimated, totalActual,
  } = useActionTracker();

  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showCompleted, setShowCompleted] = useState(false);

  const pending = items.filter(i => i.status === 'pending' || i.status === 'needs_attention');
  const completed = items.filter(i => i.status === 'booked' || i.status === 'verified');
  const doneCount = completed.length;
  const progress = totalCount > 0 ? (doneCount / totalCount) * 100 : 0;

  // First pending item is "next"
  const nextId = pending.length > 0 ? pending[0].id : null;

  const toggleDone = (item: ActionItem) => {
    const done = item.status === 'booked' || item.status === 'verified';
    updateStatus(item.id, done ? 'pending' : 'booked');
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
            <h2 className="font-semibold">Booking Checklist</h2>
            {isSaving && <Loader2 className="w-3 h-3 animate-spin text-white/60" />}
          </div>
          <div className="text-white/90 text-sm font-medium">
            {doneCount}/{totalCount}
          </div>
        </div>
        <div className="mt-2 h-2 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        {pending.length > 0 && (
          <p className="mt-2 text-white/80 text-xs">
            {pending.length} to book{' '}
            {pending.some(i => {
              const u = getUrgency(i.deadline);
              return u?.className.includes('red');
            }) && (
              <span className="inline-flex items-center gap-0.5">
                <AlertTriangle className="w-3 h-3" /> urgent items!
              </span>
            )}
          </p>
        )}
      </div>

      {/* Pending items */}
      <div className="max-h-[450px] overflow-y-auto">
        {pending.map(item => (
          <ItemRow
            key={item.id}
            item={item}
            isNext={item.id === nextId}
            isExpanded={expandedId === item.id}
            onToggle={() => toggleDone(item)}
            onExpand={() => setExpandedId(expandedId === item.id ? null : item.id)}
            onUpdateItem={updateItem}
          />
        ))}

        {/* Completed section */}
        {completed.length > 0 && (
          <>
            <button
              onClick={() => setShowCompleted(!showCompleted)}
              className="w-full flex items-center gap-2 p-2.5 text-xs text-gray-400 hover:bg-gray-50 transition-colors"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
              {completed.length} completed
              {showCompleted ? <ChevronUp className="w-3 h-3 ml-auto" /> : <ChevronDown className="w-3 h-3 ml-auto" />}
            </button>
            {showCompleted && completed.map(item => (
              <ItemRow
                key={item.id}
                item={item}
                isNext={false}
                isExpanded={expandedId === item.id}
                onToggle={() => toggleDone(item)}
                onExpand={() => setExpandedId(expandedId === item.id ? null : item.id)}
                onUpdateItem={updateItem}
              />
            ))}
          </>
        )}

        {/* All done! */}
        {pending.length === 0 && (
          <div className="p-6 text-center">
            <p className="text-green-600 font-medium">All booked!</p>
            <p className="text-xs text-gray-400 mt-1">Everything is reserved for your trip.</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs">
        <span className="text-gray-500">Est. total</span>
        <span className="font-medium text-gray-700">
          ${totalEstimated.toLocaleString()}
          {totalActual !== totalEstimated && (
            <span className={`ml-1 ${totalActual > totalEstimated ? 'text-red-500' : 'text-green-500'}`}>
              (actual ${totalActual.toLocaleString()})
            </span>
          )}
        </span>
      </div>
    </div>
  );
}
