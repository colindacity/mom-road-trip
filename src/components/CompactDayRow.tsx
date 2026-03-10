'use client';

import { useState } from 'react';
import { DayPlan, TripPhase, Activity, Accommodation } from '@/types/trip';
import { format, parseISO } from 'date-fns';
import { ChevronRight, MapPin, Car, Camera, Bed, DollarSign, Clock, TrendingUp, ExternalLink, Navigation, Info, Play, Trash2, CalendarCheck, CalendarX, Star, Home, Trees, Building2, Hotel } from 'lucide-react';
import HistoricalWeather from './HistoricalWeather';

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

const dayTypeBadge = (day: DayPlan) => {
  const notes = (day.notes || []).join(' ').toLowerCase();
  const hasHiking = day.activities.some(a => a.distance && !a.distance.includes('boardwalk'));
  const hasDriving = !!day.drivingDistance;
  const maxMiles = day.activities.reduce((max, a) => {
    if (!a.distance) return max;
    const match = a.distance.match(/([\d.]+)\s*mile/i);
    return match ? Math.max(max, parseFloat(match[1])) : max;
  }, 0);

  if (notes.includes('rest day') || notes.includes('no hiking'))
    return { label: 'REST', color: 'bg-emerald-100 text-emerald-700' };
  if (notes.includes('hiking day') || (hasHiking && maxMiles >= 2))
    return { label: `HIKE ${maxMiles > 0 ? maxMiles + 'mi' : ''}`, color: 'bg-orange-100 text-orange-700' };
  if (notes.includes('driving day') || (hasDriving && !hasHiking))
    return { label: 'DRIVE', color: 'bg-blue-100 text-blue-700' };
  if (notes.includes('light day'))
    return { label: 'LIGHT', color: 'bg-gray-100 text-gray-600' };
  if (day.dayNumber === 1 || notes.includes('arrival'))
    return { label: 'ARRIVE', color: 'bg-purple-100 text-purple-700' };
  if (notes.includes('departure'))
    return { label: 'DEPART', color: 'bg-purple-100 text-purple-700' };
  return { label: 'LIGHT', color: 'bg-gray-100 text-gray-600' };
};

const accTypeIcon: Record<string, string> = {
  hotel: '🏨', motel: '🏨', inn: '🏨', lodge: '🏨',
  resort: '🏨', airbnb: '🏠', cabin: '🏕', condo: '🏠',
};

function AccOptionInline({ acc }: { acc: Accommodation }) {
  const url = acc.website || acc.bookingUrl;
  const inner = (
    <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] leading-tight ${
      acc.recommended ? 'bg-blue-50 text-blue-800 ring-1 ring-blue-200' : 'bg-gray-50 text-gray-600'
    }`}>
      <span>{accTypeIcon[acc.type] || '🏨'}</span>
      <span className="font-medium truncate max-w-[120px]">{acc.name.replace(/ \(.*?\)/, '')}</span>
      <span className="text-gray-400">·</span>
      <span className="font-semibold">{acc.priceRange}</span>
      {acc.reviewRating && (
        <>
          <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
          <span>{acc.reviewRating}</span>
        </>
      )}
      {acc.recommended && (
        <span className="px-1 py-px bg-blue-500 text-white text-[8px] font-bold rounded">TOP</span>
      )}
    </span>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
        className="hover:opacity-80 transition-opacity">
        {inner}
      </a>
    );
  }
  return inner;
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

  const visibleActivities = day.activities.filter(
    (activity) => !isActivityHidden?.(activity.id)
  );

  const badge = dayTypeBadge(day);
  const accOptions = day.accommodationOptions || (day.accommodation ? [day.accommodation] : []);

  return (
    <div className={`group transition-all ${isSelected ? 'bg-gray-50' : ''}`}>
      {/* Main row — info dense, no click needed for essentials */}
      <div
        onClick={onToggle}
        className="cursor-pointer hover:bg-gray-50/80 transition-colors"
      >
        {/* Top line: day info + title + badges */}
        <div className="flex items-center gap-2 py-2 px-3">
          {/* Day # + date */}
          <div
            className="w-16 shrink-0 flex items-baseline gap-1.5"
            style={{ color: phase?.color || '#374151' }}
          >
            <span className="text-lg font-bold leading-none">{day.dayNumber}</span>
            <span className="text-[10px] text-gray-400">{format(parseISO(day.date), 'EEE M/d')}</span>
          </div>

          {/* Title */}
          <div className="flex-1 min-w-0">
            <span className="text-sm font-medium text-gray-900">{day.title}</span>
          </div>

          {/* Day type badge */}
          <span className={`px-1.5 py-0.5 text-[10px] font-semibold rounded shrink-0 ${badge.color}`}>
            {badge.label}
          </span>

          {/* Driving */}
          {day.drivingDistance && (
            <span className="hidden sm:inline-flex items-center gap-0.5 text-[10px] text-gray-400 shrink-0">
              <Car className="w-3 h-3" />
              {day.drivingDistance}
            </span>
          )}

          {/* Budget */}
          {day.budgetBreakdown?.total && (
            <span className="text-[10px] text-gray-400 shrink-0 font-medium">
              ${day.budgetBreakdown.total}
            </span>
          )}

          {/* Expand */}
          <ChevronRight
            className={`w-3.5 h-3.5 text-gray-300 transition-transform shrink-0 ${
              isExpanded ? 'rotate-90' : ''
            }`}
          />
        </div>

        {/* Bottom line: accommodation options — always visible */}
        {accOptions.length > 0 && (
          <div className="flex items-center gap-1.5 px-3 pb-2 pl-[76px] flex-wrap">
            {accOptions.map((acc) => (
              <AccOptionInline key={acc.id} acc={acc} />
            ))}
          </div>
        )}
      </div>

      {/* Expanded content — detailed activities, weather, notes */}
      {isExpanded && (
        <div className="px-3 pb-3 pt-1 ml-10 border-l-2 border-gray-100 space-y-2">
          {/* Location + quick links */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {day.location.name}
            </span>
            {day.location.directionsUrl && (
              <a href={day.location.directionsUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500 text-white text-[10px] rounded hover:bg-blue-600 transition-colors">
                <Navigation className="w-3 h-3" /> Directions
              </a>
            )}
            {day.location.infoUrl && (
              <a href={day.location.infoUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-[10px] rounded hover:bg-gray-200 transition-colors">
                <Info className="w-3 h-3" /> Info
              </a>
            )}
            {day.location.video && (
              <a href={day.location.video.replace('/embed/', '/watch?v=')} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1 bg-red-500 text-white text-[10px] rounded hover:bg-red-600 transition-colors">
                <Play className="w-3 h-3" /> Video
              </a>
            )}
          </div>

          {/* Historical Weather */}
          {day.location.lat && day.location.lng && (
            <HistoricalWeather lat={day.location.lat} lng={day.location.lng} date={day.date} />
          )}

          {/* Summary */}
          {day.summary && (
            <p className="text-xs text-gray-500 italic">{day.summary}</p>
          )}

          {/* Activities */}
          <div className="space-y-1.5">
            {visibleActivities.map((activity, idx) => {
              const isConfirmed = isActivityConfirmed?.(activity.id);
              const isOpen = activityExpanded === activity.id;
              return (
              <div key={activity.id}>
                <div
                  onClick={() => setActivityExpanded(isOpen ? null : activity.id)}
                  className={`flex items-start gap-2 p-2 rounded-lg cursor-pointer transition-all text-xs ${
                    isConfirmed ? 'bg-green-50 border border-green-200' :
                    isOpen ? 'bg-white border border-gray-200 shadow-sm' :
                    'hover:bg-gray-50 border border-transparent'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                    isConfirmed ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {isConfirmed ? <CalendarCheck className="w-3 h-3" /> : idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-medium text-gray-900">{activity.name}</span>
                    <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                      <span className="text-gray-400">{activity.duration}</span>
                      {activity.distance && (
                        <span className="text-blue-500">{activity.distance}</span>
                      )}
                      {activity.cost && (
                        <span className="text-amber-600">{activity.cost}</span>
                      )}
                      {activity.reservationRequired && (
                        <span className="text-red-500 font-medium">Reservation req</span>
                      )}
                    </div>
                  </div>
                  <ChevronRight className={`w-3 h-3 text-gray-300 shrink-0 mt-0.5 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                </div>

                {/* Expanded activity */}
                {isOpen && (
                  <div className="ml-7 p-2.5 bg-gray-50 rounded-lg border border-gray-100 text-xs space-y-2 mt-1">
                    <p className="text-gray-600">{activity.description}</p>

                    {(activity.distance || activity.elevation) && (
                      <div className="flex flex-wrap gap-1.5">
                        {activity.distance && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 rounded">
                            <TrendingUp className="w-3 h-3" /> {activity.distance}
                          </span>
                        )}
                        {activity.elevation?.gain && (
                          <span className="px-2 py-0.5 bg-green-50 text-green-700 rounded">
                            ↑ {activity.elevation.gain} ft
                          </span>
                        )}
                      </div>
                    )}

                    {activity.tips && activity.tips.length > 0 && (
                      <ul className="space-y-0.5 text-gray-500">
                        {activity.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <span className="text-gray-300">•</span> {tip}
                          </li>
                        ))}
                      </ul>
                    )}

                    {activity.reservationUrl && (
                      <a href={activity.reservationUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                        Book Now <ExternalLink className="w-3 h-3" />
                      </a>
                    )}

                    {(onToggleConfirmed || onRemoveActivity) && (
                      <div className="flex items-center gap-2 pt-1 border-t border-gray-200">
                        {onToggleConfirmed && (
                          <button onClick={(e) => { e.stopPropagation(); onToggleConfirmed(activity.id); }}
                            className={`flex-1 flex items-center justify-center gap-1 px-2 py-1 rounded text-xs ${
                              isConfirmed ? 'bg-green-500 text-white' : 'bg-green-50 text-green-700 hover:bg-green-100'
                            }`}>
                            {isConfirmed ? <><CalendarCheck className="w-3 h-3" /> On Calendar</> : <><CalendarX className="w-3 h-3" /> Add to Calendar</>}
                          </button>
                        )}
                        {onRemoveActivity && (
                          <button onClick={(e) => { e.stopPropagation(); onRemoveActivity(activity, day.id, day.dayNumber); }}
                            className="flex items-center gap-1 px-2 py-1 bg-red-50 text-red-600 rounded text-xs hover:bg-red-100">
                            <Trash2 className="w-3 h-3" /> Remove
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
              );
            })}
          </div>

          {/* Notes */}
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
