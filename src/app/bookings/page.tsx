'use client';

import { tripData } from '@/data/tripData';
import { format, parseISO } from 'date-fns';
import { ExternalLink, Check, Circle, AlertTriangle, ChevronDown, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';

// ─── Tiny helpers ───
const EL = ({ href, children, c = '' }: { href: string; children: React.ReactNode; c?: string }) =>
  href ? <a href={href} target="_blank" rel="noopener noreferrer" className={`text-blue-600 hover:underline inline-flex items-center gap-0.5 ${c}`}>{children}<ExternalLink className="w-2 h-2 opacity-40" /></a> : <>{children}</>;

const Badge = ({ s }: { s: string }) => {
  if (s === 'booked') return <span className="bk-b bk-b-g"><Check className="w-3 h-3" />Booked</span>;
  if (s === 'pending') return <span className="bk-b bk-b-a"><Circle className="w-3 h-3" />To Book</span>;
  if (s === 'action') return <span className="bk-b bk-b-r"><AlertTriangle className="w-3 h-3" />Action</span>;
  return null;
};

const Row = ({ label, val, cls = '' }: { label: string; val: React.ReactNode; cls?: string }) =>
  val ? <div className={`bk-r ${cls}`}><span className="bk-rl">{label}</span><span className="bk-rv">{val}</span></div> : null;

// ─── Accordion ───
function Acc({ title, open: defaultOpen = false, n, children }: { title: string; open?: boolean; n?: number; children: React.ReactNode }) {
  const [o, setO] = useState(defaultOpen);
  return (
    <div>
      <button onClick={() => setO(!o)} className="bk-acc-btn">
        {o ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
        <span className="bk-acc-t">{title}</span>
        {n !== undefined && <span className="bk-acc-n">{n}</span>}
      </button>
      <div className={`bk-acc-body ${o ? 'bk-acc-open' : ''}`}><div className="overflow-hidden">{children}</div></div>
    </div>
  );
}

// ─── Always-visible editable area (like GSheets cell / OneNote) ───
function NoteArea({ id, label, notes, onSave }: { id: string; label?: string; notes: Record<string, { text: string; updatedAt: string; updatedBy: string }>; onSave: (id: string, text: string) => void }) {
  const existing = notes[id];
  const [text, setText] = useState(existing?.text || '');
  const [dirty, setDirty] = useState(false);
  const [saved, setSaved] = useState(false);
  const ref = useRef<HTMLTextAreaElement>(null);
  const saveTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => { setText(existing?.text || ''); }, [existing?.text]);

  const resize = () => { if (ref.current) { ref.current.style.height = 'auto'; ref.current.style.height = Math.max(56, ref.current.scrollHeight) + 'px'; } };
  useEffect(resize, [text]);

  const doSave = useCallback((val: string) => {
    if (val !== (existing?.text || '')) {
      onSave(id, val);
      setSaved(true);
      setTimeout(() => setSaved(false), 1500);
    }
    setDirty(false);
  }, [id, existing?.text, onSave]);

  const onChange = (val: string) => {
    setText(val);
    setDirty(true);
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => doSave(val), 1500);
  };

  const onBlur = () => { clearTimeout(saveTimer.current); if (dirty) doSave(text); };

  return (
    <div className="bk-area">
      <div className="bk-area-hdr">
        <span className="bk-area-label">{label || 'Notes & Research'}</span>
        {existing?.updatedBy && <span className="bk-area-meta"><span className={existing.updatedBy === 'Robin' ? 'text-purple-600' : 'text-blue-600'}>{existing.updatedBy}</span> {format(parseISO(existing.updatedAt), 'M/d h:mma')}</span>}
        {saved && <span className="bk-area-saved">Saved</span>}
        {dirty && !saved && <span className="bk-area-dirty">Unsaved</span>}
      </div>
      <textarea
        ref={ref}
        value={text}
        onChange={e => onChange(e.target.value)}
        onBlur={onBlur}
        onKeyDown={e => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); clearTimeout(saveTimer.current); doSave(text); } }}
        placeholder="Paste links, compare options, add research... Auto-saves when you click away."
        className="bk-area-ta"
        rows={3}
      />
    </div>
  );
}

// ─── Data ───
const days = tripData.days;

type StayGroup = {
  id: string; loc: string; region: string; dates: string; nights: number; dayNums: number[];
  status: 'booked' | 'pending' | 'action';
  booking: { name: string; conf: string; cost: string; paid: string; details: string } | null;
  bookedActivities: { name: string; status: 'booked' | 'pending' | 'action' | 'info'; detail: string; url: string }[];
  search: {
    checkIn: string; checkOut: string; guests: string;
    mustHave: string[]; niceToHave: string[];
    links: { label: string; url: string }[];
    wifi: string | null; avoid: string | null; budget: string;
  } | null;
};

const STAYS: StayGroup[] = [
  { id:'vegas', loc:'Las Vegas', region:'NV', dates:'Sun 5/10', nights:1, dayNums:[1], status:'booked',
    booking:{ name:'The LINQ Hotel & Casino', conf:'Hotels.com #73410152077445', cost:'$56.63 resort fee (room via OneKeyCash)', paid:'Paid. $56.63 resort fee at check-in.', details:'Deluxe 2Q Non-Smoking. 3535 Las Vegas Blvd S. In 4pm, out 11am.' },
    bookedActivities:[
      { name:'Bacchanal Buffet', status:'booked', detail:'OpenTable res. $65/pp, $80 crab.', url:'https://www.opentable.com/r/bacchanal-buffet-caesars-palace-las-vegas' },
    ], search:null },
  { id:'gc', loc:'Grand Canyon', region:'South Rim, AZ', dates:'Mon-Wed 5/11-13', nights:2, dayNums:[2,3], status:'booked',
    booking:{ name:'Maswik Lodge (In-Park) 20% off', conf:'Xanterra #20514347', cost:'$547.30 ($256/n×2+tax)', paid:'$273.65 dep. Balance at check-in.', details:'Std 2Q North. Inside park.' },
    bookedActivities:[
      { name:'El Tovar lunch', status:'pending', detail:'Tock 30-day window opens Apr 12 6am MST.', url:'https://www.exploretock.com/el-tovar-dining-room---grand-canyon-south-rim' },
    ], search:null },
  { id:'page', loc:'Page', region:'AZ', dates:'Wed-Fri 5/13-15', nights:3, dayNums:[4,5,6], status:'pending', booking:null,
    bookedActivities:[
      { name:'Upper Antelope Canyon', status:'booked', detail:'#FMBYMK Thu 5/14 10am. MOM NEEDS WAIVER.', url:'https://antelopeslotcanyon.com/' },
    ],
    search:{ checkIn:'Wed 5/13', checkOut:'Sat 5/16', guests:'2 adults',
      mustHave:['2BR preferred (1 work day)','WiFi 300Mbps+ (May 15 = FULL WORK DAY)','Central Page (10-15min attractions)'],
      niceToHave:['Kitchen','Desk','Free breakfast'],
      links:[
        {label:'Airbnb 2BR',url:'https://www.airbnb.com/s/Page--AZ/homes?checkin=2026-05-13&checkout=2026-05-16&adults=2&min_bedrooms=2'},
        {label:'VRBO',url:'https://www.vrbo.com/search?destination=Page%2C+AZ&startDate=2026-05-13&endDate=2026-05-16&adults=2'},
        {label:'Hotels.com',url:'https://www.hotels.com/Hotel-Search?destination=Page%2C+AZ&startDate=2026-05-13&endDate=2026-05-16&rooms=1&adults=2'},
        {label:'Booking.com',url:'https://www.booking.com/searchresults.html?ss=Page%2C+Arizona&checkin=2026-05-13&checkout=2026-05-16&group_adults=2&no_rooms=1'},
      ],
      wifi:'Page is rural. Search for "fiber"/"Starlink".', avoid:null, budget:'$270-750 / 3n' }},
  { id:'moab', loc:'Moab', region:'UT', dates:'Sat-Tue 5/16-19', nights:4, dayNums:[7,8,9,10], status:'pending', booking:null, bookedActivities:[],
    search:{ checkIn:'Sat 5/16', checkOut:'Wed 5/20', guests:'2 adults',
      mustHave:['2BR REQUIRED (2+ work days, need door)','WiFi 300Mbps+ (2 work days video calls)','Central Moab (5mi Arches, 32mi Canyonlands)'],
      niceToHave:['Desk/workspace','Kitchen','Pool for Mom'],
      links:[
        {label:'Airbnb 2BR',url:'https://www.airbnb.com/s/Moab--UT/homes?checkin=2026-05-16&checkout=2026-05-20&adults=2&min_bedrooms=2'},
        {label:'VRBO 2BR',url:'https://www.vrbo.com/search?destination=Moab%2C+UT&startDate=2026-05-16&endDate=2026-05-20&adults=2'},
        {label:'Hotels.com',url:'https://www.hotels.com/Hotel-Search?destination=Moab%2C+UT&startDate=2026-05-16&endDate=2026-05-20&rooms=1&adults=2'},
        {label:'Booking.com',url:'https://www.booking.com/searchresults.html?ss=Moab%2C+Utah&checkin=2026-05-16&checkout=2026-05-20&group_adults=2&no_rooms=1'},
      ],
      wifi:'Moab WiFi bad. Search "fiber"/"Starlink".', avoid:'Hyatt Place Moab = 3-5 Mbps. Unusable.', budget:'$800-1850 / 4n' }},
  { id:'slc', loc:'Salt Lake City', region:'UT', dates:'Wed-Sun 5/20-24', nights:4, dayNums:[11,12,13,14], status:'booked',
    booking:{ name:'2BR Airbnb Pool/HotTub/Gym', conf:'Airbnb HMN2P4MBR9', cost:'$1,256.86 ($272/n×4+tax)', paid:'$544 paid 4/1. $712.86 due 5/5.', details:'241 W 200 S, SLC. 2BR, rooftop pool, keypad 4pm, out 10am.' },
    bookedActivities:[], search:null },
  { id:'driggs', loc:'Driggs', region:'Teton Valley, ID', dates:'Sun-Tue 5/24-26', nights:3, dayNums:[15,16,17], status:'pending', booking:null, bookedActivities:[],
    search:{ checkIn:'Sun 5/24', checkOut:'Wed 5/27', guests:'2 adults',
      mustHave:['2BR preferred (1.5 work days)','WiFi 300Mbps+ (Memorial Day = FULL WORK)','Driggs/Victor/Tetonia area'],
      niceToHave:['Teton views','Kitchen','Desk','Pool/spa'],
      links:[
        {label:'Airbnb 2BR',url:'https://www.airbnb.com/s/Driggs--ID/homes?checkin=2026-05-24&checkout=2026-05-27&adults=2&min_bedrooms=2'},
        {label:'VRBO',url:'https://www.vrbo.com/search?destination=Driggs%2C+ID&startDate=2026-05-24&endDate=2026-05-27&adults=2'},
        {label:'Booking.com',url:'https://www.booking.com/searchresults.html?ss=Driggs%2C+Idaho&checkin=2026-05-24&checkout=2026-05-27&group_adults=2&no_rooms=1'},
      ],
      wifi:'Silver Star fiber up to 1Gbps in valley. Ask hosts.', avoid:null, budget:'$450-1800 / 3n' }},
  { id:'yellowstone', loc:'West Yellowstone', region:'MT', dates:'Wed-Thu 5/27-28', nights:2, dayNums:[18,19], status:'pending', booking:null, bookedActivities:[],
    search:{ checkIn:'Wed 5/27', checkOut:'Fri 5/29', guests:'2 adults',
      mustHave:['2 queen beds (no bunks — Mom is 80)','Near park entrance'],
      niceToHave:['Pool/hot tub','Free breakfast','WiFi'],
      links:[
        {label:'Hotels.com',url:'https://www.hotels.com/Hotel-Search?destination=West+Yellowstone%2C+MT&startDate=2026-05-27&endDate=2026-05-29&rooms=1&adults=2'},
        {label:'Booking.com',url:'https://www.booking.com/searchresults.html?ss=West+Yellowstone%2C+Montana&checkin=2026-05-27&checkout=2026-05-29&group_adults=2&no_rooms=1'},
        {label:'VRBO',url:'https://www.vrbo.com/search?destination=West+Yellowstone%2C+MT&startDate=2026-05-27&endDate=2026-05-29&adults=2'},
      ],
      wifi:null, avoid:'Explorer Cabins = bunk beds. Skip.', budget:'$360-560 / 2n' }},
  { id:'glacier', loc:'Glacier NP', region:'Columbia Falls, MT', dates:'Fri-Sun 5/29-31', nights:2, dayNums:[20,21,22], status:'booked',
    booking:{ name:'Apgar Village Lodge (In-Park Cabin)', conf:'#3870048', cost:'$392.26 ($182/n×2+tax)', paid:'$189.22 paid. $203.04 at check-in.', details:'Cabin 3Q, 2 Room. 3 guests. 1-844-868-7474.' },
    bookedActivities:[], search:null },
];

const FLIGHTS = [
  { who:'Colin', route:'SEA→LAS', date:'Sun 5/10', best:'$81 Alaska nonstop 2:45pm', alts:'$67 Frontier (no bags), $89 Delta', card:'Cap1→Alaska MP' },
  { who:'Mom', route:'YYZ→LAS', date:'Sun 5/10', best:'$129 Air Canada nonstop 8:35pm', alts:'$228 Porter (comfiest)', card:'Amex Plat 5x' },
  { who:'Robin', route:'SEA→FCA', date:'Fri 5/29', best:'$127 Alaska 1:13pm nonstop', alts:'$152 Alaska 9:35pm', card:'Cap1 or Chase' },
  { who:'C+R', route:'FCA→SEA', date:'Sun 5/31', best:'$152/ea Alaska 11:33am', alts:'$167/ea 6:15am', card:'Cap1→Alaska MP' },
  { who:'Mom', route:'FCA→YYZ', date:'Sun 5/31', best:'$286 United via DEN 6:20am', alts:'$289 Alaska via SEA', card:'Chase 1.5x' },
];

const LOGISTICS = [
  { cat:'Car', name:'Rental SUV LAS→FCA 21d', detail:'AWD one-way. National Emerald, AARP 30%, AutoSlash. ~$1,040. Chase Sapphire = insurance. Decline CDW.', url:'https://www.autoslash.com', when:'5/10-31', status:'pending' as const },
  { cat:'Pass', name:'America the Beautiful $80', detail:"Colin's pass covers all. Saves $250 across 6 parks.", url:'https://store.usgs.gov/pass/annual', when:'Before 5/10', status:'pending' as const },
  { cat:'!!', name:"Mom's Antelope Waiver", detail:'MOM STILL NEEDS TO SIGN. Check email.', url:'', when:'ASAP', status:'action' as const },
];

const SIGNUPS = [
  { name:'AARP ($12/yr)', why:'30% car, 10% hotels, Hilton Silver', when:'Before booking', url:'https://www.aarp.org/membership/' },
  { name:'Hilton Honors', why:'Member rates + AARP Silver', when:'Before Page', url:'https://www.hilton.com/en/hilton-honors/' },
  { name:'National Emerald Club', why:'Waive drop fee, skip counter', when:'Before car', url:'https://www.nationalcar.com/en/loyalty/program.html' },
  { name:'Tock account', why:'El Tovar window Apr 12', when:'Before 4/12', url:'https://www.exploretock.com/' },
  { name:'Google Flights alerts', why:'Track prices', when:'ASAP', url:'https://www.google.com/travel/flights' },
];

// ─── Page ───
export default function BookingsPage() {
  const [notes, setNotes] = useState<Record<string, { text: string; updatedAt: string; updatedBy: string }>>({});
  const [saving, setSaving] = useState(false);
  const [user, setUser] = useState('');
  const [showPick, setShowPick] = useState(false);

  useEffect(() => {
    fetch('/api/bookings-notes').then(r => r.json()).then(d => setNotes(d.notes || {})).catch(() => {});
    const u = localStorage.getItem('bookings-user-name');
    if (u) setUser(u); else setShowPick(true);
  }, []);

  const saveNote = useCallback(async (sid: string, text: string) => {
    if (!user) { setShowPick(true); return; }
    setSaving(true);
    try {
      const r = await fetch('/api/bookings-notes', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ sectionId:sid, text, updatedBy:user }) });
      const d = await r.json();
      if (d.notes) setNotes(d.notes);
    } catch {}
    setSaving(false);
  }, [user]);

  const pick = (n: string) => { setUser(n); localStorage.setItem('bookings-user-name', n); setShowPick(false); };

  const bc = STAYS.filter(s => s.status === 'booked').length;
  const pc = STAYS.filter(s => s.status === 'pending').length;
  const fc = FLIGHTS.length;

  return (<>
    {/* eslint-disable-next-line @next/next/no-page-custom-font */}
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300..600&family=DM+Mono:wght@400&display=swap" rel="stylesheet" />

    <div className="bk">
      {showPick && <div className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center"><div className="bg-white rounded-lg p-5 shadow-xl max-w-[240px] w-full text-center"><div className="text-sm font-semibold mb-3">Who&apos;s editing?</div><div className="flex gap-2"><button onClick={()=>pick('Colin')} className="flex-1 py-2 bg-blue-600 text-white rounded text-sm font-medium">Colin</button><button onClick={()=>pick('Robin')} className="flex-1 py-2 bg-purple-600 text-white rounded text-sm font-medium">Robin</button></div></div></div>}

      {/* Header bar */}
      <div className="bk-hdr">
        <div className="bk-hdr-in">
          <span className="font-semibold">Trip Booking HQ</span>
          <span className="opacity-50 mx-2">LAS→GNP May 10-31</span>
          <span className="bk-b bk-b-g ml-1">{bc} booked</span>
          <span className="bk-b bk-b-a ml-1">{pc} hotels</span>
          <span className="bk-b bk-b-a ml-1">{fc} flights</span>
          <span className="ml-auto text-[11px]">
            {user && <><span className={user==='Robin'?'text-purple-600':'text-blue-600'}>{user}</span> <button onClick={()=>setShowPick(true)} className="opacity-40 hover:opacity-100">(switch)</button></>}
            {saving && <span className="ml-2 opacity-40">saving...</span>}
          </span>
        </div>
      </div>

      {/* Nav */}
      <nav className="bk-nav">
        <div className="bk-nav-in scrollbar-hide">
          <a href="#stays" className="bk-nl">Hotels</a>
          <a href="#flights" className="bk-nl">Flights</a>
          <a href="#logistics" className="bk-nl">Logistics</a>
          {STAYS.map(s=><a key={s.id} href={`#s-${s.id}`} className={`bk-nc ${s.status==='booked'?'bk-nc-g':'bk-nc-a'}`}>{s.loc}</a>)}
        </div>
      </nav>

      <main className="bk-main">
        {/* ═══ STAYS TABLE ═══ */}
        <section id="stays">
          {STAYS.map(stay => {
            const stayDays = days.filter(d => stay.dayNums.includes(d.dayNumber));
            const accomOpts = stayDays[0]?.accommodationOptions || [];
            type BSum = { accommodation: number; food: number; activities: number; gas: number; total: number };
            const totalBudget = stayDays.reduce<BSum>((s,d) => {
              const b = d.budgetBreakdown;
              return { accommodation: s.accommodation+(b?.accommodation??0), food: s.food+(b?.food??0), activities: s.activities+(b?.activities??0), gas: s.gas+(b?.gas??0), total: s.total+(b?.total??0) };
            }, { accommodation:0, food:0, activities:0, gas:0, total:0 });

            return (
              <div key={stay.id} id={`s-${stay.id}`} className={`bk-card ${stay.status==='booked'?'bk-card-g':'bk-card-a'}`}>
                {/* Title row */}
                <div className="bk-card-hdr">
                  <span className="font-semibold">{stay.loc}</span>
                  <span className="opacity-40 ml-1">{stay.region}</span>
                  <span className="opacity-30 mx-1.5">|</span>
                  <span>{stay.dates}</span>
                  <span className="opacity-40 ml-1">{stay.nights}n</span>
                  {stayDays[0]?.drivingDistance && <span className="opacity-30 ml-1.5">{stayDays[0].drivingDistance} / {stayDays[0].drivingTime}</span>}
                  <span className="ml-auto"><Badge s={stay.status} /></span>
                </div>

                <div className="bk-card-body">
                  {/* Booking confirmation */}
                  {stay.booking && (
                    <div className="bk-conf">
                      <Row label="Hotel" val={<strong>{stay.booking.name}</strong>} />
                      <Row label="Conf#" val={stay.booking.conf} />
                      <Row label="Cost" val={stay.booking.cost} />
                      <Row label="Paid" val={stay.booking.paid} />
                      <Row label="Details" val={stay.booking.details} />
                    </div>
                  )}

                  {/* Booked activities */}
                  {stay.bookedActivities.map((a,i) => (
                    <div key={i} className="bk-act">
                      <Badge s={a.status} />
                      <span className="font-medium ml-1">{a.name}</span>
                      {a.detail && <span className="opacity-50 ml-1">{a.detail}</span>}
                      {a.url && <EL href={a.url} c="text-[10px] ml-1">link</EL>}
                    </div>
                  ))}

                  {/* Day-by-day (collapsed) */}
                  <Acc title="Day-by-day itinerary" n={stayDays.length}>
                    <table className="bk-tbl">
                      <thead><tr>
                        <th>Day</th><th>Date</th><th>Title</th><th>Drive</th><th>Weather</th><th>Budget</th>
                      </tr></thead>
                      <tbody>
                        {stayDays.map(d => (
                          <tr key={d.id}>
                            <td className="font-medium">{d.dayNumber}</td>
                            <td className="whitespace-nowrap">{format(parseISO(d.date), 'EEE M/d')}</td>
                            <td>{d.title}</td>
                            <td className="whitespace-nowrap opacity-40">{d.drivingDistance ? `${d.drivingDistance} / ${d.drivingTime}` : '-'}</td>
                            <td className="whitespace-nowrap opacity-40">{d.weather ? `${d.weather.high}°/${d.weather.low}° ${d.weather.conditions}` : '-'}</td>
                            <td className="whitespace-nowrap">{d.budgetBreakdown ? `$${d.budgetBreakdown.total}` : '-'}</td>
                          </tr>
                        ))}
                        {stayDays.length > 1 && <tr className="font-medium border-t border-gray-200">
                          <td colSpan={5} className="text-right opacity-40">Total est.</td>
                          <td>${totalBudget.total} <span className="opacity-30">(acc ${totalBudget.accommodation} + food ${totalBudget.food} + act ${totalBudget.activities} + gas ${totalBudget.gas})</span></td>
                        </tr>}
                      </tbody>
                    </table>

                    {/* Activities per day */}
                    {stayDays.map(d => (
                      <Acc key={d.id} title={`Day ${d.dayNumber} activities`} n={d.activities.length}>
                        <table className="bk-tbl">
                          <thead><tr><th>Activity</th><th>Time</th><th>Dur</th><th>Diff</th><th>Cost</th><th>Res?</th><th>Link</th></tr></thead>
                          <tbody>{d.activities.map(a => (
                            <tr key={a.id}>
                              <td className="font-medium">{a.name}</td>
                              <td className="whitespace-nowrap">{a.startTime || '-'}</td>
                              <td className="whitespace-nowrap">{a.duration}</td>
                              <td><span className={`bk-diff-${a.difficulty}`}>{a.difficulty}</span></td>
                              <td>{a.cost || '-'}</td>
                              <td>{a.reservationRequired ? 'Yes' : '-'}</td>
                              <td>{a.url ? <EL href={a.url}>info</EL> : a.directionsUrl ? <EL href={a.directionsUrl}>map</EL> : '-'}</td>
                            </tr>
                          ))}</tbody>
                        </table>
                      </Acc>
                    ))}
                  </Acc>

                  {/* Accommodation options (collapsed) */}
                  {accomOpts.length > 0 && (
                    <Acc title="Accommodation options" n={accomOpts.length}>
                      <table className="bk-tbl">
                        <thead><tr><th>Name</th><th>Type</th><th>$/n</th><th>Range</th><th>Rating</th><th>Amenities</th><th>Notes</th><th>Link</th></tr></thead>
                        <tbody>{accomOpts.map(a => (
                          <tr key={a.id} className={a.recommended ? 'bg-green-50/50' : ''}>
                            <td className="font-medium whitespace-nowrap">{a.recommended && '★ '}{a.name.replace(/ — .+/,'').replace(/ BOOKED/,'')}</td>
                            <td>{a.type}</td>
                            <td className="whitespace-nowrap">{a.pricePerNight ? `$${a.pricePerNight}` : '-'}</td>
                            <td className="whitespace-nowrap">{a.priceRange}</td>
                            <td className="whitespace-nowrap">{a.reviewRating ? `${a.reviewRating}/5` : '-'}{a.reviewSource ? <span className="opacity-30 ml-1">{a.reviewSource}</span> : ''}</td>
                            <td className="text-[10px]">{a.amenities?.join(', ') || '-'}</td>
                            <td className="text-[10px] max-w-[200px]">{a.notes || '-'}</td>
                            <td>{a.website ? <EL href={a.website}>site</EL> : '-'}{a.bookingUrl ? <> <EL href={a.bookingUrl}>book</EL></> : ''}</td>
                          </tr>
                        ))}</tbody>
                      </table>
                    </Acc>
                  )}

                  {/* Search criteria for pending stays */}
                  {stay.search && (
                    <div className="bk-search">
                      <div className="bk-search-hdr">Search: {stay.search.checkIn} → {stay.search.checkOut} &middot; {stay.search.guests} &middot; <strong>Budget {stay.search.budget}</strong></div>

                      <div className="bk-search-grid">
                        <div>
                          <div className="bk-search-lbl">Must Have</div>
                          {stay.search.mustHave.map((m,i) => <div key={i} className="bk-search-item">&#x2022; {m}</div>)}
                        </div>
                        <div>
                          <div className="bk-search-lbl opacity-50">Nice to Have</div>
                          {stay.search.niceToHave.map((m,i) => <div key={i} className="bk-search-item opacity-50">&#x2022; {m}</div>)}
                        </div>
                      </div>

                      {stay.search.wifi && <div className="bk-warn-y">{stay.search.wifi}</div>}
                      {stay.search.avoid && <div className="bk-warn-r">{stay.search.avoid}</div>}

                      <div className="flex flex-wrap gap-1 mt-1">
                        {stay.search.links.map((l,i) => <EL key={i} href={l.url} c="bk-sl">{l.label}</EL>)}
                      </div>
                    </div>
                  )}

                  {/* Notes */}
                  <NoteArea id={`stay-${stay.id}`} notes={notes} onSave={saveNote} />
                </div>
              </div>
            );
          })}
        </section>

        {/* ═══ FLIGHTS TABLE ═══ */}
        <section id="flights" className="mt-4">
          <div className="bk-sec-t">Flights</div>
          <table className="bk-tbl">
            <thead><tr><th>Who</th><th>Route</th><th>Date</th><th>Best Price</th><th>Alternatives</th><th>Card</th></tr></thead>
            <tbody>{FLIGHTS.map((f,i) => (
              <tr key={i}>
                <td className="font-medium">{f.who}</td>
                <td className="whitespace-nowrap"><EL href="https://www.google.com/travel/flights">{f.route}</EL></td>
                <td className="whitespace-nowrap">{f.date}</td>
                <td className="text-green-700 font-medium whitespace-nowrap">{f.best}</td>
                <td className="opacity-50">{f.alts}</td>
                <td className="text-purple-600 text-[10px] whitespace-nowrap">{f.card}</td>
              </tr>
            ))}</tbody>
          </table>
          <NoteArea id="flights-notes" label="Flight research & booking notes" notes={notes} onSave={saveNote} />
        </section>

        {/* ═══ LOGISTICS TABLE ═══ */}
        <section id="logistics" className="mt-4">
          <div className="bk-sec-t">Car, Passes & Actions</div>
          <table className="bk-tbl">
            <thead><tr><th>Cat</th><th>Item</th><th>When</th><th>Details</th><th>Status</th></tr></thead>
            <tbody>{LOGISTICS.map((l,i) => (
              <tr key={i}>
                <td className="text-[10px] font-bold opacity-40">{l.cat}</td>
                <td className="font-medium whitespace-nowrap">{l.url ? <EL href={l.url}>{l.name}</EL> : l.name}</td>
                <td className="whitespace-nowrap">{l.when}</td>
                <td>{l.detail}</td>
                <td><Badge s={l.status} /></td>
              </tr>
            ))}</tbody>
          </table>
          <NoteArea id="logistics-notes" label="Car rental & logistics notes" notes={notes} onSave={saveNote} />
        </section>

        {/* ═══ SIGNUPS TABLE ═══ */}
        <section className="mt-4">
          <Acc title="Signups — Before Booking" n={SIGNUPS.length}>
            <table className="bk-tbl">
              <thead><tr><th>Signup</th><th>Why</th><th>When</th></tr></thead>
              <tbody>{SIGNUPS.map((s,i) => (
                <tr key={i}>
                  <td className="font-medium whitespace-nowrap"><EL href={s.url}>{s.name}</EL></td>
                  <td className="opacity-60">{s.why}</td>
                  <td className="whitespace-nowrap text-red-600">{s.when}</td>
                </tr>
              ))}</tbody>
            </table>
          </Acc>
        </section>

        {/* Footer */}
        <div className="text-center mt-6 pb-4 text-[11px] opacity-30">
          <a href="/" className="hover:opacity-100">Full planner</a>
          <span className="mx-2">&middot;</span>
          <a href="/mom" className="hover:opacity-100">Mom&apos;s view</a>
        </div>
      </main>
    </div>

    <style jsx global>{`
      :root { --g: #22804A; --gl: #E8F5E9; --a: #B8860B; --al: #FFF8E1; --r: #C62828; --rl: #FDE8E8; }
      .bk { min-height:100vh; background:#fff; color:#1a1a1a; font-family:'DM Sans',system-ui,sans-serif; font-size:12px; line-height:1.45; }

      /* Header */
      .bk-hdr { background:#f8f8f8; border-bottom:1px solid #e8e8e8; font-size:12px; position:sticky; top:0; z-index:60; }
      .bk-hdr-in { max-width:1200px; margin:0 auto; padding:6px 16px; display:flex; align-items:center; flex-wrap:wrap; gap:2px; }

      /* Nav */
      .bk-nav { position:sticky; top:33px; z-index:50; background:#fff; border-bottom:1px solid #eee; }
      .bk-nav-in { max-width:1200px; margin:0 auto; padding:4px 16px; display:flex; gap:3px; overflow-x:auto; font-size:11px; }
      .bk-nl { padding:2px 8px; border-radius:3px; background:#f5f5f5; color:#666; text-decoration:none; white-space:nowrap; }
      .bk-nl:hover { background:#eee; color:#333; }
      .bk-nc { padding:2px 6px; border-radius:3px; font-size:10px; font-weight:500; text-decoration:none; white-space:nowrap; }
      .bk-nc-g { background:var(--gl); color:var(--g); }
      .bk-nc-a { background:var(--al); color:var(--a); }

      /* Main */
      .bk-main { max-width:1200px; margin:0 auto; padding:12px 16px; }

      /* Badges */
      .bk-b { display:inline-flex; align-items:center; gap:2px; font-size:10px; font-weight:600; padding:1px 6px; border-radius:3px; white-space:nowrap; }
      .bk-b-g { background:var(--gl); color:var(--g); }
      .bk-b-a { background:var(--al); color:var(--a); }
      .bk-b-r { background:var(--rl); color:var(--r); }

      /* Cards */
      .bk-card { border:1px solid #e8e8e8; border-radius:4px; margin-bottom:8px; scroll-margin-top:80px; }
      .bk-card-g { border-left:3px solid var(--g); }
      .bk-card-a { border-left:3px solid var(--a); }
      .bk-card-hdr { display:flex; align-items:center; padding:6px 10px; background:#fafafa; border-bottom:1px solid #f0f0f0; font-size:12px; flex-wrap:wrap; gap:2px; }
      .bk-card-body { padding:6px 10px; }

      /* Rows */
      .bk-r { display:flex; gap:6px; padding:1px 0; font-size:11px; }
      .bk-rl { color:#999; min-width:50px; flex-shrink:0; text-align:right; }
      .bk-rv { flex:1; }

      /* Confirmation */
      .bk-conf { background:var(--gl); border-radius:3px; padding:6px 8px; margin-bottom:6px; }

      /* Activities */
      .bk-act { display:flex; align-items:center; gap:4px; padding:2px 0; font-size:11px; flex-wrap:wrap; }

      /* Accordion */
      .bk-acc-btn { display:flex; align-items:center; gap:3px; font-size:11px; color:#666; padding:3px 0; background:none; border:none; cursor:pointer; font-family:inherit; width:100%; text-align:left; }
      .bk-acc-btn:hover { color:#333; }
      .bk-acc-t { font-weight:500; }
      .bk-acc-n { font-size:10px; background:#f0f0f0; border-radius:3px; padding:0 4px; color:#999; }
      .bk-acc-body { display:grid; grid-template-rows:0fr; transition:grid-template-rows 0.2s; }
      .bk-acc-open { grid-template-rows:1fr; }

      /* Tables */
      .bk-tbl { width:100%; border-collapse:collapse; font-size:11px; margin:4px 0; }
      .bk-tbl th { text-align:left; padding:3px 6px; font-weight:500; color:#999; font-size:10px; border-bottom:1px solid #e8e8e8; white-space:nowrap; text-transform:uppercase; letter-spacing:0.3px; }
      .bk-tbl td { padding:3px 6px; border-bottom:1px solid #f5f5f5; vertical-align:top; }
      .bk-tbl tr:hover td { background:#fafafa; }
      .bk-tbl tbody tr:last-child td { border-bottom:none; }

      /* Difficulty */
      .bk-diff-easy { color:var(--g); }
      .bk-diff-moderate { color:var(--a); }
      .bk-diff-challenging { color:var(--r); }

      /* Search panel */
      .bk-search { background:var(--al); border-radius:3px; padding:6px 8px; margin-top:4px; }
      .bk-search-hdr { font-size:11px; font-weight:500; color:var(--a); margin-bottom:4px; }
      .bk-search-grid { display:grid; grid-template-columns:1fr 1fr; gap:6px; }
      .bk-search-lbl { font-size:10px; font-weight:600; text-transform:uppercase; letter-spacing:0.3px; margin-bottom:2px; }
      .bk-search-item { font-size:11px; padding:1px 0; }
      .bk-sl { font-size:10px; padding:2px 6px; background:#fff; border:1px solid #ddd; border-radius:3px; text-decoration:none !important; color:#2563eb !important; }
      .bk-sl:hover { border-color:#2563eb; }
      .bk-warn-y { font-size:10px; background:rgba(184,134,11,0.08); padding:3px 6px; border-radius:2px; color:var(--a); margin-top:4px; }
      .bk-warn-r { font-size:10px; background:rgba(198,40,40,0.06); padding:3px 6px; border-radius:2px; color:var(--r); font-weight:500; margin-top:4px; }

      /* Section titles */
      .bk-sec-t { font-size:13px; font-weight:600; margin-bottom:4px; }

      /* Notes area (always-visible, auto-save) */
      .bk-area { margin-top:6px; border:1px solid #e8e8e8; border-radius:4px; background:#FEFEF8; }
      .bk-area-hdr { display:flex; align-items:center; gap:6px; padding:4px 8px; border-bottom:1px solid #f0f0f0; background:#FAFAF2; border-radius:4px 4px 0 0; }
      .bk-area-label { font-size:10px; font-weight:600; text-transform:uppercase; letter-spacing:0.3px; color:#999; }
      .bk-area-meta { font-size:9px; color:#bbb; margin-left:auto; }
      .bk-area-saved { font-size:9px; color:var(--g); font-weight:500; animation:bk-fade 1.5s forwards; }
      .bk-area-dirty { font-size:9px; color:var(--a); }
      @keyframes bk-fade { 0%{opacity:1} 70%{opacity:1} 100%{opacity:0} }
      .bk-area-ta {
        width:100%; min-height:56px; padding:8px 10px; border:none; border-radius:0 0 4px 4px;
        font-size:12px; font-family:'DM Sans',system-ui,sans-serif; line-height:1.5;
        color:#333; background:#FEFEF8; resize:vertical; outline:none;
      }
      .bk-area-ta:focus { background:#FFFFF0; box-shadow:inset 0 0 0 1px #E8D44D; }
      .bk-area-ta::placeholder { color:#ccc; }

      @media(max-width:768px) {
        .bk-search-grid { grid-template-columns:1fr; }
        .bk-tbl { font-size:10px; }
        .bk-tbl th, .bk-tbl td { padding:2px 4px; }
      }
    `}</style>
  </>);
}
