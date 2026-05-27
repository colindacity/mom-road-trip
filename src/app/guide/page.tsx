'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight, MapPin, Compass, Backpack, Clock, Heart, Camera, AlertTriangle } from 'lucide-react';
import SiteNav from '@/components/SiteNav';
import { getForecast, getHourly, getMultiLoc } from '@/data/forecast';
import { trailsForDay } from '@/data/trails';
import { stopsForDay, BUY_RENT } from '@/data/buyRent';
import { tripData } from '@/data/tripData';
import { getTodayDay, formatTripDateLong } from '@/lib/dateUtils';
import { DriveStop } from '@/types/trip';

const STOP_ICON: Record<DriveStop['type'], string> = {
  lunch: '🍽',
  view: '📸',
  wildlife: '🦌',
  walk: '🚶',
  bathroom: '🚻',
  bonus: '✨',
};

// ─── Helper components ───
const H = ({ children }: { children: React.ReactNode }) =>
  <h3 className="text-base font-bold text-amber-700 mt-5 mb-2">{children}</h3>;
const P = ({ children }: { children: React.ReactNode }) =>
  <p className="text-sm text-gray-700 leading-relaxed mb-2">{children}</p>;
const B = ({ children }: { children: React.ReactNode }) =>
  <strong className="text-gray-900">{children}</strong>;
const Strike = ({ children }: { children: React.ReactNode }) =>
  <span className="line-through text-gray-400">{children}</span>;
const Ul = ({ items }: { items: string[] }) =>
  <ul className="list-disc list-outside ml-5 text-sm text-gray-700 space-y-1 mb-3">{items.map((i, n) => <li key={n}>{i}</li>)}</ul>;
const Ol = ({ items }: { items: string[] }) =>
  <ol className="list-decimal list-outside ml-5 text-sm text-gray-700 space-y-1 mb-3">{items.map((i, n) => <li key={n}>{i}</li>)}</ol>;
const Note = ({ children }: { children: React.ReactNode }) =>
  <div className="bg-blue-50 border-l-4 border-blue-300 p-3 my-3 text-sm text-blue-900">{children}</div>;
const Warning = ({ children }: { children: React.ReactNode }) =>
  <div className="bg-amber-50 border-l-4 border-amber-400 p-3 my-3 text-sm text-amber-900 flex items-start gap-2"><AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" /><div>{children}</div></div>;

// ─── Tour-guide research data ───
type Section = { id: string; title: string; emoji: string; days: string; content: React.ReactNode };

const SECTIONS: Section[] = [
  {
    id: 'vegas', title: 'Las Vegas', emoji: '🎰', days: 'Sun May 10 (Day 1)',
    content: (<>
      <H>Tactic of the Day</H>
      <P><B>Take an Uber from LAS to LINQ; pick up the rental car next morning.</B> Mom is jet-lagged 3hr from Toronto. Save her the rental shuttle + paperwork dance. Uber: $10-20 + $4.50 LAS surcharge, ~10-15min ride.</P>

      <H>Hour-by-Hour</H>
      <Ul items={[
        '2:30pm Land LAS, baggage, Uber to LINQ (~3:15pm)',
        '3:15-4:15pm Front desk holds bags if room not ready. Mom rests',
        '4:15-5:15pm Walk to Bacchanal, arrive 15min early',
        '5:30pm Bacchanal Buffet (1.5-2hrs)',
        '7:30pm Stroll to Bellagio (~12min)',
        '8:00pm Bellagio fountain (every 15min after 8pm)',
        '9:30pm Bed — Mom on Toronto midnight. SKIP Fremont tonight.',
      ]} />

      <H>Bacchanal Buffet — Order of Attack</H>
      <P><B>HIT FIRST:</B> King crab legs, lobster claws, prime rib, lamb chops</P>
      <P><B>SKIP:</B> Pasta, pizza, generic carved turkey, salads (waste of stomach)</P>
      <P><B>SLEEPER HITS:</B> Korean fried chicken wings, quesabirria tacos</P>
      <P><B>DESSERT:</B> Macarons, gelato, mini crème brûlée</P>
      <P>Sunday 5:30pm = dinner menu (better than brunch — lobster claws "two ways," 3 crab varieties, prime rib, t-bone, bone marrow, Cajun seafood boil).</P>
      <P><B>Walk from LINQ:</B> South across LINQ Promenade, cross Flamingo Rd at pedestrian bridge, enter Caesars from Strip. ~10-12min indoor/outdoor mix.</P>

      <H>Bellagio Fountains — Best Viewing for Mom</H>
      <P><B>Beer Park at Paris Las Vegas</B> — outdoor patio across the street, front row, cost of one drink. Mom can sit.</P>
      <P>Free benches: along lake-walk path north & south of main viewing area.</P>

      <Note>Strip is 4.2 miles end-to-end. Looks short on a map but resorts are MASSIVE. LINQ↔Bellagio = 12-18min slow walk. Take indoor routes. Free Bellagio Conservatory bathroom is the nicest on the Strip.</Note>
    </>),
  },
  {
    id: 'gc', title: 'Grand Canyon', emoji: '🏜️', days: 'Mon May 11 – Wed May 13',
    content: (<>
      <H>Drive Vegas → GC (Mon)</H>
      <P>US-93 S → Kingman → I-40 E → exit 165 (Williams) → AZ-64 N. <B>~280mi/4.5hr.</B> Leave Vegas ~9am PT. Cross into MST at Hoover Dam (AZ no DST).</P>
      <P><B>Gas:</B> Top off in Kingman or Williams. NOT Tusayan.</P>
      <P><B>Lunch in Williams:</B> Pine Country Restaurant (sit-down, fast, famous pies). Skip Seligman — 30+ min detour.</P>

      <H>Mather Point Sunset (Mon)</H>
      <P>Sunset May 11 = <B>7:24pm MST</B>. Park Visitor Center Lots 1-4. Arrive 6:00-6:15pm.</P>
      <P><B>Pro move:</B> Walk 5min east on Rim Trail to "Mather Point East" — same canyon, half the people.</P>

      <H>Day 3 — Three Viewpoints, That's It</H>
      <P>Don't try to "do" the canyon. Three viewpoints done well &gt; eight done exhausted.</P>
      <Ol items={[
        'Morning: Yavapai Geology Museum + Rim Trail walk to Mather (1.4mi RT, paved, benches every 0.2mi)',
        'Lunch: Put name in at El Tovar 11:15am, walk 2min to Bright Angel as fallback (Arizona Steakhouse)',
        'Afternoon: Hermit Road Red Route shuttle to Hopi Point only (THE sunset spot). +Mohave if energy',
        'Evening: Optional 2nd sunset at Hopi (shuttle 5:45pm) OR rest at Maswik with rim path 5min away',
      ]} />

      <H>Altitude (7,000ft)</H>
      <P>Real but rarely serious. Mom risk profile is fine. <B>Tactics:</B> 3-4L water/day, electrolytes (LMNT/Liquid IV) in one bottle, half-portion alcohol night 1, no big climbs day 1.</P>

      <H>Photo Timing</H>
      <Ul items={[
        'Mather Point: Sunset (east-facing shadows) and sunrise',
        'Hopi Point: BEST sunset (west-facing peninsula)',
        'Yavapai Point: Mid-morning (north light)',
      ]} />

      <Note>El Tovar lunch wasn&apos;t booked (Tock window passed Apr 12). Walk-ins routinely turned away. Backups all walk-in friendly: Arizona Steakhouse, Bright Angel Lounge, Maswik Food Court.</Note>
    </>),
  },
  {
    id: 'page', title: 'Page, AZ', emoji: '🌊', days: 'Wed May 13 – Fri May 15',
    content: (<>
      <H>Drive GC → Page (Wed)</H>
      <P>Desert View Drive eastbound (25mi within park) → East Entrance → US-89 N via Cameron → Page. <B>~140mi/2.5hr.</B></P>
      <P><B>YES do Desert View Watchtower morning</B> before driving — directly on exit route.</P>
      <P>Lunch: Cameron Trading Post (~12:30pm Navajo tacos). <B>Gas at Cameron — only reliable stop.</B></P>

      <H>Horseshoe Bend Sunset (Wed)</H>
      <P>Sunset May 13: <B>~7:25pm MST</B>. Arrive 6:30pm. Parking <B>$10/vehicle</B>, NO discounts accepted.</P>
      <P>Trail 1.5mi RT, ABA-compliant packed dirt, mostly flat with slight rise. 2 shade structures en route, NONE at overlook.</P>
      <P><B>Photo position: stand on LEFT (west) side</B> of overlook for classic horseshoe symmetry. Mom can do this. Vault toilets at trailhead, NO water — bring 1L pp.</P>

      <H>⭐ Upper Antelope Canyon Tour (Thu, 10am MST)</H>
      <P><B>Office:</B> Antelope Slot Canyon Tours, 22 South Lake Powell Blvd, Page AZ. Arrive 9:30am minimum.</P>
      <Warning>NO bags, fanny packs, hydration packs, backpacks. Only: phone, camera, ONE water bottle in hand. <B>Leave purses in car.</B> Banned: tripods, monopods, selfie sticks, drones, GoPros.</Warning>
      <P><B>Camera tips:</B> Phone HDR mode handles contrast. For light beams, tap to expose for the bright beam. Guides throw sand into beams.</P>
      <P><B>Total:</B> ~2.5hrs (15min orient + 20min truck + 60-75min in canyon). Done by 12:30pm.</P>
      <P><B>Tour operates on MST</B> (Arizona time = same as PDT in summer) — verified on their website. Light beams: 10am tour catches leading edge, peak 11am-1:30pm.</P>

      <H>Lake Powell Afternoon (Thu PM)</H>
      <Ul items={[
        'Lunch: Lake Powell Resort (Wahweap Marina) — Driftwood Lounge, lake views',
        'Glen Canyon Dam Overlook (FREE, 5min walk on US-89)',
        'Wahweap Overlook (drive-up)',
        'Optional boat tour from Wahweap (90-min Antelope-by-water): minimal walking, audio narration, restrooms onboard. 928-645-1150',
      ]} />

      <H>Day 6 (Fri) — Mom Solo, Colin Working</H>
      <Ul items={[
        'John Wesley Powell Museum (small, indoor, AC, ~1hr) — walkable downtown',
        'Hanging Gardens Trail (1.2mi RT easy, shaded alcove) — 5min drive',
        'Glen Canyon Dam Visitor Center (indoor, free, AC)',
        'Walking around downtown Page (Lake Powell Blvd)',
      ]} />

      <Note>Restaurants: Wed dinner = State 48 Tavern (American). Thu dinner = Big John&apos;s Texas BBQ (institution). Backups: BirdHouse, Gone West, El Tapatio.</Note>
    </>),
  },
  {
    id: 'moab', title: 'Moab', emoji: '🪨', days: 'Sat May 16 – Tue May 19',
    content: (<>
      <H>🎉 GREAT NEWS</H>
      <P><B>Arches timed-entry CANCELLED for 2026.</B> No reservation needed. Just drive in. (Confirmed via NPS Feb 18, 2026 announcement.)</P>
      <P><B>BUT:</B> When parking fills (Delicate Arch / Windows / Devils Garden), rangers temporarily restrict entry. <B>Arrive before 8am or after 3pm</B> on Day 9.</P>

      <H>Drive Page → Moab via Monument Valley (Sat, 270mi/~6.5hr)</H>
      <Ol items={[
        'Page → Kayenta (~2hr, 125mi). FUEL UP IN PAGE — only one station between',
        'Kayenta — mandatory fuel + restroom stop',
        'Kayenta → Monument Valley (~25min)',
        'Monument Valley → Mexican Hat → Bluff → Moab (~150mi, 2.5hr)',
      ]} />
      <P><B>Monument Valley:</B> View Hotel deck = FREE viewpoint of West/East Mitten + Merrick Butte. <B>SKIP the 17-mile loop drive</B> — gravel, sand, not rental-car friendly. Forrest Gump Point on US-163 NORTH of park (Mile Marker 13) is on your route.</P>

      <H>Day 9 — Arches Full Day (Mom-Realistic)</H>
      <P>Heat: May 18 highs ~85°F. <B>Enter park by 7am.</B></P>
      <table className="text-xs w-full"><tbody>
        <tr><td className="pr-2">7:00am</td><td>Park Avenue Viewpoint</td></tr>
        <tr><td>7:45</td><td>Balanced Rock (0.3mi paved loop)</td></tr>
        <tr><td>8:15</td><td>Windows Section (1mi loop, sandy)</td></tr>
        <tr><td>9:15</td><td>Double Arch (0.5mi RT flat)</td></tr>
        <tr><td>10:30</td><td><B>Delicate Arch LOWER VIEWPOINT</B> (100yd flat) — NOT 3mi arch trail</td></tr>
        <tr><td>11:30</td><td>LUNCH BACK IN MOAB — escape midday heat</td></tr>
        <tr><td>3:30pm</td><td>Skyline Arch (drive-by) + optional Devils Garden</td></tr>
        <tr><td>5:30</td><td>Park Avenue golden hour</td></tr>
        <tr><td>7:00</td><td>Balanced Rock at sunset</td></tr>
      </tbody></table>

      <H>Day 10 — Mesa Arch Sunrise</H>
      <P>May 19 sunrise = <B>6:07am Moab time</B>. <B>Leave Moab 4:30am, arrive 5:20am</B> (parking fills 60-90min before sunrise).</P>
      <P>0.7mi RT easy gravel, ~10min walk. ~6 prime tripod spots. Arch glows for ~1hr after sunrise — no rush leaving.</P>
      <P><B>Then drive-up viewpoints:</B> Shafer Canyon → Buck Canyon → Grand View Point → <B>Green River Overlook</B> (best drive-up view). Skip all hikes.</P>

      <H>Day 8 (Sun) — Mom Solo Activities</H>
      <Ul items={[
        'Mill Creek Parkway 2-mi paved riverside, wheelchair accessible, benches',
        'Pool/hot tub at Airbnb',
        'Moab Information Center (free, AC, maps)',
        'Moab Museum CLOSED Sunday — move to Mon AM if she wants it',
      ]} />

      <Warning>Senior Pass note: America the Beautiful Senior Pass ($80 lifetime) is US citizens/permanent residents only. Mom may NOT qualify. Standard pass $80/year or $30/vehicle Arches entry — Colin&apos;s pass covers her as passenger.</Warning>

      <Note>Restaurants: Moab Brewery (casual), Antica Forma (Neapolitan pizza), Sabaku Sushi (takeout-friendly), Diavolo (high-end at Sorrel River, 17mi).</Note>
    </>),
  },
  {
    id: 'slc', title: 'Salt Lake City', emoji: '🏔️', days: 'Wed May 20 – Sat May 23',
    content: (<>
      <H>Drive Moab → SLC (Wed, 230mi/4hr)</H>
      <P><B>Lunch: Tamarisk Restaurant in Green River</B> (51mi from Moab, ~1hr in). Riverside views, classic since 1979. Push to SLC by 4pm.</P>

      <H>Temple Square (Wed PM)</H>
      <P><B>Brand-new Visitors&apos; Center opens May 18, 2026</B> — 2 days before your arrival. Salt Lake Temple closed (renovation through 2027). Conference Center closed.</P>
      <P><B>Tabernacle organ recitals:</B> Mon-Sat 12-12:30pm, Sun 2-2:30pm. Plan Thu/Fri lunch break around it. Family History Library is free + helpful.</P>

      <H>Mom Solo Days 12-13</H>
      <P><B>Walking distance from 241 W 200 S:</B> City Creek Center, Temple Square (4 blocks), Family History Library, Eccles/Capitol Theaters</P>
      <P><B>Easy Uber:</B> Tracy Aviary at Liberty Park ($14, paved paths, ADHD-friendly), Hogle Zoo, This Is The Place Heritage Park ($9 senior)</P>
      <P><B>Built-in:</B> Rooftop pool/hot tub at Airbnb for joint recovery</P>

      <H>Day 14 Saturday — Order Matters</H>
      <Ol items={[
        '9am Antelope Island ($10/car). MUST BRING fine-mesh head nets — May = peak no-see-um/biting gnat season. Buffalo Point breezier. Out by 12:30pm',
        '2-5pm Natural History Museum of Utah ($20.95 senior, NOT $18). Past Worlds dinosaurs, Native Voices, Bug World, rooftop terrace',
        '7pm Ensign Peak (sunset 8:35pm). 0.9mi RT (NOT 0.8), steep — hiking poles strongly recommended for Mom. Bring headlamp for descent',
      ]} />

      <H>Restaurants</H>
      <P><B>Red Iguana</B> (Utah&apos;s best Mexican 25+ years). Mole sampler complimentary. <B>Pro tip:</B> Hit Red Iguana <B>2</B> at 866 W S Temple — same menu, shorter line.</P>
      <P>Caputo&apos;s Market & Deli (3min walk for work-day lunch). The Copper Onion (upscale, reservations). Crown Burgers (Utah classic pastrami burger).</P>
      <P><Strike>Lamb&apos;s Grill</Strike> permanently closed 2017.</P>

      <H>Coffee/Breakfast for Work Days</H>
      <P>La Barba (327 W 200 S, 1-block from Airbnb), Eva&apos;s Bakery, Salt Lake Roasting Co, The Park Cafe (institution)</P>

      <Note><B>Sun May 24 → Driggs (285mi/4h45):</B> I-15 N → Pocatello lunch at <B>Buddy&apos;s Italian</B> (Exit 69, family-run since 1955) ~2:30pm → Idaho Falls → <B>US-26 E Swan Valley + Palisades Reservoir</B> (moose/elk dusk window) → ID-31 Pine Creek Pass → Victor → Driggs ~6:30pm. Sunset 8:52pm MDT. Skip Logan/Bear Lake (adds 90min, 54°F water). Save Teton Pass for Tuesday GTNP loop. See <B>/mom</B> Today banner for the full drive plan.</Note>
    </>),
  },
  {
    id: 'tetons', title: 'Driggs / Tetons', emoji: '⛰️', days: 'Sun May 24 – Tue May 26',
    content: (<>
      <Warning>NEW 2026 FEE: <B>$100/person non-resident surcharge</B> for Mom (Canadian). Total Grand Teton entry: $35 + $100 = $135. America the Beautiful $80 → $80 + $100 = $180 (only worth if hitting other parks). Recommend $135 single-park entry.</Warning>

      <H>Mom Solo Day 16 (Memorial Day)</H>
      <Ul items={[
        'Teton Geo Center (60 S Main, Mon 10am-4pm, free) — small interactive geology/history',
        'Driggs Main Street stroll — 2 blocks of shops/galleries',
        'Spud Drive-In iconic giant potato photo (231 S Hwy 33)',
        'Teton Creek Corridor / Sherman Park — paved level path',
        'Tatanka Tavern 3rd-floor Teton view for lunch',
        'Rest day kit: book, downloaded shows, mountain view from deck',
      ]} />

      <H>Day 17 Tue — Grand Teton Loop</H>
      <Warning>❌ Signal Mountain Summit Road CLOSED in May (opens late June). Cut from itinerary.</Warning>
      <P><B>Suggested order from Driggs (clockwise loop):</B></P>
      <Ol items={[
        '6:30am leave Victor → Teton Pass → Mormon Row ~7:15am (sunrise May 26 ≈ 5:50am MDT — for true golden hour leave 4:45am, likely too much for Mom)',
        'Mormon Row (Moulton barns + balsamroot wildflowers) — 30min',
        'Schwabacher Landing (0.5mi flat, aspen/Tetons reflection) — 30min',
        'Snake River Overlook (Ansel Adams spot, drive-up) — 15min',
        'Lunch in Jackson ~11:30am: Persephone Bakery or Snake River Brewing',
        'Chapel of the Transfiguration (small log chapel, Tetons through window) — 20min',
        'String Lake picnic area (skip Hidden Falls boat — too steep). Sit by water; optional flat 1mi walk',
        'Oxbow Bend afternoon (best light on Mt Moran reflection, moose habitat) — 30min',
        'Return via Moran Junction → Hwy 26 → Hwy 33 back to Victor — AVOIDS re-driving Teton Pass at dusk ✅',
      ]} />

      <H>Wildlife (peak baby animal season)</H>
      <P>Bison + pronghorn on Antelope Flats (Mormon Row), moose at Oxbow Bend & Schwabacher, eagles, bears emerging. <B>100yd from bears, 25yd from bison/moose.</B> Bear spray rentable in Jackson at Teton Mountaineering only if doing String Lake walk.</P>

      <Note>Weather late May Jackson: highs 60-65°F, lows 35-40°F, 38% chance rain/snow. Pack: warm layers, fleece, light puffy, gloves for sunrise, waterproof shell, sturdy shoes. Restaurants Driggs/Victor: Tatanka Tavern, Royal Wolf, Forage Bistro, Provisions, Teton Thai, Citizen 33 Brewery, Rise Coffee.</Note>
    </>),
  },
  {
    id: 'yellowstone', title: 'Yellowstone', emoji: '🦬', days: 'Wed May 27 – Thu May 28',
    content: (<>
      <H>Drive Driggs → West Yellowstone (Wed)</H>
      <P><B>Skip the south-entrance detour.</B> Drive Driggs → ID-33 → Hwy 20 N → West Yellowstone (~85mi, 1h45m-2h). Enter from west.</P>
      <P>Leave Driggs ~10am after breakfast → arrive West Yellowstone ~12pm. Lunch in town. ~1pm enter park.</P>

      <H>Wed Afternoon — Old Faithful + Grand Prismatic</H>
      <Ul items={[
        'Old Faithful eruption — every ~90min, predicted times at Visitor Education Center. Watch from boardwalk benches',
        'After eruption: Upper Geyser Basin counter-clockwise loop (~1mi flat boardwalk) past Castle, Grand, Beehive — quieter than main viewing area',
        'Step inside Old Faithful Inn lobby (1904 log architecture — 10min worth even if not eating)',
        'Grand Prismatic via Fairy Falls Trailhead OVERLOOK (1.2mi RT, 105ft gain over 0.6mi). NOT the Midway boardwalk — overlook is the iconic shot AND senior-friendly. NPS calls it "very well-suited for seniors."',
        'Backup if Mom tired: Midway Geyser Basin boardwalk (0.5mi flat at the spring)',
      ]} />

      <H>Day 19 — Counter-Clockwise Grand Loop</H>
      <P>Route: West Yellowstone → Madison → Norris → Mammoth → Tower → Lamar → back via Tower → Canyon → Norris → West. ~200mi, 10-12hrs realistic.</P>
      <table className="text-xs w-full"><tbody>
        <tr><td className="pr-2">7:00am</td><td>Depart West Yellowstone</td></tr>
        <tr><td>8:00</td><td>Norris Geyser Basin (Porcelain boardwalk, 0.5mi flat)</td></tr>
        <tr><td>9:30</td><td>Mammoth — drive Upper Terrace 1.5mi loop FIRST (sit-down), then Lower boardwalk if energy</td></tr>
        <tr><td>10:30</td><td>Albright Visitor Center bathroom + bison/elk on lawn</td></tr>
        <tr><td>11:30</td><td><B>Lamar Valley turnaround at Slough Creek pullout</B> — bison + pronghorn reliable midday. Don&apos;t push past!</td></tr>
        <tr><td>1:00pm</td><td>Lunch Roosevelt Lodge or Tower Fall General Store</td></tr>
        <tr><td>2:00</td><td>Tower Fall viewpoint (0.1mi to overlook, lower trail closed)</td></tr>
        <tr><td>2:30</td><td>Drive Dunraven Pass (snow patches expected at 8,800ft)</td></tr>
        <tr><td>3:30</td><td><B>Canyon — Artist Point</B> (the ICONIC Lower Falls shot)</td></tr>
        <tr><td>4:00</td><td>Brink of Upper Falls or Lookout Point. SKIP Brink of Lower Falls (600ft of metal stairs)</td></tr>
        <tr><td>5:00</td><td>Hayden Valley drive (bison + bears) OR head back via Norris</td></tr>
        <tr><td>7:00</td><td>Back at Crosswinds Inn</td></tr>
      </tbody></table>

      <H>Wildlife Safety</H>
      <Ul items={[
        '100yd from bears/wolves, 25yd from bison/elk',
        'Bison cause more injuries than bears — they LOOK slow, they aren\'t',
        'Bison jams normal — stay in car, be patient',
        'Bear spray optional for itinerary (not bushwhacking off-trail)',
      ]} />

      <Note>Restaurants West Yellowstone walking from Crosswinds Inn: Madison Crossing Lounge (best dinner, historic schoolhouse, bison tenderloin), Wild West Pizzeria, Three Bear Restaurant, Cafe Madriz (Spanish tapas).</Note>

      <Note>Drive Day 20 Glacier: 380mi, 6.5-7hr (NOT 5.5hr — verified). Hwy 191 N through Gallatin Canyon → Bozeman lunch → I-90 W → Missoula → US-93 N. Leave WY by 7am.</Note>
    </>),
  },
  {
    id: 'glacier', title: 'Glacier', emoji: '🧊', days: 'Fri May 29 – Sun May 31',
    content: (<>
      <H>🎉 2026 NEWS</H>
      <P><B>Going-to-the-Sun Road timed-entry vehicle reservations ELIMINATED for 2026.</B> No booking needed. Just drive in.</P>
      <P>BUT Logan Pass typically opens mid-June — late May = lower section only, plowed up to <B>Avalanche Creek</B>. You will NOT reach Logan Pass, Many Glacier, or St. Mary east side.</P>

      <H>Drive West Yellowstone → Apgar (Fri)</H>
      <P><B>~370-400mi, 6-7.5hr.</B> US-191 N through Gallatin Canyon → Bozeman → I-90 W → Missoula → US-93 N → Kalispell → West Glacier.</P>
      <P><B>Lunch in Bozeman</B> (~1.5hr in) — vibrant downtown, easy on/off I-90.</P>
      <P>Leave West Yellowstone by 7am, lunch Bozeman ~10:30-11:30am, arrive Apgar ~3-4pm.</P>

      <H>Robin Pickup (Fri 3:34pm MDT)</H>
      <P>FCA → Apgar = 27mi/35-40min. Plan: drop Mom at cabin to rest, Colin solo to FCA. Robin lands 3:34pm, on the road by 4pm, back at Apgar ~4:40pm. Dinner at 6pm comfortable.</P>

      <H>Friday Welcome Dinner</H>
      <P><B>Russell&apos;s Fireside at Lake McDonald Lodge</B> (historic 1913, lake views, 10min from Apgar). Lodge opens May 15 — book ahead. Backup: Belton Chalet Grill (West Glacier, 5min from West Entrance).</P>

      <H>Saturday with Robin (Day 21)</H>
      <Ol items={[
        '8:30am drive 16mi up GTSR to Avalanche Creek trailhead — park early, fills fast',
        'Trail of the Cedars boardwalk (0.9mi loop, all-accessible) — warmup',
        'Decision point: Avalanche Lake Trail branches off — 4.6mi RT/730ft gain. If Mom tired, turn back at 1mi mark beside Avalanche Creek gorge (still gorgeous)',
        'Lunch: Russell\'s Fireside at Lake McDonald Lodge',
        'Afternoon: DeSmet boat tour (1hr scenic cruise on historic 1930 wooden boat, 6 daily departures 9:30am-7pm). Book 406-257-2426',
        'Late afternoon: Apgar beach colored pebbles (red/green/blue argillite — illegal to remove)',
        'Sunset: Apgar beach walk',
      ]} />

      <H>Sunday Day 22 Departure</H>
      <P>Mom flight DL 2575 departs <B>2:30pm</B> — leave Apgar by 12pm latest. Sunrise at Lake McDonald (Apgar pier 5min), breakfast, slow morning.</P>
      <P>Drop Mom, Colin/Robin have ~3hr until AS 2419 5:40pm. Lunch in Whitefish or Columbia Falls: Backslope Brewing or Three Forks Grille.</P>

      <H>SKIP: Polebridge Mercantile</H>
      <P>1hr each way on rough North Fork Road. Apgar Village General Store has snacks; Eddie&apos;s Cafe in Apgar has huckleberry pie.</P>

      <H>Practical</H>
      <Ul items={[
        'Cell service: spotty in park, NONE on most of GTSR. Download offline maps before leaving West Yellowstone',
        'Bear spray: rent at Apgar (don\'t fly with it). Carry on Avalanche Lake hike — active grizzly area',
        'Weather: 50-60°F days, 30-40°F nights, RAIN VERY LIKELY (Glacier averages 11 wet days in May). Bring real rain shells',
        'Apgar parking: small lot fills early at visitor center; cabin parking assigned at lodge',
      ]} />

      <Note><B>Day-of confirmations:</B> (1) Call DeSmet boat tour 406-257-2426 to verify May 30 schedule. (2) Reserve Russell&apos;s Fireside dinner Friday May 29 for 3. (3) Check NPS Current Conditions for GTSR plow progress. (4) Reserve bear spray rental at Apgar.</Note>
    </>),
  },
];

// ─── Daily Schedule data (compressed from META-schedule.md) ───
type DaySchedule = { n: number; date: string; title: string; vibe: string; hotel: string; bullets: string[]; eats: string; dontMiss: string; momNote: string };

const SCHEDULE: DaySchedule[] = [
  { n:1, date:'Sun May 10', title:'Las Vegas', vibe:'City · Hot · Uber LAS→LINQ',
    hotel:'The LINQ Hotel, 3535 LV Blvd S',
    bullets:[
      '14:30 Land LAS (Mom, 4h47m from YYZ)',
      '15:15 LINQ check-in (4pm official, front desk holds bags)',
      '17:30 Bacchanal Buffet (OpenTable confirmed)',
      '20:00 Bellagio fountains (every 15min after 8pm)',
      '21:30 Bed — SKIP Fremont (Mom on Toronto midnight)',
    ],
    eats:'Dinner Bacchanal 5:30pm',
    dontMiss:'Sunset 7:38pm. Beer Park at Paris LV is best seated viewing for Mom (cost of one drink)',
    momNote:'Closed-toe shoes for cold buffet floors. Strip is 4.2mi end-to-end — looks short on map' },
  { n:2, date:'Mon May 11', title:'Vegas → Grand Canyon', vibe:'Drive · Hot day, cool eve · 280mi/4.5hr (gain 1hr → MST)',
    hotel:'Maswik Lodge, GC Village',
    bullets:[
      '07:30 Pick up rental car LAS RAC',
      '09:00 Depart Vegas. Top off gas Kingman or Williams (NOT Tusayan)',
      '12:30 Lunch Pine Country Restaurant Williams',
      '15:30 South Entrance (afternoon = short lines). Show America the Beautiful pass (already owned)',
      '18:15 Mather Point — walk 5min east on Rim Trail for fewer crowds',
      '19:24 Sunset',
    ],
    eats:'Lunch Pine Country (Williams). Dinner Maswik Food Court',
    dontMiss:'Mather sunset 7:24pm — be parked by 6:15pm',
    momNote:'Altitude 7,000ft day 1 = light only. 3-4L water, electrolytes, half-portion alcohol, ibuprofen if headache. Headlamp for return walk' },
  { n:3, date:'Tue May 12', title:'Grand Canyon — Three Viewpoints', vibe:'Park · Mild day, cool eve · in-park shuttle',
    hotel:'Maswik Lodge (2nd night)',
    bullets:[
      '08:30 Yavapai Geology Museum (free, 30-45min)',
      '09:30 Rim Trail Yavapai → Mather (1.4mi RT, paved, benches every 0.2mi)',
      '11:15 Put name in El Tovar — walk 2min to Bright Angel/Arizona Steakhouse as fallback',
      '13:30 Rest at Maswik (heat of day)',
      '15:30 Hermit Road Red Route shuttle to Hopi Point (THE sunset spot)',
      '19:25 Sunset Hopi (west-facing peninsula)',
    ],
    eats:'Lunch El Tovar attempt → Arizona Steakhouse backup. Dinner Maswik Pizza Pub',
    dontMiss:'Three viewpoints done well > eight done exhausted',
    momNote:'Trekking pole. Brimmed hat. Skip Pima/Abyss past Mohave' },
  { n:4, date:'Wed May 13', title:'GC → Page (Horseshoe Bend)', vibe:'Drive · Hot · 140mi/2.5hr',
    hotel:'Airbnb 871 Sandpiper Dr, Page',
    bullets:[
      '09:00 Desert View Drive eastbound (in-park, 25mi)',
      '11:00 Desert View Watchtower (Mary Colter 1932)',
      '12:30 Lunch Cameron Trading Post — fuel up here (only reliable stop)',
      '15:00 Page Airbnb check-in',
      '18:30 Horseshoe Bend ($10 parking, 1.5mi RT, ABA-compliant)',
      '19:25 Sunset — stand on LEFT (west) side',
    ],
    eats:'Lunch Cameron Trading Post (Navajo tacos). Dinner State 48 Tavern',
    dontMiss:'Bring 1L water pp — vault toilets at trailhead, NO water',
    momNote:'Sunglasses essential — exposed slickrock blast' },
  { n:5, date:'Thu May 14', title:'Antelope Canyon + Lake Powell', vibe:'⭐ TOUR · Hot · short local drives',
    hotel:'Airbnb Page (2nd night)',
    bullets:[
      '09:30 At Antelope Slot Canyon Tours (22 S Lake Powell Blvd)',
      '⚠️ NO bags, fanny packs, hydration packs. Phone + 1 water bottle in hand only',
      '10:00 MST tour — Order #FMBYMK paid (operates on MST not MDT)',
      '12:45 Lunch Lake Powell Resort (Wahweap Marina, lake views)',
      '14:30 Glen Canyon Dam Overlook (free)',
      '18:30 Dinner Big John\'s Texas BBQ',
    ],
    eats:'Lunch Lake Powell Resort. Dinner Big John\'s Texas BBQ',
    dontMiss:'TOUR IS ON MST NOT MDT. Arrive 9:30am hard. Sand floors — closed-toe shoes',
    momNote:'Phone HDR mode for light beams; tap-to-expose for bright beam, let rock fall dark' },
  { n:6, date:'Fri May 15', title:'Page (Mom solo, Colin works)', vibe:'Solo / Rest · Hot · walking',
    hotel:'Airbnb Page (3rd night)',
    bullets:[
      '08:00 Colin works at Airbnb',
      '10:00 Mom: John Wesley Powell Museum (small, indoor, AC, ~1hr)',
      '11:30 Lunch downtown (Gone West or El Tapatio)',
      '13:00 Mom rests',
      '15:00 Optional Hanging Gardens Trail (1.2mi RT, shaded gravel)',
      '18:30 Dinner BirdHouse (fried chicken)',
    ],
    eats:'Lunch downtown Page. Dinner BirdHouse',
    dontMiss:'Hydrate aggressively today — tomorrow is 6.5hr drive day',
    momNote:'Rest day matters before heavy drive Day 7 + Arches Day 9' },
  { n:7, date:'Sat May 16', title:'Page → Moab via Monument Valley', vibe:'Drive · Hot · 270mi/6.5hr (verified, NOT 5hr)',
    hotel:'Moab Airbnb, 3442 Tierra del Sol Dr',
    bullets:[
      '09:00 Fuel Page (only one station before Kayenta)',
      '11:30 Kayenta — mandatory fuel + restroom',
      '12:30 Monument Valley View Hotel deck (FREE viewpoint). SKIP $8/$15 17-mile loop drive',
      '13:30 Forrest Gump Point (Mile Marker 13 on US-163 north of park)',
      '14:00 Lunch Twin Rocks Cafe Bluff — closes 2pm sharp',
      '18:30 Arrive Moab Airbnb',
      '19:30 Dinner Moab Brewery',
    ],
    eats:'Lunch Twin Rocks Bluff. Dinner Moab Brewery',
    dontMiss:'Fuel BOTH Page AND Kayenta. Skip MV loop drive (deep sand, not rental-friendly)',
    momNote:'Compression socks all day. Break every 90min' },
  { n:8, date:'Sun May 17', title:'Moab (Colin works, Mom solo)', vibe:'Solo / Rest · Hot',
    hotel:'Moab Airbnb (2nd night)',
    bullets:[
      '09:00 Mom Mill Creek Parkway (2mi paved, flat, shaded, benches)',
      '12:00 Lunch Antica Forma (Neapolitan pizza, daily 11am-9pm)',
      '13:30 Moab Information Center (free maps for tomorrow)',
      '14:00-17:00 Pool/hot tub at Airbnb',
      '19:00 Dinner Sabaku Sushi (takeout)',
    ],
    eats:'Lunch Antica Forma. Dinner Sabaku Sushi takeout',
    dontMiss:'Moab Museum CLOSED Sunday — push to Tuesday',
    momNote:'Mom rests for 4am wake-up Day 10 (Mesa Arch sunrise)' },
  { n:9, date:'Mon May 18', title:'Arches NP Full Day', vibe:'Park · Hot · 5mi to entrance',
    hotel:'Moab Airbnb (3rd night)',
    bullets:[
      '🎉 2026 timed entry CANCELLED. Arrive before 8am or after 3pm',
      '07:00 Enter Arches by 7am',
      '07:15 Park Avenue Viewpoint (drive-up + 0.2mi to overlook)',
      '07:45 Balanced Rock (0.3mi paved loop)',
      '08:15 Windows Section (1mi loop, sandy)',
      '09:15 Double Arch (0.5mi RT flat)',
      '10:30 Delicate Arch LOWER Viewpoint (NOT 3mi arch trail)',
      '11:30 Lunch BACK in Moab (escape midday heat)',
      '15:30 Re-enter — Skyline Arch + Park Avenue golden hour',
      '19:00 Balanced Rock at sunset',
    ],
    eats:'Lunch Moab Diner. Dinner Antica Forma',
    dontMiss:'2L water/person — NO shade. Restrooms only at Visitor Center, Devils Garden, Wolfe Ranch',
    momNote:'Heat strategy — out of park 11:30am-3:30pm' },
  { n:10, date:'Tue May 19', title:'Mesa Arch Sunrise + Canyonlands', vibe:'⭐ Park · Hot · 45-60min predawn drive',
    hotel:'Moab Airbnb (4th night)',
    bullets:[
      '04:30 LEAVE MOAB sharp (parking fills 60-90min before sunrise)',
      '05:20 Arrive Mesa Arch parking',
      '06:07 Sunrise — arch glows ~1hr after',
      '07:30 Drive-up viewpoints: Shafer, Buck Canyon, Grand View Point, Green River Overlook (best)',
      '11:30 Back in Moab',
      '12:00 Colin starts PM work',
      '13:00 Mom: pool, Moab Museum (Tue open)',
      '19:00 Dinner Diavolo (Sorrel River, splurge) or Moab Brewery',
    ],
    eats:'Coffee + protein bar in car. Dinner Diavolo or Moab Brewery',
    dontMiss:'LEAVE MOAB 4:30AM SHARP. ~6 prime tripod spots',
    momNote:'Mom can sleep on drive out. She can skip Mesa Arch and join Canyonlands viewpoints at 7:30am if knees flare' },
  { n:11, date:'Wed May 20', title:'Moab → SLC + Temple Square', vibe:'Drive / City · Mild · 230mi/4hr',
    hotel:'SLC Airbnb 241 W 200 S',
    bullets:[
      '09:00 Depart Moab',
      '11:30 Lunch Tamarisk Restaurant Green River (51mi from Moab)',
      '16:00 SLC Airbnb check-in',
      '17:00 Walk to Temple Square (4 blocks N). New Visitors\' Center opened May 18!',
      '18:30 City Creek Center walk (5min, retractable roof)',
      '19:30 Dinner Red Iguana 2 (866 W S Temple — same menu as #1, shorter line). Mole sampler!',
    ],
    eats:'Lunch Tamarisk. Dinner Red Iguana 2',
    dontMiss:'Mole sampler at Red Iguana (8 moles complimentary)',
    momNote:'SLC = 4,226ft, fully acclimated from GC + Moab. Easy' },
  { n:12, date:'Thu May 21', title:'SLC (Colin works, Mom solo)', vibe:'Solo / City · Mild',
    hotel:'SLC Airbnb (2nd night)',
    bullets:[
      '08:00 Coffee La Barba (327 W 200 S, 1 block from Airbnb)',
      '09:00 Mom walks City Creek Center',
      '10:30 Uber to Tracy Aviary at Liberty Park ($14, paved paths, ADHD-friendly)',
      '12:00 Tabernacle organ recital (12-12:30pm Mon-Sat)',
      '13:00 Lunch Caputo\'s Market & Deli (3min walk)',
      '14:00 Mom rests, rooftop pool/hot tub',
      '17:00 Family History Library (5min walk)',
      '19:30 Dinner The Copper Onion (upscale, reservation)',
    ],
    eats:'La Barba breakfast. Caputo\'s lunch. Copper Onion dinner',
    dontMiss:'Tabernacle organ recital noon',
    momNote:'Tracy Aviary is the secret weapon — paved, contained, lots to see, low effort' },
  { n:13, date:'Fri May 22', title:'SLC (Colin works AM, joint PM)', vibe:'Solo AM / Joint PM · Mild',
    hotel:'SLC Airbnb (3rd night)',
    bullets:[
      '09:00 Mom: Liberty Park 1.5mi flat loop OR This Is The Place Heritage Park',
      '12:00 Lunch Caputo\'s or Crown Burgers (pastrami burger Utah classic)',
      '16:00 Colin done early',
      '17:00 Walk Temple Square together at golden hour',
      '19:00 Dinner Red Iguana 1 — go before 6pm or expect wait',
    ],
    eats:'La Barba breakfast. Caputo\'s/Crown lunch. Red Iguana dinner',
    dontMiss:'Pre-pack head nets, water, layers for Antelope Island tomorrow',
    momNote:'Light day before busy Saturday' },
  { n:14, date:'Sat May 23', title:'Antelope Island + NHMU + Ensign Peak', vibe:'Adventure · Mild',
    hotel:'SLC Airbnb (4th night)',
    bullets:[
      '08:00 Drive Antelope Island (45min, $10/car). 🪰 HEAD NETS ON',
      '09:00 Buffalo Point easy walk (breezier, fewer bugs)',
      '12:30 Out',
      '14:00 NHMU U of U ($20.95 senior, NOT $18). Past Worlds dinos, Bug World, rooftop terrace',
      '19:00 Ensign Peak (0.9mi RT NOT 0.8, steep). Hiking poles strongly recommended',
      '20:35 Sunset — bail to State Capitol grounds if knees flare',
    ],
    eats:'Crown Burgers/Caputo\'s lunch. Caputo\'s takeout dinner',
    dontMiss:'HEAD NETS for Antelope Island gnats. Hiking poles for Ensign',
    momNote:'Long day. If energy gone after NHMU, swap Ensign for State Capitol grounds at sunset' },
  { n:15, date:'Sun May 24', title:'SLC → Driggs ID', vibe:'Drive · Mild · 285mi/4h45 · sunset Driggs 8:52pm MDT',
    hotel:'Mountain Modern Victor House, 8487 Caribou Ct, Victor ID',
    bullets:[
      '12:00 Depart SLC north on I-15 (gas top-off)',
      '14:30 Lunch Buddy\'s Italian Pocatello, Exit 69 (~45min, classic since 1955)',
      '15:45 Idaho Falls Snake River Greenbelt stretch + bathroom (15min)',
      '16:30 US-26 E into Swan Valley — Palisades Reservoir overlook (30min, dusk wildlife window — moose/elk/eagles)',
      '17:45 ID-31 over Pine Creek Pass — first Teton reveal at Victor overlook (15min)',
      '18:30 Cabin check-in at Driggs Airbnb (Mountain Modern Victor House)',
      '19:30 Dinner Forage Bistro (reserve) or Teton Thai walk-in',
    ],
    eats:'Buddy\'s Italian Pocatello lunch. Forage Bistro Driggs dinner.',
    dontMiss:'Swan Valley dusk = moose/elk window. Pine Creek Pass (not Teton Pass). Pre-confirm Airbnb keypad before leaving SLC (patchy cell on pass).',
    momNote:'Compression socks for the drive. Light fleece on arrival — Driggs 6,100ft = 50°F evening.' },
  { n:16, date:'Mon May 25', title:'⭐ Grand Teton Day — Schwabacher reflection + String Lake', vibe:'Park · Sunny morning, rain shower 3pm · Memorial Day',
    hotel:'Mountain Modern Victor House (2nd night, Victor cabin)',
    bullets:[
      '10:35 Yostmark Mountain Equipment Driggs (12 N Main) — bear spray 2 cans Counter Assault/UDAP',
      '11:00 Drive Victor → Teton Pass → GTNP (1hr)',
      '12:00 Mormon Row T.A. Moulton Barn (0.5mi flat road walk + bison)',
      '12:45 Oxbow Bend (drive-up, Mt Moran reflection #1)',
      '13:15 Schwabacher Landing — THE reflection view (1.4mi flat dirt, Mt Moran in beaver ponds)',
      '14:45 LUNCH Jackson Lake Lodge — 60ft picture windows (indoor refuge for 3pm wind/rain)',
      '16:15 String Lake picnic beach (0.5mi flat, Cathedral Group reflection)',
      '17:30 Drive back Victor over Teton Pass',
      '18:45 Dinner Driggs — Forage Bistro (208-354-2858) or Tatanka Tavern',
    ],
    eats:'Cabin breakfast. Jackson Lake Lodge lunch. Forage / Tatanka dinner',
    dontMiss:'Schwabacher reflection of Mt Moran = the postcard shot. 3pm wind/rain peak — be at the lodge.',
    momNote:'2.9mi total hiking all flat. Light fleece + rain shell. Bear spray on Mormon Row.' },
  { n:17, date:'Tue May 26', title:'Work day — Victor cabin (rain)', vibe:'Rest / Work · Drizzle 22-45% all afternoon',
    hotel:'Mountain Modern Victor House (3rd & final night)',
    bullets:[
      '08:00 Colin works from cabin (strong WiFi at kitchen counter)',
      '10:00-13:00 Mom: dry window for light Driggs town walk (Peaked Sports, Barrels & Bins)',
      '13:00 Mom back at cabin — rain peak 2-5pm',
      '15:00 Colin midday break: Citizen 33 Brewery Driggs coffee/snack',
      '17:00 📞 Crosswinds Inn 406-646-9557 — confirm tomorrow noon bag drop',
      '18:30 Dinner — Forage Bistro reserve 208-354-2858 OR Tatanka Tavern pizza by fire',
      '20:00 PACK TONIGHT — bags out 10am sharp tomorrow',
    ],
    eats:'Cabin coffee + leftovers. Pendl\'s Pastries midday (closes 4pm Tue). Forage / Tatanka dinner',
    dontMiss:'CALL Crosswinds Inn today to arrange noon bag drop tomorrow',
    momNote:'Quiet day after Mon\'s Tetons. Cabin fire + book. Driggs walk only in 10-1pm dry window.' },
  { n:18, date:'Wed May 27', title:'Victor → West Yellowstone (check in first) → evening Old Faithful + Grand Prismatic', vibe:'Drive / Park · Light drizzle · scenic 4h with stops',
    hotel:'Crosswinds Inn, 201 Firehole Ave',
    bullets:[
      '09:00 Pack up Victor cabin (strip beds, trash, door code), check out 10am',
      '10:00 Drive direct: ID-33 → Ashton → US-20 → Targhee Pass (drive-only, car is loaded so no trailhead walks)',
      '12:30 Crosswinds Inn: drop ALL bags + cooler at the desk (call 406-646-9557 to confirm they hold them)',
      '13:00 Lunch in town, car now empty so walk freely',
      '14:30 Old Faithful eruption + Inn lobby',
      '17:00 Grand Prismatic via Fairy Falls overlook (best late-day light, less steam)',
      '18:45 Pick up room key, settle bags into room',
      '19:30 Dinner in town, sunset 8:58pm',
    ],
    eats:'Cabin coffee. West Yellowstone lunch. Wild West Pizza dinner',
    dontMiss:'DROP BAGS FIRST at Crosswinds (~12:30pm) so the car is empty: nothing to steal, no food for bears. Then the whole afternoon is free. Upper Mesa Falls already done on the way in.',
    momNote:'Drive-only morning, no walks until bags are dropped. Mom can turn back at 0.5mi on Fairy Falls, or do flat Midway boardwalk (0.8mi). Rain shell for 47% drizzle.' },
  { n:19, date:'Thu May 28', title:'Yellowstone Upper Loop', vibe:'Park · Cool/cold high passes · ~200mi in-park',
    hotel:'Crosswinds Inn (2nd night)',
    bullets:[
      '07:00 Depart Crosswinds (early = wildlife + fewer crowds)',
      '08:00 Norris Geyser Basin (Porcelain Basin boardwalk 0.5mi flat)',
      '09:30 Mammoth — drive Upper Terrace 1.5mi loop FIRST (sit-down view)',
      '11:30 Lamar Valley — TURN AROUND at Slough Creek pullout',
      '13:00 Lunch Roosevelt Lodge or Tower Fall General Store',
      '14:00 Tower Fall viewpoint (0.1mi)',
      '14:30 Drive Dunraven Pass (8,800ft, snow patches)',
      '15:30 Canyon — Artist Point (ICONIC Lower Falls shot)',
      '16:00 Brink of Upper Falls or Lookout Point — SKIP Brink of Lower (600ft of stairs)',
      '19:30 Dinner Three Bear Restaurant',
    ],
    eats:'Roosevelt Lodge lunch. Three Bear Restaurant dinner',
    dontMiss:'Binoculars for Lamar. Top off gas Madison Junction or Old Faithful',
    momNote:'Layers, gloves, beanie, waterproof shell. Snow possible at Dunraven Pass' },
  { n:20, date:'Fri May 29', title:'West Yellowstone → Glacier (💜 ROBIN ARRIVES)', vibe:'Drive · Cool, rain likely · 380mi/6.5-7hr',
    hotel:'Apgar Village Lodge & Cabins (in-park)',
    bullets:[
      '07:00 Depart Crosswinds (Mom sleeps in car)',
      '10:30-11:30 Lunch Bozeman ~1.5hr in (vibrant downtown, farm-to-table)',
      '15:30 Pass Missoula, US-93 N → Kalispell',
      '16:00 BUY BEAR SPRAY in Kalispell (or rent at Apgar — can\'t fly with it)',
      '17:00 Drop Mom at Apgar Village Lodge to rest',
      '17:15 Colin solo to FCA (27mi/35min)',
      'Robin Alaska AS 2402 lands FCA (afternoon — verify time)',
      'Back at Apgar ~16:40',
      '19:00 Welcome dinner Russell\'s Fireside at Lake McDonald Lodge (1913 historic) — RESERVATION',
    ],
    eats:'Bozeman lunch. Russell\'s Fireside dinner',
    dontMiss:'Bear spray Kalispell. Russell\'s Fireside reservation',
    momNote:'7hr drive day — compression socks all day, breaks every 90min' },
  { n:21, date:'Sat May 30', title:'Glacier — Avalanche + Boat Tour', vibe:'Park · Cool, rain likely · 16mi up GTSR',
    hotel:'Apgar Village Lodge (2nd night)',
    bullets:[
      '🎉 2026 timed entry ELIMINATED. GTSR plowed to Avalanche Creek (Logan Pass closed til mid-June)',
      '08:30 Drive 16mi to Avalanche Creek trailhead — park early, fills fast',
      '09:00 Trail of the Cedars boardwalk (0.9mi loop, all-accessible)',
      '09:45 Decision point: Avalanche Lake (4.6mi RT/730ft) OR turn around at first mile',
      '13:00 Lunch Russell\'s Fireside at Lake McDonald Lodge',
      '14:30 DeSmet boat tour (1hr historic 1930 wooden boat) — book 406-257-2426',
      '16:00 Apgar beach colored pebbles (red/green/blue argillite — leave the rocks!)',
      '20:55 Sunset Apgar pier',
    ],
    eats:'Eddie\'s Cafe breakfast. Russell\'s Fireside lunch. Lucke\'s Lounge dinner',
    dontMiss:'Bear spray on Avalanche hike (active grizzly area). Boat tour booking',
    momNote:'Day 21 of trip — Avalanche Lake doable but stretch. Bail at first mile is fine' },
  { n:22, date:'Sun May 31', title:'Departures (Glacier → home)', vibe:'Travel home · Cool · 27mi to FCA',
    hotel:'N/A',
    bullets:[
      '06:30 Sunrise Lake McDonald (Apgar pier 5min)',
      '07:30 Slow breakfast Eddie\'s Cafe',
      '12:00 LATEST depart Apgar with Mom (HARD)',
      '12:35 Arrive FCA',
      '14:30 Mom departs DL 2575 (Delta to YYZ via MSP)',
      'Lunch Backslope Brewing Whitefish or Three Forks Grille',
      '17:40 Colin + Robin depart AS 2419 (FCA → SEA, 1h32m, First Class for Colin)',
    ],
    eats:'Eddie\'s Cafe breakfast. Backslope Brewing lunch',
    dontMiss:'Mom needs FCA by 13:00 — leave Apgar by 12:00 hard',
    momNote:'Compression socks for flight. All meds in carry-on. 2x reading glasses' },
];

// ─── Page ───
export default function GuidePage() {
  const today = getTodayDay();
  const [openSection, setOpenSection] = useState<string | null>(today ? null : 'vegas');
  const [openDay, setOpenDay] = useState<number | null>(today?.dayNumber ?? null);
  const [openTab, setOpenTab] = useState<'guide' | 'schedule' | 'mom' | 'pack'>('guide');

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pb-12">
      <SiteNav current="guide" />
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 text-white px-4 py-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2"><Compass className="w-7 h-7" /> Tour Guide</h1>
        <p className="text-sm md:text-base mt-1 text-white/95">Deep dive · Day-by-day insider tips · Mom-tested pacing</p>
        <p className="text-xs text-white/80 mt-1">Researched by location specialists across 8 stops + Mom expert</p>
      </div>

      {/* Today banner (tactical) */}
      {today && <GuideTodayBanner day={today} />}

      {/* Tabs */}
      <div className="max-w-3xl mx-auto px-4 pt-4">
        <div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-4">
          {([
            ['guide', '📍 Locations', Compass],
            ['schedule', '📅 Schedule', Clock],
            ['mom', '👵 Mom Tips', Heart],
            ['pack', '🎒 Pack List', Backpack],
          ] as const).map(([id, label]) => (
            <button key={id} onClick={() => setOpenTab(id)}
              className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${openTab === id ? 'bg-white text-amber-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4">
        {/* GUIDE TAB */}
        {openTab === 'guide' && (
          <div className="space-y-2">
            {SECTIONS.map(s => (
              <div key={s.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button onClick={() => setOpenSection(openSection === s.id ? null : s.id)}
                  className="w-full flex items-center gap-3 p-4 hover:bg-amber-50 transition-colors text-left">
                  <span className="text-2xl">{s.emoji}</span>
                  <div className="flex-1">
                    <div className="font-bold text-gray-800">{s.title}</div>
                    <div className="text-xs text-gray-500">{s.days}</div>
                  </div>
                  {openSection === s.id ? <ChevronDown className="w-5 h-5 text-gray-400" /> : <ChevronRight className="w-5 h-5 text-gray-400" />}
                </button>
                {openSection === s.id && (
                  <div className="px-4 pb-5 border-t border-gray-100">{s.content}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* SCHEDULE TAB */}
        {openTab === 'schedule' && (
          <div className="space-y-2">
            <Card emoji="📅" title="22-Day Hour-by-Hour Schedule">
              <P>Tap any day below to see the full plan. Researched by location specialists, validated against current 2026 park status (Arches + Glacier timed entry both eliminated, $100 non-resident surcharge for Mom at Tetons).</P>
            </Card>
            {SCHEDULE.map(d => {
              const isTodayDay = today?.dayNumber === d.n;
              return (
              <div key={d.n} className={`bg-white rounded-xl shadow-sm overflow-hidden border ${isTodayDay ? 'border-amber-400 ring-2 ring-amber-200' : 'border-gray-100'}`}>
                <button onClick={() => setOpenDay(openDay === d.n ? null : d.n)}
                  className="w-full flex items-center gap-3 p-3 hover:bg-amber-50 transition-colors text-left">
                  <div className={`shrink-0 w-14 h-14 rounded-xl flex flex-col items-center justify-center ${isTodayDay ? 'bg-amber-500 text-white' : 'bg-amber-100'}`}>
                    <div className={`text-[10px] font-bold ${isTodayDay ? 'text-white' : 'text-amber-700'}`}>{d.date.split(' ')[0]}</div>
                    <div className={`text-sm font-bold leading-none ${isTodayDay ? 'text-white' : 'text-amber-700'}`}>{d.date.split(' ').slice(1).join(' ')}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-bold text-gray-800 leading-tight">{d.title}</span>
                      {isTodayDay && <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-500 text-white">TODAY</span>}
                      <span className="text-[10px] text-gray-400 font-mono">d{d.n}</span>
                    </div>
                    <div className="text-[11px] text-gray-500 mt-0.5">{d.vibe}</div>
                  </div>
                  {openDay === d.n ? <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" /> : <ChevronRight className="w-5 h-5 text-gray-400 shrink-0" />}
                </button>
                {openDay === d.n && (
                  <div className="px-3 pb-4 border-t border-gray-100 text-sm">
                    <div className="bg-amber-50 px-2 py-1.5 mt-2 rounded text-xs"><B>Hotel:</B> {d.hotel}</div>
                    <ul className="mt-3 space-y-1 text-gray-700">
                      {d.bullets.map((b, i) => <li key={i} className="text-[13px]">{b}</li>)}
                    </ul>
                    <div className="mt-3 text-xs"><B>Eats:</B> <span className="text-gray-600">{d.eats}</span></div>
                    <div className="mt-2 bg-blue-50 border-l-4 border-blue-300 p-2 text-xs"><B>Don&apos;t miss:</B> {d.dontMiss}</div>
                    <div className="mt-2 bg-purple-50 border-l-4 border-purple-300 p-2 text-xs"><B>Mom note:</B> {d.momNote}</div>
                  </div>
                )}
              </div>
            );})}
          </div>
        )}

        {/* MOM TAB */}
        {openTab === 'mom' && <MomTips />}

        {/* PACK TAB */}
        {openTab === 'pack' && <PackList />}

        <div className="text-center py-6 text-sm text-gray-400">
          Research synthesized from 9 specialist agents · Last updated April 2026
          <div className="mt-2 flex justify-center gap-4 text-xs">
            <a href="/" className="text-amber-600 hover:underline">← Main planner</a>
            <a href="/mom" className="text-amber-600 hover:underline">Mom view</a>
            <a href="/bookings" className="text-amber-600 hover:underline">Bookings</a>
          </div>
        </div>
      </main>
    </div>
  );
}

// ─── Mom Tips ───
function MomTips() {
  return (
    <div className="space-y-3">
      <Card emoji="🩺" title="Cross-Border Meds (Canada → US)">
        <Ul items={[
          'Original pharmacy bottles only, name matching passport. CBP can refuse loose pills',
          'CARRY-ON, not checked. Lost prescriptions = trip-ending',
          '90-day supply max per US Customs',
          'Print medication list (drug, dose, schedule, doctor, allergies) — wallet + phone',
          'Bring 1-week buffer beyond trip',
        ]} />
      </Card>

      <Card emoji="🏥" title="Travel Insurance — CRITICAL">
        <P>OHIP/provincial covers <B>~5-10% of US medical costs</B>. Single ER visit $3K+, hospital $10K+/day.</P>
        <Ul items={[
          'Get supplemental travel medical for entire 22 days',
          'Manulife / Blue Cross / TuGo / Allianz Canada all offer 80+ plans',
          'Expect $200-400 for trip',
          'Verify pre-existing condition coverage (90-180 day stability period)',
          'Carry policy number + 24/7 claims line in wallet, photo on phone',
        ]} />
      </Card>

      <Card emoji="🦴" title="Knee/Joint Support">
        <Ul items={[
          'Trekking poles: Black Diamond Trail Ergo Cork or Leki Legacy Lite. CHECKED bag only — TSA prohibits carry-on. Reduces knee load 25% on descents',
          'Knee sleeves: Bauerfeind GenuTrain or McDavid 401 — compression + warmth, one per knee',
          'KT Tape Pro pre-cut strips for hiking days',
          'Compression socks 15-20 mmHg knee-high (Sockwell, CEP) — flights + 3+ hr drives',
          'Glucosamine + chondroitin: start 2 weeks before',
        ]} />
      </Card>

      <Card emoji="🏔️" title="Altitude (Up to 7,700ft)">
        <P>Highest exposure: Grand Canyon Rim 7,000ft, Yellowstone Lake 7,700ft, Logan Pass 6,600ft.</P>
        <Ul items={[
          'AMS risk real at 80 — even though she\'s healthy',
          'First day at 7K+ = no hiking, just light walking',
          'Hydration: +1L/day on top of baseline',
          'Alcohol hits 2x harder at altitude',
          'Descend if: confusion, severe headache, vomiting, ataxia',
        ]} />
      </Card>

      <Card emoji="🥵" title="Desert Hydration (Page, Moab, Vegas)">
        <Ul items={[
          'Target 3-4L/day in desert heat (vs 2L baseline)',
          'Elderly thirst signal is dulled — drink on schedule, not thirst',
          'LMNT or Nuun electrolyte tabs 1-2/day. LMNT has more sodium (1000mg)',
          'Heat exhaustion in elderly: confusion, weak pulse, cool/clammy skin, no sweating despite heat. Get to AC, cool with wet towels, sip water. 911 if confusion persists',
        ]} />
      </Card>

      <Card emoji="🧠" title="ADHD-Friendly Travel">
        <Ul items={[
          'One-page daily card: date, drive time, 1-2 activities, dinner, sleep location. Big fonts (already on /mom page)',
          'Buffer time: add 30min between every transition',
          'Skip info dumps — no park ranger talks longer than 20min',
          'Long drives = audiobook or podcast (skim-friendly chapters)',
          'Engagement zones: scenic viewpoints, short walks, meals',
          'Zone-out zones: 3+ hr drives, museum text panels, ranger lectures',
        ]} />
      </Card>

      <Card emoji="😴" title="Sleep">
        <Ul items={[
          'Eye mask: Manta Sleep (adjustable cup, doesn\'t press eyes)',
          'Loop Quiet earplugs or Mack\'s silicone',
          'Melatonin 1-3mg for time zone shifts (3hr west). 30min before bedtime. NOT 10mg gummies',
        ]} />
      </Card>

      <Card emoji="🚻" title="Bathroom Strategy">
        <Ul items={[
          'Plan stops every 90min driving days. Gas stations, visitor centers, McDonald\'s reliable',
          'In parks: only at visitor centers + major trailheads. Pee before every trail',
          'AllStays / iOverlander apps show bathrooms off interstate',
          'Pack travel TP + hand sanitizer + wet wipes',
        ]} />
      </Card>

      <Card emoji="📱" title="Cell Phone (Canadian)">
        <P><B>Recommendation: Rogers/Bell/Telus US roaming day pass</B> ($12-15/day = ~$300 for 22 days). Auto-bills, zero friction.</P>
        <P>Alt: US prepaid eSIM (Airalo USA 20GB $26/30 days). Requires unlock + comfort with eSIM swap — too fiddly for ADHD-skim travel mode.</P>
        <P>Download offline maps (Google Maps + AllTrails) for park dead zones.</P>
      </Card>

      <Card emoji="🆘" title="Emergency Contacts">
        <Ul items={[
          '911 — works everywhere in US',
          'Canadian Embassy DC: +1-844-880-6519 (24/7 emergency)',
          'Travel insurer 24/7 claims — saved in phone',
          'Family ICE contact + Colin\'s number on iPhone Medical ID',
        ]} />
      </Card>

      <Card emoji="📝" title="Easy-to-Forget Essentials">
        <Ul items={[
          '2 pairs reading glasses + 1 prescription pair',
          'Phone charger + 10,000mAh power bank (Anker)',
          'Aquaphor lip balm (desert destroys lips in days)',
          'Refresh preservative-free eye drops (dry park air)',
          '1-week buffer of every prescription',
          'Hearing aid spare batteries (size 312 most common)',
          'Small first-aid kit: Band-Aids, ibuprofen, Imodium, antihistamine, hydrocortisone',
          'Kleenex, dental floss, nail clippers (checked bag)',
        ]} />
      </Card>
    </div>
  );
}

// ─── Pack List (with sub-tabs: Daily | Master) ───
function PackList() {
  const [sub, setSub] = useState<'daily' | 'master'>('daily');
  return (
    <div>
      <div className="flex gap-1 bg-white border border-gray-200 rounded-xl p-1 mb-3 shadow-sm">
        <button onClick={() => setSub('daily')}
          className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${sub === 'daily' ? 'bg-amber-600 text-white' : 'text-gray-500 hover:bg-amber-50'}`}>
          📅 Daily (per event)
        </button>
        <button onClick={() => setSub('master')}
          className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${sub === 'master' ? 'bg-amber-600 text-white' : 'text-gray-500 hover:bg-amber-50'}`}>
          🎒 Master List
        </button>
      </div>
      {sub === 'daily' ? <DailyPack /> : <MasterPack />}
    </div>
  );
}

// ─── Master pack list (the original everything-list) ───
function MasterPack() {
  return (
    <div className="space-y-3">
      <div className="bg-amber-100 border border-amber-300 rounded-xl p-4">
        <div className="font-bold text-amber-900 mb-1">🌡️ The Big Range</div>
        <div className="text-sm text-amber-900">Desert highs 95°F (Moab/Page) → Glacier mornings 30°F. <B>40°F+ same-day swings possible.</B> Layers are everything.</div>
      </div>

      <Card emoji="🧳" title="Carry-On Essentials (don't lose)">
        <Ul items={[
          'Prescriptions in original bottles + medication list',
          'Passports (Mom: Canadian)',
          'Travel insurance card + 24/7 claims # (photo on phone)',
          'Phone + charger + 10K mAh power bank',
          'Reading glasses (2 pairs)',
          'Wallet, IDs, Colin\'s America the Beautiful pass',
          'One change of clothes (in case checked bag delayed)',
        ]} />
      </Card>

      <Card emoji="👕" title="Clothing — Hot Desert (Days 1-10)">
        <Ul items={[
          'UPF 50 long-sleeve sun shirt (Patagonia Capilene Cool Sun, Coolibar, REI Sahara) — cooler than sunscreen-only',
          'Light hiking pants or shorts',
          'Wide-brim hat (Tilley T3 or Sunday Afternoons Adventure) — NOT a baseball cap. Ears + neck burn fast on Mom\'s thin skin',
          'Wraparound polarized sunglasses UV400',
          'Light cotton/linen for evening Strip walk',
          'Smart casual for Bacchanal (closed-toe shoes for Mom)',
        ]} />
      </Card>

      <Card emoji="🧥" title="Clothing — Mountain Cool (Days 15-22)">
        <Ul items={[
          'Merino base layer crew + bottoms (Smartwool Classic All-Season) — anti-stink, warm when wet',
          'Mid-layer fleece (Patagonia R1) OR light puffy (Uniqlo Ultra Light Down) — light puffy more versatile',
          'Rain shell with hood (Marmot PreCip or REI Rainier) — doubles as windbreaker. CRITICAL for Glacier (11 wet days/May avg)',
          'Beanie + light gloves for Yellowstone/Glacier sunrises',
          'Long pants for cool evenings',
        ]} />
      </Card>

      <Card emoji="👟" title="Footwear">
        <Ul items={[
          'Colin: LOWA Renegade EVO GTX Mid (already owns) — gold standard',
          'Mom hiking: Hoka Anacapa Low or Merrell Moab 3 Low — NOT boots (extra weight = more knee strain at 80)',
          'Mom city: Hoka Bondi or Brooks Ghost Max (max cushion)',
          'Mom slip-ons: Allbirds Wool Loungers or Skechers Hands-Free (TSA + frequent car exits)',
          '3 pairs total per traveler. Rotate to dry',
        ]} />
      </Card>

      <Card emoji="🥾" title="Hiking-Specific">
        <Ul items={[
          'Trekking poles: Black Diamond Trail Ergo Cork or Leki Legacy Lite. CHECKED BAG ONLY (TSA prohibits carry-on)',
          'Knee sleeves for Mom: Bauerfeind GenuTrain or McDavid 401',
          'KT Tape Pro pre-cut strips',
          'Compression socks 15-20 mmHg knee-high (flights + drives)',
          'Daypack 15-25L (Osprey Daylite or similar)',
          '1.5L insulated bottle each (Hydro Flask 40oz)',
          'LMNT or Nuun electrolyte tabs (1-2/day desert)',
          'Trail snacks: trail mix, RXBars, beef jerky, cheese sticks, apples',
          'Headlamp (post-sunset returns at GC, Mesa Arch dawn)',
          'Small first-aid kit',
        ]} />
      </Card>

      <Card emoji="🦟" title="Trip-Specific Gotchas">
        <Ul items={[
          '🪰 FINE-MESH HEAD NETS for Antelope Island Day 14 — May = peak biting gnat season. Insect repellent doesn\'t work',
          '🔭 Binoculars for Yellowstone Lamar Valley wildlife',
          '🐻 Bear spray — BUY in Kalispell or rent at Apgar (can\'t fly with it)',
          '👜 NO bags on Antelope Canyon tour — phone + 1 water bottle in hand only. Banned: tripods, monopods, selfie sticks, drones, GoPro chest mounts',
          '💵 Cash $20-40 for tips (valet, rangers, drivers) + Horseshoe Bend $10 parking (cash/card, NO senior discount)',
          '🎟️ America the Beautiful Pass $80 (Colin\'s — covers all passengers)',
          '🍃 Foldable seat cane for Mom (Antelope Canyon waits, Old Faithful 90-min between eruptions)',
        ]} />
      </Card>

      <Card emoji="📸" title="Tech / Photography">
        <Ul items={[
          'Phone fully charged + portable battery (Anker 10K mAh)',
          'Phone HDR mode handles Antelope Canyon contrast — for light beams, tap to expose for the bright beam',
          'Camera (if separate) + extra batteries + SD cards',
          'Charging cables for car (cigarette adapter or USB-C in newer cars)',
          'Offline Google Maps + AllTrails downloads for park dead zones',
        ]} />
      </Card>

      <Card emoji="🩹" title="Health / First Aid">
        <Ul items={[
          'EltaMD UV Clear or Blue Lizard SPF 50 mineral sunscreen (zinc-based for Mom\'s skin)',
          'Aquaphor lip balm + ChapStick',
          'Refresh preservative-free eye drops',
          'Ibuprofen, Imodium, antihistamine, hydrocortisone',
          'Band-Aids, blister patches (Compeed)',
          'Hand sanitizer + wet wipes',
          'Travel TP roll',
          'Manta Sleep eye mask + Loop Quiet earplugs (Airbnbs vary in noise)',
          'Melatonin 1-3mg for jet lag',
        ]} />
      </Card>

      <Card emoji="📄" title="Documents">
        <Ul items={[
          'Passports (Mom: Canadian)',
          'Travel insurance policy + claims line',
          'Booking confirmations (printed + on phone): Hotels, flights, car, Antelope Canyon waiver, Bacchanal',
          'Mom\'s prescription list + doctor letter for controlled substances',
          'America the Beautiful Pass (Colin\'s)',
          'Driver\'s licenses + credit cards (Chase Sapphire Reserve = primary rental insurance)',
        ]} />
      </Card>

      <Card emoji="✅" title="Already Owned (per Gmail history)">
        <Ul items={[
          'LOWA Renegade EVO GTX Mid hiking boots (Colin)',
          'WHITIN trail running shoes + wide trail boots (Colin)',
          'TACVASEN Quarter Zip',
          'CGRRBW Chelsea Boots',
          'Active REI Co-op + Backcountry Summit+ memberships',
        ]} />
      </Card>

      <Card emoji="💡" title="Things often forgotten (gap list)">
        <P><B>Pre-trip (today):</B></P>
        <Ul items={[
          'Trekking poles → CHECKED BAG only (TSA bans carry-on)',
          'Bear spray → CANNOT FLY at all → buy in Kalispell Day 20 or rent at Apgar',
          'Photocopies of passport + travel insurance — separate from originals',
          "Mom's Canadian roaming activated BEFORE leaving home (Rogers/Bell US day pass ~$300 for 22 days)",
          'Vehicle pre-rental walkaround photos — date-stamped, every panel + interior',
          'Permethrin clothing treatment AT HOME 24-48hrs before flight (NOT day-of for Antelope Island Day 14)',
        ]} />
        <P><B>Quantity math (easy to underbuy):</B></P>
        <Ul items={[
          'Sunscreen: 1oz/day/person × 22 × 2 = ~44oz total = 6 bottles of 8oz',
          'Lip balm × 6 (you WILL lose some — desert + altitude destroys lips)',
          'Cash $300-500 backup (Antelope Canyon tip, gas stations declining cards, Tetons backup)',
        ]} />
        <P><B>Cold-mornings comfort (Tetons sunrise 40°F · Yellowstone 33°F · Dunraven Pass snow):</B></P>
        <Ul items={[
          'HotHands hand warmers × 10 pairs (~$15 Walmart SLC Day 11)',
          'Rain pants — NOT just shell. Glacier averages 11 wet days in May',
          'Phone-in-cold drains 30%+ → keep near torso in inner pocket + power bank',
        ]} />
        <P><B>Off-grid safety (Yellowstone + Glacier dead zones):</B></P>
        <Ul items={[
          'Apple Watch Series 9+ has satellite SOS → confirm setup before flying',
          'Garmin InReach Mini 2 rental ~$95/3wks from Outdoorsgeek (vs $315 REI rental)',
          "Mom's printed paper itinerary in pocket (phone dies → still has plan)",
        ]} />
        <P><B>Mom-specific health:</B></P>
        <Ul items={[
          'Probiotic (Florastor or Culturelle) — start 1 week before trip for gut shift insurance',
          'Antihistamine (Claritin) — pollen + dust',
          'Imodium for travel-tummy',
          'Glasses strap (Croakies) for reading + sun glasses',
          'Pre-trip dental check — last cavity on a 22-day trip = nightmare',
        ]} />
        <P><B>Cheap gear, big use:</B></P>
        <Ul items={[
          'Microfiber pack towel × 3 — pool/sweat/rain dry-off',
          'Ziplock bags gallon × 10 — wet shoes, electronics in rain, snacks',
          'Reusable shopping tote × 2 — for SLC/Moab/Driggs grocery stops',
          'Trash bags × 5 for car — daily clean-out',
        ]} />
      </Card>

      <Card emoji="🛒" title="TO BUY Before Trip">
        <Ul items={[
          'Mom: hiking shoes (Hoka Anacapa Low or Merrell Moab 3 Low)',
          'Mom: trekking poles, knee sleeves, KT tape, compression socks',
          'Mom: wide-brim sun hat, UPF 50 sun shirt, wraparound sunglasses',
          'Travel insurance for Mom (Manulife/Blue Cross/TuGo)',
          'Bear spray (in Kalispell or Apgar)',
          'Head nets (fine-mesh) for Antelope Island gnats',
          'Binoculars',
          '1.5L Hydro Flask 40oz bottles',
          'LMNT/Nuun electrolyte tabs',
          'Mineral SPF 50 + lip balm + eye drops',
          'Foldable seat cane for Mom',
          'Eye mask + earplugs',
          '10K mAh Anker power bank',
        ]} />
      </Card>
    </div>
  );
}

const Card = ({ emoji, title, children }: { emoji: string; title: string; children: React.ReactNode }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
    <div className="font-bold text-gray-800 mb-2 flex items-center gap-2"><span className="text-xl">{emoji}</span>{title}</div>
    <div className="text-sm text-gray-700">{children}</div>
  </div>
);

// ─── DAILY_PACK — hyper-detailed per-day per-event packing ───
type Outfit = { base?: string; top: string; bottom: string; footwear: string; layer?: string; acc?: string };
type DayPack = {
  n: number;
  date: string;
  title: string;
  weather: string;
  outfit: Outfit;
  daypack: string[];
  activity?: { label: string; items: string[] }[];
  evening?: string;
  electronics?: string[];
  warnings?: string[];
  mom?: string[];
};

const DAILY_PACK: DayPack[] = [
  { n: 1, date: 'Sun May 10', title: 'Vegas — Land + Bacchanal',
    weather: 'Hot 95°F day · 65°F evening',
    outfit: {
      top: 'Smart-casual button-down (Colin) / blouse (Mom). Light cotton/linen — Bacchanal AC is cold',
      bottom: 'Dark jeans or chinos',
      footwear: 'Closed-toe walking shoes (Allbirds / Skechers Hands-Free) — NOT sandals',
      layer: 'Light cardigan or lightweight blazer for AC dining',
      acc: 'Sunglasses for Strip walk · small crossbody (NO big purse — Bacchanal tables tight)',
    },
    daypack: [
      'Refillable water bottle (40oz Hydro Flask)',
      '$20-40 cash for valet + tips',
      'Lip balm (Aquaphor — desert destroys lips fast)',
      "Mom's day-of meds in pillbox",
      'Sunglasses + hat (afternoon walk to Bacchanal)',
      'Hotel keycard + ID in pocket (skip bag at Bellagio)',
    ],
    activity: [
      { label: 'Bacchanal Buffet 5:30pm', items: [
        'Small crossbody only (tables tight)',
        'Digestive tablets (Tums) — huge meal',
        'Camera/phone fully charged for fountain walk after',
      ]},
      { label: 'Bellagio fountains 8pm', items: [
        'Light cardigan ON — Strip drops to 65°F after sunset',
        'Beer Park at Paris LV = best seated viewing for Mom (cost of one drink)',
      ]},
    ],
    electronics: ['Phones to 80%+ before going out (Strip kills battery)', 'Hotel-room chargers plugged in for overnight'],
    warnings: ['Mom on Toronto midnight = 9pm Vegas. Skip Fremont Street. Bed by 9:30pm.'],
    mom: ['Compression socks ON (just landed 4h47m flight YYZ→LAS)', 'Eye mask + earplugs for early sleep', 'Hearing aids charged'],
  },
  { n: 2, date: 'Mon May 11', title: 'Vegas → Grand Canyon',
    weather: 'Hot AM 95°F desert · Cold eve 45°F at 7,000ft Mather Point',
    outfit: {
      top: 'T-shirt or short-sleeve button-down (cool car AC)',
      bottom: 'Lightweight zip-off pants — NOT shorts (sun + 7K ft cool eve)',
      footwear: 'Walking shoes (Colin LOWA broken-in, Mom Hoka Bondi)',
      layer: 'Fleece + light puffy READY in pack for Mather Point sunset',
      acc: 'Brimmed hat (Tilley T3) + polarized sunglasses',
    },
    daypack: [
      '2× 1.5L water bottles (refill in Williams or Kingman)',
      'Trail mix, jerky, apples, RXBars',
      'Mineral SPF 50 sunscreen',
      'Lip balm + hand sanitizer',
      'Headlamp (post-sunset walk back to car at Mather)',
      "10K mAh Anker power bank fully charged",
    ],
    activity: [
      { label: 'Mather Point sunset 7:24pm MST', items: [
        'Walk 5min east on Rim Trail = fewer crowds',
        'Trekking pole for Mom (paved but uneven near rim)',
        'Headlamp around neck (NOT in bag) for descent walk',
        'Fleece + light puffy ON — drops to 45°F after sunset with wind',
      ]},
    ],
    electronics: ['USB-C cable in car · charge phones during 4.5hr drive', 'Top off power bank to 100%'],
    warnings: ['Top off gas Kingman or Williams (NOT Tusayan — overpriced)', "Show Colin's America the Beautiful pass at South Entrance (already owned)"],
    mom: ['Compression socks for the 4.5hr drive', 'Knee sleeves ON before Mather walk', '3-4L water/day starts NOW (altitude)'],
  },
  { n: 3, date: 'Tue May 12', title: 'Grand Canyon Three Viewpoints',
    weather: 'Mild 70°F day · Cool 40°F eve · 7,000ft sun strong',
    outfit: {
      top: 'UPF 50 long-sleeve sun shirt OR T-shirt + sunscreen reapply',
      bottom: 'Light hiking pants',
      footwear: 'Hiking shoes (Colin LOWA, Mom Hoka Anacapa Low)',
      layer: 'Fleece + light wind shell (sunset at 7K ft drops to 45°F with wind)',
      acc: 'Wide-brim hat + polarized wraparound sunglasses (canyon glare)',
    },
    daypack: [
      '1.5L water/person (refill at Visitor Center, Yavapai, Maswik)',
      'Trail mix + jerky + apples',
      'LMNT or Nuun electrolyte tabs (1-2/day at altitude)',
      'Ibuprofen (altitude headache prevention)',
      'Sunscreen reapply + Aquaphor lip balm',
      'Headlamp + 10K power bank',
      'Trekking poles strapped on side',
    ],
    activity: [
      { label: 'AM Yavapai Geology + Rim Trail (1.4mi paved)', items: [
        'Sun shirt + brimmed hat',
        'Trekking pole for Mom — benches every 0.2mi',
        'Notebook/phone for free 30-min ranger geology talk',
      ]},
      { label: 'PM Hopi Point sunset 7:25pm (Hermit Road shuttle)', items: [
        'Fleece + wind shell ON for the 5:45pm shuttle',
        'Foldable seat cane for Mom (shuttle wait)',
        'Headlamp ON for return shuttle line in dark',
      ]},
    ],
    electronics: ['Charge cabin overnight + cable in car for shuttle wait time'],
    warnings: ['Altitude 7,000ft = real. 3-4L water, half-portion alcohol night 1.', "El Tovar didn't book — walk-in to Arizona Steakhouse if turned away"],
    mom: ['Knee sleeves ON for Rim Trail', 'Pre-emptive ibuprofen at breakfast', 'Foldable seat cane'],
  },
  { n: 4, date: 'Wed May 13', title: 'GC → Page (Horseshoe Bend sunset)',
    weather: 'Hot 90°F · Slickrock blast at Horseshoe Bend',
    outfit: {
      top: 'UPF 50 sun shirt — backup T-shirt in car for after sweat',
      bottom: 'Light hiking pants',
      footwear: 'Hiking shoes (sandy slickrock at Horseshoe Bend)',
      layer: 'Light fleece for AC car',
      acc: 'Wide-brim hat + sunglasses ESSENTIAL (slickrock glare brutal)',
    },
    daypack: [
      '1L water/person MIN (NO water at Horseshoe Bend trailhead)',
      '$10 cash for Horseshoe parking (NO senior discount)',
      'Headlamp (post-sunset walk back)',
      'Sunscreen reapply at 4pm + Aquaphor lip balm',
      'Trail mix for the long drive',
      'Phone fully charged for sunset photos',
    ],
    activity: [
      { label: 'Horseshoe Bend sunset 7:25pm MST', items: [
        '1.5mi RT ABA-compliant packed dirt (slight rise)',
        'Stand on LEFT (west) side for classic horseshoe symmetry',
        'NO drone allowed — banned by city ordinance',
        'Vault toilets at trailhead, NONE at overlook — pee before trail',
        'Foldable seat cane for Mom at viewpoint',
      ]},
    ],
    electronics: ['USB-C in car — top up phones during 2.5hr drive', 'Power bank to 100%'],
    warnings: ['Cameron Trading Post = ONLY reliable gas + lunch on US-89. Top off here.', 'Sunscreen reapply REAL — slickrock reflects UV from below'],
    mom: ['Trekking pole for slight rise', 'Foldable seat cane at overlook (no benches)'],
  },
  { n: 5, date: 'Thu May 14', title: '⭐ Antelope Canyon TOUR + Lake Powell',
    weather: 'Hot 92°F dry',
    outfit: {
      top: 'UPF 50 sun shirt OR T-shirt',
      bottom: 'Light hiking pants (sand floors of canyon)',
      footwear: 'Closed-toe shoes ESSENTIAL (sand pours into open shoes)',
      layer: 'Light fleece for car AC after canyon',
      acc: 'Brimmed hat + sunglasses (off DURING canyon — sun is filtered inside)',
    },
    daypack: [
      'LEFT IN CAR during tour: regular daypack contents',
      "Mom's printed waiver backup + insurance card (in glovebox)",
      "1L water/person for Lake Powell PM",
    ],
    activity: [
      { label: '⚠️ Antelope Canyon 10am MST tour — STRICT GEAR RULES', items: [
        '🚫 NO bags, fanny packs, hydration packs, backpacks, purses',
        '🚫 NO tripods, monopods, selfie sticks, drones, GoPro chest mounts',
        '✅ IN HAND ONLY: phone (HDR mode, 100% battery), ONE water bottle',
        '✅ IN POCKET ONLY: car keys, tip cash $10/person ($20 family for guide)',
        'Phone HDR mode set · tap-to-expose for bright light beam (let rock fall dark)',
        'Signed digital waiver on phone + printed backup in car',
      ]},
      { label: 'Lake Powell PM (Wahweap Marina lunch)', items: [
        'Same outfit OR swim trunks if wading',
        'Pool towel from Airbnb if swimming',
        'Sunscreen reapply 2pm',
      ]},
    ],
    electronics: ['Phones to 100% before 9:30am office check-in', 'Power bank in car (tour bans bags)'],
    warnings: ['🕐 TOUR IS ON MST (= same as PDT in May). DO NOT trust phone — Page itself runs on MDT. Order #FMBYMK paid.', 'Be at office 9:30am MST sharp — leave Airbnb 9:15am'],
    mom: ['Hearing aids in (guide narrates)', 'Reading glasses for waiver re-check at office', "Don't bring Mom's purse — leave EVERYTHING in car"],
  },
  { n: 6, date: 'Fri May 15', title: 'Page (Colin works · Mom solo)',
    weather: 'Hot 90°F',
    outfit: {
      top: 'COLIN: T-shirt or button-down for video calls · MOM: light blouse or T-shirt',
      bottom: 'COLIN: shorts off-camera · MOM: comfortable pants or capri',
      footwear: 'COLIN: slippers · MOM: Hoka Bondi (paved downtown)',
      layer: 'Light cardigan (Mom — AC museum)',
      acc: 'MOM: sun hat, sunglasses, small crossbody',
    },
    daypack: [
      "MOM: 1L water bottle",
      "MOM: $20 cash + reading glasses + phone",
      "MOM: SPF 50 sunscreen + Aquaphor lip balm",
      "MOM: light snack (RXBar)",
    ],
    activity: [
      { label: '10am John Wesley Powell Museum (small, indoor, AC)', items: [
        'Reading glasses for exhibit text',
        '~1hr — indoor AC = light cardigan',
      ]},
      { label: '3pm Hanging Gardens Trail (1.2mi RT shaded)', items: [
        'Walking shoes adequate (gentle gravel)',
        'NO trekking poles needed',
        'Water bottle, hat — shaded alcove but exposed approach',
      ]},
    ],
    electronics: ['Colin: laptop + phone at desk · headphones for calls', "Mom: phone topped to 100% before solo walk"],
    warnings: ["Hydrate aggressively today — tomorrow is 6.5hr drive. Mom 3-4L water."],
    mom: ['Hearing aids charged · pill organizer for evening dose', 'Cabin: tea/coffee setup, book, downloaded shows'],
  },
  { n: 7, date: 'Sat May 16', title: 'Page → Moab via Monument Valley',
    weather: 'Hot 90°F · 6.5hr drive (verified)',
    outfit: {
      top: 'Synthetic T-shirt (no irritation under seatbelt)',
      bottom: 'Light hiking pants (zip-off for break stops)',
      footwear: 'Walking shoes (slip-on friendly for restroom stops)',
      layer: 'Fleece + light puffy ready for cool Moab arrival',
      acc: 'Sunglasses + brimmed hat for Monument Valley photo stop',
    },
    daypack: [
      '2L water/person (long drive, fewer stops)',
      'Trail mix + jerky + apples + 4 RXBars',
      'Sunscreen + Aquaphor lip balm',
      'Travel TP roll + hand sanitizer + wet wipes',
      'Trash bag for car',
    ],
    activity: [
      { label: 'Monument Valley View Hotel deck (10-min photo stop)', items: [
        'Brimmed hat ON (exposed deck)',
        'NO 17-mile loop — gravel + deep sand, NOT rental-car friendly',
        'Forrest Gump Point Mile Marker 13 on US-163 north of park',
      ]},
      { label: 'Twin Rocks Cafe Bluff lunch (CLOSES 2pm SHARP)', items: [
        'Leave Kayenta no later than 1pm',
        'Cash + card both accepted',
      ]},
    ],
    electronics: ['USB-C + Lightning cables in car · gas card ready', 'Offline maps downloaded — Navajo Nation has no signal'],
    warnings: ['⛽ FUEL UP IN PAGE before leaving (only 1 station before Kayenta)', '⛽ FUEL UP AGAIN in Kayenta (mandatory restroom + fuel)'],
    mom: ['Compression socks ALL DAY', 'Neck pillow + lumbar pillow', 'Breaks every 90min', 'Ear plugs for in-car nap'],
  },
  { n: 8, date: 'Sun May 17', title: 'Moab (Colin works · Mom solo)',
    weather: 'Hot 90°F',
    outfit: {
      top: 'COLIN: T-shirt for calls · MOM: T-shirt or tank',
      bottom: 'COLIN: shorts off-camera · MOM: shorts or capri (heat)',
      footwear: 'COLIN: slippers · MOM: Hoka Bondi (paved Mill Creek), pool slides for hot tub',
      layer: 'MOM: light cover-up for pool · cardigan for AC indoor lunch',
      acc: 'MOM: sun hat, sunglasses, swimsuit + cover-up for Airbnb pool',
    },
    daypack: [
      'MOM: 2L water (heat is real)',
      'MOM: SPF 50 sunscreen reapply + lip balm',
      'MOM: $20 cash + phone + reading glasses',
      'POOL kit: swimsuit, cover-up, towel, slides, waterproof phone case',
    ],
    activity: [
      { label: '9am Mill Creek Parkway (2mi paved riverside)', items: [
        'Walking shoes, water, hat',
        'Flat + shaded + benches — NO poles needed',
      ]},
      { label: '12-5pm Pool/hot tub at Airbnb', items: [
        'Swimsuit + cover-up + towel + slides',
        'Waterproof phone pouch',
        'SPF 50 reapply every 2hrs',
      ]},
    ],
    electronics: ['Pool day = phone risk near water — waterproof pouch'],
    warnings: ['Moab Museum CLOSED Sundays — push to Tuesday Day 10', 'Mom rests for 4am wake-up Day 10 (Mesa Arch sunrise)'],
    mom: ['Early start before noon heat', 'Cabin AC + hydration before tomorrow Arches'],
  },
  { n: 9, date: 'Mon May 18', title: '🔥 Arches NP Full Day',
    weather: 'Hot 85°F · NO SHADE anywhere · exposed slickrock',
    outfit: {
      top: 'UPF 50 LONG-SLEEVE sun shirt (CRITICAL — Arches has NO shade) · backup T-shirt in car for sweat change',
      bottom: 'Light hiking pants (zip-off for shorts mid-day option)',
      footwear: 'Hiking shoes (Colin LOWA, Mom Hoka Anacapa Low — sandy trails)',
      layer: 'NONE on body · light fleece in pack for AC car',
      acc: 'WIDE-BRIM HAT (NOT cap — ears + neck burn fast on Mom) · polarized wraparound sunglasses · neck buff for sun + dust',
    },
    daypack: [
      '2L water/person MIN (refill ONLY at Visitor Center)',
      'LMNT/Nuun electrolyte tabs (1-2 — heat sweat)',
      'Trail mix + jerky + apples + RXBars × 2',
      'Sunscreen reapply 2× (mid-morning + 2pm) + 2× lip balm',
      'Ibuprofen (heat headache) + antihistamine',
      'FOLDABLE SEAT CANE for Mom (Windows Section sit-spots)',
      'Camera + phone + 10K power bank',
      'Headlamp (post-sunset return)',
      'Trekking poles for Mom',
      'Backup T-shirt in car for after sweat',
      'Spray bottle of water (face cool)',
    ],
    activity: [
      { label: '7am Park Avenue (drive-up + 0.2mi to overlook)', items: ['Stop at Visitor Center first — pee + refill 2L bottles'] },
      { label: '7:45am Balanced Rock (0.3mi paved loop)', items: ['Easy warmup'] },
      { label: '8:15am Windows Section (1mi sandy loop)', items: [
        'Knee sleeves ON for Mom · KT tape on patella',
        'Foldable seat cane for sit-spots',
        'Reapply sunscreen now (sun strong by 8am)',
      ]},
      { label: '9:15am Double Arch (0.5mi flat)', items: ['Quick stop'] },
      { label: '10:30am Delicate Arch LOWER Viewpoint (100yd flat)', items: ['NOT the 3mi arch trail — Mom can do this'] },
      { label: '11:30am LUNCH BACK in Moab (escape midday heat)', items: [
        'Change into backup T-shirt at car',
        'AC restaurant (Moab Diner) for full hour',
      ]},
      { label: '3:30pm RE-ENTER Arches (Skyline + golden hour)', items: ['Sunscreen reapply at 4pm'] },
      { label: '7pm Balanced Rock at sunset', items: ['Headlamps for descent walk'] },
    ],
    electronics: ['Phone to 100% · power bank fully charged · USB-C in car for re-entry afternoon'],
    warnings: ['🚻 Restrooms ONLY at Visitor Center, Devils Garden, Wolfe Ranch (no others). Pee BEFORE each trail.', '🔥 NO shade except Devils Garden trees. Out of park 11:30am-3:30pm hard.', '🎉 2026 timed entry CANCELLED — but parking fills. Arrive 7am.'],
    mom: ['Knee sleeves + KT tape · ibuprofen pre-emptive at breakfast', 'Foldable seat cane MUST', 'Backup hat in car if first one sweat-soaked'],
  },
  { n: 10, date: 'Tue May 19', title: '⭐ Mesa Arch Sunrise + Canyonlands',
    weather: 'Cold predawn 40°F · Warm midday 80°F · 6,000ft elevation',
    outfit: {
      base: 'Thermal long-sleeve OR merino base (predawn cold)',
      top: 'Fleece OR fleece + T-shirt underneath (peel layers as sun rises)',
      bottom: 'Hiking pants (NOT shorts predawn at 6,000ft)',
      footwear: 'Hiking shoes (gravel walk to arch in dark)',
      layer: 'Light puffy + BEANIE + light gloves for predawn shoot',
      acc: 'HEADLAMP REQUIRED for 0.7mi predawn walk · polarized sunglasses for after',
    },
    daypack: [
      '🔥 THERMOS OF HOT COFFEE prepped night before (4:30am coffee shops CLOSED)',
      '2L water + granola bars + RXBars',
      'Camera + tripod (allowed at Mesa Arch — only spot in trip)',
      'Phone + 10K power bank',
      'Gloves + beanie + change-of-layer for after sunrise',
      'Headlamp WITH FRESH BATTERIES (check night before)',
      'Trekking poles for Mom (gravel in dark)',
    ],
    activity: [
      { label: '4:30am LEAVE MOAB SHARP (set 2 alarms)', items: [
        'Coffee thermos already prepped',
        'Headlamp battery checked night before',
        'Layers laid out night before — drowsy = no thinking',
        '60mi/45min drive to Mesa Arch',
      ]},
      { label: '5:20am arrive parking', items: [
        '(Parking fills 60-90min before sunrise)',
        'Headlamps ON to walk 0.7mi gravel',
      ]},
      { label: '6:07am sunrise — arch glows ~1hr after', items: [
        'Tripod = ~6 prime spots at Mesa Arch',
        'Peel base layer once sun is up',
        'Stay 30-60min after — golden glow continues',
      ]},
      { label: '7:30am drive-up viewpoints', items: [
        'Shafer Canyon · Buck Canyon · Grand View Point',
        'Green River Overlook (best drive-up view)',
        'Skip all hikes — Mom can stay in car at viewpoints',
      ]},
    ],
    electronics: ['Phone to 100% NIGHT BEFORE · power bank charged · USB-C cable in car'],
    warnings: ['4:30AM HARD — set 2 alarms. Coffee prepped. Layers laid out.', "Mom can SKIP pre-dawn — sleep in, Colin solo Mesa Arch, pickup at 7:30am for Canyonlands viewpoints"],
    mom: ['If knees flared from yesterday Arches, skip pre-dawn — sleep + sit-in-car viewpoints at 7:30am', 'Compression socks for the predawn drive nap'],
  },
  { n: 11, date: 'Wed May 20', title: 'Moab → SLC + Temple Square',
    weather: 'Mild 75°F · 4hr drive',
    outfit: {
      top: 'AM: T-shirt for travel · PM: nicer button-down/blouse for Temple Square',
      bottom: 'AM: hiking pants · PM: dressier pants',
      footwear: 'Walking shoes (Mom Hoka Bondi) — no hikers needed',
      layer: 'Light cardigan/fleece for AC restaurants + cool evening',
      acc: 'Sunglasses · hat optional',
    },
    daypack: [
      '1L water + snacks for road',
      'Light jacket for evening',
      'Sunscreen + lip balm',
      'Phone + charger + power bank',
    ],
    activity: [
      { label: '11:30am Tamarisk Restaurant Green River lunch', items: ['51mi from Moab · riverside views · classic since 1979'] },
      { label: '5pm walk Temple Square (4 blocks N from Airbnb)', items: [
        '✨ NEW Visitors\' Center opened May 18 — 2 days before arrival',
        'Salt Lake Temple still closed (renovation through 2027)',
        'Light cardigan ON for cool evening',
      ]},
      { label: '7:30pm Red Iguana 2 dinner (866 W S Temple)', items: [
        'Same menu as #1, shorter line',
        'Mole sampler complimentary — try all 8',
      ]},
    ],
    electronics: ['Cables in car · top up during 4hr drive'],
    warnings: ['Tamarisk lunch hours fine, but closes 8pm if changes plans', 'SLC = 4,226ft — fully acclimated from GC + Moab'],
    mom: ['Compression socks for the drive', 'Lumbar pillow', 'Knee sleeves OFF (rest day for joints before Sat hikes)'],
  },
  { n: 12, date: 'Thu May 21', title: 'SLC (Colin works · Mom solo)',
    weather: 'Mild 75°F',
    outfit: {
      top: 'COLIN: button-down for video calls · MOM: light blouse or T-shirt',
      bottom: 'COLIN: dark jeans/slacks · MOM: light pants or skirt',
      footwear: 'COLIN: slippers · MOM: Hoka Bondi (lots of city walking)',
      layer: 'MOM: cardigan for AC museum/aviary',
      acc: 'MOM: sun hat + sunglasses + small purse · Uber app set up',
    },
    daypack: [
      'MOM: 1L water + sunscreen + lip balm',
      'MOM: $20 cash + phone + reading glasses',
      'MOM: $14 Tracy Aviary cash/card',
      'POOL kit (afternoon): swimsuit, cover-up, slides, towel',
    ],
    activity: [
      { label: '8am La Barba coffee (327 W 200 S, 1 block from Airbnb)', items: ['Mom-friendly walk'] },
      { label: '10:30am Uber Tracy Aviary at Liberty Park ($14 senior)', items: [
        'Paved paths, ADHD-friendly, lots to see',
        'Sun hat + sunscreen — outdoor',
      ]},
      { label: '12pm Tabernacle organ recital (free, 30min)', items: ['Mon-Sat 12-12:30pm · Cardigan for AC'] },
      { label: '2pm rooftop pool/hot tub at Airbnb', items: ['Swimsuit + cover-up + towel'] },
      { label: '7:30pm Copper Onion dinner (UPSCALE)', items: [
        'Change to dressier outfit',
        'Reservation made',
      ]},
    ],
    electronics: ["Mom's phone topped up before solo Uber day"],
    warnings: ['Tracy Aviary is the secret weapon for Mom — paved, contained, low effort'],
    mom: ['Hearing aids charged', 'Pill organizer for evening dose'],
  },
  { n: 13, date: 'Fri May 22', title: 'SLC (Colin works AM · joint PM)',
    weather: 'Mild 75°F',
    outfit: {
      top: 'COLIN: nicer T-shirt/polo (4pm transition) · MOM: blouse or T-shirt',
      bottom: 'Jeans or light pants',
      footwear: 'Walking shoes',
      layer: 'Fleece for cool 5pm Temple Square walk',
      acc: 'Sunglasses · light bag',
    },
    daypack: [
      '1L water + sunscreen + lip balm',
      'Light layers for evening',
    ],
    activity: [
      { label: 'Mom AM: Liberty Park 1.5mi flat loop OR This Is The Place', items: ['Walking shoes · Hoka Bondi'] },
      { label: '12pm Crown Burgers lunch (Utah classic pastrami burger)', items: ['Casual outfit fine'] },
      { label: '5pm joint Temple Square golden hour walk', items: ['Fleece ON · cool evening'] },
      { label: '7pm Red Iguana 1 dinner', items: ['Go BEFORE 6pm or expect 60-90min wait'] },
    ],
    electronics: ['Laptop done by 4pm · Mom + Colin both charged for Saturday'],
    warnings: ['LIGHT day before busy Saturday Antelope Island'],
    mom: ['REST joints today — head nets + hiking poles + KT tape ready in pack for tomorrow'],
  },
  { n: 14, date: 'Sat May 23', title: '🪰 Antelope Island + NHMU + Ensign Peak',
    weather: 'Mild 70°F · GNAT SEASON PEAK',
    outfit: {
      top: 'UPF sun shirt — TUCKED-IN collar (gnats find any gap)',
      bottom: 'Hiking pants — TUCKED INTO socks (ankle gnats) · zip-offs for later',
      footwear: 'Hiking shoes for Buffalo Point + Ensign · CHANGE to walking shoes for NHMU',
      layer: 'Fleece + light shell · museum AC cool',
      acc: '🪰 FINE-MESH HEAD NET (BOTH) · brimmed hat · sunglasses · gloves optional',
    },
    daypack: [
      '2L water + snacks',
      'HEAD NETS × 2 backup (lose one and trip ruined)',
      'Permethrin-treated layer (only thing that works on no-see-ums)',
      'Binoculars (bison spotting)',
      'Camera + phone + 10K power bank',
      'Knee sleeves + KT tape for Mom',
      'Headlamps (Ensign Peak descent in dusk)',
      'Trekking poles strapped on',
    ],
    activity: [
      { label: '8am drive Antelope Island (45min, $10/car)', items: [
        '🪰 HEAD NETS ON before getting out of car',
        'Buffalo Point easy walk (breezier, fewer bugs)',
        'Out by 12:30pm',
      ]},
      { label: '2pm NHMU U of U ($20.95 senior — NOT $18)', items: [
        'Change to walking shoes · stash hiking gear in car',
        'Fleece ON (AC cool)',
        'Past Worlds dinosaurs · Bug World · rooftop terrace',
      ]},
      { label: '7pm Ensign Peak (0.9mi RT — NOT 0.8 — steep)', items: [
        'Back to hiking shoes',
        'Hiking poles ON for Mom',
        '300ft gain in 0.45mi · steep',
        'Headlamp ON for descent (sunset 8:35pm)',
        'Bail to State Capitol grounds if knees flare',
      ]},
    ],
    electronics: ['Phone to 100% · power bank topped up · headlamp battery checked'],
    warnings: ['🪰 HEAD NETS CRITICAL — May = peak no-see-um/biting gnat season. Insect repellent does NOT work.', 'Ensign Peak descent in dusk = headlamp essential'],
    mom: ['HEAD NET + tucked-in collar + tucked-in pants', 'Knee sleeves + KT tape for Ensign', 'Trekking poles + headlamp', 'Foldable seat cane if energy spent'],
  },
  { n: 15, date: 'Sun May 24', title: 'SLC → Driggs ID (via Pocatello + Swan Valley)',
    weather: 'Mild 70°F → Cool mountain 57°F · 4h45 drive · sunset 8:52pm MDT',
    outfit: {
      top: 'T-shirt + fleece for the drive (cool as you climb)',
      bottom: 'Hiking pants',
      footwear: 'Walking shoes',
      layer: 'Fleece + light puffy in pack (Driggs cooler than SLC, 6,100ft = 50°F evening)',
      acc: 'Sunglasses (mountain reflection)',
    },
    daypack: [
      'Snacks + 2L water for stops',
      'Sunglasses + lip balm',
      'Binoculars (dusk wildlife — moose/elk in Swan Valley)',
      'Camera/phone charged',
    ],
    activity: [
      { label: '12:00 noon leave SLC (top off gas)', items: ['Confirm Driggs Airbnb keypad BEFORE leaving — patchy cell on Pine Creek Pass'] },
      { label: '2:30pm Buddy\'s Italian, Pocatello (Exit 69, ~45min)', items: ['626 E Lewis St · classic since 1955 · bathrooms + parking'] },
      { label: '3:45pm Snake River Greenbelt, Idaho Falls (15min stretch)', items: ['Park near falls overlook · paved · restrooms'] },
      { label: '4:30pm Palisades Reservoir overlook, Swan Valley (30min)', items: ['Calamity Point or Blowout Boat Ramp pullouts', 'DUSK = moose / elk / eagle window — drive slow, scan willows'] },
      { label: '5:45pm Pine Creek Pass + Victor overlook (15min)', items: ['First Teton reveal coming down into the valley'] },
      { label: '6:30pm Driggs check-in', items: ['8487 Caribou Ct, Victor ID · keypad in 4pm'] },
      { label: '7:30pm Forage Bistro dinner (reserve) or Teton Thai walk-in', items: ['Tetons fill the eastern sky · light puffy ON — 50°F'] },
    ],
    electronics: ['USB-C in car · podcasts queued for 5hr drive', 'Offline Google Maps downloaded for Idaho Falls → Driggs (patchy cell)'],
    warnings: [
      'Route: I-15 → US-26 → ID-31 Pine Creek Pass — NOT Teton Pass and NOT Logan/Bear Lake (adds 90min + closures)',
      'Memorial Day Sunday traffic Jackson-bound = use Pine Creek Pass, not WY-22',
      'Pre-departure: gas top-off, Forage reservation, Idaho 511 check',
    ],
    mom: ['Compression socks for the drive', 'Neck pillow + lumbar pillow', 'Light fleece on arrival — Driggs evening 50°F'],
  },
  { n: 16, date: 'Mon May 25', title: 'Memorial Day Driggs (Colin works · Mom solo)',
    weather: 'Cool mountain 60°F day · 35-40°F nights',
    outfit: {
      top: 'COLIN: WFH casual · MOM: T-shirt + fleece (cooler than SLC)',
      bottom: 'Hiking pants or warm pants',
      footwear: 'Walking shoes (downtown stroll)',
      layer: 'MOM: light puffy for evening',
      acc: 'MOM: sunglasses + light gloves optional + small bag',
    },
    daypack: [
      'MOM: 1L water + snacks + $20 cash',
      'MOM: SPF 50 (UV strong at altitude even when cool) + lip balm',
      'MOM: phone + reading glasses',
    ],
    activity: [
      { label: '10am Teton Geo Center (60 S Main, free)', items: ['Mon 10am-4pm only — Memorial Day open'] },
      { label: '11:30am Driggs Main Street stroll', items: ['Just 2 blocks of shops/galleries'] },
      { label: '12:30pm Tatanka Tavern lunch', items: ['3rd-floor Teton view!'] },
      { label: '2pm Spud Drive-In iconic giant potato photo', items: ['231 S Hwy 33 — quick photo stop'] },
      { label: '2:30pm Teton Creek Corridor / Sherman Park', items: ['Paved level path · gentle'] },
    ],
    electronics: ['Cabin laptop + phone overnight', "Mom's phone topped up before solo walk"],
    warnings: ['REST DAY before Tetons big day tomorrow (6:30am wake-up)', 'Pack for tomorrow tonight: gloves, beanie, layers, $135 cash/card for Mom park entry'],
    mom: ['Light puffy for evening (Driggs lows 35-40°F)', 'Knee sleeves OFF — rest joints'],
  },
  { n: 17, date: 'Tue May 26', title: '⭐ Grand Teton NP loop',
    weather: 'Cool 60-65°F day · Cold 35-40°F sunrise · 38% rain/snow chance',
    outfit: {
      base: 'Thermal long-sleeve OR merino base (sunrise cold)',
      top: 'T-shirt + fleece (peel layers mid-morning)',
      bottom: 'Hiking pants (NOT shorts)',
      footwear: 'Hiking shoes (Colin LOWA, Mom Hoka Anacapa)',
      layer: 'Light puffy + RAIN SHELL (38% chance rain/snow)',
      acc: 'BEANIE + light gloves for sunrise · brimmed hat for midday · polarized sunglasses',
    },
    daypack: [
      '🪪 $135 CASH/CARD for Mom park entry ($35 + $100 non-resident)',
      'Gloves + beanie',
      '2L water/person',
      'BIG snack supply: trail mix + jerky + apples + RXBars × 3',
      'Camera + binoculars (moose at Oxbow Bend)',
      'Trekking poles for Mom (String Lake walk)',
      'Sunscreen (high elevation = strong UV even cool) + lip balm',
      'Foldable seat cane for Mom',
    ],
    activity: [
      { label: '6:30am leave Victor → Teton Pass', items: [
        'Sunrise 5:50am MDT — accept "good light" not true golden',
        'Beanie + gloves + puffy ON',
      ]},
      { label: '7:30am Mormon Row (Moulton barns + balsamroot)', items: ['30min · drive-up · brief walks'] },
      { label: '8:30am Schwabacher Landing (0.5mi flat)', items: ['Aspen + Tetons reflection · knee sleeves on if Mom feels'] },
      { label: '9:30am Snake River Overlook (drive-up)', items: ['Ansel Adams spot · 15min'] },
      { label: '11:30am Persephone Bakery Jackson lunch', items: ['Walk Town Square antler arches · peel base layer to T-shirt'] },
      { label: '1:30pm Chapel of the Transfiguration', items: ['Small log chapel · Tetons through window · 20min'] },
      { label: '2:15pm String Lake (skip Hidden Falls boat — too steep)', items: [
        'Trekking poles ON',
        'Optional flat 1mi walk along water',
      ]},
      { label: '3:30pm Oxbow Bend (afternoon light, moose)', items: ['Binoculars · 30min'] },
      { label: '4:30pm return via Hwy 26 → Hwy 33', items: ['AVOIDS Teton Pass at dusk ✅'] },
    ],
    electronics: ['Phone to 100% · power bank · USB-C in car for the loop'],
    warnings: ['🪪 $135 Mom non-resident surcharge (NEW 2026 fee). Bring CARD.', 'Wildlife: 100yd bears, 25yd bison/moose. NO bear spray needed (not bushwhacking).', 'Layers ON/OFF all day · rain shell ESSENTIAL'],
    mom: ['Beanie + gloves for sunrise', 'Knee sleeves ON', 'Trekking poles', 'Foldable seat cane'],
  },
  { n: 18, date: 'Wed May 27', title: 'Driggs → West Yellowstone + Old Faithful + Grand Prismatic',
    weather: 'Cool 60°F · possibly rain',
    outfit: {
      top: 'T-shirt + fleece',
      bottom: 'Hiking pants',
      footwear: 'Hiking shoes (boardwalk + 1.2mi gravel hike)',
      layer: 'Fleece + RAIN SHELL (Yellowstone weather changes fast)',
      acc: 'Brimmed hat + sunglasses + light gloves morning',
    },
    daypack: [
      '1.5L water + snacks',
      'Gloves + beanie (cold mornings)',
      'Camera + ranger predicted-eruption schedule (printed at VEC)',
      'Trekking poles for Mom (105ft uphill to Fairy Falls Overlook)',
      'Sunscreen + lip balm',
      'Foldable seat cane for 90-min eruption wait',
    ],
    activity: [
      { label: '12pm Madison Crossing Lounge lunch (historic schoolhouse)', items: ['Walking distance from Crosswinds Inn for later'] },
      { label: '2:30pm Old Faithful — check predicted eruption', items: [
        'Boardwalk benches for eruption viewing',
        'Foldable seat cane for Mom if 90-min wait',
      ]},
      { label: '3:30pm Upper Geyser Basin loop (~1mi flat boardwalk)', items: [
        'Past Castle/Grand/Beehive — quieter than main',
      ]},
      { label: '4pm Old Faithful Inn lobby (1904 log architecture)', items: ['10min worth even if not eating'] },
      { label: '5:15pm Fairy Falls Overlook for Grand Prismatic', items: [
        '1.2mi RT, 105ft gain over 0.6mi',
        'NPS calls it "very well-suited for seniors"',
        'NOT the Midway boardwalk — overlook is the iconic shot',
        'Trekking poles for Mom',
        'Backup: Midway Geyser Basin (0.5mi flat) if Mom tired',
      ]},
    ],
    electronics: ['Phone to 100% · OFFLINE MAPS DOWNLOADED (Yellowstone has dead zones)'],
    warnings: ['📵 Yellowstone has cell dead zones. Download offline maps.', 'Eruption time check at Visitor Education Center first thing'],
    mom: ['Foldable seat cane for eruption wait', 'Beanie + gloves for morning', 'Knee sleeves ON for Fairy Falls hike'],
  },
  { n: 19, date: 'Thu May 28', title: '🦬 Yellowstone Upper Loop (LONG day)',
    weather: 'Cool 50-65°F · Snow possible at 8,800ft Dunraven Pass',
    outfit: {
      base: 'Thermal long-sleeve OR merino base',
      top: 'T-shirt + fleece',
      bottom: 'Hiking pants',
      footwear: 'Hiking shoes',
      layer: 'Light puffy + RAIN SHELL ALL · snow at Dunraven Pass realistic',
      acc: 'BEANIE + gloves (snow reflection!) · polarized sunglasses · brimmed hat for low elevations',
    },
    daypack: [
      '2L water/person',
      'BIG snack supply — 10-12hr day: trail mix + jerky + apples + RXBars × 4 + extra bars',
      'Gloves + beanie',
      'Sunscreen (snow reflection BURNS!) + lip balm × 2',
      'Binoculars (Lamar Valley wildlife — bison + maybe distant wolves)',
      'Camera + phone + 10K power bank',
      'Eye drops (high altitude dryness)',
      'Foldable seat cane for Mom',
    ],
    activity: [
      { label: '7am depart Crosswinds (early = wildlife + fewer crowds)', items: [
        'Layers ON — beanie + fleece + puffy',
        '⛽ Top off gas BEFORE leaving',
      ]},
      { label: '8am Norris Geyser Basin (Porcelain 0.5mi flat boardwalk)', items: ['Cold morning · puffy ON'] },
      { label: '9:30am Mammoth — Upper Terrace 1.5mi loop FIRST (sit-down)', items: ['Drive loop · Lower boardwalk if energy'] },
      { label: '11:30am Lamar Valley — TURN AROUND at Slough Creek pullout', items: [
        'Bison + pronghorn reliable midday',
        'Binoculars · DON\'T push past!',
      ]},
      { label: '1pm Roosevelt Lodge or Tower Fall General Store lunch', items: ['Layers off briefly inside'] },
      { label: '2pm Tower Fall viewpoint (0.1mi)', items: ['Lower trail closed — overlook only'] },
      { label: '2:30pm Dunraven Pass (8,800ft, snow patches)', items: [
        'GLOVES + BEANIE ON',
        'Sunscreen reapply (snow reflection)',
        'Foldable seat cane if photo stops',
      ]},
      { label: '3:30pm Canyon — Artist Point (ICONIC Lower Falls)', items: ['Tripod allowed'] },
      { label: '4pm Brink of Upper Falls or Lookout Point', items: ['SKIP Brink of Lower Falls (600ft of metal stairs)'] },
      { label: '7:30pm Three Bear Restaurant dinner', items: ['Walking distance from Crosswinds'] },
    ],
    electronics: ['Phone to 100% · power bank fully charged · USB-C in car · OFFLINE MAPS'],
    warnings: ['⛽ TOP OFF GAS Madison Junction or Old Faithful (long stretches no gas)', '🦬 Bison jams normal — STAY IN CAR · 100yd bears/wolves, 25yd bison/elk', '☀️ Snow reflection BURNS skin even when cool — sunscreen mandatory'],
    mom: ['Compression socks for the long drive', 'Knee sleeves', 'Eye drops (altitude dryness)', 'Foldable seat cane'],
  },
  { n: 20, date: 'Fri May 29', title: 'West Yellowstone → Glacier (💜 ROBIN ARRIVES)',
    weather: 'Cool 55°F · 6.5-7hr drive · rain likely',
    outfit: {
      top: 'T-shirt + fleece',
      bottom: 'Hiking pants (long drive comfort)',
      footwear: 'Walking shoes',
      layer: 'Fleece + rain shell ready · light puffy in pack',
      acc: 'Sunglasses',
    },
    daypack: [
      'Snacks + 2L water + podcasts',
      'Neck pillow + lumbar pillow for Mom',
      'Charging cables (Lightning + USB-C)',
      'Eye drops + ear plugs',
    ],
    activity: [
      { label: '7am depart Crosswinds (Mom sleeps in car)', items: [
        'Compression socks ON for Mom',
        'Coffee + breakfast in to-go cups',
      ]},
      { label: '10:30-11:30am Bozeman lunch', items: [
        '~1.5hr in · vibrant downtown · farm-to-table',
        'Change Mom into nicer shirt for dinner readiness',
      ]},
      { label: '4pm BUY BEAR SPRAY in Kalispell', items: [
        '⚠️ CRITICAL — can\'t fly with it, must buy locally',
        'Or rent at Apgar (cheaper but more restrictive)',
      ]},
      { label: '5pm drop Mom at Apgar Village Lodge to rest', items: ['Robin\'s clothes ready in suitcase for tomorrow'] },
      { label: 'Robin pickup AS 2402 FCA', items: [
        'Colin solo to FCA (27mi/35min)',
        'Back at Apgar with Robin',
      ]},
      { label: '7pm Russell\'s Fireside dinner Lake McDonald Lodge', items: [
        '1913 historic · RESERVATION made',
        'Nicer button-down (Colin) / blouse (Mom + Robin)',
        'Dress pants',
        '10min from Apgar',
      ]},
    ],
    electronics: ['Cables in car · charge during drive', 'Russell\'s reservation confirmation on phone'],
    warnings: ['🐻 BUY BEAR SPRAY — can\'t fly with it', 'Russell\'s Fireside reservation Friday May 29 for 3 — confirmed'],
    mom: ['Compression socks ALL DAY (7hr drive)', 'Neck pillow + lumbar pillow', 'Breaks every 90min', 'Eye drops + ear plugs for in-car nap'],
  },
  { n: 21, date: 'Sat May 30', title: '🧊 Glacier — Avalanche + Boat Tour',
    weather: 'Cool 55-65°F · RAIN LIKELY (Glacier averages 11 wet days in May)',
    outfit: {
      base: 'Thermal long-sleeve',
      top: 'T-shirt + fleece',
      bottom: 'Hiking pants (waterproof if you have them, else quick-dry)',
      footwear: 'Hiking shoes — WATERPROOF if possible (Avalanche trail muddy after rain)',
      layer: 'RAIN SHELL REQUIRED (Glacier wet)',
      acc: 'Brimmed hat or beanie · light gloves',
    },
    daypack: [
      '2L water/person + lots of snacks',
      '🐻 BEAR SPRAY (Avalanche is grizzly area)',
      'DRY SOCKS change in pack',
      'DRY T-shirt change in car',
      'Camera + binoculars',
      'Trekking poles for Mom (730ft gain on Avalanche Lake)',
      'Sunscreen + lip balm',
      'Foldable seat cane for boat tour',
    ],
    activity: [
      { label: '8:30am drive 16mi up GTSR to Avalanche Creek', items: [
        '⚠️ Park early — fills fast',
        'Bear spray on belt or pack hip strap (NOT inside pack)',
      ]},
      { label: '9am Trail of the Cedars boardwalk (0.9mi loop, all-accessible)', items: ['Warmup · stroller-friendly'] },
      { label: '9:45am DECISION POINT: Avalanche Lake Trail', items: [
        'Full: 4.6mi RT / 730ft gain',
        'MOM BAIL: turn back at 1mi mark beside Avalanche Creek gorge (still gorgeous)',
        'Trekking poles ESSENTIAL for descent',
        'Bear spray accessible',
      ]},
      { label: '1pm Russell\'s Fireside lunch (Lake McDonald Lodge)', items: ['Casual outfit fine for lunch'] },
      { label: '2:30pm DeSmet boat tour (1hr historic 1930 wooden boat)', items: [
        'Booked 406-257-2426',
        'Light jacket on boat (lake breeze)',
        'Foldable seat cane if Mom standing',
      ]},
      { label: '4pm Apgar beach colored pebbles', items: [
        'Red/green/blue argillite',
        '⚠️ Illegal to remove — leave the rocks!',
      ]},
      { label: '8:55pm sunset Apgar pier walk', items: ['Light puffy + light · cool evening'] },
    ],
    electronics: ['Phone to 100% · power bank · USB-C in car', '📵 Cell service spotty in park'],
    warnings: ['🐻 BEAR SPRAY on Avalanche hike (active grizzly area)', '🌧️ Wet weather likely — rain shell + dry socks + dry shirt change in car', '🪨 LEAVE THE ROCKS — federal offense to remove'],
    mom: ['Knee sleeves + KT tape for 730ft gain (or bail at 1mi)', 'Trekking poles ESSENTIAL', 'Dry socks change', 'Foldable seat cane for boat'],
  },
  { n: 22, date: 'Sun May 31', title: '✈️ Departures (Glacier → home)',
    weather: 'Cool 55°F',
    outfit: {
      top: 'T-shirt or light long-sleeve (TSA-friendly)',
      bottom: 'Light pants — proper pants (Mom prefers over yoga)',
      footwear: 'Slip-on shoes (Allbirds Wool Loungers or Skechers Hands-Free) — TSA-friendly',
      layer: 'Cardigan or fleece for AC airports',
      acc: 'Sunglasses · hat optional',
    },
    daypack: [
      'See "Mom carry-on" below — DO NOT CHECK',
    ],
    activity: [
      { label: '6:30am sunrise Lake McDonald (Apgar pier 5min)', items: ['Quick photo stop · light puffy ON'] },
      { label: '7:30am slow breakfast Eddie\'s Cafe', items: ['Apgar Village · huckleberry pie!'] },
      { label: '12pm LATEST depart Apgar with Mom (HARD)', items: ['27mi/35min to FCA'] },
      { label: '12:35pm arrive FCA · 2:30pm Mom DL 2575 (YYZ via MSP)', items: [
        'TSA · check Mom in 1.5hrs early',
      ]},
      { label: 'Lunch Backslope Brewing Whitefish OR Three Forks Grille', items: ['Colin + Robin between flights'] },
      { label: '5:40pm Colin + Robin AS 2419 (FCA→SEA, 1h32m, First Class Colin)', items: [] },
    ],
    electronics: ['Phones to 100% night before · power bank charged'],
    warnings: ['Mom MUST be at FCA by 1pm — leave Apgar 12pm HARD'],
    mom: [
      '🚫 ALL MEDS in CARRY-ON, NOT checked',
      'Original pharmacy bottles + 1-week buffer beyond trip + prescription list',
      'Passport (Canadian)',
      'Travel insurance card + 24/7 claims # (photo on phone)',
      'Phone fully charged + 10K Anker power bank',
      'Reading glasses × 2 pairs',
      'Wallet, IDs',
      'One change of clothes (in case checked bag delayed)',
      'Compression socks ON (long flights + connection)',
      'Lumbar pillow + neck pillow',
      'Eye mask + earplugs',
      'Hearing aids in + spare batteries (size 312)',
    ],
  },
];

// ─── Today banner (tactical, for transit days) ───
function GuideTodayBanner({ day }: { day: typeof tripData.days[0] }) {
  const r = day.driveRoute;
  return (
    <div className="max-w-3xl mx-auto px-4 pt-4">
      <div className="rounded-xl shadow-md border-2 border-amber-400 bg-gradient-to-br from-amber-50 to-white p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-bold tracking-widest uppercase text-amber-700 bg-amber-200 px-2 py-0.5 rounded-full">TODAY</span>
          <span className="text-lg font-bold text-gray-900">{formatTripDateLong(day.date)}</span>
          <span className="text-xs text-gray-400 font-mono ml-auto">Day {day.dayNumber} of {tripData.days.length}</span>
        </div>
        <div className="text-sm font-semibold text-gray-800 leading-snug mb-1">{day.title}</div>
        {day.momNotes?.blurb && <div className="text-sm text-gray-700 leading-snug">{day.momNotes.blurb}</div>}

        {r && (
          <div className="mt-3 rounded-lg bg-white border border-slate-200 p-3">
            <div className="font-bold text-slate-800 mb-1">🚗 {r.from} → {r.to}</div>
            <div className="text-xs text-slate-500 mb-2">{r.miles} mi · {r.driveHours}h drive · leave {r.departure} · arrive {r.arrival}{r.sunset ? ` · sunset ${r.sunset}` : ''}</div>
            <p className="text-sm text-slate-700 leading-snug mb-3">{r.tldr}</p>

            <div className="space-y-1.5">
              <div className="text-[10px] font-bold uppercase text-slate-500 tracking-wide">Stops, in order</div>
              {r.stops.map((stop, i) => (
                <div key={i} className="flex gap-2 text-sm">
                  <span className="shrink-0 text-base leading-none mt-0.5">{STOP_ICON[stop.type]}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-slate-800">{stop.name} <span className="text-[11px] font-normal text-slate-500">· {stop.timeNeeded}</span></div>
                    <div className="text-xs text-slate-700">{stop.note}</div>
                  </div>
                </div>
              ))}
            </div>

            {r.preDeparture && (
              <details className="mt-3" open>
                <summary className="text-[11px] font-bold uppercase text-slate-500 tracking-wide cursor-pointer">Before leaving SLC</summary>
                <ul className="mt-1 space-y-0.5 text-xs text-slate-700">
                  {r.preDeparture.map((p, i) => <li key={i} className="flex gap-1.5"><span className="text-slate-400">☐</span>{p}</li>)}
                </ul>
              </details>
            )}

            {r.alternatives && (
              <details className="mt-2">
                <summary className="text-[11px] font-bold uppercase text-slate-500 tracking-wide cursor-pointer">Routes considered (and skipped)</summary>
                <ul className="mt-1 space-y-1 text-xs">
                  {r.alternatives.map((a, i) => (
                    <li key={i}>
                      <span className={`font-semibold ${a.verdict === 'skip' ? 'text-red-700' : a.verdict === 'save' ? 'text-blue-700' : 'text-slate-700'}`}>{a.name} — {a.verdict.toUpperCase()}.</span> <span className="text-slate-600">{a.why}</span>
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </div>
        )}

        {day.momNotes?.tip && (
          <div className="mt-3 bg-amber-100/60 border-l-4 border-amber-400 rounded-r-lg p-2.5">
            <div className="text-[11px] font-bold text-amber-700 uppercase tracking-wide mb-0.5">💡 Tour guide tip</div>
            <div className="text-[13px] text-amber-900 leading-snug">{day.momNotes.tip}</div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Helpers ───
const precipPrep = (pct: number): string => {
  if (pct <= 5) return 'No rain prep needed';
  if (pct <= 15) return 'Light shell in pack just in case';
  if (pct <= 30) return 'Pack rain shell + dry-socks change';
  if (pct <= 45) return '⚠️ Pack rain shell + rain pants + dry change';
  return '⚠️ HIGH RAIN — full rain shell + rain pants + dry socks + dry shirt';
};

// ─── Daily pack accordion component ───
function DailyPack() {
  const [openDay, setOpenDay] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      <div className="bg-amber-100 border border-amber-300 rounded-xl p-4">
        <div className="font-bold text-amber-900 mb-1">📅 Outfit · day-bag · weather · trails · gear stops — per day</div>
        <div className="text-sm text-amber-900">Live forecast Days 1-15, 3yr-avg climatology Days 16-22. <B>Tap a day to expand.</B></div>
      </div>
      {DAILY_PACK.map(d => {
        const fc = getForecast(d.n);
        const hr = getHourly(d.n);
        const ml = getMultiLoc(d.n);
        const trails = trailsForDay(d.n);
        const stops = stopsForDay(d.n);
        const today = getTodayDay();
        const isTodayDay = today?.dayNumber === d.n;
        return (
        <div key={d.n} className={`bg-white rounded-xl shadow-sm overflow-hidden border ${isTodayDay ? 'border-amber-400 ring-2 ring-amber-200' : 'border-gray-100'}`}>
          <button onClick={() => setOpenDay(openDay === d.n ? null : d.n)}
            className="w-full flex items-center gap-3 p-3 hover:bg-amber-50 transition-colors text-left">
            <div className={`shrink-0 w-14 h-14 rounded-xl flex flex-col items-center justify-center ${isTodayDay ? 'bg-amber-500 text-white' : 'bg-amber-100'}`}>
              <div className={`text-[10px] font-bold ${isTodayDay ? 'text-white' : 'text-amber-700'}`}>{d.date.split(' ')[0]}</div>
              <div className={`text-sm font-bold leading-none ${isTodayDay ? 'text-white' : 'text-amber-700'}`}>{d.date.split(' ').slice(1).join(' ')}</div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-bold text-gray-800 leading-tight">{d.title}</span>
                {isTodayDay && <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-500 text-white">TODAY</span>}
                <span className="text-[10px] text-gray-400 font-mono">d{d.n}</span>
              </div>
              <div className="text-[11px] text-gray-500 mt-0.5">
                {fc ? (
                  <>🌡️ {fc.high_f}°F / {fc.high_c}°C · {fc.low_f}°F / {fc.low_c}°C · {fc.precip_pct}% rain · UV {fc.uv}</>
                ) : (
                  <>🌡️ {d.weather}</>
                )}
              </div>
            </div>
            {openDay === d.n ? <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" /> : <ChevronRight className="w-5 h-5 text-gray-400 shrink-0" />}
          </button>
          {openDay === d.n && (
            <div className="px-3 pb-4 border-t border-gray-100 text-sm space-y-3 pt-3">
              {/* Weather block (from live forecast) */}
              {fc && (
                <div>
                  <div className="font-bold text-sky-700 text-xs uppercase tracking-wide mb-1.5">
                    🌤️ Weather {fc.status === 'forecast' ? <span className="text-emerald-600 font-normal normal-case ml-1">live forecast</span> : <span className="text-gray-500 font-normal normal-case ml-1">3yr climatology</span>}
                  </div>
                  <div className="bg-sky-50 rounded-lg p-2.5 space-y-1 text-[13px]">
                    <div><B>📍 {fc.location}</B></div>
                    <div><B>High:</B> {fc.high_f}°F / {fc.high_c}°C · <B>Low:</B> {fc.low_f}°F / {fc.low_c}°C</div>
                    <div><B>Conditions:</B> {fc.conditions}</div>
                    <div><B>Rain:</B> {fc.precip_pct}% · <B>UV:</B> {fc.uv} · <B>Wind:</B> {fc.wind_mph}mph {fc.wind_dir}</div>
                    <div><B>🌅 Sunrise:</B> {fc.sunrise} · <B>🌇 Sunset:</B> {fc.sunset}</div>
                    <div className="text-emerald-700 font-medium pt-1">☔ {precipPrep(fc.precip_pct)}</div>
                    {fc.tz_note && <div className="bg-amber-100 rounded px-2 py-1 mt-1 text-[12px] text-amber-900">🕐 {fc.tz_note}</div>}
                    {fc.caveat && <div className="bg-amber-100 rounded px-2 py-1 mt-1 text-[12px] text-amber-900">{fc.caveat}</div>}
                  </div>
                </div>
              )}

              {/* Hourly buckets AM/midday/PM/evening */}
              {hr && (
                <div>
                  <div className="font-bold text-sky-700 text-xs uppercase tracking-wide mb-1.5">
                    ⏰ AM / Midday / PM / Evening <span className="text-gray-500 font-normal normal-case ml-1">at {hr.location}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 text-[11px]">
                    {([
                      ['🌅 6-9am', hr.morning],
                      ['☀️ 11am-2pm', hr.midday],
                      ['🌤️ 3-6pm', hr.afternoon],
                      ['🌇 7-9pm', hr.evening],
                    ] as const).map(([label, b], i) => (
                      <div key={i} className="bg-sky-50 rounded p-1.5 text-center">
                        <div className="font-semibold text-sky-900 text-[10px]">{label}</div>
                        <div className="font-bold text-sky-700 text-sm mt-0.5">{b.temp_f}°F</div>
                        <div className="text-sky-600 text-[10px]">{b.temp_c}°C</div>
                        <div className="text-sky-700 text-[10px] mt-0.5">{b.conditions}</div>
                        <div className="text-sky-700/80 text-[10px]">UV {b.uv} · {b.wind_mph}mph</div>
                        {b.precip_pct > 5 && <div className="text-blue-700 text-[10px] font-semibold">{b.precip_pct}% rain</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Multi-location stops on driving days */}
              {ml && (
                <div>
                  <div className="font-bold text-indigo-700 text-xs uppercase tracking-wide mb-1.5">
                    🚗 Weather along the route (drive day)
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-2.5 space-y-1.5">
                    {ml.stops.map((s, i) => (
                      <div key={i} className="flex items-center gap-2 text-[12px]">
                        <span className="font-bold text-indigo-900 w-16 shrink-0">{s.time}</span>
                        <span className="font-semibold text-indigo-800 flex-1">{s.location}</span>
                        <span className="text-indigo-700 font-bold">{s.temp_f}°F / {s.temp_c}°C</span>
                        <span className="text-indigo-600 text-[11px]">{s.conditions}{s.precip_pct > 5 ? ` · ${s.precip_pct}%` : ''} · {s.wind_mph}mph</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Outfit */}
              <div>
                <div className="font-bold text-amber-700 text-xs uppercase tracking-wide mb-1.5">👕 Outfit</div>
                <div className="bg-amber-50 rounded-lg p-2.5 space-y-1 text-[13px]">
                  {d.outfit.base && <div><B>Base:</B> {d.outfit.base}</div>}
                  <div><B>Top:</B> {d.outfit.top}</div>
                  <div><B>Bottom:</B> {d.outfit.bottom}</div>
                  <div><B>Footwear:</B> {d.outfit.footwear}</div>
                  {d.outfit.layer && <div><B>Layer:</B> {d.outfit.layer}</div>}
                  {d.outfit.acc && <div><B>Accessories:</B> {d.outfit.acc}</div>}
                </div>
              </div>

              {/* Day bag */}
              <div>
                <div className="font-bold text-amber-700 text-xs uppercase tracking-wide mb-1.5">🎒 In the daypack</div>
                <ul className="list-disc list-outside ml-5 text-[13px] text-gray-700 space-y-0.5">
                  {d.daypack.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>

              {/* Activity-specific gear */}
              {d.activity && d.activity.length > 0 && (
                <div>
                  <div className="font-bold text-amber-700 text-xs uppercase tracking-wide mb-1.5">⏱️ Per event</div>
                  <div className="space-y-2">
                    {d.activity.map((a, i) => (
                      <div key={i} className="bg-blue-50 border-l-4 border-blue-300 rounded p-2.5">
                        <div className="font-semibold text-blue-900 text-[13px] mb-1">{a.label}</div>
                        <ul className="list-disc list-outside ml-4 text-[12px] text-blue-900/90 space-y-0.5">
                          {a.items.map((i2, j) => <li key={j}>{i2}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Electronics */}
              {d.electronics && d.electronics.length > 0 && (
                <div>
                  <div className="font-bold text-amber-700 text-xs uppercase tracking-wide mb-1.5">🔌 Electronics</div>
                  <ul className="list-disc list-outside ml-5 text-[13px] text-gray-700 space-y-0.5">
                    {d.electronics.map((e, i) => <li key={i}>{e}</li>)}
                  </ul>
                </div>
              )}

              {/* Mom extras */}
              {d.mom && d.mom.length > 0 && (
                <div>
                  <div className="font-bold text-purple-700 text-xs uppercase tracking-wide mb-1.5">👵 Mom extras</div>
                  <div className="bg-purple-50 border-l-4 border-purple-300 rounded p-2.5">
                    <ul className="list-disc list-outside ml-4 text-[12px] text-purple-900 space-y-0.5">
                      {d.mom.map((m, i) => <li key={i}>{m}</li>)}
                    </ul>
                  </div>
                </div>
              )}

              {/* Warnings */}
              {d.warnings && d.warnings.length > 0 && (
                <div>
                  <div className="font-bold text-amber-700 text-xs uppercase tracking-wide mb-1.5">⚠️ Critical reminders</div>
                  <div className="bg-amber-50 border-l-4 border-amber-400 rounded p-2.5">
                    <ul className="list-disc list-outside ml-4 text-[12px] text-amber-900 space-y-0.5">
                      {d.warnings.map((w, i) => <li key={i}>{w}</li>)}
                    </ul>
                  </div>
                </div>
              )}

              {/* Trails today */}
              {trails.length > 0 && (
                <div>
                  <div className="font-bold text-emerald-700 text-xs uppercase tracking-wide mb-1.5">🥾 Trails today (download offline night before)</div>
                  <div className="space-y-2">
                    {trails.map((t, i) => (
                      <div key={i} className="bg-emerald-50 rounded-lg p-2.5">
                        <div className="font-semibold text-emerald-900 text-[13px]">{t.trail}</div>
                        <div className="text-[11px] text-emerald-800/80 mt-0.5">
                          {t.miles_rt}mi RT · {t.elevation_gain_ft}ft gain · {t.difficulty} · Mom: {t.senior_friendly}
                        </div>
                        <div className="text-[11px] text-emerald-900/80 mt-1">{t.notes}</div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {t.alltrails_url && (
                            <a href={t.alltrails_url} target="_blank" rel="noopener noreferrer"
                              className="text-[11px] bg-emerald-600 text-white px-2 py-1 rounded font-semibold hover:bg-emerald-700">
                              AllTrails ↗
                            </a>
                          )}
                          {t.nps_map_pdf && (
                            <a href={t.nps_map_pdf} target="_blank" rel="noopener noreferrer"
                              className="text-[11px] bg-amber-600 text-white px-2 py-1 rounded font-semibold hover:bg-amber-700">
                              NPS Map PDF ↗
                            </a>
                          )}
                          <span className="text-[11px] text-gray-500">Search Gaia by name</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gear stops today */}
              {stops.length > 0 && (
                <div>
                  <div className="font-bold text-rose-700 text-xs uppercase tracking-wide mb-1.5">🛒 Gear to grab today ({stops[0].best_city})</div>
                  <div className="space-y-2">
                    {stops.map((s, i) => (
                      <div key={i} className="bg-rose-50 rounded-lg p-2.5">
                        <div className="font-semibold text-rose-900 text-[13px]">{s.item}</div>
                        {s.reason && <div className="text-[11px] text-rose-800/80 italic mt-0.5">{s.reason}</div>}
                        <div className="text-[12px] text-rose-900 mt-1.5">
                          <B>{s.best.store}</B> — {s.best.address}<br/>
                          <span className="text-rose-800">{s.best.price}{s.best.hours ? ` · ${s.best.hours}` : ''}{s.best.phone ? ` · ${s.best.phone}` : ''}</span>
                          {s.best.note && <div className="text-[11px] text-rose-800/80 mt-0.5 italic">{s.best.note}</div>}
                        </div>
                        {s.alternatives && s.alternatives.length > 0 && (
                          <details className="mt-2">
                            <summary className="text-[11px] text-rose-700 cursor-pointer hover:underline">Show {s.alternatives.length} alt option{s.alternatives.length > 1 ? 's' : ''}</summary>
                            <div className="mt-1 space-y-1 pl-2">
                              {s.alternatives.map((a, j) => (
                                <div key={j} className="text-[11px] text-rose-800">
                                  <B>{a.store}</B> — {a.address} · {a.price}{a.note ? ` · ${a.note}` : ''}
                                </div>
                              ))}
                            </div>
                          </details>
                        )}
                        {s.recommendation && <div className="text-[11px] text-emerald-800 bg-emerald-50 rounded p-1.5 mt-1.5">💡 {s.recommendation}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      );})}
    </div>
  );
}
