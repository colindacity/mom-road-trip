'use client';

import { DayPlan, TripPhase } from '@/types/trip';
import { format, parseISO } from 'date-fns';
import { Car, Sun, Cloud, CloudRain, Snowflake, Laptop, ExternalLink } from 'lucide-react';

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

const isWorkDay = (day: DayPlan) => {
  const notes = (day.notes || []).join(' ').toLowerCase();
  const title = day.title.toLowerCase();
  return title.includes('work') || notes.includes('work day') || notes.includes('half work');
};

const getPhaseForDay = (dayNumber: number, phases: TripPhase[]) => {
  return phases.find(p => dayNumber >= p.startDay && dayNumber <= p.endDay);
};

export default function TripTable({ days, phases, onSelectDay }: TripTableProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-2 py-2 text-left font-semibold text-gray-500 w-8">#</th>
              <th className="px-2 py-2 text-left font-semibold text-gray-500 w-16">Date</th>
              <th className="px-2 py-2 text-left font-semibold text-gray-500 w-10">Day</th>
              <th className="px-2 py-2 text-left font-semibold text-gray-500">Title</th>
              <th className="px-2 py-2 text-left font-semibold text-gray-500 w-24 hidden md:table-cell">Location</th>
              <th className="px-2 py-2 text-center font-semibold text-gray-500 w-12 hidden sm:table-cell">Wx</th>
              <th className="px-2 py-2 text-right font-semibold text-gray-500 w-16 hidden sm:table-cell">Drive</th>
              <th className="px-2 py-2 text-right font-semibold text-gray-500 w-12">$</th>
              <th className="px-2 py-2 text-center font-semibold text-gray-500 w-8">Work</th>
            </tr>
          </thead>
          <tbody>
            {days.map((day) => {
              const phase = getPhaseForDay(day.dayNumber, phases);
              const work = isWorkDay(day);
              const d = parseISO(day.date);

              return (
                <tr
                  key={day.id}
                  onClick={() => onSelectDay?.(day.dayNumber)}
                  className={`border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors ${
                    work ? 'bg-blue-50/30' : ''
                  }`}
                >
                  <td className="px-2 py-1.5">
                    <span
                      className="font-bold text-sm"
                      style={{ color: phase?.color || '#374151' }}
                    >
                      {day.dayNumber}
                    </span>
                  </td>
                  <td className="px-2 py-1.5 text-gray-500 whitespace-nowrap">
                    {format(d, 'M/d')}
                  </td>
                  <td className="px-2 py-1.5 text-gray-400 whitespace-nowrap">
                    {format(d, 'EEE')}
                  </td>
                  <td className="px-2 py-1.5 font-medium text-gray-800 max-w-[200px] truncate">
                    {day.title}
                  </td>
                  <td className="px-2 py-1.5 text-gray-500 truncate max-w-[100px] hidden md:table-cell">
                    {day.overnight || day.location.name}
                  </td>
                  <td className="px-2 py-1.5 text-center hidden sm:table-cell">
                    {day.weather && (
                      <span className="inline-flex items-center gap-0.5">
                        {weatherIcon(day.weather.conditions)}
                        <span className="text-gray-400">{day.weather.high}°</span>
                      </span>
                    )}
                  </td>
                  <td className="px-2 py-1.5 text-right text-gray-400 hidden sm:table-cell">
                    {day.drivingDistance && (
                      <span className="inline-flex items-center gap-0.5">
                        <Car className="w-3 h-3" />
                        {day.drivingDistance.replace(' miles', 'mi').replace(' (', '\n(')}
                      </span>
                    )}
                  </td>
                  <td className="px-2 py-1.5 text-right text-gray-500 font-medium">
                    {day.budgetBreakdown?.total ? `$${day.budgetBreakdown.total}` : ''}
                  </td>
                  <td className="px-2 py-1.5 text-center">
                    {work && <Laptop className="w-3 h-3 text-blue-500 mx-auto" />}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="bg-gray-50 border-t border-gray-200">
              <td colSpan={7} className="px-2 py-2 text-right font-semibold text-gray-500">Total</td>
              <td className="px-2 py-2 text-right font-bold text-gray-700">
                ${days.reduce((sum, d) => sum + (d.budgetBreakdown?.total || 0), 0).toLocaleString()}
              </td>
              <td className="px-2 py-2 text-center text-gray-400 text-[10px]">
                {days.filter(isWorkDay).length}d
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
