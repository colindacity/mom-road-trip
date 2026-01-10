'use client';

import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Activity } from '@/types/trip';
import SortableActivity from './SortableActivity';
import { Package, X, Filter, Sparkles, Plus } from 'lucide-react';
import { useState, useMemo } from 'react';
import AddCustomEventModal from './AddCustomEventModal';
import { ParsedActivity } from '@/lib/urlParser';

interface ActivityPoolPanelProps {
  activityIds: string[];
  getActivity: (id: string) => Activity | undefined;
  onClose?: () => void;
  onAutoSchedule?: () => void;
  onAddCustomActivity?: (activity: ParsedActivity) => void;
}

export default function ActivityPoolPanel({
  activityIds,
  getActivity,
  onClose,
  onAutoSchedule,
  onAddCustomActivity,
}: ActivityPoolPanelProps) {
  const [difficultyFilter, setDifficultyFilter] = useState<string | null>(null);
  const [seniorFilter, setSeniorFilter] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const { setNodeRef, isOver } = useDroppable({
    id: 'activity-pool',
  });

  // Filter activities
  const filteredIds = useMemo(() => {
    return activityIds.filter(id => {
      const activity = getActivity(id);
      if (!activity) return false;

      if (difficultyFilter && activity.difficulty !== difficultyFilter) return false;
      if (seniorFilter && !activity.seniorFriendly) return false;

      return true;
    });
  }, [activityIds, difficultyFilter, seniorFilter, getActivity]);

  const difficulties = ['easy', 'moderate', 'strenuous'];

  return (
    <div
      ref={setNodeRef}
      className={`
        bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden
        ${isOver ? 'ring-2 ring-blue-400 ring-offset-2' : ''}
      `}
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Package className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Activity Pool</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">
              {filteredIds.length} / {activityIds.length}
            </span>
            {onClose && (
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-200 rounded transition-colors lg:hidden"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            )}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-1.5">
          {difficulties.map(diff => (
            <button
              key={diff}
              onClick={() => setDifficultyFilter(difficultyFilter === diff ? null : diff)}
              className={`px-2 py-0.5 text-xs rounded-full border transition-colors ${
                difficultyFilter === diff
                  ? 'bg-gray-800 text-white border-gray-800'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-100'
              }`}
            >
              {diff}
            </button>
          ))}
          <button
            onClick={() => setSeniorFilter(!seniorFilter)}
            className={`px-2 py-0.5 text-xs rounded-full border transition-colors ${
              seniorFilter
                ? 'bg-green-600 text-white border-green-600'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-100'
            }`}
          >
            Senior OK
          </button>
        </div>
      </div>

      {/* Action buttons */}
      <div className="px-3 py-2 border-b border-gray-100 space-y-2">
        {/* Add custom activity button */}
        {onAddCustomActivity && (
          <button
            onClick={() => setShowAddModal(true)}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Custom Activity
          </button>
        )}

        {/* Auto-schedule button */}
        {onAutoSchedule && activityIds.length > 0 && (
          <button
            onClick={onAutoSchedule}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            Auto-Schedule All
          </button>
        )}
      </div>

      {/* Add custom event modal */}
      {onAddCustomActivity && (
        <AddCustomEventModal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          onAdd={onAddCustomActivity}
        />
      )}

      {/* Activity list */}
      <div className="p-3 max-h-[calc(100vh-350px)] overflow-y-auto scrollbar-thin space-y-2">
        <SortableContext items={filteredIds} strategy={verticalListSortingStrategy}>
          {filteredIds.map(id => {
            const activity = getActivity(id);
            if (!activity) return null;

            return (
              <SortableActivity
                key={id}
                id={id}
                activity={activity}
              />
            );
          })}
        </SortableContext>

        {filteredIds.length === 0 && activityIds.length > 0 && (
          <div className="text-center py-8 text-gray-400 text-sm">
            No activities match filters
          </div>
        )}

        {activityIds.length === 0 && (
          <div className="text-center py-8 text-gray-400 text-sm">
            All activities scheduled!
          </div>
        )}
      </div>
    </div>
  );
}
