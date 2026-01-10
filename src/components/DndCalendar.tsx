'use client';

import { useState, useMemo } from 'react';
import {
  DndContext,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { tripData } from '@/data/tripData';
import { Activity, TripPhase } from '@/types/trip';
import { useSchedule } from '@/hooks/useSchedule';
import ActivityPoolPanel from './ActivityPoolPanel';
import DayDropZone from './DayDropZone';
import SortableActivity from './SortableActivity';
import { List, RotateCcw, Loader2 } from 'lucide-react';
import { ParsedActivity } from '@/lib/urlParser';

interface DndCalendarProps {
  onPhaseSelect?: (phaseId: string | null) => void;
  selectedPhase?: string | null;
}

export default function DndCalendar({ onPhaseSelect, selectedPhase }: DndCalendarProps) {
  const {
    schedule,
    unscheduled,
    isLoading,
    isSaving,
    getActivity,
    addToDay,
    removeFromDay,
    moveToDay,
    returnToPool,
    resetSchedule,
    autoSchedule,
    addCustomEvent,
  } = useSchedule();

  // Handle adding custom activity from URL import or manual entry
  const handleAddCustomActivity = async (parsed: ParsedActivity) => {
    const activity = {
      id: `custom-${Date.now()}`,
      name: parsed.name,
      description: parsed.description || '',
      duration: parsed.duration || '1 hour',
      difficulty: parsed.difficulty || 'easy',
      seniorFriendly: parsed.seniorFriendly ?? true,
      distance: parsed.distance,
      reservationRequired: parsed.reservationRequired ?? false,
      sourceUrl: parsed.sourceUrl,
    };

    await addCustomEvent(activity);
  };

  const [showPool, setShowPool] = useState(true);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeActivity, setActiveActivity] = useState<Activity | null>(null);
  const [expandedDays, setExpandedDays] = useState<Set<string>>(new Set());

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Filter days by phase
  const filteredDays = useMemo(() => {
    if (!selectedPhase) return tripData.days;
    const phase = tripData.phases.find(p => p.id === selectedPhase);
    if (!phase) return tripData.days;
    return tripData.days.filter(d => phase.days.includes(d.dayNumber));
  }, [selectedPhase]);

  // Group days by phase for display
  const daysByPhase = useMemo(() => {
    const groups: { phase: TripPhase; days: typeof tripData.days }[] = [];

    tripData.phases.forEach(phase => {
      const phaseDays = filteredDays.filter(d => phase.days.includes(d.dayNumber));
      if (phaseDays.length > 0) {
        groups.push({ phase, days: phaseDays });
      }
    });

    return groups;
  }, [filteredDays]);

  const getPhaseForDay = (dayNumber: number): TripPhase | undefined => {
    return tripData.phases.find(p =>
      dayNumber >= p.startDay && dayNumber <= p.endDay
    );
  };

  const toggleDayExpand = (dayId: string) => {
    setExpandedDays(prev => {
      const next = new Set(prev);
      if (next.has(dayId)) {
        next.delete(dayId);
      } else {
        next.add(dayId);
      }
      return next;
    });
  };

  // Handle drag start
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveId(active.id as string);
    const activityId = active.id.toString().replace('scheduled-', '').split('|')[0];
    setActiveActivity(getActivity(activityId) || null);
  };

  // Handle drag end
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) {
      setActiveId(null);
      setActiveActivity(null);
      return;
    }

    const activeIdStr = active.id.toString();
    const overIdStr = over.id.toString();

    const isFromPool = !activeIdStr.startsWith('scheduled-');
    const activityId = isFromPool
      ? activeIdStr
      : activeIdStr.replace('scheduled-', '').split('|')[0];

    const isTargetDay = overIdStr.startsWith('day-');
    const targetDate = isTargetDay
      ? overIdStr.replace('day-', '')
      : overIdStr.startsWith('scheduled-')
        ? overIdStr.split('|')[1]
        : null;

    if (targetDate) {
      if (isFromPool) {
        // From pool to day
        addToDay(activityId, targetDate);
      } else {
        // From one day to another
        const sourceDate = activeIdStr.split('|')[1];
        if (sourceDate !== targetDate) {
          moveToDay(activityId, sourceDate, targetDate);
        }
      }
    } else if (overIdStr === 'activity-pool' && !isFromPool) {
      // Return to pool
      const sourceDate = activeIdStr.split('|')[1];
      returnToPool(activityId, sourceDate);
    }

    setActiveId(null);
    setActiveActivity(null);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
      </div>
    );
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Activity Pool - Sidebar */}
        {showPool && (
          <div className="lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-20">
              <ActivityPoolPanel
                activityIds={unscheduled}
                getActivity={getActivity}
                onClose={() => setShowPool(false)}
                onAutoSchedule={autoSchedule}
                onAddCustomActivity={handleAddCustomActivity}
              />
            </div>
          </div>
        )}

        {/* Main Calendar */}
        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={() => setShowPool(!showPool)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                showPool ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 border border-gray-200'
              }`}
            >
              <List className="w-4 h-4" />
              <span className="hidden sm:inline">Activity Pool</span>
              <span className="bg-white/20 px-1.5 rounded text-xs">{unscheduled.length}</span>
            </button>

            <button
              onClick={resetSchedule}
              className="flex items-center gap-2 px-3 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              title="Reset schedule"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden sm:inline">Reset</span>
            </button>

            {isSaving && (
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Loader2 className="w-3 h-3 animate-spin" />
                Saving...
              </div>
            )}

            <div className="flex-1" />

            {/* Quick actions */}
            <button
              onClick={() => setExpandedDays(new Set(tripData.days.map(d => d.id)))}
              className="text-xs text-gray-500 hover:text-gray-700"
            >
              Expand all
            </button>
            <button
              onClick={() => setExpandedDays(new Set())}
              className="text-xs text-gray-500 hover:text-gray-700"
            >
              Collapse all
            </button>
          </div>

          {/* Days grouped by phase */}
          <div className="space-y-6">
            {daysByPhase.map(({ phase, days }) => (
              <div key={phase.id}>
                {/* Phase header */}
                <div
                  className="flex items-center gap-3 mb-3 cursor-pointer"
                  onClick={() => onPhaseSelect?.(selectedPhase === phase.id ? null : phase.id)}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: phase.color }}
                  />
                  <h2 className="text-lg font-semibold text-gray-800">{phase.name}</h2>
                  <span className="text-sm text-gray-500">
                    Days {phase.startDay}-{phase.endDay}
                  </span>
                </div>

                {/* Days in phase */}
                <div className="space-y-2">
                  {days.map(day => (
                    <DayDropZone
                      key={day.id}
                      day={day}
                      phase={phase}
                      scheduledItems={schedule[day.date] || []}
                      getActivity={getActivity}
                      onRemove={removeFromDay}
                      isExpanded={expandedDays.has(day.id)}
                      onToggleExpand={() => toggleDayExpand(day.id)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Drag overlay */}
      <DragOverlay>
        {activeActivity && (
          <div className="opacity-90 max-w-sm">
            <SortableActivity
              id={activeId || ''}
              activity={activeActivity}
            />
          </div>
        )}
      </DragOverlay>
    </DndContext>
  );
}
