'use client';

import { DayPlan, TripPhase } from '@/types/trip';
import { format, parseISO } from 'date-fns';
import { Car, Sun, Cloud, CloudRain, Snowflake, Laptop, Clock, MapPin, Mountain, Bed } from 'lucide-react';

interface TripTableProps {
  days: DayPlan[];
  phases: TripPhase[];
  onSelectDay?: (dayNumber: number) => void;
}

const weatherIcon = (conditions?: string) => {
  if (!conditions) return null;
  const c = conditions.toLowerCase();
  if (c.includes('snow')) return <Snowflake className="w-2.5 h-2.5 text-blue-300" />;
  if (c.includes('rain') || c.includes('storm')) return <CloudRain className="w-2.5 h-2.5 text-blue-400" />;
  if (c.includes('cloud') || c.includes('overcast') || c.includes('variable')) return <Cloud className="w-2.5 h-2.5 text-gray-400" />;
  return <Sun className="w-2.5 h-2.5 text-amber-400" />;
};

const isWorkDay = (day: DayPlan) => {
  const title = day.title.toLowerCase();
  return title.includes('work');
};

const getPhaseForDay = (dayNumber: number, phases: TripPhase[]) => {
  return phases.find(p => dayNumber >= p.startDay && dayNumber <= p.endDay);
};

const activityColor = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('work') || n.includes('colin works')) return 'bg-blue-100 text-blue-700';
  if (n.includes('drive') || n.includes('→') || n.includes('leave')) return 'bg-gray-100 text-gray-600';
  if (n.includes('check in') || n.includes('drop bags')) return 'bg-gray-50 text-gray-400';
  if (n.includes('hike') || n.includes('trail') || n.includes('avalanche lake')) return 'bg-orange-50 text-orange-700';
  if (n.includes('lunch') || n.includes('dinner') || n.includes('breakfast') || n.includes('buffet')) return 'bg-rose-50 text-rose-600';
  return 'bg-green-50 text-green-700';
};

export default function TripTable({ days, phases, onSelectDay }: TripTableProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-[10px]">
          <thead className="sticky top-0 z-10">
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-1.5 py-1.5 text-left font-semibold text-gray-500 w-6">#</th>
              <th className="px-1.5 py-1.5 text-left font-semibold text-gray-500 w-14">Date</th>
              <th className="px-1.5 py-1.5 text-left font-semibold text-gray-500 w-8">DOW</th>
              <th className="px-1.5 py-1.5 text-left font-semibold text-gray-500 w-20 hidden sm:table-cell">Location</th>
              <th className="px-1.5 py-1.5 text-center font-semibold text-gray-500 w-8 hidden sm:table-cell">Wx</th>
              <th className="px-1.5 py-1.5 text-left font-semibold text-gray-500">Activities</th>
              <th className="px-1.5 py-1.5 text-right font-semibold text-gray-500 w-12 hidden sm:table-cell">Drive</th>
              <th className="px-1.5 py-1.5 text-right font-semibold text-gray-500 w-10">$</th>
            </tr>
          </thead>
          <tbody>
            {days.map((day) => {
              const phase = getPhaseForDay(day.dayNumber, phases);
              const work = isWorkDay(day);
              const d = parseISO(day.date);
              const phaseColor = phase?.color || '#374151';

              return (
                <tr
                  key={day.id}
                  onClick={() => onSelectDay?.(day.dayNumber)}
                  className={`border-b border-gray-50 hover:bg-gray-50/80 cursor-pointer transition-colors align-top ${
                    work ? 'bg-blue-50/20' : ''
                  }`}
                >
                  <td className="px-1.5 py-1.5">
                    <span className="font-bold text-xs" style={{ color: phaseColor }}>
                      {day.dayNumber}
                    </span>
                  </td>
                  <td className="px-1.5 py-1.5 text-gray-500 whitespace-nowrap">
                    {format(d, 'M/d')}
                  </td>
                  <td className="px-1.5 py-1.5 text-gray-400 whitespace-nowrap">
                    {format(d, 'EEE')}
                  </td>
                  <td className="px-1.5 py-1.5 text-gray-500 hidden sm:table-cell">
                    <div className="truncate max-w-[80px]" title={day.overnight || day.location.name}>
                      {(day.overnight || day.location.name).replace(', MT', '').replace(', UT', '').replace(', AZ', '').replace(', ID', '').replace(', WY', '').replace(' (Teton Valley)', '')}
                    </div>
                  </td>
                  <td className="px-1.5 py-1.5 text-center hidden sm:table-cell whitespace-nowrap">
                    {day.weather && (
                      <span className="inline-flex items-center gap-0.5">
                        {weatherIcon(day.weather.conditions)}
                        <span className="text-gray-400">{day.weather.high}°</span>
                      </span>
                    )}
                  </td>
                  <td className="px-1.5 py-1.5">
                    <div className="flex flex-wrap gap-0.5">
                      {day.activities.map((activity) => (
                        <span
                          key={activity.id}
                          className={`inline-flex items-center gap-0.5 px-1 py-0.5 rounded text-[9px] leading-tight ${activityColor(activity.name)}`}
                          title={`${activity.startTime ? activity.startTime + ' ' : ''}${activity.name} (${activity.duration})`}
                        >
                          {activity.startTime && (
                            <span className="font-bold opacity-70">
                              {activity.startTime.replace(':00', '').replace(' AM', 'a').replace(' PM', 'p')}
                            </span>
                          )}
                          <span className="truncate max-w-[120px]">
                            {activity.name
                              .replace('Check In & Drop Bags at Hotel', '🏨 check-in')
                              .replace('Colin Works — Hotel', '💻 work')
                              .replace('Colin Works — ', '💻 ')
                              .replace('Drive ', '🚗 ')
                              .replace('Lunch in ', '🍽 ')
                              .replace('Dinner at ', '🍽 ')
                            }
                          </span>
                          {activity.optionalSkip && (
                            <span className="text-[7px] text-gray-400">flex</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-1.5 py-1.5 text-right text-gray-400 hidden sm:table-cell whitespace-nowrap">
                    {day.drivingDistance && (
                      <span className="inline-flex items-center gap-0.5">
                        <Car className="w-2.5 h-2.5" />
                        {day.drivingDistance.split(' ')[0]}mi
                      </span>
                    )}
                  </td>
                  <td className="px-1.5 py-1.5 text-right text-gray-500 font-medium whitespace-nowrap">
                    {day.budgetBreakdown?.total ? `$${day.budgetBreakdown.total}` : ''}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="bg-gray-50 border-t border-gray-200">
              <td colSpan={5} className="px-1.5 py-1.5 text-right font-semibold text-gray-500 hidden sm:table-cell">
                {days.reduce((sum, d) => sum + d.activities.length, 0)} activities across {days.length} days
              </td>
              <td className="px-1.5 py-1.5 sm:hidden" colSpan={3}></td>
              <td className="px-1.5 py-1.5 hidden sm:table-cell"></td>
              <td className="px-1.5 py-1.5 hidden sm:table-cell"></td>
              <td className="px-1.5 py-1.5 text-right font-bold text-gray-700">
                ${days.reduce((sum, d) => sum + (d.budgetBreakdown?.total || 0), 0).toLocaleString()}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
