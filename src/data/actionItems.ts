import { ActionItem } from '@/types/actions';

function now() {
  return new Date().toISOString();
}

export function generateActionItems(): ActionItem[] {
  const items: ActionItem[] = [];

  // =============================================
  // PRIORITY 1: TIME-SENSITIVE
  // =============================================

  items.push({
    id: 'acc-glacier',
    category: 'accommodation',
    title: 'Book Glacier lodging (May 29-31, 2BR)',
    description: 'Meadow Lake Resort 2BR condo or Paddle Ridge cabin. Need 2 bedrooms for Robin arriving Fri May 29.',
    status: 'pending',
    deadline: '2026-04-01',
    tripDay: 19,
    estimatedCost: 300,
    bookingUrl: 'https://meadowlake.com/',
    notes: 'Meadow Lake ~$150/night for 2BR condo. Alt: Paddle Ridge cabin (call 1.844.868.7474). Alt: Airbnb 2BR in Columbia Falls ~$135/night.',
    updatedAt: now(),
  });

  items.push({
    id: 'activity-antelope',
    category: 'activity',
    title: 'Book Antelope Canyon X tour (May 15)',
    description: 'Canyon X by Taadidiin Tours: boardwalk entry, no stairs, best for Mom. Book 9am slot.',
    status: 'pending',
    deadline: '2026-04-15',
    tripDay: 5,
    estimatedCost: 124,
    bookingUrl: 'https://taadidiintours.com/',
    notes: 'Canyon X is BETTER for 80yo: boardwalk entry, no stairs. ~$62/person x 2 = $124. Book 9am slot (cooler). May is peak — book early.',
    updatedAt: now(),
  });

  items.push({
    id: 'dining-el-tovar',
    category: 'dining',
    title: 'Book El Tovar lunch (May 13)',
    description: 'Tock reservation. Non-hotel guests: 30-day window opens Apr 13 at 6am MST.',
    status: 'pending',
    deadline: '2026-04-13',
    tripDay: 3,
    estimatedCost: 80,
    bookingUrl: 'https://www.exploretock.com/el-tovar-dining-room---grand-canyon-south-rim',
    notes: '30-day window for non-hotel guests. Opens Apr 13 at 6:00 AM MST. Book lunch (easier than dinner). Create Tock account NOW. Budget ~$40/person.',
    updatedAt: now(),
  });

  // =============================================
  // PRIORITY 2: BOOK FLIGHTS NOW
  // =============================================

  const flights: { id: string; title: string; cost: number; url: string; notes: string }[] = [
    { id: 'flight-mom-return', title: 'Book Mom FCA→YYZ May 31 (most urgent)', cost: 350, url: 'https://www.google.com/travel/flights?q=Flights+from+FCA+to+YYZ+on+2026-05-31&curr=USD', notes: 'Delta via MSP. HIGHEST RISK — limited frequency from small FCA airport. Book 7am departure for best connections.' },
    { id: 'flight-colin-out', title: 'Book Colin SEA→LAS May 11', cost: 80, url: 'https://www.google.com/travel/flights?q=Flights+from+SEA+to+LAS+on+2026-05-11&curr=USD', notes: 'Alaska Airlines nonstop ~2h30m. Saver fare $59-79.' },
    { id: 'flight-mom-out', title: 'Book Mom YYZ→LAS May 11 (Porter)', cost: 160, url: 'https://www.flyporter.com/en_us/flights-from-toronto-to-las-vegas', notes: 'Porter Airlines direct ~5h. No middle seats, free wine. Book on flyporter.com/en_us to pay USD.' },
    { id: 'flight-colin-return', title: 'Book Colin FCA→SEA May 31', cost: 130, url: 'https://www.google.com/travel/flights?q=Flights+from+FCA+to+SEA+on+2026-05-31&curr=USD', notes: 'Alaska nonstop 1h20m. Could be same flight as Robin!' },
    { id: 'flight-robin-out', title: 'Book Robin SEA→FCA May 29 (Fri eve)', cost: 110, url: 'https://www.google.com/travel/flights?q=Flights+from+SEA+to+FCA+on+2026-05-29&curr=USD', notes: 'Alaska nonstop 1h20m. After-work Friday flight. Arrives ~9pm.' },
    { id: 'flight-robin-return', title: 'Book Robin FCA→SEA May 31', cost: 110, url: 'https://www.google.com/travel/flights?q=Flights+from+FCA+to+SEA+on+2026-05-31&curr=USD', notes: 'Alaska nonstop. Could be same flight as Colin!' },
  ];

  for (const f of flights) {
    items.push({
      id: f.id,
      category: 'flight',
      title: f.title,
      description: f.notes,
      status: 'pending',
      tripDay: f.id.includes('return') || f.id.includes('robin') ? 21 : 1,
      estimatedCost: f.cost,
      bookingUrl: f.url,
      notes: f.notes,
      updatedAt: now(),
    });
  }

  // =============================================
  // PRIORITY 3: HOTELS
  // =============================================

  const accommodations: { id: string; title: string; dayNum: number; cost: number; url: string; notes: string; deadline: string }[] = [
    { id: 'acc-vegas', title: 'Book LINQ Hotel, Las Vegas (1n May 11)', dayNum: 1, cost: 70, url: 'https://www.caesars.com/linq/hotel/deals', notes: 'Mon night = cheap. Resort fee ~$50 extra. Check destinationcoupons.com for codes.', deadline: '2026-04-15' },
    { id: 'acc-gc', title: 'Book GC lodging, Tusayan (2n May 12-13)', dayNum: 2, cost: 330, url: 'https://www.redfeatherlodge.com/', notes: 'Red Feather Lodge ~$165/night. Try Yavapai Lodge in-park first (call 877-404-4611).', deadline: '2026-03-31' },
    { id: 'acc-page', title: 'Book Home2 Suites, Page AZ (3n May 14-16)', dayNum: 4, cost: 360, url: 'https://www.hilton.com/en/hotels/pgaplht-home2-suites-page-lake-powell/', notes: 'Free breakfast, kitchenette. Sign up Hilton Honors first for member rate.', deadline: '2026-04-15' },
    { id: 'acc-moab', title: 'Book Moab hotel (3n May 17-19)', dayNum: 7, cost: 450, url: 'https://www.aarchwayinn.com/', notes: 'Aarchway Inn ~$150/night (FREE hot breakfast). May is PEAK. Alt: Big Horn Lodge $140 (no breakfast).', deadline: '2026-03-31' },
    { id: 'acc-slc', title: 'Book SLC hotel (2n May 21-22)', dayNum: 11, cost: 200, url: 'https://www.crystalinnsaltlake.com/', notes: 'Crystal Inn ~$100/night. Free breakfast, free parking. Ask for AAA/AARP rate.', deadline: '2026-04-15' },
    { id: 'acc-driggs', title: 'Book Driggs lodging (2n May 24-25)', dayNum: 14, cost: 260, url: 'https://www.tetonvalleycabins.com/', notes: 'Teton Valley Cabins ~$130/night. Memorial Day wknd — book early! Alt: Airbnb in Driggs.', deadline: '2026-03-31' },
    { id: 'acc-yellowstone', title: 'Book W. Yellowstone hotel (2n May 27-28)', dayNum: 17, cost: 280, url: 'https://www.yellowstonekellyinn.com/', notes: 'Kelly Inn ~$140/night. Free breakfast, largest indoor pool in town.', deadline: '2026-04-15' },
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
  // PRIORITY 4: CAR RENTAL
  // =============================================

  items.push({
    id: 'car-rental',
    category: 'car_rental',
    title: 'Book car rental LAS→FCA (20 days)',
    description: 'Compact SUV one-way. National (no drop fee!), AARP at Budget/Avis, Costco Travel, AutoSlash.',
    status: 'pending',
    deadline: '2026-04-15',
    tripDay: 1,
    estimatedCost: 1000,
    bookingUrl: 'https://www.autoslash.com',
    notes: 'May 11 LAS → May 31 FCA = 20 days. STEP 1: National Emerald Club (free, may waive drop fee). STEP 2: Budget BCD Y508539 / Avis AWD A359824 (AARP). STEP 3: Costco Travel. STEP 4: AutoSlash price tracker.',
    updatedAt: now(),
  });

  // =============================================
  // PRIORITY 5: SIGNUPS & PASSES
  // =============================================

  items.push({
    id: 'signup-aarp',
    category: 'pass',
    title: 'Sign up for AARP ($12/year)',
    description: '30-35% off Avis/Budget car rental. 10% off hotels. Pays for itself on one booking.',
    status: 'pending',
    tripDay: 0,
    estimatedCost: 12,
    bookingUrl: 'https://www.aarp.org/membership/',
    notes: 'Do BEFORE booking car rental and hotels.',
    updatedAt: now(),
  });

  items.push({
    id: 'signup-hilton',
    category: 'pass',
    title: 'Sign up Hilton Honors (free)',
    description: 'Member rates at Hampton Inn (Page). With AARP = instant Silver status.',
    status: 'pending',
    tripDay: 0,
    bookingUrl: 'https://www.hilton.com/en/hilton-honors/',
    notes: 'Free signup. Use member rate when booking Page hotel.',
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
    notes: "NPS confirms the $80 pass covers pass holder AND passengers including nonresident fees. Mom rides with Colin = covered. SAVES $250!",
    updatedAt: now(),
  });

  items.push({
    id: 'setup-google-flights',
    category: 'activity',
    title: 'Set up Google Flights price tracking (all 6 routes)',
    description: 'Search each route, toggle "Track prices." Gets email alerts on drops.',
    status: 'pending',
    tripDay: 0,
    bookingUrl: 'https://www.google.com/travel/flights',
    notes: 'Takes 5 min. Search each route, toggle tracking. You\'ll get alerts when prices drop.',
    updatedAt: now(),
  });

  return items;
}
