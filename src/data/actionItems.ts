import { ActionItem } from '@/types/actions';

function now() {
  return new Date().toISOString();
}

export function generateActionItems(): ActionItem[] {
  const items: ActionItem[] = [];

  // =============================================
  // PRIORITY 1: TIME-SENSITIVE (book this week)
  // =============================================

  items.push({
    id: 'acc-glacier-earlybird',
    category: 'accommodation',
    title: 'Book Glacier lodging — 20% early bird!',
    description: 'Paddle Ridge 2BR cabin near west entrance. Need 2 bedrooms for Robin joining Jun 4-7. 20% off expires March 31!',
    status: 'pending',
    deadline: '2026-03-31',
    tripDay: 21,
    estimatedCost: 720,
    bookingUrl: 'https://www.glacierparkcollection.com/lodging/paddle-ridge/',
    notes: 'Call 1.844.868.7474. Select "Spring offer" in rate dropdown for 20% off. 2BR cabin: 4 queens, full kitchen, BBQ. ~$180/night with discount (reg ~$225). Alt: Airbnb 2BR in Columbia Falls ~$120/night.',
    updatedAt: now(),
  });

  // =============================================
  // PRIORITY 2: BOOK FLIGHTS NOW (2 months out = sweet spot)
  // =============================================

  items.push({
    id: 'flight-mom-return',
    category: 'flight',
    title: 'Book Mom FCA→YYZ Jun 8 (most urgent flight)',
    description: 'Delta via Minneapolis. Limited frequency from small FCA airport. Book 7am departure for best connections.',
    status: 'pending',
    tripDay: 25,
    estimatedCost: 275,
    bookingUrl: 'https://www.google.com/travel/flights?q=Flights+from+FCA+to+YYZ+on+2026-06-08&curr=USD',
    notes: 'HIGHEST RISK flight — FCA is tiny, limited daily departures. Delta FCA→MSP→YYZ is best routing. Request wheelchair assist at MSP. ~$200-350 range. Also check United via Denver (cheaper but harder connection for 80yo).',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-colin-out',
    category: 'flight',
    title: 'Book Colin SEA→LAS May 15',
    description: 'Alaska Airlines nonstop ~2h30m. Saver fare $59-79 if still available.',
    status: 'pending',
    tripDay: 1,
    estimatedCost: 75,
    bookingUrl: 'https://www.google.com/travel/flights?q=Flights+from+SEA+to+LAS+on+2026-05-15&curr=USD',
    notes: 'Alaska Saver fare is fine for solo flight (no seat pick, no changes). Also check Southwest (2 free bags). Set Google Flights price tracking.',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-mom-out',
    category: 'flight',
    title: 'Book Mom YYZ→LAS May 15 (Porter)',
    description: 'Porter Airlines direct ~5h. No middle seats, free wine, wider seats. Best for 80yo comfort.',
    status: 'pending',
    tripDay: 1,
    estimatedCost: 160,
    bookingUrl: 'https://www.flyporter.com/en_us/flights-from-toronto-to-las-vegas',
    notes: 'Porter E195-E2: 2-2 config (no middle seats!), free wine, 18.3" seats. Book on flyporter.com/en_us to pay USD from US card. ~CAD $195-250 / USD $140-180. WestJet is cheaper (~CAD $97) but has middle seats.',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-colin-return',
    category: 'flight',
    title: 'Book Colin FCA→SEA Jun 8',
    description: 'Alaska nonstop 1h50m. Simple booking.',
    status: 'pending',
    tripDay: 25,
    estimatedCost: 109,
    bookingUrl: 'https://www.google.com/travel/flights?q=Flights+from+FCA+to+SEA+on+2026-06-08&curr=USD',
    notes: 'Alaska Saver $80-99, Main Cabin $119-159. June peak season. If you have Alaska Visa card, book Main for free checked bag.',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-robin-out',
    category: 'flight',
    title: 'Book Robin SEA→FCA Jun 4 (Thu evening)',
    description: 'Alaska nonstop 1h21m. She needs a late afternoon/evening departure.',
    status: 'pending',
    tripDay: 21,
    estimatedCost: 115,
    bookingUrl: 'https://www.google.com/travel/flights?q=Flights+from+SEA+to+FCA+on+2026-06-04&curr=USD',
    notes: 'Book Main Cabin (not Saver) so Robin can pick a seat and change if needed. ~$99-139. Avoid the 10pm redeye (arrives after midnight). Look for 5-6pm departure arriving ~7:30pm FCA.',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-robin-return',
    category: 'flight',
    title: 'Book Robin FCA→SEA Jun 7 (Sunday)',
    description: 'Alaska nonstop. Sunday premium. Last flight ~8pm gives full day in Glacier.',
    status: 'pending',
    tripDay: 24,
    estimatedCost: 135,
    bookingUrl: 'https://www.google.com/travel/flights?q=Flights+from+FCA+to+SEA+on+2026-06-07&curr=USD',
    notes: 'Sunday = 15-25% pricier. ~$119-159. Book Main Cabin. Last flight ~8pm FCA → arrives ~8:50pm SEA. Drop Robin at FCA by 6:30pm.',
    updatedAt: now(),
  });

  // =============================================
  // PRIORITY 3: HOTELS (peak season fills fast)
  // =============================================

  const accommodations: { id: string; title: string; dayNum: number; cost: number; url: string; notes: string; deadline: string }[] = [
    {
      id: 'acc-gc',
      title: 'Book Grand Canyon lodging (May 17)',
      dayNum: 3, cost: 175,
      url: 'https://www.visitgrandcanyon.com/stay/lodging/yavapai-lodge/',
      notes: 'TRY IN-PARK FIRST: Yavapai Lodge East ($175-220) or Maswik Lodge ($140-180). Call 877-404-4611. In-park = no re-entry hassle, sunset/sunrise access. Fallback: Red Feather Lodge in Tusayan ($165).',
      deadline: '2026-03-25',
    },
    {
      id: 'acc-moab',
      title: 'Book Moab hotel (3n, May 21-23)',
      dayNum: 7, cost: 450,
      url: 'https://www.aarchwayinn.com/',
      notes: 'BEST: Aarchway Inn (~$150/night, FREE hot breakfast saves $30+/day). May is PEAK in Moab. Alt: Big Horn Lodge ($140, no breakfast). Budget: Expedition Lodge ($80-100).',
      deadline: '2026-03-25',
    },
    {
      id: 'acc-jackson',
      title: 'Book Jackson/Driggs lodging (5n, May 27-Jun 1)',
      dayNum: 13, cost: 550,
      url: 'https://www.airbnb.com/driggs-id/stays',
      notes: 'BEST DEAL: 2BR Airbnb in Driggs, ID (~$110/night). Kitchen saves $30-50/day on meals. Driggs is 30-40% cheaper than Jackson. 45min to GTNP via scenic Teton Pass. Alt: Teton Valley Cabins ($130-158).',
      deadline: '2026-04-01',
    },
    {
      id: 'acc-vegas',
      title: 'Book LINQ Hotel, Las Vegas (2n, May 15-16)',
      dayNum: 1, cost: 140,
      url: 'https://www.caesars.com/linq/hotel/deals',
      notes: 'Book direct at caesars.com for promo codes (20% off). WARNING: $50/night resort fee on top. True cost ~$120/night total. Check destinationcoupons.com for active LINQ codes. Sign up free Caesars Rewards.',
      deadline: '2026-04-15',
    },
    {
      id: 'acc-page',
      title: 'Book Page AZ hotel (3n, May 18-20)',
      dayNum: 4, cost: 360,
      url: 'https://www.hilton.com/en/hotels/pgalphx-hampton-suites-page-lake-powell/',
      notes: 'BEST: Hampton Inn ($113-130/night, free hot breakfast, indoor pool). Sign up free Hilton Honors first for member rate. Alt: Home2 Suites ($120, has kitchenette).',
      deadline: '2026-04-15',
    },
    {
      id: 'acc-slc',
      title: 'Book Crystal Inn, Salt Lake City (3n, May 24-26)',
      dayNum: 10, cost: 300,
      url: 'https://www.crystalinnsaltlake.com/',
      notes: 'Crystal Inn ($95-115/night): free breakfast, free parking, pool. Ask for AAA/AARP rate. Good value, confirmed.',
      deadline: '2026-04-15',
    },
    {
      id: 'acc-yellowstone',
      title: 'Book West Yellowstone hotel (1n, Jun 1)',
      dayNum: 18, cost: 110,
      url: 'https://www.brandiniron.com/',
      notes: "BEST VALUE: Brandin' Iron Inn (~$110/night, free breakfast, 2 hot tubs). Saves $30-50 vs Kelly Inn with similar amenities.",
      deadline: '2026-04-15',
    },
    {
      id: 'acc-bozeman',
      title: "Book C'mon Inn, Bozeman (2n, Jun 2-3)",
      dayNum: 19, cost: 260,
      url: 'https://www.cmoninn.com/bozeman',
      notes: "C'mon Inn ($130/night): free breakfast, indoor pool. Ask for AAA/AARP rate. Confirmed good pick.",
      deadline: '2026-04-15',
    },
  ];

  for (const acc of accommodations) {
    items.push({
      id: acc.id,
      category: 'accommodation',
      title: acc.title,
      description: acc.notes,
      status: 'pending',
      deadline: acc.deadline,
      tripDay: acc.dayNum,
      estimatedCost: acc.cost,
      bookingUrl: acc.url,
      notes: acc.notes,
      updatedAt: now(),
    });
  }

  // =============================================
  // PRIORITY 4: CAR RENTAL & ACTIVITIES
  // =============================================

  items.push({
    id: 'car-rental',
    category: 'car_rental',
    title: 'Book car rental LAS→FCA (24 days)',
    description: 'Compact SUV one-way. Get quotes from 4 sources, book cheapest with free cancellation, then track.',
    status: 'pending',
    deadline: '2026-04-15',
    tripDay: 1,
    estimatedCost: 1100,
    bookingUrl: 'https://www.autoslash.com',
    notes: 'STEP 1: National (free Emerald Club — may waive airport-to-airport drop fee!). STEP 2: Avis/Budget with AARP codes (AWD A359824 / BCD Y508539). STEP 3: Costco Travel (free extra driver). STEP 4: AutoSlash quote + set up price tracker. TIP: Try 28-day booking (may be cheaper than 24 via weekly rate).',
    updatedAt: now(),
  });

  items.push({
    id: 'activity-antelope',
    category: 'activity',
    title: 'Book Antelope Canyon X tour (May 19)',
    description: 'Canyon X by Taadidiin Tours: boardwalk entry, no stairs/ladders, best for Mom. Morning slot to avoid heat.',
    status: 'pending',
    deadline: '2026-04-19',
    tripDay: 5,
    estimatedCost: 124,
    bookingUrl: 'https://taadidiintours.com/',
    notes: 'Canyon X is BETTER for 80yo: boardwalk entry, no stairs, wider paths. Only ~$50-62/person (vs $92 at Upper). Book 9am slot (cooler). WARNING: their site says "not advised for 60+ in summer" due to heat — May 19 high ~90F, go early. Total ~$62/person x 2 = $124.',
    updatedAt: now(),
  });

  items.push({
    id: 'dining-el-tovar',
    category: 'dining',
    title: 'Book El Tovar dinner (May 17)',
    description: 'Book on Tock. Non-hotel guests get 30-day window (not 60!). Opens April 17 at 6am MST.',
    status: 'pending',
    deadline: '2026-04-17',
    tripDay: 3,
    estimatedCost: 180,
    bookingUrl: 'https://www.exploretock.com/el-tovar-dining-room---grand-canyon-south-rim',
    notes: 'CORRECTED: 30-day window for non-hotel guests. Opens Apr 17 at 6:00 AM MST. Book 6:30-7pm slot (sunset is 7:29pm May 17). Create Tock account NOW. Budget ~$80-100/person with drinks. Backup: Arizona Room (no reservation, arrive 4:30pm for waitlist).',
    updatedAt: now(),
  });

  // =============================================
  // PRIORITY 5: SIGNUP TASKS (free, do anytime)
  // =============================================

  items.push({
    id: 'signup-aarp',
    category: 'pass',
    title: 'Sign up for AARP ($12/year)',
    description: '10% off Hilton, Choice, Wyndham. 30-35% off Avis/Budget car rentals. Instant Hilton Silver status. Pays for itself on one hotel night.',
    status: 'pending',
    tripDay: 0,
    estimatedCost: 12,
    bookingUrl: 'https://www.aarp.org/membership/',
    notes: 'Do this BEFORE booking hotels and car rental. Unlocks: Hilton Silver status, 30-35% off Avis/Budget, 10% hotel discounts. Only $12/year.',
    updatedAt: now(),
  });

  items.push({
    id: 'signup-hilton',
    category: 'pass',
    title: 'Sign up Hilton Honors (free)',
    description: 'Free loyalty program. Member rates at Hampton Inn (Page). With AARP = instant Silver status.',
    status: 'pending',
    tripDay: 0,
    bookingUrl: 'https://www.hilton.com/en/hilton-honors/',
    notes: 'Free signup. Earn 10 pts/$1 at Hampton Inn Page. With AARP membership = instant Silver status (20% bonus points). Use member rate when booking.',
    updatedAt: now(),
  });

  items.push({
    id: 'signup-national',
    category: 'pass',
    title: 'Sign up National Emerald Club (free)',
    description: 'Free car rental loyalty. May waive airport-to-airport drop fee on LAS→FCA.',
    status: 'pending',
    tripDay: 0,
    bookingUrl: 'https://www.nationalcar.com/en/loyalty/program.html',
    notes: 'Free signup. Benefits: choose your car from Emerald Aisle, no extra driver fees, skip the counter. National reportedly waives drop fees between airport locations.',
    updatedAt: now(),
  });

  items.push({
    id: 'pass-colin',
    category: 'pass',
    title: 'Buy America the Beautiful Pass ($80)',
    description: 'Covers Colin + Mom + Robin as passengers. Mom does NOT need the $250 nonresident pass (Colin\'s pass covers her as a vehicle passenger).',
    status: 'pending',
    deadline: '2026-05-15',
    tripDay: 3,
    estimatedCost: 80,
    bookingUrl: 'https://store.usgs.gov/pass/annual',
    notes: 'KEY FINDING: NPS confirms the $80 pass covers "pass holder AND passengers including nonresident fees." Mom rides with Colin = no $250 nonresident pass needed. Buy online at recreation.gov or at Grand Canyon gate. SAVES $250!',
    updatedAt: now(),
  });

  items.push({
    id: 'setup-google-flights',
    category: 'activity',
    title: 'Set up Google Flights price tracking (all 6 routes)',
    description: 'Search each route on Google Flights, toggle "Track prices." Gets email alerts on price changes.',
    status: 'pending',
    tripDay: 0,
    bookingUrl: 'https://www.google.com/travel/flights',
    notes: 'Takes 5 min. Search each of the 6 routes, toggle the tracking switch. You\'ll get email alerts when prices drop.',
    updatedAt: now(),
  });

  return items;
}
