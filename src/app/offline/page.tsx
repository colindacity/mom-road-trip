'use client';

import { TRAILS } from '@/data/trails';
import SiteNav from '@/components/SiteNav';
import { getTodayDayNumber } from '@/lib/dateUtils';

// Drive/route summaries — EVERY DAY of the trip, in order.
const ROUTES: { dayNum: number; date: string; label: string; url: string; note: string }[] = [
  { dayNum: 1, date: 'Sun May 10', label: 'Fly to Las Vegas + LINQ',
    url: 'https://www.google.com/maps/dir/Harry+Reid+International+Airport+Las+Vegas/LINQ+Hotel+3535+Las+Vegas+Blvd+South+Las+Vegas/Bacchanal+Buffet+Caesars+Palace+Las+Vegas/Bellagio+Fountains+Las+Vegas/Fremont+Street+Experience+Las+Vegas/',
    note: 'LAS · LINQ check-in · Bacchanal Buffet · Bellagio Fountains · Fremont St' },
  { dayNum: 2, date: 'Mon May 11', label: 'Las Vegas → Grand Canyon South Rim',
    url: 'https://www.google.com/maps/dir/LINQ+Hotel+Las+Vegas/Williams+AZ/Tusayan+AZ/Mather+Point+Grand+Canyon/Maswik+Lodge+Grand+Canyon+Village/',
    note: 'Williams (Route 66) · Tusayan · Mather Point sunset · Maswik Lodge' },
  { dayNum: 3, date: 'Tue May 12', label: 'Grand Canyon — Hermit Road + Yavapai',
    url: 'https://www.google.com/maps/dir/Maswik+Lodge+Grand+Canyon/Mather+Point+Grand+Canyon/Trailview+Overlook+Grand+Canyon/Maricopa+Point+Grand+Canyon/Powell+Point+Grand+Canyon/Hopi+Point+Grand+Canyon/The+Abyss+Grand+Canyon/Hermits+Rest+Grand+Canyon/',
    note: 'Hermit Road overlooks · Hopi Point sunset · Yavapai geology' },
  { dayNum: 4, date: 'Wed May 13', label: 'Grand Canyon → Page (Desert View + Cameron)',
    url: 'https://www.google.com/maps/dir/Grand+Canyon+Village+AZ/Grandview+Point+Grand+Canyon/Moran+Point+Grand+Canyon/Lipan+Point+Grand+Canyon/Desert+View+Watchtower/Cameron+Trading+Post+AZ/Page+AZ/',
    note: 'East Rim overlooks · Desert View Watchtower · Cameron · Page Airbnb' },
  { dayNum: 5, date: 'Thu May 14', label: 'Page — Antelope Canyon + Horseshoe Bend',
    url: 'https://www.google.com/maps/dir/871+Sandpiper+Dr+Page+AZ/Upper+Antelope+Canyon+Tour+Page+AZ/Horseshoe+Bend+Overlook+Page+AZ/Glen+Canyon+Dam+Overlook/871+Sandpiper+Dr+Page+AZ/',
    note: 'Upper Antelope tour · Horseshoe Bend · Glen Canyon Dam' },
  { dayNum: 6, date: 'Fri May 15', label: 'Page Work Day + Wahweap',
    url: 'https://www.google.com/maps/dir/871+Sandpiper+Dr+Page+AZ/Wahweap+Overlook+Lake+Powell/Glen+Canyon+Dam+Overlook+Page+AZ/Hanging+Gardens+Trail+Page+AZ/',
    note: 'Wahweap · Glen Canyon overlooks · Hanging Gardens (if time)' },
  { dayNum: 7, date: 'Sat May 16', label: 'Page → Moab via Monument Valley',
    url: 'https://www.google.com/maps/dir/Page+AZ/Monument+Valley+Navajo+Tribal+Park/Forrest+Gump+Point+US-163/Mexican+Hat+UT/Moab+UT/',
    note: 'Monument Valley · Forrest Gump Point · Mexican Hat · Moab' },
  { dayNum: 8, date: 'Sun May 17', label: 'Moab Work Day + Dead Horse Point',
    url: 'https://www.google.com/maps/dir/3442+Tierra+del+Sol+Dr+Moab+UT/Dead+Horse+Point+State+Park+UT/3442+Tierra+del+Sol+Dr+Moab+UT/',
    note: 'Mom solo: Dead Horse Point overlook' },
  { dayNum: 9, date: 'Mon May 18', label: 'Arches NP — Park Ave + Windows + Double Arch',
    url: 'https://www.google.com/maps/dir/Moab+UT/Arches+National+Park+Visitor+Center/Park+Avenue+Trailhead+Arches/Balanced+Rock+Arches/The+Windows+Loop+Arches/Double+Arch+Arches/Skyline+Arch+Arches/Moab+UT/',
    note: 'Park Ave · Balanced Rock · Windows · Double Arch · Skyline · Delicate Arch lower viewpoint' },
  { dayNum: 10, date: 'Tue May 19', label: 'Canyonlands ITS — Mesa Arch sunrise + Grand View',
    url: 'https://www.google.com/maps/dir/Moab+UT/Mesa+Arch+Trail+Canyonlands/Grand+View+Point+Canyonlands/Green+River+Overlook+Canyonlands/Island+in+the+Sky+Visitor+Center/Moab+UT/',
    note: 'Mesa Arch sunrise · Grand View Point · Green River Overlook' },
  { dayNum: 11, date: 'Wed May 20', label: 'Moab → SLC + Temple Square',
    url: 'https://www.google.com/maps/dir/Moab+UT/Green+River+UT/Price+UT/Soldier+Summit+UT/Temple+Square+Salt+Lake+City/241+W+200+S+Salt+Lake+City+UT/',
    note: 'Green River · Price · Soldier Summit · Temple Square · SLC Airbnb' },
  { dayNum: 12, date: 'Thu May 21', label: 'SLC Work Day — Capitol Hill / Liberty Park / Tracy Aviary',
    url: 'https://www.google.com/maps/dir/241+W+200+S+Salt+Lake+City/Liberty+Park+Salt+Lake+City/Tracy+Aviary+Salt+Lake+City/Utah+State+Capitol+Salt+Lake+City/241+W+200+S+Salt+Lake+City/',
    note: 'Mom solo: Liberty Park + Tracy Aviary + Capitol Hill' },
  { dayNum: 13, date: 'Fri May 22', label: 'SLC Work Day — Great Salt Lake',
    url: 'https://www.google.com/maps/dir/241+W+200+S+Salt+Lake+City/Saltair+Beach+Magna+UT/Great+Salt+Lake+State+Park/241+W+200+S+Salt+Lake+City/',
    note: 'Mom solo: Saltair + Great Salt Lake State Park' },
  { dayNum: 14, date: 'Sat May 23', label: 'SLC Explore — NHMU + Antelope Island + Ensign Peak',
    url: 'https://www.google.com/maps/dir/241+W+200+S+Salt+Lake+City/Natural+History+Museum+of+Utah/Antelope+Island+State+Park/Ensign+Peak+Trailhead+Salt+Lake+City/241+W+200+S+Salt+Lake+City/',
    note: 'NHMU · Antelope Island bison drive · Ensign Peak sunset' },
  { dayNum: 15, date: 'Sun May 24', label: 'SLC → Victor (via Pocatello + Swan Valley + Pine Creek Pass)',
    url: 'https://www.google.com/maps/dir/Salt+Lake+City+UT/Buddy%27s+Italian+Restaurant+626+E+Lewis+St+Pocatello+ID/Sportsman%27s+Warehouse+Idaho+Falls+ID/Snake+River+Greenbelt+Idaho+Falls/Palisades+Reservoir+ID/Pine+Creek+Pass+ID/8487+Caribou+Ct+Victor+ID+83455/',
    note: 'Buddy\'s lunch · bear spray @ Sportsman\'s · Idaho Falls River Walk · Palisades Res. · Pine Creek Pass · Victor cabin' },
  { dayNum: 16, date: 'Mon May 25', label: 'Tetons Day — Schwabacher reflection + Mormon Row + String Lake',
    url: 'https://www.google.com/maps/dir/Victor+ID/Teton+Pass+Summit+WY/Mormon+Row+Historic+District+WY/Oxbow+Bend+Turnout+Grand+Teton/Schwabacher+Landing+WY/Jackson+Lake+Lodge+WY/String+Lake+Trailhead+Grand+Teton/Victor+ID/',
    note: 'Teton Pass · Mormon Row · Oxbow Bend · Schwabacher reflection · Jackson Lake Lodge · String Lake · home' },
  { dayNum: 17, date: 'Tue May 26', label: 'Work day — cabin (rain)',
    url: 'https://www.google.com/maps/dir/8487+Caribou+Ct+Victor+ID/Citizen+33+Brewery+Driggs+ID/Pendl%27s+Pastries+Driggs+ID/Forage+Bistro+Driggs+ID/8487+Caribou+Ct+Victor+ID/',
    note: 'Cabin work · light Driggs town walk · Forage dinner' },
  { dayNum: 18, date: 'Wed May 27', label: 'Victor → West Yellowstone (check in first) → evening Old Faithful + Grand Prismatic',
    url: 'https://www.google.com/maps/dir/Victor+ID/Harriman+State+Park+Island+Park+ID/Big+Springs+Island+Park+ID/Crosswinds+Inn+201+Firehole+Ave+West+Yellowstone+MT/Old+Faithful+Yellowstone/Fairy+Falls+Trailhead+Yellowstone/Crosswinds+Inn+West+Yellowstone+MT/',
    note: 'Harriman/Island Park · Big Springs · check in 4pm · evening Old Faithful · Fairy Falls overlook (Mesa Falls already done on the way in)' },
  { dayNum: 19, date: 'Thu May 28', label: 'Yellowstone full loop (W. YS → Lamar → Mammoth → Canyon → W. YS)',
    url: 'https://www.google.com/maps/dir/West+Yellowstone+MT/Madison+Junction+Yellowstone/Lamar+Valley+Pullouts+Yellowstone/Tower+Fall+Yellowstone/Mammoth+Hot+Springs+Yellowstone/Artist+Point+Yellowstone/West+Yellowstone+MT/',
    note: 'Madison · Lamar (dawn wildlife) · Tower Fall · Mammoth · Artist Point · home' },
  { dayNum: 20, date: 'Fri May 29', label: 'West Yellowstone → Apgar Village + Robin lands FCA 3:34pm',
    url: 'https://www.google.com/maps/dir/West+Yellowstone+MT/Butte+MT/Missoula+MT/Glacier+Park+International+Airport+FCA/Apgar+Village+Lodge+West+Glacier+MT/',
    note: 'Butte · Missoula (lunch) · FCA Robin pickup 3:34pm · Apgar Village Lodge' },
  { dayNum: 21, date: 'Sat May 30', label: 'Glacier — Cedars + Lake McDonald + lodge fire (fog/rain)',
    url: 'https://www.google.com/maps/dir/Apgar+Village+Lodge+West+Glacier+MT/Apgar+Pebble+Beach+Glacier/Lake+McDonald+Lodge+Glacier/Trail+of+the+Cedars+Trailhead+Glacier/Apgar+Village+Lodge+West+Glacier+MT/',
    note: 'Pebble Beach · Trail of Cedars (mystical in fog) · Lake McDonald Lodge fire' },
  { dayNum: 22, date: 'Sun May 31', label: 'Avalanche AM (Colin+Robin) → FCA flights home',
    url: 'https://www.google.com/maps/dir/Apgar+Village+Lodge+West+Glacier+MT/Avalanche+Lake+Trailhead+Glacier/Apgar+Village+Lodge+West+Glacier+MT/Glacier+Park+International+Airport+FCA/',
    note: 'Avalanche Lake 5:30am hike · pack/checkout · FCA: Mom 2:30pm, Colin+Robin 5:40pm' },
];

// All trails for the trip (past + future). Past-day filtering happens in the render.
const ALL_TRAILS = TRAILS.filter(t => t.alltrails_url);

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
            {ALL_TRAILS.map((t, i) => (
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
{ALL_TRAILS.map(t => `${t.trail} — ${t.alltrails_url}`).join('\n')}
          </pre>
        </section>
      </div>
    </div>
  );
}
