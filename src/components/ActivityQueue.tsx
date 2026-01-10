'use client';

import { QueuedActivity } from '@/hooks/useTripState';
import { Clock, RotateCcw, Trash2, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface ActivityQueueProps {
  queuedActivities: QueuedActivity[];
  onRestore: (activityId: string) => void;
  onDelete: (activityId: string) => void;
  onClose: () => void;
}

export default function ActivityQueue({
  queuedActivities,
  onRestore,
  onDelete,
  onClose,
}: ActivityQueueProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  if (queuedActivities.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 shadow-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-900">Activity Queue</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>
        <p className="text-sm text-gray-500 text-center py-4">
          No activities in queue. Remove activities from days to add them here.
        </p>
      </div>
    );
  }

  // Group by original day
  const groupedByDay = queuedActivities.reduce((acc, item) => {
    const key = `Day ${item.originalDayNumber}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {} as Record<string, QueuedActivity[]>);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-lg max-h-[70vh] overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-100 shrink-0">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-gray-900">Activity Queue</h3>
          <span className="px-1.5 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">
            {queuedActivities.length}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
        >
          <X className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* Content */}
      <div className="overflow-y-auto flex-1 p-2">
        {Object.entries(groupedByDay)
          .sort(([a], [b]) => {
            const numA = parseInt(a.replace('Day ', ''));
            const numB = parseInt(b.replace('Day ', ''));
            return numA - numB;
          })
          .map(([dayLabel, activities]) => (
            <div key={dayLabel} className="mb-3 last:mb-0">
              <div className="text-[10px] uppercase tracking-wide text-gray-400 font-medium px-2 mb-1">
                From {dayLabel}
              </div>
              <div className="space-y-1.5">
                {activities.map((item) => (
                  <div
                    key={item.activity.id}
                    className="bg-gray-50 rounded-lg border border-gray-100 overflow-hidden"
                  >
                    {/* Activity header */}
                    <div
                      className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() =>
                        setExpandedId(
                          expandedId === item.activity.id ? null : item.activity.id
                        )
                      }
                    >
                      {item.activity.image && (
                        <div className="w-10 h-10 rounded overflow-hidden shrink-0 bg-gray-200">
                          <img
                            src={item.activity.image}
                            alt={item.activity.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 truncate">
                          {item.activity.name}
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
                          <Clock className="w-2.5 h-2.5" />
                          {item.activity.duration}
                          <span className={`px-1 py-0.5 rounded ${
                            item.activity.difficulty === 'easy'
                              ? 'bg-green-50 text-green-600'
                              : item.activity.difficulty === 'moderate'
                              ? 'bg-yellow-50 text-yellow-600'
                              : 'bg-red-50 text-red-600'
                          }`}>
                            {item.activity.difficulty}
                          </span>
                        </div>
                      </div>
                      {expandedId === item.activity.id ? (
                        <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                      )}
                    </div>

                    {/* Expanded details */}
                    {expandedId === item.activity.id && (
                      <div className="px-2 pb-2 border-t border-gray-100 pt-2">
                        <p className="text-xs text-gray-600 mb-2 line-clamp-3">
                          {item.activity.summary || item.activity.description}
                        </p>
                      </div>
                    )}

                    {/* Action buttons */}
                    <div className="flex items-center gap-1 p-1.5 border-t border-gray-100 bg-white">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onRestore(item.activity.id);
                        }}
                        className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 bg-green-50 text-green-700 text-xs rounded hover:bg-green-100 transition-colors"
                      >
                        <RotateCcw className="w-3 h-3" />
                        Restore
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDelete(item.activity.id);
                        }}
                        className="flex items-center justify-center gap-1.5 px-2 py-1.5 bg-red-50 text-red-600 text-xs rounded hover:bg-red-100 transition-colors"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      {/* Footer - restore all */}
      <div className="p-2 border-t border-gray-100 shrink-0">
        <button
          onClick={() => {
            queuedActivities.forEach((item) => onRestore(item.activity.id));
          }}
          className="w-full py-2 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"
        >
          Restore all activities
        </button>
      </div>
    </div>
  );
}
