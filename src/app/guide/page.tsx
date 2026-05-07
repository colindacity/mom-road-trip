'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight, MapPin, Compass, Backpack, Clock, Heart, Camera, AlertTriangle } from 'lucide-react';

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
    id: 'vegas', title: 'Las Vegas', emoji: '🎰', days: 'Day 1 (May 10)',
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
    id: 'gc', title: 'Grand Canyon', emoji: '🏜️', days: 'Days 2-3 (May 11-13)',
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
    id: 'page', title: 'Page, AZ', emoji: '🌊', days: 'Days 4-6 (May 13-15)',
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
    id: 'moab', title: 'Moab', emoji: '🪨', days: 'Days 7-10 (May 16-20)',
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
    id: 'slc', title: 'Salt Lake City', emoji: '🏔️', days: 'Days 11-14 (May 20-24)',
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

      <Note>Sun May 24 → Driggs (290mi/4.5hr): I-15 N → Logan UT (1.5hr lunch at Bluebird Candy 1881-era / Crumb Brothers Bakery) → Idaho Falls → Driggs over Pine Creek Pass. AVOID Teton Pass on travel day.</Note>
    </>),
  },
  {
    id: 'tetons', title: 'Driggs / Tetons', emoji: '⛰️', days: 'Days 15-17 (May 24-27)',
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
    id: 'yellowstone', title: 'Yellowstone', emoji: '🦬', days: 'Days 18-19 (May 27-29)',
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
    id: 'glacier', title: 'Glacier', emoji: '🧊', days: 'Days 20-22 (May 29-31)',
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

// ─── Page ───
export default function GuidePage() {
  const [openSection, setOpenSection] = useState<string | null>('vegas');
  const [openTab, setOpenTab] = useState<'guide' | 'mom' | 'pack'>('guide');

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 text-white px-4 py-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2"><Compass className="w-7 h-7" /> Tour Guide</h1>
        <p className="text-sm md:text-base mt-1 text-white/95">Deep dive · Day-by-day insider tips · Mom-tested pacing</p>
        <p className="text-xs text-white/80 mt-1">Researched by location specialists across 8 stops + Mom expert</p>
      </div>

      {/* Tabs */}
      <div className="max-w-3xl mx-auto px-4 pt-4">
        <div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-4">
          {([
            ['guide', '📍 Locations', Compass],
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

// ─── Pack List ───
function PackList() {
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
