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
    title: '🔴 Book Glacier cabin — 20% early bird expires END OF TODAY!',
    description: 'Paddle Ridge Cabins at West Glacier. Cabin rates $318-523/night (20% off = $254-418). Call 406-888-5454 NOW. 2 nights Fri-Sat May 29-30.',
    status: 'pending',
    deadline: '2026-03-31',
    tripDay: 20,
    estimatedCost: 510,
    bookingUrl: 'https://www.glacierparkcollection.com/lodging/paddle-ridge/',
    notes: 'Paddle Ridge (Glacier Park Collection): cabins at West Glacier entrance. Full rates $318-523/night; 20% early bird = $254-418/night for May 1-Jul 1 stays. DEADLINE: March 31 (TODAY). Call 406-888-5454. Alt: Belton Chalet (historic, $150-250), Whitefish hotels 30min away ($120-200). Prices as of Mar 31.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-gc',
    category: 'accommodation',
    title: '🔴 Call Yavapai Lodge (in-park GC) — likely sold out, check NOW',
    description: 'In-park Yavapai Lodge $140-200+/night. Books 13+ months ahead for May. Call 877-404-4611 NOW. Tusayan fallback: Holiday Inn $170-250, Grand Hotel from $102.',
    status: 'pending',
    deadline: '2026-03-31',
    tripDay: 2,
    estimatedCost: 350,
    bookingUrl: 'https://www.visitgrandcanyon.com/stay/lodging/yavapai-lodge/',
    notes: 'CALL Xanterra 877-404-4611 (not online). In-park = no re-entry, sunset/sunrise access. Yavapai East = renovated. Likely sold out for May — CALL ANYWAY. Tusayan fallbacks: Holiday Inn Resort The Squire ($170-250), Grand Hotel from $102, Grand Canyon Hotel & Suites from $89-131. 2 nights Mon-Tue May 11-12. Prices as of Mar 31.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-moab',
    category: 'accommodation',
    title: '🔴 Book Moab (4n May 16-19) — PEAK SEASON avg $309/night!',
    description: 'May is Moab\'s most expensive month. Aarchway Inn $130-180 (best value, free breakfast, WiFi). Hyatt Place $200-320 (premium). Book 2+ months out.',
    status: 'pending',
    deadline: '2026-03-31',
    tripDay: 7,
    estimatedCost: 640,
    bookingUrl: 'https://www.hyatt.com/hyatt-place/en-US/slczm-hyatt-place-moab/rooms',
    notes: 'May = MOST EXPENSIVE month in Moab (avg $309/night). Aarchway Inn: $130-180/night, best breakfast, fast WiFi, pool/hot tub (saves $150-500 vs Hyatt over 4n). Hyatt Place casita: 841sqft 2BR/2BA, $200-320/night (ONLY 8 exist). Moab Springs Ranch: #1 TripAdvisor. 4 nights Sat-Tue May 16-19. Prices as of Mar 31.',
    cardTip: '💳 Chase UR → World of Hyatt (1:1). 12-15K pts/night casita. Or Aarchway via Chase Travel portal.',
    updatedAt: now(),
  });

  // =============================================
  // PRIORITY 2: BOOK FLIGHTS (actual fares Mar 23)
  // =============================================

  items.push({
    id: 'flight-mom-return',
    category: 'flight',
    title: 'Book Mom FCA→YYZ May 31 (Sun) — $286 via Denver',
    description: 'United via DEN $286 (6h54m, safe layover). Alaska via SEA $289. United via ORD $289.',
    status: 'pending',
    tripDay: 22,
    estimatedCost: 286,
    bookingUrl: 'https://www.google.com/travel/flights?tfs=CBwQAhoiEgoyMDI2LTA1LTMxagcIARIDRkNBcgcIARIDWVlacAFAAUgBcAE&hl=en&gl=us',
    notes: 'United 6:20am via DEN $286 (6h54m, comfortable for 80yo). Alaska 6:15am via SEA $289 (7h30m). United 12:35pm via ORD $289 (6h9m, later departure). Prices as of Mar 31.',
    cardTip: '💳 Chase Travel portal (1.5x = 19,000 UR pts) or Capital One 2x miles.',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-colin-out',
    category: 'flight',
    title: 'Book Colin SEA→LAS May 10 (Sun) — $81 Alaska nonstop',
    description: 'Alaska $81 nonstop. Delta $89. Frontier $67 (0 bags). Multiple daily nonstops.',
    status: 'pending',
    tripDay: 1,
    estimatedCost: 81,
    bookingUrl: 'https://www.google.com/travel/flights?tfs=CBwQAhoiEgoyMDI2LTA1LTEwagcIARIDU0VBcgcIARIDTEFTcAFAAUgBcAE&hl=en&gl=us',
    notes: 'Alaska 2:45pm nonstop $81. Delta 9:45am nonstop $89. Frontier 11:37am $67 (basic, 0 bags = add $40-60). Prices as of Mar 31.',
    cardTip: '💳 Capital One Venture X → Alaska Mileage Plan. Or Chase Travel portal (1.5x).',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-mom-out',
    category: 'flight',
    title: 'Book Mom YYZ→LAS May 10 (Sun) — $129 Air Canada nonstop',
    description: 'Air Canada Rouge 8:35pm nonstop $129. Porter $228 (2-2 seating, no middle). WestJet $123 (1 stop YYC).',
    status: 'pending',
    tripDay: 1,
    estimatedCost: 129,
    bookingUrl: 'https://www.google.com/travel/flights?tfs=CBwQAhoiEgoyMDI2LTA1LTEwagcIARIDWVlacgcIARIDTEFTcAFAAUgBcAE&hl=en&gl=us',
    notes: 'Air Canada Rouge 8:35pm nonstop $129 (4h54m, best value). Porter $228 nonstop (2-2 seats, no middle = most comfortable for 80yo, but $99 more). WestJet $123 via YYC (10h15m = too long). Prices as of Mar 31 — Porter rose $34 since last week.',
    cardTip: '💳 Amex Platinum: 5x MR pts via Amex Travel. Or book Air Canada direct.',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-colin-return',
    category: 'flight',
    title: 'Book Colin + Robin FCA→SEA May 31 — $152 each Alaska 🔥',
    description: 'Alaska 11:33am nonstop $152/person ($303 total for 2). PRICE DROP from $234!',
    status: 'pending',
    tripDay: 22,
    estimatedCost: 303,
    bookingUrl: 'https://www.google.com/travel/flights?tfs=CBwQAhoiEgoyMDI2LTA1LTMxagcIARIDRkNBcgcIARIDU0VBcAFAAUgBcAE&hl=en&gl=us',
    notes: 'Alaska 11:33am nonstop $152/person = $303 total (was $468 last week!). 6:15am also available at $167/person. Book together for adjacent seats. Prices as of Mar 31.',
    cardTip: '💳 Capital One → Alaska Mileage Plan (1:1). Or Chase portal (1.5x = 10,100 pts each).',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-robin-out',
    category: 'flight',
    title: 'Book Robin SEA→FCA May 29 (Fri) — $127-152 Alaska 🔥',
    description: 'Alaska 1:13pm nonstop $127 (half day off) or 9:35pm $152 (after work). HUGE drop from $274!',
    status: 'pending',
    tripDay: 20,
    estimatedCost: 152,
    bookingUrl: 'https://www.google.com/travel/flights?tfs=CBwQAhoiEgoyMDI2LTA1LTI5agcIARIDU0VBcgcIARIDRkNBcAFAAUgBcAE&hl=en&gl=us',
    notes: 'Alaska 1:13pm nonstop $127 (leaves early). Alaska 8:30am nonstop $127 (if full day off). 9:35pm nonstop $152 (after work, arrives 11:58pm). Delta 5:30am via SLC $124 (too early). Prices as of Mar 31.',
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
    description: 'Teton Valley Cabins $150-200 (reliable WiFi). Teton View Cabin Airbnb $150-300 (8 acres, Teton views — verify WiFi). VRBO cabins $120-250.',
    status: 'pending',
    deadline: '2026-04-01',
    tripDay: 15,
    estimatedCost: 510,
    bookingUrl: 'https://www.airbnb.com/rooms/50740489',
    notes: 'Teton Valley Cabins: $150-200/night, log cabins with confirmed reliable WiFi, Teton views, cottonwood forest. Airbnb "Teton View Cabin" (50740489): new-build, 8 private acres — VERIFY WIFI with host before booking. VRBO has many Teton-view cabins $120-250. May is pre-peak but Memorial Day wknd (May 25) = prices up. Prices as of Mar 31.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-vegas',
    category: 'accommodation',
    title: 'Book Las Vegas (1n Sun May 10)',
    description: 'Best Western Casino Royale: $80-110, NO resort fee, center Strip. Alt: Hampton Inn Tropicana ($100-130, free breakfast, off-Strip).',
    status: 'pending',
    deadline: '2026-04-15',
    tripDay: 1,
    estimatedCost: 95,
    bookingUrl: 'https://www.bestwestern.com/en_US/book/hotel-rooms.29087.html',
    notes: 'Casino Royale: ONLY Strip hotel with $0 resort fee + free parking. Sunday $80-110. Mother\'s Day wknd (May 10). Alt: Hampton Inn Tropicana ($100-130, free breakfast, off-Strip). Join BW Rewards (free) for member rate. No rush — good availability. Prices as of Mar 31.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-page',
    category: 'accommodation',
    title: 'Book Page AZ (3n May 13-15)',
    description: 'Hampton Inn $120-160/night (best reviews, free breakfast). Alt: Holiday Inn Express $110-150. Small market, no rush.',
    status: 'pending',
    deadline: '2026-04-15',
    tripDay: 4,
    estimatedCost: 420,
    bookingUrl: 'https://www.hilton.com/en/hotels/pgalphx-hampton-suites-page-lake-powell/',
    notes: 'Hampton Inn: #5 of 28 in Page, built 2014, 8.6/10, free hot breakfast, indoor pool. Avg $121/night, May rates $120-160. Holiday Inn Express $110-150 (backup). Sign up Hilton Honors + AARP first for 5-15% off. Small market, good availability. Prices as of Mar 31.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-slc',
    category: 'accommodation',
    title: 'Book SLC (4n May 20-23) — best WiFi for work',
    description: 'Homewood Suites $100-150/night (full kitchen, free breakfast, Wed social). Hyatt House $120-160 (workstation). Crystal Inn $111-169 (biggest rooms). May = cheap month for SLC.',
    status: 'pending',
    deadline: '2026-04-15',
    tripDay: 11,
    estimatedCost: 520,
    bookingUrl: 'https://www.hilton.com/en/hotels/slcblhw-homewood-suites-salt-lake-city-downtown/',
    notes: 'Homewood Suites: 2BR suite, full kitchen, free breakfast + Wed evening social (free food/drinks). $100-150/night. Hyatt House: dedicated workstation + kitchen, $120-160/night. Crystal Inn: 30% larger rooms, full breakfast, free parking, $111-169/night. May = cheap in SLC, no urgency. Prices as of Mar 31.',
    cardTip: '💳 Homewood = Hilton Honors eligible. Hyatt House = Chase UR → World of Hyatt.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-yellowstone',
    category: 'accommodation',
    title: 'Book W. Yellowstone (2n May 27-28) — season opening, book soon',
    description: 'Kelly Inn $150-220 (#2 rated, biggest pool, free breakfast). Explorer Cabins $222+ (kitchenette + fireplace, +$22 fees). Gray Wolf Inn (renovated 2026).',
    status: 'pending',
    deadline: '2026-04-15',
    tripDay: 18,
    estimatedCost: 360,
    bookingUrl: 'https://www.yellowstonekellyinn.com/',
    notes: 'Kelly Inn: #2 of 41 hotels, closest to park entrance, indoor heated pool/hot tub, free breakfast, $150-220/night. Explorer Cabins: cabin-style, kitchenette + fireplace, $222+/night PLUS $20 amenity + $2 TBID fees. Gray Wolf Inn: renovated 2026, similar tier. YS season opens May — 78 rooms at Kelly Inn fill up. Prices as of Mar 31.',
    updatedAt: now(),
  });

  // =============================================
  // PRIORITY 4: ACTIVITIES & CAR
  // =============================================

  items.push({
    id: 'activity-antelope',
    category: 'activity',
    title: '✅ Upper Antelope Canyon — BOOKED 10:30am May 14',
    description: 'Antelope Slot Canyon Tours (Tsosie family). Upper Canyon with light beams. 10:30am Thu May 14. 2 adults.',
    status: 'booked',
    deadline: '2026-04-14',
    tripDay: 5,
    estimatedCost: 220,
    bookingUrl: 'https://antelopeslotcanyon.com/',
    notes: 'BOOKED: 2 adults, 10:30am May 14, Upper Antelope Canyon. $95/person + $15 Navajo fee = $220 total. Luxury enclosed 4x4 vans. Colin signed waiver — MOM STILL NEEDS TO SIGN. Check email for waiver link.',
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
    description: 'Toggle "Track prices" on each route. Email alerts when prices drop. Prices dropped significantly this week!',
    status: 'pending',
    tripDay: 0,
    bookingUrl: 'https://www.google.com/travel/flights',
    notes: 'Prices dropped across the board Mar 31 vs Mar 23. FCA→SEA dropped $82/person, Robin SEA→FCA dropped $122. Track all 6 routes — may drop further or bounce back. Most volatile: Robin SEA→FCA ($127-152) and Mom FCA→YYZ ($286-289).',
    updatedAt: now(),
  });

  return items;
}
