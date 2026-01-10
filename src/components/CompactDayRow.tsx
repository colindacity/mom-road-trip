'use client';

import { useState } from 'react';
import { DayPlan, TripPhase, Activity } from '@/types/trip';
import { format, parseISO } from 'date-fns';
import { ChevronRight, MapPin, Car, Camera, Bed, DollarSign, Clock, TrendingUp, ExternalLink, Navigation, Info, Play, Trash2, CalendarCheck, CalendarX } from 'lucide-react';

interface CompactDayRowProps {
  day: DayPlan;
  phase?: TripPhase;
  isExpanded: boolean;
  isSelected: boolean;
  onToggle: () => void;
  onSelect: () => void;
  onRemoveActivity?: (activity: Activity, dayId: string, dayNumber: number) => void;
  onToggleConfirmed?: (activityId: string) => void;
  isActivityHidden?: (activityId: string) => boolean;
  isActivityConfirmed?: (activityId: string) => boolean;
}

export default function CompactDayRow({
  day,
  phase,
  isExpanded,
  isSelected,
  onToggle,
  onSelect,
  onRemoveActivity,
  onToggleConfirmed,
  isActivityHidden,
  isActivityConfirmed,
}: CompactDayRowProps) {
  const [activityExpanded, setActivityExpanded] = useState<string | null>(null);

  // Filter out hidden activities
  const visibleActivities = day.activities.filter(
    (activity) => !isActivityHidden?.(activity.id)
  );

  // Use location image or fallback
  const imageUrl = day.location.image || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80';

  // Format date with day of week
  const formattedDate = format(parseISO(day.date), 'EEE, MMM d');
  const dayOfWeek = format(parseISO(day.date), 'EEEE');

  return (
    <div
      className={`group transition-all ${isSelected ? 'bg-gray-50' : ''}`}
    >
      {/* Main row - compact */}
      <div
        onClick={onToggle}
        className="flex items-center gap-3 py-2.5 px-3 cursor-pointer hover:bg-gray-50 transition-colors"
      >
        {/* Day number & date */}
        <div
          className="w-14 shrink-0 text-center"
          style={{ color: phase?.color || '#374151' }}
        >
          <div className="text-[10px] uppercase tracking-wide text-gray-400">{format(parseISO(day.date), 'EEE')}</div>
          <div className="text-lg font-bold leading-tight">{day.dayNumber}</div>
          <div className="text-[10px] text-gray-400">{format(parseISO(day.date), 'MMM d')}</div>
        </div>

        {/* Thumbnail */}
        <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-gray-100">
          <img
            src={imageUrl}
            alt={day.location.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title & location */}
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-gray-900 truncate">{day.title}</div>
          <div className="text-xs text-gray-500 flex items-center gap-1.5">
            <MapPin className="w-3 h-3" />
            <span className="truncate">{day.location.name}</span>
          </div>
        </div>

        {/* Quick stats */}
        <div className="hidden sm:flex items-center gap-3 text-xs text-gray-400">
          {day.drivingDistance && (
            <span className="flex items-center gap-1">
              <Car className="w-3 h-3" />
              {day.drivingDistance}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Camera className="w-3 h-3" />
            {visibleActivities.length}
          </span>
          {day.budgetBreakdown?.total && (
            <span className="flex items-center gap-1">
              <DollarSign className="w-3 h-3" />
              {day.budgetBreakdown.total}
            </span>
          )}
        </div>

        {/* Expand indicator */}
        <ChevronRight
          className={`w-4 h-4 text-gray-400 transition-transform ${
            isExpanded ? 'rotate-90' : ''
          }`}
        />
      </div>

      {/* Expanded content */}
      {isExpanded && (
        <div className="px-3 pb-3 pt-1 ml-10 border-l border-gray-100 space-y-2">
          {/* Location image banner */}
          {day.location.image && (
            <div className="w-full h-32 -mx-3 rounded overflow-hidden relative">
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

          {/* Quick action buttons for location */}
          <div className="flex items-center gap-2 flex-wrap">
            {day.location.directionsUrl && (
              <a
                href={day.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                Directions
              </a>
            )}
            {day.location.infoUrl && (
              <a
                href={day.location.infoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 text-xs rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Info className="w-3.5 h-3.5" />
                Info
              </a>
            )}
            {day.location.video && (
              <a
                href={day.location.video.replace('/embed/', '/watch?v=')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-500 text-white text-xs rounded-lg hover:bg-red-600 transition-colors"
              >
                <Play className="w-3.5 h-3.5" />
                Video
              </a>
            )}
          </div>

          {/* Summary row */}
          {day.summary && (
            <p className="text-xs text-gray-500 italic">{day.summary}</p>
          )}

          {/* Activities list - rich cards */}
          <div className="space-y-2">
            {visibleActivities.map((activity, idx) => {
              const isConfirmed = isActivityConfirmed?.(activity.id);
              return (
              <div key={activity.id} className="group/activity">
                <div
                  className={`rounded-lg border transition-all ${
                    isConfirmed
                      ? 'border-green-200 bg-green-50/50 ring-1 ring-green-200'
                      : activityExpanded === activity.id
                      ? 'border-gray-200 bg-white shadow-sm'
                      : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {/* Activity header */}
                  <div
                    onClick={() => setActivityExpanded(
                      activityExpanded === activity.id ? null : activity.id
                    )}
                    className="flex items-start gap-3 p-2.5 cursor-pointer"
                  >
                    {/* Activity number/icon */}
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      isConfirmed
                        ? 'bg-green-500 text-white'
                        : activity.seniorFriendly
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {isConfirmed ? <CalendarCheck className="w-3.5 h-3.5" /> : idx + 1}
                    </div>

                    {/* Activity thumbnail if available */}
                    {activity.image && (
                      <div className="w-16 h-12 rounded overflow-hidden shrink-0 bg-gray-100">
                        <img
                          src={activity.image}
                          alt={activity.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 text-sm">{activity.name}</div>
                      {activity.summary && (
                        <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{activity.summary || activity.description}</p>
                      )}

                      {/* Quick badges */}
                      <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded">
                          <Clock className="w-2.5 h-2.5" />
                          {activity.duration}
                        </span>
                        <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                          activity.difficulty === 'easy' ? 'bg-green-50 text-green-600' :
                          activity.difficulty === 'moderate' ? 'bg-yellow-50 text-yellow-600' :
                          'bg-red-50 text-red-600'
                        }`}>
                          {activity.difficulty}
                        </span>
                        {activity.seniorFriendly && (
                          <span className="px-1.5 py-0.5 bg-green-50 text-green-600 text-[10px] rounded">
                            Senior OK
                          </span>
                        )}
                        {activity.cost && (
                          <span className="px-1.5 py-0.5 bg-amber-50 text-amber-600 text-[10px] rounded">
                            {activity.cost}
                          </span>
                        )}
                        {activity.reservationRequired && (
                          <span className="px-1.5 py-0.5 bg-red-50 text-red-600 text-[10px] rounded">
                            Reservation
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Expand chevron */}
                    <ChevronRight className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${
                      activityExpanded === activity.id ? 'rotate-90' : ''
                    }`} />
                  </div>

                {/* Expanded activity details */}
                {activityExpanded === activity.id && (
                  <div className="mt-1 p-3 bg-gray-50 rounded-lg border border-gray-100 text-xs space-y-2">
                    <p className="text-gray-600">{activity.description}</p>

                    {/* Hiking/trail details */}
                    {(activity.distance || activity.elevation) && (
                      <div className="flex flex-wrap gap-2 py-1.5 border-t border-gray-200 mt-2 pt-2">
                        {activity.distance && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded">
                            <TrendingUp className="w-3 h-3" />
                            {activity.distance}
                          </span>
                        )}
                        {activity.elevation?.gain && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 rounded">
                            ↑ {activity.elevation.gain} ft gain
                          </span>
                        )}
                        {activity.elevation?.highest && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded">
                            Peak: {activity.elevation.highest.toLocaleString()} ft
                          </span>
                        )}
                      </div>
                    )}

                    {/* Points of interest */}
                    {activity.pointsOfInterest && activity.pointsOfInterest.length > 0 && (
                      <div className="border-t border-gray-200 pt-2">
                        <div className="text-[10px] uppercase text-gray-400 font-medium mb-1">Highlights</div>
                        <div className="flex flex-wrap gap-1.5">
                          {activity.pointsOfInterest.map((poi, i) => (
                            <span key={i} className="px-2 py-1 bg-amber-50 text-amber-700 rounded text-[10px]">
                              {poi}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tips */}
                    {activity.tips && activity.tips.length > 0 && (
                      <div className="border-t border-gray-200 pt-2">
                        <div className="text-[10px] uppercase text-gray-400 font-medium mb-1">Tips</div>
                        <ul className="space-y-1">
                          {activity.tips.map((tip, i) => (
                            <li key={i} className="text-gray-500 flex items-start gap-1">
                              <span className="text-gray-300">•</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Booking link */}
                    {activity.reservationRequired && (
                      <div className="border-t border-gray-200 pt-2 flex items-center justify-between">
                        <span className="text-orange-600 font-medium">Reservation required</span>
                        {activity.reservationUrl && (
                          <a
                            href={activity.reservationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                          >
                            Book Now <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    )}

                    {/* External link */}
                    {activity.url && (
                      <div className="border-t border-gray-200 pt-2">
                        <a
                          href={activity.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-700"
                        >
                          More info <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}

                    {/* Action buttons */}
                    {(onToggleConfirmed || onRemoveActivity) && (
                      <div className="border-t border-gray-200 pt-2 flex items-center gap-2">
                        {onToggleConfirmed && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleConfirmed(activity.id);
                            }}
                            className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded text-xs transition-colors ${
                              isConfirmed
                                ? 'bg-green-500 text-white hover:bg-green-600'
                                : 'bg-green-50 text-green-700 hover:bg-green-100'
                            }`}
                          >
                            {isConfirmed ? (
                              <>
                                <CalendarCheck className="w-3.5 h-3.5" />
                                On Calendar
                              </>
                            ) : (
                              <>
                                <CalendarX className="w-3.5 h-3.5" />
                                Add to Calendar
                              </>
                            )}
                          </button>
                        )}
                        {onRemoveActivity && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onRemoveActivity(activity, day.id, day.dayNumber);
                            }}
                            className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-600 rounded text-xs hover:bg-red-100 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            Remove
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                )}
                </div>
              </div>
            );
            }
            )}
          </div>

          {/* Accommodation - compact */}
          {day.accommodation && (
            <div className="flex items-center gap-2 text-xs text-gray-500 pt-1 border-t border-gray-50">
              <Bed className="w-3 h-3" />
              <span className="font-medium text-gray-600">{day.accommodation.name}</span>
              <span className="text-gray-400">·</span>
              <span>{day.accommodation.priceRange}</span>
            </div>
          )}

          {/* Notes - compact */}
          {day.notes && day.notes.length > 0 && (
            <div className="text-xs text-amber-600 bg-amber-50 rounded px-2 py-1.5">
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
