'use client';

import { TRAILS } from '@/data/trails';
import SiteNav from '@/components/SiteNav';
import { getTodayDayNumber } from '@/lib/dateUtils';

// Drive/route summaries for each remaining day. Hand-curated multi-stop URLs.
const ROUTES: { dayNum: number; date: string; label: string; url: string; note: string }[] = [
  { dayNum: 15, date: 'Sun May 24', label: 'SLC → Driggs (via Pocatello + Swan Valley)',
    url: 'https://www.google.com/maps/dir/Salt+Lake+City+UT/Buddy%27s+Italian+Restaurant+626+E+Lewis+St+Pocatello+ID/Sportsman%27s+Warehouse+Idaho+Falls+ID/Snake+River+Greenbelt+Idaho+Falls/Palisades+Reservoir+ID/Pine+Creek+Pass+ID/8487+Caribou+Ct+Victor+ID+83455/',
    note: 'Buddy\'s lunch · bear spray @ Sportsman\'s · Idaho Falls River Walk · Palisades Res. · Pine Creek Pass · Driggs Airbnb' },
  { dayNum: 17, date: 'Tue May 26', label: 'Driggs → Tetons loop → Driggs',
    url: 'https://www.google.com/maps/dir/Driggs+ID/Teton+Pass+Summit+WY/Oxbow+Bend+Turnout+Grand+Teton/Mormon+Row+Historic+District+WY/Jackson+Lake+Lodge+WY/Schwabacher+Landing+WY/Cathedral+Group+Turnout+WY/Driggs+ID/',
    note: 'Teton Pass · Oxbow Bend · Mormon Row · Jackson Lake Lodge · Schwabacher · Cathedral Group · home' },
  { dayNum: 18, date: 'Wed May 27', label: 'Driggs → Yellowstone → West Yellowstone',
    url: 'https://www.google.com/maps/dir/Driggs+ID/Schwabacher+Landing+WY/West+Thumb+Geyser+Basin+Yellowstone/Old+Faithful+Yellowstone/Fairy+Falls+Trailhead+Yellowstone/West+Yellowstone+MT/',
    note: 'Schwabacher final look · West Thumb · Old Faithful · Fairy Falls (Grand Prismatic overlook) · hotel' },
  { dayNum: 19, date: 'Thu May 28', label: 'Yellowstone full loop (W. YS → Lamar → Mammoth → Canyon → W. YS)',
    url: 'https://www.google.com/maps/dir/West+Yellowstone+MT/Madison+Junction+Yellowstone/Lamar+Valley+Pullouts+Yellowstone/Tower+Fall+Yellowstone/Mammoth+Hot+Springs+Yellowstone/Artist+Point+Yellowstone/West+Yellowstone+MT/',
    note: 'Madison · Lamar (dawn wildlife) · Tower Fall · Mammoth · Artist Point · home' },
  { dayNum: 20, date: 'Fri May 29', label: 'West Yellowstone → Columbia Falls (Robin lands 3:34pm)',
    url: 'https://www.google.com/maps/dir/West+Yellowstone+MT/Butte+MT/Missoula+MT/Polson+MT/Columbia+Falls+MT/Glacier+Park+International+Airport+FCA/',
    note: 'Butte · Missoula (lunch) · Polson · Columbia Falls · FCA pickup' },
  { dayNum: 21, date: 'Sat May 30', label: 'Glacier loop (Lake McDonald + Avalanche)',
    url: 'https://www.google.com/maps/dir/Columbia+Falls+MT/Apgar+Visitor+Center+Glacier/Lake+McDonald+Lodge/Trail+of+the+Cedars+Trailhead+Glacier/Avalanche+Lake+Trailhead+Glacier/Apgar+Village+MT/Columbia+Falls+MT/',
    note: 'Apgar · Lake McDonald · Cedars boardwalk · Avalanche TH · pebble beach · home' },
  { dayNum: 22, date: 'Sun May 31', label: 'Columbia Falls → FCA (fly home)',
    url: 'https://www.google.com/maps/dir/Columbia+Falls+MT/Glacier+Park+International+Airport+FCA/',
    note: 'Final 15min drive to the airport' },
];

const REMAINING_TRAILS = TRAILS.filter(t => t.trip_days.some(d => d >= 15) && t.alltrails_url);

const OFFLINE_REGIONS = [
  { name: 'SE Idaho', covers: 'Idaho Falls → Driggs → Jackson Hole', notes: 'Day 15 + 16 + 17 morning' },
  { name: 'Grand Teton + Jackson', covers: 'Driggs ↔ Teton Pass ↔ Jackson Lake', notes: 'Day 17 full' },
  { name: 'Yellowstone NP + West Yellowstone', covers: 'Entire park + town', notes: 'Day 18 + 19' },
  { name: 'Glacier NP + Kalispell/FCA', covers: 'Columbia Falls + Apgar + Lake McDonald + airport', notes: 'Day 20 + 21 + 22' },
];

export default function OfflinePage() {
  const todayDayNum = getTodayDayNumber() ?? 15;

  return (
    <div className="min-h-screen bg-white">
      <SiteNav current="offline" />

      <div className="max-w-3xl mx-auto px-4 py-6 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Offline Survival Kit</h1>
          <p className="text-sm text-gray-600 mt-1">
            One-tap multi-stop routes + AllTrails downloads for the rest of the trip.
            Save this page to home screen, or screenshot — every link works without app reinstall.
          </p>
        </div>

        {/* iOS instructions */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">iOS Google Maps tip</h2>
          <p className="text-sm text-gray-700">
            iOS Google Maps clears your route when you background the app for &gt;2min (Camera, other apps).
            No setting fixes this. Three layers of defense:
          </p>
          <ol className="text-sm text-gray-700 mt-2 space-y-1 list-decimal pl-5">
            <li><b>Download offline regions tonight on WiFi.</b> Google Maps → profile pic → Offline maps → Select your own map. Download the 4 regions below.</li>
            <li><b>Tap any route link below</b> to recreate the full multi-stop directions in 1 second.</li>
            <li><b>Star every waypoint</b> as a Saved Place — works offline.</li>
          </ol>
        </section>

        {/* Offline regions to download */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Offline regions to download</h2>
          <div className="space-y-1.5">
            {OFFLINE_REGIONS.map(r => (
              <div key={r.name} className="text-sm">
                <span className="font-medium text-gray-900">{r.name}</span>
                <span className="text-gray-600"> — {r.covers}</span>
                <span className="text-gray-400 text-xs ml-2">({r.notes})</span>
              </div>
            ))}
          </div>
        </section>

        {/* Routes */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Driving routes (tap to open in Google Maps)</h2>
          <div className="space-y-3">
            {ROUTES.map(r => {
              const isToday = r.dayNum === todayDayNum;
              const isPast = r.dayNum < todayDayNum;
              return (
                <div key={r.dayNum} className={`border-l-2 pl-3 ${isToday ? 'border-emerald-500' : isPast ? 'border-gray-200' : 'border-gray-300'}`}>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className={`text-sm font-semibold ${isToday ? 'text-emerald-700' : isPast ? 'text-gray-400' : 'text-gray-900'}`}>
                      {r.date}
                    </span>
                    {isToday && <span className="text-xs font-medium bg-emerald-500 text-white px-1.5 py-0.5 rounded">TODAY</span>}
                    <span className={`text-xs font-mono ${isPast ? 'text-gray-300' : 'text-gray-500'}`}>d{r.dayNum}</span>
                  </div>
                  <div className={`text-sm font-medium mt-0.5 ${isPast ? 'text-gray-400' : 'text-gray-800'}`}>{r.label}</div>
                  <div className={`text-xs mt-0.5 ${isPast ? 'text-gray-300' : 'text-gray-500'}`}>{r.note}</div>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block mt-1.5 text-sm font-medium ${isPast ? 'text-gray-400' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    🗺️ Open route →
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* AllTrails */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">AllTrails downloads</h2>
          <p className="text-sm text-gray-600 mb-3">
            Open each link in AllTrails app, tap the cloud-arrow icon to cache map + trail line offline.
            Requires AllTrails+ ($36/yr) — worth it for this trip.
          </p>
          <div className="space-y-1.5">
            {REMAINING_TRAILS.map((t, i) => (
              <div key={i} className="text-sm flex items-start gap-2">
                <span className="text-xs font-mono text-gray-400 mt-0.5 shrink-0">
                  {t.miles_rt}mi {t.elevation_gain_ft > 0 ? `+${t.elevation_gain_ft}ft` : 'flat'}
                </span>
                <div className="flex-1 min-w-0">
                  <a
                    href={t.alltrails_url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {t.trail}
                  </a>
                  <span className="text-xs text-gray-500"> — {t.park}</span>
                  <div className="text-xs text-gray-500 mt-0.5">{t.notes}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Verbatim block */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Plain-text backup (email this to yourself)</h2>
          <p className="text-xs text-gray-500 mb-2">If everything else fails, these URLs survive in your inbox or Notes app.</p>
          <pre className="text-xs bg-gray-50 border border-gray-200 rounded p-3 overflow-x-auto whitespace-pre-wrap font-mono text-gray-700 leading-relaxed">
{ROUTES.map(r => `${r.date} (d${r.dayNum}) — ${r.label}\n${r.url}\n`).join('\n')}
{`\n\nAllTrails:\n`}
{REMAINING_TRAILS.map(t => `${t.trail} — ${t.alltrails_url}`).join('\n')}
          </pre>
        </section>
      </div>
    </div>
  );
}
