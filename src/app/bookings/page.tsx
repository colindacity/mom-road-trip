'use client';

import { tripData } from '@/data/tripData';
import { format, parseISO } from 'date-fns';
import { ExternalLink, Check, Circle, AlertTriangle, Search } from 'lucide-react';

function ExtLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  if (!href) return <span className={className}>{children}</span>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`text-blue-600 hover:underline inline-flex items-center gap-0.5 ${className}`}>
      {children}<ExternalLink className="w-2.5 h-2.5 shrink-0" />
    </a>
  );
}

function StatusBadge({ status }: { status: 'booked' | 'pending' | 'action' | 'info' }) {
  if (status === 'booked') return <span className="inline-flex items-center gap-1 text-[10px] font-bold text-green-700 bg-green-100 px-1.5 py-0.5 rounded-full whitespace-nowrap"><Check className="w-3 h-3" />BOOKED</span>;
  if (status === 'pending') return <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded-full whitespace-nowrap"><Circle className="w-3 h-3" />NEED TO BOOK</span>;
  if (status === 'action') return <span className="inline-flex items-center gap-1 text-[10px] font-bold text-red-700 bg-red-100 px-1.5 py-0.5 rounded-full whitespace-nowrap"><AlertTriangle className="w-3 h-3" />ACTION NEEDED</span>;
  return <span className="text-[10px] text-gray-400">—</span>;
}

// All stays with full context
const STAYS = [
  {
    id: 'vegas',
    location: 'Las Vegas, NV',
    dates: 'Sun May 10',
    nights: 1,
    days: [1],
    dayType: 'Arrive, buffet, Strip walk',
    status: 'booked' as const,
    booking: {
      name: 'The LINQ Hotel & Casino',
      conf: 'Hotels.com #73410152077445',
      cost: '$56.63 (resort fee only — room paid via OneKeyCash)',
      paid: 'Room paid. $56.63 resort fee at check-in.',
      details: 'Deluxe Room, 2 Queen Beds, Non Smoking. 3535 Las Vegas Blvd South. Check-in 4pm, out 11am Mon.',
    },
    activities: [
      { name: 'Arrive LAS, pick up rental car', status: 'info' as const },
      { name: 'Bacchanal Buffet (Caesars Palace)', status: 'booked' as const, detail: 'OpenTable reservation. $65/pp brunch, $80 crab upgrade. Lobster claws, bisque, 250+ dishes. 90min.', url: 'https://www.opentable.com/r/bacchanal-buffet-caesars-palace-las-vegas' },
      { name: 'Bellagio Fountains + Strip Walk', status: 'info' as const },
      { name: 'Fremont Street Experience', status: 'info' as const },
    ],
    searchCriteria: null,
  },
  {
    id: 'gc',
    location: 'Grand Canyon South Rim (IN-PARK)',
    dates: 'Mon-Wed May 11-13',
    nights: 2,
    days: [2, 3],
    dayType: 'Day 2: Drive LV→GC + Mather Point + Hermit Rd sunset. Day 3: Rim Trail, El Tovar lunch, Yavapai Museum.',
    status: 'booked' as const,
    booking: {
      name: 'Maswik Lodge (Inside Park) — 20% off!',
      conf: 'Xanterra #20514347',
      cost: '$547.30 ($255.99/n × 2 + tax)',
      paid: '$273.65 deposit (Visa). Balance $273.65 at check-in. Cancel penalty after May 9.',
      details: 'Standard 2 Queen North. Inside the park — no re-entry hassle, sunrise/sunset access.',
    },
    activities: [
      { name: 'El Tovar lunch reservation', status: 'pending' as const, detail: 'Tock 30-day window opens Apr 12 at 6am MST. CREATE TOCK ACCOUNT NOW. Set alarm 5:55am.', url: 'https://www.exploretock.com/el-tovar-dining-room---grand-canyon-south-rim' },
    ],
    searchCriteria: null,
  },
  {
    id: 'page',
    location: 'Page, AZ',
    dates: 'Wed-Fri May 13-15',
    nights: 3,
    days: [4, 5, 6],
    dayType: 'Day 4: Drive GC→Page + Horseshoe Bend sunset. Day 5: Upper Antelope Canyon 10am + Lake Powell. Day 6: WORK DAY (Colin works, Mom explores).',
    status: 'pending' as const,
    booking: null,
    activities: [
      { name: 'Upper Antelope Canyon Tour', status: 'booked' as const, detail: 'Order #FMBYMK. 10:00am-11:30am Thu May 14. 2 adults. Antelope Slot Canyon Tours. MOM NEEDS TO SIGN WAIVER.', url: 'https://antelopeslotcanyon.com/' },
    ],
    searchCriteria: {
      checkIn: 'Wed May 13',
      checkOut: 'Sat May 16',
      guests: '2 adults',
      mustHave: [
        '2 bedrooms preferred, 2 queen beds OK as backup (1 work day here)',
        'Fast WiFi 300Mbps+ — May 15 is a FULL WORK DAY with video calls',
        'Central Page location (10-15min to Antelope Canyon + Horseshoe Bend)',
      ],
      niceToHave: ['Kitchen/kitchenette', 'Workspace/desk', 'Free breakfast'],
      searchLinks: [
        { label: 'Airbnb Page AZ 2BR', url: 'https://www.airbnb.com/s/Page--AZ/homes?checkin=2026-05-13&checkout=2026-05-16&adults=2&min_bedrooms=2' },
        { label: 'VRBO Page AZ', url: 'https://www.vrbo.com/search?destination=Page%2C+AZ&startDate=2026-05-13&endDate=2026-05-16&adults=2' },
        { label: 'Hotels.com Page AZ', url: 'https://www.hotels.com/Hotel-Search?destination=Page%2C+AZ&startDate=2026-05-13&endDate=2026-05-16&rooms=1&adults=2' },
        { label: 'Booking.com Page', url: 'https://www.booking.com/searchresults.html?ss=Page%2C+Arizona&checkin=2026-05-13&checkout=2026-05-16&group_adults=2&no_rooms=1' },
      ],
      wifiWarning: 'Page is rural — most hotels have mediocre WiFi. Search Airbnb for listings mentioning "fiber", "Starlink", or "fast WiFi". One duplex has 867 Mbps confirmed.',
      suggestions: [
        { name: 'Airbnb 2BR Duplex (downtown)', price: '$90-150/n ($270-450)', note: '867 Mbps fiber CONFIRMED — only verified-fast WiFi in Page. 2BR. Search Airbnb.' },
        { name: 'Hampton Inn & Suites Page', price: '$140-250/n ($420-750)', note: '#1 of 22 on TripAdvisor. 2Q suite avail. WiFi rated 8.9/10 + 24hr biz center. Free breakfast.' },
        { name: 'Home2 Suites by Hilton Page', price: '$100-140/n ($300-420)', note: 'Kitchenette, newer (2020), Hilton Honors eligible.' },
        { name: 'Country Inn & Suites Radisson', price: '$114-160/n ($340-480)', note: 'Newer property, free breakfast, biz center. Budget pick.' },
      ],
      avoidNote: null,
      budgetRange: '$270-750 for 3 nights',
    },
  },
  {
    id: 'moab',
    location: 'Moab, UT',
    dates: 'Sat-Tue May 16-19',
    nights: 4,
    days: [7, 8, 9, 10],
    dayType: 'Day 7: Half work + drive Page→Moab via Monument Valley. Day 8: WORK DAY. Day 9: Arches NP full day. Day 10: Canyonlands AM + half work PM.',
    status: 'pending' as const,
    booking: null,
    activities: [],
    searchCriteria: {
      checkIn: 'Sat May 16',
      checkOut: 'Wed May 20',
      guests: '2 adults',
      mustHave: [
        '2 BEDROOMS required (2+ work days — Colin needs a door to close for calls). 2 queens only as last resort.',
        'Fast WiFi 300Mbps+ — TWO WORK DAYS (May 17 full + May 16 & 19 half) with video calls',
        'Central Moab (5mi to Arches entrance, 32mi to Canyonlands)',
      ],
      niceToHave: ['Dedicated desk/workspace', 'Kitchen', 'Pool for Mom on work days'],
      searchLinks: [
        { label: 'Airbnb Moab 2BR', url: 'https://www.airbnb.com/s/Moab--UT/homes?checkin=2026-05-16&checkout=2026-05-20&adults=2&min_bedrooms=2' },
        { label: 'VRBO Moab 2BR', url: 'https://www.vrbo.com/search?destination=Moab%2C+UT&startDate=2026-05-16&endDate=2026-05-20&adults=2' },
        { label: 'Hotels.com Moab', url: 'https://www.hotels.com/Hotel-Search?destination=Moab%2C+UT&startDate=2026-05-16&endDate=2026-05-20&rooms=1&adults=2' },
        { label: 'Booking.com Moab', url: 'https://www.booking.com/searchresults.html?ss=Moab%2C+Utah&checkin=2026-05-16&checkout=2026-05-20&group_adults=2&no_rooms=1' },
      ],
      wifiWarning: 'Moab WiFi is bad at most hotels. Emery Telcom fiber exists in town. Search Airbnb/VRBO for "fiber" or "Starlink". Ask hosts for speed tests.',
      suggestions: [
        { name: 'My Place Hotel Moab', price: '$200-280/n ($800-1,120)', note: '100+ Mbps CONFIRMED. 2 queens, rolling desk, full kitchen, biz center. Best work hotel in Moab.' },
        { name: 'Element Moab (Marriott)', price: '$250-350/n ($1,000-1,400)', note: '2Q 418sqft, kitchenette, desk, free breakfast, pool. WiFi unverified — buy Marriott enhanced tier.' },
        { name: 'VRBO #431015 "Arches Retreat"', price: '$250-400/n ($1,150-1,850)', note: '3BR townhome downtown, FIBER CONFIRMED. Gold standard for work + separate rooms.' },
      ],
      avoidNote: '⚠️ DO NOT book Hyatt Place Moab — documented 3-5 Mbps WiFi per multiple 2024-25 reviews. Unusable for video calls.',
      budgetRange: '$800-1,850 for 4 nights (May = PEAK season, avg $309/n)',
    },
  },
  {
    id: 'slc',
    location: 'Salt Lake City, UT',
    dates: 'Wed-Sun May 20-24',
    nights: 4,
    days: [11, 12, 13, 14],
    dayType: 'Day 11: Half work + drive Moab→SLC + Temple Square. Day 12: WORK DAY. Day 13: WORK DAY. Day 14: SLC explore (Natural History Museum, Antelope Island).',
    status: 'booked' as const,
    booking: {
      name: 'Convention Ctr 2BR Airbnb — Pool/HotTub/Gym/Theatre',
      conf: 'Airbnb HMN2P4MBR9',
      cost: '$1,256.86 ($272/n × 4 + $168.86 taxes)',
      paid: '$544 paid Apr 1 (Visa 6386). $712.86 charged May 5.',
      details: '241 W 200 S, SLC, UT 84101. Hosted by GrandRoad. 2BR, rooftop pool/hot tub, keypad check-in 4pm, checkout 10am. Free cancel before Apr 20. Host: 801-201-5734.',
    },
    activities: [],
    searchCriteria: null,
  },
  {
    id: 'driggs',
    location: 'Driggs, ID (Teton Valley)',
    dates: 'Sun-Tue May 24-26',
    nights: 3,
    days: [15, 16, 17],
    dayType: 'Day 15: Half work + drive SLC→Driggs. Day 16: WORK DAY (Memorial Day Mon May 25 — Mom rests). Day 17: Grand Teton full day (Oxbow Bend, Mormon Row, Jackson Lake).',
    status: 'pending' as const,
    booking: null,
    activities: [],
    searchCriteria: {
      checkIn: 'Sun May 24',
      checkOut: 'Wed May 27',
      guests: '2 adults',
      mustHave: [
        '2 bedrooms preferred, 2 queen beds OK as backup (1.5 work days)',
        'Fast WiFi 300Mbps+ — Memorial Day Mon is a FULL WORK DAY',
        'Driggs / Victor / Tetonia area (west side of Tetons)',
      ],
      niceToHave: ['Teton mountain views', 'Kitchen', 'Workspace/desk', 'Pool/spa for Mom on work day'],
      searchLinks: [
        { label: 'Airbnb Driggs 2BR', url: 'https://www.airbnb.com/s/Driggs--ID/homes?checkin=2026-05-24&checkout=2026-05-27&adults=2&min_bedrooms=2' },
        { label: 'VRBO Driggs/Victor', url: 'https://www.vrbo.com/search?destination=Driggs%2C+ID&startDate=2026-05-24&endDate=2026-05-27&adults=2' },
        { label: 'Booking.com Driggs', url: 'https://www.booking.com/searchresults.html?ss=Driggs%2C+Idaho&checkin=2026-05-24&checkout=2026-05-27&group_adults=2&no_rooms=1' },
      ],
      wifiWarning: 'Silver Star Communications provides fiber (up to 1Gbps) throughout Teton Valley. Ask hosts if they have Silver Star fiber. Many cabins do.',
      suggestions: [
        { name: 'Bronze Buffalo Ranch 2BR Suite (Victor)', price: '$400-600/n ($1,200-1,800)', note: 'Luxury: 1,185sqft, true 2BR, gourmet kitchen, fireplace, Teton view balcony, spa/pool. Fiber WiFi. 11mi S of Driggs.' },
        { name: 'Teton Valley Cabins (Driggs)', price: '$150-200/n ($450-600)', note: 'FIBER CONFIRMED. 2 queens but SAME ROOM (no bedroom separation). Best value. 1mi E of downtown.' },
        { name: 'Saddlehorn Cabin VRBO #1066147', price: '$300-400/n ($900-1,200)', note: 'True 2BR, 1,353sqft, Teton views. VERIFY WiFi speed with host.' },
      ],
      avoidNote: null,
      budgetRange: '$450-1,800 for 3 nights (Memorial Day = prices up)',
    },
  },
  {
    id: 'yellowstone',
    location: 'West Yellowstone, MT',
    dates: 'Wed-Thu May 27-28',
    nights: 2,
    days: [18, 19],
    dayType: 'Day 18: Drive Driggs→Yellowstone + Old Faithful + Grand Prismatic. Day 19: Yellowstone full day (Canyon, Mammoth, Tower Fall, Lamar Valley).',
    status: 'pending' as const,
    booking: null,
    activities: [],
    searchCriteria: {
      checkIn: 'Wed May 27',
      checkOut: 'Fri May 29',
      guests: '2 adults',
      mustHave: [
        '2 queen beds (no bunk beds — Mom is 80)',
        'Walking distance or short drive to West Yellowstone park entrance',
      ],
      niceToHave: ['Indoor pool/hot tub (after long park days)', 'Free breakfast', 'WiFi (nice to have, not critical — no work days)'],
      searchLinks: [
        { label: 'Hotels.com West Yellowstone', url: 'https://www.hotels.com/Hotel-Search?destination=West+Yellowstone%2C+MT&startDate=2026-05-27&endDate=2026-05-29&rooms=1&adults=2' },
        { label: 'Booking.com W.Yellowstone', url: 'https://www.booking.com/searchresults.html?ss=West+Yellowstone%2C+Montana&checkin=2026-05-27&checkout=2026-05-29&group_adults=2&no_rooms=1' },
        { label: 'VRBO W.Yellowstone cabin', url: 'https://www.vrbo.com/search?destination=West+Yellowstone%2C+MT&startDate=2026-05-27&endDate=2026-05-29&adults=2' },
      ],
      wifiWarning: null,
      suggestions: [
        { name: 'Gray Wolf Inn & Suites', price: '$200-250/n ($400-500)', note: 'JUST RENOVATED ($1.4M, reopened May 21). 2 queens, 2 blocks to entrance, pool/hot tub, breakfast. AAA 3-Diamond.' },
        { name: 'Kelly Inn West Yellowstone', price: '$200-280/n ($400-560)', note: 'Biggest pool in town. 2 queens (Grizzly building). Free breakfast. 11min walk to entrance. Proven reliable.' },
        { name: 'Stage Coach Inn', price: '$180-220/n ($360-440)', note: 'Budget. Center of town. 2 queens available. Near shops/restaurants.' },
      ],
      avoidNote: 'Skip Explorer Cabins — 2nd bedroom has bunk beds (not good for Mom). Also adds $20 amenity + $2 TBID fees/night.',
      budgetRange: '$360-560 for 2 nights (Memorial Day week = peak)',
    },
  },
  {
    id: 'glacier',
    location: 'Columbia Falls / West Glacier, MT',
    dates: 'Fri-Sun May 29-31',
    nights: 2,
    days: [20, 21, 22],
    dayType: 'Day 20: Drive Yellowstone→Glacier + Robin arrives FCA evening. Day 21: Glacier all three — Lake McDonald, Trail of Cedars, hike. Day 22: Morning lake, afternoon flights home.',
    status: 'booked' as const,
    booking: {
      name: 'Apgar Village Lodge & Cabins',
      conf: '#3870048',
      cost: '$392.26 ($181.60/n × 2 + tax)',
      paid: '$189.22 paid. Balance $203.04 at check-in + Preservation Fee + $1/n donation.',
      details: 'Cabin 3 Queen, 2 Room. Glacier Park Collection. 3 guests (Colin + Mom + Robin). Contact: 1-844-868-7474.',
    },
    activities: [],
    searchCriteria: null,
  },
];

const OTHER_ITEMS = [
  { category: 'Car', name: 'Rental SUV LAS→FCA (21 days)', status: 'pending' as const, detail: 'Compact AWD SUV one-way. National Emerald Club (may waive drop fee), Budget AARP 30% off, Costco Travel, AutoSlash. ~$1,040. PAY WITH Chase Sapphire Reserve = primary insurance. Decline CDW/LDW.', url: 'https://www.autoslash.com', dates: 'May 10-31' },
  { category: 'Pass', name: 'America the Beautiful Pass ($80)', status: 'pending' as const, detail: "Colin's pass covers Mom + Robin as passengers. Saves $250 in park fees across 6 parks!", url: 'https://store.usgs.gov/pass/annual', dates: 'Before May 10' },
  { category: 'Action', name: "Mom's Antelope Canyon Waiver", status: 'action' as const, detail: 'Colin signed his. MOM STILL NEEDS TO SIGN. Check email for waiver link from Antelope Slot Canyon Tours.', url: '', dates: 'ASAP' },
];

const FLIGHTS = [
  { who: 'Colin', route: 'SEA → LAS', date: 'Sun May 10', status: 'pending' as const, best: '$81 Alaska nonstop 2:45pm', alts: '$67 Frontier (no bags), $89 Delta nonstop', url: 'https://www.google.com/travel/flights', cardTip: 'Capital One → Alaska MP' },
  { who: 'Mom', route: 'YYZ → LAS', date: 'Sun May 10', status: 'pending' as const, best: '$129 Air Canada Rouge nonstop 8:35pm', alts: '$228 Porter (no middle seats, comfiest for Mom)', url: 'https://www.google.com/travel/flights', cardTip: 'Amex Plat 5x via Amex Travel' },
  { who: 'Robin', route: 'SEA → FCA', date: 'Fri May 29', status: 'pending' as const, best: '$127 Alaska 1:13pm nonstop (half day off)', alts: '$152 Alaska 9:35pm nonstop (after work)', url: 'https://www.google.com/travel/flights', cardTip: 'Capital One or Chase portal' },
  { who: 'Colin+Robin', route: 'FCA → SEA', date: 'Sun May 31', status: 'pending' as const, best: '$152/ea Alaska 11:33am nonstop ($303 total)', alts: '$167/ea 6:15am flight', url: 'https://www.google.com/travel/flights', cardTip: 'Capital One → Alaska MP' },
  { who: 'Mom', route: 'FCA → YYZ', date: 'Sun May 31', status: 'pending' as const, best: '$286 United via DEN 6:20am', alts: '$289 Alaska via SEA, $289 United via ORD', url: 'https://www.google.com/travel/flights', cardTip: 'Chase portal 1.5x' },
];

const SIGNUPS = [
  { name: 'AARP ($12/yr)', why: '30-35% off car rental, 10% hotel discounts, instant Hilton Silver', before: 'Before hotels & car', url: 'https://www.aarp.org/membership/', status: 'pending' as const },
  { name: 'Hilton Honors (free)', why: 'Member rates at Hampton Inn + Hilton properties. AARP = Silver tier', before: 'Before Page hotel', url: 'https://www.hilton.com/en/hilton-honors/', status: 'pending' as const },
  { name: 'National Emerald Club (free)', why: 'May waive one-way drop fee, skip counter, choose your car', before: 'Before car rental', url: 'https://www.nationalcar.com/en/loyalty/program.html', status: 'pending' as const },
  { name: 'Tock account (free)', why: 'El Tovar lunch 30-day window opens Apr 12 6am MST', before: 'BEFORE Apr 12', url: 'https://www.exploretock.com/', status: 'pending' as const },
  { name: 'Google Flights tracking', why: 'Track all 6 routes for price drops. Prices volatile.', before: 'ASAP', url: 'https://www.google.com/travel/flights', status: 'pending' as const },
];

export default function BookingsPage() {
  const bookedCount = STAYS.filter(s => s.status === 'booked').length + 2; // +2 for Antelope + Bacchanal
  const pendingStays = STAYS.filter(s => s.status === 'pending').length;
  const pendingFlights = FLIGHTS.filter(f => f.status === 'pending').length;

  return (
    <div className="min-h-screen bg-white text-gray-900 print:text-[11px]">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-5 print:py-2 print:bg-blue-700">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xl font-bold">Trip Booking Briefing</h1>
          <p className="text-blue-100 text-sm">Las Vegas → Glacier | May 10-31, 2026 | Colin + Mom + Robin (joins Day 20)</p>
          <p className="text-blue-200 text-xs mt-1">{bookedCount} booked, {pendingStays} hotels + {pendingFlights} flights + car still needed. Prices as of Apr 1.</p>
        </div>
      </div>

      {/* Sticky nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 print:hidden">
        <div className="max-w-6xl mx-auto px-4 flex items-center gap-1 overflow-x-auto py-1.5 text-xs scrollbar-hide">
          <a href="#stays" className="shrink-0 px-2.5 py-1 rounded-full bg-gray-100 hover:bg-gray-200 font-medium text-gray-700 transition-colors">
            Hotels <span className="text-amber-600 font-bold">{pendingStays}</span>
          </a>
          <a href="#flights" className="shrink-0 px-2.5 py-1 rounded-full bg-gray-100 hover:bg-gray-200 font-medium text-gray-700 transition-colors">
            Flights <span className="text-amber-600 font-bold">{pendingFlights}</span>
          </a>
          <a href="#car" className="shrink-0 px-2.5 py-1 rounded-full bg-gray-100 hover:bg-gray-200 font-medium text-gray-700 transition-colors">
            Car + Passes
          </a>
          <a href="#signups" className="shrink-0 px-2.5 py-1 rounded-full bg-gray-100 hover:bg-gray-200 font-medium text-gray-700 transition-colors">
            Signups
          </a>
          <span className="shrink-0 text-gray-300 mx-1">|</span>
          {STAYS.map(s => (
            <a key={s.id} href={`#${s.id}`} className={`shrink-0 px-2 py-1 rounded-full text-[10px] font-medium transition-colors ${s.status === 'booked' ? 'bg-green-50 text-green-700 hover:bg-green-100' : 'bg-amber-50 text-amber-700 hover:bg-amber-100'}`}>
              {s.location.split(',')[0].split('(')[0].trim()}
            </a>
          ))}
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-4 space-y-6">

        {/* ========== STAYS: DAY BY DAY ========== */}
        <section id="stays">
          <h2 className="text-base font-bold text-gray-800 mb-3 border-b pb-1">Accommodations — Stay by Stay</h2>
          {STAYS.map(stay => (
            <div key={stay.id} id={stay.id} className={`mb-4 border rounded-lg overflow-hidden scroll-mt-16 ${stay.status === 'booked' ? 'border-green-200' : 'border-amber-200'}`}>
              {/* Stay header */}
              <div className={`px-3 py-2 flex items-center justify-between ${stay.status === 'booked' ? 'bg-green-50' : 'bg-amber-50'}`}>
                <div>
                  <div className="font-bold text-sm">{stay.location}</div>
                  <div className="text-xs text-gray-500">{stay.dates} ({stay.nights}n)</div>
                </div>
                <StatusBadge status={stay.status} />
              </div>

              <div className="px-3 py-2 text-xs space-y-2">
                {/* What happens these days */}
                <div className="text-gray-600"><strong>Schedule:</strong> {stay.dayType}</div>

                {/* BOOKED: show confirmation */}
                {stay.booking && (
                  <div className="bg-green-50 border border-green-100 rounded p-2">
                    <div className="font-bold text-green-800">{stay.booking.name}</div>
                    <div className="text-gray-600 mt-0.5">{stay.booking.details}</div>
                    <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-1 text-gray-500">
                      <span><strong>Conf:</strong> {stay.booking.conf}</span>
                      <span><strong>Cost:</strong> {stay.booking.cost}</span>
                    </div>
                    <div className="text-gray-500 mt-0.5">{stay.booking.paid}</div>
                  </div>
                )}

                {/* Activities with statuses */}
                {stay.activities.length > 0 && (
                  <div>
                    {stay.activities.map((a, i) => (
                      <div key={i} className="flex items-start gap-2 py-0.5">
                        <StatusBadge status={a.status} />
                        <div>
                          <span className="font-medium">{a.name}</span>
                          {a.detail && <span className="text-gray-500 ml-1">— {a.detail}</span>}
                          {a.url && <> <ExtLink href={a.url} className="text-[10px]">Link</ExtLink></>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* PENDING: search criteria for Robin */}
                {stay.searchCriteria && (
                  <div className="border border-amber-200 bg-amber-50/50 rounded p-2 space-y-2">
                    <div className="font-bold text-amber-800 flex items-center gap-1"><Search className="w-3 h-3" /> Robin: Find & Book This Stay</div>
                    <div className="text-gray-600">
                      <strong>Check-in:</strong> {stay.searchCriteria.checkIn} | <strong>Check-out:</strong> {stay.searchCriteria.checkOut} | <strong>Guests:</strong> {stay.searchCriteria.guests}
                    </div>

                    <div>
                      <div className="font-semibold text-gray-700">Must Have:</div>
                      <ul className="list-disc list-inside text-gray-600 ml-1">
                        {stay.searchCriteria.mustHave.map((m, i) => <li key={i}>{m}</li>)}
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700">Nice to Have:</div>
                      <ul className="list-disc list-inside text-gray-500 ml-1">
                        {stay.searchCriteria.niceToHave.map((m, i) => <li key={i}>{m}</li>)}
                      </ul>
                    </div>

                    {stay.searchCriteria.wifiWarning && (
                      <div className="text-amber-700 bg-amber-100 rounded px-2 py-1 text-[11px]">
                        <strong>WiFi tip:</strong> {stay.searchCriteria.wifiWarning}
                      </div>
                    )}
                    {stay.searchCriteria.avoidNote && (
                      <div className="text-red-700 bg-red-50 rounded px-2 py-1 text-[11px]">
                        {stay.searchCriteria.avoidNote}
                      </div>
                    )}

                    {/* Search links */}
                    <div className="flex flex-wrap gap-1.5">
                      {stay.searchCriteria.searchLinks.map((l, i) => (
                        <ExtLink key={i} href={l.url} className="text-[10px] bg-blue-50 border border-blue-200 rounded px-1.5 py-0.5">{l.label}</ExtLink>
                      ))}
                    </div>

                    {/* Suggestions from research */}
                    <div>
                      <div className="font-semibold text-gray-700 mt-1">Colin&apos;s Research (suggestions, not final picks):</div>
                      <div className="text-gray-400 text-[10px] mb-1">These are starting points — feel free to find better options.</div>
                      <table className="w-full text-[11px] border-collapse">
                        <thead><tr className="border-b border-gray-200 text-gray-500">
                          <th className="text-left py-0.5 pr-2 font-medium">Option</th>
                          <th className="text-left py-0.5 pr-2 font-medium">Price</th>
                          <th className="text-left py-0.5 font-medium">Notes</th>
                        </tr></thead>
                        <tbody>
                          {stay.searchCriteria.suggestions.map((s, i) => (
                            <tr key={i} className="border-b border-gray-100">
                              <td className="py-1 pr-2 font-medium whitespace-nowrap">{s.name}</td>
                              <td className="py-1 pr-2 whitespace-nowrap">{s.price}</td>
                              <td className="py-1 text-gray-500">{s.note}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="text-gray-400 text-[10px]">Budget range: {stay.searchCriteria.budgetRange}</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* ========== FLIGHTS ========== */}
        <section>
          <h2 id="flights" className="text-base font-bold text-gray-800 mb-2 border-b pb-1 scroll-mt-16">Flights — 5 to Book</h2>
          <p className="text-xs text-gray-500 mb-2">Prices as of Mar 31. Search on <ExtLink href="https://www.google.com/travel/flights">Google Flights</ExtLink>. Set up price tracking.</p>
          <table className="w-full text-xs border-collapse">
            <thead><tr className="border-b-2 border-gray-200 text-gray-500">
              <th className="text-left py-1 pr-2 font-medium">Who</th>
              <th className="text-left py-1 pr-2 font-medium">Route</th>
              <th className="text-left py-1 pr-2 font-medium">Date</th>
              <th className="text-left py-1 pr-2 font-medium">Best Price Found</th>
              <th className="text-left py-1 pr-2 font-medium">Alternatives</th>
              <th className="text-left py-1 pr-2 font-medium">Card Tip</th>
              <th className="text-right py-1 font-medium">Status</th>
            </tr></thead>
            <tbody>
              {FLIGHTS.map((f, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-1.5 pr-2 font-medium">{f.who}</td>
                  <td className="py-1.5 pr-2"><ExtLink href={f.url}>{f.route}</ExtLink></td>
                  <td className="py-1.5 pr-2 whitespace-nowrap">{f.date}</td>
                  <td className="py-1.5 pr-2 font-medium text-green-700">{f.best}</td>
                  <td className="py-1.5 pr-2 text-gray-500">{f.alts}</td>
                  <td className="py-1.5 pr-2 text-purple-600 text-[10px]">{f.cardTip}</td>
                  <td className="py-1.5 text-right"><StatusBadge status={f.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ========== OTHER ITEMS ========== */}
        <section>
          <h2 id="car" className="text-base font-bold text-gray-800 mb-2 border-b pb-1 scroll-mt-16">Car, Passes & Actions</h2>
          <table className="w-full text-xs border-collapse">
            <thead><tr className="border-b-2 border-gray-200 text-gray-500">
              <th className="text-left py-1 pr-2 font-medium">Category</th>
              <th className="text-left py-1 pr-2 font-medium">Item</th>
              <th className="text-left py-1 pr-2 font-medium">When</th>
              <th className="text-left py-1 pr-2 font-medium">Details</th>
              <th className="text-right py-1 font-medium">Status</th>
            </tr></thead>
            <tbody>
              {OTHER_ITEMS.map((item, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-1.5 pr-2 text-gray-400">{item.category}</td>
                  <td className="py-1.5 pr-2 font-medium">{item.url ? <ExtLink href={item.url}>{item.name}</ExtLink> : item.name}</td>
                  <td className="py-1.5 pr-2 whitespace-nowrap">{item.dates}</td>
                  <td className="py-1.5 pr-2 text-gray-600">{item.detail}</td>
                  <td className="py-1.5 text-right"><StatusBadge status={item.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ========== SIGNUPS ========== */}
        <section>
          <h2 id="signups" className="text-base font-bold text-gray-800 mb-2 border-b pb-1 scroll-mt-16">Signups — Do Before Booking</h2>
          <table className="w-full text-xs border-collapse">
            <thead><tr className="border-b-2 border-gray-200 text-gray-500">
              <th className="text-left py-1 pr-2 font-medium">Signup</th>
              <th className="text-left py-1 pr-2 font-medium">Why</th>
              <th className="text-left py-1 pr-2 font-medium">Do Before</th>
              <th className="text-right py-1 font-medium">Status</th>
            </tr></thead>
            <tbody>
              {SIGNUPS.map((s, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-1.5 pr-2 font-medium"><ExtLink href={s.url}>{s.name}</ExtLink></td>
                  <td className="py-1.5 pr-2 text-gray-600">{s.why}</td>
                  <td className="py-1.5 pr-2 whitespace-nowrap">{s.before}</td>
                  <td className="py-1.5 text-right"><StatusBadge status={s.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Footer */}
        <div className="text-center py-4 text-xs text-gray-400 border-t print:hidden">
          <a href="/" className="text-blue-500 mr-3">Full trip planner</a>
          <a href="/mom" className="text-blue-500">Mom&apos;s view</a>
        </div>
      </div>
    </div>
  );
}
