'use client';

import { useState } from 'react';
import { DayPlan, TripPhase } from '@/types/trip';
import { format, parseISO } from 'date-fns';
import { Car, Sun, Cloud, CloudRain, Snowflake, Laptop, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { isToday } from '@/lib/dateUtils';

interface TripTableProps {
  days: DayPlan[];
  phases: TripPhase[];
  onSelectDay?: (dayNumber: number) => void;
}

const weatherIcon = (conditions?: string) => {
  if (!conditions) return null;
  const c = conditions.toLowerCase();
  if (c.includes('snow')) return <Snowflake className="w-3 h-3 text-blue-300" />;
  if (c.includes('rain') || c.includes('storm')) return <CloudRain className="w-3 h-3 text-blue-400" />;
  if (c.includes('cloud') || c.includes('overcast') || c.includes('variable')) return <Cloud className="w-3 h-3 text-gray-400" />;
  return <Sun className="w-3 h-3 text-amber-400" />;
};

const isWorkDay = (day: DayPlan) => day.title.toLowerCase().includes('work');

const getPhaseForDay = (dayNumber: number, phases: TripPhase[]) =>
  phases.find(p => dayNumber >= p.startDay && dayNumber <= p.endDay);

const activityBg = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('work') || n.includes('colin works')) return 'bg-blue-50 text-blue-700 border-blue-200';
  if (n.includes('drive') || n.includes('→') || n.includes('leave')) return 'bg-gray-50 text-gray-500 border-gray-200';
  if (n.includes('check in') || n.includes('drop bags')) return 'bg-white text-gray-400 border-gray-100';
  if (n.includes('hike') || n.includes('trail') || n.includes('avalanche')) return 'bg-orange-50 text-orange-700 border-orange-200';
  if (n.includes('lunch') || n.includes('dinner') || n.includes('buffet') || n.includes('breakfast')) return 'bg-rose-50 text-rose-600 border-rose-200';
  return 'bg-emerald-50 text-emerald-700 border-emerald-200';
};

const shortName = (name: string) =>
  name
    .replace('Check In & Drop Bags at Hotel', '🏨 Check in')
    .replace(/Colin Works — ?(Hotel|.*?\()/, '💻 Work')
    .replace('Colin Works Full Day', '💻 Work (full day)')
    .replace(/^Drive /, '🚗 ')
    .replace(/^Lunch /, '🍽 Lunch ')
    .replace(/^Dinner /, '🍽 Dinner ')
    .replace('Bacchanal Buffet', '🍽 Bacchanal Buffet')
    .replace('Fremont Street', '🎰 Fremont St');

const shortTime = (t?: string) =>
  t?.replace(':00', '').replace(' AM', 'a').replace(' PM', 'p') || '';

export default function TripTable({ days, phases, onSelectDay }: TripTableProps) {
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  const toggleRow = (dayNum: number) => {
    setExpandedRows(prev => {
      const next = new Set(prev);
      next.has(dayNum) ? next.delete(dayNum) : next.add(dayNum);
      return next;
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 px-3 py-2 flex items-center justify-between">
        <span className="text-xs font-semibold text-gray-500">
          {days.length} days &middot; {days.reduce((s, d) => s + d.activities.length, 0)} activities
        </span>
        <span className="text-xs text-gray-400">
          Click any row to expand &middot; Double-click for timeline view
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead className="sticky top-0 z-10 bg-white">
            <tr className="border-b border-gray-200">
              <th className="w-1 p-0"></th>
              <th className="px-2 py-2 text-left text-[10px] font-semibold text-gray-400 uppercase tracking-wider w-20">Date</th>
              <th className="px-2 py-2 text-left text-[10px] font-semibold text-gray-400 uppercase tracking-wider w-10">D#</th>
              <th className="px-2 py-2 text-left text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Title</th>
              <th className="px-2 py-2 text-left text-[10px] font-semibold text-gray-400 uppercase tracking-wider w-28 hidden lg:table-cell">Overnight</th>
              <th className="px-2 py-2 text-center text-[10px] font-semibold text-gray-400 uppercase tracking-wider w-14 hidden md:table-cell">Wx</th>
              <th className="px-2 py-2 text-right text-[10px] font-semibold text-gray-400 uppercase tracking-wider w-16 hidden md:table-cell">Drive</th>
              <th className="px-2 py-2 text-right text-[10px] font-semibold text-gray-400 uppercase tracking-wider w-14">Cost</th>
              <th className="px-2 py-2 text-center text-[10px] font-semibold text-gray-400 uppercase tracking-wider w-8"></th>
            </tr>
          </thead>
          <tbody>
            {days.map((day) => {
              const phase = getPhaseForDay(day.dayNumber, phases);
              const work = isWorkDay(day);
              const d = parseISO(day.date);
              const expanded = expandedRows.has(day.dayNumber);
              const phaseColor = phase?.color || '#6b7280';

              const today_ = isToday(day.date);
              return (
                <tr
                  key={day.id}
                  className={`border-b border-gray-100 hover:bg-gray-50/60 cursor-pointer transition-colors ${work ? 'bg-blue-50/20' : ''} ${today_ ? 'bg-amber-50 ring-1 ring-amber-300' : ''}`}
                  onClick={() => toggleRow(day.dayNumber)}
                  onDoubleClick={() => onSelectDay?.(day.dayNumber)}
                >
                  {/* Phase color strip */}
                  <td className="w-1 p-0">
                    <div className="w-1 h-full min-h-[40px]" style={{ backgroundColor: phaseColor }} />
                  </td>

                  {/* Date (primary) */}
                  <td className="px-2 py-2 align-top whitespace-nowrap">
                    <div className="text-gray-800 font-bold leading-tight">{format(d, 'EEE')}</div>
                    <div className="text-gray-600 text-[11px] font-medium leading-tight">{format(d, 'MMM d')}</div>
                    {today_ && <div className="text-[8px] font-bold mt-0.5 text-amber-700 bg-amber-200 px-1 py-px rounded inline-block">TODAY</div>}
                  </td>

                  {/* Day number (secondary) */}
                  <td className="px-2 py-2 align-top">
                    <div className="flex items-center gap-1">
                      <span className="font-mono text-[10px] text-gray-400">d{day.dayNumber}</span>
                      {work && <Laptop className="w-3 h-3 text-blue-400" />}
                    </div>
                  </td>

                  {/* Title + Activities */}
                  <td className="px-2 py-2 align-top">
                    <div className="font-medium text-gray-800 text-xs mb-1">{day.title}</div>
                    {expanded ? (
                      <div className="space-y-1 mt-1.5">
                        {day.activities.map((a) => (
                          <div key={a.id} className={`flex items-start gap-1.5 px-1.5 py-1 rounded border text-[10px] ${activityBg(a.name)}`}>
                            {a.startTime && (
                              <span className="font-bold shrink-0 w-8 text-right opacity-70">{shortTime(a.startTime)}</span>
                            )}
                            <div className="flex-1 min-w-0">
                              <span>{shortName(a.name)}</span>
                              <span className="text-[9px] opacity-60 ml-1">({a.duration})</span>
                              {a.optionalSkip && <span className="ml-1 text-[8px] px-1 py-px bg-gray-200 text-gray-500 rounded">flex</span>}
                            </div>
                            {a.url && (
                              <a href={a.url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="shrink-0 opacity-40 hover:opacity-100">
                                <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-0.5">
                        {day.activities.slice(0, 5).map((a) => (
                          <span key={a.id} className={`px-1 py-0.5 rounded text-[9px] ${activityBg(a.name)}`}>
                            {shortTime(a.startTime)}{shortTime(a.startTime) ? ' ' : ''}{shortName(a.name).slice(0, 18)}{shortName(a.name).length > 18 ? '…' : ''}
                          </span>
                        ))}
                        {day.activities.length > 5 && (
                          <span className="px-1 py-0.5 text-[9px] text-gray-400">+{day.activities.length - 5}</span>
                        )}
                      </div>
                    )}
                  </td>

                  {/* Overnight */}
                  <td className="px-2 py-2 align-top hidden lg:table-cell">
                    <div className="text-[10px] text-gray-500 truncate max-w-[110px]" title={day.overnight || ''}>
                      {(day.overnight || day.location.name)
                        .replace(', NV', '').replace(', UT', '').replace(', AZ', '')
                        .replace(', MT', '').replace(', ID', '').replace(', WY', '')
                        .replace(' (Teton Valley)', '')}
                    </div>
                    {day.accommodation?.pricePerNight && (
                      <div className="text-[9px] text-gray-400">${day.accommodation.pricePerNight}/n</div>
                    )}
                  </td>

                  {/* Weather */}
                  <td className="px-2 py-2 align-top text-center hidden md:table-cell">
                    {day.weather && (
                      <div className="flex flex-col items-center">
                        {weatherIcon(day.weather.conditions)}
                        <span className="text-[10px] text-gray-400 mt-0.5">{day.weather.high}°</span>
                      </div>
                    )}
                  </td>

                  {/* Drive */}
                  <td className="px-2 py-2 align-top text-right hidden md:table-cell">
                    {day.drivingDistance && (
                      <div className="flex items-center justify-end gap-0.5 text-gray-400">
                        <Car className="w-3 h-3" />
                        <span className="text-[10px]">{day.drivingDistance.split(' ')[0]}mi</span>
                      </div>
                    )}
                    {day.drivingTime && (
                      <div className="text-[9px] text-gray-300">{day.drivingTime.split(' (')[0]}</div>
                    )}
                  </td>

                  {/* Cost */}
                  <td className="px-2 py-2 align-top text-right">
                    <span className="font-medium text-gray-600">
                      {day.budgetBreakdown?.total ? `$${day.budgetBreakdown.total}` : ''}
                    </span>
                  </td>

                  {/* Expand */}
                  <td className="px-1 py-2 align-top text-center">
                    {expanded ? (
                      <ChevronUp className="w-3 h-3 text-gray-300 mx-auto" />
                    ) : (
                      <ChevronDown className="w-3 h-3 text-gray-300 mx-auto" />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 border-t border-gray-200 px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3 text-[10px]">
          <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">Activity</span>
          <span className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">Work</span>
          <span className="px-1.5 py-0.5 rounded bg-gray-50 text-gray-500 border border-gray-200">Drive</span>
          <span className="px-1.5 py-0.5 rounded bg-orange-50 text-orange-700 border border-orange-200">Hike</span>
          <span className="px-1.5 py-0.5 rounded bg-rose-50 text-rose-600 border border-rose-200">Dining</span>
        </div>
        <div className="text-xs font-bold text-gray-700">
          Total: ${days.reduce((s, d) => s + (d.budgetBreakdown?.total || 0), 0).toLocaleString()}
        </div>
      </div>
    </div>
  );
}
