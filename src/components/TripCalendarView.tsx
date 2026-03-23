'use client';

import { useState, useMemo } from 'react';
import { tripData } from '@/data/tripData';
import { DayPlan, TripPhase } from '@/types/trip';
import { format, parseISO, startOfWeek, addDays, isSameDay } from 'date-fns';
import { Car, Sun, Cloud, CloudRain, Snowflake, Mountain, Laptop, Plane, Bed, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

type CalViewMode = 'month' | 'week' | 'phase';

const PHASE_COLORS: Record<string, string> = {
  southwest: '#ef4444',
  utah: '#f59e0b',
  slc_tetons: '#22c55e',
  yellowstone_glacier: '#06b6d4',
};

const weatherIcon = (conditions?: string) => {
  if (!conditions) return null;
  const c = conditions.toLowerCase();
  if (c.includes('snow')) return <Snowflake className="w-2.5 h-2.5 text-blue-300" />;
  if (c.includes('rain')) return <CloudRain className="w-2.5 h-2.5 text-blue-400" />;
  if (c.includes('cloud') || c.includes('variable')) return <Cloud className="w-2.5 h-2.5 text-gray-400" />;
  return <Sun className="w-2.5 h-2.5 text-amber-400" />;
};

const isWorkDay = (day: DayPlan) => {
  const title = day.title.toLowerCase();
  return title.includes('work');
};

const hasDrive = (day: DayPlan) => !!day.drivingDistance;

function DayCell({ day, phase, onClick }: { day?: DayPlan; phase?: TripPhase; onClick?: () => void }) {
  if (!day) return <div className="min-h-[100px] bg-gray-50/50 border-r border-b border-gray-100" />;

  const work = isWorkDay(day);
  const drive = hasDrive(day);
  const phaseColor = phase ? PHASE_COLORS[phase.id] || '#6b7280' : '#6b7280';

  return (
    <div
      onClick={onClick}
      className={`min-h-[100px] border-r border-b border-gray-100 p-1.5 cursor-pointer hover:bg-gray-50 transition-colors overflow-hidden ${
        work ? 'bg-blue-50/30' : ''
      }`}
    >
      {/* Date header */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-1">
          <span className="text-xs font-bold" style={{ color: phaseColor }}>{day.dayNumber}</span>
          <span className="text-[9px] text-gray-400">{format(parseISO(day.date), 'M/d')}</span>
        </div>
        <div className="flex items-center gap-0.5">
          {day.weather && (
            <span className="flex items-center gap-0.5 text-[9px] text-gray-400">
              {weatherIcon(day.weather.conditions)}
              {day.weather.high}°
            </span>
          )}
        </div>
      </div>

      {/* Location bar */}
      <div
        className="text-[8px] font-medium text-white px-1 py-0.5 rounded mb-1 truncate"
        style={{ backgroundColor: phaseColor }}
      >
        {day.overnight || day.location.name}
      </div>

      {/* Activities */}
      <div className="space-y-0.5">
        {day.activities.slice(0, 4).map((activity, idx) => {
          const isWork = activity.name.toLowerCase().includes('work');
          const isDrive = activity.name.toLowerCase().includes('drive') || activity.name.includes('→');
          const isHike = activity.distance && !activity.name.toLowerCase().includes('boardwalk');

          return (
            <div
              key={activity.id}
              className={`text-[9px] px-1 py-0.5 rounded truncate ${
                isWork ? 'bg-blue-100 text-blue-700' :
                isDrive ? 'bg-gray-100 text-gray-600' :
                isHike ? 'bg-orange-50 text-orange-700' :
                'bg-green-50 text-green-700'
              }`}
            >
              {activity.startTime && (
                <span className="font-medium mr-0.5">{activity.startTime.replace(':00', '').replace(' AM', 'a').replace(' PM', 'p')}</span>
              )}
              {activity.name.length > 30 ? activity.name.slice(0, 28) + '...' : activity.name}
            </div>
          );
        })}
        {day.activities.length > 4 && (
          <div className="text-[8px] text-gray-400 px-1">+{day.activities.length - 4} more</div>
        )}
      </div>

      {/* Drive indicator */}
      {drive && (
        <div className="flex items-center gap-0.5 text-[8px] text-gray-400 mt-1">
          <Car className="w-2.5 h-2.5" />
          {day.drivingDistance?.replace(' miles', 'mi').split(' (')[0]}
        </div>
      )}
    </div>
  );
}

export default function TripCalendarView({ onSelectDay }: { onSelectDay?: (dayNum: number) => void }) {
  const [viewMode, setViewMode] = useState<CalViewMode>('month');
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);

  const days = tripData.days;
  const phases = tripData.phases;
  const startDate = parseISO(tripData.startDate);

  // Build day lookup
  const dayByDate = useMemo(() => {
    const map = new Map<string, DayPlan>();
    days.forEach(d => map.set(d.date, d));
    return map;
  }, [days]);

  const getPhase = (dayNum: number) => phases.find(p => dayNum >= p.startDay && dayNum <= p.endDay);

  // Month view: show full calendar grid
  const monthGrid = useMemo(() => {
    const firstDay = parseISO(days[0].date);
    const lastDay = parseISO(days[days.length - 1].date);
    const weekStart = startOfWeek(firstDay, { weekStartsOn: 1 }); // Monday start

    const weeks: (DayPlan | null)[][] = [];
    let current = weekStart;

    while (current <= addDays(lastDay, 6)) {
      const week: (DayPlan | null)[] = [];
      for (let i = 0; i < 7; i++) {
        const dateStr = format(current, 'yyyy-MM-dd');
        const day = dayByDate.get(dateStr) || null;
        week.push(day);
        current = addDays(current, 1);
      }
      // Only include weeks that have at least one trip day
      if (week.some(d => d !== null)) {
        weeks.push(week);
      }
    }
    return weeks;
  }, [days, dayByDate]);

  // Week view
  const weekDays = useMemo(() => {
    const weekStart = addDays(startDate, weekOffset * 7);
    return Array.from({ length: 7 }, (_, i) => {
      const date = addDays(weekStart, i);
      const dateStr = format(date, 'yyyy-MM-dd');
      return dayByDate.get(dateStr) || null;
    });
  }, [startDate, weekOffset, dayByDate]);

  const maxWeeks = Math.ceil(days.length / 7);

  // Phase view
  const phaseDays = useMemo(() => {
    if (!selectedPhase) return days;
    const phase = phases.find(p => p.id === selectedPhase);
    if (!phase) return days;
    return days.filter(d => d.dayNumber >= phase.startDay && d.dayNumber <= phase.endDay);
  }, [days, phases, selectedPhase]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-100">
        <div className="flex items-center gap-1">
          {(['month', 'week', 'phase'] as CalViewMode[]).map(mode => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-2.5 py-1 text-xs rounded-lg transition-colors ${
                viewMode === mode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {mode === 'month' ? 'Month' : mode === 'week' ? 'Week' : 'Phase'}
            </button>
          ))}
        </div>

        {viewMode === 'week' && (
          <div className="flex items-center gap-2">
            <button onClick={() => setWeekOffset(Math.max(0, weekOffset - 1))} className="p-1 hover:bg-gray-100 rounded">
              <ChevronLeft className="w-4 h-4 text-gray-400" />
            </button>
            <span className="text-xs text-gray-500">
              Week {weekOffset + 1} of {maxWeeks}
            </span>
            <button onClick={() => setWeekOffset(Math.min(maxWeeks - 1, weekOffset + 1))} className="p-1 hover:bg-gray-100 rounded">
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        )}

        {viewMode === 'phase' && (
          <div className="flex items-center gap-1">
            <button
              onClick={() => setSelectedPhase(null)}
              className={`px-2 py-1 text-[10px] rounded-full ${!selectedPhase ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              All
            </button>
            {phases.map(p => (
              <button
                key={p.id}
                onClick={() => setSelectedPhase(p.id)}
                className={`px-2 py-1 text-[10px] rounded-full ${
                  selectedPhase === p.id ? 'text-white' : 'bg-gray-100 text-gray-600'
                }`}
                style={selectedPhase === p.id ? { backgroundColor: PHASE_COLORS[p.id] || '#6b7280' } : undefined}
              >
                {p.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Month View */}
      {viewMode === 'month' && (
        <div>
          {/* Day headers */}
          <div className="grid grid-cols-7 border-b border-gray-200 bg-gray-50">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
              <div key={d} className="text-[10px] font-semibold text-gray-500 text-center py-1.5 border-r border-gray-100 last:border-r-0">
                {d}
              </div>
            ))}
          </div>
          {/* Weeks */}
          {monthGrid.map((week, wi) => (
            <div key={wi} className="grid grid-cols-7">
              {week.map((day, di) => (
                <DayCell
                  key={`${wi}-${di}`}
                  day={day || undefined}
                  phase={day ? getPhase(day.dayNumber) : undefined}
                  onClick={day ? () => onSelectDay?.(day.dayNumber) : undefined}
                />
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Week View */}
      {viewMode === 'week' && (
        <div>
          <div className="grid grid-cols-7 border-b border-gray-200 bg-gray-50">
            {weekDays.map((day, i) => {
              const date = addDays(startDate, weekOffset * 7 + i);
              return (
                <div key={i} className="text-[10px] font-semibold text-gray-500 text-center py-1.5 border-r border-gray-100 last:border-r-0">
                  {format(date, 'EEE M/d')}
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-7">
            {weekDays.map((day, i) => (
              <DayCell
                key={i}
                day={day || undefined}
                phase={day ? getPhase(day.dayNumber) : undefined}
                onClick={day ? () => onSelectDay?.(day.dayNumber) : undefined}
              />
            ))}
          </div>
        </div>
      )}

      {/* Phase View */}
      {viewMode === 'phase' && (
        <div className="p-3 space-y-2">
          {phaseDays.map(day => {
            const phase = getPhase(day.dayNumber);
            const phaseColor = phase ? PHASE_COLORS[phase.id] || '#6b7280' : '#6b7280';
            const work = isWorkDay(day);

            return (
              <div
                key={day.id}
                onClick={() => onSelectDay?.(day.dayNumber)}
                className={`flex gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${work ? 'bg-blue-50/30' : ''}`}
              >
                {/* Date column */}
                <div className="w-12 shrink-0 text-center">
                  <div className="text-lg font-bold" style={{ color: phaseColor }}>{day.dayNumber}</div>
                  <div className="text-[9px] text-gray-400">{format(parseISO(day.date), 'EEE')}</div>
                  <div className="text-[9px] text-gray-400">{format(parseISO(day.date), 'M/d')}</div>
                </div>

                {/* Activities timeline */}
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="text-xs font-medium text-gray-800 truncate">{day.title}</div>
                  <div className="flex flex-wrap gap-1">
                    {day.activities.map(activity => {
                      const isWork = activity.name.toLowerCase().includes('work');
                      const isDrive = activity.name.toLowerCase().includes('drive') || activity.name.includes('→');

                      return (
                        <span
                          key={activity.id}
                          className={`text-[9px] px-1.5 py-0.5 rounded inline-flex items-center gap-0.5 ${
                            isWork ? 'bg-blue-100 text-blue-700' :
                            isDrive ? 'bg-gray-100 text-gray-600' :
                            'bg-green-50 text-green-700'
                          }`}
                        >
                          {activity.startTime && (
                            <span className="font-bold">{activity.startTime.replace(':00', '').replace(' AM', 'a').replace(' PM', 'p')}</span>
                          )}
                          {activity.name.length > 25 ? activity.name.slice(0, 23) + '...' : activity.name}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Right info */}
                <div className="shrink-0 text-right space-y-0.5">
                  {day.weather && (
                    <div className="flex items-center gap-0.5 justify-end text-[9px] text-gray-400">
                      {weatherIcon(day.weather.conditions)}
                      {day.weather.high}°
                    </div>
                  )}
                  {day.budgetBreakdown?.total && (
                    <div className="text-[9px] text-gray-400">${day.budgetBreakdown.total}</div>
                  )}
                  {day.drivingDistance && (
                    <div className="flex items-center gap-0.5 justify-end text-[9px] text-gray-400">
                      <Car className="w-2.5 h-2.5" />
                      {day.drivingDistance.split(' (')[0].replace(' miles', 'mi')}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Legend */}
      <div className="flex items-center gap-3 p-2 border-t border-gray-100 bg-gray-50">
        <span className="text-[9px] text-gray-400">Legend:</span>
        <span className="text-[9px] px-1.5 py-0.5 rounded bg-green-50 text-green-700">Activity</span>
        <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-700">Work</span>
        <span className="text-[9px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-600">Drive</span>
        <span className="text-[9px] px-1.5 py-0.5 rounded bg-orange-50 text-orange-700">Hike</span>
      </div>
    </div>
  );
}
