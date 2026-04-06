'use client';

import { tripData } from '@/data/tripData';
import { format, parseISO } from 'date-fns';
import { ExternalLink, Check, Circle, AlertTriangle, Search, ChevronDown, ChevronRight, Save, Car, Plane, MapPin, Clock, Thermometer, Edit3, StickyNote } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';

// ─── Helpers ───
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
  return <span className="text-[10px] text-gray-400">-</span>;
}

function Accordion({ title, defaultOpen = false, badge, children, id }: { title: React.ReactNode; defaultOpen?: boolean; badge?: React.ReactNode; children: React.ReactNode; id?: string }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div id={id} className="scroll-mt-14">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center gap-1.5 text-left group">
        {open ? <ChevronDown className="w-3.5 h-3.5 text-gray-400 shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />}
        <span className="flex-1 min-w-0">{title}</span>
        {badge}
      </button>
      {open && <div className="mt-1">{children}</div>}
    </div>
  );
}

// ─── Inline note editor ───
function InlineNote({ sectionId, notes, onSave }: { sectionId: string; notes: Record<string, { text: string; updatedAt: string; updatedBy: string }>; onSave: (id: string, text: string) => void }) {
  const existing = notes[sectionId];
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(existing?.text || '');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => { setText(existing?.text || ''); }, [existing?.text]);

  useEffect(() => {
    if (editing && textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [editing]);

  const save = () => {
    onSave(sectionId, text);
    setEditing(false);
  };

  if (!editing && !existing?.text) {
    return (
      <button onClick={() => setEditing(true)} className="flex items-center gap-1 text-[10px] text-gray-400 hover:text-blue-500 transition-colors mt-1 py-0.5">
        <StickyNote className="w-3 h-3" /> Add notes...
      </button>
    );
  }

  if (!editing) {
    return (
      <div className="mt-1.5 group relative">
        <div className="bg-yellow-50 border border-yellow-200/60 rounded px-2 py-1.5 text-xs text-gray-700 whitespace-pre-wrap cursor-pointer hover:border-yellow-300 transition-colors" onClick={() => setEditing(true)}>
          {existing.text}
          <div className="text-[9px] text-gray-400 mt-1">{existing.updatedBy} &middot; {format(parseISO(existing.updatedAt), 'MMM d h:mma')}</div>
        </div>
        <button onClick={() => setEditing(true)} className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity p-0.5">
          <Edit3 className="w-3 h-3 text-gray-400" />
        </button>
      </div>
    );
  }

  return (
    <div className="mt-1.5">
      <textarea
        ref={textareaRef}
        value={text}
        onChange={e => { setText(e.target.value); e.target.style.height = 'auto'; e.target.style.height = e.target.scrollHeight + 'px'; }}
        onKeyDown={e => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) save(); if (e.key === 'Escape') { setText(existing?.text || ''); setEditing(false); } }}
        placeholder="Add notes, links, research... (Cmd+Enter to save, Esc to cancel)"
        className="w-full bg-yellow-50 border border-yellow-300 rounded px-2 py-1.5 text-xs text-gray-700 resize-none focus:outline-none focus:ring-1 focus:ring-yellow-400 min-h-[48px]"
        rows={2}
      />
      <div className="flex items-center gap-2 mt-1">
        <button onClick={save} className="flex items-center gap-1 text-[10px] font-medium text-green-700 bg-green-100 hover:bg-green-200 px-2 py-0.5 rounded transition-colors">
          <Save className="w-3 h-3" /> Save
        </button>
        <button onClick={() => { setText(existing?.text || ''); setEditing(false); }} className="text-[10px] text-gray-400 hover:text-gray-600 transition-colors">Cancel</button>
        <span className="text-[9px] text-gray-400 ml-auto">Cmd+Enter to save</span>
      </div>
    </div>
  );
}

// ─── Data ───
const STAYS = [
  {
    id: 'vegas', location: 'Las Vegas, NV', dates: 'Sun May 10', nights: 1, days: [1],
    dayType: 'Arrive, buffet, Strip walk',
    status: 'booked' as const,
    booking: { name: 'The LINQ Hotel & Casino', conf: 'Hotels.com #73410152077445', cost: '$56.63 (resort fee only — room paid via OneKeyCash)', paid: 'Room paid. $56.63 resort fee at check-in.', details: 'Deluxe Room, 2 Queen Beds, Non Smoking. 3535 Las Vegas Blvd South. Check-in 4pm, out 11am Mon.' },
    activities: [
      { name: 'Arrive LAS, pick up rental car', status: 'info' as const, detail: '', url: '' },
      { name: 'Bacchanal Buffet (Caesars Palace)', status: 'booked' as const, detail: 'OpenTable reservation. $65/pp brunch, $80 crab upgrade. 250+ dishes. 90min.', url: 'https://www.opentable.com/r/bacchanal-buffet-caesars-palace-las-vegas' },
      { name: 'Bellagio Fountains + Strip Walk', status: 'info' as const, detail: '', url: '' },
      { name: 'Fremont Street Experience', status: 'info' as const, detail: '', url: '' },
    ],
    searchCriteria: null,
  },
  {
    id: 'gc', location: 'Grand Canyon South Rim (IN-PARK)', dates: 'Mon-Wed May 11-13', nights: 2, days: [2, 3],
    dayType: 'Day 2: Drive LV→GC + Mather Point + Hermit Rd sunset. Day 3: Rim Trail, El Tovar lunch, Yavapai Museum.',
    status: 'booked' as const,
    booking: { name: 'Maswik Lodge (Inside Park) — 20% off!', conf: 'Xanterra #20514347', cost: '$547.30 ($255.99/n × 2 + tax)', paid: '$273.65 deposit (Visa). Balance $273.65 at check-in. Cancel penalty after May 9.', details: 'Standard 2 Queen North. Inside the park — no re-entry hassle, sunrise/sunset access.' },
    activities: [
      { name: 'El Tovar lunch reservation', status: 'pending' as const, detail: 'Tock 30-day window opens Apr 12 at 6am MST. CREATE TOCK ACCOUNT NOW.', url: 'https://www.exploretock.com/el-tovar-dining-room---grand-canyon-south-rim' },
    ],
    searchCriteria: null,
  },
  {
    id: 'page', location: 'Page, AZ', dates: 'Wed-Fri May 13-15', nights: 3, days: [4, 5, 6],
    dayType: 'Day 4: Drive GC→Page + Horseshoe Bend sunset. Day 5: Upper Antelope Canyon 10am + Lake Powell. Day 6: WORK DAY.',
    status: 'pending' as const, booking: null,
    activities: [
      { name: 'Upper Antelope Canyon Tour', status: 'booked' as const, detail: 'Order #FMBYMK. 10am-11:30am Thu May 14. 2 adults. MOM NEEDS TO SIGN WAIVER.', url: 'https://antelopeslotcanyon.com/' },
    ],
    searchCriteria: {
      checkIn: 'Wed May 13', checkOut: 'Sat May 16', guests: '2 adults',
      mustHave: ['2 bedrooms preferred, 2 queen beds OK as backup (1 work day here)', 'Fast WiFi 300Mbps+ — May 15 is a FULL WORK DAY with video calls', 'Central Page location (10-15min to Antelope Canyon + Horseshoe Bend)'],
      niceToHave: ['Kitchen/kitchenette', 'Workspace/desk', 'Free breakfast'],
      searchLinks: [
        { label: 'Airbnb Page AZ 2BR', url: 'https://www.airbnb.com/s/Page--AZ/homes?checkin=2026-05-13&checkout=2026-05-16&adults=2&min_bedrooms=2' },
        { label: 'VRBO Page AZ', url: 'https://www.vrbo.com/search?destination=Page%2C+AZ&startDate=2026-05-13&endDate=2026-05-16&adults=2' },
        { label: 'Hotels.com Page AZ', url: 'https://www.hotels.com/Hotel-Search?destination=Page%2C+AZ&startDate=2026-05-13&endDate=2026-05-16&rooms=1&adults=2' },
        { label: 'Booking.com Page', url: 'https://www.booking.com/searchresults.html?ss=Page%2C+Arizona&checkin=2026-05-13&checkout=2026-05-16&group_adults=2&no_rooms=1' },
      ],
      wifiWarning: 'Page is rural — most hotels have mediocre WiFi. Search Airbnb for "fiber" or "Starlink".',
      suggestions: [
        { name: 'Airbnb 2BR Duplex (downtown)', price: '$90-150/n', note: '867 Mbps fiber CONFIRMED' },
        { name: 'Hampton Inn & Suites Page', price: '$140-250/n', note: '#1 TripAdvisor. WiFi 8.9/10. Free breakfast.' },
        { name: 'Home2 Suites by Hilton Page', price: '$100-140/n', note: 'Kitchenette, newer (2020), Hilton Honors.' },
        { name: 'Country Inn & Suites Radisson', price: '$114-160/n', note: 'Newer property, free breakfast.' },
      ],
      avoidNote: null, budgetRange: '$270-750 for 3 nights',
    },
  },
  {
    id: 'moab', location: 'Moab, UT', dates: 'Sat-Tue May 16-19', nights: 4, days: [7, 8, 9, 10],
    dayType: 'Day 7: Half work + drive Page→Moab via Monument Valley. Day 8: WORK DAY. Day 9: Arches full day. Day 10: Canyonlands AM + half work PM.',
    status: 'pending' as const, booking: null, activities: [],
    searchCriteria: {
      checkIn: 'Sat May 16', checkOut: 'Wed May 20', guests: '2 adults',
      mustHave: ['2 BEDROOMS required (2+ work days — Colin needs door for calls)', 'Fast WiFi 300Mbps+ — TWO WORK DAYS with video calls', 'Central Moab (5mi to Arches, 32mi to Canyonlands)'],
      niceToHave: ['Dedicated desk/workspace', 'Kitchen', 'Pool for Mom on work days'],
      searchLinks: [
        { label: 'Airbnb Moab 2BR', url: 'https://www.airbnb.com/s/Moab--UT/homes?checkin=2026-05-16&checkout=2026-05-20&adults=2&min_bedrooms=2' },
        { label: 'VRBO Moab 2BR', url: 'https://www.vrbo.com/search?destination=Moab%2C+UT&startDate=2026-05-16&endDate=2026-05-20&adults=2' },
        { label: 'Hotels.com Moab', url: 'https://www.hotels.com/Hotel-Search?destination=Moab%2C+UT&startDate=2026-05-16&endDate=2026-05-20&rooms=1&adults=2' },
        { label: 'Booking.com Moab', url: 'https://www.booking.com/searchresults.html?ss=Moab%2C+Utah&checkin=2026-05-16&checkout=2026-05-20&group_adults=2&no_rooms=1' },
      ],
      wifiWarning: 'Moab WiFi is bad at most hotels. Search Airbnb/VRBO for "fiber" or "Starlink".',
      suggestions: [
        { name: 'My Place Hotel Moab', price: '$200-280/n', note: '100+ Mbps CONFIRMED. 2Q, kitchen, biz center.' },
        { name: 'Element Moab (Marriott)', price: '$250-350/n', note: '2Q kitchenette, desk, free breakfast, pool.' },
        { name: 'VRBO "Arches Retreat"', price: '$250-400/n', note: '3BR townhome, FIBER CONFIRMED.' },
      ],
      avoidNote: 'DO NOT book Hyatt Place Moab — documented 3-5 Mbps WiFi.', budgetRange: '$800-1,850 for 4 nights',
    },
  },
  {
    id: 'slc', location: 'Salt Lake City, UT', dates: 'Wed-Sun May 20-24', nights: 4, days: [11, 12, 13, 14],
    dayType: 'Day 11: Half work + drive Moab→SLC. Day 12-13: WORK DAYS. Day 14: SLC explore (museum, Antelope Island).',
    status: 'booked' as const,
    booking: { name: 'Convention Ctr 2BR Airbnb — Pool/HotTub/Gym', conf: 'Airbnb HMN2P4MBR9', cost: '$1,256.86 ($272/n × 4 + $168.86 taxes)', paid: '$544 paid Apr 1. $712.86 charged May 5.', details: '241 W 200 S, SLC. 2BR, rooftop pool/hot tub, keypad check-in 4pm, checkout 10am. Host: 801-201-5734.' },
    activities: [], searchCriteria: null,
  },
  {
    id: 'driggs', location: 'Driggs, ID (Teton Valley)', dates: 'Sun-Tue May 24-26', nights: 3, days: [15, 16, 17],
    dayType: 'Day 15: Half work + drive SLC→Driggs. Day 16: WORK DAY (Memorial Day). Day 17: Grand Teton full day.',
    status: 'pending' as const, booking: null, activities: [],
    searchCriteria: {
      checkIn: 'Sun May 24', checkOut: 'Wed May 27', guests: '2 adults',
      mustHave: ['2 bedrooms preferred, 2 queen beds OK (1.5 work days)', 'Fast WiFi 300Mbps+ — Memorial Day is a FULL WORK DAY', 'Driggs / Victor / Tetonia area'],
      niceToHave: ['Teton mountain views', 'Kitchen', 'Workspace/desk', 'Pool/spa for Mom'],
      searchLinks: [
        { label: 'Airbnb Driggs 2BR', url: 'https://www.airbnb.com/s/Driggs--ID/homes?checkin=2026-05-24&checkout=2026-05-27&adults=2&min_bedrooms=2' },
        { label: 'VRBO Driggs/Victor', url: 'https://www.vrbo.com/search?destination=Driggs%2C+ID&startDate=2026-05-24&endDate=2026-05-27&adults=2' },
        { label: 'Booking.com Driggs', url: 'https://www.booking.com/searchresults.html?ss=Driggs%2C+Idaho&checkin=2026-05-24&checkout=2026-05-27&group_adults=2&no_rooms=1' },
      ],
      wifiWarning: 'Silver Star Communications provides fiber up to 1Gbps in Teton Valley. Ask hosts.',
      suggestions: [
        { name: 'Bronze Buffalo Ranch 2BR (Victor)', price: '$400-600/n', note: 'Luxury: 2BR, kitchen, fireplace, Teton view, spa/pool. Fiber.' },
        { name: 'Teton Valley Cabins (Driggs)', price: '$150-200/n', note: 'FIBER CONFIRMED. 2Q same room though.' },
        { name: 'Saddlehorn Cabin VRBO', price: '$300-400/n', note: 'True 2BR, Teton views. VERIFY WiFi.' },
      ],
      avoidNote: null, budgetRange: '$450-1,800 for 3 nights',
    },
  },
  {
    id: 'yellowstone', location: 'West Yellowstone, MT', dates: 'Wed-Thu May 27-28', nights: 2, days: [18, 19],
    dayType: 'Day 18: Drive Driggs→Yellowstone + Old Faithful + Grand Prismatic. Day 19: Canyon, Mammoth, Tower Fall, Lamar.',
    status: 'pending' as const, booking: null, activities: [],
    searchCriteria: {
      checkIn: 'Wed May 27', checkOut: 'Fri May 29', guests: '2 adults',
      mustHave: ['2 queen beds (no bunk beds — Mom is 80)', 'Near West Yellowstone park entrance'],
      niceToHave: ['Indoor pool/hot tub', 'Free breakfast', 'WiFi (not critical — no work days)'],
      searchLinks: [
        { label: 'Hotels.com W.Yellowstone', url: 'https://www.hotels.com/Hotel-Search?destination=West+Yellowstone%2C+MT&startDate=2026-05-27&endDate=2026-05-29&rooms=1&adults=2' },
        { label: 'Booking.com W.Yellowstone', url: 'https://www.booking.com/searchresults.html?ss=West+Yellowstone%2C+Montana&checkin=2026-05-27&checkout=2026-05-29&group_adults=2&no_rooms=1' },
        { label: 'VRBO W.Yellowstone', url: 'https://www.vrbo.com/search?destination=West+Yellowstone%2C+MT&startDate=2026-05-27&endDate=2026-05-29&adults=2' },
      ],
      wifiWarning: null,
      suggestions: [
        { name: 'Gray Wolf Inn & Suites', price: '$200-250/n', note: 'JUST RENOVATED. 2Q, 2 blocks to entrance, pool, breakfast.' },
        { name: 'Kelly Inn West Yellowstone', price: '$200-280/n', note: 'Biggest pool in town. 2Q, free breakfast.' },
        { name: 'Stage Coach Inn', price: '$180-220/n', note: 'Budget. Center of town. 2Q available.' },
      ],
      avoidNote: 'Skip Explorer Cabins — 2nd bedroom has bunk beds (not for Mom).', budgetRange: '$360-560 for 2 nights',
    },
  },
  {
    id: 'glacier', location: 'Columbia Falls / West Glacier, MT', dates: 'Fri-Sun May 29-31', nights: 2, days: [20, 21, 22],
    dayType: 'Day 20: Drive Yellowstone→Glacier + Robin arrives FCA. Day 21: Glacier — Lake McDonald, Trail of Cedars, hike. Day 22: Morning lake, afternoon flights.',
    status: 'booked' as const,
    booking: { name: 'Apgar Village Lodge & Cabins', conf: '#3870048', cost: '$392.26 ($181.60/n × 2 + tax)', paid: '$189.22 paid. Balance $203.04 at check-in.', details: 'Cabin 3 Queen, 2 Room. 3 guests (Colin + Mom + Robin). 1-844-868-7474.' },
    activities: [], searchCriteria: null,
  },
];

const OTHER_ITEMS = [
  { category: 'Car', name: 'Rental SUV LAS→FCA (21 days)', status: 'pending' as const, detail: 'Compact AWD SUV one-way. National Emerald Club, Budget AARP 30% off, AutoSlash. ~$1,040. Chase Sapphire Reserve = primary insurance.', url: 'https://www.autoslash.com', dates: 'May 10-31' },
  { category: 'Pass', name: 'America the Beautiful Pass ($80)', status: 'pending' as const, detail: "Colin's pass covers Mom + Robin. Saves $250 across 6 parks!", url: 'https://store.usgs.gov/pass/annual', dates: 'Before May 10' },
  { category: 'Action', name: "Mom's Antelope Canyon Waiver", status: 'action' as const, detail: 'Colin signed his. MOM STILL NEEDS TO SIGN. Check email for waiver link.', url: '', dates: 'ASAP' },
];

const FLIGHTS = [
  { who: 'Colin', route: 'SEA → LAS', date: 'Sun May 10', status: 'pending' as const, best: '$81 Alaska nonstop 2:45pm', alts: '$67 Frontier (no bags), $89 Delta nonstop', url: 'https://www.google.com/travel/flights', cardTip: 'Capital One → Alaska MP' },
  { who: 'Mom', route: 'YYZ → LAS', date: 'Sun May 10', status: 'pending' as const, best: '$129 Air Canada Rouge nonstop', alts: '$228 Porter (comfiest for Mom)', url: 'https://www.google.com/travel/flights', cardTip: 'Amex Plat 5x via Amex Travel' },
  { who: 'Robin', route: 'SEA → FCA', date: 'Fri May 29', status: 'pending' as const, best: '$127 Alaska 1:13pm nonstop', alts: '$152 Alaska 9:35pm (after work)', url: 'https://www.google.com/travel/flights', cardTip: 'Capital One or Chase portal' },
  { who: 'Colin+Robin', route: 'FCA → SEA', date: 'Sun May 31', status: 'pending' as const, best: '$152/ea Alaska 11:33am nonstop', alts: '$167/ea 6:15am', url: 'https://www.google.com/travel/flights', cardTip: 'Capital One → Alaska MP' },
  { who: 'Mom', route: 'FCA → YYZ', date: 'Sun May 31', status: 'pending' as const, best: '$286 United via DEN 6:20am', alts: '$289 Alaska via SEA', url: 'https://www.google.com/travel/flights', cardTip: 'Chase portal 1.5x' },
];

const SIGNUPS = [
  { name: 'AARP ($12/yr)', why: '30-35% off car rental, 10% hotel discounts, Hilton Silver', before: 'Before hotels & car', url: 'https://www.aarp.org/membership/', status: 'pending' as const },
  { name: 'Hilton Honors (free)', why: 'Member rates + AARP = Silver tier', before: 'Before Page hotel', url: 'https://www.hilton.com/en/hilton-honors/', status: 'pending' as const },
  { name: 'National Emerald Club (free)', why: 'May waive one-way drop fee, skip counter', before: 'Before car rental', url: 'https://www.nationalcar.com/en/loyalty/program.html', status: 'pending' as const },
  { name: 'Tock account (free)', why: 'El Tovar lunch window opens Apr 12 6am MST', before: 'BEFORE Apr 12', url: 'https://www.exploretock.com/', status: 'pending' as const },
  { name: 'Google Flights tracking', why: 'Track all routes for price drops', before: 'ASAP', url: 'https://www.google.com/travel/flights', status: 'pending' as const },
];

// Pull day-by-day data from tripData for enrichment
const dayPlans = tripData.days;

export default function BookingsPage() {
  const [notes, setNotes] = useState<Record<string, { text: string; updatedAt: string; updatedBy: string }>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [userName, setUserName] = useState('');
  const [showNamePrompt, setShowNamePrompt] = useState(false);

  // Load notes from API
  useEffect(() => {
    fetch('/api/bookings-notes')
      .then(r => r.json())
      .then(data => { setNotes(data.notes || {}); setLoading(false); })
      .catch(() => setLoading(false));
    const stored = localStorage.getItem('bookings-user-name');
    if (stored) setUserName(stored);
    else setShowNamePrompt(true);
  }, []);

  const saveNote = useCallback(async (sectionId: string, text: string) => {
    if (!userName) { setShowNamePrompt(true); return; }
    setSaving(true);
    try {
      const res = await fetch('/api/bookings-notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sectionId, text, updatedBy: userName }),
      });
      const data = await res.json();
      if (data.notes) setNotes(data.notes);
    } catch { /* silent */ }
    setSaving(false);
  }, [userName]);

  const handleSetName = (name: string) => {
    setUserName(name);
    localStorage.setItem('bookings-user-name', name);
    setShowNamePrompt(false);
  };

  const bookedCount = STAYS.filter(s => s.status === 'booked').length;
  const pendingStays = STAYS.filter(s => s.status === 'pending').length;
  const pendingFlights = FLIGHTS.filter(f => f.status === 'pending').length;
  const noteCount = Object.keys(notes).length;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Name prompt modal */}
      {showNamePrompt && (
        <div className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl p-5 max-w-xs w-full">
            <h3 className="font-bold text-sm mb-2">Who are you?</h3>
            <p className="text-xs text-gray-500 mb-3">So notes show who wrote them.</p>
            <div className="flex gap-2">
              <button onClick={() => handleSetName('Colin')} className="flex-1 py-2 bg-blue-600 text-white rounded font-medium text-sm hover:bg-blue-700 transition-colors">Colin</button>
              <button onClick={() => handleSetName('Robin')} className="flex-1 py-2 bg-purple-600 text-white rounded font-medium text-sm hover:bg-purple-700 transition-colors">Robin</button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-bold">Trip Booking HQ</h1>
              <p className="text-blue-100 text-xs">Las Vegas → Glacier | May 10-31, 2026</p>
            </div>
            <div className="text-right text-xs">
              <div className="text-blue-100">{userName && <>Editing as <strong className="text-white">{userName}</strong> <button onClick={() => setShowNamePrompt(true)} className="text-blue-300 hover:text-white ml-1">(switch)</button></>}</div>
              <div className="text-blue-200 mt-0.5">{saving ? 'Saving...' : noteCount > 0 ? `${noteCount} note${noteCount > 1 ? 's' : ''} saved` : ''}</div>
            </div>
          </div>
          <div className="flex gap-3 mt-2 text-[10px]">
            <span className="bg-green-500/20 px-2 py-0.5 rounded-full">{bookedCount} booked</span>
            <span className="bg-amber-400/20 px-2 py-0.5 rounded-full">{pendingStays} hotels needed</span>
            <span className="bg-amber-400/20 px-2 py-0.5 rounded-full">{pendingFlights} flights needed</span>
          </div>
        </div>
      </div>

      {/* Sticky nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 flex items-center gap-1 overflow-x-auto py-1.5 text-xs scrollbar-hide">
          <a href="#stays" className="shrink-0 px-2.5 py-1 rounded-full bg-gray-100 hover:bg-gray-200 font-medium text-gray-700 transition-colors">Hotels</a>
          <a href="#flights" className="shrink-0 px-2.5 py-1 rounded-full bg-gray-100 hover:bg-gray-200 font-medium text-gray-700 transition-colors">Flights</a>
          <a href="#car" className="shrink-0 px-2.5 py-1 rounded-full bg-gray-100 hover:bg-gray-200 font-medium text-gray-700 transition-colors">Car+Passes</a>
          <a href="#signups" className="shrink-0 px-2.5 py-1 rounded-full bg-gray-100 hover:bg-gray-200 font-medium text-gray-700 transition-colors">Signups</a>
          <span className="shrink-0 text-gray-300 mx-0.5">|</span>
          {STAYS.map(s => (
            <a key={s.id} href={`#stay-${s.id}`} className={`shrink-0 px-2 py-1 rounded-full text-[10px] font-medium transition-colors ${s.status === 'booked' ? 'bg-green-50 text-green-700 hover:bg-green-100' : 'bg-amber-50 text-amber-700 hover:bg-amber-100'}`}>
              {s.location.split(',')[0].split('(')[0].trim()}
            </a>
          ))}
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-4 space-y-4">

        {/* ─── STAYS ─── */}
        <section id="stays">
          <h2 className="text-sm font-bold text-gray-800 mb-2">Accommodations</h2>

          {STAYS.map(stay => {
            const stayDays = dayPlans.filter(d => stay.days.includes(d.dayNumber));
            const isBooked = stay.status === 'booked';

            return (
              <div key={stay.id} id={`stay-${stay.id}`} className={`mb-3 border rounded-lg overflow-hidden scroll-mt-14 ${isBooked ? 'border-green-200 bg-white' : 'border-amber-200 bg-white'}`}>
                {/* Stay header */}
                <div className={`px-3 py-2 flex items-center justify-between ${isBooked ? 'bg-green-50/70' : 'bg-amber-50/70'}`}>
                  <div className="min-w-0">
                    <div className="font-bold text-sm flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                      {stay.location}
                    </div>
                    <div className="text-[11px] text-gray-500 flex items-center gap-2 mt-0.5">
                      <span>{stay.dates} ({stay.nights}n)</span>
                      {stayDays[0]?.drivingDistance && (
                        <span className="flex items-center gap-0.5 text-gray-400"><Car className="w-3 h-3" />{stayDays[0].drivingDistance} &middot; {stayDays[0].drivingTime}</span>
                      )}
                    </div>
                  </div>
                  <StatusBadge status={stay.status} />
                </div>

                <div className="px-3 py-2 text-xs space-y-1.5">
                  {/* Schedule overview */}
                  <div className="text-gray-600 text-[11px]">{stay.dayType}</div>

                  {/* BOOKED: confirmation */}
                  {stay.booking && (
                    <div className="bg-green-50 border border-green-100 rounded p-2">
                      <div className="font-bold text-green-800 text-xs">{stay.booking.name}</div>
                      <div className="text-[11px] text-gray-600 mt-0.5">{stay.booking.details}</div>
                      <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1 text-[10px] text-gray-500">
                        <span><strong>Conf:</strong> {stay.booking.conf}</span>
                        <span><strong>Cost:</strong> {stay.booking.cost}</span>
                      </div>
                      <div className="text-[10px] text-gray-500 mt-0.5">{stay.booking.paid}</div>
                    </div>
                  )}

                  {/* Activities */}
                  {stay.activities.length > 0 && (
                    <div className="space-y-0.5">
                      {stay.activities.map((a, i) => (
                        <div key={i} className="flex items-start gap-2 py-0.5">
                          <StatusBadge status={a.status} />
                          <div className="text-[11px]">
                            <span className="font-medium">{a.name}</span>
                            {a.detail && <span className="text-gray-500"> — {a.detail}</span>}
                            {a.url && <> <ExtLink href={a.url} className="text-[10px]">Link</ExtLink></>}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Day-by-day from tripData (accordion) */}
                  {stayDays.length > 0 && (
                    <Accordion
                      title={<span className="text-[11px] font-semibold text-gray-600">Day-by-day activities ({stayDays.length} day{stayDays.length > 1 ? 's' : ''})</span>}
                    >
                      <div className="space-y-2 ml-5 mt-1">
                        {stayDays.map(day => (
                          <div key={day.id}>
                            <div className="text-[11px] font-semibold text-gray-700">
                              Day {day.dayNumber}: {day.title}
                              {day.weather && (
                                <span className="font-normal text-gray-400 ml-1.5">
                                  <Thermometer className="w-3 h-3 inline -mt-0.5" /> {day.weather.high}°/{day.weather.low}° {day.weather.conditions}
                                </span>
                              )}
                            </div>
                            {day.drivingDistance && (
                              <div className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                                <Car className="w-3 h-3" /> {day.drivingDistance} &middot; {day.drivingTime}
                              </div>
                            )}
                            <div className="mt-0.5 space-y-0.5">
                              {day.activities.map(act => (
                                <div key={act.id} className="text-[11px] text-gray-600 flex items-start gap-1.5 py-0.5">
                                  <Clock className="w-3 h-3 text-gray-300 shrink-0 mt-0.5" />
                                  <div>
                                    <span className="font-medium text-gray-700">{act.name}</span>
                                    {act.startTime && <span className="text-gray-400 ml-1">{act.startTime}</span>}
                                    <span className="text-gray-400 ml-1">({act.duration})</span>
                                    {act.cost && <span className="text-green-700 ml-1">{act.cost}</span>}
                                    {act.url && <> <ExtLink href={act.url} className="text-[10px] ml-1">Info</ExtLink></>}
                                    {act.tips && act.tips.length > 0 && (
                                      <div className="text-[10px] text-gray-400 mt-0.5">{act.tips[0]}</div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </Accordion>
                  )}

                  {/* PENDING: search criteria (accordion, default open) */}
                  {stay.searchCriteria && (
                    <Accordion
                      title={<span className="text-[11px] font-bold text-amber-800 flex items-center gap-1"><Search className="w-3 h-3" /> Search & Book This Stay</span>}
                      defaultOpen={true}
                    >
                      <div className="border border-amber-200 bg-amber-50/40 rounded p-2 space-y-2 ml-5 mt-1">
                        <div className="text-[11px] text-gray-600">
                          <strong>In:</strong> {stay.searchCriteria.checkIn} &middot; <strong>Out:</strong> {stay.searchCriteria.checkOut} &middot; <strong>Guests:</strong> {stay.searchCriteria.guests}
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <div className="font-semibold text-[10px] text-gray-700 mb-0.5">Must Have</div>
                            <ul className="list-disc list-inside text-[11px] text-gray-600 space-y-0.5">
                              {stay.searchCriteria.mustHave.map((m, i) => <li key={i}>{m}</li>)}
                            </ul>
                          </div>
                          <div>
                            <div className="font-semibold text-[10px] text-gray-700 mb-0.5">Nice to Have</div>
                            <ul className="list-disc list-inside text-[11px] text-gray-400 space-y-0.5">
                              {stay.searchCriteria.niceToHave.map((m, i) => <li key={i}>{m}</li>)}
                            </ul>
                          </div>
                        </div>

                        {stay.searchCriteria.wifiWarning && (
                          <div className="text-amber-700 bg-amber-100/60 rounded px-2 py-1 text-[10px]"><strong>WiFi:</strong> {stay.searchCriteria.wifiWarning}</div>
                        )}
                        {stay.searchCriteria.avoidNote && (
                          <div className="text-red-700 bg-red-50 rounded px-2 py-1 text-[10px]">{stay.searchCriteria.avoidNote}</div>
                        )}

                        <div className="flex flex-wrap gap-1">
                          {stay.searchCriteria.searchLinks.map((l, i) => (
                            <ExtLink key={i} href={l.url} className="text-[10px] bg-white border border-blue-200 rounded px-1.5 py-0.5 hover:bg-blue-50 transition-colors">{l.label}</ExtLink>
                          ))}
                        </div>

                        <Accordion title={<span className="text-[10px] font-semibold text-gray-600">Colin&apos;s research suggestions</span>}>
                          <div className="mt-1 ml-5">
                            {stay.searchCriteria.suggestions.map((s, i) => (
                              <div key={i} className="flex items-start gap-2 text-[11px] py-0.5 border-b border-gray-100 last:border-0">
                                <span className="font-medium text-gray-700 shrink-0">{s.name}</span>
                                <span className="text-gray-400 shrink-0">{s.price}</span>
                                <span className="text-gray-500">{s.note}</span>
                              </div>
                            ))}
                            <div className="text-[10px] text-gray-400 mt-1">Budget: {stay.searchCriteria.budgetRange}</div>
                          </div>
                        </Accordion>
                      </div>
                    </Accordion>
                  )}

                  {/* Inline note for this stay */}
                  <InlineNote sectionId={`stay-${stay.id}`} notes={notes} onSave={saveNote} />
                </div>
              </div>
            );
          })}
        </section>

        {/* ─── FLIGHTS ─── */}
        <section id="flights" className="scroll-mt-14">
          <Accordion
            title={<h2 className="text-sm font-bold text-gray-800">Flights — {pendingFlights} to Book</h2>}
            defaultOpen={true}
          >
            <div className="mt-2 space-y-1">
              {FLIGHTS.map((f, i) => (
                <div key={i} className="flex items-start gap-2 text-[11px] border border-gray-100 rounded px-2 py-1.5 bg-white">
                  <Plane className="w-3.5 h-3.5 text-gray-300 shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-700">{f.who}</span>
                      <ExtLink href={f.url}>{f.route}</ExtLink>
                      <span className="text-gray-400">{f.date}</span>
                      <StatusBadge status={f.status} />
                    </div>
                    <div className="text-gray-600 mt-0.5">
                      <span className="font-medium text-green-700">{f.best}</span>
                      <span className="text-gray-400 mx-1">|</span>
                      <span className="text-gray-400">{f.alts}</span>
                      <span className="text-purple-500 ml-2 text-[10px]">{f.cardTip}</span>
                    </div>
                    <InlineNote sectionId={`flight-${i}`} notes={notes} onSave={saveNote} />
                  </div>
                </div>
              ))}
            </div>
          </Accordion>
        </section>

        {/* ─── CAR + PASSES ─── */}
        <section id="car" className="scroll-mt-14">
          <Accordion
            title={<h2 className="text-sm font-bold text-gray-800">Car, Passes & Actions</h2>}
            defaultOpen={true}
          >
            <div className="mt-2 space-y-1">
              {OTHER_ITEMS.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-[11px] border border-gray-100 rounded px-2 py-1.5 bg-white">
                  <div className="text-[9px] font-bold text-gray-400 bg-gray-100 rounded px-1 py-0.5 shrink-0 mt-0.5">{item.category}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-700">{item.url ? <ExtLink href={item.url}>{item.name}</ExtLink> : item.name}</span>
                      <span className="text-gray-400 text-[10px]">{item.dates}</span>
                      <StatusBadge status={item.status} />
                    </div>
                    <div className="text-gray-500 mt-0.5">{item.detail}</div>
                    <InlineNote sectionId={`item-${i}`} notes={notes} onSave={saveNote} />
                  </div>
                </div>
              ))}
            </div>
          </Accordion>
        </section>

        {/* ─── SIGNUPS ─── */}
        <section id="signups" className="scroll-mt-14">
          <Accordion
            title={<h2 className="text-sm font-bold text-gray-800">Signups — Do Before Booking</h2>}
          >
            <div className="mt-2 space-y-1">
              {SIGNUPS.map((s, i) => (
                <div key={i} className="flex items-start gap-2 text-[11px] border border-gray-100 rounded px-2 py-1.5 bg-white">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <ExtLink href={s.url} className="font-medium">{s.name}</ExtLink>
                      <span className="text-gray-400 text-[10px]">{s.before}</span>
                      <StatusBadge status={s.status} />
                    </div>
                    <div className="text-gray-500 mt-0.5">{s.why}</div>
                  </div>
                </div>
              ))}
            </div>
          </Accordion>
        </section>

        {/* Footer */}
        <div className="text-center py-4 text-xs text-gray-400 border-t">
          <a href="/" className="text-blue-500 hover:underline mr-3">Full trip planner</a>
          <a href="/mom" className="text-blue-500 hover:underline">Mom&apos;s view</a>
        </div>
      </div>
    </div>
  );
}
