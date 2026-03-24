import { ActionItem } from '@/types/actions';

function now() {
  return new Date().toISOString();
}

export function generateActionItems(): ActionItem[] {
  const items: ActionItem[] = [];

  // =============================================
  // 🔴 URGENT: BOOK THIS WEEK (deadlines in days)
  // =============================================

  items.push({
    id: 'acc-glacier',
    category: 'accommodation',
    title: '🔴 Book Glacier 2BR cabin — 20% off expires Mar 31!',
    description: 'Paddle Ridge Cabins (Glacier Outdoor Center): 2BR log cabin, full kitchen, fireplace, RIGHT at West Glacier entrance. 20% off for stays May 1 - Jul 1. Expires in 7 DAYS.',
    status: 'pending',
    deadline: '2026-03-31',
    tripDay: 20,
    estimatedCost: 360,
    bookingUrl: 'https://www.glacieroutdoorcenter.com/lodging',
    notes: '2BR cabin: 2 bedrooms + full kitchen + fireplace + deck. Right at West Glacier entrance (walk to trailheads). 20% early bird = ~$180/night (reg ~$225). DEADLINE: March 31. Alt: Meadow Lake Resort 2BR condo ($150-220). VRBO has 238+ cabins in Columbia Falls area.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-gc',
    category: 'accommodation',
    title: '🔴 Call Yavapai Lodge (in-park GC) — sells out for May',
    description: 'Best option: stay INSIDE the park. Yavapai Lodge East (renovated) $140-220/night. Call 866-315-2980 NOW — May books out months ahead.',
    status: 'pending',
    deadline: '2026-03-31',
    tripDay: 2,
    estimatedCost: 350,
    bookingUrl: 'https://www.visitgrandcanyon.com/stay/lodging/yavapai-lodge/',
    notes: 'CALL 866-315-2980 (not online). In-park = no re-entry hassle, sunset/sunrise access. Yavapai East wing is renovated. Fallback: Grand Canyon Hotel & Suites Tusayan ($140-180, free breakfast) or Red Feather Lodge ($165). 2 nights Mon-Tue May 11-12.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-moab',
    category: 'accommodation',
    title: '🔴 Book Moab (4n May 16-19) — PEAK SEASON, fills up',
    description: 'Option A: Hyatt Place casita 2BR ($250-350). Option B: Aarchway Inn ($150-180, free breakfast, fast WiFi). Option C: Moab Springs Ranch (#1 rated). Option D: Airbnb with Starlink/fiber.',
    status: 'pending',
    deadline: '2026-03-31',
    tripDay: 7,
    estimatedCost: 700,
    bookingUrl: 'https://www.hyatt.com/hyatt-place/en-US/slczm-hyatt-place-moab/rooms',
    notes: 'Hyatt casita: 841sqft, 2BR/2BA, kitchenette (ONLY 8 exist). Aarchway Inn: best breakfast in Moab, fast WiFi confirmed. Moab Springs Ranch: #1 TripAdvisor, garden setting. Airbnbs: search for "fiber" or "Starlink" in listing for fast internet. 4 nights Sat-Wed.',
    cardTip: '💳 Chase UR → World of Hyatt (1:1). 12-15K pts/night casita. Or Aarchway via Chase Travel portal.',
    updatedAt: now(),
  });

  // =============================================
  // PRIORITY 2: BOOK FLIGHTS (actual fares Mar 23)
  // =============================================

  items.push({
    id: 'flight-mom-return',
    category: 'flight',
    title: 'Book Mom FCA→YYZ May 31 (Sun) — $315 via Chicago',
    description: 'American via ORD $315 (2h26m layover, safe). United via ORD $321 (50min, tight). Sunday = pricier.',
    status: 'pending',
    tripDay: 22,
    estimatedCost: 315,
    bookingUrl: 'https://www.google.com/travel/flights?tfs=CBwQAhoiEgoyMDI2LTA1LTMxagcIARIDRkNBcgcIARIDWVlacAFAAUgBcAE&hl=en&gl=us',
    notes: 'American 1:25pm via ORD $315 (2h26m layover = comfortable for 80yo). United 12:35pm via ORD $321 (50min connection = risky). Delta via MSP ~$375 (safest). Budget: United via DEN $293 (3h layover).',
    cardTip: '💳 Chase Travel portal (1.5x = 21,000 UR pts) or Capital One 2x miles.',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-colin-out',
    category: 'flight',
    title: 'Book Colin SEA→LAS May 10 (Sun) — $89 nonstop',
    description: 'Alaska/Delta/Southwest all $89 nonstop. Frontier $44 but 0 bags.',
    status: 'pending',
    tripDay: 1,
    estimatedCost: 89,
    bookingUrl: 'https://www.google.com/travel/flights?tfs=CBwQAhoiEgoyMDI2LTA1LTEwagcIARIDU0VBcgcIARIDTEFTcAFAAUgBcAE&hl=en&gl=us',
    notes: 'Many nonstop options. SW 6:30am gets you there by 9am. Alaska 2:45pm for a relaxed start. Frontier $44 basic (0 bags = add $40-60).',
    cardTip: '💳 Capital One Venture X → Alaska Mileage Plan. Or Chase Travel portal (1.5x).',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-mom-out',
    category: 'flight',
    title: 'Book Mom YYZ→LAS May 10 (Sun) — $194 Porter nonstop',
    description: 'Porter 9:55am nonstop $194 (basic). 2-2 seating, no middle seats, free wine. Add ~$50 for bags.',
    status: 'pending',
    tripDay: 1,
    estimatedCost: 244,
    bookingUrl: 'https://www.flyporter.com/en_us/flights-from-toronto-to-las-vegas',
    notes: 'Porter $194 basic + bag upgrade ~$244. Best for 80yo: E195-E2 with 2-2 config (no middle seats). Alt: Air Canada Rouge nonstop $204.',
    cardTip: '💳 Amex Platinum: 5x MR points if booked through Amex Travel.',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-colin-return',
    category: 'flight',
    title: 'Book Colin + Robin FCA→SEA May 31 — $234 each Alaska',
    description: 'Alaska 11:33am nonstop $234. Book SAME FLIGHT for Colin and Robin.',
    status: 'pending',
    tripDay: 22,
    estimatedCost: 468,
    bookingUrl: 'https://www.google.com/travel/flights?tfs=CBwQAhoiEgoyMDI2LTA1LTMxagcIARIDRkNBcgcIARIDU0VBcAFAAUgBcAE&hl=en&gl=us',
    notes: 'Alaska 11:33am nonstop $234 each = $468 for both. Book together for adjacent seats. 6:15am also $234 (too early). 5:40pm = $274 (pricier).',
    cardTip: '💳 Capital One → Alaska Mileage Plan (1:1). Or Chase portal (1.5x = 15,600 pts each).',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-robin-out',
    category: 'flight',
    title: 'Book Robin SEA→FCA May 29 (Fri) — $234-274 Alaska',
    description: 'Alaska 1:13pm nonstop $234 (if she can leave early) or 9:35pm $274 (after work).',
    status: 'pending',
    tripDay: 20,
    estimatedCost: 254,
    bookingUrl: 'https://www.google.com/travel/flights?tfs=CBwQAhoiEgoyMDI2LTA1LTI5agcIARIDU0VBcgcIARIDRkNBcAFAAUgBcAE&hl=en&gl=us',
    notes: 'Alaska 1:13pm nonstop $234 (leaves early). 9:35pm nonstop $274 (after work, arrives 11:58pm). Delta 5:45pm via SLC $174 (cheapest but 1 stop).',
    cardTip: '💳 Capital One or Chase portal.',
    updatedAt: now(),
  });

  // =============================================
  // PRIORITY 3: REMAINING HOTELS
  // =============================================

  items.push({
    id: 'acc-driggs',
    category: 'accommodation',
    title: 'Book Driggs (3n May 24-26) — Memorial Day weekend',
    description: 'Option A: Teton View Cabin Airbnb ($150-200, 8 acres, Teton views). Option B: Teton Valley Cabins ($140-180). Option C: Bronze Buffalo Ranch luxury ($250-400).',
    status: 'pending',
    deadline: '2026-04-01',
    tripDay: 15,
    estimatedCost: 480,
    bookingUrl: 'https://www.airbnb.com/rooms/50740489',
    notes: 'Airbnb "Teton View Cabin" (room 50740489): new-build, 8 private acres, Teton views, good WiFi. Teton Valley Cabins: rustic log cabins ($140-180). Bronze Buffalo Ranch (Teton Springs): luxury 2BR suites, May = cheapest month ($250-400). Memorial Day Mon May 25 = prices up.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-vegas',
    category: 'accommodation',
    title: 'Book Las Vegas (1n Sun May 10)',
    description: 'Best Western Casino Royale: $90-120, NO resort fee, center Strip. Alt: Hampton Inn Tropicana ($100-130, free breakfast, off-Strip).',
    status: 'pending',
    deadline: '2026-04-15',
    tripDay: 1,
    estimatedCost: 100,
    bookingUrl: 'https://www.bestwestern.com/en_US/book/hotel-rooms.29087.html',
    notes: 'Casino Royale: ONLY Strip hotel with $0 resort fee + free parking. Sunday Mother\'s Day wknd may push to $100-120. Alt: Hampton Inn Tropicana ($100-130, better rooms, free breakfast but not on Strip). Join BW Rewards (free) for member rate.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-page',
    category: 'accommodation',
    title: 'Book Page AZ (3n May 13-15)',
    description: 'Hampton Inn $110-150/night (best reviews, Hilton WiFi). Alt: Lake Powell Resort (waterfront, $180+). Alt: Home2 Suites (kitchenette).',
    status: 'pending',
    deadline: '2026-04-15',
    tripDay: 4,
    estimatedCost: 400,
    bookingUrl: 'https://www.hilton.com/en/hotels/pgalphx-hampton-suites-page-lake-powell/',
    notes: 'Hampton Inn: 8.6/10, free hot breakfast, indoor pool. Lake Powell Resort: waterfront location, $180+/night. Home2 Suites: kitchenette in room, newer (2020). Sign up Hilton Honors + AARP first for 5-15% off.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-slc',
    category: 'accommodation',
    title: 'Book SLC (4n May 20-23) — best WiFi for work',
    description: 'Option A: Homewood Suites 2BR ($160-200, full kitchen, free breakfast, Wed social). Option B: Hyatt House (workstation in suite). Option C: Crystal Inn ($130-170, biggest rooms).',
    status: 'pending',
    deadline: '2026-04-15',
    tripDay: 11,
    estimatedCost: 600,
    bookingUrl: 'https://www.hilton.com/en/hotels/slcblhw-homewood-suites-salt-lake-city-downtown/',
    notes: 'Homewood Suites: 2BR/2BA suite with full kitchen + free breakfast + Wed evening social (free food/drinks). Parking $20/night. Hyatt House: dedicated workstation + kitchen in every suite. Crystal Inn: 30% larger rooms, full breakfast, free parking. Call each for AAA/AARP rates.',
    cardTip: '💳 Homewood = Hilton Honors eligible. Hyatt House = Chase UR → World of Hyatt.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-yellowstone',
    category: 'accommodation',
    title: 'Book W. Yellowstone (2n May 27-28)',
    description: 'Option A: Kelly Inn ($140-180, biggest pool). Option B: Explorer Cabins ($160-200, kitchenette + fireplace). Option C: Gray Wolf Inn (renovated 2026).',
    status: 'pending',
    deadline: '2026-04-15',
    tripDay: 18,
    estimatedCost: 320,
    bookingUrl: 'https://www.yellowstonekellyinn.com/',
    notes: 'Kelly Inn: #2 rated, free breakfast, largest indoor pool. Explorer Cabins: 2 queens + kitchenette + fireplace, more private. Gray Wolf Inn: freshly renovated for 2026, indoor pool/hot tub. All within walking distance of West Entrance.',
    updatedAt: now(),
  });

  // =============================================
  // PRIORITY 4: ACTIVITIES & CAR
  // =============================================

  items.push({
    id: 'activity-antelope',
    category: 'activity',
    title: 'Book Antelope Canyon X tour (May 14)',
    description: 'Canyon X by Taadidiin Tours: boardwalk, no ladders, best for Mom. 9am slot ~$62/pp.',
    status: 'pending',
    deadline: '2026-04-14',
    tripDay: 5,
    estimatedCost: 124,
    bookingUrl: 'https://taadidiintours.com/',
    notes: 'Canyon X: boardwalk entry, no ladders. ~$62/pp. Alt: Upper Canyon ($92/pp) has light beams but 1-mile stair exit.',
    updatedAt: now(),
  });

  items.push({
    id: 'dining-el-tovar',
    category: 'dining',
    title: 'Book El Tovar lunch (May 12) — Tock opens Apr 12',
    description: '30-day window opens Apr 12 at 6am MST. Set alarm!',
    status: 'pending',
    deadline: '2026-04-12',
    tripDay: 3,
    estimatedCost: 80,
    bookingUrl: 'https://www.exploretock.com/el-tovar-dining-room---grand-canyon-south-rim',
    notes: 'Set alarm 5:55am MST April 12. Create Tock account NOW. Lunch easier than dinner. ~$40/pp. Backup: Arizona Room (no res, arrive 4:30pm).',
    updatedAt: now(),
  });

  items.push({
    id: 'car-rental',
    category: 'car_rental',
    title: 'Book car rental LAS→FCA (21 days)',
    description: 'Compact SUV one-way. National (no drop fee), Budget/Avis (AARP 30% off), Costco Travel, AutoSlash.',
    status: 'pending',
    deadline: '2026-04-15',
    tripDay: 1,
    estimatedCost: 1040,
    bookingUrl: 'https://www.autoslash.com',
    notes: 'May 10 LAS → May 31 FCA = 21 days. National Emerald Club (free, may waive drop fee). Budget BCD Y508539 / Avis AWD A359824 (AARP 30% off). Costco Travel (free extra driver). AutoSlash (price tracker). Try 28-day quote (weekly rate may be cheaper).',
    cardTip: '💳 PAY WITH Chase Sapphire Reserve — primary rental insurance, full 21 days. Decline ALL CDW/LDW (saves $300-400).',
    updatedAt: now(),
  });

  // =============================================
  // PRIORITY 5: SIGNUPS & PASSES (do before booking)
  // =============================================

  items.push({
    id: 'signup-aarp',
    category: 'pass',
    title: 'Sign up AARP ($12) — do BEFORE booking hotels/car',
    description: '30-35% off Avis/Budget. 10% off hotels. Instant Hilton Silver. Pays for itself on 1 booking.',
    status: 'pending',
    tripDay: 0,
    estimatedCost: 12,
    bookingUrl: 'https://www.aarp.org/membership/',
    notes: 'Unlocks: 30-35% off car rental, 10% hotel discounts, instant Hilton Silver status. Only $12/year.',
    updatedAt: now(),
  });

  items.push({
    id: 'signup-hilton',
    category: 'pass',
    title: 'Sign up Hilton Honors (free) — do BEFORE booking Page',
    description: 'Member rates at Hampton Inn Page. With AARP = Silver status.',
    status: 'pending',
    tripDay: 0,
    bookingUrl: 'https://www.hilton.com/en/hilton-honors/',
    notes: 'Free signup. Member rate at Hampton Inn Page + Homewood Suites SLC. With AARP = Silver (20% bonus points).',
    updatedAt: now(),
  });

  items.push({
    id: 'signup-national',
    category: 'pass',
    title: 'Sign up National Emerald Club (free) — for car rental',
    description: 'May waive airport-to-airport drop fee. Skip counter. Choose your car.',
    status: 'pending',
    tripDay: 0,
    bookingUrl: 'https://www.nationalcar.com/en/loyalty/program.html',
    notes: 'Free signup. Benefits: choose car from Emerald Aisle, no extra driver fees, Drop & Go returns. May waive LAS→FCA drop fee.',
    updatedAt: now(),
  });

  items.push({
    id: 'pass-colin',
    category: 'pass',
    title: 'Buy America the Beautiful Pass ($80)',
    description: "Covers Colin + Mom + Robin as passengers. Mom does NOT need $250 nonresident pass.",
    status: 'pending',
    deadline: '2026-05-10',
    tripDay: 2,
    estimatedCost: 80,
    bookingUrl: 'https://store.usgs.gov/pass/annual',
    notes: "Colin's pass covers all passengers including nonresident fees. SAVES $250!",
    updatedAt: now(),
  });

  items.push({
    id: 'setup-flights-tracking',
    category: 'activity',
    title: 'Set up Google Flights price tracking (6 routes)',
    description: 'Toggle "Track prices" on each route. Email alerts when prices drop.',
    status: 'pending',
    tripDay: 0,
    bookingUrl: 'https://www.google.com/travel/flights',
    notes: 'Sunday flights are 40% pricier than weekday. Track all 6 routes. Most volatile: Robin SEA→FCA ($174-274) and Mom FCA→YYZ ($293-375).',
    updatedAt: now(),
  });

  return items;
}
