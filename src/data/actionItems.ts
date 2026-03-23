import { ActionItem } from '@/types/actions';

function now() {
  return new Date().toISOString();
}

export function generateActionItems(): ActionItem[] {
  const items: ActionItem[] = [];

  // =============================================
  // PRIORITY 1: BOOK NOW — peak season fills fast
  // =============================================

  items.push({
    id: 'acc-moab',
    category: 'accommodation',
    title: 'Book Moab hotel (4n May 18-21) — PEAK SEASON',
    description: 'Hyatt Place Moab: 2BR casita option ($200-250/night), free breakfast, best hotel in Moab. Alt: Aarchway Inn ($150, free breakfast). May is peak — book ASAP.',
    status: 'pending',
    deadline: '2026-03-31',
    tripDay: 8,
    estimatedCost: 600,
    bookingUrl: 'https://www.hyatt.com/hyatt-place/en-US/slczm-hyatt-place-moab/rooms',
    notes: 'Hyatt Place 2BR casita: king + 2 queens, kitchenette, 841 sqft. Free WiFi (good reviews). Alt: Aarchway Inn $150/night (free hot breakfast, fast WiFi confirmed). May is PEAK in Moab — book now.',
    cardTip: '💳 Chase UR → World of Hyatt transfer (1:1). Hyatt points = best hotel value. ~12,000-15,000 pts/night for casita. Check Chase portal too.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-glacier',
    category: 'accommodation',
    title: 'Book Glacier lodging (2n May 30-31, need 2BR for Robin)',
    description: 'The Kabins: luxury 2BR cabin ($200-300/night), 15min to Glacier. Alt: Meadow Lake Resort 2BR condo ($150-180). Must have 2 bedrooms for Robin joining.',
    status: 'pending',
    deadline: '2026-04-01',
    tripDay: 20,
    estimatedCost: 450,
    bookingUrl: 'https://www.thekabins.com/',
    notes: 'The Kabins: 2 separate bedrooms, luxury finishes, full kitchen. Small property — limited availability. Alt: Meadow Lake Resort 2BR condo ($150/night), Glacier Hidden Cabins (queen + loft with 2 queens).',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-driggs',
    category: 'accommodation',
    title: 'Book Driggs lodging (3n May 25-27) — Memorial Day wknd',
    description: 'Teton View Cabin on Airbnb: unobstructed Teton views, new build, 8 private acres ($150-200/night). Alt: Teton Valley Cabins ($130-160). Memorial Day = book early.',
    status: 'pending',
    deadline: '2026-04-01',
    tripDay: 15,
    estimatedCost: 480,
    bookingUrl: 'https://www.airbnb.com/driggs-id/stays',
    notes: 'Search Airbnb for "Teton view cabin Driggs" — several new builds with mountain views. WiFi varies (log walls block signal). T-Mobile hotspot as backup. Memorial Day proximity = prices up.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-gc',
    category: 'accommodation',
    title: 'Book Grand Canyon lodging (2n May 12-13)',
    description: 'Grand Canyon Hotel & Suites Tusayan: $140-180/night, free breakfast, fridge/microwave. Alt: Red Feather Lodge ($165). Try Yavapai Lodge in-park (call 877-404-4611).',
    status: 'pending',
    deadline: '2026-04-01',
    tripDay: 2,
    estimatedCost: 330,
    bookingUrl: 'https://www.redfeatherlodge.com/',
    notes: 'In-park Yavapai Lodge East is best if available ($175-220, call 877-404-4611). Fallback: Red Feather Lodge $165/night or Grand Canyon Hotel & Suites $140-180/night (both Tusayan, 1mi from park).',
    updatedAt: now(),
  });

  // =============================================
  // PRIORITY 2: BOOK FLIGHTS (actual fares found!)
  // =============================================

  items.push({
    id: 'flight-mom-return',
    category: 'flight',
    title: 'Book Mom FCA→YYZ Jun 1 — $232 via Chicago!',
    description: 'United via ORD: $232 (cheapest!), 6h 9m. Delta via MSP: $375 (preferred routing, 6h 44m). Book on Google Flights.',
    status: 'pending',
    tripDay: 22,
    estimatedCost: 232,
    bookingUrl: 'https://www.google.com/travel/flights?type=2&q=Flights+from+FCA+to+YYZ+on+2026-06-01&curr=USD',
    notes: 'CHEAPEST: United via ORD $232 (50min connection — tight for 80yo). SAFER: Delta via MSP $375 (1h50m layover, manageable). American via ORD $232 (2h26m layover, better). Book earliest for best price.',
    cardTip: '💳 Chase Sapphire Reserve: book through Chase Travel portal for 1.5x points value ($232 = 15,467 UR pts). Or Capital One Venture X for 2x miles.',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-colin-out',
    category: 'flight',
    title: 'Book Colin SEA→LAS May 11 — $89 Alaska or Southwest',
    description: 'Multiple nonstops $89. Alaska 7:15am $99, 5:17pm $89. Southwest 6:15am $89. Frontier $64 but bags extra.',
    status: 'pending',
    tripDay: 1,
    estimatedCost: 89,
    bookingUrl: 'https://www.google.com/travel/flights?type=2&q=Flights+from+SEA+to+LAS+on+2026-05-11&curr=USD',
    notes: 'Alaska or Southwest at $89 (carry-on included). Frontier $64 but no bags. Early AM flights get you to Vegas by 9am for car pickup.',
    cardTip: '💳 Capital One Venture X: transfer points to Alaska Mileage Plan for potentially better value. Or Chase Travel portal (1.5x = 5,933 pts).',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-mom-out',
    category: 'flight',
    title: 'Book Mom YYZ→LAS May 11 — $159 Porter nonstop',
    description: 'Porter 9:55am nonstop $159 (basic, no bags). 2-2 seating, no middle seats. Upgrade to Economy Classic for bags (~$50 more).',
    status: 'pending',
    tripDay: 1,
    estimatedCost: 210,
    bookingUrl: 'https://www.flyporter.com/en_ca/flights-from-toronto-to-las-vegas',
    notes: 'Porter $159 basic + ~$50 bag upgrade = ~$210. Best for 80yo: no middle seats (2-2 config), free wine, wider seats. 9:55am departure ideal. Alt: WestJet $243 nonstop.',
    cardTip: '💳 Book direct on Porter. Amex Platinum: 5x MR points on flights booked through Amex Travel (check if Porter is available there).',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-colin-return',
    category: 'flight',
    title: 'Book Colin FCA→SEA Jun 1 — $164 Alaska nonstop',
    description: 'Alaska 5:40pm nonstop $164. Earlier flights $234. Could share flight with Robin!',
    status: 'pending',
    tripDay: 22,
    estimatedCost: 164,
    bookingUrl: 'https://www.google.com/travel/flights?type=2&q=Flights+from+FCA+to+SEA+on+2026-06-01&curr=USD',
    notes: 'Alaska 5:40pm at $164 is the deal. Morning flights $234. Book same flight as Robin if possible.',
    cardTip: '💳 Capital One Venture X: transfer to Alaska Mileage Plan (1:1). Or Chase Travel portal (1.5x = 10,933 pts).',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-robin-out',
    category: 'flight',
    title: 'Book Robin SEA→FCA May 30 (Sat AM or Fri eve)',
    description: 'Alaska nonstop ~$110-140. Check both Friday evening and Saturday morning options.',
    status: 'pending',
    tripDay: 20,
    estimatedCost: 125,
    bookingUrl: 'https://www.google.com/travel/flights?type=2&q=Flights+from+SEA+to+FCA+on+2026-05-30&curr=USD',
    notes: 'Robin can fly Friday evening after work (arrives ~9pm) or Saturday morning (arrives ~9am). Saturday morning means she joins for the full Glacier day.',
    cardTip: '💳 Capital One Venture X or Chase Travel portal — same Alaska flight strategy.',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-robin-return',
    category: 'flight',
    title: 'Book Robin FCA→SEA Jun 1 — share flight with Colin!',
    description: 'Alaska nonstop ~$164. Book same 5:40pm flight as Colin.',
    status: 'pending',
    tripDay: 22,
    estimatedCost: 164,
    bookingUrl: 'https://www.google.com/travel/flights?type=2&q=Flights+from+FCA+to+SEA+on+2026-06-01&curr=USD',
    notes: 'Same flight as Colin: Alaska 5:40pm FCA→SEA $164. Book together for adjacent seats.',
    cardTip: '💳 Same as Colin — Capital One Venture X or Chase Travel portal.',
    updatedAt: now(),
  });

  // =============================================
  // PRIORITY 3: REMAINING HOTELS
  // =============================================

  items.push({
    id: 'acc-vegas',
    category: 'accommodation',
    title: 'Book Las Vegas hotel (1n May 11)',
    description: 'Best Western Plus Casino Royale: $75-85/night, NO resort fee, free parking on the Strip. Best value. Alt: LINQ $50-70 + $50 resort fee.',
    status: 'pending',
    deadline: '2026-04-15',
    tripDay: 1,
    estimatedCost: 80,
    bookingUrl: 'https://www.bestwestern.com/en_US/book/hotel-rooms.29054.html',
    notes: 'Casino Royale: center Strip, NO resort fee (saves $50 vs LINQ/Flamingo), free parking, Outback Steakhouse + Denny\'s on-site. Total ~$80 vs LINQ total ~$120.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-page',
    category: 'accommodation',
    title: 'Book Page AZ hotel (4n May 14-17)',
    description: 'Hampton Inn & Suites: $113-140/night, best reviews (8.6/10), free hot breakfast, Hilton WiFi. Sign up Hilton Honors first.',
    status: 'pending',
    deadline: '2026-04-15',
    tripDay: 4,
    estimatedCost: 500,
    bookingUrl: 'https://www.hilton.com/en/hotels/pgalphx-hampton-suites-page-lake-powell/',
    notes: 'Hampton Inn: 8.6/10 on Booking.com. Free hot breakfast, indoor pool, RV/boat parking. 2 queen beds available. WiFi OK but not great — T-Mobile hotspot as backup for video calls.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-slc',
    category: 'accommodation',
    title: 'Book SLC hotel (3n May 22-24)',
    description: 'Crystal Inn: $90-130/night, oversize rooms, full hot breakfast, free airport shuttle. Best value in SLC.',
    status: 'pending',
    deadline: '2026-04-15',
    tripDay: 12,
    estimatedCost: 330,
    bookingUrl: 'https://www.crystalinnsaltlake.com/',
    notes: 'Crystal Inn: rooms are 30% larger than typical hotels. Full hot breakfast (not continental). Free parking. WiFi mixed reviews — use T-Mobile hotspot for video calls. AAA/AARP rates available.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-yellowstone',
    category: 'accommodation',
    title: 'Book W. Yellowstone hotel (2n May 28-29)',
    description: 'Best Western Desert Inn: $160-200/night, best breakfast in town, indoor pool. Alt: Kelly Inn ($140-150, biggest pool).',
    status: 'pending',
    deadline: '2026-04-15',
    tripDay: 18,
    estimatedCost: 340,
    bookingUrl: 'https://www.bestwestern.com/en_US/book/hotels-in-west-yellowstone/best-western-desert-inn/propertyCode.27088.html',
    notes: 'Best Western Desert Inn: 2 blocks from west entrance, free hot breakfast (best in town per reviews), indoor pool/hot tub. WiFi 53% fiber availability in W. Yellowstone. Alt: Kelly Inn $140 (largest indoor pool).',
    updatedAt: now(),
  });

  // =============================================
  // PRIORITY 4: ACTIVITIES & CAR
  // =============================================

  items.push({
    id: 'activity-antelope',
    category: 'activity',
    title: 'Book Antelope Canyon X tour (May 15)',
    description: 'Canyon X by Taadidiin Tours: boardwalk entry, best for Mom. 9am slot. ~$62/person.',
    status: 'pending',
    deadline: '2026-04-15',
    tripDay: 5,
    estimatedCost: 124,
    bookingUrl: 'https://taadidiintours.com/',
    notes: 'Canyon X: boardwalk entry, no ladders, wider paths. ~$62/pp. Alt: Upper Canyon ($92/pp) has light beams but 1-mile stair exit. Mom can handle stairs but Canyon X is easier.',
    updatedAt: now(),
  });

  items.push({
    id: 'dining-el-tovar',
    category: 'dining',
    title: 'Book El Tovar lunch (May 13)',
    description: 'Tock reservation. 30-day window opens Apr 13 at 6am MST. Book lunch (easier than dinner).',
    status: 'pending',
    deadline: '2026-04-13',
    tripDay: 3,
    estimatedCost: 80,
    bookingUrl: 'https://www.exploretock.com/el-tovar-dining-room---grand-canyon-south-rim',
    notes: 'Set alarm for 5:55am MST April 13. Create Tock account NOW. Lunch is easier to get than dinner. Budget ~$40/person. Backup: Arizona Room (no reservation, arrive 4:30pm for waitlist).',
    updatedAt: now(),
  });

  items.push({
    id: 'car-rental',
    category: 'car_rental',
    title: 'Book car rental LAS→FCA (21 days)',
    description: 'Compact SUV one-way. National (no drop fee!), AARP at Budget/Avis, Costco Travel, AutoSlash.',
    status: 'pending',
    deadline: '2026-04-15',
    tripDay: 1,
    estimatedCost: 1040,
    bookingUrl: 'https://www.autoslash.com',
    notes: 'May 11 LAS → Jun 1 FCA = 21 days. STEP 1: National Emerald Club (free, may waive drop fee). STEP 2: Budget BCD Y508539 / Avis AWD A359824. STEP 3: Costco Travel. STEP 4: AutoSlash price tracker. Decline rental insurance (credit card covers).',
    cardTip: '💳 PAY WITH Chase Sapphire Reserve — primary rental car insurance covers full 21 days. Decline ALL CDW/LDW at counter (saves $300-400). Capital One Venture X also has primary coverage.',
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
    notes: 'Unlocks: 30-35% off car rental at Avis/Budget, 10% hotel discounts, instant Hilton Silver status. Only $12/year.',
    updatedAt: now(),
  });

  items.push({
    id: 'signup-hilton',
    category: 'pass',
    title: 'Sign up Hilton Honors (free)',
    description: 'Member rates at Hampton Inn Page. With AARP = instant Silver status.',
    status: 'pending',
    tripDay: 0,
    bookingUrl: 'https://www.hilton.com/en/hilton-honors/',
    notes: 'Free signup. Use member rate at Hampton Inn Page (4 nights). With AARP = Silver status (20% bonus points).',
    updatedAt: now(),
  });

  items.push({
    id: 'pass-colin',
    category: 'pass',
    title: 'Buy America the Beautiful Pass ($80)',
    description: "Covers Colin + Mom + Robin as passengers. Mom does NOT need the $250 nonresident pass.",
    status: 'pending',
    deadline: '2026-05-11',
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
    notes: 'Takes 5 min. Especially important for Mom FCA→YYZ ($232-375 range) and Colin FCA→SEA ($164-234 range).',
    updatedAt: now(),
  });

  return items;
}
