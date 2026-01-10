'use client';

import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { format, parseISO } from 'date-fns';
import { DayPlan, TripPhase, Activity } from '@/types/trip';
import { ScheduledItem } from '@/types/schedule';
import SortableActivity from './SortableActivity';
import { MapPin, Car, Bed, Sun, Cloud, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface DayDropZoneProps {
  day: DayPlan;
  phase?: TripPhase;
  scheduledItems: ScheduledItem[];
  getActivity: (id: string) => Activity | undefined;
  onRemove: (activityId: string, date: string) => void;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

export default function DayDropZone({
  day,
  phase,
  scheduledItems,
  getActivity,
  onRemove,
  isExpanded = false,
  onToggleExpand,
}: DayDropZoneProps) {
  const dateStr = day.date;
  const parsedDate = parseISO(day.date);

  const { setNodeRef, isOver } = useDroppable({
    id: `day-${dateStr}`,
  });

  const hasScheduledActivities = scheduledItems.length > 0;
  const phaseColor = phase?.color || '#6b7280';

  // Weather icon
  const WeatherIcon = day.weather?.conditions?.toLowerCase().includes('cloud') ? Cloud : Sun;

  return (
    <div
      ref={setNodeRef}
      className={`
        border rounded-lg overflow-hidden transition-all
        ${isOver ? 'ring-2 ring-blue-400 ring-offset-2 bg-blue-50' : 'bg-white border-gray-100'}
      `}
    >
      {/* Compact header - always visible */}
      <div
        onClick={onToggleExpand}
        className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-50 transition-colors"
        style={{ borderLeft: `4px solid ${phaseColor}` }}
      >
        {/* Day number */}
        <div
          className="w-12 h-12 rounded-lg flex flex-col items-center justify-center text-white shrink-0"
          style={{ backgroundColor: phaseColor }}
        >
          <span className="text-lg font-bold">{day.dayNumber}</span>
          <span className="text-[10px] uppercase">{format(parsedDate, 'EEE')}</span>
        </div>

        {/* Day info */}
        <div className="flex-1 min-w-0">
          <div className="font-medium text-gray-900 truncate">{day.title}</div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {day.location.name}
            </span>
            {day.drivingDistance && (
              <span className="flex items-center gap-1">
                <Car className="w-3 h-3" />
                {day.drivingDistance}
              </span>
            )}
          </div>
        </div>

        {/* Weather */}
        {day.weather && (
          <div className="hidden sm:flex items-center gap-1 text-xs text-gray-400">
            <WeatherIcon className="w-4 h-4" />
            <span>{day.weather.high}°/{day.weather.low}°</span>
          </div>
        )}

        {/* Scheduled count */}
        {hasScheduledActivities && (
          <div className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
            {scheduledItems.length} activities
          </div>
        )}

        {/* Expand icon */}
        {isExpanded ? (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-400" />
        )}
      </div>

      {/* Expanded content */}
      {isExpanded && (
        <div className="px-4 pb-4 pt-2 space-y-3 border-t border-gray-100">
          {/* Summary */}
          {day.summary && (
            <p className="text-sm text-gray-600 italic">{day.summary}</p>
          )}

          {/* Location image */}
          {day.location.image && (
            <div className="h-32 rounded-lg overflow-hidden relative">
              <img
                src={day.location.image}
                alt={day.location.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-2 left-3 text-white text-xs font-medium">
                {day.location.name}
              </div>
            </div>
          )}

          {/* Scheduled activities - droppable area */}
          <div className="min-h-[60px] border-2 border-dashed border-gray-200 rounded-lg p-2">
            <SortableContext
              items={scheduledItems.map(item => `scheduled-${item.activityId}|${dateStr}`)}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-2">
                {scheduledItems.map(item => {
                  const activity = getActivity(item.activityId);
                  if (!activity) return null;
                  return (
                    <SortableActivity
                      key={item.id}
                      id={`scheduled-${item.activityId}|${dateStr}`}
                      activity={activity}
                      onRemove={() => onRemove(item.activityId, dateStr)}
                      compact
                    />
                  );
                })}

                {scheduledItems.length === 0 && (
                  <div className="text-center py-4 text-gray-400 text-sm">
                    Drag activities here
                  </div>
                )}
              </div>
            </SortableContext>
          </div>

          {/* Original activities (from tripData) */}
          {day.activities.length > 0 && (
            <div className="pt-2 border-t border-gray-100">
              <div className="text-xs text-gray-500 font-medium mb-2">
                Suggested Activities
              </div>
              <div className="space-y-1.5">
                {day.activities.map((activity, index) => (
                  <div
                    key={activity.id}
                    className="flex items-center gap-2 text-sm text-gray-600 p-2 bg-gray-50 rounded-lg"
                  >
                    <span className="w-5 h-5 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs font-medium">
                      {index + 1}
                    </span>
                    <span className="flex-1 truncate">{activity.name}</span>
                    <span className="text-xs text-gray-400">{activity.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Accommodation */}
          {day.accommodation && (
            <div className="flex items-center gap-2 text-xs text-gray-500 pt-2 border-t border-gray-100">
              <Bed className="w-3 h-3" />
              <span className="font-medium text-gray-600">{day.accommodation.name}</span>
              <span className="text-gray-400">·</span>
              <span>{day.accommodation.priceRange}</span>
            </div>
          )}

          {/* Notes */}
          {day.notes && day.notes.length > 0 && (
            <div className="text-xs bg-amber-50 text-amber-700 rounded px-2 py-1.5">
              {day.notes.map((note, i) => (
                <span key={i}>{i > 0 ? ' • ' : ''}{note}</span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
