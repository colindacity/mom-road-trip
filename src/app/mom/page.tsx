'use client';

import { tripData } from '@/data/tripData';
import { format, parseISO } from 'date-fns';
import { MapPin, Car, Sun, Cloud, CloudRain, Snowflake, Camera, Heart } from 'lucide-react';

const weatherEmoji = (conditions?: string) => {
  if (!conditions) return '☀️';
  const c = conditions.toLowerCase();
  if (c.includes('snow')) return '❄️';
  if (c.includes('rain')) return '🌧';
  if (c.includes('cloud') || c.includes('variable')) return '⛅';
  return '☀️';
};

const PHASE_COLORS: Record<string, string> = {
  southwest: '#ef4444',
  utah: '#f59e0b',
  slc_tetons: '#22c55e',
  yellowstone_glacier: '#06b6d4',
};

export default function MomView() {
  const days = tripData.days;
  const phases = tripData.phases;

  const getPhase = (dayNum: number) => phases.find(p => dayNum >= p.startDay && dayNum <= p.endDay);

  // Filter out work-only activities for Mom's view
  const momActivities = (day: typeof days[0]) =>
    day.activities.filter(a => {
      const n = a.name.toLowerCase();
      return !n.includes('colin works') && !n.includes('half work') && !n.includes('work day') && !n.includes('work —') && !n.includes('work block');
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-8 text-center">
        <h1 className="text-3xl font-bold">Our Road Trip! 🚗</h1>
        <p className="text-lg mt-2 text-white/90">Las Vegas to Glacier National Park</p>
        <p className="text-sm mt-1 text-white/70">May 10 - May 31, 2026 &middot; 22 days &middot; 6 national parks</p>
        <div className="mt-4 flex justify-center gap-4 text-sm text-white/80">
          <span>👤 Colin</span>
          <span>👩 Mom</span>
          <span>💜 Robin joins Day 20!</span>
        </div>
      </div>

      {/* Days */}
      <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
        {days.map((day) => {
          const phase = getPhase(day.dayNumber);
          const phaseColor = phase ? PHASE_COLORS[phase.id] || '#6b7280' : '#6b7280';
          const activities = momActivities(day);
          const d = parseISO(day.date);
          const isRobinDay = day.dayNumber >= 20;
          const isFlyDay = day.dayNumber === 22;

          return (
            <div key={day.id} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
              {/* Day header with image */}
              {day.location.image && (
                <div className="h-32 relative overflow-hidden">
                  <img
                    src={day.location.image}
                    alt={day.location.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-3 right-3 text-white">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold">{day.dayNumber}</span>
                      <div>
                        <div className="text-sm font-semibold">{format(d, 'EEEE, MMMM d')}</div>
                        <div className="text-xs text-white/80 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {day.location.name}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/40 px-2 py-1 rounded-full text-white text-xs flex items-center gap-1">
                    {weatherEmoji(day.weather?.conditions)} {day.weather?.high}°C
                  </div>
                  {isRobinDay && (
                    <div className="absolute top-2 left-2 bg-purple-500 px-2 py-1 rounded-full text-white text-xs">
                      💜 {day.dayNumber === 20 ? 'Robin arrives!' : day.dayNumber === 21 ? 'All three!' : 'Fly home!'}
                    </div>
                  )}
                </div>
              )}

              {/* Title */}
              <div className="px-4 pt-3 pb-1">
                <h2 className="text-lg font-bold text-gray-800">{day.title.replace(/Work Day — |Half Work AM \+ |WORK — /g, '')}</h2>
                {day.summary && (
                  <p className="text-sm text-gray-500 mt-0.5">{day.summary}</p>
                )}
              </div>

              {/* Driving */}
              {day.drivingDistance && (
                <div className="px-4 py-1 flex items-center gap-1.5 text-sm text-gray-400">
                  <Car className="w-4 h-4" />
                  <span>{day.drivingDistance} ({day.drivingTime || 'scenic drive'})</span>
                </div>
              )}

              {/* Activities for Mom */}
              {activities.length > 0 && (
                <div className="px-4 py-2 space-y-2">
                  {activities.map((activity) => {
                    const isHike = activity.distance && !activity.name.toLowerCase().includes('boardwalk');
                    const isDrive = activity.name.toLowerCase().includes('drive') || activity.name.includes('→');
                    const isDining = activity.name.toLowerCase().includes('lunch') || activity.name.toLowerCase().includes('dinner') || activity.name.toLowerCase().includes('buffet');
                    const isCheckin = activity.name.toLowerCase().includes('check in');

                    if (isCheckin) return null;

                    return (
                      <div key={activity.id} className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-sm shrink-0">
                          {isDining ? '🍽' : isDrive ? '🚗' : isHike ? '🥾' : '📍'}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-800">{activity.name}</div>
                          <div className="text-xs text-gray-400 flex items-center gap-2 mt-0.5">
                            {activity.startTime && <span>{activity.startTime}</span>}
                            <span>{activity.duration}</span>
                            {activity.distance && <span>{activity.distance}</span>}
                          </div>
                          {activity.seniorFriendly === false && (
                            <div className="text-xs text-amber-600 mt-0.5">⚠️ Colin + Robin only (Mom can rest)</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Overnight */}
              <div className="px-4 py-2 bg-gray-50 text-xs text-gray-500 flex items-center gap-1.5 border-t border-gray-100">
                🏨 Staying at: {day.overnight || day.location.name}
                {day.accommodation?.name && !day.accommodation.name.includes('same') && (
                  <span className="text-gray-400">({day.accommodation.name.split(' (')[0]})</span>
                )}
              </div>
            </div>
          );
        })}

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-2xl">❤️</p>
          <p className="text-gray-500 text-sm mt-2">What an incredible trip!</p>
          <p className="text-gray-400 text-xs mt-1">22 days, 6 national parks, Las Vegas to Glacier</p>
          <a href="/" className="text-xs text-blue-500 mt-4 inline-block">View full planner →</a>
        </div>
      </div>
    </div>
  );
}
