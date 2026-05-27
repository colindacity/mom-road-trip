'use client';

import { tripData } from '@/data/tripData';
import SiteNav from '@/components/SiteNav';
import { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { getTodayDayNumber } from '@/lib/dateUtils';

type DayLog = { albumUrl?: string; caption?: string; images: string[] };
type LogStore = Record<string, DayLog>;

const STORAGE_KEY = 'mrt-travel-log-v1';

export default function LogPage() {
  const [store, setStore] = useState<LogStore>({});
  const [loaded, setLoaded] = useState(false);
  const todayNum = getTodayDayNumber();

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setStore(JSON.parse(raw));
    } catch {}
    setLoaded(true);
  }, []);

  const save = (next: LogStore) => {
    setStore(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
  };

  const updateDay = (id: string, patch: Partial<DayLog>) => {
    const cur = store[id] || { images: [] };
    save({ ...store, [id]: { ...cur, ...patch } });
  };

  const addImage = (id: string, url: string) => {
    const u = url.trim();
    if (!u) return;
    const cur = store[id] || { images: [] };
    save({ ...store, [id]: { ...cur, images: [...cur.images, u] } });
  };

  const removeImage = (id: string, idx: number) => {
    const cur = store[id];
    if (!cur) return;
    save({ ...store, [id]: { ...cur, images: cur.images.filter((_, i) => i !== idx) } });
  };

  // Only show days up to and including today (a log is a record of what happened).
  const days = tripData.days.filter(d => todayNum == null || d.dayNumber <= todayNum);

  return (
    <div className="min-h-screen bg-white">
      <SiteNav current="log" />
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Travel Log</h1>
          <p className="text-sm text-gray-600 mt-1">
            The trip day by day. Add your own photos to each day. Saved on this device.
          </p>
        </div>

        <section className="text-sm text-gray-700 bg-gray-50 rounded-lg p-3 space-y-2">
          <p className="font-medium text-gray-900">How to add your photos</p>
          <p>
            <b>Google Photos:</b> open an album, tap Share, Create link, Copy. Paste it in the
            album-link box on a day. For a single photo: open it, Share, Create link, Copy, paste
            in the image box.
          </p>
          <p>
            <b>iCloud:</b> in Photos make a Shared Album, turn on Public Website, copy that link
            into the album box. For one image, open the shared photo on iCloud.com and copy its link.
          </p>
          <p className="text-gray-500">
            Photos stay on this device (private). To move the log to another phone, re-paste the
            links there.
          </p>
        </section>

        {!loaded ? (
          <p className="text-sm text-gray-400">Loading your photos…</p>
        ) : (
          <div className="space-y-8">
            {days.map(day => {
              const log = store[day.id] || { images: [] };
              const story = [day.summary, day.momNotes?.blurb].filter(Boolean).join(' ');
              const isToday = day.dayNumber === todayNum;
              return (
                <article key={day.id} className="border-b border-gray-100 pb-6">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h2 className="text-lg font-semibold text-gray-900">{format(parseISO(day.date), 'EEEE, MMMM d')}</h2>
                    {isToday && <span className="text-xs font-medium bg-emerald-500 text-white px-1.5 py-0.5 rounded">TODAY</span>}
                    <span className="text-xs font-mono text-gray-400">day {day.dayNumber}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-800 mt-0.5">{day.title}</p>
                  {story && <p className="text-sm text-gray-600 mt-1">{story}</p>}

                  {/* Photo grid */}
                  {log.images.length > 0 && (
                    <div className="grid grid-cols-3 gap-1.5 mt-3">
                      {log.images.map((src, i) => (
                        <div key={i} className="relative group aspect-square">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={src} alt="" className="w-full h-full object-cover rounded" loading="lazy" />
                          <button
                            onClick={() => removeImage(day.id, i)}
                            className="absolute top-1 right-1 bg-black/60 text-white text-xs rounded px-1 opacity-0 group-hover:opacity-100"
                            aria-label="Remove photo"
                          >×</button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Album link */}
                  {log.albumUrl && (
                    <a href={log.albumUrl} target="_blank" rel="noopener noreferrer"
                       className="inline-block mt-2 text-sm font-medium text-blue-600 hover:text-blue-800">
                      📸 View shared album →
                    </a>
                  )}

                  {/* Add controls */}
                  <div className="mt-3 space-y-1.5">
                    <PasteRow placeholder="Paste an image link, press Enter" onAdd={(v) => addImage(day.id, v)} />
                    <PasteRow
                      placeholder="Paste a shared album link (Google Photos / iCloud)"
                      initial={log.albumUrl || ''}
                      onAdd={(v) => updateDay(day.id, { albumUrl: v.trim() || undefined })}
                      saveLabel="Save album"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function PasteRow({ placeholder, onAdd, initial = '', saveLabel = 'Add' }: {
  placeholder: string; onAdd: (v: string) => void; initial?: string; saveLabel?: string;
}) {
  const [v, setV] = useState(initial);
  return (
    <div className="flex gap-1.5">
      <input
        value={v}
        onChange={(e) => setV(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') { onAdd(v); if (saveLabel === 'Add') setV(''); } }}
        placeholder={placeholder}
        className="flex-1 text-sm border border-gray-200 rounded px-2 py-1 focus:outline-none focus:border-blue-400"
      />
      <button
        onClick={() => { onAdd(v); if (saveLabel === 'Add') setV(''); }}
        className="text-sm font-medium text-blue-600 hover:text-blue-800 px-2 shrink-0"
      >{saveLabel}</button>
    </div>
  );
}
