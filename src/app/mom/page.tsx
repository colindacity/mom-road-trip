'use client';

import { tripData } from '@/data/tripData';
import { format, parseISO } from 'date-fns';
import { useState } from 'react';

// ─── Vibe types ───
type Vibe = 'rest' | 'drive' | 'must' | 'active' | 'flex' | 'fly' | 'robin';

const VIBES: Record<Vibe, { emoji: string; label: string; color: string; bg: string; pill: string }> = {
  rest:   { emoji: '🛌', label: 'Rest day',  color: '#0e7490', bg: '#cffafe', pill: '#06b6d4' },
  drive:  { emoji: '🚗', label: 'Drive',     color: '#475569', bg: '#f1f5f9', pill: '#64748b' },
  must:   { emoji: '⭐', label: 'Must-see',  color: '#a16207', bg: '#fef9c3', pill: '#ca8a04' },
  active: { emoji: '🥾', label: 'Active',    color: '#166534', bg: '#dcfce7', pill: '#16a34a' },
  flex:   { emoji: '🌊', label: 'Flex',      color: '#6d28d9', bg: '#ede9fe', pill: '#8b5cf6' },
  fly:    { emoji: '✈️', label: 'Fly',       color: '#9d174d', bg: '#fce7f3', pill: '#ec4899' },
  robin:  { emoji: '💜', label: 'Robin!',    color: '#86198f', bg: '#fae8ff', pill: '#c026d3' },
};

// Each day's vibes (primary first)
const DAY_VIBES: Record<number, Vibe[]> = {
  1:  ['fly', 'must'],         // Sun: Vegas arrive + Bacchanal
  2:  ['drive', 'must'],       // Mon: LV→GC + first canyon views
  3:  ['active', 'must'],      // Tue: GC rim trail full day
  4:  ['drive', 'must'],       // Wed: GC→Page + Horseshoe sunset
  5:  ['must'],                // Thu: ANTELOPE CANYON TOUR
  6:  ['rest'],                // Fri: Colin works (Page)
  7:  ['drive'],               // Sat: Page→Moab + Monument Valley
  8:  ['rest'],                // Sun: Colin works (Moab)
  9:  ['active', 'must'],      // Mon: Arches full day
  10: ['must', 'rest'],        // Tue: Canyonlands AM, Colin works PM
  11: ['drive'],               // Wed: Moab→SLC
  12: ['rest'],                // Thu: Colin works SLC
  13: ['rest'],                // Fri: Colin works SLC
  14: ['flex'],                // Sat: SLC explore (museum, island)
  15: ['drive'],               // Sun: SLC→Driggs
  16: ['rest'],                // Mon: Memorial Day, Colin works Driggs
  17: ['active', 'must'],      // Tue: Grand Teton full day
  18: ['drive', 'must'],       // Wed: Driggs→Yellowstone + geysers
  19: ['active', 'must'],      // Thu: Yellowstone full day
  20: ['drive', 'robin'],      // Fri: Drive→Glacier + Robin arrives
  21: ['active', 'must'],      // Sat: Glacier all three
  22: ['fly'],                 // Sun: Fly home
};

// Plain language narrative per day (Mom-friendly, ADHD-friendly: 1-2 sentences MAX)
const DAY_BLURB: Record<number, string> = {
  1: "Land in Vegas, fancy buffet at Bacchanal, walk the Strip at night.",
  2: "Long drive through desert. First glimpse of Grand Canyon at sunset — wow moment.",
  3: "Easy walking along the canyon rim. Stop wherever. Stunning views all day.",
  4: "Drive to Page. Horseshoe Bend at sunset (1.5mi walk). Bring water + hat.",
  5: "BIG DAY: Antelope Canyon tour at 10am sharp. Magical light beams. Then Lake Powell.",
  6: "Rest day. Colin works. You can swim, read, or walk around Page. Easy.",
  7: "Drive day. Stop at Monument Valley for photos. Long but scenic.",
  8: "Rest day in Moab. Colin works. Pool, books, easy.",
  9: "Arches National Park! Walking + arches everywhere. Bring water.",
  10: "Canyonlands viewpoints in the morning (drive-up, easy). Colin works after lunch.",
  11: "Drive Moab to Salt Lake City. Temple Square in the evening if up for it.",
  12: "Rest day. Colin works in SLC. You can rest at the Airbnb (pool/hot tub!).",
  13: "Rest day. Colin works. Same Airbnb — relax.",
  14: "SLC fun day. Natural History Museum + Antelope Island (bison!). Easy pace.",
  15: "Drive SLC to Driggs (Teton mountains in view). Half work, then drive.",
  16: "Memorial Day rest. Colin works in Driggs. Walk around tiny mountain town.",
  17: "Grand Teton! Mountains everywhere, easy viewpoints + Mormon Row. Beautiful.",
  18: "Drive into Yellowstone! See Old Faithful + Grand Prismatic. Iconic.",
  19: "Yellowstone full day. Geysers, Grand Canyon of Yellowstone, bison/elk.",
  20: "Drive to Glacier. ROBIN ARRIVES at the airport in the evening! 💜",
  21: "Glacier National Park together. Lake McDonald + easy hike.",
  22: "Morning by the lake. Fly home from Kalispell.",
};

const weatherEmoji = (conditions?: string) => {
  if (!conditions) return '☀️';
  const c = conditions.toLowerCase();
  if (c.includes('snow')) return '❄️';
  if (c.includes('rain')) return '🌧';
  if (c.includes('cloud') || c.includes('variable')) return '⛅';
  return '☀️';
};

export default function MomView() {
  const days = tripData.days;
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  // Filter activities for Mom view
  const momActivities = (day: typeof days[0]) =>
    day.activities.filter(a => {
      const n = a.name.toLowerCase();
      return !n.includes('colin works') && !n.includes('half work') && !n.includes('work day') && !n.includes('work —') && !n.includes('work block');
    });

  // Stats
  const restDays = Object.values(DAY_VIBES).filter(v => v[0] === 'rest').length;
  const driveDays = Object.values(DAY_VIBES).filter(v => v[0] === 'drive').length;
  const activeDays = Object.values(DAY_VIBES).filter(v => v[0] === 'active').length;
  const mustSees = Object.values(DAY_VIBES).filter(v => v.includes('must')).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 pb-12">
      {/* Hero */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-6 text-center shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold">Our Road Trip 🚗</h1>
        <p className="text-base md:text-lg mt-1 text-white/95">Las Vegas → Glacier National Park</p>
        <p className="text-xs md:text-sm mt-1 text-white/80">May 10 - 31, 2026 · 22 days · 6 national parks</p>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-5 space-y-6">

        {/* ═══ AT A GLANCE: Vibe Calendar ═══ */}
        <section className="bg-white rounded-2xl shadow-sm p-4 border border-gray-100">
          <h2 className="text-base font-bold text-gray-800 mb-1">Quick look at all 22 days</h2>
          <p className="text-xs text-gray-500 mb-3">Each day&apos;s vibe at a glance. Tap any day below for details.</p>

          {/* Calendar grid: 7 cols, day numbers with vibe colors */}
          <div className="grid grid-cols-7 gap-1.5">
            {/* Day labels */}
            {['S','M','T','W','T','F','S'].map((d, i) => (
              <div key={i} className="text-center text-[10px] font-bold text-gray-400 mb-0.5">{d}</div>
            ))}
            {/* Empty cells before May 10 (Sun = col 0 in week 5/10) */}
            {/* May 10 is a Sunday, so it starts at col 0 */}
            {days.map((day) => {
              const vibes = DAY_VIBES[day.dayNumber] || [];
              const primary = vibes[0] || 'flex';
              const v = VIBES[primary];
              const d = parseISO(day.date);
              return (
                <button
                  key={day.id}
                  onClick={() => {
                    setExpandedDay(day.dayNumber);
                    document.getElementById(`day-${day.dayNumber}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className="aspect-square rounded-lg flex flex-col items-center justify-center text-center border-2 hover:scale-105 transition-transform active:scale-95"
                  style={{ background: v.bg, borderColor: v.pill + '40' }}
                >
                  <div className="text-base leading-none">{v.emoji}</div>
                  <div className="text-[10px] font-bold mt-0.5" style={{ color: v.color }}>{format(d, 'M/d')}</div>
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-3 grid grid-cols-2 gap-1 text-[11px]">
            {(Object.entries(VIBES) as [Vibe, typeof VIBES[Vibe]][]).map(([key, v]) => (
              <div key={key} className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded flex items-center justify-center text-xs" style={{ background: v.bg }}>{v.emoji}</span>
                <span style={{ color: v.color }} className="font-medium">{v.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ Quick Stats ═══ */}
        <section className="grid grid-cols-4 gap-2">
          <div className="bg-cyan-50 rounded-xl p-3 text-center border border-cyan-100">
            <div className="text-xl">🛌</div>
            <div className="text-2xl font-bold text-cyan-700">{restDays}</div>
            <div className="text-[10px] text-cyan-600 font-medium">Rest days</div>
          </div>
          <div className="bg-yellow-50 rounded-xl p-3 text-center border border-yellow-100">
            <div className="text-xl">⭐</div>
            <div className="text-2xl font-bold text-yellow-700">{mustSees}</div>
            <div className="text-[10px] text-yellow-600 font-medium">Must-sees</div>
          </div>
          <div className="bg-green-50 rounded-xl p-3 text-center border border-green-100">
            <div className="text-xl">🥾</div>
            <div className="text-2xl font-bold text-green-700">{activeDays}</div>
            <div className="text-[10px] text-green-600 font-medium">Active days</div>
          </div>
          <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-200">
            <div className="text-xl">🚗</div>
            <div className="text-2xl font-bold text-slate-700">{driveDays}</div>
            <div className="text-[10px] text-slate-600 font-medium">Drive days</div>
          </div>
        </section>

        {/* ═══ Week-by-week narrative ═══ */}
        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2 px-1">What each week looks like</h2>

          <div className="space-y-2">
            <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-yellow-400">
              <div className="text-xs font-bold text-yellow-600 mb-1">WEEK 1 · MAY 10-16 · DESERT WONDERS</div>
              <div className="text-sm font-semibold text-gray-800 mb-1">Big sights week 🌵⭐</div>
              <p className="text-sm text-gray-600 leading-snug">
                Vegas Sunday, then Grand Canyon Mon-Wed, Page Wed-Sat. <strong>Antelope Canyon tour Thursday</strong> is the highlight. Colin starts working Friday but you&apos;ve already seen the big stuff.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-cyan-400">
              <div className="text-xs font-bold text-cyan-600 mb-1">WEEK 2 · MAY 17-23 · CHILL + UTAH PARKS</div>
              <div className="text-sm font-semibold text-gray-800 mb-1">Mostly rest week 🛌🥾</div>
              <p className="text-sm text-gray-600 leading-snug">
                Two big park days (<strong>Arches Mon, Canyonlands Tue AM</strong>), then mostly rest while Colin works. Pool, books, light walks. Saturday is fun museum day in Salt Lake.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-purple-400">
              <div className="text-xs font-bold text-purple-600 mb-1">WEEK 3 · MAY 24-31 · GRAND FINALE</div>
              <div className="text-sm font-semibold text-gray-800 mb-1">Mountains + Robin joins! 💜⭐</div>
              <p className="text-sm text-gray-600 leading-snug">
                Memorial Day rest in Driggs (mountain town), then <strong>Grand Teton, Yellowstone, Glacier</strong>. Robin flies in Friday. Fly home Sunday.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ Day-by-day cards (compressed) ═══ */}
        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2 px-1">Day by day</h2>
          <p className="text-xs text-gray-500 mb-3 px-1">Tap a day to see more details</p>

          <div className="space-y-2">
            {days.map((day) => {
              const vibes = DAY_VIBES[day.dayNumber] || [];
              const primary = vibes[0] || 'flex';
              const v = VIBES[primary];
              const d = parseISO(day.date);
              const blurb = DAY_BLURB[day.dayNumber] || day.summary || day.title;
              const expanded = expandedDay === day.dayNumber;
              const activities = momActivities(day);

              return (
                <div
                  key={day.id}
                  id={`day-${day.dayNumber}`}
                  className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 scroll-mt-4"
                >
                  {/* Compact header (always visible) */}
                  <button
                    onClick={() => setExpandedDay(expanded ? null : day.dayNumber)}
                    className="w-full text-left flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl flex flex-col items-center justify-center" style={{ background: v.bg }}>
                      <div className="text-lg leading-none">{v.emoji}</div>
                      <div className="text-[9px] font-bold mt-0.5" style={{ color: v.color }}>{format(d, 'M/d')}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs font-bold text-gray-400">{format(d, 'EEE')}</span>
                        {vibes.map(vk => (
                          <span key={vk} className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: VIBES[vk].bg, color: VIBES[vk].color }}>
                            {VIBES[vk].label}
                          </span>
                        ))}
                      </div>
                      <div className="text-sm font-semibold text-gray-800 mt-0.5 leading-tight">{blurb}</div>
                    </div>
                    <div className="text-gray-300 text-xs">{expanded ? '▲' : '▼'}</div>
                  </button>

                  {/* Expanded details */}
                  {expanded && (
                    <div className="px-3 pb-3 border-t border-gray-100">
                      {/* Image if available */}
                      {day.location.image && (
                        <div className="h-32 -mx-3 mt-0 overflow-hidden">
                          <img src={day.location.image} alt={day.location.name} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                      )}

                      {/* Quick info */}
                      <div className="flex flex-wrap gap-2 mt-3 text-xs">
                        {day.weather && (
                          <span className="bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full">
                            {weatherEmoji(day.weather.conditions)} {day.weather.high}°/{day.weather.low}°
                          </span>
                        )}
                        {day.drivingDistance && (
                          <span className="bg-slate-50 text-slate-700 px-2 py-0.5 rounded-full">
                            🚗 {day.drivingDistance} ({day.drivingTime})
                          </span>
                        )}
                        <span className="bg-gray-50 text-gray-700 px-2 py-0.5 rounded-full">
                          🏨 {day.overnight || day.location.name}
                        </span>
                      </div>

                      {/* Activities (Mom-friendly view) */}
                      {activities.length > 0 && (
                        <div className="mt-3 space-y-1.5">
                          {activities.map((a) => {
                            if (a.name.toLowerCase().includes('check in')) return null;
                            const isDining = /lunch|dinner|buffet|breakfast/i.test(a.name);
                            const isHike = a.distance && !a.name.toLowerCase().includes('boardwalk');
                            const isDrive = /drive|→/i.test(a.name);
                            const icon = isDining ? '🍽' : isDrive ? '🚗' : isHike ? '🥾' : '📍';
                            return (
                              <div key={a.id} className="flex gap-2 items-start text-sm">
                                <span className="shrink-0">{icon}</span>
                                <div className="flex-1">
                                  <div className="text-gray-800">{a.name}</div>
                                  <div className="text-[11px] text-gray-400 flex gap-2 flex-wrap">
                                    {a.startTime && <span>{a.startTime}</span>}
                                    {a.duration && <span>{a.duration}</span>}
                                    {a.distance && <span>{a.distance}</span>}
                                  </div>
                                  {a.seniorFriendly === false && (
                                    <div className="text-[11px] text-amber-700 bg-amber-50 inline-block px-1.5 py-0.5 rounded mt-1">⚠️ Colin only — you can rest</div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <div className="text-center py-6">
          <p className="text-2xl">❤️</p>
          <p className="text-gray-500 text-sm mt-2">Can&apos;t wait, Mom!</p>
          <p className="text-gray-400 text-xs mt-1">22 days · 6 parks · LV → Glacier</p>
        </div>
      </div>
    </div>
  );
}
