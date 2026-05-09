'use client';

import { tripData } from '@/data/tripData';
import { format, parseISO } from 'date-fns';
import { useState } from 'react';
import SiteNav from '@/components/SiteNav';

// ─── Vibe types: WHERE + WHAT you'll do ───
type Vibe = 'desert' | 'mountain' | 'city' | 'rest' | 'drive' | 'tour' | 'fly' | 'robin';

const VIBES: Record<Vibe, { emoji: string; label: string; color: string; bg: string; pill: string }> = {
  desert:   { emoji: '🏜️', label: 'Desert',     color: '#92400e', bg: '#fef3c7', pill: '#d97706' },
  mountain: { emoji: '🏔️', label: 'Mountain',   color: '#1e40af', bg: '#dbeafe', pill: '#3b82f6' },
  city:     { emoji: '🏙️', label: 'City',       color: '#5b21b6', bg: '#ede9fe', pill: '#8b5cf6' },
  rest:     { emoji: '🛌', label: 'Rest',       color: '#0e7490', bg: '#cffafe', pill: '#06b6d4' },
  drive:    { emoji: '🚗', label: 'Drive',      color: '#475569', bg: '#f1f5f9', pill: '#64748b' },
  tour:     { emoji: '⭐', label: 'Tour',       color: '#a16207', bg: '#fef9c3', pill: '#ca8a04' },
  fly:      { emoji: '✈️', label: 'Fly',        color: '#9d174d', bg: '#fce7f3', pill: '#ec4899' },
  robin:    { emoji: '💜', label: 'Robin!',     color: '#86198f', bg: '#fae8ff', pill: '#c026d3' },
};

// ─── Weather buckets (Celsius - Mom's Canadian) ───
type Weather = 'hot' | 'warm' | 'mild' | 'cool' | 'cold';
const WEATHER: Record<Weather, { emoji: string; label: string; advice: string; color: string; bg: string }> = {
  hot:  { emoji: '🥵', label: 'HOT',  advice: 'Sunscreen + water + hat',     color: '#9a3412', bg: '#fed7aa' },
  warm: { emoji: '☀️', label: 'Warm', advice: 'Sunscreen, light layers',     color: '#a16207', bg: '#fef3c7' },
  mild: { emoji: '⛅', label: 'Mild', advice: 'Comfortable',                 color: '#15803d', bg: '#dcfce7' },
  cool: { emoji: '🧥', label: 'Cool', advice: 'Bring a jacket',              color: '#1e40af', bg: '#dbeafe' },
  cold: { emoji: '❄️', label: 'Cold', advice: 'Layers + warm coat',         color: '#1e3a8a', bg: '#bfdbfe' },
};

const tempBucket = (high?: number): Weather => {
  if (high === undefined) return 'mild';
  if (high >= 30) return 'hot';
  if (high >= 22) return 'warm';
  if (high >= 14) return 'mild';
  if (high >= 6)  return 'cool';
  return 'cold';
};

// ─── Energy level ───
type Energy = 1 | 2 | 3;
const ENERGY_LABEL: Record<Energy, string> = { 1: 'Easy', 2: 'Medium', 3: 'Active' };

// Each day's vibes, energy level, and Mom-friendly blurb
const DAY_INFO: Record<number, { vibes: Vibe[]; energy: Energy; blurb: string }> = {
  1:  { vibes: ['fly', 'city'],         energy: 2, blurb: 'Land in Vegas, fancy buffet at Bacchanal, walk the Strip lights at night.' },
  2:  { vibes: ['drive', 'desert'],     energy: 2, blurb: 'Long desert drive. First glimpse of Grand Canyon at sunset — wow moment.' },
  3:  { vibes: ['desert'],              energy: 2, blurb: 'Easy walking along the canyon rim. Stunning views all day. Bring water.' },
  4:  { vibes: ['drive', 'desert'],     energy: 2, blurb: 'Drive to Page. Horseshoe Bend at sunset (1.5mi walk, some stairs).' },
  5:  { vibes: ['tour', 'desert'],      energy: 2, blurb: 'BIG DAY: Antelope Canyon tour 10am sharp. Magical light beams. Then Lake Powell.' },
  6:  { vibes: ['rest'],                energy: 1, blurb: 'Rest day. Colin works. Swim, read, or walk around Page town.' },
  7:  { vibes: ['drive', 'desert'],     energy: 2, blurb: 'Long scenic drive Page→Moab. Stop at Monument Valley for photos.' },
  8:  { vibes: ['rest'],                energy: 1, blurb: 'Rest day in Moab. Colin works. Pool, books, easy.' },
  9:  { vibes: ['desert'],              energy: 3, blurb: 'Arches National Park! Lots of walking + arches everywhere. Bring water.' },
  10: { vibes: ['desert', 'rest'],      energy: 2, blurb: 'Canyonlands viewpoints in the morning (drive-up, easy). Colin works after lunch.' },
  11: { vibes: ['drive', 'city'],       energy: 2, blurb: 'Drive Moab→Salt Lake City. Temple Square in evening if up for it.' },
  12: { vibes: ['rest', 'city'],        energy: 1, blurb: 'Rest day. Colin works in SLC. Airbnb has a pool/hot tub!' },
  13: { vibes: ['rest', 'city'],        energy: 1, blurb: 'Rest day. Colin works. Same Airbnb — relax.' },
  14: { vibes: ['city'],                energy: 2, blurb: 'SLC fun day. Natural History Museum + Antelope Island (bison!). Easy pace.' },
  15: { vibes: ['drive', 'mountain'],   energy: 2, blurb: 'Drive SLC→Driggs. Tetons come into view. Cooler temps now.' },
  16: { vibes: ['rest', 'mountain'],    energy: 1, blurb: 'Memorial Day rest. Colin works. Walk around tiny mountain town.' },
  17: { vibes: ['mountain'],            energy: 2, blurb: 'Grand Teton! Mountains everywhere, easy viewpoints + Mormon Row. Beautiful.' },
  18: { vibes: ['drive', 'mountain'],   energy: 2, blurb: 'Drive into Yellowstone! Old Faithful + Grand Prismatic. Iconic geysers.' },
  19: { vibes: ['mountain'],            energy: 3, blurb: 'Yellowstone full day. Geysers, canyons, bison and elk. Lots to see.' },
  20: { vibes: ['drive', 'robin'],      energy: 2, blurb: 'Drive to Glacier. ROBIN ARRIVES at the airport in the evening! 💜' },
  21: { vibes: ['mountain'],            energy: 3, blurb: 'Glacier National Park together. Lake McDonald + easy hike with Robin.' },
  22: { vibes: ['fly', 'mountain'],     energy: 1, blurb: 'Morning by the lake. Fly home from Kalispell.' },
};

export default function MomView() {
  const days = tripData.days;
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const momActivities = (day: typeof days[0]) =>
    day.activities.filter(a => {
      const n = a.name.toLowerCase();
      return !n.includes('colin works') && !n.includes('half work') && !n.includes('work day') && !n.includes('work —') && !n.includes('work block');
    });

  // Stats
  const restDays = Object.values(DAY_INFO).filter(d => d.vibes.includes('rest')).length;
  const desertDays = Object.values(DAY_INFO).filter(d => d.vibes.includes('desert')).length;
  const mountainDays = Object.values(DAY_INFO).filter(d => d.vibes.includes('mountain')).length;
  const tourDays = Object.values(DAY_INFO).filter(d => d.vibes.includes('tour')).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-blue-50 pb-12">
      <SiteNav current="mom" />
      {/* Hero */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-blue-500 text-white px-4 py-6 text-center shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold">Our Road Trip 🚗</h1>
        <p className="text-base md:text-lg mt-1 text-white/95">Las Vegas → Glacier National Park</p>
        <p className="text-xs md:text-sm mt-1 text-white/85">May 10 - 31, 2026 · 22 days · Desert → Mountains</p>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-5 space-y-6">

        {/* ═══ AT A GLANCE ═══ */}
        <section className="bg-white rounded-2xl shadow-sm p-4 border border-gray-100">
          <h2 className="text-base font-bold text-gray-800 mb-1">All 22 days at a glance</h2>
          <p className="text-xs text-gray-500 mb-3">Tap any day for details. Color = where we are. Top corner = weather.</p>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1.5">
            {['S','M','T','W','T','F','S'].map((d, i) => (
              <div key={i} className="text-center text-[10px] font-bold text-gray-400 mb-0.5">{d}</div>
            ))}
            {days.map((day) => {
              const info = DAY_INFO[day.dayNumber];
              const primary = info?.vibes[0] || 'rest';
              const v = VIBES[primary];
              const w = WEATHER[tempBucket(day.weather?.high)];
              const d = parseISO(day.date);
              return (
                <button
                  key={day.id}
                  onClick={() => {
                    setExpandedDay(day.dayNumber);
                    document.getElementById(`day-${day.dayNumber}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className="relative aspect-square rounded-lg flex flex-col items-center justify-center text-center border-2 hover:scale-105 transition-transform active:scale-95"
                  style={{ background: v.bg, borderColor: v.pill + '50' }}
                >
                  <div className="absolute top-0.5 right-0.5 text-[10px]">{w.emoji}</div>
                  <div className="text-base leading-none">{v.emoji}</div>
                  <div className="text-[10px] font-bold mt-0.5" style={{ color: v.color }}>{format(d, 'M/d')}</div>
                </button>
              );
            })}
          </div>

          {/* Vibe legend */}
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1.5">Where we are</div>
            <div className="grid grid-cols-2 gap-1 text-[11px]">
              {(Object.entries(VIBES) as [Vibe, typeof VIBES[Vibe]][]).map(([key, v]) => (
                <div key={key} className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded flex items-center justify-center text-xs" style={{ background: v.bg }}>{v.emoji}</span>
                  <span style={{ color: v.color }} className="font-medium">{v.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Weather legend */}
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1.5">Weather (top corner of each day)</div>
            <div className="grid grid-cols-3 gap-1 text-[11px]">
              {(Object.entries(WEATHER) as [Weather, typeof WEATHER[Weather]][]).map(([key, w]) => (
                <div key={key} className="flex items-center gap-1">
                  <span>{w.emoji}</span>
                  <span style={{ color: w.color }} className="font-medium">{w.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Quick Stats ═══ */}
        <section className="grid grid-cols-4 gap-2">
          <div className="rounded-xl p-3 text-center border border-cyan-100 bg-cyan-50">
            <div className="text-xl">🛌</div>
            <div className="text-2xl font-bold text-cyan-700">{restDays}</div>
            <div className="text-[10px] text-cyan-600 font-medium">Rest days</div>
          </div>
          <div className="rounded-xl p-3 text-center border border-orange-100 bg-orange-50">
            <div className="text-xl">🏜️</div>
            <div className="text-2xl font-bold text-orange-700">{desertDays}</div>
            <div className="text-[10px] text-orange-600 font-medium">Desert</div>
          </div>
          <div className="rounded-xl p-3 text-center border border-blue-100 bg-blue-50">
            <div className="text-xl">🏔️</div>
            <div className="text-2xl font-bold text-blue-700">{mountainDays}</div>
            <div className="text-[10px] text-blue-600 font-medium">Mountain</div>
          </div>
          <div className="rounded-xl p-3 text-center border border-yellow-100 bg-yellow-50">
            <div className="text-xl">⭐</div>
            <div className="text-2xl font-bold text-yellow-700">{tourDays}</div>
            <div className="text-[10px] text-yellow-600 font-medium">Tours</div>
          </div>
        </section>

        {/* ═══ Week-by-week narrative ═══ */}
        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2 px-1">What each week looks like</h2>

          <div className="space-y-2">
            <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-orange-400">
              <div className="text-xs font-bold text-orange-600 mb-1">WEEK 1 · MAY 10-16 · 🏜️ DESERT WEEK</div>
              <div className="text-sm font-semibold text-gray-800 mb-1">Hot + dramatic landscapes</div>
              <p className="text-sm text-gray-600 leading-snug">
                Vegas Sun, Grand Canyon Mon-Wed, Page Wed-Sat. <strong>Antelope Canyon tour Thursday</strong> is the highlight. Hot and sunny most days — sunscreen, hat, water. Colin starts working Friday but the big stuff is done.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-cyan-400">
              <div className="text-xs font-bold text-cyan-600 mb-1">WEEK 2 · MAY 17-23 · 🛌 CHILL + UTAH PARKS</div>
              <div className="text-sm font-semibold text-gray-800 mb-1">Mostly rest, two big park days</div>
              <p className="text-sm text-gray-600 leading-snug">
                <strong>Arches Mon (active!), Canyonlands Tue AM</strong>, then SLC Wed-Sat for rest. Pool, books, light walks. Saturday is fun museum + bison day. Still warm but cooling off.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-blue-400">
              <div className="text-xs font-bold text-blue-600 mb-1">WEEK 3 · MAY 24-31 · 🏔️ MOUNTAIN GRAND FINALE</div>
              <div className="text-sm font-semibold text-gray-800 mb-1">Tetons, Yellowstone, Glacier + Robin!</div>
              <p className="text-sm text-gray-600 leading-snug">
                Cool mountain weather — <strong>bring a jacket!</strong> Memorial Day rest in Driggs, then Grand Teton Tue, Yellowstone Wed-Thu, Glacier Fri-Sun. <strong>Robin flies in Friday 💜</strong>. Fly home Sunday.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ Day-by-day cards ═══ */}
        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2 px-1">Day by day</h2>
          <p className="text-xs text-gray-500 mb-3 px-1">Tap a day to see details</p>

          <div className="space-y-2">
            {days.map((day) => {
              const info = DAY_INFO[day.dayNumber];
              const primary = info?.vibes[0] || 'rest';
              const v = VIBES[primary];
              const w = WEATHER[tempBucket(day.weather?.high)];
              const d = parseISO(day.date);
              const blurb = info?.blurb || day.summary || day.title;
              const expanded = expandedDay === day.dayNumber;
              const activities = momActivities(day);
              const energy = info?.energy || 1;

              return (
                <div
                  key={day.id}
                  id={`day-${day.dayNumber}`}
                  className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 scroll-mt-4"
                >
                  {/* Compact header */}
                  <button
                    onClick={() => setExpandedDay(expanded ? null : day.dayNumber)}
                    className="w-full text-left flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="shrink-0 w-14 h-14 rounded-xl flex flex-col items-center justify-center relative" style={{ background: v.bg }}>
                      <div className="absolute top-0.5 right-0.5 text-[10px]">{w.emoji}</div>
                      <div className="text-xl leading-none">{v.emoji}</div>
                      <div className="text-[10px] font-bold mt-0.5" style={{ color: v.color }}>{format(d, 'M/d')}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs font-bold text-gray-400">{format(d, 'EEE')}</span>
                        {info?.vibes.map(vk => (
                          <span key={vk} className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: VIBES[vk].bg, color: VIBES[vk].color }}>
                            {VIBES[vk].label}
                          </span>
                        ))}
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: w.bg, color: w.color }}>
                          {w.emoji} {day.weather?.high}°
                        </span>
                        <span className="text-[9px] text-gray-500">
                          {'●'.repeat(energy)}{'○'.repeat(3 - energy)} {ENERGY_LABEL[energy]}
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-gray-800 mt-0.5 leading-tight">{blurb}</div>
                    </div>
                    <div className="text-gray-300 text-xs shrink-0">{expanded ? '▲' : '▼'}</div>
                  </button>

                  {/* Expanded */}
                  {expanded && (
                    <div className="px-3 pb-3 border-t border-gray-100">
                      {day.location.image && (
                        <div className="h-32 -mx-3 mt-0 overflow-hidden">
                          <img src={day.location.image} alt={day.location.name} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                      )}

                      {/* Weather advice card */}
                      {day.weather && (
                        <div className="mt-3 rounded-lg p-2.5 flex items-center gap-2" style={{ background: w.bg }}>
                          <span className="text-2xl">{w.emoji}</span>
                          <div className="flex-1">
                            <div className="text-sm font-bold" style={{ color: w.color }}>
                              {day.weather.high}°/{day.weather.low}°C · {w.label}
                            </div>
                            <div className="text-xs" style={{ color: w.color }}>
                              {day.weather.conditions} — {w.advice}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Quick info pills */}
                      <div className="flex flex-wrap gap-2 mt-3 text-xs">
                        {day.drivingDistance && (
                          <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                            🚗 {day.drivingDistance} ({day.drivingTime})
                          </span>
                        )}
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          🏨 {day.overnight || day.location.name}
                        </span>
                      </div>

                      {/* Activities */}
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

        <div className="text-center py-6">
          <p className="text-2xl">❤️</p>
          <p className="text-gray-500 text-sm mt-2">Can&apos;t wait, Mom!</p>
          <p className="text-gray-400 text-xs mt-1">22 days · Desert to mountains · LV → Glacier</p>
        </div>
      </div>
    </div>
  );
}
