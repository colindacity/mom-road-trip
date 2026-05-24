// Buy/rent matrix — items to acquire along the route since Colin is flying in.
// Source: buy-rent agent run 2026-05-09. Verify stock by phone day-of for bear spray + Garmin rental.

export type GearStop = {
  item: string;
  must_buy_locally?: boolean;  // can't fly with it
  reason?: string;
  best: { store: string; address: string; price: string; hours?: string; phone?: string; note?: string };
  alternatives?: { store: string; address: string; price: string; note?: string }[];
  best_day: number;            // trip day to grab it
  best_city: string;
  recommendation?: string;
};

export const BUY_RENT: GearStop[] = [
  { item: '🐻 Bear spray (2 cans) — BUY DAY 15 EN ROUTE',
    must_buy_locally: true,
    reason: 'TSA prohibits checked AND carry-on — illegal to fly with. Need by Day 17 Tetons.',
    best: { store: 'Sportsman\'s Warehouse Idaho Falls', address: '2867 S 25th E, Idaho Falls ID (Exit 116 off I-15)', price: '$45-55/can (Counter Assault or UDAP)', hours: 'Sun 9am-7pm Mon-Sat 9am-9pm', phone: '208-552-9500', note: 'Day 15 lunch detour adds 10 min. Call ahead to confirm stock.' },
    alternatives: [
      { store: 'Cabela\'s Ammon (backup, Day 15)', address: '3500 E 17th St, Ammon ID', price: '$45-55/can', note: 'Sun 10am-7pm. Backup if Sportsman\'s out.' },
      { store: 'Yostmark Mountain Equipment Driggs', address: '12 W Main St, Driggs ID', price: '$50-60/can', note: 'Day 16 backup. Tiny shop, Memorial Day Mon hours may be reduced.' },
      { store: 'Sportsman & Ski Haus Kalispell', address: '145 Hutton Ranch Rd, Kalispell MT', price: '$45-55/can', note: 'Day 20 — too late for Tetons. Use only if Day 15 stop falls through.' },
      { store: 'Glacier Outfitters Apgar', address: '196 Apgar Loop Rd, West Glacier MT', price: '$10/day rental', note: 'Rental — Glacier only, not for Tetons/Yellowstone' },
    ],
    best_day: 15, best_city: 'Idaho Falls',
    recommendation: 'Buy 2 cans at Sportsman\'s Warehouse Idaho Falls on Day 15 lunch stop. Phone 208-552-9500 first to confirm. Cabela\'s Ammon is the backup. Note expiry date on cans.' },

  { item: 'Trekking poles × 2', best_day: 1, best_city: 'Las Vegas',
    reason: 'Can fly checked but bulky — easier to buy Day 1',
    best: { store: 'REI Las Vegas', address: '710 S Rampart Blvd, Las Vegas NV (NOT Maryland Pkwy — that store closed)', price: '$120-140/pair Black Diamond Trail Ergo Cork; $100 Leki Legacy Lite', hours: 'Mon-Sat 10am-9pm Sun 10am-7pm', phone: '702-951-4488' },
    alternatives: [
      { store: 'Walmart Las Vegas', address: '3041 N Rainbow Blvd', price: '$25-40/pair Cascade Mountain Tech', note: 'Cheapest, decent quality' },
      { store: 'REI SLC', address: '3285 E 3300 S', price: 'Same MSRP', note: 'If wait til Day 11 — better selection' },
    ],
    recommendation: 'Buy Day 1 LV — REI Rampart for Black Diamond, or Walmart for budget Cascade.' },

  { item: 'Foldable seat cane (Mom)', best_day: 1, best_city: 'Las Vegas',
    best: { store: 'Walmart Las Vegas', address: '3041 N Rainbow Blvd', price: '$25-40 Drive Medical or Vive 4-leg', hours: '6am-11pm', note: 'Pharmacy/medical aisle' },
    alternatives: [
      { store: 'CVS Pharmacy LV Strip', address: '3645 S Las Vegas Blvd (LINQ adjacent)', price: '$30-45', note: 'Walking distance LINQ' },
    ],
    recommendation: '4-leg style for Grand Canyon overlooks + Old Faithful 90-min eruption wait.' },

  { item: '40oz Hydro Flask × 3', best_day: 1, best_city: 'Las Vegas',
    reason: 'Heavy/bulky to fly — buy Day 1',
    best: { store: 'Target Las Vegas (Maryland Square)', address: '4001 S Maryland Pkwy', price: '$40-45 each', hours: '8am-10pm', note: '$5-10 cheaper than REI' },
    alternatives: [
      { store: 'Walmart LV', address: '3041 N Rainbow Blvd', price: '$30-40 Hydro Flask, $15-20 Owala/Iron Flask alt', note: 'Cheapest' },
    ] },

  { item: 'LMNT or Nuun electrolyte tabs', best_day: 1, best_city: 'Las Vegas',
    best: { store: 'Sprouts Farmers Market LV', address: '9460 W Flamingo Rd', price: '$20 LMNT 30-pack, $7 Nuun tube', hours: '7am-10pm', note: 'Stock up Day 1 — desert dehydration starts immediately' },
    alternatives: [
      { store: 'Whole Foods Henderson', address: '100 S Green Valley Pkwy', price: '$22 LMNT, $8 Nuun', note: 'LMNT more reliably stocked' },
    ] },

  { item: 'Mineral SPF 50 sunscreen × 6 bottles', best_day: 1, best_city: 'Las Vegas',
    reason: 'Liquid + heavy — buy along route. Math: 1oz/day/person × 22 × 2 = ~44oz needed.',
    best: { store: 'Target LV (Maryland Pkwy)', address: '4001 S Maryland Pkwy', price: '$15-19 Blue Lizard 5oz; $42 EltaMD UV Clear 1.7oz', note: 'Buy 3 Day 1, restock 3 in SLC for Glacier leg' },
    alternatives: [
      { store: 'CVS LV Strip', address: '3645 S Las Vegas Blvd', price: '$18-22 Blue Lizard', note: 'Walking distance LINQ' },
      { store: 'Sephora LV (Forum Shops)', address: '3500 S Las Vegas Blvd', price: '$42 EltaMD UV Clear', note: 'Only EltaMD reliable retail' },
    ],
    recommendation: 'Blue Lizard (real zinc) at Target/CVS. EltaMD only Sephora/online.' },

  { item: '10K mAh Anker power bank × 2', best_day: 1, best_city: 'Las Vegas',
    best: { store: 'Best Buy LV', address: '531 N Stephanie St, Henderson', price: '$25-30 Anker PowerCore 10000', hours: '10am-9pm' },
    alternatives: [
      { store: 'Target LV', address: '4001 S Maryland Pkwy', price: '$25-35', note: 'Often has Anker on shelf' },
      { store: 'Walmart LV', address: '3041 N Rainbow Blvd', price: '$20-30', note: 'Cheapest' },
    ] },

  { item: 'Headlamps × 3 (Black Diamond Spot 400)', best_day: 1, best_city: 'Las Vegas',
    reason: 'Need before Mesa Arch sunrise (Day 10)',
    best: { store: 'REI LV', address: '710 S Rampart Blvd', price: '$50 BD Spot 400; $40 Petzl Tikka', hours: 'Mon-Sat 10am-9pm', phone: '702-951-4488' },
    alternatives: [
      { store: 'Walmart LV', address: '3041 N Rainbow Blvd', price: '$15-25 Energizer Vision HD', note: 'Budget' },
    ] },

  { item: 'UPF 50 sun shirt for Mom', best_day: 1, best_city: 'Las Vegas',
    reason: 'Buy before desert leg Days 2-9',
    best: { store: 'REI LV (Rampart)', address: '710 S Rampart Blvd', price: '$45-65 REI Sahara LS; $59 Patagonia Capilene Cool Daily', note: 'Try on in store' },
    alternatives: [
      { store: 'Cabela\'s Lehi (south of SLC)', address: '2502 W Grand Terrace Pkwy, Lehi UT', price: '$30-50 Cabela\'s Guidewear/Columbia PFG', note: 'Cheaper Day 11 backup' },
    ] },

  { item: 'Wide-brim hat for Mom', best_day: 1, best_city: 'Las Vegas',
    best: { store: 'REI LV', address: '710 S Rampart Blvd', price: '$45 Sunday Afternoons Adventure; $90 Tilley T3', note: 'Sunday Afternoons better for hot desert; Tilley more durable' } },

  { item: 'Compression socks 15-20mmHg × 2 pair', best_day: 1, best_city: 'Las Vegas',
    best: { store: 'REI LV', address: '710 S Rampart Blvd', price: '$22-28/pair Sockwell or REI brand', note: 'Wear on flight back too' },
    alternatives: [
      { store: 'CVS LV Strip', address: '3645 S Las Vegas Blvd', price: '$15-25', note: 'Walking from LINQ' },
    ] },

  { item: 'Knee sleeves × 2 + KT Tape', best_day: 1, best_city: 'Las Vegas',
    reason: 'Before Grand Canyon hikes Days 2-3',
    best: { store: 'Sportsman\'s Warehouse LV', address: '8125 W Sahara Ave', price: '$20-30 McDavid 401; $90 Bauerfeind GenuTrain. KT Tape $13-18', note: 'Better selection than REI for braces' },
    alternatives: [
      { store: 'CVS LV Strip', address: '3645 S Las Vegas Blvd', price: '$20-35 ACE/Mueller', note: '24hr — walking from LINQ' },
    ] },

  { item: 'First-aid kit (AMK Mountain Series)', best_day: 1, best_city: 'Las Vegas',
    best: { store: 'REI LV', address: '710 S Rampart Blvd', price: '$30-45 AMK Day Tripper or Hiker', note: 'Day Tripper sufficient for 2 people' } },

  { item: 'Foldable cooler 24qt', best_day: 1, best_city: 'Las Vegas',
    reason: 'Need Day 1 for car snacks',
    best: { store: 'Walmart LV', address: '3041 N Rainbow Blvd', price: '$25-35 Coleman 24-can', note: 'Camping aisle' } },

  { item: 'Microfiber pack towels × 3', best_day: 1, best_city: 'Las Vegas',
    best: { store: 'Walmart LV', address: '3041 N Rainbow Blvd', price: '$8-15/each', note: 'Camping aisle' } },

  { item: 'Cash backup $300-500', best_day: 1, best_city: 'Las Vegas',
    reason: 'Avoid LAS airport ATMs — $5-10 fees',
    best: { store: 'Bank of America LINQ-adjacent', address: '3645 S Las Vegas Blvd #1 (Hawaiian Marketplace)', price: '$0 fee BofA customer; $3 non', hours: 'Mon-Fri 9am-5pm', note: 'Best rates on Strip, walking from LINQ' },
    alternatives: [
      { store: 'Smith\'s/Kroger SLC', address: 'Multiple SLC locations', price: '$0 fee w/ debit cash-back at checkout', note: 'Free cash up to $200 on grocery purchase — best deal on route' },
      { store: 'LAS Airport ATMs', address: 'Harry Reid Airport', price: '$5-10 fee', note: '⚠️ AVOID — worst fees on route' },
    ],
    recommendation: 'Smith\'s grocery cash-back in SLC = $0 fee, up to $200 on a $20 grocery purchase.' },

  { item: '🛰️ Garmin InReach Mini 2 RENTAL (off-grid SOS)', best_day: 0, best_city: 'Online → ship to LINQ',
    reason: 'Rent saves $400 vs $400 buy. Need for Yellowstone/Glacier dead zones.',
    best: { store: 'Outdoorsgeek.com (mail rental)', address: 'Ships to LINQ Hotel 3535 S Las Vegas Blvd', price: '$60-75/3 weeks + $35 sat plan = ~$95-110 total', hours: 'Order online 7-10 days ahead', note: 'MOST RELIABLE — ships device + activated subscription, prepaid return label. Order by May 1.' },
    alternatives: [
      { store: 'LowerGear Outdoors', address: 'Mail rental → LINQ', price: '$70/3 weeks + plan', note: 'Backup option' },
      { store: 'Buy Garmin InReach Messenger', address: 'Best Buy or REI LV', price: '$300 + $15/mo plan', note: 'BUY OPTION if planning future trips' },
    ],
    recommendation: 'You\'re past the May 1 ship cutoff. Day-of options: REI rentals (limited) or buy Messenger ($300 at Best Buy LV).' },

  // SLC restock items
  { item: 'Fine-mesh head nets × 2', best_day: 11, best_city: 'Salt Lake City',
    reason: 'Day before Antelope Island (Day 14) gnat peak',
    best: { store: 'REI SLC', address: '3285 E 3300 S', price: '$8-12 (Sea to Summit, Coghlan\'s)', hours: 'Mon-Sat 10am-9pm Sun 10am-6pm', phone: '801-486-2100' },
    alternatives: [
      { store: 'Walmart SLC', address: '350 W 2100 S', price: '$5-8 Coghlan\'s', note: 'Cheapest' },
    ] },

  { item: 'Permethrin clothing spray', best_day: 11, best_city: 'Salt Lake City',
    reason: 'Apply 24-48hr before Antelope Island Day 14 — dry overnight',
    best: { store: 'REI SLC', address: '3285 E 3300 S', price: '$10-15 Sawyer 12oz', note: 'Apply at Airbnb Day 12-13' },
    alternatives: [
      { store: 'Walmart SLC', address: '350 W 2100 S', price: '$8-12', note: 'Sporting goods aisle' },
    ] },

  { item: 'DEET 30% / Picaridin 20% bug spray', best_day: 11, best_city: 'Salt Lake City',
    best: { store: 'Walmart SLC', address: '350 W 2100 S', price: '$6-10 Sawyer Picaridin or OFF! Deep Woods', note: 'Picaridin doesn\'t damage gear/electronics' } },

  { item: '🥶 Hand warmers HotHands × 10 pairs', best_day: 11, best_city: 'Salt Lake City',
    reason: 'Tetons sunrise 40°F (Day 17) + Yellowstone 33°F (Days 18-19)',
    best: { store: 'Walmart SLC', address: '350 W 2100 S', price: '$10-15 for 10-pack', note: 'Sporting goods/seasonal aisle' } },

  { item: '🔭 Compact binoculars 8x25', best_day: 14, best_city: 'Salt Lake City',
    reason: 'Before Tetons (Day 17) + Yellowstone Lamar Valley (Day 19)',
    best: { store: 'Cabela\'s Lehi', address: '2502 W Grand Terrace Pkwy, Lehi UT (30min south of SLC)', price: '$80-100 Nikon Aculon A30; $60 Bushnell H2O', hours: 'Mon-Sat 9am-9pm Sun 10am-7pm', phone: '801-766-2500', note: 'Best optics selection on route' },
    alternatives: [
      { store: 'REI SLC', address: '3285 E 3300 S', price: '$90-120 Nikon Aculon, $130 Vortex Vanquish 8x26', note: 'Vortex has lifetime warranty' },
    ] },
];

export const stopsForDay = (day: number): GearStop[] =>
  BUY_RENT.filter(s => s.best_day === day);
