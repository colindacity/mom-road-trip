'use client';

import { tripData } from '@/data/tripData';
import { format, parseISO } from 'date-fns';
import { ExternalLink, Check, Circle, AlertTriangle, Search, ChevronDown, ChevronRight, Save, Plane, Clock, Edit3, Mountain, Fuel, Thermometer, Bookmark, PenLine, MapPin } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';

// ─── Helpers ───
function ExtLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  if (!href) return <span className={className}>{children}</span>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`hover:underline inline-flex items-center gap-0.5 ${className}`}>
      {children}<ExternalLink className="w-2.5 h-2.5 shrink-0 opacity-50" />
    </a>
  );
}

function StatusBadge({ status }: { status: 'booked' | 'pending' | 'action' | 'info' }) {
  if (status === 'booked') return <span className="bk-badge-booked"><Check className="w-3 h-3" />Booked</span>;
  if (status === 'pending') return <span className="bk-badge-pending"><Circle className="w-3 h-3" />To Book</span>;
  if (status === 'action') return <span className="bk-badge-action"><AlertTriangle className="w-3 h-3" />Action</span>;
  return null;
}

function Accordion({ title, defaultOpen = false, children, id }: { title: React.ReactNode; defaultOpen?: boolean; children: React.ReactNode; id?: string }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div id={id} className="scroll-mt-16">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center gap-1.5 text-left group py-1">
        <span className={`bk-chevron ${open ? 'bk-chevron-open' : ''}`}>
          <ChevronRight className="w-3.5 h-3.5" />
        </span>
        <span className="flex-1 min-w-0">{title}</span>
      </button>
      <div className={`bk-accordion-body ${open ? 'bk-accordion-open' : ''}`}>
        <div className="bk-accordion-inner">{children}</div>
      </div>
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

  const save = () => { onSave(sectionId, text); setEditing(false); };

  if (!editing && !existing?.text) {
    return (
      <button onClick={() => setEditing(true)} className="bk-add-note">
        <PenLine className="w-3 h-3" /> Add a note...
      </button>
    );
  }

  if (!editing) {
    return (
      <div className="bk-note" onClick={() => setEditing(true)}>
        <div className="bk-note-pin" />
        <div className="bk-note-text">{existing.text}</div>
        <div className="bk-note-meta">
          <span className={existing.updatedBy === 'Robin' ? 'text-[var(--bk-robin)]' : 'text-[var(--bk-colin)]'}>{existing.updatedBy}</span>
          <span> &middot; {format(parseISO(existing.updatedAt), 'MMM d, h:mma')}</span>
        </div>
        <button className="bk-note-edit"><Edit3 className="w-3 h-3" /></button>
      </div>
    );
  }

  return (
    <div className="bk-note-editor">
      <textarea
        ref={textareaRef}
        value={text}
        onChange={e => { setText(e.target.value); e.target.style.height = 'auto'; e.target.style.height = e.target.scrollHeight + 'px'; }}
        onKeyDown={e => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) save(); if (e.key === 'Escape') { setText(existing?.text || ''); setEditing(false); } }}
        placeholder="Links, research, options you found, questions..."
        className="bk-note-textarea"
        rows={3}
      />
      <div className="flex items-center gap-2 mt-1.5">
        <button onClick={save} className="bk-note-save"><Save className="w-3 h-3" /> Save</button>
        <button onClick={() => { setText(existing?.text || ''); setEditing(false); }} className="bk-note-cancel">Cancel</button>
        <span className="text-[10px] opacity-40 ml-auto font-[var(--bk-sans)]">Cmd+Enter</span>
      </div>
    </div>
  );
}

// ─── Static Data ───
const STAYS = [
  {
    id: 'vegas', location: 'Las Vegas', region: 'NV', dates: 'Sun May 10', nights: 1, days: [1], emoji: '🎰',
    dayType: 'Arrive, Bacchanal Buffet, Strip walk, Fremont St',
    status: 'booked' as const,
    booking: { name: 'The LINQ Hotel & Casino', conf: 'Hotels.com #73410152077445', cost: '$56.63 resort fee (room paid via OneKeyCash)', paid: 'Room paid. $56.63 resort fee at check-in.', details: 'Deluxe 2 Queen, Non Smoking. 3535 Las Vegas Blvd S. Check-in 4pm, out 11am.' },
    activities: [
      { name: 'Arrive LAS + rental car', status: 'info' as const, detail: '', url: '' },
      { name: 'Bacchanal Buffet (Caesars)', status: 'booked' as const, detail: 'OpenTable res. $65/pp, $80 crab upgrade. 250+ dishes.', url: 'https://www.opentable.com/r/bacchanal-buffet-caesars-palace-las-vegas' },
      { name: 'Bellagio Fountains + Strip', status: 'info' as const, detail: '', url: '' },
      { name: 'Fremont Street', status: 'info' as const, detail: '', url: '' },
    ],
    searchCriteria: null,
  },
  {
    id: 'gc', location: 'Grand Canyon', region: 'South Rim, AZ', dates: 'Mon-Wed May 11-13', nights: 2, days: [2, 3], emoji: '🏜️',
    dayType: 'Day 2: Drive LV→GC, Mather Point, Hermit Rd sunset. Day 3: Rim Trail, El Tovar, Yavapai.',
    status: 'booked' as const,
    booking: { name: 'Maswik Lodge (Inside Park) — 20% off', conf: 'Xanterra #20514347', cost: '$547.30 ($256/n × 2 + tax)', paid: '$273.65 deposit. Balance $273.65 at check-in.', details: 'Standard 2 Queen North. Inside park — sunrise/sunset access.' },
    activities: [
      { name: 'El Tovar lunch reservation', status: 'pending' as const, detail: 'Tock 30-day window opens Apr 12 at 6am MST.', url: 'https://www.exploretock.com/el-tovar-dining-room---grand-canyon-south-rim' },
    ],
    searchCriteria: null,
  },
  {
    id: 'page', location: 'Page', region: 'AZ', dates: 'Wed-Fri May 13-15', nights: 3, days: [4, 5, 6], emoji: '🌊',
    dayType: 'Day 4: GC→Page + Horseshoe Bend. Day 5: Antelope Canyon + Lake Powell. Day 6: WORK DAY.',
    status: 'pending' as const, booking: null,
    activities: [
      { name: 'Upper Antelope Canyon', status: 'booked' as const, detail: '#FMBYMK. Thu May 14 10am. MOM NEEDS WAIVER.', url: 'https://antelopeslotcanyon.com/' },
    ],
    searchCriteria: {
      checkIn: 'Wed May 13', checkOut: 'Sat May 16', guests: '2 adults',
      mustHave: ['2BR preferred (1 work day)', 'WiFi 300Mbps+ for video calls', 'Central Page (10-15min to attractions)'],
      niceToHave: ['Kitchen', 'Workspace/desk', 'Free breakfast'],
      searchLinks: [
        { label: 'Airbnb 2BR', url: 'https://www.airbnb.com/s/Page--AZ/homes?checkin=2026-05-13&checkout=2026-05-16&adults=2&min_bedrooms=2' },
        { label: 'VRBO', url: 'https://www.vrbo.com/search?destination=Page%2C+AZ&startDate=2026-05-13&endDate=2026-05-16&adults=2' },
        { label: 'Hotels.com', url: 'https://www.hotels.com/Hotel-Search?destination=Page%2C+AZ&startDate=2026-05-13&endDate=2026-05-16&rooms=1&adults=2' },
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Page%2C+Arizona&checkin=2026-05-13&checkout=2026-05-16&group_adults=2&no_rooms=1' },
      ],
      wifiWarning: 'Page is rural. Search Airbnb for "fiber" or "Starlink".',
      suggestions: [
        { name: 'Airbnb 2BR Duplex', price: '$90-150/n', note: '867 Mbps fiber confirmed' },
        { name: 'Hampton Inn Page', price: '$140-250/n', note: '#1 TripAdvisor. WiFi 8.9/10.' },
        { name: 'Home2 Suites Hilton', price: '$100-140/n', note: 'Kitchenette, newer (2020).' },
      ],
      avoidNote: null, budgetRange: '$270-750 / 3n',
    },
  },
  {
    id: 'moab', location: 'Moab', region: 'UT', dates: 'Sat-Tue May 16-19', nights: 4, days: [7, 8, 9, 10], emoji: '🪨',
    dayType: 'Day 7: Half work + Monument Valley drive. Day 8: WORK. Day 9: Arches. Day 10: Canyonlands + half work.',
    status: 'pending' as const, booking: null, activities: [],
    searchCriteria: {
      checkIn: 'Sat May 16', checkOut: 'Wed May 20', guests: '2 adults',
      mustHave: ['2BR required (2+ work days)', 'WiFi 300Mbps+ for video calls', 'Central Moab (5mi to Arches)'],
      niceToHave: ['Desk/workspace', 'Kitchen', 'Pool for Mom'],
      searchLinks: [
        { label: 'Airbnb 2BR', url: 'https://www.airbnb.com/s/Moab--UT/homes?checkin=2026-05-16&checkout=2026-05-20&adults=2&min_bedrooms=2' },
        { label: 'VRBO 2BR', url: 'https://www.vrbo.com/search?destination=Moab%2C+UT&startDate=2026-05-16&endDate=2026-05-20&adults=2' },
        { label: 'Hotels.com', url: 'https://www.hotels.com/Hotel-Search?destination=Moab%2C+UT&startDate=2026-05-16&endDate=2026-05-20&rooms=1&adults=2' },
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Moab%2C+Utah&checkin=2026-05-16&checkout=2026-05-20&group_adults=2&no_rooms=1' },
      ],
      wifiWarning: 'Moab WiFi is bad. Search for "fiber" or "Starlink".',
      suggestions: [
        { name: 'My Place Hotel', price: '$200-280/n', note: '100+ Mbps confirmed. Kitchen.' },
        { name: 'Element (Marriott)', price: '$250-350/n', note: 'Kitchenette, desk, pool.' },
        { name: 'VRBO Arches Retreat', price: '$250-400/n', note: '3BR, fiber confirmed.' },
      ],
      avoidNote: 'Avoid Hyatt Place Moab (3-5 Mbps WiFi).', budgetRange: '$800-1,850 / 4n',
    },
  },
  {
    id: 'slc', location: 'Salt Lake City', region: 'UT', dates: 'Wed-Sun May 20-24', nights: 4, days: [11, 12, 13, 14], emoji: '🏔️',
    dayType: 'Day 11: Half work + drive. Day 12-13: WORK. Day 14: Museum, Antelope Island.',
    status: 'booked' as const,
    booking: { name: '2BR Airbnb — Pool/HotTub/Gym', conf: 'Airbnb HMN2P4MBR9', cost: '$1,256.86 ($272/n × 4 + tax)', paid: '$544 paid Apr 1. $712.86 due May 5.', details: '241 W 200 S, SLC. Rooftop pool, keypad 4pm, checkout 10am.' },
    activities: [], searchCriteria: null,
  },
  {
    id: 'driggs', location: 'Driggs', region: 'Teton Valley, ID', dates: 'Sun-Tue May 24-26', nights: 3, days: [15, 16, 17], emoji: '⛰️',
    dayType: 'Day 15: Half work + drive. Day 16: WORK (Memorial Day). Day 17: Grand Teton.',
    status: 'pending' as const, booking: null, activities: [],
    searchCriteria: {
      checkIn: 'Sun May 24', checkOut: 'Wed May 27', guests: '2 adults',
      mustHave: ['2BR preferred (1.5 work days)', 'WiFi 300Mbps+', 'Driggs / Victor / Tetonia area'],
      niceToHave: ['Teton views', 'Kitchen', 'Desk', 'Pool/spa'],
      searchLinks: [
        { label: 'Airbnb 2BR', url: 'https://www.airbnb.com/s/Driggs--ID/homes?checkin=2026-05-24&checkout=2026-05-27&adults=2&min_bedrooms=2' },
        { label: 'VRBO', url: 'https://www.vrbo.com/search?destination=Driggs%2C+ID&startDate=2026-05-24&endDate=2026-05-27&adults=2' },
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=Driggs%2C+Idaho&checkin=2026-05-24&checkout=2026-05-27&group_adults=2&no_rooms=1' },
      ],
      wifiWarning: 'Silver Star fiber (up to 1Gbps) available throughout valley.',
      suggestions: [
        { name: 'Bronze Buffalo Ranch', price: '$400-600/n', note: '2BR luxury, Teton view, spa.' },
        { name: 'Teton Valley Cabins', price: '$150-200/n', note: 'Fiber confirmed. Same room.' },
        { name: 'Saddlehorn Cabin VRBO', price: '$300-400/n', note: '2BR, Teton views. Verify WiFi.' },
      ],
      avoidNote: null, budgetRange: '$450-1,800 / 3n',
    },
  },
  {
    id: 'yellowstone', location: 'West Yellowstone', region: 'MT', dates: 'Wed-Thu May 27-28', nights: 2, days: [18, 19], emoji: '🦬',
    dayType: 'Day 18: Old Faithful + Grand Prismatic. Day 19: Canyon, Mammoth, Lamar.',
    status: 'pending' as const, booking: null, activities: [],
    searchCriteria: {
      checkIn: 'Wed May 27', checkOut: 'Fri May 29', guests: '2 adults',
      mustHave: ['2 queen beds (no bunks)', 'Near park entrance'],
      niceToHave: ['Pool/hot tub', 'Free breakfast', 'WiFi'],
      searchLinks: [
        { label: 'Hotels.com', url: 'https://www.hotels.com/Hotel-Search?destination=West+Yellowstone%2C+MT&startDate=2026-05-27&endDate=2026-05-29&rooms=1&adults=2' },
        { label: 'Booking.com', url: 'https://www.booking.com/searchresults.html?ss=West+Yellowstone%2C+Montana&checkin=2026-05-27&checkout=2026-05-29&group_adults=2&no_rooms=1' },
        { label: 'VRBO', url: 'https://www.vrbo.com/search?destination=West+Yellowstone%2C+MT&startDate=2026-05-27&endDate=2026-05-29&adults=2' },
      ],
      wifiWarning: null,
      suggestions: [
        { name: 'Gray Wolf Inn', price: '$200-250/n', note: 'Just renovated. Pool, breakfast.' },
        { name: 'Kelly Inn', price: '$200-280/n', note: 'Biggest pool. Free breakfast.' },
        { name: 'Stage Coach Inn', price: '$180-220/n', note: 'Budget. Center of town.' },
      ],
      avoidNote: 'Skip Explorer Cabins (bunk beds).', budgetRange: '$360-560 / 2n',
    },
  },
  {
    id: 'glacier', location: 'Glacier NP', region: 'Columbia Falls, MT', dates: 'Fri-Sun May 29-31', nights: 2, days: [20, 21, 22], emoji: '🧊',
    dayType: 'Day 20: Drive + Robin arrives. Day 21: Lake McDonald, Trail of Cedars, hike. Day 22: Fly home.',
    status: 'booked' as const,
    booking: { name: 'Apgar Village Lodge & Cabins', conf: '#3870048', cost: '$392.26 ($182/n × 2 + tax)', paid: '$189.22 paid. Balance $203.04 at check-in.', details: 'Cabin 3 Queen, 2 Room. 3 guests. 1-844-868-7474.' },
    activities: [], searchCriteria: null,
  },
];

const FLIGHTS = [
  { who: 'Colin', route: 'SEA → LAS', date: 'Sun May 10', status: 'pending' as const, best: '$81 Alaska nonstop', alts: '$67 Frontier, $89 Delta', cardTip: 'Cap1 → Alaska MP' },
  { who: 'Mom', route: 'YYZ → LAS', date: 'Sun May 10', status: 'pending' as const, best: '$129 Air Canada nonstop', alts: '$228 Porter (comfiest)', cardTip: 'Amex Plat 5x' },
  { who: 'Robin', route: 'SEA → FCA', date: 'Fri May 29', status: 'pending' as const, best: '$127 Alaska 1:13pm', alts: '$152 Alaska 9:35pm', cardTip: 'Cap1 or Chase' },
  { who: 'Colin+Robin', route: 'FCA → SEA', date: 'Sun May 31', status: 'pending' as const, best: '$152/ea Alaska 11:33am', alts: '$167/ea 6:15am', cardTip: 'Cap1 → Alaska MP' },
  { who: 'Mom', route: 'FCA → YYZ', date: 'Sun May 31', status: 'pending' as const, best: '$286 United via DEN', alts: '$289 Alaska via SEA', cardTip: 'Chase 1.5x' },
];

const OTHER_ITEMS = [
  { cat: 'Car', name: 'Rental SUV LAS→FCA (21 days)', status: 'pending' as const, detail: 'AWD SUV one-way. National Emerald Club, AARP 30% off. ~$1,040. Chase Sapphire = insurance.', url: 'https://www.autoslash.com', when: 'May 10-31' },
  { cat: 'Pass', name: 'America the Beautiful ($80)', status: 'pending' as const, detail: "Colin's pass covers all. Saves $250 across 6 parks.", url: 'https://store.usgs.gov/pass/annual', when: 'Before May 10' },
  { cat: '!', name: "Mom's Antelope Canyon Waiver", status: 'action' as const, detail: 'MOM STILL NEEDS TO SIGN. Check email for waiver link.', url: '', when: 'ASAP' },
];

const SIGNUPS = [
  { name: 'AARP ($12/yr)', why: '30% off car, 10% hotels, Hilton Silver', before: 'Before booking', url: 'https://www.aarp.org/membership/' },
  { name: 'Hilton Honors', why: 'Member rates + AARP Silver tier', before: 'Before Page', url: 'https://www.hilton.com/en/hilton-honors/' },
  { name: 'National Emerald Club', why: 'May waive drop fee, skip counter', before: 'Before car', url: 'https://www.nationalcar.com/en/loyalty/program.html' },
  { name: 'Tock account', why: 'El Tovar window opens Apr 12', before: 'Before Apr 12', url: 'https://www.exploretock.com/' },
  { name: 'Google Flights alerts', why: 'Track all routes for drops', before: 'ASAP', url: 'https://www.google.com/travel/flights' },
];

const dayPlans = tripData.days;

// ─── Main Page ───
export default function BookingsPage() {
  const [notes, setNotes] = useState<Record<string, { text: string; updatedAt: string; updatedBy: string }>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [userName, setUserName] = useState('');
  const [showNamePrompt, setShowNamePrompt] = useState(false);

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
        method: 'POST', headers: { 'Content-Type': 'application/json' },
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

  return (
    <>
      {/* Google Fonts */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..700&display=swap" rel="stylesheet" />

      <div className="bk-page">
        {/* Name prompt */}
        {showNamePrompt && (
          <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bk-name-modal">
              <div className="bk-name-modal-title">Who&apos;s planning?</div>
              <p className="text-sm opacity-60 mb-4" style={{ fontFamily: 'var(--bk-sans)' }}>Notes will show your name.</p>
              <div className="flex gap-3">
                <button onClick={() => handleSetName('Colin')} className="bk-name-btn bk-name-btn-colin">Colin</button>
                <button onClick={() => handleSetName('Robin')} className="bk-name-btn bk-name-btn-robin">Robin</button>
              </div>
            </div>
          </div>
        )}

        {/* ─── Header ─── */}
        <header className="bk-header">
          <div className="bk-header-inner">
            <div className="bk-header-top">
              <div>
                <h1 className="bk-title">Trip Booking HQ</h1>
                <p className="bk-subtitle">Las Vegas → Glacier &middot; May 10-31, 2026</p>
              </div>
              <div className="bk-header-right">
                {userName && (
                  <div className="bk-user-tag">
                    <span className={userName === 'Robin' ? 'bk-user-robin' : 'bk-user-colin'}>{userName}</span>
                    <button onClick={() => setShowNamePrompt(true)} className="bk-switch-user">switch</button>
                  </div>
                )}
                <div className="bk-save-status">{saving ? 'Saving...' : ''}</div>
              </div>
            </div>
            <div className="bk-stats">
              <span className="bk-stat bk-stat-booked">{bookedCount} booked</span>
              <span className="bk-stat bk-stat-pending">{pendingStays} hotels needed</span>
              <span className="bk-stat bk-stat-pending">{pendingFlights} flights needed</span>
            </div>
          </div>
        </header>

        {/* ─── Sticky Nav ─── */}
        <nav className="bk-nav">
          <div className="bk-nav-inner scrollbar-hide">
            <a href="#stays" className="bk-nav-link">Hotels</a>
            <a href="#flights" className="bk-nav-link">Flights</a>
            <a href="#logistics" className="bk-nav-link">Logistics</a>
            <span className="bk-nav-divider" />
            {STAYS.map(s => (
              <a key={s.id} href={`#stay-${s.id}`} className={`bk-nav-city ${s.status === 'booked' ? 'bk-nav-city-booked' : 'bk-nav-city-pending'}`}>
                <span className="mr-0.5">{s.emoji}</span>{s.location}
              </a>
            ))}
          </div>
        </nav>

        {/* ─── Content ─── */}
        <main className="bk-main">

          {/* ═══ STAYS ═══ */}
          <section id="stays">
            <h2 className="bk-section-title"><Mountain className="w-4 h-4" /> Accommodations</h2>

            <div className="bk-journey">
              {STAYS.map((stay, stayIdx) => {
                const stayDays = dayPlans.filter(d => stay.days.includes(d.dayNumber));
                const isBooked = stay.status === 'booked';

                return (
                  <div key={stay.id} className="bk-stay-wrapper" id={`stay-${stay.id}`}>
                    {/* Journey connector line */}
                    {stayIdx > 0 && <div className="bk-journey-line" />}
                    <div className="bk-journey-dot" />

                    <div className={`bk-stay ${isBooked ? 'bk-stay-booked' : 'bk-stay-pending'}`}>
                      {/* Header */}
                      <div className="bk-stay-header">
                        <div className="bk-stay-header-left">
                          <span className="bk-stay-emoji">{stay.emoji}</span>
                          <div>
                            <div className="bk-stay-location">{stay.location}<span className="bk-stay-region">{stay.region}</span></div>
                            <div className="bk-stay-dates">
                              {stay.dates} &middot; {stay.nights}n
                              {stayDays[0]?.drivingDistance && (
                                <span className="bk-stay-drive"><Fuel className="w-3 h-3" />{stayDays[0].drivingDistance}</span>
                              )}
                            </div>
                          </div>
                        </div>
                        <StatusBadge status={stay.status} />
                      </div>

                      {/* Body */}
                      <div className="bk-stay-body">
                        <div className="bk-stay-schedule">{stay.dayType}</div>

                        {/* Booking confirmation */}
                        {stay.booking && (
                          <div className="bk-booking-conf">
                            <div className="bk-booking-name">{stay.booking.name}</div>
                            <div className="bk-booking-detail">{stay.booking.details}</div>
                            <div className="bk-booking-meta">
                              <span><strong>Conf:</strong> {stay.booking.conf}</span>
                              <span><strong>Cost:</strong> {stay.booking.cost}</span>
                            </div>
                            <div className="bk-booking-paid">{stay.booking.paid}</div>
                          </div>
                        )}

                        {/* Activities */}
                        {stay.activities.length > 0 && (
                          <div className="bk-activities">
                            {stay.activities.map((a, i) => (
                              <div key={i} className="bk-activity">
                                <StatusBadge status={a.status} />
                                <div>
                                  <span className="font-medium">{a.name}</span>
                                  {a.detail && <span className="opacity-60"> &mdash; {a.detail}</span>}
                                  {a.url && <> <ExtLink href={a.url} className="bk-link text-[10px]">Link</ExtLink></>}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Day-by-day from tripData */}
                        {stayDays.length > 0 && (
                          <Accordion title={<span className="bk-accordion-label">Day-by-day itinerary ({stayDays.length}d)</span>}>
                            <div className="bk-days">
                              {stayDays.map(day => (
                                <div key={day.id} className="bk-day">
                                  <div className="bk-day-title">
                                    Day {day.dayNumber}: {day.title}
                                    {day.weather && (
                                      <span className="bk-day-weather"><Thermometer className="w-3 h-3" /> {day.weather.high}°/{day.weather.low}°</span>
                                    )}
                                  </div>
                                  {day.drivingDistance && (
                                    <div className="bk-day-drive"><Fuel className="w-3 h-3" /> {day.drivingDistance} &middot; {day.drivingTime}</div>
                                  )}
                                  {day.activities.map(act => (
                                    <div key={act.id} className="bk-day-activity">
                                      <Clock className="w-3 h-3 opacity-30 shrink-0 mt-0.5" />
                                      <div>
                                        <strong>{act.name}</strong>
                                        {act.startTime && <span className="opacity-40 ml-1">{act.startTime}</span>}
                                        <span className="opacity-40 ml-1">({act.duration})</span>
                                        {act.cost && <span className="bk-day-cost">{act.cost}</span>}
                                        {act.url && <> <ExtLink href={act.url} className="bk-link text-[10px] ml-1">Info</ExtLink></>}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </Accordion>
                        )}

                        {/* Search criteria */}
                        {stay.searchCriteria && (
                          <Accordion title={<span className="bk-search-label"><Search className="w-3 h-3" /> Find & Book This Stay</span>} defaultOpen={true}>
                            <div className="bk-search-panel">
                              <div className="bk-search-dates">
                                <strong>In:</strong> {stay.searchCriteria.checkIn} &middot; <strong>Out:</strong> {stay.searchCriteria.checkOut} &middot; {stay.searchCriteria.guests}
                              </div>

                              <div className="bk-search-reqs">
                                <div>
                                  <div className="bk-search-req-title">Must Have</div>
                                  {stay.searchCriteria.mustHave.map((m, i) => <div key={i} className="bk-search-req-item">&#x2022; {m}</div>)}
                                </div>
                                <div>
                                  <div className="bk-search-req-title" style={{ opacity: 0.5 }}>Nice to Have</div>
                                  {stay.searchCriteria.niceToHave.map((m, i) => <div key={i} className="bk-search-req-item" style={{ opacity: 0.5 }}>&#x2022; {m}</div>)}
                                </div>
                              </div>

                              {stay.searchCriteria.wifiWarning && <div className="bk-wifi-warn">{stay.searchCriteria.wifiWarning}</div>}
                              {stay.searchCriteria.avoidNote && <div className="bk-avoid-warn">{stay.searchCriteria.avoidNote}</div>}

                              <div className="bk-search-links">
                                {stay.searchCriteria.searchLinks.map((l, i) => (
                                  <ExtLink key={i} href={l.url} className="bk-search-link">{l.label}</ExtLink>
                                ))}
                              </div>

                              <Accordion title={<span className="bk-accordion-label">Colin&apos;s research</span>}>
                                <div className="bk-suggestions">
                                  {stay.searchCriteria.suggestions.map((s, i) => (
                                    <div key={i} className="bk-suggestion">
                                      <span className="bk-suggestion-name">{s.name}</span>
                                      <span className="bk-suggestion-price">{s.price}</span>
                                      <span className="bk-suggestion-note">{s.note}</span>
                                    </div>
                                  ))}
                                  <div className="bk-budget-range">Budget: {stay.searchCriteria.budgetRange}</div>
                                </div>
                              </Accordion>
                            </div>
                          </Accordion>
                        )}

                        {/* Inline notes */}
                        <InlineNote sectionId={`stay-${stay.id}`} notes={notes} onSave={saveNote} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ═══ FLIGHTS ═══ */}
          <section id="flights" className="scroll-mt-16">
            <Accordion title={<h2 className="bk-section-title"><Plane className="w-4 h-4" /> Flights &mdash; {pendingFlights} to book</h2>} defaultOpen={true}>
              <div className="bk-flights">
                {FLIGHTS.map((f, i) => (
                  <div key={i} className="bk-flight">
                    <div className="bk-flight-top">
                      <span className="bk-flight-who">{f.who}</span>
                      <span className="bk-flight-route">{f.route}</span>
                      <span className="bk-flight-date">{f.date}</span>
                      <StatusBadge status={f.status} />
                    </div>
                    <div className="bk-flight-bottom">
                      <span className="bk-flight-best">{f.best}</span>
                      <span className="bk-flight-alts">{f.alts}</span>
                      <span className="bk-flight-card">{f.cardTip}</span>
                    </div>
                    <InlineNote sectionId={`flight-${i}`} notes={notes} onSave={saveNote} />
                  </div>
                ))}
              </div>
            </Accordion>
          </section>

          {/* ═══ LOGISTICS ═══ */}
          <section id="logistics" className="scroll-mt-16">
            <Accordion title={<h2 className="bk-section-title"><Bookmark className="w-4 h-4" /> Car, Passes & Actions</h2>} defaultOpen={true}>
              <div className="space-y-2">
                {OTHER_ITEMS.map((item, i) => (
                  <div key={i} className="bk-logistic">
                    <div className="bk-logistic-cat">{item.cat}</div>
                    <div className="flex-1">
                      <div className="bk-logistic-top">
                        {item.url ? <ExtLink href={item.url} className="bk-link font-medium">{item.name}</ExtLink> : <span className="font-medium">{item.name}</span>}
                        <span className="bk-logistic-when">{item.when}</span>
                        <StatusBadge status={item.status} />
                      </div>
                      <div className="bk-logistic-detail">{item.detail}</div>
                      <InlineNote sectionId={`item-${i}`} notes={notes} onSave={saveNote} />
                    </div>
                  </div>
                ))}
              </div>
            </Accordion>

            <Accordion title={<h2 className="bk-section-title mt-4"><MapPin className="w-4 h-4" /> Signups Before Booking</h2>}>
              <div className="space-y-1.5">
                {SIGNUPS.map((s, i) => (
                  <div key={i} className="bk-signup">
                    <ExtLink href={s.url} className="bk-link font-medium">{s.name}</ExtLink>
                    <span className="opacity-50">{s.why}</span>
                    <span className="bk-signup-before">{s.before}</span>
                  </div>
                ))}
              </div>
            </Accordion>
          </section>

          {/* Footer */}
          <footer className="bk-footer">
            <a href="/" className="bk-footer-link">Full trip planner</a>
            <span className="opacity-20">&middot;</span>
            <a href="/mom" className="bk-footer-link">Mom&apos;s view</a>
          </footer>
        </main>
      </div>

      {/* ─── Scoped Styles ─── */}
      <style jsx global>{`
        :root {
          --bk-serif: 'Instrument Serif', Georgia, serif;
          --bk-sans: 'DM Sans', system-ui, sans-serif;
          --bk-cream: #FBF7F2;
          --bk-sand: #F0E8DC;
          --bk-warm: #2C2420;
          --bk-muted: #8A7E74;
          --bk-terracotta: #B84C3B;
          --bk-sage: #6B7F5E;
          --bk-sage-light: #E8EDE4;
          --bk-amber: #C8933B;
          --bk-amber-light: #FDF3E0;
          --bk-red-light: #FDE8E8;
          --bk-note-bg: #FFF9E6;
          --bk-note-border: #EAD9A0;
          --bk-colin: #4A7FC2;
          --bk-robin: #9B59B6;
        }

        .bk-page {
          min-height: 100vh;
          background: var(--bk-cream);
          color: var(--bk-warm);
          font-family: var(--bk-sans);
          font-size: 13px;
          line-height: 1.5;
        }

        /* ── Header ── */
        .bk-header {
          background: linear-gradient(135deg, #3D2B1F 0%, #5C3D2E 40%, #7A5240 100%);
          color: #F0E8DC;
          padding: 20px 0 16px;
          position: relative;
          overflow: hidden;
        }
        .bk-header::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 Q15 25 30 30 Q45 35 60 30' fill='none' stroke='%23ffffff08' stroke-width='1'/%3E%3Cpath d='M0 45 Q15 40 30 45 Q45 50 60 45' fill='none' stroke='%23ffffff05' stroke-width='1'/%3E%3Cpath d='M0 15 Q15 10 30 15 Q45 20 60 15' fill='none' stroke='%23ffffff06' stroke-width='1'/%3E%3C/svg%3E");
          pointer-events: none;
        }
        .bk-header-inner { max-width: 780px; margin: 0 auto; padding: 0 20px; position: relative; }
        .bk-header-top { display: flex; justify-content: space-between; align-items: flex-start; }
        .bk-header-right { text-align: right; font-size: 11px; }
        .bk-title { font-family: var(--bk-serif); font-size: 28px; font-weight: 400; letter-spacing: -0.5px; margin: 0; }
        .bk-subtitle { font-size: 12px; opacity: 0.6; margin-top: 2px; }
        .bk-user-tag { font-size: 11px; opacity: 0.7; }
        .bk-user-robin { color: #D4A0E8; font-weight: 600; }
        .bk-user-colin { color: #8CB4E0; font-weight: 600; }
        .bk-switch-user { opacity: 0.4; margin-left: 4px; text-decoration: underline; cursor: pointer; background: none; border: none; color: inherit; font: inherit; }
        .bk-save-status { font-size: 10px; opacity: 0.4; margin-top: 2px; }
        .bk-stats { display: flex; gap: 8px; margin-top: 10px; }
        .bk-stat { font-size: 10px; padding: 2px 8px; border-radius: 20px; font-weight: 500; }
        .bk-stat-booked { background: rgba(107,127,94,0.2); color: #A8C49A; }
        .bk-stat-pending { background: rgba(200,147,59,0.2); color: #E0C080; }

        /* ── Nav ── */
        .bk-nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(251,247,242,0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .bk-nav-inner {
          max-width: 780px;
          margin: 0 auto;
          padding: 6px 20px;
          display: flex;
          align-items: center;
          gap: 4px;
          overflow-x: auto;
          font-size: 11px;
        }
        .bk-nav-link {
          padding: 4px 10px;
          border-radius: 20px;
          background: rgba(0,0,0,0.04);
          color: var(--bk-muted);
          font-weight: 500;
          white-space: nowrap;
          text-decoration: none;
          transition: all 0.15s;
        }
        .bk-nav-link:hover { background: rgba(0,0,0,0.08); color: var(--bk-warm); }
        .bk-nav-divider { width: 1px; height: 16px; background: rgba(0,0,0,0.08); flex-shrink: 0; margin: 0 4px; }
        .bk-nav-city {
          padding: 3px 8px;
          border-radius: 20px;
          font-size: 10px;
          font-weight: 500;
          white-space: nowrap;
          text-decoration: none;
          transition: all 0.15s;
        }
        .bk-nav-city-booked { background: var(--bk-sage-light); color: var(--bk-sage); }
        .bk-nav-city-booked:hover { background: #D8E3D0; }
        .bk-nav-city-pending { background: var(--bk-amber-light); color: var(--bk-amber); }
        .bk-nav-city-pending:hover { background: #F5E8C8; }

        /* ── Main ── */
        .bk-main { max-width: 780px; margin: 0 auto; padding: 20px 20px 40px; }
        .bk-section-title {
          font-family: var(--bk-serif);
          font-size: 18px;
          font-weight: 400;
          color: var(--bk-warm);
          display: flex;
          align-items: center;
          gap: 6px;
          margin: 0 0 12px;
        }

        /* ── Badges ── */
        .bk-badge-booked, .bk-badge-pending, .bk-badge-action {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          font-size: 10px;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 20px;
          white-space: nowrap;
          font-family: var(--bk-sans);
          letter-spacing: 0.3px;
        }
        .bk-badge-booked { background: var(--bk-sage-light); color: var(--bk-sage); }
        .bk-badge-pending { background: var(--bk-amber-light); color: var(--bk-amber); }
        .bk-badge-action { background: var(--bk-red-light); color: var(--bk-terracotta); }

        /* ── Journey timeline ── */
        .bk-journey { position: relative; padding-left: 24px; }
        .bk-stay-wrapper { position: relative; margin-bottom: 16px; }
        .bk-journey-line {
          position: absolute;
          left: 7px;
          top: -16px;
          width: 2px;
          height: 16px;
          background: repeating-linear-gradient(to bottom, var(--bk-sand) 0, var(--bk-sand) 3px, transparent 3px, transparent 6px);
        }
        .bk-journey-dot {
          position: absolute;
          left: 2px;
          top: 14px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--bk-cream);
          border: 2px solid var(--bk-sand);
          z-index: 1;
        }
        .bk-stay-booked .bk-journey-dot + .bk-stay .bk-journey-dot,
        .bk-stay-wrapper:has(.bk-stay-booked) > .bk-journey-dot { border-color: var(--bk-sage); background: var(--bk-sage-light); }
        .bk-stay-wrapper:has(.bk-stay-pending) > .bk-journey-dot { border-color: var(--bk-amber); background: var(--bk-amber-light); }

        /* ── Stay card ── */
        .bk-stay {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(44,36,32,0.06), 0 0 0 1px rgba(44,36,32,0.04);
          transition: box-shadow 0.2s;
        }
        .bk-stay:hover { box-shadow: 0 2px 8px rgba(44,36,32,0.1), 0 0 0 1px rgba(44,36,32,0.06); }
        .bk-stay-booked { border-left: 3px solid var(--bk-sage); }
        .bk-stay-pending { border-left: 3px solid var(--bk-amber); }
        .bk-stay-header { display: flex; align-items: center; justify-content: space-between; padding: 12px 14px; gap: 8px; }
        .bk-stay-header-left { display: flex; align-items: center; gap: 10px; min-width: 0; }
        .bk-stay-emoji { font-size: 20px; flex-shrink: 0; }
        .bk-stay-location { font-family: var(--bk-serif); font-size: 17px; line-height: 1.2; }
        .bk-stay-region { font-family: var(--bk-sans); font-size: 11px; color: var(--bk-muted); margin-left: 6px; font-weight: 400; }
        .bk-stay-dates { font-size: 11px; color: var(--bk-muted); margin-top: 1px; display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
        .bk-stay-drive { display: inline-flex; align-items: center; gap: 3px; opacity: 0.5; }
        .bk-stay-body { padding: 0 14px 12px; font-size: 12px; }
        .bk-stay-schedule { color: var(--bk-muted); font-size: 11px; margin-bottom: 8px; line-height: 1.5; }

        /* ── Booking confirmation ── */
        .bk-booking-conf {
          background: var(--bk-sage-light);
          border-radius: 6px;
          padding: 10px 12px;
          margin-bottom: 8px;
        }
        .bk-booking-name { font-family: var(--bk-serif); font-size: 14px; color: var(--bk-sage); }
        .bk-booking-detail { font-size: 11px; color: var(--bk-muted); margin-top: 3px; }
        .bk-booking-meta { display: flex; flex-wrap: wrap; gap: 12px; font-size: 10px; color: var(--bk-muted); margin-top: 6px; }
        .bk-booking-paid { font-size: 10px; color: var(--bk-muted); margin-top: 3px; opacity: 0.7; }

        /* ── Activities ── */
        .bk-activities { margin-bottom: 8px; }
        .bk-activity { display: flex; align-items: flex-start; gap: 6px; padding: 3px 0; font-size: 11px; }

        /* ── Accordion ── */
        .bk-chevron { transition: transform 0.2s; display: flex; color: var(--bk-muted); }
        .bk-chevron-open { transform: rotate(90deg); }
        .bk-accordion-body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.25s ease;
        }
        .bk-accordion-open { grid-template-rows: 1fr; }
        .bk-accordion-inner { overflow: hidden; }
        .bk-accordion-label { font-size: 11px; font-weight: 500; color: var(--bk-muted); }

        /* ── Day-by-day ── */
        .bk-days { padding: 6px 0 4px 20px; }
        .bk-day { margin-bottom: 8px; }
        .bk-day-title { font-size: 11px; font-weight: 600; color: var(--bk-warm); display: flex; align-items: center; gap: 4px; flex-wrap: wrap; }
        .bk-day-weather { font-weight: 400; color: var(--bk-muted); font-size: 10px; display: inline-flex; align-items: center; gap: 2px; }
        .bk-day-drive { font-size: 10px; color: var(--bk-muted); display: flex; align-items: center; gap: 3px; margin-top: 1px; opacity: 0.6; }
        .bk-day-activity { display: flex; align-items: flex-start; gap: 5px; font-size: 11px; padding: 2px 0; color: var(--bk-warm); }
        .bk-day-cost { color: var(--bk-sage); font-weight: 500; margin-left: 4px; }

        /* ── Search panel ── */
        .bk-search-label { font-size: 11px; font-weight: 600; color: var(--bk-amber); display: flex; align-items: center; gap: 4px; }
        .bk-search-panel { background: var(--bk-amber-light); border-radius: 6px; padding: 10px 12px; margin: 4px 0 0 20px; font-size: 11px; }
        .bk-search-dates { color: var(--bk-muted); margin-bottom: 8px; }
        .bk-search-reqs { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 8px; }
        .bk-search-req-title { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 3px; }
        .bk-search-req-item { font-size: 11px; padding: 1px 0; }
        .bk-wifi-warn { background: rgba(200,147,59,0.15); border-radius: 4px; padding: 6px 8px; font-size: 10px; color: var(--bk-amber); margin-bottom: 6px; }
        .bk-avoid-warn { background: rgba(184,76,59,0.08); border-radius: 4px; padding: 6px 8px; font-size: 10px; color: var(--bk-terracotta); margin-bottom: 6px; font-weight: 500; }
        .bk-search-links { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 6px; }
        .bk-search-link {
          font-size: 10px;
          padding: 3px 8px;
          border-radius: 4px;
          background: white;
          border: 1px solid rgba(0,0,0,0.08);
          color: var(--bk-colin) !important;
          text-decoration: none !important;
          transition: all 0.15s;
        }
        .bk-search-link:hover { background: rgba(74,127,194,0.06); border-color: var(--bk-colin); }

        /* ── Suggestions ── */
        .bk-suggestions { padding: 4px 0 0 20px; }
        .bk-suggestion { display: flex; align-items: baseline; gap: 6px; padding: 3px 0; border-bottom: 1px solid rgba(0,0,0,0.04); font-size: 11px; }
        .bk-suggestion:last-of-type { border-bottom: none; }
        .bk-suggestion-name { font-weight: 500; flex-shrink: 0; }
        .bk-suggestion-price { color: var(--bk-sage); font-weight: 500; flex-shrink: 0; }
        .bk-suggestion-note { color: var(--bk-muted); }
        .bk-budget-range { font-size: 10px; opacity: 0.4; margin-top: 4px; }

        /* ── Notes ── */
        .bk-add-note {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          color: var(--bk-muted);
          opacity: 0.5;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px 0;
          font-family: var(--bk-sans);
          transition: opacity 0.15s;
        }
        .bk-add-note:hover { opacity: 1; color: var(--bk-amber); }
        .bk-note {
          position: relative;
          background: var(--bk-note-bg);
          border: 1px solid var(--bk-note-border);
          border-radius: 2px;
          padding: 8px 10px;
          margin-top: 8px;
          cursor: pointer;
          transition: border-color 0.15s;
          box-shadow: 1px 2px 4px rgba(0,0,0,0.04);
        }
        .bk-note:hover { border-color: #D4C080; }
        .bk-note-pin {
          position: absolute;
          top: -4px;
          left: 14px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--bk-terracotta);
          box-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }
        .bk-note-text { font-size: 12px; white-space: pre-wrap; line-height: 1.5; color: #5A4E3A; }
        .bk-note-meta { font-size: 9px; color: var(--bk-muted); margin-top: 6px; }
        .bk-note-edit {
          position: absolute;
          top: 6px;
          right: 6px;
          opacity: 0;
          transition: opacity 0.15s;
          background: none;
          border: none;
          color: var(--bk-muted);
          cursor: pointer;
        }
        .bk-note:hover .bk-note-edit { opacity: 1; }
        .bk-note-editor { margin-top: 8px; }
        .bk-note-textarea {
          width: 100%;
          background: var(--bk-note-bg);
          border: 1px solid var(--bk-note-border);
          border-radius: 2px;
          padding: 8px 10px;
          font-size: 12px;
          font-family: var(--bk-sans);
          color: #5A4E3A;
          resize: none;
          outline: none;
          min-height: 60px;
          box-shadow: inset 0 1px 3px rgba(0,0,0,0.04);
        }
        .bk-note-textarea:focus { border-color: #D4C080; box-shadow: 0 0 0 2px rgba(212,192,128,0.2); }
        .bk-note-save {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          font-size: 11px;
          font-weight: 500;
          color: var(--bk-sage);
          background: var(--bk-sage-light);
          border: none;
          padding: 3px 10px;
          border-radius: 4px;
          cursor: pointer;
          font-family: var(--bk-sans);
          transition: background 0.15s;
        }
        .bk-note-save:hover { background: #D0DCC8; }
        .bk-note-cancel { font-size: 11px; color: var(--bk-muted); background: none; border: none; cursor: pointer; font-family: var(--bk-sans); }

        /* ── Name modal ── */
        .bk-name-modal {
          background: white;
          border-radius: 12px;
          padding: 24px;
          max-width: 280px;
          width: 100%;
          text-align: center;
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
        }
        .bk-name-modal-title { font-family: var(--bk-serif); font-size: 22px; margin-bottom: 4px; }
        .bk-name-btn {
          flex: 1;
          padding: 10px;
          border: none;
          border-radius: 8px;
          font-family: var(--bk-sans);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.1s, opacity 0.15s;
          color: white;
        }
        .bk-name-btn:hover { transform: scale(1.02); }
        .bk-name-btn:active { transform: scale(0.98); }
        .bk-name-btn-colin { background: var(--bk-colin); }
        .bk-name-btn-robin { background: var(--bk-robin); }

        /* ── Flights ── */
        .bk-flights { display: grid; gap: 6px; margin-top: 8px; }
        .bk-flight {
          background: white;
          border-radius: 8px;
          padding: 10px 12px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.04);
          font-size: 11px;
        }
        .bk-flight-top { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .bk-flight-who { font-weight: 600; }
        .bk-flight-route { color: var(--bk-colin); }
        .bk-flight-date { color: var(--bk-muted); }
        .bk-flight-bottom { margin-top: 3px; display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
        .bk-flight-best { font-weight: 500; color: var(--bk-sage); }
        .bk-flight-alts { color: var(--bk-muted); opacity: 0.6; }
        .bk-flight-card { font-size: 10px; color: var(--bk-robin); }

        /* ── Logistics ── */
        .bk-logistic { display: flex; align-items: flex-start; gap: 8px; background: white; border-radius: 8px; padding: 10px 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.04); }
        .bk-logistic-cat { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; background: rgba(0,0,0,0.04); color: var(--bk-muted); padding: 2px 6px; border-radius: 3px; margin-top: 2px; flex-shrink: 0; }
        .bk-logistic-top { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; font-size: 12px; }
        .bk-logistic-when { font-size: 10px; color: var(--bk-muted); }
        .bk-logistic-detail { font-size: 11px; color: var(--bk-muted); margin-top: 2px; }

        /* ── Signups ── */
        .bk-signup {
          display: flex;
          align-items: baseline;
          gap: 8px;
          font-size: 11px;
          padding: 4px 0;
          border-bottom: 1px solid rgba(0,0,0,0.04);
        }
        .bk-signup:last-child { border-bottom: none; }
        .bk-signup-before { font-size: 10px; color: var(--bk-terracotta); white-space: nowrap; margin-left: auto; flex-shrink: 0; }

        /* ── Links ── */
        .bk-link { color: var(--bk-colin); text-decoration: none; }
        .bk-link:hover { text-decoration: underline; }

        /* ── Footer ── */
        .bk-footer { text-align: center; padding: 24px 0 12px; border-top: 1px solid rgba(0,0,0,0.06); margin-top: 24px; display: flex; justify-content: center; gap: 12px; }
        .bk-footer-link { font-size: 12px; color: var(--bk-muted); text-decoration: none; }
        .bk-footer-link:hover { color: var(--bk-colin); }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .bk-title { font-size: 22px; }
          .bk-stay-location { font-size: 15px; }
          .bk-search-reqs { grid-template-columns: 1fr; }
          .bk-journey { padding-left: 18px; }
          .bk-flight-bottom { flex-direction: column; align-items: flex-start; gap: 2px; }
        }
      `}</style>
    </>
  );
}
