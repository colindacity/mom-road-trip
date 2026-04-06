'use client';

import { CheckCircle2, Circle, AlertTriangle, ExternalLink, Plane, Hotel, UtensilsCrossed, Car, CreditCard, Wifi, BedDouble, MapPin, Clock, DollarSign } from 'lucide-react';

const BOOKED = [
  {
    label: 'Las Vegas',
    dates: 'Sun May 10 (1 night)',
    name: 'The LINQ Hotel & Casino',
    conf: 'Hotels.com #73410152077445',
    cost: '$56.63 resort fee (room via OneKeyCash)',
    paid: '$0 room paid',
    balance: '$56.63 resort fee at check-in',
    details: 'Deluxe Room, 2 Queen Beds, Non Smoking. 3535 Las Vegas Blvd South. Check-in 4pm, out 11am.',
    url: 'https://www.hotels.com/',
  },
  {
    label: 'Grand Canyon (IN-PARK!)',
    dates: 'Mon-Wed May 11-13 (2 nights)',
    name: 'Maswik Lodge — 20% Discount',
    conf: 'Xanterra #20514347',
    cost: '$547.30 total',
    paid: '$273.65 deposit (Visa)',
    balance: '$273.65 at check-in',
    details: 'Standard 2 Queen North. $255.99/night (20% off). Inside Grand Canyon National Park — no re-entry needed. Cancel penalty after May 9.',
    url: 'https://www.grandcanyonlodges.com/',
    phone: '888-297-2757',
  },
  {
    label: 'Salt Lake City',
    dates: 'Wed-Sun May 20-24 (4 nights)',
    name: 'Convention Ctr 2BR Airbnb — Pool/HotTub/Gym/Theatre',
    conf: 'Airbnb HMN2P4MBR9',
    cost: '$1,256.86 total ($272/night)',
    paid: '$544.00 (Apr 1, Visa 6386)',
    balance: '$712.86 (charged May 5)',
    details: '241 W 200 S, Salt Lake City, UT 84101. Hosted by GrandRoad. 2BR, rooftop pool/hot tub, keypad check-in 4pm, checkout 10am. Free cancel before Apr 20.',
    url: 'https://www.airbnb.com/rooms/1377086372116606050',
    phone: '801-201-5734',
  },
  {
    label: 'Glacier National Park',
    dates: 'Fri-Sun May 29-31 (2 nights)',
    name: 'Apgar Village Lodge & Cabins',
    conf: '#3870048',
    cost: '$392.26 total',
    paid: '$189.22',
    balance: '$203.04 at check-in + Preservation Fee',
    details: 'Cabin 3 Queen, 2 Room. Glacier Park Collection. 3 guests (Colin + Mom + Robin). $1/night Glacier NP donation at checkout.',
    url: 'https://www.glacierparkcollection.com/lodging/apgar-village/',
    phone: '1-844-868-7474',
  },
];

const BOOKED_ACTIVITIES = [
  {
    label: 'Upper Antelope Canyon Tour',
    dates: 'Thu May 14, 10:00am-11:30am',
    conf: 'Order #FMBYMK / Booking #341017065',
    cost: '$220 (2 adults)',
    details: 'Antelope Slot Canyon Tours. Luxury 4x4 vans. Colin signed waiver — MOM STILL NEEDS TO SIGN (check email).',
    url: 'https://antelopeslotcanyon.com/',
  },
  {
    label: 'Bacchanal Buffet at Caesars Palace',
    dates: 'Sun May 10 (afternoon)',
    conf: 'OpenTable reservation',
    cost: '~$130-160 (2 adults)',
    details: 'Sunday brunch $65/pp (crab upgrade $80). 250+ dishes, lobster claws, lobster bisque. 90-min dining. Reservation = line skip.',
    url: 'https://www.opentable.com/r/bacchanal-buffet-caesars-palace-las-vegas',
  },
];

interface Option {
  name: string;
  price: string;
  total: string;
  beds: string;
  wifi: string;
  wifiWarning?: boolean;
  location: string;
  perks: string;
  url: string;
  recommended?: boolean;
  avoid?: boolean;
}

interface PendingStay {
  label: string;
  dates: string;
  nights: number;
  workDays: string;
  wifiNeeded: boolean;
  criteria: string;
  nearTo: string;
  options: Option[];
}

const PENDING_STAYS: PendingStay[] = [
  {
    label: 'Page, AZ',
    dates: 'Wed-Fri May 13-15',
    nights: 3,
    workDays: 'May 15 (1 full day)',
    wifiNeeded: true,
    criteria: '2BR or 2 queens, 300Mbps+ WiFi for work day, close to Antelope Canyon & Horseshoe Bend',
    nearTo: 'Antelope Canyon (~10min), Horseshoe Bend (~5min), Lake Powell (~15min)',
    options: [
      { name: '2BR Airbnb Duplex (downtown Page)', price: '$90-150/n', total: '$270-450', beds: '2 bedrooms', wifi: '867 Mbps fiber CONFIRMED', location: 'Downtown, walk to restaurants', perks: 'Kitchen, quiet neighborhood', url: 'https://www.airbnb.com/page-az/stays', recommended: true },
      { name: 'Hampton Inn & Suites Page', price: '$140-250/n', total: '$420-750', beds: '2 Queen Suite', wifi: 'Rated 8.9/10, 24hr biz center', location: '5min Horseshoe Bend, 15min Lake Powell', perks: 'Free hot breakfast, indoor pool, #1 on TripAdvisor', url: 'https://www.hilton.com/en/hotels/pgalphx-hampton-suites-page-lake-powell/' },
      { name: 'Country Inn & Suites Radisson', price: '$114-160/n', total: '$340-480', beds: '2 Queens', wifi: 'Unverified (newer property)', location: 'Central Page off Hwy 89', perks: 'Free breakfast, biz center, pool, modern', url: '' },
      { name: 'Home2 Suites by Hilton Page', price: '$100-140/n', total: '$300-420', beds: '2 Queens', wifi: 'Unverified', location: 'Central Page', perks: 'Kitchenette, Hilton Honors, newer (2020)', url: '' },
    ],
  },
  {
    label: 'Moab, UT',
    dates: 'Sat-Tue May 16-19',
    nights: 4,
    workDays: 'May 17 (full) + May 16 & 19 (half days)',
    wifiNeeded: true,
    criteria: '2BR or 2 queens, 300Mbps+ WiFi CRITICAL (2 work days), close to Arches & Canyonlands. May = PEAK season ($309/n avg)',
    nearTo: 'Arches NP entrance (~5mi), Canyonlands Island in the Sky (~32mi), Dead Horse Point (~35mi)',
    options: [
      { name: 'My Place Hotel Moab', price: '$200-280/n', total: '$800-1,120', beds: '2 Queens, full kitchen', wifi: '100+ Mbps CONFIRMED', location: 'North Moab, 4-5mi to Arches', perks: 'Rolling desk + office chair, biz center, extended-stay brand', url: 'https://www.myplacehotels.com/locations/my-place-hotel-moab-ut', recommended: true },
      { name: 'Element Moab (Marriott)', price: '$250-350/n', total: '$1,000-1,400', beds: '2 Queens (418sqft), kitchenette', wifi: 'Unverified — buy enhanced tier', location: '6min to Arches', perks: 'Free breakfast, pool, Marriott Bonvoy pts, desk in room', url: 'https://www.marriott.com/en-us/hotels/cnyel-element-moab/overview/' },
      { name: '2BR Airbnb/VRBO with Fiber', price: '$250-400/n', total: '$1,150-1,850', beds: 'True 2 bedrooms', wifi: 'Fiber or Starlink (varies)', location: 'Downtown Moab ~5mi Arches', perks: 'Privacy, full kitchen. VRBO #431015 "Arches Retreat" has fiber', url: 'https://www.vrbo.com/431015' },
      { name: '⚠️ Hyatt Place Moab', price: '$200-320/n', total: 'AVOID', beds: '2Q or Casita 2BR', wifi: '3-5 Mbps DOCUMENTED — TERRIBLE', wifiWarning: true, location: '5mi to Arches', perks: 'Nice property but WiFi kills it for work', url: '', avoid: true },
    ],
  },
  {
    label: 'Driggs, ID (Teton Valley)',
    dates: 'Sun-Tue May 24-26',
    nights: 3,
    workDays: 'May 25 Memorial Day (full) + May 24 (half)',
    wifiNeeded: true,
    criteria: '2BR or 2 queens, 300Mbps+ WiFi, Teton views ideal. Memorial Day = work day. Silver Star fiber (1Gbps) available in area.',
    nearTo: 'Grand Teton NP (~60min via Teton Pass), Grand Targhee ski resort (~12mi)',
    options: [
      { name: 'Bronze Buffalo Ranch 2BR Suite (Victor)', price: '$400-600/n', total: '$1,200-1,800', beds: 'True 2BR, 1,185sqft, gourmet kitchen', wifi: 'Fiber resort-grade', location: 'Victor, 11mi south of Driggs', perks: 'Spa/pool for Mom, fireplace, Teton view balcony, luxury', url: 'https://www.bronzebuffaloranch.com/', recommended: true },
      { name: 'Teton Valley Cabins (Driggs)', price: '$150-200/n', total: '$450-600', beds: '2 Queens SAME ROOM (no separation)', wifi: 'Fiber optic CONFIRMED', location: '1mi east of downtown Driggs', perks: 'Best value, cottonwood forest, walkable to town', url: 'https://www.tetonvalleycabins.com/' },
      { name: 'Saddlehorn Cabin (VRBO #1066147)', price: '$300-400/n', total: '$900-1,200', beds: 'True 2BR, 1,353sqft, 3 beds', wifi: 'VERIFY with host (Silver Star fiber in area)', location: 'Driggs area, Teton views', perks: 'Full kitchen, washer/dryer, fireplace, privacy', url: 'https://www.vrbo.com/1066147' },
    ],
  },
  {
    label: 'West Yellowstone, MT',
    dates: 'Wed-Thu May 27-28',
    nights: 2,
    workDays: 'None — all park days',
    wifiNeeded: false,
    criteria: '2 queens, walking distance to West Yellowstone park entrance. Memorial Day week = peak demand.',
    nearTo: 'Yellowstone NP West Entrance (walkable), Old Faithful (~30mi inside park)',
    options: [
      { name: 'Gray Wolf Inn & Suites', price: '$200-250/n', total: '$400-500', beds: 'Deluxe Double Queen (2 queens)', wifi: 'Free WiFi', location: '2 blocks to West Entrance (closest)', perks: 'JUST RENOVATED ($1.4M, May 21, 2026), pool, hot tub, breakfast, AAA 3-Diamond', url: 'https://www.yellowstonevacations.com/stay/lodging/gray-wolf-inn-and-suites/', recommended: true },
      { name: 'Kelly Inn West Yellowstone', price: '$200-280/n', total: '$400-560', beds: '2 Queens (Grizzly Building)', wifi: 'Free WiFi', location: '11min walk to entrance', perks: 'Biggest pool in town, free breakfast, 100% non-smoking, proven choice', url: 'https://www.yellowstonekellyinn.com/' },
      { name: 'Stage Coach Inn', price: '$180-220/n', total: '$360-440', beds: '2 Queens available', wifi: 'Free WiFi', location: 'Center of town, walkable to entrance', perks: 'Budget option, on main street near shops/restaurants', url: '' },
    ],
  },
];

const PENDING_FLIGHTS = [
  { who: 'Colin', route: 'SEA → LAS', date: 'Sun May 10', best: '$81 Alaska nonstop', alt: '$67 Frontier (no bags), $89 Delta', url: 'https://www.google.com/travel/flights' },
  { who: 'Mom', route: 'YYZ → LAS', date: 'Sun May 10', best: '$129 Air Canada nonstop', alt: '$228 Porter (best comfort, no middle seats)', url: 'https://www.google.com/travel/flights' },
  { who: 'Robin', route: 'SEA → FCA', date: 'Fri May 29', best: '$127 Alaska 1:13pm nonstop', alt: '$152 Alaska 9:35pm (after work)', url: 'https://www.google.com/travel/flights' },
  { who: 'Colin+Robin', route: 'FCA → SEA', date: 'Sun May 31', best: '$152/ea Alaska 11:33am nonstop', alt: '$303 total for 2', url: 'https://www.google.com/travel/flights' },
  { who: 'Mom', route: 'FCA → YYZ', date: 'Sun May 31', best: '$286 United via DEN', alt: '$289 Alaska via SEA, $289 United via ORD', url: 'https://www.google.com/travel/flights' },
];

const SIGNUPS = [
  { name: 'AARP ($12/yr)', why: '30-35% off car, 10% hotels, Hilton Silver', before: 'Hotels & car', url: 'https://www.aarp.org/membership/' },
  { name: 'Hilton Honors (free)', why: 'Member rates Hampton Inn, AARP = Silver', before: 'Page hotel', url: 'https://www.hilton.com/en/hilton-honors/' },
  { name: 'National Emerald Club (free)', why: 'May waive drop fee, skip counter', before: 'Car rental', url: 'https://www.nationalcar.com/en/loyalty/program.html' },
  { name: 'Tock account (free)', why: 'El Tovar lunch 30-day window Apr 12', before: 'Apr 12', url: 'https://www.exploretock.com/' },
  { name: 'Google Flights tracking', why: 'Track all 6 routes for price drops', before: 'ASAP', url: 'https://www.google.com/travel/flights' },
];

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  if (!href) return <>{children}</>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-0.5">
      {children}<ExternalLink className="w-3 h-3" />
    </a>
  );
}

export default function BookingsPage() {
  const bookedTotal = 57 + 547 + 1257 + 392 + 220 + 160;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold">Booking HQ — Mom Road Trip 2026</h1>
          <p className="text-blue-100 text-sm mt-1">May 10-31 | Colin + Mom + Robin (Day 20) | 22 days, 6 parks</p>
          <p className="text-blue-200 text-xs mt-2">Robin: book anything marked PENDING below. All research done, just pick and book.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">

        {/* Progress */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-green-700">6</div>
            <div className="text-xs text-green-600">Booked</div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-amber-700">4</div>
            <div className="text-xs text-amber-600">Hotels Pending</div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-blue-700">5</div>
            <div className="text-xs text-blue-600">Flights Pending</div>
          </div>
          <div className="bg-gray-100 border border-gray-200 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-gray-700">${bookedTotal.toLocaleString()}</div>
            <div className="text-xs text-gray-500">Booked So Far</div>
          </div>
        </div>

        {/* BOOKED ACCOMMODATIONS */}
        <section>
          <h2 className="text-lg font-bold text-green-700 flex items-center gap-2 mb-3"><CheckCircle2 className="w-5 h-5" /> Booked Accommodations</h2>
          <div className="space-y-2">
            {BOOKED.map(b => (
              <div key={b.label} className="bg-white border border-green-100 rounded-lg p-3 text-sm">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-bold text-green-800">{b.label} — {b.name}</div>
                    <div className="text-gray-500 text-xs">{b.dates} | {b.conf}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-bold">{b.cost}</div>
                    <div className="text-xs text-gray-400">Paid: {b.paid}</div>
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-1">{b.details}</div>
                <div className="flex gap-3 mt-1 text-xs">
                  {b.balance && <span className="text-amber-600">Balance: {b.balance}</span>}
                  {b.phone && <span className="text-gray-400">Ph: {b.phone}</span>}
                  <ExtLink href={b.url}>View booking</ExtLink>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOOKED ACTIVITIES */}
        <section>
          <h2 className="text-lg font-bold text-green-700 flex items-center gap-2 mb-3"><CheckCircle2 className="w-5 h-5" /> Booked Activities</h2>
          <div className="space-y-2">
            {BOOKED_ACTIVITIES.map(a => (
              <div key={a.label} className="bg-white border border-green-100 rounded-lg p-3 text-sm">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-bold text-green-800">{a.label}</div>
                    <div className="text-gray-500 text-xs">{a.dates} | {a.conf}</div>
                  </div>
                  <div className="font-bold shrink-0">{a.cost}</div>
                </div>
                <div className="text-xs text-gray-600 mt-1">{a.details}</div>
                <ExtLink href={a.url}><span className="text-xs">View</span></ExtLink>
              </div>
            ))}
          </div>
        </section>

        {/* PENDING HOTELS — THE BIG COMPARISON TABLES */}
        <section>
          <h2 className="text-lg font-bold text-amber-700 flex items-center gap-2 mb-1"><Hotel className="w-5 h-5" /> Hotels Still Needed — Pick & Book</h2>
          <p className="text-xs text-gray-500 mb-4">Research done. Compare options, pick one, book it. Prices as of Apr 1, 2026.</p>

          {PENDING_STAYS.map(stay => (
            <div key={stay.label} className="mb-6 bg-white border border-gray-200 rounded-lg overflow-hidden">
              {/* Stay header */}
              <div className="bg-amber-50 px-4 py-3 border-b border-amber-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900">{stay.label} — {stay.nights} nights</h3>
                    <div className="text-xs text-gray-500">{stay.dates}</div>
                  </div>
                  {stay.wifiNeeded && (
                    <span className="bg-red-100 text-red-700 text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Wifi className="w-3 h-3" /> Fast WiFi needed
                    </span>
                  )}
                </div>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-gray-600">
                  <div className="flex items-center gap-1"><Clock className="w-3 h-3 text-gray-400" /> <strong>Work days:</strong> {stay.workDays}</div>
                  <div className="flex items-center gap-1"><MapPin className="w-3 h-3 text-gray-400" /> <strong>Near:</strong> {stay.nearTo}</div>
                  <div className="col-span-full flex items-center gap-1"><BedDouble className="w-3 h-3 text-gray-400" /> <strong>Need:</strong> {stay.criteria}</div>
                </div>
              </div>

              {/* Options table */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-gray-50 text-gray-500 border-b">
                      <th className="text-left px-3 py-2 font-medium">Option</th>
                      <th className="text-left px-3 py-2 font-medium">$/night</th>
                      <th className="text-left px-3 py-2 font-medium">Total</th>
                      <th className="text-left px-3 py-2 font-medium">Beds</th>
                      <th className="text-left px-3 py-2 font-medium">WiFi</th>
                      <th className="text-left px-3 py-2 font-medium">Perks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stay.options.map((opt, i) => (
                      <tr key={i} className={`border-b last:border-0 ${opt.avoid ? 'bg-red-50 opacity-60' : opt.recommended ? 'bg-blue-50' : ''}`}>
                        <td className="px-3 py-2 font-medium max-w-[200px]">
                          <div className="flex items-center gap-1">
                            {opt.recommended && <span className="text-blue-600 text-[10px] font-bold bg-blue-100 px-1 rounded">TOP</span>}
                            {opt.avoid && <AlertTriangle className="w-3 h-3 text-red-500 shrink-0" />}
                            {opt.url ? <ExtLink href={opt.url}>{opt.name}</ExtLink> : opt.name}
                          </div>
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap">{opt.price}</td>
                        <td className="px-3 py-2 whitespace-nowrap font-medium">{opt.total}</td>
                        <td className="px-3 py-2">{opt.beds}</td>
                        <td className={`px-3 py-2 ${opt.wifiWarning ? 'text-red-600 font-bold' : ''}`}>{opt.wifi}</td>
                        <td className="px-3 py-2 text-gray-500 max-w-[200px]">{opt.perks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>

        {/* FLIGHTS */}
        <section>
          <h2 className="text-lg font-bold text-blue-700 flex items-center gap-2 mb-3"><Plane className="w-5 h-5" /> Flights — Book These (prices as of Mar 31)</h2>
          <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-gray-50 text-gray-500 border-b">
                  <th className="text-left px-3 py-2 font-medium">Who</th>
                  <th className="text-left px-3 py-2 font-medium">Route</th>
                  <th className="text-left px-3 py-2 font-medium">Date</th>
                  <th className="text-left px-3 py-2 font-medium">Best Price</th>
                  <th className="text-left px-3 py-2 font-medium">Alternatives</th>
                </tr>
              </thead>
              <tbody>
                {PENDING_FLIGHTS.map((f, i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="px-3 py-2 font-medium">{f.who}</td>
                    <td className="px-3 py-2"><ExtLink href={f.url}>{f.route}</ExtLink></td>
                    <td className="px-3 py-2">{f.date}</td>
                    <td className="px-3 py-2 font-bold text-green-700">{f.best}</td>
                    <td className="px-3 py-2 text-gray-500">{f.alt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-1">Card tip: Chase Travel portal 1.5x pts, Capital One for Alaska, Amex Plat 5x for Air Canada via Amex Travel.</p>
        </section>

        {/* CAR RENTAL */}
        <section>
          <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2 mb-3"><Car className="w-5 h-5" /> Car Rental — LAS to FCA, 21 days</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-3 text-sm">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-bold">Compact AWD SUV, one-way Las Vegas to Kalispell</div>
                <div className="text-xs text-gray-500">May 10-31, ~$1,040 estimated</div>
              </div>
              <ExtLink href="https://www.autoslash.com"><span className="text-xs">AutoSlash</span></ExtLink>
            </div>
            <div className="mt-2 text-xs text-gray-600 space-y-1">
              <p><strong>Best options:</strong> National Emerald Club (may waive drop fee), Budget BCD Y508539 / Avis AWD A359824 (AARP 30% off), Costco Travel (free extra driver).</p>
              <p><strong>Pro tip:</strong> Try 28-day quote (weekly rate may be cheaper than 21-day).</p>
              <p className="text-purple-700"><CreditCard className="w-3 h-3 inline" /> PAY WITH Chase Sapphire Reserve — primary rental insurance. Decline ALL CDW/LDW (saves $300-400).</p>
            </div>
          </div>
        </section>

        {/* OTHER PENDING */}
        <section>
          <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2 mb-3"><UtensilsCrossed className="w-5 h-5" /> Other Pending</h2>
          <div className="space-y-2">
            <div className="bg-white border border-amber-200 rounded-lg p-3 text-sm">
              <div className="font-bold text-amber-800">El Tovar Lunch — Tock opens Apr 12 at 6am MST</div>
              <div className="text-xs text-gray-600 mt-1">30-day window. Set alarm for 5:55am MST. Create <ExtLink href="https://www.exploretock.com/">Tock account</ExtLink> NOW. Lunch easier than dinner. ~$40/pp. Backup: Arizona Room (walk-in, arrive 4:30pm).</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-sm">
              <div className="font-bold">America the Beautiful Pass — $80</div>
              <div className="text-xs text-gray-600 mt-1">Buy before May 10. <ExtLink href="https://store.usgs.gov/pass/annual">USGS Store</ExtLink>. Colin&apos;s pass covers Mom + Robin as passengers. Saves $250 in nonresident fees across 6 parks!</div>
            </div>
            <div className="bg-white border border-red-100 rounded-lg p-3 text-sm">
              <div className="font-bold text-red-700">Mom&apos;s Antelope Canyon Waiver — SIGN NOW</div>
              <div className="text-xs text-gray-600 mt-1">Colin signed his. Mom still needs to sign. Check email for waiver link from Antelope Slot Canyon Tours.</div>
            </div>
          </div>
        </section>

        {/* SIGNUPS */}
        <section>
          <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2 mb-3">Do These First (before booking)</h2>
          <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-gray-50 text-gray-500 border-b">
                  <th className="text-left px-3 py-2 font-medium">Signup</th>
                  <th className="text-left px-3 py-2 font-medium">Why</th>
                  <th className="text-left px-3 py-2 font-medium">Do Before</th>
                </tr>
              </thead>
              <tbody>
                {SIGNUPS.map((s, i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="px-3 py-2 font-medium"><ExtLink href={s.url}>{s.name}</ExtLink></td>
                    <td className="px-3 py-2 text-gray-600">{s.why}</td>
                    <td className="px-3 py-2">{s.before}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center py-6 text-xs text-gray-400">
          <p>Prices researched Mar 31 - Apr 5, 2026. Check current prices before booking.</p>
          <p className="mt-1"><a href="/" className="text-blue-500">View full trip planner</a> | <a href="/mom" className="text-blue-500">Mom&apos;s view</a></p>
        </div>
      </div>
    </div>
  );
}
