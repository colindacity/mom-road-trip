import { ActionItem } from '@/types/actions';

// NOTE: This file duplicates booking metadata that also lives in src/data/tripData.ts.
// All entries below are kept in sync manually with tripData. The single-source-of-truth
// migration target is to derive these items from tripData.flights + tripData.days[].accommodation.
// Until that refactor, edit BOTH places when a booking changes.

function now() {
  return new Date().toISOString();
}

export function generateActionItems(): ActionItem[] {
  const items: ActionItem[] = [];

  // =============================================
  // ACCOMMODATIONS — ALL 8 BOOKED
  // =============================================

  items.push({
    id: 'acc-vegas',
    category: 'accommodation',
    title: '✅ Vegas — The LINQ Hotel & Casino',
    description: 'Hotels.com #73410152077445. Deluxe 2 Queen Non-Smoking. Sun May 10. Room paid via OneKeyCash, $56.63 resort fee at check-in.',
    status: 'booked',
    deadline: '2026-05-10',
    tripDay: 1,
    estimatedCost: 57,
    actualCost: 57,
    bookingUrl: 'https://www.hotels.com/',
    notes: 'BOOKED: The LINQ Hotel & Casino. 3535 Las Vegas Blvd S. In 4pm Sun, out 11am Mon. Hotels.com #73410152077445. Room $0 (OneKeyCash) + $56.63 resort fee at property.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-gc',
    category: 'accommodation',
    title: '✅ Grand Canyon — Maswik Lodge (In-Park, 20% off)',
    description: 'Xanterra #20514347. Standard 2 Queen North. 2n Mon-Wed May 11-13. $547.30 total ($273.65 deposit paid).',
    status: 'booked',
    deadline: '2026-05-11',
    tripDay: 2,
    estimatedCost: 547,
    actualCost: 547,
    bookingUrl: 'https://www.grandcanyonlodges.com/',
    notes: 'BOOKED: Maswik Lodge inside the park. Standard 2Q North, 20% discount $255.99/n. $511.98 + $35.32 tax = $547.30. $273.65 deposit paid Visa. Balance $273.65 at check-in. Xanterra #20514347. Phone 888-297-2757.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-page',
    category: 'accommodation',
    title: '✅ Page — 2BR Home 5min from Antelope (Airbnb)',
    description: 'Airbnb HMYET8RCAK. 871 Sandpiper Dr, Page AZ. 3n Wed-Sat May 13-16. $669.27 total ($170.67/n × 3 + fees).',
    status: 'booked',
    deadline: '2026-05-13',
    tripDay: 4,
    estimatedCost: 669,
    actualCost: 669,
    bookingUrl: 'https://www.airbnb.com/rooms/32157708',
    notes: 'BOOKED: Airbnb HMYET8RCAK. Newly-Remodeled 2BR home, 871 Sandpiper Dr, Page AZ 86040. Hosted by Sarah & Jeremy. Check-in 3pm, out 11am. $669.27 paid 4/15 (Visa 6386). Cancel partial refund before 5/6.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-moab',
    category: 'accommodation',
    title: '✅ Moab — HotTub/Pool/Kitchen Airbnb',
    description: 'Airbnb HMAW5TWC9Q. 3442 Tierra del Sol Dr. 4n Sat-Wed May 16-20. $1,778.43 total ($392/n × 4 + fees).',
    status: 'booked',
    deadline: '2026-05-16',
    tripDay: 7,
    estimatedCost: 1778,
    actualCost: 1778,
    bookingUrl: 'https://www.airbnb.com/rooms/47115197',
    notes: 'BOOKED: Airbnb HMAW5TWC9Q. Hot tub, pool, kitchen, views, patio. 3442 Tierra del Sol Dr, Moab UT 84532. Hosted by Patrick & Angie. Smart lock self check-in 4pm, out 10am. $784 paid 4/15, $994.43 due 5/1 (Visa 6386). Cancel before 5/9.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-slc',
    category: 'accommodation',
    title: '✅ SLC — 2BR Convention Ctr Airbnb (Pool/HotTub/Gym)',
    description: 'Airbnb HMN2P4MBR9. 241 W 200 S, SLC. 4n Wed-Sun May 20-24. $1,256.86 total ($272/n × 4 + tax).',
    status: 'booked',
    deadline: '2026-05-20',
    tripDay: 11,
    estimatedCost: 1257,
    actualCost: 1257,
    bookingUrl: 'https://www.airbnb.com/rooms/1377086372116606050',
    notes: 'BOOKED: Airbnb HMN2P4MBR9 by GrandRoad. 241 W 200 S, SLC UT 84101. 2BR with rooftop pool/hot tub/gym/theatre. Keypad in 4pm, out 10am. $544 paid 4/1, $712.86 charged 5/5 (Visa 6386). Host: 801-201-5734.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-driggs',
    category: 'accommodation',
    title: '✅ Driggs — Mountain Modern Victor House (Airbnb)',
    description: 'Airbnb HM2FC8WSJ8. 8487 Caribou Ct, Victor ID. 3n Sun-Wed May 24-27. $885.47 total (after $460 discount).',
    status: 'booked',
    deadline: '2026-05-24',
    tripDay: 15,
    estimatedCost: 885,
    actualCost: 885,
    bookingUrl: 'https://www.airbnb.com/rooms/1133460407258641526',
    notes: 'BOOKED: Airbnb HM2FC8WSJ8. Mountain Modern Victor House, 8487 Caribou Ct, Victor ID 83455. Hosted by Cristine. Keypad in 4pm, out 10am. $885.47 paid 4/15 (Visa 6386). NON-REFUNDABLE.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-yellowstone',
    category: 'accommodation',
    title: '✅ West Yellowstone — Crosswinds Inn',
    description: 'Booking.com #5288855262. 201 Firehole Ave. 2n Wed-Fri May 27-29. $657.18 total ($291.60/n + tax + fees). Breakfast included.',
    status: 'booked',
    deadline: '2026-05-27',
    tripDay: 18,
    estimatedCost: 657,
    actualCost: 657,
    bookingUrl: 'https://www.booking.com/',
    notes: 'BOOKED: Booking.com #5288855262 PIN:3523. Crosswinds Inn, 201 Firehole Ave, West Yellowstone MT 59758. Queen Room with Two Queen Beds. Breakfast included. In 4pm, out 11am. Prepaid Visa 6386. NON-REFUNDABLE. Phone 406-646-9557.',
    updatedAt: now(),
  });

  items.push({
    id: 'acc-glacier',
    category: 'accommodation',
    title: '✅ Glacier — Apgar Village Lodge & Cabins (In-Park)',
    description: 'Reservation #3870048. Cabin 3 Queen, 2 Room. 2n Fri-Sun May 29-31. $392.26 ($189.22 paid, $203.04 at check-in).',
    status: 'booked',
    deadline: '2026-05-29',
    tripDay: 20,
    estimatedCost: 392,
    actualCost: 392,
    bookingUrl: 'https://www.glacierparkcollection.com/lodging/apgar-village/',
    notes: 'BOOKED: Apgar Village Lodge (Glacier Park Collection / Pursuit). 3 Queen cabin, 2 rooms. Inside the park near Lake McDonald. $363.20 + $29.06 tax = $392.26. $189.22 paid, $203.04 balance at check-in + Historic Preservation Fee + $1/night Conservancy donation. Phone 1.844.868.7474. 3 guests (Colin + Mom + Robin).',
    updatedAt: now(),
  });

  // =============================================
  // FLIGHTS — ALL 6 LEGS BOOKED
  // =============================================

  items.push({
    id: 'flight-colin-out',
    category: 'flight',
    title: '✅ Colin PAE→LAS — Alaska AS 777 (Chase Travel)',
    description: 'Alaska AS 777 nonstop. 8:20am→10:53am, 2h33m. Conf KJMXSI. Chase Travel #1016489986. $212.83.',
    status: 'booked',
    tripDay: 1,
    estimatedCost: 213,
    actualCost: 213,
    bookingUrl: 'https://www.chasetravel.com/',
    notes: 'BOOKED: Alaska Airlines AS 777, Sun May 10 PAE 8:20am → LAS 10:53am (2h33m). Boeing 737-900. Main Economy. Chase Travel Trip ID #1016489986, Airline conf KJMXSI. $212.83 via 18,507 Chase pts (1.15x boost, saved 2,776 pts).',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-mom-out',
    category: 'flight',
    title: '✅ Mom YYZ→LAS — Porter PD 653 nonstop',
    description: 'Porter PD 653 nonstop. 9:55am→11:42am, 4h47m. Conf C3STYI. Seat 5C. PorterClassic Freedom. $276.23.',
    status: 'booked',
    tripDay: 1,
    estimatedCost: 276,
    actualCost: 276,
    bookingUrl: 'https://www.flyporter.com/',
    notes: 'BOOKED: Porter Airlines PD 653, Sun May 10 YYZ Term 3 9:55am → LAS Term 3 11:42am (4h47m). PorterClassic Freedom. Seat 5C. Carry-on + 1 bag included. Conf C3STYI. $276.23 USD ($184.78 + $91.45 tax).',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-robin-out',
    category: 'flight',
    title: '✅ Robin SEA→FCA — Alaska AS 2402 nonstop',
    description: 'Alaska AS 2402 nonstop. Fri May 29, 1:13pm PDT → 3:34pm MDT (2h21m). Booked by Robin.',
    status: 'booked',
    tripDay: 20,
    estimatedCost: 127,
    actualCost: 127,
    bookingUrl: 'https://www.alaskaair.com/',
    notes: 'BOOKED: Alaska AS 2402 nonstop. Fri May 29 SEA 1:13pm PDT → FCA 3:34pm MDT (2h21m). Robin booked separately and shared via TripIt.',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-colin-return',
    category: 'flight',
    title: '✅ Colin+Robin FCA→SEA — Alaska AS 2419 (First Class for Colin)',
    description: 'Alaska AS 2419 nonstop. Sun May 31, 5:40pm MDT → 6:12pm PDT (1h32m). Robin on same flight. Colin: First Class via Chase pts.',
    status: 'booked',
    tripDay: 22,
    estimatedCost: 218,
    actualCost: 218,
    bookingUrl: 'https://www.chasetravel.com/',
    notes: 'BOOKED: Alaska AS 2419 nonstop, Sun May 31 FCA 5:40pm MDT → SEA 6:12pm PDT (1h32m). E175 by Horizon Air. COLIN First Class via Chase Travel #1016667852, conf ZAAGXY, $218.40 via 14,560 Chase pts (1.5x boost, saved 7,280 pts). ROBIN on same flight (booked separately).',
    updatedAt: now(),
  });

  items.push({
    id: 'flight-mom-return',
    category: 'flight',
    title: '✅ Mom FCA→MSP→YYZ — Delta via Minneapolis (Amex Travel)',
    description: 'DL 2575 FCA 2:30pm → MSP 6:15pm (2h45m), then DL 3866 MSP 8:05pm → YYZ 11:14pm (2h09m). Amex Trip #7468-1456 conf G5FIWA. $244.33.',
    status: 'booked',
    tripDay: 22,
    estimatedCost: 244,
    actualCost: 244,
    bookingUrl: 'https://travel.americanexpress.com/',
    notes: 'BOOKED: Sun May 31. Leg 1: Delta DL 2575 FCA 2:30pm → MSP 6:15pm (A320, seat 25C, 2h45m). Leg 2: Delta DL 3866 MSP 8:05pm → YYZ 11:14pm (CRJ-900, seat 19B, 2h09m). Amex Travel Trip #7468-1456, airline conf G5FIWA, ticket #0067436637545. $244.33 ($203.84 + $40.49 tax) on Amex 1007.',
    updatedAt: now(),
  });

  // =============================================
  // CAR RENTAL — BOOKED
  // =============================================

  items.push({
    id: 'car-rental',
    category: 'car_rental',
    title: '✅ Rental Car LAS→FCA (21 days)',
    description: 'Booking.com Itinerary #767545928. LAS pickup May 10 noon. Chase Sapphire Reserve = primary insurance.',
    status: 'booked',
    tripDay: 1,
    estimatedCost: 1040,
    bookingUrl: 'https://cars.booking.com/',
    notes: 'BOOKED: Booking.com #767545928. LAS pickup May 10 at 12:00pm. One-way LAS → FCA over 21 days. Pay with Chase Sapphire Reserve = primary rental insurance, decline ALL CDW/LDW.',
    cardTip: '💳 Chase Sapphire Reserve — primary rental insurance, full 21 days.',
    updatedAt: now(),
  });

  // =============================================
  // ACTIVITIES & DINING
  // =============================================

  items.push({
    id: 'activity-antelope',
    category: 'activity',
    title: '✅ Upper Antelope Canyon — BOOKED 10:00am MST May 14',
    description: 'Antelope Slot Canyon Tours. Order #FMBYMK. Upper Canyon w/ light beams. 10:00-11:30am Thu May 14. 2 adults. Tour runs on Arizona time (MST).',
    status: 'booked',
    deadline: '2026-04-14',
    tripDay: 5,
    estimatedCost: 220,
    bookingUrl: 'https://antelopeslotcanyon.com/',
    notes: 'BOOKED: Order #FMBYMK, Booking #341017065. 2 adults, 10:00-11:30am May 14, Upper Antelope Canyon. Luxury enclosed 4x4 vans. ⚠️ TIMEZONE: Tour operates on MST (Arizona time = same as PDT in summer). Colin signed waiver — MOM STILL NEEDS TO SIGN. Check email for waiver link.',
    updatedAt: now(),
  });

  items.push({
    id: 'dining-bacchanal',
    category: 'dining',
    title: '✅ Bacchanal Buffet — BOOKED via OpenTable',
    description: 'Sunday brunch at Caesars Palace. May 10 evening. Reserved via OpenTable.',
    status: 'booked',
    deadline: '2026-05-01',
    tripDay: 1,
    estimatedCost: 160,
    bookingUrl: 'https://www.opentable.com/r/bacchanal-buffet-caesars-palace-las-vegas',
    notes: 'BOOKED: OpenTable reservation. Bacchanal Buffet at Caesars Palace. 250+ dishes including lobster claws, lobster bisque, crab legs. 90-min dining. $65/pp brunch or $80/pp crab brunch. For 2 = $130-160.',
    updatedAt: now(),
  });

  // =============================================
  // STILL TODO
  // =============================================

  items.push({
    id: 'pass-colin',
    category: 'pass',
    title: '✅ America the Beautiful Pass — OWNED',
    description: "Colin's annual pass covers all passengers including nonresident fees.",
    status: 'booked',
    deadline: '2026-05-10',
    tripDay: 2,
    estimatedCost: 80,
    actualCost: 80,
    bookingUrl: 'https://store.usgs.gov/pass/annual',
    notes: "Already owned. Saves $250 across 6 parks. Note: Grand Teton 2026 added a $100/person non-resident surcharge for Mom (Canadian) — pass does not waive that.",
    updatedAt: now(),
  });

  items.push({
    id: 'action-mom-waiver',
    category: 'activity',
    title: '🔴 Mom needs to sign Antelope Canyon waiver',
    description: 'Colin signed his. Mom still needs to sign before May 14 tour.',
    status: 'pending',
    deadline: '2026-05-14',
    tripDay: 5,
    bookingUrl: 'https://antelopeslotcanyon.com/',
    notes: 'Check email for waiver link from Antelope Slot Canyon Tours. Order #FMBYMK.',
    updatedAt: now(),
  });

  return items;
}
