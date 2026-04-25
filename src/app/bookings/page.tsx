'use client';

import { tripData } from '@/data/tripData';
import { format, parseISO } from 'date-fns';
import { ExternalLink, Check, Circle, AlertTriangle, ChevronDown, ChevronRight, Plus, X } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';

// ─── Types ───
type BData = {
  notes: Record<string, { text: string; updatedAt: string; updatedBy: string }>;
  statuses: Record<string, string>;
  customItems: Record<string, { name: string; price?: string; link?: string; note?: string; addedBy: string; addedAt: string }[]>;
  checks: Record<string, boolean>;
};
const emptyData: BData = { notes: {}, statuses: {}, customItems: {}, checks: {} };

// ─── Helpers ───
const EL = ({ href, children, c = '' }: { href: string; children: React.ReactNode; c?: string }) =>
  href ? <a href={href} target="_blank" rel="noopener noreferrer" className={`text-blue-600 hover:underline inline-flex items-center gap-0.5 ${c}`}>{children}<ExternalLink className="w-2 h-2 opacity-40" /></a> : <>{children}</>;

// ─── Clickable Badge ───
function Badge({ s, id, data, onToggle }: { s: string; id?: string; data?: BData; onToggle?: (id: string, newStatus: string) => void }) {
  const actual = (id && data?.statuses[id]) || s;
  const clickable = !!(id && onToggle);
  const next = actual === 'booked' ? 'pending' : actual === 'pending' ? 'booked' : actual === 'done' ? 'pending' : 'done';

  const base = 'bk-b';
  const cls = actual === 'booked' || actual === 'done' ? `${base} bk-b-g` : actual === 'action' ? `${base} bk-b-r` : `${base} bk-b-a`;
  const label = actual === 'booked' ? 'Booked' : actual === 'done' ? 'Done' : actual === 'action' ? 'Action' : 'To Book';
  const Icon = actual === 'booked' || actual === 'done' ? Check : actual === 'action' ? AlertTriangle : Circle;

  const el = <span className={`${cls} ${clickable ? 'cursor-pointer hover:opacity-80' : ''}`}
    onClick={clickable ? () => onToggle(id, next) : undefined}
    title={clickable ? `Click to mark ${next}` : undefined}
  ><Icon className="w-3 h-3" />{label}</span>;
  return el;
}

const Row = ({ label, val }: { label: string; val: React.ReactNode }) =>
  val ? <div className="bk-r"><span className="bk-rl">{label}</span><span className="bk-rv">{val}</span></div> : null;

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

// ─── Auto-expanding note area ───
function NoteArea({ id, label, data, onSave }: { id: string; label?: string; data: BData; onSave: (text: string) => void }) {
  const existing = data.notes[id];
  const [text, setText] = useState(existing?.text || '');
  const [dirty, setDirty] = useState(false);
  const [saved, setSaved] = useState(false);
  const ref = useRef<HTMLTextAreaElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => { setText(existing?.text || ''); }, [existing?.text]);
  useEffect(() => {
    if (ref.current) { ref.current.style.height = '0'; ref.current.style.height = Math.max(60, ref.current.scrollHeight) + 'px'; }
  }, [text]);

  const doSave = useCallback((val: string) => {
    if (val !== (existing?.text || '')) { onSave(val); setSaved(true); setTimeout(() => setSaved(false), 2000); }
    setDirty(false);
  }, [existing?.text, onSave]);

  const onChange = (val: string) => {
    setText(val); setDirty(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => doSave(val), 2000);
  };

  return (
    <div className="bk-area">
      <div className="bk-area-hdr">
        <span className="bk-area-label">{label || 'Notes & Research'}</span>
        {existing?.updatedBy && <span className="bk-area-meta"><span className={existing.updatedBy === 'Robin' ? 'text-purple-600' : 'text-blue-600'}>{existing.updatedBy}</span> {format(parseISO(existing.updatedAt), 'M/d h:mma')}</span>}
        {saved && <span className="bk-area-saved">Saved</span>}
        {dirty && !saved && <span className="bk-area-dirty">editing...</span>}
      </div>
      <textarea ref={ref} value={text}
        onChange={e => onChange(e.target.value)}
        onBlur={() => { clearTimeout(timer.current); if (dirty) doSave(text); }}
        onKeyDown={e => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); clearTimeout(timer.current); doSave(text); } }}
        placeholder="Paste links, compare options, add research... Auto-saves on blur."
        className="bk-area-ta" />
    </div>
  );
}

// ─── Add Custom Item (inline row) ───
function AddItemRow({ listId, user, onAdd }: { listId: string; user: string; onAdd: (listId: string, item: { name: string; price?: string; link?: string; note?: string; addedBy: string }) => void }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [link, setLink] = useState('');
  const [note, setNote] = useState('');

  const submit = () => {
    if (!name.trim()) return;
    onAdd(listId, { name: name.trim(), price: price.trim() || undefined, link: link.trim() || undefined, note: note.trim() || undefined, addedBy: user });
    setName(''); setPrice(''); setLink(''); setNote(''); setOpen(false);
  };

  if (!open) return <button onClick={() => setOpen(true)} className="bk-add-btn"><Plus className="w-3 h-3" />Add option found</button>;

  return (
    <div className="bk-add-form">
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name (e.g. Hampton Inn Page)" className="bk-add-input bk-add-name" onKeyDown={e => e.key === 'Enter' && submit()} />
      <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" className="bk-add-input bk-add-price" />
      <input value={link} onChange={e => setLink(e.target.value)} placeholder="URL" className="bk-add-input bk-add-link" />
      <input value={note} onChange={e => setNote(e.target.value)} placeholder="Notes" className="bk-add-input bk-add-note" onKeyDown={e => e.key === 'Enter' && submit()} />
      <button onClick={submit} className="bk-add-save">Add</button>
      <button onClick={() => setOpen(false)} className="bk-add-cancel"><X className="w-3 h-3" /></button>
    </div>
  );
}

// ─── Data ───
const days = tripData.days;

const STAYS: { id:string; loc:string; region:string; dates:string; nights:number; dayNums:number[]; status:'booked'|'pending'; booking:{ name:string; conf:string; cost:string; paid:string; details:string }|null; acts:{ name:string; status:string; detail:string; url:string }[]; search:{ ci:string; co:string; g:string; must:string[]; nice:string[]; links:{ l:string; u:string }[]; wifi:string|null; avoid:string|null; budget:string }|null }[] = [
  { id:'vegas', loc:'Las Vegas', region:'NV', dates:'Sun 5/10', nights:1, dayNums:[1], status:'booked' as const,
    booking:{ name:'The LINQ Hotel & Casino', conf:'Hotels.com #73410152077445', cost:'$56.63 resort fee (room via OneKeyCash)', paid:'Paid. $56.63 resort fee at check-in.', details:'Deluxe 2Q Non-Smoking. 3535 Las Vegas Blvd S. In 4pm, out 11am.' },
    acts:[{ name:'Bacchanal Buffet', status:'booked', detail:'OpenTable res. $65/pp, $80 crab.', url:'https://www.opentable.com/r/bacchanal-buffet-caesars-palace-las-vegas' }],
    search:null },
  { id:'gc', loc:'Grand Canyon', region:'South Rim, AZ', dates:'Mon-Wed 5/11-13', nights:2, dayNums:[2,3], status:'booked' as const,
    booking:{ name:'Maswik Lodge (In-Park) 20% off', conf:'Xanterra #20514347', cost:'$547.30 ($256/n×2+tax)', paid:'$273.65 dep. Balance at check-in.', details:'Std 2Q North. Inside park.' },
    acts:[],
    search:null },
  { id:'page', loc:'Page', region:'AZ', dates:'Wed-Sat 5/13-16', nights:3, dayNums:[4,5,6], status:'booked' as const,
    booking:{ name:'2BR Home 5min from Antelope', conf:'Airbnb HMYET8RCAK', cost:'$669.27 ($170.67/n×3+fees)', paid:'$669.27 paid 4/15 (Visa 6386). Cancel partial refund before 5/6.', details:'871 Sandpiper Dr, Page AZ 86040. Hosted by Sarah & Jeremy. In 3pm, out 11am.' },
    acts:[{ name:'Upper Antelope Canyon', status:'booked', detail:'#FMBYMK Thu 5/14 10am. MOM NEEDS WAIVER.', url:'https://antelopeslotcanyon.com/' }],
    search:null },
  { id:'moab', loc:'Moab', region:'UT', dates:'Sat-Wed 5/16-20', nights:4, dayNums:[7,8,9,10], status:'booked' as const,
    booking:{ name:'HotTub/Pool/Kitchen/Views/Patio Airbnb', conf:'Airbnb HMAW5TWC9Q', cost:'$1,778.43 ($392/n×4+fees)', paid:'$784 paid 4/15. $994.43 due 5/1 (Visa 6386). Cancel before 5/9.', details:'3442 Tierra del Sol Dr, Moab UT 84532. Hosted by Patrick & Angie. In 4pm, out 10am. Smart lock.' },
    acts:[],
    search:null },
  { id:'slc', loc:'Salt Lake City', region:'UT', dates:'Wed-Sun 5/20-24', nights:4, dayNums:[11,12,13,14], status:'booked' as const,
    booking:{ name:'2BR Airbnb Pool/HotTub/Gym', conf:'Airbnb HMN2P4MBR9', cost:'$1,256.86 ($272/n×4+tax)', paid:'$544 paid 4/1. $712.86 due 5/5.', details:'241 W 200 S, SLC. 2BR, rooftop pool, keypad 4pm, out 10am.' },
    acts:[], search:null },
  { id:'driggs', loc:'Driggs', region:'Teton Valley, ID', dates:'Sun-Wed 5/24-27', nights:3, dayNums:[15,16,17], status:'booked' as const,
    booking:{ name:'Mountain Modern Victor House', conf:'Airbnb HM2FC8WSJ8', cost:'$885.47 ($381.67/n×3, $460 off!)', paid:'$885.47 paid 4/15 (Visa 6386). Non-refundable.', details:'8487 Caribou Ct, Victor ID 83455. Hosted by Cristine. In 4pm, out 10am. Keypad.' },
    acts:[],
    search:null },
  { id:'yellowstone', loc:'West Yellowstone', region:'MT', dates:'Wed-Fri 5/27-29', nights:2, dayNums:[18,19], status:'booked' as const,
    booking:{ name:'Crosswinds Inn (2Q, Breakfast Incl)', conf:'Booking.com #5288855262 PIN:3523', cost:'$657.18 ($291.60/n+tax+fees)', paid:'Prepaid Visa 6386. Non-refundable.', details:'201 Firehole Ave, West Yellowstone MT 59758. 2Q beds, breakfast included. In 4pm, out 11am. Ph: 406-646-9557.' },
    acts:[], search:null },
  { id:'glacier', loc:'Glacier NP', region:'Columbia Falls, MT', dates:'Fri-Sun 5/29-31', nights:2, dayNums:[20,21,22], status:'booked' as const,
    booking:{ name:'Apgar Village Lodge (In-Park Cabin)', conf:'#3870048', cost:'$392.26 ($182/n×2+tax)', paid:'$189.22 paid. $203.04 at check-in.', details:'Cabin 3Q, 2 Room. 3 guests. 1-844-868-7474.' },
    acts:[], search:null },
];

const FLIGHTS = [
  { who:'Colin', route:'PAE→LAS', date:'Sun 5/10', best:'AS 777 8:20am→10:53am 2h33m $212.83', alts:'BOOKED Chase #1016489986 conf KJMXSI. 18,507 pts.', card:'Chase 1.15x boost' },
  { who:'Mom', route:'YYZ→LAS', date:'Sun 5/10', best:'Porter PD 653 9:55am→11:42am 4h47m $276.23', alts:'BOOKED conf C3STYI. Seat 5C. PorterClassic Freedom.', card:'Direct' },
  { who:'Robin', route:'SEA→FCA', date:'Fri 5/29', best:'$127 Alaska 1:13pm nonstop', alts:'$152 Alaska 9:35pm', card:'Cap1 or Chase' },
  { who:'Colin', route:'FCA→SEA', date:'Sun 5/31', best:'AS 2419 5:40pm→6:12pm 1h32m FIRST CLASS $218.40', alts:'BOOKED Chase #1016667852 conf ZAAGXY. 14,560 pts.', card:'Chase 1.5x boost' },
  { who:'Mom', route:'FCA→MSP→YYZ', date:'Sun 5/31', best:'DL 2575 2:30pm→6:15pm + DL 3866 8:05pm→11:14pm $244.33', alts:'BOOKED Amex #7468-1456 conf G5FIWA. Seats 25C/19B.', card:'Amex Plat' },
];

const LOGISTICS = [
  { cat:'Car', name:'Rental Car LAS pickup 5/10 12pm', detail:'Booking.com Itinerary #767545928. LAS pickup May 10 noon. Chase Sapphire Reserve = primary insurance, decline CDW.', url:'https://cars.booking.com', when:'5/10-31', status:'booked' as const },
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
  const [data, setData] = useState<BData>(emptyData);
  const [saving, setSaving] = useState(false);
  const [user, setUser] = useState('');
  const [showPick, setShowPick] = useState(false);

  useEffect(() => {
    fetch('/api/bookings-notes').then(r => r.json()).then(d => {
      if (d.notes && !d.statuses) setData({ ...emptyData, notes: d.notes }); // v1 migration
      else setData({ ...emptyData, ...d });
    }).catch(() => {});
    const u = localStorage.getItem('bookings-user-name');
    if (u) setUser(u); else setShowPick(true);
  }, []);

  const api = useCallback(async (body: Record<string, unknown>) => {
    if (!user && body.action !== 'check') { setShowPick(true); return; }
    setSaving(true);
    try {
      const r = await fetch('/api/bookings-notes', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(body) });
      const d = await r.json();
      if (d.notes !== undefined) setData({ ...emptyData, ...d });
    } catch {}
    setSaving(false);
  }, [user]);

  const saveNote = useCallback((sid: string, text: string) => api({ action:'note', sectionId:sid, text, updatedBy:user }), [api, user]);
  const toggleStatus = useCallback((id: string, status: string) => api({ action:'status', id, status }), [api]);
  const addItem = useCallback((listId: string, item: { name: string; price?: string; link?: string; note?: string; addedBy: string }) => api({ action:'addItem', listId, item }), [api]);
  const removeItem = useCallback((listId: string, index: number) => api({ action:'removeItem', listId, index }), [api]);
  const toggleCheck = useCallback((id: string, checked: boolean) => api({ action:'check', id, checked }), [api]);

  const pick = (n: string) => { setUser(n); localStorage.setItem('bookings-user-name', n); setShowPick(false); };

  return (<>
    {/* eslint-disable-next-line @next/next/no-page-custom-font */}
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300..600&family=DM+Mono:wght@400&display=swap" rel="stylesheet" />

    <div className="bk">
      {showPick && <div className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center p-4"><div className="bg-white rounded-lg p-5 shadow-xl max-w-[240px] w-full text-center"><div className="text-sm font-semibold mb-3">Who&apos;s editing?</div><div className="flex gap-2"><button onClick={()=>pick('Colin')} className="flex-1 py-2.5 bg-blue-600 text-white rounded text-sm font-medium">Colin</button><button onClick={()=>pick('Robin')} className="flex-1 py-2.5 bg-purple-600 text-white rounded text-sm font-medium">Robin</button></div></div></div>}

      {/* Header */}
      <div className="bk-hdr">
        <div className="bk-hdr-in">
          <span className="font-semibold">Trip Booking HQ</span>
          <span className="bk-hdr-sub">LAS→GNP May 10-31</span>
          <span className="ml-auto bk-hdr-user">
            {user && <><span className={user==='Robin'?'text-purple-600':'text-blue-600'}>{user}</span> <button onClick={()=>setShowPick(true)} className="opacity-40 hover:opacity-100">(switch)</button></>}
            {saving && <span className="ml-2 opacity-40">saving...</span>}
          </span>
        </div>
      </div>

      {/* Nav */}
      <nav className="bk-nav"><div className="bk-nav-in scrollbar-hide">
        <a href="#stays" className="bk-nl">Hotels</a>
        <a href="#flights" className="bk-nl">Flights</a>
        <a href="#logistics" className="bk-nl">Logistics</a>
        {STAYS.map(s => {
          const actual = data.statuses[`stay-${s.id}`] || s.status;
          return <a key={s.id} href={`#s-${s.id}`} className={`bk-nc ${actual==='booked'?'bk-nc-g':'bk-nc-a'}`}>{s.loc}</a>;
        })}
      </div></nav>

      <main className="bk-main">
        {/* ═══ STAYS ═══ */}
        <section id="stays">
          {STAYS.map(stay => {
            const stayDays = days.filter(d => stay.dayNums.includes(d.dayNumber));
            const accomOpts = stayDays[0]?.accommodationOptions || [];
            type BSum = { accommodation:number; food:number; activities:number; gas:number; total:number };
            const totalBudget = stayDays.reduce<BSum>((s,d) => { const b = d.budgetBreakdown; return { accommodation:s.accommodation+(b?.accommodation??0), food:s.food+(b?.food??0), activities:s.activities+(b?.activities??0), gas:s.gas+(b?.gas??0), total:s.total+(b?.total??0) }; }, {accommodation:0,food:0,activities:0,gas:0,total:0});
            const actualStatus = data.statuses[`stay-${stay.id}`] || stay.status;
            const customs = data.customItems[`stay-${stay.id}`] || [];

            return (
              <div key={stay.id} id={`s-${stay.id}`} className={`bk-card ${actualStatus==='booked'?'bk-card-g':'bk-card-a'}`}>
                <div className="bk-card-hdr">
                  <span className="font-semibold">{stay.loc}</span>
                  <span className="bk-card-region">{stay.region}</span>
                  <span className="bk-card-sep">|</span>
                  <span>{stay.dates}</span>
                  <span className="bk-card-nights">{stay.nights}n</span>
                  {stayDays[0]?.drivingDistance && <span className="bk-card-drive">{stayDays[0].drivingDistance} / {stayDays[0].drivingTime}</span>}
                  <span className="ml-auto"><Badge s={stay.status} id={`stay-${stay.id}`} data={data} onToggle={toggleStatus} /></span>
                </div>

                <div className="bk-card-body">
                  {stay.booking && (
                    <div className="bk-conf">
                      <Row label="Hotel" val={<strong>{stay.booking.name}</strong>} />
                      <Row label="Conf#" val={stay.booking.conf} />
                      <Row label="Cost" val={stay.booking.cost} />
                      <Row label="Paid" val={stay.booking.paid} />
                      <Row label="Details" val={stay.booking.details} />
                    </div>
                  )}

                  {stay.acts.map((a,i) => (
                    <div key={i} className="bk-act">
                      <Badge s={a.status} id={`act-${stay.id}-${i}`} data={data} onToggle={toggleStatus} />
                      <span className="font-medium ml-1">{a.name}</span>
                      {a.detail && <span className="opacity-50 ml-1">{a.detail}</span>}
                      {a.url && <EL href={a.url} c="text-[10px] ml-1">link</EL>}
                    </div>
                  ))}

                  {/* Day-by-day */}
                  <Acc title="Day-by-day itinerary" n={stayDays.length}>
                    <div className="bk-tbl-wrap">
                    <table className="bk-tbl"><thead><tr><th>Day</th><th>Date</th><th>Title</th><th>Drive</th><th>Weather</th><th>Budget</th></tr></thead>
                    <tbody>
                      {stayDays.map(d => <tr key={d.id}><td className="font-medium">{d.dayNumber}</td><td className="whitespace-nowrap">{format(parseISO(d.date),'EEE M/d')}</td><td>{d.title}</td><td className="whitespace-nowrap opacity-40">{d.drivingDistance?`${d.drivingDistance} / ${d.drivingTime}`:'-'}</td><td className="whitespace-nowrap opacity-40">{d.weather?`${d.weather.high}°/${d.weather.low}°`:'-'}</td><td className="whitespace-nowrap">{d.budgetBreakdown?`$${d.budgetBreakdown.total}`:'-'}</td></tr>)}
                      {stayDays.length>1&&<tr className="font-medium border-t border-gray-200"><td colSpan={5} className="text-right opacity-40">Total</td><td>${totalBudget.total}</td></tr>}
                    </tbody></table>
                    </div>
                    {stayDays.map(d => <Acc key={d.id} title={`Day ${d.dayNumber} activities`} n={d.activities.length}>
                      <div className="bk-tbl-wrap">
                      <table className="bk-tbl"><thead><tr><th>Activity</th><th>Time</th><th>Dur</th><th>Diff</th><th>Cost</th><th>Res?</th><th>Link</th></tr></thead>
                      <tbody>{d.activities.map(a => <tr key={a.id}><td className="font-medium">{a.name}</td><td className="whitespace-nowrap">{a.startTime||'-'}</td><td className="whitespace-nowrap">{a.duration}</td><td><span className={`bk-diff-${a.difficulty}`}>{a.difficulty}</span></td><td>{a.cost||'-'}</td><td>{a.reservationRequired?'Yes':'-'}</td><td>{a.url?<EL href={a.url}>info</EL>:a.directionsUrl?<EL href={a.directionsUrl}>map</EL>:'-'}</td></tr>)}</tbody></table>
                      </div>
                    </Acc>)}
                  </Acc>

                  {/* Accommodation options */}
                  {(accomOpts.length > 0 || customs.length > 0) && (
                    <Acc title="Accommodation options" n={accomOpts.length + customs.length} open={customs.length > 0}>
                      <div className="bk-tbl-wrap">
                      <table className="bk-tbl"><thead><tr><th>Name</th><th>Type</th><th>$/n</th><th>Amenities</th><th>Notes</th><th>Link</th></tr></thead>
                      <tbody>
                        {accomOpts.map(a => <tr key={a.id} className={a.recommended?'bg-green-50/50':''}><td className="font-medium">{a.recommended&&'★ '}{a.name.replace(/ — .+/,'').replace(/ BOOKED/,'')}</td><td>{a.type}</td><td className="whitespace-nowrap">{a.pricePerNight?`$${a.pricePerNight}`:'-'}</td><td className="text-[10px]">{a.amenities?.join(', ')||'-'}</td><td className="text-[10px] max-w-[200px]">{a.notes||'-'}</td><td>{a.website?<EL href={a.website}>site</EL>:'-'}</td></tr>)}
                        {customs.map((c,i) => <tr key={`c-${i}`} className="bg-purple-50/30"><td className="font-medium">{c.name} <span className="text-[9px] text-purple-500">{c.addedBy}</span></td><td>-</td><td className="whitespace-nowrap">{c.price||'-'}</td><td className="text-[10px]">{c.note||'-'}</td><td className="text-[10px]">{c.link?<EL href={c.link}>link</EL>:'-'}</td><td><button onClick={()=>removeItem(`stay-${stay.id}`,i)} className="text-red-400 hover:text-red-600 text-[10px]"><X className="w-3 h-3"/></button></td></tr>)}
                      </tbody></table>
                      </div>
                      {user && <AddItemRow listId={`stay-${stay.id}`} user={user} onAdd={addItem} />}
                    </Acc>
                  )}

                  {/* Search criteria */}
                  {stay.search && (
                    <div className="bk-search">
                      <div className="bk-search-hdr">Search: {stay.search.ci} → {stay.search.co} &middot; {stay.search.g} &middot; <strong>Budget {stay.search.budget}</strong></div>
                      <div className="bk-search-grid">
                        <div><div className="bk-search-lbl">Must Have</div>{stay.search.must.map((m,i)=><div key={i} className="bk-search-item">&#x2022; {m}</div>)}</div>
                        <div><div className="bk-search-lbl opacity-50">Nice to Have</div>{stay.search.nice.map((m,i)=><div key={i} className="bk-search-item opacity-50">&#x2022; {m}</div>)}</div>
                      </div>
                      {stay.search.wifi&&<div className="bk-warn-y">{stay.search.wifi}</div>}
                      {stay.search.avoid&&<div className="bk-warn-r">{stay.search.avoid}</div>}
                      <div className="flex flex-wrap gap-1 mt-1">{stay.search.links.map((lk,i)=><EL key={i} href={lk.u} c="bk-sl">{lk.l}</EL>)}</div>
                    </div>
                  )}

                  {/* If no accom options from tripData but pending, still show add button */}
                  {accomOpts.length === 0 && stay.status === 'pending' && (
                    <div className="mt-1">
                      {customs.length > 0 && <div className="bk-tbl-wrap"><table className="bk-tbl"><thead><tr><th>Name</th><th>Price</th><th>Notes</th><th>Link</th><th></th></tr></thead><tbody>
                        {customs.map((c,i)=><tr key={i} className="bg-purple-50/30"><td className="font-medium">{c.name} <span className="text-[9px] text-purple-500">{c.addedBy}</span></td><td>{c.price||'-'}</td><td className="text-[10px]">{c.note||'-'}</td><td>{c.link?<EL href={c.link}>link</EL>:'-'}</td><td><button onClick={()=>removeItem(`stay-${stay.id}`,i)} className="text-red-400 hover:text-red-600"><X className="w-3 h-3"/></button></td></tr>)}
                      </tbody></table></div>}
                      {user && <AddItemRow listId={`stay-${stay.id}`} user={user} onAdd={addItem} />}
                    </div>
                  )}

                  <NoteArea id={`stay-${stay.id}`} label="Notes & research" data={data} onSave={(t) => saveNote(`stay-${stay.id}`, t)} />
                </div>
              </div>
            );
          })}
        </section>

        {/* ═══ FLIGHTS ═══ */}
        <section id="flights" className="mt-4">
          <div className="bk-sec-t">Flights</div>
          <div className="bk-tbl-wrap">
          <table className="bk-tbl"><thead><tr><th>Who</th><th>Route</th><th>Date</th><th>Best Price</th><th>Alternatives</th><th>Card</th><th>Status</th></tr></thead>
          <tbody>{FLIGHTS.map((f,i)=><tr key={i}><td className="font-medium">{f.who}</td><td className="whitespace-nowrap"><EL href="https://www.google.com/travel/flights">{f.route}</EL></td><td className="whitespace-nowrap">{f.date}</td><td className="text-green-700 font-medium whitespace-nowrap">{f.best}</td><td className="opacity-50">{f.alts}</td><td className="text-purple-600 text-[10px] whitespace-nowrap">{f.card}</td><td><Badge s="pending" id={`fl-${i}`} data={data} onToggle={toggleStatus}/></td></tr>)}</tbody></table>
          </div>
          <NoteArea id="flights" label="Flight research & booking notes" data={data} onSave={(t) => saveNote('flights', t)} />
        </section>

        {/* ═══ LOGISTICS ═══ */}
        <section id="logistics" className="mt-4">
          <div className="bk-sec-t">Car, Passes & Actions</div>
          <div className="bk-tbl-wrap">
          <table className="bk-tbl"><thead><tr><th>Cat</th><th>Item</th><th>When</th><th>Details</th><th>Status</th></tr></thead>
          <tbody>{LOGISTICS.map((l,i)=><tr key={i}><td className="text-[10px] font-bold opacity-40">{l.cat}</td><td className="font-medium whitespace-nowrap">{l.url?<EL href={l.url}>{l.name}</EL>:l.name}</td><td className="whitespace-nowrap">{l.when}</td><td>{l.detail}</td><td><Badge s={l.status} id={`lg-${i}`} data={data} onToggle={toggleStatus}/></td></tr>)}</tbody></table>
          </div>
          <NoteArea id="logistics" label="Car rental & logistics notes" data={data} onSave={(t) => saveNote('logistics', t)} />
        </section>

        {/* ═══ SIGNUPS ═══ */}
        <section className="mt-4">
          <div className="bk-sec-t">Signups</div>
          {SIGNUPS.map((s,i) => {
            const checked = data.checks[`signup-${i}`] || false;
            return (
              <label key={i} className="bk-check-row">
                <input type="checkbox" checked={checked} onChange={e => toggleCheck(`signup-${i}`, e.target.checked)} className="bk-check" />
                <span className={checked ? 'line-through opacity-40' : ''}><EL href={s.url}>{s.name}</EL></span>
                <span className="opacity-50 ml-2">{s.why}</span>
                <span className="ml-auto text-red-600 text-[10px] whitespace-nowrap">{s.when}</span>
              </label>
            );
          })}
        </section>

        <div className="text-center mt-6 pb-4 text-[11px] opacity-30">
          <a href="/" className="hover:opacity-100">Full planner</a><span className="mx-2">&middot;</span><a href="/mom" className="hover:opacity-100">Mom&apos;s view</a>
        </div>
      </main>
    </div>

    <style jsx global>{`
      :root { --g:#22804A; --gl:#E8F5E9; --a:#B8860B; --al:#FFF8E1; --r:#C62828; --rl:#FDE8E8; }
      .bk { min-height:100vh; background:#fff; color:#1a1a1a; font-family:'DM Sans',system-ui,sans-serif; font-size:12px; line-height:1.45; }

      .bk-hdr { background:#f8f8f8; border-bottom:1px solid #e8e8e8; font-size:12px; position:sticky; top:0; z-index:60; }
      .bk-hdr-in { max-width:1200px; margin:0 auto; padding:6px 12px; display:flex; align-items:center; flex-wrap:wrap; gap:4px; }
      .bk-hdr-sub { opacity:0.5; }
      .bk-hdr-user { font-size:11px; }

      .bk-nav { position:sticky; top:33px; z-index:50; background:#fff; border-bottom:1px solid #eee; }
      .bk-nav-in { max-width:1200px; margin:0 auto; padding:4px 12px; display:flex; gap:3px; overflow-x:auto; font-size:11px; }
      .bk-nl { padding:3px 10px; border-radius:3px; background:#f5f5f5; color:#666; text-decoration:none; white-space:nowrap; }
      .bk-nl:hover { background:#eee; color:#333; }
      .bk-nc { padding:3px 8px; border-radius:3px; font-size:10px; font-weight:500; text-decoration:none; white-space:nowrap; }
      .bk-nc-g { background:var(--gl); color:var(--g); }
      .bk-nc-a { background:var(--al); color:var(--a); }

      .bk-main { max-width:1200px; margin:0 auto; padding:12px 12px; }
      .bk-sec-t { font-size:13px; font-weight:600; margin-bottom:4px; }

      .bk-b { display:inline-flex; align-items:center; gap:2px; font-size:10px; font-weight:600; padding:1px 6px; border-radius:3px; white-space:nowrap; user-select:none; }
      .bk-b-g { background:var(--gl); color:var(--g); }
      .bk-b-a { background:var(--al); color:var(--a); }
      .bk-b-r { background:var(--rl); color:var(--r); }

      .bk-card { border:1px solid #e8e8e8; border-radius:4px; margin-bottom:8px; scroll-margin-top:80px; }
      .bk-card-g { border-left:3px solid var(--g); }
      .bk-card-a { border-left:3px solid var(--a); }
      .bk-card-hdr { display:flex; align-items:center; padding:6px 10px; background:#fafafa; border-bottom:1px solid #f0f0f0; font-size:12px; flex-wrap:wrap; gap:2px; }
      .bk-card-region { opacity:0.4; margin-left:4px; }
      .bk-card-sep { opacity:0.2; margin:0 4px; }
      .bk-card-nights { opacity:0.4; margin-left:4px; }
      .bk-card-drive { opacity:0.3; margin-left:6px; font-size:11px; }
      .bk-card-body { padding:6px 10px; }

      .bk-r { display:flex; gap:6px; padding:1px 0; font-size:11px; }
      .bk-rl { color:#999; min-width:50px; flex-shrink:0; text-align:right; }
      .bk-rv { flex:1; }
      .bk-conf { background:var(--gl); border-radius:3px; padding:6px 8px; margin-bottom:6px; }
      .bk-act { display:flex; align-items:center; gap:4px; padding:2px 0; font-size:11px; flex-wrap:wrap; }

      .bk-acc-btn { display:flex; align-items:center; gap:3px; font-size:11px; color:#666; padding:3px 0; background:none; border:none; cursor:pointer; font-family:inherit; width:100%; text-align:left; }
      .bk-acc-btn:hover { color:#333; }
      .bk-acc-t { font-weight:500; }
      .bk-acc-n { font-size:10px; background:#f0f0f0; border-radius:3px; padding:0 4px; color:#999; }
      .bk-acc-body { display:grid; grid-template-rows:0fr; transition:grid-template-rows 0.2s; }
      .bk-acc-open { grid-template-rows:1fr; }

      .bk-tbl-wrap { overflow-x:auto; -webkit-overflow-scrolling:touch; }
      .bk-tbl { width:100%; border-collapse:collapse; font-size:11px; margin:4px 0; min-width:500px; }
      .bk-tbl th { text-align:left; padding:3px 6px; font-weight:500; color:#999; font-size:10px; border-bottom:1px solid #e8e8e8; white-space:nowrap; text-transform:uppercase; letter-spacing:0.3px; }
      .bk-tbl td { padding:3px 6px; border-bottom:1px solid #f5f5f5; vertical-align:top; }
      .bk-tbl tr:hover td { background:#fafafa; }
      .bk-tbl tbody tr:last-child td { border-bottom:none; }

      .bk-diff-easy { color:var(--g); }
      .bk-diff-moderate { color:var(--a); }
      .bk-diff-challenging { color:var(--r); }

      .bk-search { background:var(--al); border-radius:3px; padding:6px 8px; margin-top:4px; }
      .bk-search-hdr { font-size:11px; font-weight:500; color:var(--a); margin-bottom:4px; }
      .bk-search-grid { display:grid; grid-template-columns:1fr 1fr; gap:6px; }
      .bk-search-lbl { font-size:10px; font-weight:600; text-transform:uppercase; letter-spacing:0.3px; margin-bottom:2px; }
      .bk-search-item { font-size:11px; padding:1px 0; }
      .bk-sl { font-size:10px; padding:2px 6px; background:#fff; border:1px solid #ddd; border-radius:3px; text-decoration:none!important; color:#2563eb!important; }
      .bk-sl:hover { border-color:#2563eb; }
      .bk-warn-y { font-size:10px; background:rgba(184,134,11,0.08); padding:3px 6px; border-radius:2px; color:var(--a); margin-top:4px; }
      .bk-warn-r { font-size:10px; background:rgba(198,40,40,0.06); padding:3px 6px; border-radius:2px; color:var(--r); font-weight:500; margin-top:4px; }

      .bk-area { margin-top:8px; border:1px solid #e8e8e8; border-radius:4px; background:#FEFEF8; }
      .bk-area-hdr { display:flex; align-items:center; gap:6px; padding:4px 8px; border-bottom:1px solid #f0f0f0; background:#FAFAF2; border-radius:4px 4px 0 0; }
      .bk-area-label { font-size:10px; font-weight:600; text-transform:uppercase; letter-spacing:0.3px; color:#999; }
      .bk-area-meta { font-size:9px; color:#bbb; margin-left:auto; }
      .bk-area-saved { font-size:9px; color:var(--g); font-weight:500; animation:bk-fade 2s forwards; }
      .bk-area-dirty { font-size:9px; color:var(--a); }
      @keyframes bk-fade { 0%{opacity:1} 70%{opacity:1} 100%{opacity:0} }
      .bk-area-ta {
        width:100%; min-height:60px; padding:8px 10px; border:none; border-radius:0 0 4px 4px;
        font-size:13px; font-family:'DM Sans',system-ui,sans-serif; line-height:1.6;
        color:#333; background:#FEFEF8; resize:none; outline:none; overflow:hidden;
      }
      .bk-area-ta:focus { background:#FFFFF0; box-shadow:inset 0 0 0 1px #E8D44D; }
      .bk-area-ta::placeholder { color:#ccc; font-size:12px; }

      .bk-add-btn { display:flex; align-items:center; gap:3px; font-size:11px; color:#2563eb; background:none; border:1px dashed #ccc; border-radius:3px; padding:4px 10px; cursor:pointer; font-family:inherit; margin-top:4px; width:100%; justify-content:center; }
      .bk-add-btn:hover { border-color:#2563eb; background:#f0f7ff; }
      .bk-add-form { display:flex; gap:4px; margin-top:4px; flex-wrap:wrap; align-items:center; }
      .bk-add-input { font-size:11px; padding:4px 8px; border:1px solid #ddd; border-radius:3px; font-family:inherit; outline:none; }
      .bk-add-input:focus { border-color:#2563eb; box-shadow:0 0 0 1px rgba(37,99,235,0.2); }
      .bk-add-name { flex:2; min-width:120px; }
      .bk-add-price { width:80px; }
      .bk-add-link { flex:2; min-width:100px; }
      .bk-add-note { flex:3; min-width:120px; }
      .bk-add-save { font-size:11px; padding:4px 12px; background:var(--gl); color:var(--g); border:none; border-radius:3px; cursor:pointer; font-weight:500; font-family:inherit; }
      .bk-add-cancel { color:#999; background:none; border:none; cursor:pointer; padding:4px; }

      .bk-check-row { display:flex; align-items:center; gap:6px; padding:4px 0; font-size:11px; cursor:pointer; border-bottom:1px solid #f5f5f5; }
      .bk-check-row:last-child { border-bottom:none; }
      .bk-check { width:14px; height:14px; accent-color:var(--g); cursor:pointer; flex-shrink:0; }

      @media(max-width:768px) {
        .bk-hdr-sub { display:none; }
        .bk-hdr-in { padding:6px 8px; }
        .bk-nav-in { padding:4px 8px; }
        .bk-main { padding:8px 8px; }
        .bk-search-grid { grid-template-columns:1fr; }
        .bk-card-hdr { font-size:11px; }
        .bk-card-drive { display:none; }
        .bk-add-form { flex-direction:column; }
        .bk-add-input { width:100%; min-width:unset; }
        .bk-area-ta { font-size:14px; min-height:80px; }
      }
    `}</style>
  </>);
}
