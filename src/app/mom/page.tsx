'use client';

import { tripData } from '@/data/tripData';
import { format, parseISO } from 'date-fns';
import { useState, useEffect, useRef } from 'react';
import SiteNav from '@/components/SiteNav';
import { getForecast } from '@/data/forecast';
import { Vibe, DriveStop } from '@/types/trip';
import { getTodayDay, formatTripDate, isToday } from '@/lib/dateUtils';

// ─── Vibe palette ───
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

const ENERGY_LABEL: Record<1 | 2 | 3, string> = { 1: 'Easy', 2: 'Medium', 3: 'Active' };

const STOP_ICON: Record<DriveStop['type'], string> = {
  lunch: '🍽',
  view: '📸',
  wildlife: '🦌',
  walk: '🚶',
  bathroom: '🚻',
  bonus: '✨',
};

export default function MomView() {
  const days = tripData.days;
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const today = getTodayDay();
  const todayRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to today on mount
  useEffect(() => {
    if (today) {
      setExpandedDay(today.dayNumber);
      // Slight delay to let render finish
      setTimeout(() => todayRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
    }
  }, [today]);

  const momActivities = (day: typeof days[0]) =>
    day.activities.filter(a => {
      const n = a.name.toLowerCase();
      return !n.includes('colin works') && !n.includes('half work') && !n.includes('work day') && !n.includes('work —') && !n.includes('work block');
    });

  // Stats — derived from tripData.days now
  const restDays = days.filter(d => d.momNotes?.vibes.includes('rest')).length;
  const desertDays = days.filter(d => d.momNotes?.vibes.includes('desert')).length;
  const mountainDays = days.filter(d => d.momNotes?.vibes.includes('mountain')).length;
  const tourDays = days.filter(d => d.momNotes?.vibes.includes('tour')).length;

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

        {/* ═══ TODAY BANNER ═══ */}
        {today && <TodayBanner day={today} />}

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
              const info = day.momNotes;
              const primary = info?.vibes[0] || 'rest';
              const v = VIBES[primary];
              const fc = getForecast(day.dayNumber);
              const high_c = fc?.high_c ?? day.weather?.high;
              const w = WEATHER[tempBucket(high_c)];
              const d = parseISO(day.date);
              const today_ = isToday(day.date);
              return (
                <button
                  key={day.id}
                  onClick={() => {
                    setExpandedDay(day.dayNumber);
                    document.getElementById(`day-${day.dayNumber}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className={`relative aspect-square rounded-lg flex flex-col items-center justify-center text-center border-2 hover:scale-105 transition-transform active:scale-95 ${today_ ? 'ring-2 ring-amber-500 ring-offset-1' : ''}`}
                  style={{ background: v.bg, borderColor: v.pill + '50' }}
                >
                  <div className="absolute top-0.5 right-0.5 text-[10px]">{w.emoji}</div>
                  <div className="text-base leading-none">{v.emoji}</div>
                  <div className="text-[10px] font-bold mt-0.5" style={{ color: v.color }}>{format(d, 'M/d')}</div>
                  {today_ && <div className="absolute -top-1 -left-1 text-[8px] bg-amber-500 text-white px-1 rounded-full font-bold">TODAY</div>}
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
              const info = day.momNotes;
              const primary = info?.vibes[0] || 'rest';
              const v = VIBES[primary];
              const fc = getForecast(day.dayNumber);
              const high_c = fc?.high_c ?? day.weather?.high;
              const low_c = fc?.low_c ?? day.weather?.low;
              const high_f = fc?.high_f;
              const low_f = fc?.low_f;
              const w = WEATHER[tempBucket(high_c)];
              const d = parseISO(day.date);
              const blurb = info?.blurb || day.summary || day.title;
              const tip = info?.tip;
              const expanded = expandedDay === day.dayNumber;
              const activities = momActivities(day);
              const energy = info?.energy || 1;
              const today_ = isToday(day.date);

              return (
                <div
                  key={day.id}
                  id={`day-${day.dayNumber}`}
                  ref={today_ ? todayRef : undefined}
                  className={`bg-white rounded-xl shadow-sm overflow-hidden border ${today_ ? 'border-amber-400 ring-2 ring-amber-200' : 'border-gray-100'} scroll-mt-4`}
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
                        <span className="text-xs font-bold text-gray-700">{formatTripDate(day.date)}</span>
                        {today_ && <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-500 text-white">TODAY</span>}
                        {info?.vibes.map(vk => (
                          <span key={vk} className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: VIBES[vk].bg, color: VIBES[vk].color }}>
                            {VIBES[vk].label}
                          </span>
                        ))}
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: w.bg, color: w.color }}>
                          {w.emoji} {high_f ? `${high_f}°F / ${high_c}°C` : `${high_c}°C`}
                        </span>
                        <span className="text-[9px] text-gray-500">
                          {'●'.repeat(energy)}{'○'.repeat(3 - energy)} {ENERGY_LABEL[energy as 1 | 2 | 3]}
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

                      {/* Drive route inset (for transit days) */}
                      {day.driveRoute && <DriveRouteCard day={day} />}

                      {/* Weather card (live forecast) */}
                      {(fc || day.weather) && (
                        <div className="mt-3 rounded-lg p-2.5" style={{ background: w.bg }}>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{w.emoji}</span>
                            <div className="flex-1">
                              <div className="text-sm font-bold" style={{ color: w.color }}>
                                {fc ? (
                                  <>{fc.high_f}°F / {fc.high_c}°C high · {fc.low_f}°F / {fc.low_c}°C low · {w.label}</>
                                ) : (
                                  <>{day.weather!.high}°/{day.weather!.low}°C · {w.label}</>
                                )}
                              </div>
                              <div className="text-xs" style={{ color: w.color }}>
                                {fc ? <>{fc.conditions} · {fc.precip_pct}% rain · UV {fc.uv}</> : <>{day.weather!.conditions} — {w.advice}</>}
                              </div>
                            </div>
                          </div>
                          {fc && (
                            <div className="text-[11px] mt-1.5 pt-1.5 border-t border-white/40" style={{ color: w.color }}>
                              🌅 {fc.sunrise} · 🌇 {fc.sunset}
                              {fc.caveat && <div className="mt-1 italic">{fc.caveat}</div>}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Tour-guide tip */}
                      {tip && (
                        <div className="mt-3 bg-amber-50 border-l-4 border-amber-300 rounded-r-lg p-2.5">
                          <div className="text-[11px] font-bold text-amber-700 uppercase tracking-wide mb-0.5">💡 Tour guide tip</div>
                          <div className="text-[13px] text-amber-900 leading-snug">{tip}</div>
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

// ═══ Sub-components ═══

function TodayBanner({ day }: { day: typeof tripData.days[0] }) {
  const fc = getForecast(day.dayNumber);
  const high_f = fc?.high_f;
  const primary = day.momNotes?.vibes[0] || 'rest';
  const v = VIBES[primary];
  return (
    <section className="rounded-2xl shadow-md border-2 border-amber-400 bg-gradient-to-br from-amber-50 to-white p-4">
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-16 h-16 rounded-xl flex flex-col items-center justify-center" style={{ background: v.bg }}>
          <div className="text-2xl leading-none">{v.emoji}</div>
          <div className="text-[10px] font-bold mt-1" style={{ color: v.color }}>{format(parseISO(day.date), 'M/d')}</div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-bold tracking-widest uppercase text-amber-700">TODAY</div>
          <div className="text-lg font-bold text-gray-900 leading-tight">{formatTripDate(day.date)}</div>
          <div className="text-sm font-semibold text-gray-800 mt-1">{day.momNotes?.blurb || day.title}</div>
          {high_f && <div className="text-xs text-gray-500 mt-1">{high_f}°F · {fc?.conditions}</div>}
        </div>
      </div>

      {day.driveRoute && <DriveRouteCard day={day} primary />}

      {day.momNotes?.tip && (
        <div className="mt-3 bg-amber-100/60 border-l-4 border-amber-400 rounded-r-lg p-2.5">
          <div className="text-[11px] font-bold text-amber-700 uppercase tracking-wide mb-0.5">💡 Tour guide tip</div>
          <div className="text-[13px] text-amber-900 leading-snug">{day.momNotes.tip}</div>
        </div>
      )}
    </section>
  );
}

function DriveRouteCard({ day, primary = false }: { day: typeof tripData.days[0]; primary?: boolean }) {
  const r = day.driveRoute;
  if (!r) return null;
  return (
    <div className={`mt-3 rounded-xl ${primary ? 'bg-white' : 'bg-slate-50'} border border-slate-200 p-3`}>
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-base font-bold text-slate-800">🚗 {r.from} → {r.to}</span>
        <span className="text-xs text-slate-500">{r.miles} mi · ~{r.driveHours}h drive</span>
      </div>
      <p className="text-sm text-slate-700 leading-snug mb-2">{r.tldr}</p>

      <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
        <div className="bg-slate-100 rounded p-2">
          <div className="text-[10px] font-bold uppercase text-slate-500">Leave</div>
          <div className="font-semibold text-slate-800">{r.departure}</div>
        </div>
        <div className="bg-slate-100 rounded p-2">
          <div className="text-[10px] font-bold uppercase text-slate-500">Arrive</div>
          <div className="font-semibold text-slate-800">{r.arrival}</div>
        </div>
        {r.sunset && (
          <div className="bg-orange-50 rounded p-2">
            <div className="text-[10px] font-bold uppercase text-orange-600">Sunset</div>
            <div className="font-semibold text-orange-800">{r.sunset}</div>
          </div>
        )}
        {r.forecast && (
          <div className="bg-blue-50 rounded p-2">
            <div className="text-[10px] font-bold uppercase text-blue-600">Forecast</div>
            <div className="font-semibold text-blue-800 text-[11px]">{r.forecast}</div>
          </div>
        )}
      </div>

      <div className="space-y-1.5 mb-3">
        <div className="text-[10px] font-bold uppercase text-slate-500 tracking-wide">Stops, in order</div>
        {r.stops.map((stop, i) => (
          <div key={i} className="flex gap-2 text-sm">
            <span className="shrink-0 text-base leading-none mt-0.5">{STOP_ICON[stop.type]}</span>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-slate-800">{stop.name}</div>
              <div className="text-[11px] text-slate-500">
                {stop.driveFromPrev && <span>{stop.driveFromPrev} · </span>}
                <span>{stop.timeNeeded}</span>
              </div>
              <div className="text-xs text-slate-700 mt-0.5">{stop.note}</div>
              {stop.url && <a href={stop.url} target="_blank" rel="noopener noreferrer" className="text-[11px] text-blue-600 hover:underline">More info →</a>}
            </div>
          </div>
        ))}
      </div>

      {r.preDeparture && r.preDeparture.length > 0 && (
        <details className="mt-2">
          <summary className="text-[11px] font-bold uppercase text-slate-500 tracking-wide cursor-pointer">Before leaving</summary>
          <ul className="mt-1 space-y-0.5 text-xs text-slate-700">
            {r.preDeparture.map((p, i) => <li key={i} className="flex gap-1.5"><span className="text-slate-400">☐</span>{p}</li>)}
          </ul>
        </details>
      )}

      {r.contingencies && r.contingencies.length > 0 && (
        <details className="mt-2">
          <summary className="text-[11px] font-bold uppercase text-slate-500 tracking-wide cursor-pointer">If things change</summary>
          <ul className="mt-1 space-y-0.5 text-xs text-slate-700">
            {r.contingencies.map((c, i) => <li key={i} className="flex gap-1.5"><span className="text-slate-400">•</span>{c}</li>)}
          </ul>
        </details>
      )}

      {r.alternatives && r.alternatives.length > 0 && (
        <details className="mt-2">
          <summary className="text-[11px] font-bold uppercase text-slate-500 tracking-wide cursor-pointer">Other routes considered</summary>
          <ul className="mt-1 space-y-1 text-xs text-slate-700">
            {r.alternatives.map((a, i) => (
              <li key={i}>
                <span className={`font-semibold ${a.verdict === 'skip' ? 'text-red-700' : a.verdict === 'save' ? 'text-blue-700' : 'text-slate-700'}`}>{a.name} — {a.verdict.toUpperCase()}.</span> <span className="text-slate-600">{a.why}</span>
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}
