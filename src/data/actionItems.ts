import { ActionItem } from '@/types/actions';

function now() {
  return new Date().toISOString();
}

export function generateActionItems(): ActionItem[] {
  const items: ActionItem[] = [];

  // =============================================
  // PRIORITY 1: BOOK NOW — peak season, limited supply
  // =============================================

  items.push({
    id: 'acc-moab',
    category: 'accommodation',
    title: 'Book Moab hotel (4n May 16-19) — PEAK SEASON',
    description: 'Hyatt Place Moab 2BR casita ($250-350/night peak May) — ONLY 8 casitas exist. Alt: Aarchway Inn ($150-180, free breakfast). Book ASAP.',
    status: 'pending',
    deadline: '2026-03-31',
    tripDay: 7,
    estimatedCost: 1000,
    bookingUrl: 'https://www.hyatt.com/hyatt-place/en-US/slczm-hyatt-place-moab/rooms',
    notes: 'Casita: 841 sqft, king + 2 queens, 2 baths, kitchenette. Sat check-in = priciest night. Alt: Aarchway Inn $150-180/night (free hot breakfast, fast WiFi). May is ABSOLUTE PEAK in Moab.',
    cardTip: '💳 Chase UR → World of Hyatt (1:1). 12-15K pts/night for casita = great value. Check Chase portal too.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-gc',
    category: 'accommodation',
    title: 'Book Grand Canyon lodging (2n May 11-12)',
    description: 'CALL Yavapai Lodge in-park first (877-404-4611). Fallback: Red Feather Lodge Tusayan ($140-175/night).',
    status: 'pending',
    deadline: '2026-04-01',
    tripDay: 2,
    estimatedCost: 330,
    bookingUrl: 'https://www.redfeatherlodge.com/',
    notes: 'In-park Yavapai Lodge East ($140-220) is best — no re-entry hassle. Call 877-404-4611 (Mon-Fri 7am-7pm MST). Fallback: Red Feather Lodge $140-175/night. Mon-Tue weeknights = good availability.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-glacier',
    category: 'accommodation',
    title: 'Book Glacier 2BR (2n May 29-30) — Robin joins',
    description: 'Meadow Lake Resort 2BR condo ($150-220/night). Full kitchen, washer/dryer. The Kabins is $450/night — too pricey.',
    status: 'pending',
    deadline: '2026-04-01',
    tripDay: 20,
    estimatedCost: 400,
    bookingUrl: 'https://meadowlake.com/',
    notes: 'Meadow Lake 2BR condo: confirmed 2 separate bedrooms, full kitchen, pool, spa. $150-220/night. Alt: Glacier Hidden Cabins (queen + loft with 2 queens). The Kabins = $450/night, skip it. Also check Airbnb/VRBO 2BR in Columbia Falls.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-driggs',
    category: 'accommodation',
    title: 'Book Driggs lodging (3n May 24-26) — Memorial Day wknd',
    description: 'Teton Valley Cabins ($140-180/night) or Airbnb with Teton views. Memorial Day Mon May 25 = higher prices.',
    status: 'pending',
    deadline: '2026-04-01',
    tripDay: 15,
    estimatedCost: 480,
    bookingUrl: 'https://www.tetonvalleycabins.com/',
    notes: 'Memorial Day proximity pushes prices. Teton Valley Cabins: rustic log cabins, 2 queens, fridge, microwave. WiFi spotty in log walls — T-Mobile hotspot backup. Airbnb new-build with Teton views may have better WiFi ($150-200/night).',
    updatedAt: now(),
  });

  // =============================================
  // PRIORITY 2: FLIGHTS (actual fares Mar 23, 2026)
  // =============================================

  items.push({
    id: 'flight-mom-return',
    category: 'flight',
    title: 'Book Mom FCA→YYZ May 31 (Sun) — $315 via Chicago',
    description: 'American via ORD: $315 (2h26m layover, safe for 80yo). United via ORD: $321 (50min layover, tight). Delta via MSP: ~$375.',
    status: 'pending',
    tripDay: 22,
    estimatedCost: 315,
    bookingUrl: 'https://www.google.com/travel/flights?tfs=CBwQAhoiEgoyMDI2LTA1LTMxagcIARIDRkNBcgcIARIDWVlacAFAAUgBcAE&hl=en&gl=us',
    notes: 'Sunday flights pricier than weekday. BEST FOR MOM: American 1:25pm via ORD $315 (2h26m layover = comfortable). United 12:35pm via ORD $321 (only 50min connection = risky). Delta via MSP ~$375 (safest routing).',
    cardTip: '💳 Chase Travel portal (1.5x = 21,000 UR pts) or Capital One 2x miles.',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-colin-out',
    category: 'flight',
    title: 'Book Colin SEA→LAS May 10 (Sun) — $89 Alaska nonstop',
    description: 'Alaska 2:45pm nonstop $89. Southwest 6:30am $89. Frontier $44 but no bags.',
    status: 'pending',
    tripDay: 1,
    estimatedCost: 89,
    bookingUrl: 'https://www.google.com/travel/flights?tfs=CBwQAhoiEgoyMDI2LTA1LTEwagcIARIDU0VBcgcIARIDTEFTcAFAAUgBcAE&hl=en&gl=us',
    notes: 'Many nonstop options at $89 (Alaska, Delta, Southwest). Frontier $44 basic but 0 bags. Early AM = arrive by 9am for car pickup.',
    cardTip: '💳 Capital One Venture X → Alaska Mileage Plan transfer. Or Chase Travel portal (1.5x = 5,933 pts).',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-mom-out',
    category: 'flight',
    title: 'Book Mom YYZ→LAS May 10 (Sun) — $194 Porter nonstop',
    description: 'Porter 9:55am nonstop $194 (basic). No middle seats (2-2 config), free wine. Add ~$50 for bag upgrade.',
    status: 'pending',
    tripDay: 1,
    estimatedCost: 244,
    bookingUrl: 'https://www.flyporter.com/en_us/flights-from-toronto-to-las-vegas',
    notes: 'Porter $194 basic + ~$50 bag upgrade = ~$244. Best for 80yo: 2-2 seating (no middle seats), free wine, wider seats. 9:55am departure ideal. Alt: Air Canada Rouge nonstop $204.',
    cardTip: '💳 Book direct on Porter. Amex Platinum: 5x MR points if booked through Amex Travel.',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-colin-return',
    category: 'flight',
    title: 'Book Colin FCA→SEA May 31 (Sun) — $234 Alaska nonstop',
    description: 'Alaska 11:33am nonstop $234. 6:15am also $234. Share flight with Robin!',
    status: 'pending',
    tripDay: 22,
    estimatedCost: 234,
    bookingUrl: 'https://www.google.com/travel/flights?tfs=CBwQAhoiEgoyMDI2LTA1LTMxagcIARIDRkNBcgcIARIDU0VBcAFAAUgBcAE&hl=en&gl=us',
    notes: 'Sunday = pricier than weekday ($234 vs $164). Alaska 11:33am nonstop is the sweet spot. Book same flight as Robin.',
    cardTip: '💳 Capital One Venture X → Alaska Mileage Plan (1:1). Or Chase Travel portal (1.5x = 15,600 pts).',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-robin-out',
    category: 'flight',
    title: 'Book Robin SEA→FCA May 29 (Fri eve) — $274 Alaska nonstop',
    description: 'Alaska 9:35pm nonstop $274. Arrives just before midnight. Alt: 1:13pm $234 if Robin can leave work early.',
    status: 'pending',
    tripDay: 20,
    estimatedCost: 274,
    bookingUrl: 'https://www.google.com/travel/flights?tfs=CBwQAhoiEgoyMDI2LTA1LTI5agcIARIDU0VBcgcIARIDRkNBcAFAAUgBcAE&hl=en&gl=us',
    notes: 'Friday evening = premium pricing. Alaska 9:35pm nonstop $274 (arrives 11:58pm). Delta 5:45pm via SLC $174 (arrives 11:14pm, 1 stop). Alaska 1:13pm nonstop $234 if Robin can leave early.',
    cardTip: '💳 Capital One Venture X or Chase Travel portal.',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-robin-return',
    category: 'flight',
    title: 'Book Robin FCA→SEA May 31 (Sun) — $234 same flight as Colin',
    description: 'Alaska 11:33am nonstop $234. Same flight as Colin — book together for adjacent seats.',
    status: 'pending',
    tripDay: 22,
    estimatedCost: 234,
    bookingUrl: 'https://www.google.com/travel/flights?tfs=CBwQAhoiEgoyMDI2LTA1LTMxagcIARIDRkNBcgcIARIDU0VBcAFAAUgBcAE&hl=en&gl=us',
    notes: 'Same flight as Colin: Alaska 11:33am FCA→SEA $234. Book together.',
    cardTip: '💳 Same as Colin.',
    updatedAt: now(),
  });

  // =============================================
  // PRIORITY 3: REMAINING HOTELS
  // =============================================

  items.push({
    id: 'acc-vegas',
    category: 'accommodation',
    title: 'Book Las Vegas hotel (1n Sun May 10)',
    description: 'Best Western Casino Royale: $90-120/night (Sunday). NO resort fee, free parking. Best total value on the Strip.',
    status: 'pending',
    deadline: '2026-04-15',
    tripDay: 1,
    estimatedCost: 100,
    bookingUrl: 'https://www.bestwestern.com/en_US/book/hotel-rooms.29087.html',
    notes: 'Sunday night, Mother\'s Day weekend may push price slightly. NO resort fee saves $40-52 vs LINQ/Flamingo. Free parking, 7 restaurants on-site. Join BW Rewards (free) for member rate.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-page',
    category: 'accommodation',
    title: 'Book Page AZ hotel (3n May 13-15)',
    description: 'Hampton Inn & Suites: $110-150/night, 8.6/10 reviews, free hot breakfast, Hilton WiFi.',
    status: 'pending',
    deadline: '2026-04-15',
    tripDay: 4,
    estimatedCost: 400,
    bookingUrl: 'https://www.hilton.com/en/hotels/pgalphx-hampton-suites-page-lake-powell/',
    notes: 'Sign up Hilton Honors + AARP FIRST for member rate + Silver status. Free hot breakfast saves ~$25/day. WiFi OK for basic work — T-Mobile hotspot backup for video calls.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-slc',
    category: 'accommodation',
    title: 'Book SLC hotel (4n May 20-23)',
    description: 'Crystal Inn: $130-170/night (was estimated $90-130 — UPDATED). Oversize rooms, full breakfast, free parking.',
    status: 'pending',
    deadline: '2026-04-15',
    tripDay: 11,
    estimatedCost: 600,
    bookingUrl: 'https://www.crystalinnsaltlake.com/',
    notes: 'PRICE UPDATED: website shows $148-171/night, not $90-130. Still best value with 30% larger rooms + full hot breakfast. Call (801) 328-4466 for AAA/AARP rate or multi-night discount. WiFi mixed — T-Mobile hotspot for video calls.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-yellowstone',
    category: 'accommodation',
    title: 'Book W. Yellowstone hotel (2n May 27-28)',
    description: 'Kelly Inn: $140-180/night. Largest indoor pool, free breakfast. Book direct for "Book Direct Special."',
    status: 'pending',
    deadline: '2026-04-15',
    tripDay: 18,
    estimatedCost: 320,
    bookingUrl: 'https://www.yellowstonekellyinn.com/',
    notes: 'Kelly Inn: #2 rated in W. Yellowstone. Free breakfast, indoor pool (largest in town). Late May = start of high season. Book direct at yellowstonekellyinn.com. Alt: Best Western Desert Inn $160-220.',
    updatedAt: now(),
  });

  // =============================================
  // PRIORITY 4: ACTIVITIES & CAR
  // =============================================

  items.push({
    id: 'activity-antelope',
    category: 'activity',
    title: 'Book Antelope Canyon X tour (May 14)',
    description: 'Canyon X by Taadidiin Tours: boardwalk entry, best for Mom. 9am slot. ~$62/person.',
    status: 'pending',
    deadline: '2026-04-14',
    tripDay: 5,
    estimatedCost: 124,
    bookingUrl: 'https://taadidiintours.com/',
    notes: 'Canyon X: boardwalk entry, no ladders, wider paths. ~$62/pp. Alt: Upper Canyon ($92/pp) has light beams but 1-mile stair exit. Mom can handle stairs but Canyon X is easier.',
    updatedAt: now(),
  });

  items.push({
    id: 'dining-el-tovar',
    category: 'dining',
    title: 'Book El Tovar lunch (May 12)',
    description: 'Tock reservation. 30-day window opens Apr 12 at 6am MST.',
    status: 'pending',
    deadline: '2026-04-12',
    tripDay: 3,
    estimatedCost: 80,
    bookingUrl: 'https://www.exploretock.com/el-tovar-dining-room---grand-canyon-south-rim',
    notes: 'Set alarm for 5:55am MST April 12. Create Tock account NOW. Lunch easier than dinner. Budget ~$40/person. Backup: Arizona Room (no reservation, arrive 4:30pm for waitlist).',
    updatedAt: now(),
  });

  items.push({
    id: 'car-rental',
    category: 'car_rental',
    title: 'Book car rental LAS→FCA (21 days)',
    description: 'Compact SUV one-way May 10-31. National (no drop fee), AARP at Budget/Avis, Costco Travel, AutoSlash.',
    status: 'pending',
    deadline: '2026-04-15',
    tripDay: 1,
    estimatedCost: 1040,
    bookingUrl: 'https://www.autoslash.com',
    notes: 'May 10 LAS → May 31 FCA = 21 days. STEP 1: National Emerald Club (free, may waive drop fee). STEP 2: Budget BCD Y508539 / Avis AWD A359824. STEP 3: Costco Travel. STEP 4: AutoSlash price tracker.',
    cardTip: '💳 PAY WITH Chase Sapphire Reserve — primary rental car insurance covers full 21 days. Decline ALL CDW/LDW at counter (saves $300-400).',
    updatedAt: now(),
  });

  // =============================================
  // PRIORITY 5: SIGNUPS & PASSES
  // =============================================

  items.push({
    id: 'signup-aarp',
    category: 'pass',
    title: 'Sign up for AARP ($12/year)',
    description: '30-35% off Avis/Budget car rental. 10% off hotels. Do BEFORE booking anything.',
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
    title: 'Sign up Hilton Honors (free)',
    description: 'Member rates at Hampton Inn Page (3 nights). With AARP = instant Silver status.',
    status: 'pending',
    tripDay: 0,
    bookingUrl: 'https://www.hilton.com/en/hilton-honors/',
    notes: 'Free signup. Use member rate at Hampton Inn Page. With AARP = Silver status (20% bonus points).',
    updatedAt: now(),
  });

  items.push({
    id: 'pass-colin',
    category: 'pass',
    title: 'Buy America the Beautiful Pass ($80)',
    description: "Covers Colin + Mom + Robin as passengers. Mom does NOT need the $250 nonresident pass.",
    status: 'pending',
    deadline: '2026-05-10',
    tripDay: 2,
    estimatedCost: 80,
    bookingUrl: 'https://store.usgs.gov/pass/annual',
    notes: "Colin's pass covers passengers including nonresident fees. Mom rides with Colin = covered. SAVES $250!",
    updatedAt: now(),
  });

  items.push({
    id: 'setup-google-flights',
    category: 'activity',
    title: 'Set up Google Flights price tracking (all 6 routes)',
    description: 'Search each route, toggle "Track prices." Email alerts on drops.',
    status: 'pending',
    tripDay: 0,
    bookingUrl: 'https://www.google.com/travel/flights',
    notes: 'Sunday flights are pricier ($234 FCA→SEA vs $164 on Monday). Track all 6 routes for price drops. Most important: Robin SEA→FCA ($274) and Mom FCA→YYZ ($315).',
    updatedAt: now(),
  });

  return items;
}
