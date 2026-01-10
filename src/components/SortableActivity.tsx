'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Activity } from '@/types/trip';
import {
  MapPin,
  Clock,
  Camera,
  X,
  GripVertical,
  ExternalLink,
  Mountain,
  Car,
} from 'lucide-react';

interface SortableActivityProps {
  id: string;
  activity: Activity;
  onRemove?: () => void;
  onClick?: () => void;
  compact?: boolean;
}

const difficultyColors: Record<string, string> = {
  easy: 'bg-green-100 text-green-700 border-green-200',
  moderate: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  strenuous: 'bg-red-100 text-red-700 border-red-200',
};

export default function SortableActivity({
  id,
  activity,
  onRemove,
  onClick,
  compact = false,
}: SortableActivityProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const isHike = activity.distance || activity.elevation;
  const difficultyClass = difficultyColors[activity.difficulty || 'easy'] || difficultyColors.easy;

  if (compact) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className={`
          group relative flex items-center gap-2 px-3 py-2 rounded-lg border
          bg-white border-gray-200 hover:shadow-md transition-all
          ${isDragging ? 'shadow-lg ring-2 ring-blue-400' : ''}
        `}
      >
        {/* Drag handle */}
        <div
          {...attributes}
          {...listeners}
          className="p-1 cursor-grab hover:bg-gray-100 rounded"
        >
          <GripVertical className="w-4 h-4 text-gray-400" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="font-medium text-sm text-gray-800 truncate">
            {activity.name}
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            {activity.duration && (
              <span className="flex items-center gap-0.5">
                <Clock className="w-3 h-3" />
                {activity.duration}
              </span>
            )}
            {activity.seniorFriendly && (
              <span className="text-green-600 text-[10px]">Senior OK</span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 shrink-0">
          {onClick && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              className="p-1.5 hover:bg-gray-100 rounded transition-colors text-blue-600"
              title="View details"
            >
              <ExternalLink className="w-4 h-4" />
            </button>
          )}
          {onRemove && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemove();
              }}
              className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded transition-opacity"
              title="Remove"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          )}
        </div>
      </div>
    );
  }

  // Full card (for activity pool)
  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        group relative p-3 rounded-xl border cursor-grab
        bg-white border-gray-200 hover:shadow-md transition-all
        ${isDragging ? 'shadow-lg ring-2 ring-blue-400' : ''}
      `}
      {...attributes}
      {...listeners}
    >
      {/* Header */}
      <div className="flex items-start gap-2 mb-2">
        <div className="p-1.5 rounded-lg bg-gray-100">
          {isHike ? (
            <Mountain className="w-4 h-4 text-green-600" />
          ) : (
            <Camera className="w-4 h-4 text-amber-600" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-800 text-sm leading-tight">
            {activity.name}
          </h3>
          {activity.description && (
            <p className="text-xs text-gray-500 line-clamp-2 mt-0.5">
              {activity.description}
            </p>
          )}
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-wrap gap-1.5 text-xs">
        <span className={`px-2 py-0.5 rounded-full border ${difficultyClass}`}>
          {activity.difficulty || 'easy'}
        </span>

        {activity.duration && (
          <span className="flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded-full text-gray-600">
            <Clock className="w-3 h-3" />
            {activity.duration}
          </span>
        )}

        {activity.distance && (
          <span className="flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full">
            <MapPin className="w-3 h-3" />
            {activity.distance}
          </span>
        )}

        {activity.seniorFriendly && (
          <span className="px-2 py-0.5 bg-green-50 text-green-700 rounded-full">
            Senior OK
          </span>
        )}

        {activity.reservationRequired && (
          <span className="px-2 py-0.5 bg-red-50 text-red-700 rounded-full">
            Reservation
          </span>
        )}
      </div>

      {/* Trailhead/Location */}
      {activity.trailhead && (
        <div className="mt-2 flex items-center gap-1 text-xs text-gray-500">
          <Car className="w-3 h-3" />
          <span>{activity.trailhead.name || 'Trailhead'}</span>
        </div>
      )}

      {/* Remove button */}
      {onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded transition-opacity"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>
      )}
    </div>
  );
}
