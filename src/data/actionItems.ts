import { ActionItem } from '@/types/actions';
import { tripData } from './tripData';

function now() {
  return new Date().toISOString();
}

export function generateActionItems(): ActionItem[] {
  const items: ActionItem[] = [];

  // --- EL TOVAR DINNER (most urgent — 60-day window) ---
  items.push({
    id: 'dining-el-tovar',
    category: 'dining',
    title: 'Book El Tovar dinner (May 17)',
    description: 'Tock reservation, 60-day window. Book dinner for 2 on May 17.',
    status: 'pending',
    deadline: '2026-03-18',
    tripDay: 3,
    bookingUrl: 'https://www.exploretock.com/el-tovar-dining-room---grand-canyon-south-rim',
    notes: 'Opens Mar 18 (60 days before May 17). Dinner 4:30-9:30pm. Required reservation.',
    updatedAt: now(),
  });

  // --- PADDLE RIDGE EARLY BIRD (20% off expires Mar 31) ---
  items.push({
    id: 'acc-glacier-earlybird',
    category: 'accommodation',
    title: 'Book Glacier lodging (20% early bird)',
    description: 'Paddle Ridge or Glacier Park Collection. Need 2BR for Robin joining Jun 4-7. Call 1.844.868.7474.',
    status: 'pending',
    deadline: '2026-03-31',
    tripDay: 21,
    estimatedCost: 600,
    bookingUrl: 'https://www.glacierparkcollection.com/lodging/paddle-ridge/',
    notes: '20% off if booked by March 31 for May 1-Jul 1 stays. Need 2 bedrooms Thu-Sun.',
    updatedAt: now(),
  });

  // --- ANTELOPE CANYON TOUR (sells out) ---
  items.push({
    id: 'activity-antelope',
    category: 'activity',
    title: 'Book Antelope Canyon tour (May 19)',
    description: 'Upper Antelope Canyon. Book 9:00 AM or 9:50 AM slot. $92/person + $15 Navajo fee.',
    status: 'pending',
    deadline: '2026-04-25',
    tripDay: 5,
    estimatedCost: 214,
    bookingUrl: 'https://fareharbor.com/embeds/book/antelopecanyon/items/49363/date/2026-05-19/',
    notes: '$92/person + $15 Navajo fee = $107/person x 2 = $214. Noon slot is premium priced.',
    updatedAt: now(),
  });

  // --- ACCOMMODATIONS (unique stays, actionable bookings only) ---
  const accommodations: { id: string; title: string; nights: number; dayNum: number; cost: number; url?: string; notes?: string; deadline: string }[] = [
    { id: 'acc-vegas', title: 'Book LINQ Hotel, Las Vegas (2n)', nights: 2, dayNum: 1, cost: 140, url: 'https://www.kayak.com/Las-Vegas-Hotels-The-LINQ-Hotel-Experience.23474.ksp', notes: 'May 15-16. Mid-week = cheap. Resort fee ~$45/night extra.', deadline: '2026-04-15' },
    { id: 'acc-gc', title: 'Book Red Feather Lodge, Grand Canyon (1n)', nights: 1, dayNum: 3, cost: 165, url: 'https://www.redfeatherlodge.com/', notes: 'May 17. Tusayan, 1mi from South Rim. Peak season — book early.', deadline: '2026-04-01' },
    { id: 'acc-page', title: 'Book Home2 Suites, Page AZ (3n)', nights: 3, dayNum: 4, cost: 360, url: 'https://www.kayak.com/Page-Hotels-Home2-Suites-by-Hilton-Page-Lake-Powell.6116940.ksp', notes: 'May 18-20. Free breakfast, kitchenette.', deadline: '2026-04-15' },
    { id: 'acc-moab', title: 'Book Big Horn Lodge, Moab (3n)', nights: 3, dayNum: 7, cost: 420, url: 'https://www.kayak.com/Moab-Hotels-Big-Horn-Lodge.70345.ksp', notes: 'May 21-23. MAY IS PEAK in Moab — book ASAP.', deadline: '2026-04-01' },
    { id: 'acc-slc', title: 'Book Crystal Inn, Salt Lake City (3n)', nights: 3, dayNum: 10, cost: 300, url: 'https://www.crystalinnsaltlake.com/', notes: 'May 24-26. Free breakfast, airport shuttle. Lower urgency.', deadline: '2026-04-15' },
    { id: 'acc-jackson', title: 'Book Elk Refuge Inn, Jackson WY (5n)', nights: 5, dayNum: 13, cost: 650, url: 'https://www.elkrefugeinn.net/', notes: 'May 27-Jun 1. Just after Memorial Day — check prices. Driggs/Victor cheaper.', deadline: '2026-04-01' },
    { id: 'acc-yellowstone', title: 'Book Kelly Inn, West Yellowstone (1n)', nights: 1, dayNum: 18, cost: 140, url: 'https://www.yellowstonekellyinn.com/', notes: 'Jun 1. Gateway town to Yellowstone west entrance.', deadline: '2026-04-15' },
    { id: 'acc-bozeman', title: "Book C'mon Inn, Bozeman (2n)", nights: 2, dayNum: 19, cost: 260, url: 'https://www.kayak.com/Bozeman-Hotels-C-mon-Inn-Bozeman.160638.ksp', notes: 'Jun 2-3. Free breakfast, indoor pool.', deadline: '2026-04-15' },
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

  // --- CAR RENTAL ---
  items.push({
    id: 'car-rental',
    category: 'car_rental',
    title: 'Book car rental LAS→FCA (24 days)',
    description: 'Compact AWD SUV one-way. Try Costco Travel, AutoSlash, Hertz DRIVE code. AARP 30% off at Budget.',
    status: 'pending',
    deadline: '2026-04-15',
    tripDay: 1,
    estimatedCost: 1160,
    bookingUrl: 'https://www.autoslash.com',
    notes: 'May 15 LAS pickup → Jun 8 FCA drop-off. Free cancellation — rebook if prices drop.',
    updatedAt: now(),
  });

  // --- FLIGHTS ---
  const flights: { id: string; title: string; cost: number; url: string; notes: string }[] = [
    { id: 'flight-colin-out', title: 'Book Colin SEA→LAS May 15', cost: 80, url: 'https://www.google.com/travel/flights?q=Flights+from+SEA+to+LAS+on+2026-05-15&curr=USD', notes: 'Alaska Airlines nonstop, ~2h40m. $59-100 range.' },
    { id: 'flight-mom-out', title: 'Book Mom YYZ→LAS May 15', cost: 200, url: 'https://www.google.com/travel/flights?q=Flights+from+YYZ+to+LAS+on+2026-05-15&curr=USD', notes: 'Porter Airlines direct ~4h30m. CAD $190-207 base.' },
    { id: 'flight-mom-return', title: 'Book Mom FCA→YYZ Jun 8', cost: 350, url: 'https://www.google.com/travel/flights?q=Flights+from+FCA+to+YYZ+on+2026-06-08&curr=USD', notes: 'Delta via MSP. HIGHEST RISK — limited frequency, book earliest.' },
    { id: 'flight-colin-return', title: 'Book Colin FCA→SEA Jun 8', cost: 130, url: 'https://www.google.com/travel/flights?q=Flights+from+FCA+to+SEA+on+2026-06-08&curr=USD', notes: 'Alaska nonstop 1h20m. ~$89-150 range.' },
    { id: 'flight-robin-out', title: 'Book Robin SEA→FCA Jun 4', cost: 110, url: 'https://www.google.com/travel/flights?q=Flights+from+SEA+to+FCA+on+2026-06-04&curr=USD', notes: 'Alaska nonstop 1h20m. Thu evening arrival.' },
    { id: 'flight-robin-return', title: 'Book Robin FCA→SEA Jun 7', cost: 110, url: 'https://www.google.com/travel/flights?q=Flights+from+FCA+to+SEA+on+2026-06-07&curr=USD', notes: 'Alaska nonstop. Sunday = pricier ($120-150).' },
  ];

  for (const f of flights) {
    items.push({
      id: f.id,
      category: 'flight',
      title: f.title,
      description: f.notes,
      status: 'pending',
      tripDay: f.id.includes('return') || f.id.includes('robin') ? 25 : 1,
      estimatedCost: f.cost,
      bookingUrl: f.url,
      notes: f.notes,
      updatedAt: now(),
    });
  }

  // --- PARK PASSES (buy at gate, lower priority) ---
  items.push({
    id: 'pass-colin',
    category: 'pass',
    title: 'Buy America the Beautiful Pass (Colin)',
    description: '$80 annual pass. Buy at Grand Canyon entrance or online at recreation.gov.',
    status: 'pending',
    deadline: '2026-05-15',
    tripDay: 3,
    estimatedCost: 80,
    bookingUrl: 'https://store.usgs.gov/pass/annual',
    notes: 'Can buy online or at first park entrance. Covers vehicle occupants.',
    updatedAt: now(),
  });

  items.push({
    id: 'pass-mom',
    category: 'pass',
    title: 'Buy Nonresident Pass (Mom)',
    description: '$250 pass covers $100 surcharge at 4 parks on this trip. Saves $150.',
    status: 'pending',
    deadline: '2026-05-15',
    tripDay: 3,
    estimatedCost: 250,
    bookingUrl: 'https://store.usgs.gov/2026-non-resident-annual-pass',
    notes: 'Covers Grand Canyon, Teton, Yellowstone, Glacier surcharges. Buy at gate or USGS store.',
    updatedAt: now(),
  });

  // Items are already in priority order as defined above.
  // No sort needed — the order above IS the priority.
  return items;
}
