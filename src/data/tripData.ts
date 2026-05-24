import { TripData, Location, DayPlan, Accommodation } from '@/types/trip';

export const locations: Location[] = [
  { id: 'las', name: 'Las Vegas, NV', lat: 36.1699, lng: -115.1398, type: 'city',
    image: 'https://images.unsplash.com/photo-1758205482205-b465a5c5df29?w=800',
    infoUrl: 'https://www.visitlasvegas.com/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Harry+Reid+International+Airport+Las+Vegas' },
  { id: 'flagstaff', name: 'Flagstaff, AZ', lat: 35.1983, lng: -111.6513, type: 'city',
    image: 'https://images.unsplash.com/photo-1558862107-d49ef2a04d72?w=1200',
    infoUrl: 'https://www.flagstaffarizona.org/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Flagstaff+AZ' },
  { id: 'gc', name: 'Grand Canyon South Rim', lat: 36.0544, lng: -112.1401, type: 'national_park',
    image: 'https://images.unsplash.com/photo-1771504942910-ca803b7928c4?w=800',
    infoUrl: 'https://www.nps.gov/grca/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Mather+Point+Grand+Canyon+Village+AZ',
    video: 'https://www.youtube.com/embed/K2dVhFc8Qzk' },
  { id: 'page', name: 'Page, AZ', lat: 36.9147, lng: -111.4558, type: 'city',
    image: 'https://images.unsplash.com/photo-1561747170-1cee67c74ccd?w=800',
    infoUrl: 'https://visitpagelakepowell.com/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Page+AZ' },
  { id: 'antelope', name: 'Antelope Canyon', lat: 36.8619, lng: -111.3743, type: 'attraction',
    image: 'https://images.unsplash.com/photo-1760773767017-caeba8383ca2?w=800',
    infoUrl: 'https://navajonationparks.org/tribal-parks/antelope-canyon/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Upper+Antelope+Canyon+AZ',
    video: 'https://www.youtube.com/embed/0i4t3SznP8c' },
  { id: 'horseshoe', name: 'Horseshoe Bend', lat: 36.8791, lng: -111.5104, type: 'attraction',
    image: 'https://images.unsplash.com/photo-1625510048071-5cb88e110b76?w=800',
    infoUrl: 'https://www.nps.gov/glca/planyourvisit/horseshoe-bend.htm',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Horseshoe+Bend+Overlook',
    video: 'https://www.youtube.com/embed/gZjwRxgN2AQ' },
  { id: 'monument', name: 'Monument Valley', lat: 36.9980, lng: -110.0985, type: 'attraction',
    image: 'https://images.unsplash.com/photo-1696251822596-7fbe80714d00?w=800',
    infoUrl: 'https://navajonationparks.org/tribal-parks/monument-valley/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Monument+Valley+Navajo+Tribal+Park',
    video: 'https://www.youtube.com/embed/2_kWVxF6fqA' },
  { id: 'moab', name: 'Moab, UT', lat: 38.5733, lng: -109.5498, type: 'city',
    image: 'https://images.unsplash.com/photo-1593454207834-b0e7f32c4722?w=800',
    infoUrl: 'https://www.discovermoab.com/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Moab+UT' },
  { id: 'arches', name: 'Arches National Park', lat: 38.7331, lng: -109.5925, type: 'national_park',
    image: 'https://images.unsplash.com/photo-1585251489579-3861b41fa181?w=800',
    infoUrl: 'https://www.nps.gov/arch/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Arches+National+Park+Visitor+Center',
    video: 'https://www.youtube.com/embed/wMR_gMC7l2E' },
  { id: 'canyonlands', name: 'Canyonlands - Island in the Sky', lat: 38.4587, lng: -109.8213, type: 'national_park',
    image: 'https://images.unsplash.com/photo-1657919207156-73aad24a39ed?w=1200',
    infoUrl: 'https://www.nps.gov/cany/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Island+in+the+Sky+Visitor+Center',
    video: 'https://www.youtube.com/embed/5e8gT9GLCPQ' },
  { id: 'slc', name: 'Salt Lake City, UT', lat: 40.7608, lng: -111.8910, type: 'city',
    image: 'https://images.unsplash.com/photo-1621603933126-6c216db10045?w=800',
    infoUrl: 'https://www.visitsaltlake.com/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Salt+Lake+City+UT' },
  { id: 'jackson', name: 'Jackson, WY', lat: 43.4799, lng: -110.7624, type: 'city',
    image: 'https://images.unsplash.com/photo-1769476971756-8989225dd88a?w=800',
    infoUrl: 'https://www.visitjacksonhole.com/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Jackson+Town+Square+WY' },
  { id: 'driggs', name: 'Driggs, ID (Teton Valley)', lat: 43.7233, lng: -111.1113, type: 'city',
    image: 'https://images.unsplash.com/photo-1618193127816-70bbe59fe1e7?w=800',
    infoUrl: 'https://www.discoverteton.com/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Driggs+ID' },
  { id: 'teton', name: 'Grand Teton National Park', lat: 43.7904, lng: -110.6818, type: 'national_park',
    image: 'https://images.unsplash.com/photo-1625111988773-8951494ce8ca?w=800',
    infoUrl: 'https://www.nps.gov/grte/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Craig+Thomas+Discovery+and+Visitor+Center',
    video: 'https://www.youtube.com/embed/0BrXBWVfR3E' },
  { id: 'yellowstone', name: 'Yellowstone National Park', lat: 44.4280, lng: -110.5885, type: 'national_park',
    image: 'https://images.unsplash.com/photo-1754878302051-6087c8d632bf?w=800',
    infoUrl: 'https://www.nps.gov/yell/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Old+Faithful+Visitor+Education+Center',
    video: 'https://www.youtube.com/embed/EtFNKFmP1wE' },
  { id: 'west_yellowstone', name: 'West Yellowstone, MT', lat: 44.6621, lng: -111.1041, type: 'city',
    image: 'https://images.unsplash.com/photo-1591155411707-8d7e89f9983e?w=800',
    infoUrl: 'https://www.destinationyellowstone.com/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=West+Yellowstone+MT' },
  { id: 'bozeman', name: 'Bozeman, MT', lat: 45.6770, lng: -111.0429, type: 'city',
    image: 'https://images.unsplash.com/photo-1608352071754-1a81161417b1?w=1200',
    infoUrl: 'https://www.bozemancvb.com/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Bozeman+MT' },
  { id: 'glacier', name: 'Glacier National Park', lat: 48.7596, lng: -113.7870, type: 'national_park',
    image: 'https://images.unsplash.com/photo-1661814285718-b5794f344a39?w=800',
    infoUrl: 'https://www.nps.gov/glac/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Apgar+Visitor+Center+Glacier',
    video: 'https://www.youtube.com/embed/k7R8y7zeVXI' },
  { id: 'columbia_falls', name: 'Columbia Falls, MT', lat: 48.3724, lng: -114.1813, type: 'city',
    image: 'https://images.unsplash.com/photo-1708640576833-f2b8c7c2ffd2?w=1200',
    infoUrl: 'https://www.columbiafallschamber.org/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Columbia+Falls+MT' },
  { id: 'missoula', name: 'Missoula, MT (MSO)', lat: 46.8721, lng: -114.0076, type: 'city',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800',
    infoUrl: 'https://destinationmissoula.org/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Missoula+MT' },
  { id: 'whitefish', name: 'Whitefish, MT', lat: 48.4106, lng: -114.3528, type: 'city',
    image: 'https://images.unsplash.com/photo-1708640576833-f2b8c7c2ffd2?w=1200',
    infoUrl: 'https://www.explorewhitefish.com/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Whitefish+MT' },
];

export const tripData: TripData = {
  id: 'mom-road-trip-2026',
  name: "Southwest to Glacier Road Trip",
  tagline: "22 days, 6 national parks, Las Vegas to Glacier",
  startDate: '2026-05-10',
  endDate: '2026-05-31',
  travelers: [
    { id: 'colin', name: 'Colin', origin: 'PAE', originCity: 'Everett, WA', color: '#3b82f6', notes: 'Flying PAE → LAS' },
    { id: 'mom', name: 'Mom', origin: 'YYZ', originCity: 'Toronto, ON', color: '#ec4899', notes: 'Active 80yo, walks a lot, can do short hikes. Flying YYZ → LAS.' },
    { id: 'robin', name: 'Robin', origin: 'SEA', originCity: 'Seattle, WA', color: '#8b5cf6', notes: 'Joining for Glacier weekend (Fri May 29 afternoon (3:34pm) - Sun May 31). BOOKED AS 2402 SEA→FCA nonstop, 2h21m. Return: BOOKED AS 2419 (same flight as Colin). FCA is 13min from Columbia Falls.' }
  ],
  phases: [
    {
      id: 'southwest',
      name: 'Vegas & Arizona',
      summary: 'Las Vegas, Grand Canyon, Antelope Canyon, Horseshoe Bend',
      days: [1, 2, 3, 4, 5, 6],
      startDay: 1,
      endDay: 6,
      color: '#ef4444',
      highlights: ['Las Vegas (1 night)', 'Grand Canyon (2 nights)', 'Horseshoe Bend', 'Antelope Canyon', 'Lake Powell']
    },
    {
      id: 'utah',
      name: 'Utah',
      summary: 'Monument Valley, Arches, Canyonlands, Moab',
      days: [7, 8, 9, 10],
      startDay: 7,
      endDay: 10,
      color: '#f59e0b',
      highlights: ['Monument Valley drive-through', 'Arches NP full day', 'Canyonlands overlooks']
    },
    {
      id: 'slc_tetons',
      name: 'SLC & Tetons',
      summary: 'Salt Lake City, Driggs, Grand Teton',
      days: [11, 12, 13, 14, 15, 16, 17],
      startDay: 11,
      endDay: 17,
      color: '#22c55e',
      highlights: ['Temple Square', 'Natural History Museum', 'Teton Valley from Driggs', 'Oxbow Bend', 'Mormon Row', 'Schwabacher Landing']
    },
    {
      id: 'yellowstone_glacier',
      name: 'Yellowstone & Glacier',
      summary: 'Yellowstone geysers, Glacier with Robin',
      days: [18, 19, 20, 21, 22],
      startDay: 18,
      endDay: 22,
      color: '#06b6d4',
      highlights: ['Old Faithful & Grand Prismatic', 'Yellowstone Canyon & Lamar Valley', 'Robin joins for Glacier', 'Lake McDonald', 'Trail of the Cedars', 'Fly home from FCA']
    }
  ],
  flights: [
    {
      id: 'f1',
      type: 'outbound',
      passenger: 'colin',
      from: 'PAE',
      to: 'LAS',
      date: '2026-05-10',
      airline: 'Alaska Airlines',
      flightNumber: 'AS 777',
      price: 212.83,
      duration: '2h 40m',
      bookingRef: 'KJMXSI',
      bookingSource: 'Chase Travel #1016489986',
      bookingUrl: 'https://www.alaskaair.com/',
      notes: 'BOOKED: Alaska AS 777 PAE→LAS. Chase Travel #1016489986, conf KJMXSI. $212.83.'
    },
    {
      id: 'f2',
      type: 'outbound',
      passenger: 'mom',
      from: 'YYZ',
      to: 'LAS',
      date: '2026-05-10',
      airline: 'Porter Airlines',
      flightNumber: 'PD 653',
      price: 276.23,
      duration: '4h 45m',
      bookingRef: 'C3STYI',
      bookingUrl: 'https://www.flyporter.com/',
      notes: 'BOOKED: Porter PD 653 YYZ→LAS. Conf C3STYI. $276.23.'
    },
    {
      id: 'f3',
      type: 'return',
      passenger: 'colin',
      from: 'FCA',
      fromCity: 'Kalispell (Glacier Park), MT',
      to: 'SEA',
      toCity: 'Seattle',
      date: '2026-05-31',
      airline: 'Alaska Airlines',
      flightNumber: 'AS 2419',
      price: 218.40,
      duration: '1h 32m',
      departureTime: '5:40 PM',
      arrivalTime: '6:12 PM',
      cabin: 'First Class',
      bookingRef: 'ZAAGXY',
      bookingSource: 'Chase Travel #1016667852',
      bookingUrl: 'https://www.alaskaair.com/',
      notes: 'BOOKED: Alaska AS 2419 FCA→SEA 5:40pm→6:12pm FIRST CLASS. Chase Travel #1016667852, conf ZAAGXY. $218.40 via 14,560 pts.'
    },
    {
      id: 'f4',
      type: 'return',
      passenger: 'mom',
      from: 'FCA',
      fromCity: 'Kalispell (Glacier Park), MT',
      to: 'YYZ',
      toCity: 'Toronto',
      date: '2026-05-31',
      airline: 'Delta',
      flightNumber: 'DL 2575 + DL 3866',
      price: 244.33,
      departureTime: '2:30 PM',
      arrivalTime: '11:14 PM',
      legs: 'FCA 2:30pm → MSP 6:15pm, MSP 8:05pm → YYZ 11:14pm',
      bookingRef: 'G5FIWA',
      bookingSource: 'Amex Travel #7468-1456',
      ticketNumber: '0067436637545',
      bookingUrl: 'https://www.delta.com/',
      notes: 'BOOKED: Delta DL 2575 FCA 2:30pm→MSP 6:15pm + DL 3866 MSP 8:05pm→YYZ 11:14pm. Amex Travel #7468-1456, conf G5FIWA. Ticket #0067436637545. $244.33.'
    },
    {
      id: 'f5',
      type: 'outbound',
      passenger: 'robin',
      from: 'SEA',
      fromCity: 'Seattle',
      to: 'FCA',
      toCity: 'Kalispell (Glacier Park)',
      date: '2026-05-29',
      airline: 'Alaska Airlines',
      flightNumber: 'AS 2402',
      price: 0,
      duration: '2h 21m',
      departureTime: '1:13 PM',
      arrivalTime: '3:34 PM',
      bookingRef: 'AS 2402',
      bookingSource: 'Robin booked separately',
      bookingUrl: 'https://www.alaskaair.com/',
      notes: 'BOOKED: Robin booked separately. AS 2402 nonstop SEA→FCA, arrives 3:34pm Friday afternoon.'
    },
    {
      id: 'f6',
      type: 'return',
      passenger: 'robin',
      from: 'FCA',
      fromCity: 'Kalispell (Glacier Park)',
      to: 'SEA',
      toCity: 'Seattle',
      date: '2026-05-31',
      airline: 'Alaska Airlines',
      flightNumber: 'AS 2419',
      price: 0,
      duration: '1h 32m',
      departureTime: '5:40 PM',
      arrivalTime: '6:12 PM',
      bookingRef: 'AS 2419',
      bookingSource: 'Same flight as Colin',
      bookingUrl: 'https://www.alaskaair.com/',
      notes: 'BOOKED: Robin on same AS 2419 as Colin. FCA 5:40pm→SEA 6:12pm.'
    }
  ],
  flightOptions: [
    {
      id: 'fo1',
      passenger: 'colin',
      type: 'outbound',
      recommended: 'pae-las-alaska',
      notes: 'Colin flies PAE→LAS. Multiple direct flights daily.',
      options: [
        {
          id: 'pae-las-alaska',
          type: 'outbound',
          passenger: 'colin',
          from: 'PAE',
          to: 'LAS',
          date: '2026-05-10',
          airline: 'Alaska Airlines',
          price: 89,
          duration: '2h 55m DIRECT',
          bookingUrl: 'https://www.google.com/travel/flights?type=2&q=Flights+from+PAE+to+LAS+on+2026-05-10&curr=USD',
          notes: 'DIRECT! 4+ daily nonstops.'
        },
        {
          id: 'pae-las-sw',
          type: 'outbound',
          passenger: 'colin',
          from: 'PAE',
          to: 'LAS',
          date: '2026-05-10',
          airline: 'Southwest',
          price: 100,
          duration: '2h 55m DIRECT',
          bookingUrl: 'https://www.southwest.com/',
          notes: 'Free checked bags and flexible rebooking. Not on Google Flights — book direct.'
        }
      ]
    },
    {
      id: 'fo2',
      passenger: 'mom',
      type: 'outbound',
      recommended: 'yyz-las-porter',
      notes: 'Mom flies YYZ→LAS. Porter or WestJet direct.',
      options: [
        {
          id: 'yyz-las-porter',
          type: 'outbound',
          passenger: 'mom',
          from: 'YYZ',
          to: 'LAS',
          date: '2026-05-10',
          airline: 'Porter Airlines',
          price: 220,
          duration: '4h 32m DIRECT',
          bookingUrl: 'https://www.google.com/travel/flights?type=2&q=Flights+from+YYZ+to+LAS+on+2026-05-10&curr=USD',
          notes: 'No middle seats, free wine, snacks. Best for seniors.'
        },
        {
          id: 'yyz-las-westjet',
          type: 'outbound',
          passenger: 'mom',
          from: 'YYZ',
          to: 'LAS',
          date: '2026-05-10',
          airline: 'WestJet',
          price: 280,
          duration: '4h 35m DIRECT',
          bookingUrl: 'https://www.google.com/travel/flights?type=2&q=Flights+from+YYZ+to+LAS+on+2026-05-10+WestJet&curr=USD',
          notes: 'Canadian airline, good service.'
        }
      ]
    }
  ],
  carRental: {
    company: 'Booking.com',
    vehicleType: 'Rental Car (LAS pickup May 10 noon)',
    pickupLocation: 'Las Vegas Harry Reid Airport (LAS)',
    pickupDate: '2026-05-10',
    dropoffLocation: 'Glacier Park International Airport (FCA)',
    dropoffDate: '2026-05-31',
    totalDays: 21,
    dailyRate: 40,
    dropoffFee: 200,
    totalCost: 1040,
    bookingUrl: 'https://cars.booking.com',
    notes: 'BOOKED: Booking.com Itinerary #767545928. LAS pickup May 10 at 12:00pm noon, one-way to FCA over 21 days. Pay with Chase Sapphire Reserve = primary rental insurance, decline ALL CDW/LDW.'
  },
  days: [
    // ============================================================
    // DAY 1: ARRIVE LAS VEGAS — BACCHANAL BUFFET & FREMONT ST
    // ============================================================
    {
      id: 'd1',
      dayNumber: 1,
      date: '2026-05-10',
      title: 'Arrive LV — Bacchanal Buffet & Fremont St',
      summary: 'Land, pick up car, Bacchanal Buffet, Fremont Street',
      location: locations.find(l => l.id === 'las')!,
      overnight: 'Las Vegas, NV',
      weather: { high: 38, low: 21, conditions: 'Hot, sunny — 101°F/38°C peak. Hydrate aggressively. UV 9.' },
      activities: [
        {
          id: 'a1-1',
          name: 'Arrive Las Vegas & Pick Up Rental',
          description: 'Arrive at Harry Reid International (LAS). Pick up compact AWD SUV from rental car center. Mom arrives mid-morning, Colin adjust timing to meet.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          tips: ['Rental car center is a short tram ride from baggage claim', 'Pre-book online for best rates', 'Confirm AWD vehicle']
        },
        {
          id: 'a1-2',
          name: 'Check into Hotel & Freshen Up',
          description: 'Get settled at The LINQ. Rest up from the flights before hitting the Strip. Short walk to Bacchanal Buffet at Caesars Palace next door.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Request a room away from elevators for quiet', 'Pool time if you arrive early enough']
        },
        {
          id: 'a1-3',
          name: 'Bacchanal Buffet at Caesars Palace',
          description: 'The best buffet in Las Vegas. Over 250 dishes from nine live-show kitchens. Sunday brunch 9am-3pm includes lobster claws, lobster egg bites, lobster bisque, crab legs, prime rib, sushi, and 250+ more. 90-minute dining experience. Reserve on OpenTable (acts as line pass).',
          duration: '2 hours',
          startTime: '3:00 PM',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          cost: '$65/person (brunch) or $80 crab upgrade',
          url: 'https://www.opentable.com/r/bacchanal-buffet-caesars-palace-las-vegas',
          tips: ['BOOK ON OPENTABLE — reservation = skip the line', 'Sunday brunch $65/person, crab brunch upgrade $80', 'YES — lobster claws, lobster bisque, lobster egg bites on Sunday', 'Go for late lunch (3-4pm) to skip rush', 'Crab legs and prime rib are standouts', '90 min dining window — pace yourself']
        },
        {
          id: 'a1-4',
          name: 'Bellagio Fountains & Strip Walk',
          description: 'Walk the Strip at dusk when the lights come alive. Bellagio fountains run every 15 minutes after 8pm. See the Venetian and Caesars Palace lit up.',
          duration: '1.5 hours',
          startTime: '7:30 PM',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Bellagio fountains run every 15 min after 8pm — free show', 'Wear comfortable shoes — the Strip is longer than it looks', 'Venetian canal has free gondolier singing']
        },
        {
          id: 'a1-5',
          name: 'Fremont Street Experience',
          description: 'Head downtown for the original Vegas vibe. The pedestrian canopy light show runs every hour after dark. Old-school casinos, neon signs, and street performers.',
          duration: '2 hours',
          startTime: '9:00 PM',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Fremont Street light show runs on the hour after dark — free', 'Golden Nugget has a great old-school casino vibe', 'Uber/taxi to Fremont is ~$15 from Strip', 'Heart Attack Grill is fun for photos (but the food is gimmicky)']
        }
      ],
      accommodation: {
        id: 'acc1a',
        name: 'The LINQ Hotel & Casino — BOOKED',
        type: 'hotel',
        priceRange: '$0 room + $57 resort fee',
        pricePerNight: 57,
        reviewRating: 4.3,
        reviewSource: 'TripAdvisor (4.5/5)',
        address: '3535 Las Vegas Blvd South, Las Vegas, NV',
        website: 'https://www.caesars.com/linq',
        bookingUrl: 'https://www.hotels.com/',
        amenities: ['Pool', 'Center Strip', 'Free WiFi', 'Casino', 'Bacchanal Buffet next door', 'Spa'],
        seniorFriendly: true,
        recommended: true,
        notes: 'BOOKED: Hotels.com #73410152077445. Room paid via OneKeyCash. Resort fee $56.63 at check-in. 3535 Las Vegas Blvd South.'
      },
      accommodationOptions: [
        {
          id: 'acc1a',
          name: 'The LINQ Hotel & Casino — BOOKED',
          type: 'hotel',
          priceRange: '$0 room + $57 resort fee',
          pricePerNight: 57,
          reviewRating: 4.3,
          reviewSource: 'TripAdvisor (4.5/5)',
          address: '3535 Las Vegas Blvd South',
          website: 'https://www.caesars.com/linq',
          bookingUrl: 'https://www.hotels.com/',
          amenities: ['Pool', 'Center Strip', 'Bacchanal next door', 'Spa', 'Casino'],
          seniorFriendly: true,
          recommended: true,
          notes: 'BOOKED: Hotels.com #73410152077445. Room paid via OneKeyCash. Resort fee $56.63 at check-in.'
        }
      ],
      notes: ['ARRIVAL DAY — buffet + Fremont St', 'Vegas hotels are cheap on Sundays', 'Resort fees ~$40-50/night extra (not included in room rate)', 'Hydrate — desert air is very dry', 'Only 1 night in Vegas — pack it in!'],
      budgetBreakdown: { accommodation: 57, food: 100, activities: 0, gas: 0, total: 157 },
      momNotes: {
        vibes: ['fly', 'city'], energy: 2,
        blurb: 'Land in Vegas, fancy buffet at Bacchanal, walk the Strip lights at night.',
        tip: '🍤 At Bacchanal: hit king crab legs + lobster claws + prime rib FIRST (skip pasta/pizza). Fountain view: Beer Park patio at Paris LV — sit + cost of one drink.'
      }
    },

    // ============================================================
    // DAY 2: LAS VEGAS → GRAND CANYON — MATHER POINT & HERMIT RD SUNSET
    // ============================================================
    {
      id: 'd2',
      dayNumber: 2,
      date: '2026-05-11',
      title: 'LV → Grand Canyon — Mather Point & Hermit Rd Sunset',
      summary: 'Desert drive to the canyon, first views at Mather, Hermit Road sunset',
      location: locations.find(l => l.id === 'gc')!,
      overnight: 'Grand Canyon (South Rim, In-Park)',
      drivingDistance: '280 miles',
      drivingTime: '4.5 hours',
      weather: { high: 28, low: 14, conditions: 'Overcast at GC rim 7,000ft — 82°F day / 57°F evening. SW wind. Sunset 7:24pm MST.' },
      activities: [
        {
          id: 'a2-1',
          name: 'Drive: Las Vegas to Grand Canyon',
          description: 'Head southeast on US-93 to Kingman, then I-40 east to Williams, then AZ-64 north to the South Rim. Landscape shifts from Mojave desert to high-country pines. Stop at Hoover Dam bypass bridge viewpoint (optional 15min), lunch in Williams AZ.',
          duration: '4.5 hours (with stops)',
          startTime: '7:00 AM',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Leave by 7am to have full afternoon at the canyon', 'Hoover Dam bypass bridge viewpoint: optional 15min stop, great views', 'Williams: lunch at Pine Country Restaurant (great pies) or Rod\'s Steak House', 'Gas up in Williams — last cheap gas before Tusayan']
        },
        {
          id: 'a2-2',
          name: 'Lunch in Williams (Route 66)',
          startTime: '10:00 AM',
          description: 'Stop in this charming Route 66 town. Walk the main drag, grab lunch at a classic diner.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Pine Country Restaurant: great pies and comfort food', 'Rod\'s Steak House for classic American', 'Historic Route 66 signs make fun photos', 'Grand Canyon Railway departs from here', 'Gas up in Williams — last cheap gas before Tusayan']
        },
        {
          id: 'a2-checkin',
          name: 'Check In & Drop Bags at Hotel',
          description: 'Drop bags, freshen up, get settled before exploring.',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
        },
        {
          id: 'a2-3',
          name: 'First Views at Mather Point',
          startTime: '12:00 PM',
          description: 'Your first Grand Canyon views! Short accessible walk to the most iconic viewpoint. Visitor Center is right here. This moment is worth savoring.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Accessible viewpoints with railings', 'Visitor Center nearby for maps and info', 'iPhone: 0.5x ultrawide captures the full canyon', 'Late afternoon light paints the walls orange']
        },
        {
          id: 'a2-4',
          name: 'Hermit Road Shuttle — Sunset at Hopi Point',
          description: 'Free shuttle, 7mi with 9 overlooks. Hop-on/hop-off every 15min. Afternoon light paints the canyon walls orange. 2-3hrs for the 4-5 best stops (Maricopa, Powell, Hopi, The Abyss). Alternative: drive Desert View yourself (that\'s tomorrow).',
          duration: '3 hours',
          startTime: '2:00 PM',
          endTime: '5:30 PM',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          directionsUrl: 'https://www.google.com/maps/dir/Mather+Point+Grand+Canyon/Trailview+Overlook/Maricopa+Point/Powell+Point/Hopi+Point/The+Abyss+Grand+Canyon/Hermits+Rest+Grand+Canyon',
          tips: ['Free shuttle only — no private cars Mar-Nov', 'Hop off at any stop, catch the next shuttle (every 10-15 min)', 'Hopi Point is the classic sunset spot — stay here last', 'The Abyss is the most dramatic vertical drop', 'Bring layers — gets cool after sunset at 7,000ft']
        }
      ],
      accommodation: {
        id: 'acc2a',
        name: 'Maswik Lodge (Inside Park) — BOOKED',
        type: 'lodge',
        priceRange: '$256/night (20% off)',
        pricePerNight: 274,
        reviewRating: 4.0,
        reviewSource: 'TripAdvisor (4.0/5), KAYAK (8.6/10)',
        reviewCount: 1800,
        address: 'Grand Canyon Village, South Rim',
        website: 'https://www.grandcanyonlodges.com/',
        amenities: ['Inside park', 'Free shuttle', 'Free parking', 'Dining on-site'],
        seniorFriendly: true,
        recommended: true,
        notes: 'BOOKED: Maswik Lodge, Standard 2 Queen North. 20% discount rate $255.99/night. Xanterra #20514347. Cancel penalty after May 9. Phone: 888-297-2757.'
      },
      accommodationOptions: [
        {
          id: 'acc2a',
          name: 'Maswik Lodge (Inside Park) — BOOKED',
          type: 'lodge',
          priceRange: '$256/night (20% off)',
          pricePerNight: 274,
          reviewRating: 4.0,
          reviewSource: 'TripAdvisor (4.0/5), KAYAK (8.6/10)',
          reviewCount: 1800,
          address: 'Grand Canyon Village, South Rim',
          website: 'https://www.grandcanyonlodges.com/',
          amenities: ['Inside park', 'Free shuttle', 'Free parking', 'Dining on-site'],
          seniorFriendly: true,
          recommended: true,
          notes: 'BOOKED: Maswik Lodge, Standard 2 Queen North. 20% discount rate $255.99/night. Xanterra #20514347.'
        }
      ],
      notes: ['DRIVING DAY + canyon PM', 'Route goes through Route 66 town of Williams', 'GC elevation 7,000ft — may feel altitude', 'Pack layers for evening', 'BOOK El Tovar dinner for tomorrow NOW — 60 day window at grandcanyonlodges.com'],
      budgetBreakdown: { accommodation: 274, food: 80, activities: 35, gas: 55, total: 444 },
      momNotes: {
        vibes: ['drive', 'desert'], energy: 2,
        blurb: 'Long desert drive. First glimpse of Grand Canyon at sunset — wow moment.',
        tip: '🌅 Mather Point sunset 7:24pm — walk 5min east on Rim Trail for fewer crowds. Top off gas in Williams or Kingman, NOT Tusayan.'
      }
    },

    // ============================================================
    // DAY 3: GRAND CANYON FULL DAY — RIM TRAIL, EL TOVAR, YAVAPAI
    // ============================================================
    {
      id: 'd3',
      dayNumber: 3,
      date: '2026-05-12',
      title: 'Grand Canyon Full Day — Rim Trail, El Tovar, Yavapai',
      summary: 'Rim Trail walk, El Tovar lunch, Yavapai Geology Museum, sunset',
      location: locations.find(l => l.id === 'gc')!,
      overnight: 'Grand Canyon (South Rim, In-Park)',
      weather: { high: 29, low: 14, conditions: 'Overcast, 17mph SW gusts at viewpoints. 84°F/57°F. UV 8 even with clouds.' },
      activities: [
        {
          id: 'a3-1',
          name: 'Sunrise at Yavapai Point',
          description: 'Less crowded than Mather Point with same eastern exposure. Arrive 30min before sunrise (~5:30am mid-May). The canyon walls glow pink and orange as the sun comes up.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Sunrise ~5:30am mid-May', 'Far fewer people than Mather Point', 'iPhone: burst mode during golden hour, 0.5x ultrawide for full panorama']
        },
        {
          id: 'a3-2',
          name: 'Rim Trail Walk — Mather Point to Bright Angel Trailhead',
          description: '13mi total path along the canyon rim, mostly paved. For Mom, the 1-2mi section between Bright Angel Lodge and Mather Point is flat and accessible with benches throughout. Take the shuttle back. Alternative: just use the shuttle and walk short sections at each stop.',
          url: 'https://www.alltrails.com/trail/us/arizona/grand-canyon-rim-trail--3',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '2.5 miles (one-way, shuttle return)',
          tips: ['Paved and mostly flat — easy access', 'Canyon views the entire way', 'Pass through Grand Canyon Village, historic buildings', 'Take the Village Route shuttle back to Mather Point', 'Morning light is best for this direction (facing west)']
        },
        {
          id: 'a3-3',
          name: 'El Tovar Lunch',
          description: 'Lunch at the historic El Tovar Dining Room, a 1905 National Historic Landmark perched right on the rim. The most iconic dining experience at the Grand Canyon. Lunch is easier to book than dinner.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          cost: '$30-50/person',
          reservationUrl: 'https://www.exploretock.com/el-tovar-dining-room---grand-canyon-south-rim',
          tips: ['Book via Tock — opens 60 days ahead', 'Lunch is easier to get than dinner', 'Request a window table for canyon views', 'The building itself is worth seeing — dark timber, hunting lodge style']
        },
        {
          id: 'a3-4',
          name: 'Yavapai Geology Museum',
          description: 'Free museum with panoramic windows overlooking the canyon. Excellent geology exhibits explain the 2-billion-year rock story. Short walk from Mather Point.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Free admission', 'Panoramic windows are stunning', 'Great for understanding the geology you\'re seeing', 'Air-conditioned — good afternoon escape']
        },
        {
          id: 'a3-5',
          name: 'Afternoon Rest & Evening Sunset',
          description: 'Rest at the hotel during the warm afternoon. Return for sunset at Hopi Point or Mohave Point on the Hermit Road shuttle.',
          duration: '3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Sunset ~7:30pm mid-May', 'Mohave Point is less crowded than Hopi for sunset', 'Bring layers and a headlamp for the shuttle wait after dark']
        }
      ],
      accommodation: {
        id: 'acc3a',
        name: 'Maswik Lodge (same as previous night)',
        type: 'lodge',
        priceRange: '$256/night (20% off)',
        pricePerNight: 274,
        reviewRating: 4.0,
        reviewSource: 'TripAdvisor (4.0/5)',
        seniorFriendly: true,
        recommended: true,
        notes: 'Second night — same lodge. BOOKED via Xanterra #20514347.'
      },
      notes: ['FULL DAY at Grand Canyon — no driving', 'El Tovar lunch is a highlight — book ahead', 'Rim Trail is paved and flat — perfect for Mom', 'Rest in the afternoon, sunset shuttle in the evening'],
      budgetBreakdown: { accommodation: 274, food: 100, activities: 0, gas: 0, total: 374 },
      momNotes: {
        vibes: ['desert'], energy: 2,
        blurb: 'Easy walking along the canyon rim. Stunning views all day. Bring water.',
        tip: '📚 Free 30-min ranger geology talk at Yavapai. Hopi Point is THE sunset spot (west-facing peninsula) — shuttle 5:45pm. Three viewpoints done well > eight done exhausted.'
      }
    },

    // ============================================================
    // DAY 4: DESERT VIEW AM → PAGE + HORSESHOE BEND SUNSET
    // ============================================================
    {
      id: 'd4',
      dayNumber: 4,
      date: '2026-05-13',
      title: 'Desert View → Page + Horseshoe Bend Sunset',
      summary: 'Morning eastern viewpoints and Watchtower, drive to Page, Horseshoe Bend at sunset',
      location: locations.find(l => l.id === 'page')!,
      overnight: 'Page, AZ',
      drivingDistance: '160 miles (Desert View to Page via Cameron)',
      drivingTime: '2.5 hours (after Desert View Drive)',
      weather: { high: 30, low: 19, conditions: '⚠️ 37mph SSW WIND ALERT at Horseshoe Bend — eye protection essential, sand will sting. 86°F/67°F.' },
      activities: [
        {
          id: 'a4-1',
          name: 'Desert View Drive — Eastern Viewpoints',
          description: 'Drive your own car 25 miles east along the South Rim. Key stops: Grandview Point (widest views), Lipan Point (see the Colorado River), Navajo Point (highest point on the South Rim at 7,498ft), and Desert View Watchtower (70-foot stone tower with 360-degree views and Hopi murals). Morning light illuminates the eastern canyon walls.',
          duration: '2.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '25 miles (Grand Canyon Village to Desert View)',
          directionsUrl: 'https://www.google.com/maps/dir/Grandview+Point+Grand+Canyon/Moran+Point+Grand+Canyon/Lipan+Point/Navajo+Point+Grand+Canyon/Desert+View+Watchtower',
          tips: [
            'Drive your own car — no shuttle needed on Desert View Drive',
            'Grandview Point has the widest panorama on the South Rim',
            'Lipan Point is the best place to see the Colorado River from the rim',
            'Desert View Watchtower: climb to the top for 360-degree views',
            'Fill gas at Desert View gas station (last gas before Cameron, 30mi)'
          ]
        },
        {
          id: 'a4-2',
          name: 'Drive Desert View → Page via Cameron',
          description: 'Exit the park from Desert View east entrance. Drive AZ-64 east to Cameron, then US-89 north to Page. Stop at Cameron Trading Post for gas, snacks, and Navajo crafts.',
          duration: '2.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Cameron Trading Post is a must-stop — gas, food, restrooms, Native crafts', 'Limited services on Navajo Nation between Cameron and Page', 'Painted Desert views along US-89']
        },
        {
          id: 'a4-checkin',
          name: 'Check In & Drop Bags at Hotel',
          description: 'Drop bags, freshen up, get settled before exploring.',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
        },
        {
          id: 'a4-3',
          name: 'Lunch in Page',
          description: 'Arrive in Page by early afternoon. Grab lunch on Lake Powell Blvd.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Big John\'s Texas BBQ is a local favorite', 'Bonkers for good casual food']
        },
        {
          id: 'a4-4',
          name: 'Horseshoe Bend at Sunset',
          optionalSkip: true,
          url: 'https://www.alltrails.com/trail/us/arizona/horseshoe-bend-trail',
          description: 'Iconic 1,000-foot drop viewpoint over the Colorado River. Short walk from parking. Late afternoon light illuminates the bend beautifully. Go for golden hour.',
          duration: '1.5 hours',
          difficulty: 'moderate',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '1.5 miles round trip',
          elevation: { gain: 150, highest: 4300, lowest: 4150 },
          tips: ['$10 parking fee', 'Go late afternoon for best light — sun illuminates the bend', 'Stairs with handrails', 'Bring water — exposed and hot', 'iPhone: 0.5x ultrawide essential here for full horseshoe']
        }
      ],
      accommodation: {
        id: 'acc4a',
        name: '2BR Home 5min from Antelope — BOOKED',
        type: 'vacation_rental',
        priceRange: '$170.67/night',
        pricePerNight: 171,
        address: '871 Sandpiper Dr, Page, AZ 86040',
        website: 'https://www.airbnb.com/page-az/stays',
        amenities: ['2 bedrooms', 'Downtown Page', 'Walking to restaurants', 'Kitchen'],
        seniorFriendly: true,
        recommended: true,
        notes: 'BOOKED: Airbnb HMYET8RCAK. $669.27 total ($170.67/n x 3 + fees). Hosted by Sarah & Jeremy. Check-in 3pm, out 11am. Paid 4/15 Visa 6386.'
      },
      accommodationOptions: [
        {
          id: 'acc4a',
          name: '2BR Home 5min from Antelope — BOOKED',
          type: 'vacation_rental',
          priceRange: '$170.67/night',
          pricePerNight: 171,
          address: '871 Sandpiper Dr, Page, AZ 86040',
          website: 'https://www.airbnb.com/page-az/stays',
          amenities: ['2 bedrooms', 'Downtown Page', 'Walking to restaurants', 'Kitchen'],
          seniorFriendly: true,
          recommended: true,
          notes: 'BOOKED: Airbnb HMYET8RCAK. $669.27 total ($170.67/n x 3 + fees). Hosted by Sarah & Jeremy. Check-in 3pm, out 11am. Paid 4/15 Visa 6386.'
        }
      ],
      notes: ['Drive + Horseshoe Bend sunset', 'Horseshoe Bend is 1.5mi with stairs — moderate', 'Bring water and hat', '3 nights in Page coming up'],
      budgetBreakdown: { accommodation: 171, food: 70, activities: 10, gas: 30, total: 281 },
      momNotes: {
        vibes: ['drive', 'desert'], energy: 2,
        blurb: 'Drive to Page. Horseshoe Bend at sunset (1.5mi walk, some stairs).',
        tip: '⚠️ 37mph wind alert — secure hat, sunglasses, sand will sting. Stand on LEFT (west) side of overlook for classic shot. NO water at trailhead — bring 1L pp.'
      }
    },

    // ============================================================
    // DAY 5: ANTELOPE CANYON X & LAKE POWELL VIEWS
    // ============================================================
    {
      id: 'd5',
      dayNumber: 5,
      date: '2026-05-14',
      title: 'Upper Antelope Canyon & Lake Powell Views',
      summary: 'BOOKED: Upper Antelope Canyon with light beams (10:00am), Lake Powell overlooks',
      location: locations.find(l => l.id === 'antelope')!,
      overnight: 'Page, AZ',
      weather: { high: 32, low: 15, conditions: '30mph SW wind = sand at canyon entry. 89°F/59°F. Mainly clear.' },
      activities: [
        {
          id: 'a5-1',
          name: 'Upper Antelope Canyon Tour — BOOKED 10:00am',
          description: 'BOOKED with Antelope Slot Canyon Tours (Tsosie family). Upper Canyon with famous light beams (best 10:00am-12:30pm). Luxury enclosed 4x4 vans to/from canyon. 1.75hr tour including transport. Exit involves stairs and ramps (~1 mile) — Mom can handle it.',
          startTime: '10:00 AM',
          duration: '1 hour 45 min',
          difficulty: 'moderate',
          seniorFriendly: true,
          reservationRequired: true,
          cost: '$95/person + $15 Navajo fee = $220 total',
          tips: ['BOOKED: 10:00am May 14, 2 adults', 'Antelope Slot Canyon Tours (Tsosie family)', 'Luxury enclosed 4x4 vans (heated/AC)', 'Light beams peak 10:00am-12:30pm in mid-May', 'Wear closed-toe shoes, bring water', 'Exit is stairs + ramps (1 mile) — wear good shoes', 'MOM: sign your waiver before the trip!', 'iPhone: shoot straight up for light beams, HDR auto mode'],
          reservationUrl: 'https://antelopeslotcanyon.com/'
        },
        {
          id: 'a5-2',
          name: 'Lunch in Page',
          description: 'Relax and refuel after the tour.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Big John\'s Texas BBQ is a local favorite', 'Bonkers for good casual food', 'El Tapatio for Mexican']
        },
        {
          id: 'a5-3',
          name: 'Lake Powell Overlook Drive',
          description: 'Drive to Wahweap Overlook for sweeping Lake Powell views (paved pulloff, no hiking). Then check out the Glen Canyon Dam viewpoint. The turquoise water against red rock is stunning.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Wahweap Overlook: paved pulloff, easy access views', 'Glen Canyon Dam viewpoint is right off the road', 'Lake Powell is massive — 1,960 miles of shoreline', 'Great afternoon activity that\'s easy on the legs']
        },
        {
          id: 'a5-4',
          name: 'Rest & Pool',
          description: 'Pool time at the hotel or rest up. Save energy for the drive day tomorrow.',
          duration: '2-3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Hotel pool is a great way to beat the desert heat', 'Free breakfast tomorrow — don\'t oversleep']
        }
      ],
      accommodation: {
        id: 'acc5a',
        name: '2BR Home 5min from Antelope (same as previous night)',
        type: 'vacation_rental',
        priceRange: '$170.67/night',
        pricePerNight: 171,
        seniorFriendly: true,
        recommended: true,
        notes: 'Second night — same Airbnb.'
      },
      notes: ['Antelope Canyon + Lake Powell views', 'No intense hiking today', 'Good rest before work day tomorrow'],
      budgetBreakdown: { accommodation: 171, food: 70, activities: 107, gas: 10, total: 358 },
      momNotes: {
        vibes: ['tour', 'desert'], energy: 2,
        blurb: 'BIG DAY: Antelope Canyon tour 10am sharp. Magical light beams. Then Lake Powell.',
        tip: '📵 NO bags allowed — phone + 1 water bottle in hand only. Phone HDR mode, tap-to-expose for the bright light beam (let rock fall dark). Tour timezone — verify by phone morning-of.'
      }
    },

    // ============================================================
    // DAY 6: WORK DAY — PAGE (MOM: WAHWEAP, RIM VIEW TRAIL)
    // ============================================================
    {
      id: 'd6',
      dayNumber: 6,
      date: '2026-05-15',
      title: 'Work Day — Page',
      summary: 'Colin works full day, Mom explores Wahweap & Rim View Trail',
      location: locations.find(l => l.id === 'page')!,
      overnight: 'Page, AZ',
      weather: { high: 28, low: 13, conditions: 'Clear sky, 18mph W wind. 83°F/55°F. UV 8 by 11am.' },
      activities: [
        {
          id: 'a6-1',
          name: 'Colin Works — Hotel (Full Day)',
          description: 'Full work day at the Page Airbnb (871 Sandpiper Dr). Mom can rest, walk around town, or relax.',
          duration: '8 hours',
          startTime: '8:00 AM',
          endTime: '5:00 PM',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Airbnb is 5min from Antelope Canyon area', 'Page is a small town — Airbnb WiFi is your best bet', 'Hotspot as backup']
        },
        {
          id: 'a6-2',
          name: 'Mom Solo: Wahweap & Rim View Trail',
          description: 'Drive or Uber 10 min to Wahweap Overlook for sweeping Lake Powell views (paved pulloff). Rim View Trail (0.5mi, flat, paved) has panoramic canyon views right in town. Browse shops on Lake Powell Blvd.',
          duration: '4-5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Wahweap Overlook: paved pulloff, easy access views', 'Rim View Trail: 0.5mi flat paved loop in town', 'Lake Powell Blvd: shops, galleries, restaurants', 'Big Lake Trading Post for Navajo crafts', 'Hotel pool is always an option']
        },
        {
          id: 'a6-3',
          name: 'Dinner Together',
          description: 'Reconnect for dinner on Lake Powell Blvd.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Bonkers for burgers or El Tapatio for Mexican', 'Pack tonight — early start tomorrow']
        }
      ],
      accommodation: {
        id: 'acc6a',
        name: '2BR Home 5min from Antelope (same as previous night)',
        type: 'vacation_rental',
        priceRange: '$170.67/night',
        pricePerNight: 171,
        seniorFriendly: true,
        recommended: true,
        notes: 'Third night — same Airbnb.'
      },
      notes: ['FULL WORK DAY — Colin works, Mom explores', 'Same Airbnb as previous nights', 'Pack tonight for early departure tomorrow'],
      budgetBreakdown: { accommodation: 171, food: 70, activities: 0, gas: 0, total: 241 },
      momNotes: {
        vibes: ['rest'], energy: 1,
        blurb: 'Rest day. Colin works. Swim, read, or walk around Page town.',
        tip: '🌿 Hanging Gardens Trail (1.2mi shaded gravel) if you want a walk — fern grotto at the end. Otherwise: John Wesley Powell Museum (small, indoor, AC).'
      }
    },

    // ============================================================
    // DAY 7: HALF WORK AM + PAGE → MOAB VIA MONUMENT VALLEY
    // ============================================================
    {
      id: 'd7',
      dayNumber: 7,
      date: '2026-05-16',
      title: 'Half Work AM + Page → Moab via Monument Valley',
      summary: 'Colin works morning, afternoon drive through Monument Valley to Moab',
      location: locations.find(l => l.id === 'moab')!,
      overnight: 'Moab, UT',
      drivingDistance: '270 miles',
      drivingTime: '5 hours (with Monument Valley stop)',
      weather: { high: 28, low: 13, conditions: 'Clear entire route. 82°F/55°F. Set clock FORWARD 1hr at Page→Monument Valley (MST→MDT).' },
      activities: [
        {
          id: 'a7-1',
          name: 'Colin Works — Hotel (8am-12pm)',
          description: 'Morning work block at the hotel while Mom finishes packing and has breakfast.',
          duration: '4 hours',
          startTime: '8:00 AM',
          endTime: '12:00 PM',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Check out by noon', 'Mom: enjoy free breakfast, pack the car']
        },
        {
          id: 'a7-2',
          name: 'Drive Page to Monument Valley',
          description: 'Head northeast through Navajo Nation. Iconic buttes appear as you approach on US-163. Pack food — limited services on Navajo Nation. Stop in Bluff UT or Mexican Hat for views.',
          duration: '2.5 hours',
          startTime: '12:30 PM',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Fill gas in Kayenta', 'The approach on US-163 is the famous Forrest Gump road', 'Pack food — limited services between Page and Moab', 'Bluff UT is a good stretch stop', 'Mexican Hat has iconic rock formation views']
        },
        {
          id: 'a7-3',
          name: 'Monument Valley Photo Stop',
          description: 'Quick stop at the Monument Valley Visitor Center for the iconic mittens view. No need for a full tour — the views from the parking lot are incredible.',
          duration: '30-45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          cost: '$10/person entry fee',
          tips: ['Visitor center has restrooms and snacks', 'Views from parking lot are incredible', 'iPhone: 2x zoom frames the mittens beautifully', 'Forrest Gump road shot is on US-163 about 13mi south of the park entrance']
        },
        {
          id: 'a7-4',
          name: 'Continue to Moab',
          description: 'Drive north through Utah to Moab. Red rock scenery the whole way. Pack food — limited services between Monument Valley and Moab.',
          duration: '2.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Stop in Bluff or Mexican Hat for a stretch', 'Mexican Hat has great rock formation views', 'Gas up before Moab stretch']
        },
        {
          id: 'a7-checkin',
          name: 'Check In & Drop Bags at Hotel',
          description: 'Drop bags, freshen up, get settled before exploring.',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
        }
      ],
      accommodation: {
        id: 'acc7a',
        name: 'Moab Airbnb HotTub/Pool/Kitchen/Views — BOOKED',
        type: 'vacation_rental',
        priceRange: '$392/night',
        pricePerNight: 392,
        address: '3442 Tierra del Sol Dr, Moab, UT 84532',
        website: 'https://www.airbnb.com/',
        amenities: ['Hot tub', 'Pool', 'Kitchen', 'Views', 'Patio', 'Smart lock'],
        seniorFriendly: true,
        recommended: true,
        notes: 'BOOKED: Airbnb HMAW5TWC9Q. $1,778.43 total ($392/n x 4 + fees). Hosted by Patrick & Angie. Check-in 4pm, out 10am. $784 paid 4/15, $994.43 due 5/1. Visa 6386.'
      },
      accommodationOptions: [
        {
          id: 'acc7a',
          name: 'Moab Airbnb HotTub/Pool/Kitchen/Views — BOOKED',
          type: 'vacation_rental',
          priceRange: '$392/night',
          pricePerNight: 392,
          address: '3442 Tierra del Sol Dr, Moab, UT 84532',
          website: 'https://www.airbnb.com/',
          amenities: ['Hot tub', 'Pool', 'Kitchen', 'Views', 'Patio', 'Smart lock'],
          seniorFriendly: true,
          recommended: true,
          notes: 'BOOKED: Airbnb HMAW5TWC9Q. $1,778.43 total ($392/n x 4 + fees). Hosted by Patrick & Angie. Check-in 4pm, out 10am. $784 paid 4/15, $994.43 due 5/1. Visa 6386.'
        }
      ],
      notes: ['HALF WORK + DRIVING DAY', 'Monument Valley is an optional stop — can skip to arrive earlier', 'FILL GAS in Page or Kayenta before Navajo Nation stretch', 'Pack food — limited services between Page and Moab', 'Arrive Moab by evening'],
      budgetBreakdown: { accommodation: 392, food: 70, activities: 10, gas: 55, total: 527 },
      momNotes: {
        vibes: ['drive', 'desert'], energy: 2,
        blurb: 'Long scenic drive Page→Moab. Stop at Monument Valley for photos.',
        tip: '🕐 Set clock FORWARD 1hr leaving Page (MST → MDT). Monument Valley View Hotel deck = FREE viewpoint of the mittens. SKIP the 17-mile loop drive (deep sand, not rental-friendly).'
      }
    },

    // ============================================================
    // DAY 8: WORK DAY — MOAB (MOM: POOL, DEAD HORSE POINT DRIVE)
    // ============================================================
    {
      id: 'd8',
      dayNumber: 8,
      date: '2026-05-17',
      title: 'Work Day — Moab',
      summary: 'Colin works full day, Mom: pool, Dead Horse Point drive',
      location: locations.find(l => l.id === 'moab')!,
      overnight: 'Moab, UT',
      weather: { high: 32, low: 16, conditions: 'Overcast. 90°F/60°F. UV 8, light wind. Pool day perfect.' },
      activities: [
        {
          id: 'a8-1',
          name: 'Colin Works — Hotel or Cafe (Full Day)',
          description: 'Full work day. Red Rock Bakery on Main St has WiFi and good coffee. Hotel WiFi is solid.',
          duration: '8 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Red Rock Bakery & Net Cafe: Main St, WiFi, coffee, pastries', 'Hotel WiFi is solid', 'Jailhouse Cafe for breakfast']
        },
        {
          id: 'a8-2',
          name: 'Mom Solo: Main Street & Pool',
          description: 'Browse shops on Main Street, grab ice cream, visit the Moab Museum. Hotel pool to beat the 32-degree heat.',
          duration: '3-4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Main Street is flat and walkable', 'Moab Museum: local history, free', 'Love Muffin Cafe is a local breakfast favorite', 'Pool to beat the heat']
        },
        {
          id: 'a8-3',
          name: 'Mom Solo: Dead Horse Point Drive (optional)',
          optionalSkip: true,
          description: 'Drive to Dead Horse Point State Park for one of the best viewpoints in Utah. Overlook right from the parking lot. Colorado River meanders 2,000ft below. 30-minute drive from Moab.',
          duration: '2 hours (with drive)',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          cost: '$20 vehicle entry',
          tips: ['30-min drive from Moab', 'View from the car/parking lot — no hiking needed', 'One of the best photo spots in Utah', 'Or save it for a sunset drive with Colin tomorrow evening']
        },
        {
          id: 'a8-4',
          name: 'Dinner Together',
          description: 'Reconnect for dinner in downtown Moab.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Sunset Grill for Moab valley views', 'Eddie McStiff\'s for pub food and local brews']
        }
      ],
      accommodation: {
        id: 'acc8a',
        name: 'Moab Airbnb HotTub/Pool/Kitchen/Views (same as previous night)',
        type: 'vacation_rental',
        priceRange: '$392/night',
        pricePerNight: 392,
        seniorFriendly: true,
        recommended: true,
        notes: 'Second night in Moab.'
      },
      notes: ['FULL WORK DAY — Colin works, Mom explores', 'Dead Horse Point is an easy solo drive for Mom', 'Rest up for Arches tomorrow'],
      budgetBreakdown: { accommodation: 392, food: 70, activities: 20, gas: 10, total: 492 },
      momNotes: {
        vibes: ['rest'], energy: 1,
        blurb: 'Rest day in Moab. Colin works. Pool, books, easy.',
        tip: '💧 Mill Creek Parkway = 2mi paved riverside walk if you want air. Pool/hot tub at Airbnb. Moab Museum closed Sunday.'
      }
    },

    // ============================================================
    // DAY 9: ARCHES FULL DAY — WINDOWS, DOUBLE ARCH, DELICATE ARCH VIEW
    // ============================================================
    {
      id: 'd9',
      dayNumber: 9,
      date: '2026-05-18',
      title: 'Arches Full Day — Windows, Double Arch, Delicate Arch View',
      summary: 'Windows section, Double Arch, Delicate Arch viewpoint, Balanced Rock',
      location: locations.find(l => l.id === 'arches')!,
      overnight: 'Moab, UT',
      weather: { high: 32, low: 17, conditions: 'Overcast at Arches — 90°F, NO shade. Slickrock radiates 100°F+ by noon.' },
      activities: [
        {
          id: 'a9-1',
          name: 'Windows Section',
          url: 'https://www.alltrails.com/trail/us/utah/windows-loop-trail--3',
          description: 'Easy loop past North Window, South Window, and Turret Arch. Spectacular formations framing the desert beyond.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '1.6 miles (loop)',
          elevation: { gain: 60 },
          tips: ['Flat, well-maintained trail', 'Go early morning for fewer crowds', 'Best photos in morning light', 'Walk through North Window for the classic framed view']
        },
        {
          id: 'a9-2',
          name: 'Double Arch',
          description: 'Two massive arches joined at the base. Very short walk from the parking lot and incredibly photogenic. Featured in Indiana Jones and the Last Crusade.',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '0.5 miles round trip',
          tips: ['Very short walk from parking', 'Stand underneath for the scale of the arches', 'Sandy trail — easy terrain']
        },
        {
          id: 'a9-3',
          name: 'Delicate Arch Viewpoint (Lower)',
          url: 'https://www.alltrails.com/trail/us/utah/delicate-arch-viewpoint-trail',
          description: 'See Delicate Arch from the lower viewpoint. Much easier than the full hike up to the arch itself.',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '0.5 miles round trip',
          tips: ['Lower viewpoint is flat and accessible', 'Bring binoculars for a closer look', 'Full hike to the arch is 3mi with 480ft gain — not recommended for this trip', 'Best light: late afternoon when the arch glows orange-red']
        },
        {
          id: 'a9-4',
          name: 'Balanced Rock & Park Avenue',
          description: 'Quick stops at iconic formations. Park Avenue viewpoint is right from the car. Balanced Rock has a short loop around the base.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Short walk around Balanced Rock', 'Park Avenue viewpoint is a pullover — no walking needed']
        },
        {
          id: 'a9-5',
          name: 'Landscape Arch (optional)',
          description: 'The longest natural arch in North America. Easy trail in Devils Garden. Only if energy permits.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '1.6 miles round trip',
          elevation: { gain: 60 },
          tips: ['Flat gravel trail', 'Go in morning before heat', 'Skip if you\'re tired from Windows + Double Arch']
        }
      ],
      accommodation: {
        id: 'acc9a',
        name: 'Moab Airbnb HotTub/Pool/Kitchen/Views (same as previous night)',
        type: 'vacation_rental',
        priceRange: '$392/night',
        pricePerNight: 392,
        seniorFriendly: true,
        recommended: true,
        notes: 'Third night in Moab.'
      },
      notes: ['HIKING DAY — ~3-4mi total (easy terrain)', 'NO timed entry needed in 2026! But arrive before 8am — parking fills fast', 'Monday = fewer crowds', 'America the Beautiful pass ($80) covers Arches + Canyonlands + all other parks', 'Bring 2L water per person', 'Double Arch is a highlight — don\'t skip it'],
      budgetBreakdown: { accommodation: 392, food: 70, activities: 15, gas: 10, total: 487 },
      momNotes: {
        vibes: ['desert'], energy: 3,
        blurb: 'Arches National Park! Lots of walking + arches everywhere. Bring water.',
        tip: '🔥 OUT of park 11:30am-3:30pm to escape midday heat. Re-enter for golden hour. NO shade anywhere — UPF sun shirt + wide-brim hat critical. 2L water per person MIN.'
      }
    },

    // ============================================================
    // DAY 10: CANYONLANDS AM + HALF WORK PM
    // ============================================================
    {
      id: 'd10',
      dayNumber: 10,
      date: '2026-05-19',
      title: 'Canyonlands AM + Half Work PM',
      summary: 'Morning overlooks at Canyonlands, Colin works afternoon',
      location: locations.find(l => l.id === 'canyonlands')!,
      overnight: 'Moab, UT',
      weather: { high: 30, low: 17, conditions: 'OVERCAST AT SUNRISE = Mesa Arch underglow MAY be muted. 86°F/63°F. WSW wind PM.' },
      activities: [
        {
          id: 'a10-1',
          name: 'Mesa Arch Sunrise (optional)',
          url: 'https://www.alltrails.com/trail/us/utah/mesa-arch',
          description: 'Famous arch that glows orange at sunrise. Very short walk from parking. Only if you\'re up early.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '0.5 miles round trip',
          tips: ['Sunrise ~6am in late May — the arch literally glows from beneath', 'THE iconic Canyonlands photo', 'Can skip and just do Grand View instead', 'iPhone: lie on the ground and shoot through the arch']
        },
        {
          id: 'a10-2',
          name: 'Grand View Point Overlook',
          description: 'The signature view of Canyonlands. Walk to the end of the point for 360-degree canyon views extending to the La Sal Mountains.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '2 miles round trip',
          elevation: { gain: 50 },
          tips: ['Flat trail along the rim', 'Views in every direction', 'Bring water even for short walks']
        },
        {
          id: 'a10-3',
          name: 'Green River Overlook & Shafer Canyon',
          description: 'Drive to Green River Overlook for views of the winding river far below, then stop at Shafer Canyon Overlook to see the dramatic switchback road descending into the canyon.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Both are drive-up viewpoints, no hiking', 'Green River Overlook is stunning in morning light', 'Shafer Canyon road is for 4WD only — just view from the top']
        },
        {
          id: 'a10-4',
          name: 'Colin Works PM — Hotel (1pm-5pm)',
          description: 'Back to Moab by noon. Colin works the afternoon while Mom rests at the hotel or explores Main Street.',
          duration: '4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Good work spot at hotel or Red Rock Bakery', 'Mom: pool, Main Street shops, ice cream']
        }
      ],
      accommodation: {
        id: 'acc10a',
        name: 'Moab Airbnb HotTub/Pool/Kitchen/Views (same as previous night)',
        type: 'vacation_rental',
        priceRange: '$392/night',
        pricePerNight: 392,
        seniorFriendly: true,
        recommended: true,
        notes: 'Fourth and final night in Moab.'
      },
      notes: ['Canyonlands AM + HALF WORK PM', 'Canyonlands overlooks are easy — mostly drive-up', 'Last night in Moab — pack for SLC drive tomorrow', 'FILL GAS — Green River to Salina on I-70 is 110mi with NO gas stations'],
      budgetBreakdown: { accommodation: 392, food: 70, activities: 15, gas: 15, total: 492 },
      momNotes: {
        vibes: ['desert', 'rest'], energy: 2,
        blurb: 'Canyonlands viewpoints in the morning (drive-up, easy). Colin works after lunch.',
        tip: '🌄 Mesa Arch glows for ~1hr after sunrise — no rush leaving. Drive-up viewpoints after: Shafer, Buck Canyon, Grand View, Green River Overlook (best). You can sleep in car between stops.'
      }
    },

    // ============================================================
    // DAY 11: HALF WORK AM + MOAB → SLC + TEMPLE SQUARE PM
    // ============================================================
    {
      id: 'd11',
      dayNumber: 11,
      date: '2026-05-20',
      title: 'Half Work AM + Drive Moab → SLC + Temple Square',
      summary: 'Morning work, drive to SLC, Temple Square afternoon',
      location: locations.find(l => l.id === 'slc')!,
      overnight: 'Salt Lake City, UT',
      drivingDistance: '230 miles',
      drivingTime: '4 hours',
      weather: { high: 33, low: 20, conditions: 'Partly cloudy. 92°F Moab → 88°F SLC. Possible PM thunderstorm (13%).' },
      activities: [
        {
          id: 'a11-1',
          name: 'Colin Works — Hotel (8am-11am)',
          description: 'Morning work block while Mom packs and has breakfast. Check out by 11am.',
          startTime: '8:00 AM',
          endTime: '11:00 AM',
          duration: '3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Check out by 11am', 'Mom: breakfast and final Main Street browse']
        },
        {
          id: 'a11-2',
          name: 'Drive Moab to Salt Lake City',
          description: 'Head north on I-70 and I-15. Beautiful drive through canyons and valleys. The San Rafael Swell section on I-70 is stunning. Stop in Green River for gas and Tamarisk restaurant, Price UT for a break.',
          startTime: '11:30 AM',
          duration: '4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Stop in Green River for gas/snacks — Tamarisk restaurant is good', 'I-70 through San Rafael Swell is stunning', 'FILL GAS before Green River — long stretch with nothing', 'Price UT is another good break point']
        },
        {
          id: 'a11-checkin',
          name: 'Check In & Drop Bags at Hotel',
          description: 'Drop bags, freshen up, get settled before exploring.',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
        },
        {
          id: 'a11-3',
          name: 'Temple Square PM',
          description: 'Arrive SLC by mid-afternoon. Walk through Temple Square (free, 35 acres, beautifully landscaped). See the Salt Lake Temple, Tabernacle, and Conference Center. Free organ recital in the Tabernacle at noon Mon-Sat.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Temple Square is free and open to all', 'The Tabernacle has incredible acoustics', 'Capitol building is free to enter — walk up for Wasatch views', 'City Creek Center next door for shopping']
        },
        {
          id: 'a11-4',
          name: 'Dinner in Downtown SLC',
          description: 'Red Iguana for legendary Mexican mole sauces, or Caputo\'s for deli sandwiches.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Red Iguana: legendary mole sauces, always a line but worth it', 'Caputo\'s Market & Deli for Italian', 'The Copper Onion for upscale American']
        }
      ],
      accommodation: {
        id: 'acc11a',
        name: 'Convention Ctr 2BR Airbnb — BOOKED',
        type: 'vacation_rental',
        priceRange: '$272/night',
        pricePerNight: 314,
        address: '241 W 200 S, Salt Lake City, UT 84101',
        amenities: ['2 bedrooms', 'Rooftop pool', 'Hot tub', 'Gym', 'Theatre', 'Fast WiFi', 'Self check-in'],
        seniorFriendly: true,
        recommended: true,
        notes: 'BOOKED: Airbnb HMN2P4MBR9. 2BR with rooftop pool/hot tub/gym/theatre. Hosted by GrandRoad. $1,256.86 total for 4 nights.'
      },
      accommodationOptions: [
        {
          id: 'acc11a',
          name: 'Convention Ctr 2BR Airbnb — BOOKED',
          type: 'vacation_rental',
          priceRange: '$272/night',
          pricePerNight: 314,
          address: '241 W 200 S, Salt Lake City, UT 84101',
          amenities: ['2 bedrooms', 'Rooftop pool', 'Hot tub', 'Gym', 'Theatre', 'Fast WiFi'],
          seniorFriendly: true,
          recommended: true,
          notes: 'BOOKED: Airbnb HMN2P4MBR9. 2BR with rooftop pool/hot tub/gym/theatre. Hosted by GrandRoad. $1,256.86 total for 4 nights.'
        }
      ],
      notes: ['HALF WORK AM + DRIVING DAY', 'Temple Square is a good first-afternoon activity', 'SLC has better WiFi for remote work than Moab', 'Green River stop: Tamarisk restaurant, Price UT for a break'],
      budgetBreakdown: { accommodation: 314, food: 70, activities: 0, gas: 55, total: 439 },
      momNotes: {
        vibes: ['drive', 'city'], energy: 2,
        blurb: 'Drive Moab→Salt Lake City. Temple Square in evening if up for it.',
        tip: '✨ Brand-new Temple Square Visitors\' Center opened May 18 — 2 days before arrival! Tamarisk Restaurant in Green River (51mi from Moab) for lunch. Mole sampler at Red Iguana 2 (shorter line than #1).'
      }
    },

    // ============================================================
    // DAY 12: WORK DAY — SLC (EXTRA WORK DAY)
    // ============================================================
    {
      id: 'd12',
      dayNumber: 12,
      date: '2026-05-21',
      title: 'Work Day — SLC (Extra Work Day)',
      summary: 'Colin works full day, Mom explores Capitol Hill, Liberty Park, or Family History Library',
      location: locations.find(l => l.id === 'slc')!,
      overnight: 'Salt Lake City, UT',
      weather: { high: 26, low: 17, conditions: 'Overcast, cool, comfortable. 79°F/63°F. UV 8 even under clouds.' },
      activities: [
        {
          id: 'a12-1',
          name: 'Colin Works — Airbnb or Work Hive Coworking (Full Day)',
          description: 'Full work day. Airbnb has fast WiFi. Work Hive (159 W Broadway) is a proper coworking space with fast WiFi, day passes available.',
          duration: '8 hours',
          startTime: '8:00 AM',
          endTime: '5:00 PM',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Work Hive: 159 W Broadway, day pass ~$25, fast WiFi', 'Airbnb has fast WiFi — work from the condo', 'Three Pines Coffee: 165 S Main St, good WiFi, 10min walk']
        },
        {
          id: 'a12-2',
          name: 'Mom Solo: Capitol Hill & Liberty Park',
          description: 'Walk to the Utah State Capitol (free, stunning Wasatch views from the steps). Then stroll Liberty Park (80 acres, flat paths, Tracy Aviary, pond).',
          duration: '3-4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Capitol building is free to enter', 'Liberty Park: flat, shady, 80 acres, Tracy Aviary ($12)', 'Both walkable from downtown hotels']
        },
        {
          id: 'a12-3',
          name: 'Mom Solo: Family History Library (optional)',
          optionalSkip: true,
          description: 'The largest genealogy library in the world, run by FamilySearch. Free to use. Even if you\'re not researching family, the building and resources are impressive.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Free admission', 'Staff can help you get started with family research', 'Right next to Temple Square', 'Mon-Sat, 9am-5pm']
        },
        {
          id: 'a12-4',
          name: 'Dinner Together',
          description: 'Reconnect for dinner downtown.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Caputo\'s Market & Deli for Italian', 'The Copper Onion for upscale American', 'Laundry at nearby laundromat if needed']
        }
      ],
      accommodation: {
        id: 'acc12a',
        name: 'Convention Ctr 2BR Airbnb (same as previous night)',
        type: 'vacation_rental',
        priceRange: '$272/night',
        pricePerNight: 314,
        seniorFriendly: true,
        recommended: true,
        notes: 'Second night in SLC. BOOKED via Airbnb HMN2P4MBR9.'
      },
      notes: ['FULL WORK DAY — extra day in SLC for better WiFi than Moab', 'Mom can explore at her own pace', 'Capitol Hill is free and walkable', 'Laundry day — nearby laundromat'],
      budgetBreakdown: { accommodation: 314, food: 70, activities: 0, gas: 5, total: 389 },
      momNotes: {
        vibes: ['rest', 'city'], energy: 1,
        blurb: 'Rest day. Colin works in SLC. Airbnb has a pool/hot tub!',
        tip: '🦜 Tracy Aviary at Liberty Park — paved, contained, $14 senior, lots to see, low effort. Tabernacle organ recital 12-12:30pm Mon-Sat. Airbnb rooftop pool.'
      }
    },

    // ============================================================
    // DAY 13: WORK DAY — SLC (MOM: GREAT SALT LAKE, CAPITOL HILL)
    // ============================================================
    {
      id: 'd13',
      dayNumber: 13,
      date: '2026-05-22',
      title: 'Work Day — SLC',
      summary: 'Colin works full day, Mom: Great Salt Lake, Capitol Hill',
      location: locations.find(l => l.id === 'slc')!,
      overnight: 'Salt Lake City, UT',
      weather: { high: 23, low: 13, conditions: 'Clear sky. 73°F/56°F. Light jacket for evening — sets 8:44pm.' },
      activities: [
        {
          id: 'a13-1',
          name: 'Colin Works — Airbnb or Three Pines Coffee (Full Day)',
          description: 'Full work day at Airbnb (fast WiFi) or Three Pines Coffee (165 S Main St, specialty coffee, fast WiFi).',
          duration: '8 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Three Pines Coffee: 165 S Main St, good WiFi, 10min walk', 'Airbnb has fast WiFi — work from the condo']
        },
        {
          id: 'a13-2',
          name: 'Mom Solo: Great Salt Lake (Antelope Island)',
          description: 'Uber or drive 40 minutes north to Antelope Island State Park. See the Great Salt Lake up close, free-roaming bison, and walk the short Bridger Bay trail. The lake is 8x saltier than the ocean.',
          duration: '3 hours (including drive)',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          cost: '$15 vehicle entry',
          tips: ['$15 per vehicle entry fee', 'Bison roam freely — keep 25+ yards distance', 'The water is 8x saltier than the ocean — you will float', 'Bring water shoes if you want to wade in']
        },
        {
          id: 'a13-3',
          name: 'Mom Solo: City Creek Center',
          description: 'Browse City Creek Center, an upscale outdoor mall with retractable glass roof. Right next to Temple Square.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['City Creek Center: outdoor mall, retractable roof', 'Walkable from downtown hotels']
        },
        {
          id: 'a13-4',
          name: 'Dinner Together',
          description: 'Reconnect for dinner downtown.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Red Iguana: legendary mole sauces, always a line but worth it', 'The Copper Onion for upscale American']
        }
      ],
      accommodation: {
        id: 'acc13a',
        name: 'Convention Ctr 2BR Airbnb (same as previous night)',
        type: 'vacation_rental',
        priceRange: '$272/night',
        pricePerNight: 314,
        seniorFriendly: true,
        recommended: true,
        notes: 'Third night in SLC. BOOKED via Airbnb HMN2P4MBR9.'
      },
      notes: ['FULL WORK DAY — Colin works, Mom explores', 'Great Salt Lake is a unique experience for Canadians', 'Laundry day — nearby laundromat'],
      budgetBreakdown: { accommodation: 314, food: 70, activities: 15, gas: 10, total: 409 },
      momNotes: {
        vibes: ['rest', 'city'], energy: 1,
        blurb: 'Rest day. Colin works. Same Airbnb — relax.',
        tip: '🌳 Liberty Park 1.5mi flat loop OR This Is The Place Heritage Park ($9 senior). Crown Burgers = Utah classic pastrami burger. Light day — rest joints before busy Saturday.'
      }
    },

    // ============================================================
    // DAY 14: SLC EXPLORE — NATURAL HISTORY MUSEUM, ANTELOPE ISLAND, ENSIGN PEAK
    // ============================================================
    {
      id: 'd14',
      dayNumber: 14,
      date: '2026-05-23',
      title: 'SLC Explore — Natural History Museum, Antelope Island, Ensign Peak',
      summary: 'Natural History Museum, Antelope Island scenic drive, Ensign Peak views',
      location: locations.find(l => l.id === 'slc')!,
      overnight: 'Salt Lake City, UT',
      weather: { high: 29, low: 15, conditions: '🪰 GNAT PEAK at Antelope Island. 84°F/59°F. Overcast, possible cloud cover at sunset.' },
      activities: [
        {
          id: 'a14-1',
          name: 'Natural History Museum of Utah',
          description: 'World-class museum built into the hillside above the city. Stunning architecture and exhibits on Utah\'s geology, dinosaurs, and Native peoples. The Canyon overlook from the building is worth the visit alone.',
          duration: '2.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          cost: '$18/person',
          tips: ['$18 admission', 'Fully accessible', 'The Past Worlds gallery has incredible dinosaur skeletons', 'Canyon views from the upper floors are stunning', 'Allow 2-3 hours — it\'s a large museum', 'Uber 15min from downtown or drive']
        },
        {
          id: 'a14-2',
          name: 'Antelope Island State Park',
          description: 'Drive 25mi north to Antelope Island for a scenic loop drive through the Great Salt Lake. See free-roaming bison and antelope from the car, short rim walks with lake views. Perfect for an 80-year-old: stay in the car for most of it, short flat walks at viewpoints.',
          duration: '3 hours (with drive)',
          optionalSkip: true,
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          cost: '$15 vehicle entry',
          tips: ['25mi north of downtown SLC', 'Scenic loop drive — see bison and antelope from the car', 'Short rim walks at viewpoints', 'The causeway drive across the lake is beautiful', 'Bring binoculars for wildlife', 'Can skip if tired from museum — do Ensign Peak instead']
        },
        {
          id: 'a14-3',
          name: 'Ensign Peak',
          url: 'https://www.alltrails.com/trail/us/utah/ensign-peak-trail-and-overlook',
          description: 'Short 0.7mi hike with panoramic SLC valley views. The Wasatch Mountains, Great Salt Lake, and downtown spread out below. A hidden gem most tourists miss.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '0.7 miles round trip',
          elevation: { gain: 400 },
          tips: ['0.7mi with 400ft gain — steep but short', 'Panoramic valley views at the top', 'Free, no entry fee', 'Trailhead is 5min drive from downtown', 'Can drive partway up for shorter walk']
        },
        {
          id: 'a14-4',
          name: 'City Creek Canyon (optional)',
          description: 'Scenic drive into the mountains from downtown SLC. Paved road winds through a wooded canyon with a stream. Good for a peaceful afternoon drive.',
          duration: '1 hour',
          optionalSkip: true,
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Scenic drive right from downtown into the mountains', 'Paved road, easy driving', 'Memory Grove park at the base is also nice for a short walk']
        },
        {
          id: 'a14-5',
          name: 'Farewell Dinner in SLC',
          description: 'Last night in Salt Lake City. Nice dinner to mark the transition from desert to mountains.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['HSL for craft cocktails and small plates', 'Valter\'s Osteria for Italian', 'Pack tonight — heading to Driggs tomorrow']
        }
      ],
      accommodation: {
        id: 'acc14a',
        name: 'Convention Ctr 2BR Airbnb (same as previous night)',
        type: 'vacation_rental',
        priceRange: '$272/night',
        pricePerNight: 314,
        seniorFriendly: true,
        recommended: true,
        notes: 'Fourth and final night in SLC. BOOKED via Airbnb HMN2P4MBR9.'
      },
      notes: ['EXPLORE DAY — museums, nature, views', 'Natural History Museum is a highlight', 'Antelope Island: bison from the car, great for seniors', 'Ensign Peak: short hike, huge views', 'Saturday in SLC — relaxed pace', 'Pack tonight for Driggs drive tomorrow'],
      budgetBreakdown: { accommodation: 314, food: 80, activities: 18, gas: 0, total: 412 },
      momNotes: {
        vibes: ['city'], energy: 2,
        blurb: 'SLC fun day. Natural History Museum + Antelope Island (bison!). Easy pace.',
        tip: '🪰 HEAD NETS for Antelope Island — May is peak biting gnat season (insect repellent doesn\'t work). NHMU dinosaurs after lunch. Ensign Peak sunset is steep — bail to State Capitol grounds if knees flare.'
      }
    },

    // ============================================================
    // DAY 15: HALF WORK AM + SLC → DRIGGS
    // ============================================================
    {
      id: 'd15',
      dayNumber: 15,
      date: '2026-05-24',
      title: 'Half Work AM + SLC → Driggs',
      summary: 'Morning work, afternoon drive to Teton Valley',
      location: locations.find(l => l.id === 'driggs')!,
      overnight: 'Driggs, ID',
      drivingDistance: '290 miles',
      drivingTime: '4.5 hours',
      weather: { high: 23, low: 10, conditions: 'Overcast with light drizzle. 73°F/50°F. 26% precip — light rain jacket essential.' },
      activities: [
        {
          id: 'a15-1',
          name: 'Colin Works — Hotel (8am-11am)',
          description: 'Morning work block at Airbnb. Check out by 11am.',
          startTime: '8:00 AM',
          endTime: '11:00 AM',
          duration: '3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Free breakfast before work', 'Check out by 11am']
        },
        {
          id: 'a15-2',
          name: 'Drive SLC to Driggs, ID',
          description: 'Head north on I-15 through Idaho farmland, then east on ID-33 to Driggs. The last stretch has Teton views appearing on the horizon. Driggs is on the west (quiet) side of the Tetons.',
          duration: '4.5 hours (with stops)',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Stop in Pocatello or Idaho Falls for lunch and gas', 'ID-33 from Rexburg to Driggs is scenic farmland with Teton backdrop', 'Driggs is the "quiet side" of the Tetons — much cheaper than Jackson']
        },
        {
          id: 'a15-checkin',
          name: 'Check In & Drop Bags at Hotel',
          description: 'Drop bags, freshen up, get settled before exploring.',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
        },
        {
          id: 'a15-3',
          name: 'Arrive Driggs & Teton Views',
          description: 'Check in and take in the western Teton views. Walk downtown Driggs — a small charming Idaho mountain town with a few shops and restaurants. The Tetons loom just to the east.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Driggs is tiny — the whole downtown is 2 blocks', 'Teton views from town are spectacular', 'Barrels & Bins community market for groceries', 'Royal Wolf for pizza and beer']
        }
      ],
      accommodation: {
        id: 'acc15a',
        name: 'Mountain Modern Victor House — BOOKED',
        type: 'vacation_rental',
        priceRange: '$295.16/night (after $460 discount)',
        pricePerNight: 295,
        address: '8487 Caribou Ct, Victor, ID 83455',
        website: 'https://www.airbnb.com/',
        amenities: ['Keypad self check-in', 'Mountain modern design', 'Kitchen', '2 bedrooms'],
        seniorFriendly: true,
        recommended: true,
        notes: 'BOOKED: Airbnb HM2FC8WSJ8. $885.47 total ($381.67/n x 3, $460 discount). Hosted by Cristine. Check-in 4pm, out 10am. Paid 4/15 Visa 6386. Non-refundable.'
      },
      accommodationOptions: [
        {
          id: 'acc15a',
          name: 'Mountain Modern Victor House — BOOKED',
          type: 'vacation_rental',
          priceRange: '$295.16/night (after $460 discount)',
          pricePerNight: 295,
          address: '8487 Caribou Ct, Victor, ID 83455',
          website: 'https://www.airbnb.com/',
          amenities: ['Keypad self check-in', 'Mountain modern design', 'Kitchen', '2 bedrooms'],
          seniorFriendly: true,
          recommended: true,
          notes: 'BOOKED: Airbnb HM2FC8WSJ8. $885.47 total ($381.67/n x 3, $460 discount). Hosted by Cristine. Check-in 4pm, out 10am. Paid 4/15 Visa 6386. Non-refundable.'
        }
      ],
      notes: ['HALF WORK + DRIVING DAY', 'Driggs is cheaper than Jackson and has great Teton views', 'Cooler temps — bring layers', 'Sunday drive — light traffic on I-15 northbound'],
      budgetBreakdown: { accommodation: 295, food: 70, activities: 0, gas: 55, total: 420 },
      momNotes: {
        vibes: ['drive', 'mountain'], energy: 2,
        blurb: 'Drive SLC→Driggs through Idaho. Tetons come into view late afternoon. Cooler temps now.',
        tip: '🦌 Buddy\'s Italian Pocatello (Exit 69) lunch ~2:30pm. Pine Creek Pass via Swan Valley — moose/elk dusk window. Sunset Driggs 8:52pm MDT. Driggs is at 6,100ft — chilly evening (50°F), bring a fleece.'
      },
      driveRoute: {
        from: 'Salt Lake City, UT',
        to: 'Driggs, ID (Teton Valley)',
        miles: 285,
        driveHours: 4.75,
        departure: '12:00 noon MDT',
        arrival: '~6:30pm MDT',
        sunset: '8:52pm MDT',
        forecast: 'Sunny, 57°F high. Cool at 6,100ft — bring a light fleece.',
        tldr: 'I-15 N → Idaho Falls → US-26 E through Swan Valley & Palisades Reservoir → ID-31 over Pine Creek Pass → Victor → Driggs. Same drive time as the direct ID-33 route but the prettiest stretch of the day — Snake River, reservoir, dusk wildlife window, real mountain pass dropping into Teton Valley.',
        stops: [
          {
            name: "Buddy's Italian, Pocatello",
            type: 'lunch',
            driveFromPrev: '2h30 from SLC',
            timeNeeded: '45 min',
            note: '626 E Lewis St (Exit 69 off I-15). Family-run since 1955, famous salad. Bathrooms + easy parking. Arrive ~2:30pm.',
            url: 'https://www.buddysitalian.com/sandwich-menu',
          },
          {
            name: 'Snake River Greenbelt, Idaho Falls',
            type: 'bathroom',
            driveFromPrev: '50 min',
            timeNeeded: '15 min',
            note: 'Stretch + bathroom stop. Park near falls overlook on River Pkwy. Paved path, restrooms at visitor center.',
            url: 'https://www.visitidahofalls.com/',
          },
          {
            name: 'Palisades Reservoir overlook, Swan Valley',
            type: 'wildlife',
            driveFromPrev: '55 min on US-26',
            timeNeeded: '30 min',
            note: 'US-26 hugs the reservoir for 20 mi. Pullouts at Calamity Point and Blowout Boat Ramp. Dusk = prime moose/elk/eagle window — drive slow, scan willows along the river.',
          },
          {
            name: 'Pine Creek Pass + Victor overlook',
            type: 'view',
            driveFromPrev: '45 min on ID-31',
            timeNeeded: '15 min',
            note: 'ID-31 winds over the pass through Targhee NF. First Teton reveal coming down into Teton Valley. Pullout on ID-31 just before Victor.',
          },
          {
            name: 'Driggs check-in + dinner',
            type: 'view',
            driveFromPrev: '10 min on ID-33',
            timeNeeded: 'evening',
            note: 'Tetons fill the eastern sky. Dinner: Forage Bistro (reserve) or Teton Thai (walk-in). Tatanka Tavern pizza as fallback.',
            url: 'https://forageandlounge.com/',
          },
        ],
        alternatives: [
          { name: 'Direct I-15 → ID-33 (fastest)', verdict: 'maybe', why: 'Save 30 min but skip the prettiest hour. Use if leaving SLC after 1:30pm.' },
          { name: 'Logan Canyon → Bear Lake', verdict: 'skip', why: '+90 min, Bear Lake water 54°F (look not swim), arrives Driggs in twilight.' },
          { name: 'Heber → Star Valley → Teton Pass', verdict: 'skip', why: '7+ hours, arrives after dark, burns Tuesday\'s Grand Teton reveal.' },
          { name: 'Mesa Falls Scenic Byway', verdict: 'save', why: 'Save for a half-day from Driggs — 90 min RT from Driggs, $5/car, 0.6mi boardwalk to 114-ft falls.' },
          { name: 'Harriman SP (trumpeter swans)', verdict: 'save', why: 'Save for a half-day from Driggs — 65 min north near Island Park.' },
          { name: 'Antelope Island', verdict: 'skip', why: 'Wrong direction from SLC + May = peak gnat season.' },
        ],
        contingencies: [
          'If leaving SLC after 1:30pm: drop Swan Valley detour. Take direct I-15 → US-20 → ID-33. Eat lunch at Sandpiper in Idaho Falls. Arrive Driggs ~6:30pm.',
          'If it rains: Pine Creek Pass is paved/fine but wildlife drops off. Skip Victor pullout. Lava Hot Springs (Exit 47, $12-15) becomes a great rain play.',
          'Pine Creek Pass essentially never closes May–Oct. Teton Pass not on this route. Check Idaho 511 morning-of.',
          'Wildfire smoke / air quality alert: skip outdoor stops, drive direct with Pocatello lunch only.',
        ],
        preDeparture: [
          'Top off gas in SLC (next reliable gas: Tremonton Exit 379 or Pocatello).',
          'Confirm Driggs Airbnb (HM2FC8WSJ8) check-in time + door code BEFORE leaving SLC — cell is patchy on Pine Creek Pass.',
          'Download offline Google Maps for the Idaho Falls → Driggs segment.',
          'Reserve Forage Bistro for 7:30pm Sunday if that\'s the dinner pick.',
          'Check Idaho 511 + Wyoming 511 for Memorial Day Sunday Jackson-bound traffic.',
          'Pack: light fleece, water bottles, sunglasses, sunscreen (high elevation), walking shoes, snacks.',
        ],
      }
    },

    // ============================================================
    // DAY 16: WORK DAY — DRIGGS (MEMORIAL DAY, MOM: TOWN WALK, TETON VIEWS)
    // ============================================================
    {
      id: 'd16',
      dayNumber: 16,
      date: '2026-05-25',
      title: 'Work Day — Driggs',
      summary: 'Colin works full day, Mom: town walk and Teton views',
      location: locations.find(l => l.id === 'driggs')!,
      overnight: 'Driggs, ID',
      weather: { high: 21, low: 7, conditions: 'Partly cloudy. 70°F/45°F. 30% precip chance. Memorial Day rest.' },
      activities: [
        {
          id: 'a16-1',
          name: 'Colin Works — Cabin or Cafe (Full Day)',
          description: 'Full work day. Work from cabin (WiFi) or walk to Citizen 33 coffee shop in downtown Driggs.',
          duration: '8 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Citizen 33: downtown Driggs, good coffee and WiFi', 'Cabin WiFi should be decent', 'Memorial Day Monday — some shops may have holiday hours']
        },
        {
          id: 'a16-2',
          name: 'Mom Solo: Driggs Town Walk & Teton Views',
          description: 'Walk downtown Driggs (flat, 2 blocks). Browse shops, grab coffee. Walk east on any side road for open Teton views across the farm fields. The setting is peaceful and beautiful.',
          duration: '3-4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Downtown is tiny but charming — 2 blocks', 'Walk east toward the Tetons for open field views', 'Barrels & Bins for groceries and local goods', 'Peaked Sports for outdoor gear window shopping', 'Teton views from town are spectacular on clear days']
        },
        {
          id: 'a16-3',
          name: 'Mom Solo: Alta, WY Drive (optional)',
          optionalSkip: true,
          description: 'Short drive east to Alta, Wyoming — a tiny mountain community at the base of the Tetons. Grand Targhee Resort is up the canyon with mountain views and a nice lodge to explore.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['12mi drive from Driggs to Alta/Grand Targhee', 'Grand Targhee has a restaurant and nice mountain setting', 'Road is paved and easy']
        },
        {
          id: 'a16-4',
          name: 'Dinner Together',
          description: 'Reconnect for dinner in Driggs.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Forage Bistro for upscale local food', 'Royal Wolf for casual pizza and beer', 'Tatanka Tavern for pub food with Teton views']
        }
      ],
      accommodation: {
        id: 'acc16a',
        name: 'Mountain Modern Victor House (same as previous night)',
        type: 'vacation_rental',
        priceRange: '$295.16/night (after $460 discount)',
        pricePerNight: 295,
        seniorFriendly: true,
        recommended: true,
        notes: 'Second night at Mountain Modern Victor House.'
      },
      notes: ['FULL WORK DAY — Memorial Day Monday', 'Mom can explore Driggs at her own pace', 'Quiet, peaceful mountain town setting', 'Rest up for Teton full day tomorrow'],
      budgetBreakdown: { accommodation: 295, food: 70, activities: 0, gas: 5, total: 370 },
      momNotes: {
        vibes: ['rest', 'mountain'], energy: 1,
        blurb: 'Memorial Day rest. Colin works. Walk around tiny mountain town.',
        tip: '🥔 Spud Drive-In iconic giant potato photo (231 S Hwy 33). Tatanka Tavern 3rd-floor Teton view for lunch. Pendl\'s Pastries open Memorial Day.'
      }
    },

    // ============================================================
    // DAY 17: TETON FULL DAY — OXBOW BEND, MORMON ROW, JACKSON LAKE, SIGNAL MTN
    // ============================================================
    {
      id: 'd17',
      dayNumber: 17,
      date: '2026-05-26',
      title: 'Teton Full Day — Oxbow Bend, Mormon Row, Jackson Lake',
      summary: 'Oxbow Bend, Mormon Row, Jackson Lake Lodge, Schwabacher Landing',
      location: locations.find(l => l.id === 'teton')!,
      overnight: 'Driggs, ID',
      weather: { high: 17, low: 4, conditions: '⚠️ 50% RAIN. Tetons sunrise 40°F. Pack rain shells. UV 7 high altitude.' },
      activities: [
        {
          id: 'a17-1',
          name: 'Drive Driggs to Grand Teton via Teton Pass',
          description: 'Cross over Teton Pass (8,431ft) from the Idaho side into Jackson Hole. Dramatic mountain pass with hairpin turns and stunning views. Enter Grand Teton from the south.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          directionsUrl: 'https://www.google.com/maps/dir/Driggs+ID/Teton+Pass+Summit/Oxbow+Bend+Turnout/Mormon+Row+Historic+District/Jackson+Lake+Lodge/Schwabacher+Landing/Cathedral+Group+Turnout',
          tips: ['Teton Pass is dramatic — pullover for photos at the top', 'From Jackson, head north into Grand Teton NP', 'America the Beautiful pass covers entry']
        },
        {
          id: 'a17-2',
          name: 'Oxbow Bend Wildlife Stop',
          description: 'Drive to Oxbow Bend for the iconic Mt. Moran reflection on still water. Moose, beavers, and bald eagles are frequently spotted. All viewing from the car or roadside pulloff.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Morning is best — still water for reflections', 'Moose are frequently spotted here', 'Bring binoculars', 'Stay in/near the car', 'iPhone: 2x zoom for the Mt. Moran reflection']
        },
        {
          id: 'a17-3',
          name: 'Mormon Row — Iconic Barns & Bison',
          description: 'Drive to the famous Moulton Barns with the Teton Range behind them. Bison often graze in the fields. The T.A. Moulton Barn is the most photographed barn in America.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['T.A. Moulton Barn is the classic postcard shot', 'Bison are common — stay in or near the car', 'Morning or evening light is best', 'iPhone: 1x or 2x with barn in foreground, Tetons behind']
        },
        {
          id: 'a17-4',
          name: 'Jackson Lake Lodge — Picture Windows & Lunch',
          description: 'Visit the historic Jackson Lake Lodge with its famous 60-foot picture windows framing the entire Teton Range. The lobby alone is worth the visit. Grab lunch at the lodge.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['60-foot windows in the lobby — one of the great views in the national parks', 'Lunch Tree Hill: 1mi easy walk behind the lodge, 360-degree views', 'Comfortable seating to just sit and take in the view']
        },
        {
          id: 'a17-5',
          name: 'Schwabacher Landing & Jackson Lake Dam',
          description: 'Schwabacher Landing: short dirt road to the Snake River with iconic Teton reflections (best morning calm water). Then Jackson Lake Dam viewpoint for sweeping lake and mountain views. Signal Mountain Summit Road is usually closed until June 1 — skip it this trip.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Schwabacher Landing: bumpy dirt road (0.5mi) but any car can handle it', 'Best reflections in early morning calm water', 'Jackson Lake Dam has restrooms and a great viewpoint', 'Signal Mountain road likely CLOSED in late May — opens ~June 1']
        },
        {
          id: 'a17-6',
          name: 'Cathedral Group Turnout & Return to Driggs',
          description: 'Stop at Cathedral Group Turnout along Teton Park Road for the classic postcard view of Grand, Middle, and South Teton. Then drive back over Teton Pass to Driggs for dinner.',
          duration: '1.5 hours (including drive back)',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Cathedral Group Turnout is the classic postcard view', 'Late afternoon light on the Tetons is magical', 'Drive back over Teton Pass — last views of the day']
        }
      ],
      accommodation: {
        id: 'acc17a',
        name: 'Mountain Modern Victor House (same as previous night)',
        type: 'vacation_rental',
        priceRange: '$295.16/night (after $460 discount)',
        pricePerNight: 295,
        seniorFriendly: true,
        recommended: true,
        notes: 'Third and final night at Mountain Modern Victor House.'
      },
      notes: ['FULL TETON DAY — no work, all sightseeing', 'Teton Pass drive is dramatic — take it slow', 'All activities are easy/drive-up except Lunch Tree Hill (1mi optional walk)', 'Signal Mountain road likely CLOSED in late May (opens ~June 1) — skip it, do Schwabacher Landing instead', 'Carry bear spray on any trails', 'WILDLIFE: Late May is calving season — moose, bison, bears with cubs'],
      budgetBreakdown: { accommodation: 295, food: 80, activities: 0, gas: 30, total: 405 },
      momNotes: {
        vibes: ['mountain'], energy: 2,
        blurb: 'Grand Teton! Mountains everywhere, easy viewpoints + Mormon Row. Beautiful.',
        tip: '🪪 $135 entry for Mom (NEW 2026 non-resident surcharge). Cold sunrise 40°F = hand warmers, beanie, gloves. 50% rain chance — pack rain shell. Oxbow Bend afternoon = best moose habitat.'
      }
    },

    // ============================================================
    // DAY 18: DRIGGS → YELLOWSTONE — TETON AM STOPS + SOUTH LOOP PM
    // ============================================================
    {
      id: 'd18',
      dayNumber: 18,
      date: '2026-05-27',
      title: 'Driggs → Yellowstone — Teton AM + Old Faithful & Grand Prismatic PM',
      summary: 'Last Teton stops, enter Yellowstone south, Old Faithful, Grand Prismatic',
      location: locations.find(l => l.id === 'yellowstone')!,
      overnight: 'West Yellowstone, MT',
      drivingDistance: '150 miles (Driggs to West Yellowstone via park)',
      drivingTime: '4 hours (with stops)',
      weather: { high: 17, low: 1, conditions: '🥶 FREEZING OVERNIGHT 33°F. Targhee Pass possible snow/slush. 62°F/33°F.' },
      activities: [
        {
          id: 'a18-1',
          name: 'Drive Driggs → Grand Teton (Teton Pass)',
          description: 'Cross Teton Pass one more time. Enter the park from the south and stop at Schwabacher Landing for Teton reflections in beaver ponds. Last Teton views before heading north.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          directionsUrl: 'https://www.google.com/maps/dir/Driggs+ID/Schwabacher+Landing/West+Thumb+Geyser+Basin/Old+Faithful/Grand+Prismatic+Spring+Overlook/West+Yellowstone+MT',
          tips: ['Schwabacher Landing: flat, easy 0.5mi walk to beaver ponds with Teton reflections', 'Best reflections in early morning with still water', 'Gravel road is fine for any car']
        },
        {
          id: 'a18-2',
          name: 'Drive Through Grand Teton → Yellowstone South Entrance',
          description: 'Drive north through Grand Teton into Yellowstone via the south entrance. Watch for bison on the road. Stop at West Thumb Geyser Basin right on Yellowstone Lake — a 30min boardwalk loop.',
          duration: '2 hours (drive + West Thumb)',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '0.5 miles (West Thumb boardwalk)',
          tips: ['South entrance may have lines — arrive by late morning', 'West Thumb Geyser Basin is right on the lakeshore', 'Fill gas at Grant Village']
        },
        {
          id: 'a18-3',
          name: 'Old Faithful',
          description: 'Watch the world\'s most famous geyser erupt. Flat boardwalk loop with benches. Eruptions every 60-110 minutes. Check the visitor center for the next predicted time.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '0.8 miles (boardwalk loop)',
          tips: ['Download the GeyserTimes app for eruption predictions', 'Arrive 30min early for good bench seats', 'Old Faithful Inn lobby is worth seeing — largest log structure in the world', 'iPhone: video mode for the eruption, then slo-mo for the peak']
        },
        {
          id: 'a18-4',
          name: 'Grand Prismatic Spring',
          description: 'The largest hot spring in the US, famous for its vivid rainbow colors. Short boardwalk loop at Midway Geyser Basin.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '0.8 miles (boardwalk)',
          tips: ['Midway Geyser Basin parking fills up — go mid-afternoon when morning crowds thin', 'Colors best on sunny days when steam is minimal', 'Afternoon (after 1pm) is better for photos: less steam, sun overhead', 'iPhone: 0.5x ultrawide from the boardwalk']
        },
        {
          id: 'a18-checkin',
          name: 'Check In & Drop Bags at Hotel',
          description: 'Drop bags, freshen up, get settled before exploring.',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
        },
        {
          id: 'a18-5',
          name: 'Drive to West Yellowstone via Madison',
          description: 'Exit the park via the west entrance to West Yellowstone, MT. Stop at Madison Junction to scan for elk and bison in the meadows along the Madison River.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Madison River meadows often have elk and bison', 'West Yellowstone is right at the park entrance', 'Fill gas in West Yellowstone']
        }
      ],
      accommodation: {
        id: 'acc18a',
        name: 'Crosswinds Inn — BOOKED',
        type: 'hotel',
        priceRange: '$291.60/night',
        pricePerNight: 292,
        address: '201 Firehole Ave, West Yellowstone, MT 59758',
        phone: '+1 406-646-9557',
        website: 'https://www.booking.com/',
        amenities: ['2 Queen Beds', 'Breakfast included', 'Near West Entrance'],
        seniorFriendly: true,
        recommended: true,
        notes: 'BOOKED: Booking.com #5288855262 PIN:3523. $657.18 total ($291.60/n x 2 + tax + fees). Check-in 4pm, out 11am. Prepaid Visa 6386. Non-refundable.'
      },
      accommodationOptions: [
        {
          id: 'acc18a',
          name: 'Crosswinds Inn — BOOKED',
          type: 'hotel',
          priceRange: '$291.60/night',
          pricePerNight: 292,
          address: '201 Firehole Ave, West Yellowstone, MT 59758',
          phone: '+1 406-646-9557',
          website: 'https://www.booking.com/',
          amenities: ['2 Queen Beds', 'Breakfast included', 'Near West Entrance'],
          seniorFriendly: true,
          recommended: true,
          notes: 'BOOKED: Booking.com #5288855262 PIN:3523. $657.18 total ($291.60/n x 2 + tax + fees). Check-in 4pm, out 11am. Prepaid Visa 6386. Non-refundable.'
        }
      ],
      notes: ['TETON AM + YELLOWSTONE PM', 'Last Teton views at Schwabacher Landing', 'Old Faithful + Grand Prismatic are the two must-sees', 'Dress in layers — Yellowstone is cold!', 'Fill gas at Grant Village and West Yellowstone'],
      budgetBreakdown: { accommodation: 292, food: 70, activities: 35, gas: 30, total: 427 },
      momNotes: {
        vibes: ['drive', 'mountain'], energy: 2,
        blurb: 'Drive into Yellowstone! Old Faithful + Grand Prismatic. Iconic geysers.',
        tip: '🌈 Grand Prismatic from FAIRY FALLS overlook (1.2mi RT, NPS calls senior-friendly) — NOT Midway boardwalk. Old Faithful eruption every ~90min. Old Faithful Inn 1904 lobby worth 10min.'
      }
    },

    // ============================================================
    // DAY 19: YELLOWSTONE FULL DAY — CANYON, MAMMOTH, TOWER FALL, LAMAR
    // ============================================================
    {
      id: 'd19',
      dayNumber: 19,
      date: '2026-05-28',
      title: 'Yellowstone Full Day — Canyon, Mammoth, Tower Fall, Lamar',
      summary: 'Artist Point, Mammoth terraces, Tower Fall, Lamar Valley wildlife',
      location: locations.find(l => l.id === 'yellowstone')!,
      overnight: 'West Yellowstone, MT',
      weather: { high: 17, low: 1, conditions: '⚠️ SNOW POSSIBLE at Dunraven Pass 8,800ft. Call NPS 307-344-2117 morning-of. 62°F/33°F.' },
      activities: [
        {
          id: 'a19-1',
          name: 'Lamar Valley Wildlife Drive (early AM)',
          description: 'Early morning drive to the Lamar Valley — the "Serengeti of North America." Dawn to 9am is best. Stay in the car with binoculars. Wolves, bison herds, bears, pronghorn, and elk are all possible.',
          duration: '2.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          directionsUrl: 'https://www.google.com/maps/dir/West+Yellowstone+MT/Madison+Junction+Yellowstone/Canyon+Village+Yellowstone/Tower+Fall+Yellowstone/Lamar+Valley/Mammoth+Hot+Springs/West+Yellowstone+MT',
          tips: ['Leave West Yellowstone by 5am for dawn in Lamar (1.5hr drive via Canyon)', 'Stay in the car — binoculars essential', 'Wolves are best spotted with a scope at distance', 'Bison herds are almost guaranteed', 'Look for bears on hillsides in early morning']
        },
        {
          id: 'a19-2',
          name: 'Tower Fall Viewpoint',
          description: 'Short walk from parking to view the 132ft Tower Fall. Quick stop on the way back west.',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Very short walk from parking to the overlook', 'The trail down to the base is steep — skip it']
        },
        {
          id: 'a19-3',
          name: 'Mammoth Hot Springs Terraces',
          description: 'Boardwalk through stunning travertine terraces formed by hot springs. The terraces constantly change — some are flowing, some are dry. Lower terraces have gentle inclines.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '0.75 miles (lower terraces boardwalk)',
          tips: ['Lower terraces boardwalk has gentle inclines', 'Upper terraces accessible by car (one-way loop drive)', 'Terraces change constantly — different every visit', 'Fill gas at Mammoth', 'Elk often lounge right on the Mammoth lawns']
        },
        {
          id: 'a19-4',
          name: 'Artist Point — Grand Canyon of the Yellowstone',
          description: 'Drive back through Canyon Village. Short paved walk to the most iconic viewpoint in Yellowstone: the Grand Canyon of the Yellowstone with Lower Falls (308ft). This is a must-see.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '0.3 miles (paved walk to overlook)',
          tips: ['Artist Point is THE iconic Yellowstone viewpoint', 'Short paved path from parking', 'Uncle Tom\'s Trail has 300+ stairs — skip it', 'Upper Falls viewpoint is also easy and worth a quick stop']
        },
        {
          id: 'a19-5',
          name: 'Return to West Yellowstone',
          description: 'Drive back to West Yellowstone via Madison Junction. Watch for wildlife in the meadows along the Madison River in the evening.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Madison River meadows are great for evening wildlife', 'Fill gas at Canyon Village before heading west', 'Long but incredible day — early dinner in West Yellowstone']
        }
      ],
      accommodation: {
        id: 'acc19a',
        name: 'Crosswinds Inn (same as previous night)',
        type: 'hotel',
        priceRange: '$291.60/night',
        pricePerNight: 292,
        seniorFriendly: true,
        recommended: true,
        notes: 'Second night — same hotel.'
      },
      notes: ['FULL YELLOWSTONE DAY — big loop, long but rewarding', 'Leave early (5am) for Lamar Valley wildlife', 'Lamar → Tower Fall → Mammoth → Canyon → West Yellowstone', 'All boardwalk/drive-up activities — no real hiking', 'WILDLIFE: Lamar Valley at dawn — wolves, grizzlies, bison calves', 'Artist Point is a MUST-SEE', 'Dress in warm layers — Yellowstone is cold in late May'],
      budgetBreakdown: { accommodation: 292, food: 70, activities: 0, gas: 40, total: 402 },
      momNotes: {
        vibes: ['mountain'], energy: 3,
        blurb: 'Yellowstone full day. Geysers, canyons, bison and elk. Lots to see.',
        tip: '🦬 Lamar Valley = America\'s Serengeti. Bison + maybe distant wolves. Turn around at Slough Creek pullout. ⚠️ Snow possible at Dunraven Pass 8,800ft — call NPS 307-344-2117 morning-of.'
      }
    },

    // ============================================================
    // DAY 20: DRIVE YELLOWSTONE → GLACIER + ROBIN ARRIVES FCA EVE
    // ============================================================
    {
      id: 'd20',
      dayNumber: 20,
      date: '2026-05-29',
      title: 'Drive Yellowstone → Glacier + Robin Arrives',
      summary: 'Drive to Glacier via Missoula, Robin flies in Friday evening',
      location: locations.find(l => l.id === 'glacier')!,
      overnight: 'Columbia Falls, MT',
      drivingDistance: '380 miles',
      drivingTime: '5.5 hours',
      weather: { high: 21, low: 7, conditions: 'Light drizzle clearing → partly cloudy. 70°F/45°F. Lake McDonald cold 40-45°F.' },
      activities: [
        {
          id: 'a20-1',
          name: 'Drive West Yellowstone to Glacier',
          description: 'Drive west on US-20/I-15 to Butte, then I-90 west to Missoula, then US-93 north to Polson and up to Columbia Falls. Long drive but beautiful Montana scenery. Stop in Butte or Missoula for lunch.',
          duration: '5.5 hours (with stops)',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Leave by 8am to arrive mid-afternoon', 'Missoula is a great lunch stop — hip college town', 'Polson on Flathead Lake is scenic if you need another stretch break', 'Fill gas in Missoula']
        },
        {
          id: 'a20-checkin',
          name: 'Check In & Drop Bags at Hotel',
          description: 'Drop bags, freshen up, get settled before exploring.',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
        },
        {
          id: 'a20-2',
          name: 'Settle in at Columbia Falls',
          description: 'Arrive mid-afternoon. Check in to the condo, stock up on groceries at Super 1 Foods. Relax before Robin arrives.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Super 1 Foods in Columbia Falls for groceries', 'Stock up — you have a full kitchen for 2 nights', 'Walmart also in Columbia Falls for supplies']
        },
        {
          id: 'a20-3',
          name: 'Robin Arrives FCA — Afternoon (3:34pm)',
          description: 'Robin flies in Friday afternoon on Alaska AS 2402 from Seattle (departs 1:13pm PDT, arrives 3:34pm MDT, 2h21m nonstop). FCA is 13 minutes from Columbia Falls. Pick her up at the airport.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['FCA is 13min from Columbia Falls', 'Robin: Alaska AS 2402 nonstop from SEA, 2h21m (Friday afternoon, arrives 3:34pm)', 'Small airport — she\'ll be out quickly', 'Celebrate the reunion at the condo!']
        }
      ],
      accommodation: {
        id: 'acc20a',
        name: 'Apgar Village Lodge & Cabins — BOOKED',
        type: 'cabin',
        priceRange: '$181/night',
        pricePerNight: 196,
        address: 'Apgar Village, West Glacier, MT (inside park)',
        website: 'https://www.glacierparkcollection.com/',
        amenities: ['3 Queen beds', '2 rooms', 'Inside park', 'Near Lake McDonald', 'Free parking'],
        seniorFriendly: true,
        recommended: true,
        notes: 'BOOKED: Reservation #3870048. Cabin 3 Queen, 2 Room. $392.26 total. Glacier Park Collection.'
      },
      accommodationOptions: [
        {
          id: 'acc20a',
          name: 'Apgar Village Lodge & Cabins — BOOKED',
          type: 'cabin',
          priceRange: '$181/night',
          pricePerNight: 196,
          address: 'Apgar Village, West Glacier, MT (inside park)',
          website: 'https://www.glacierparkcollection.com/',
          amenities: ['3 Queen beds', '2 rooms', 'Inside park', 'Near Lake McDonald'],
          seniorFriendly: true,
          recommended: true,
          notes: 'BOOKED: Reservation #3870048. Cabin 3 Queen, 2 Room. $392.26 total. Glacier Park Collection.'
        }
      ],
      notes: ['DRIVING DAY + Robin arrives!', 'Robin arrives FCA Friday afternoon 3:34pm — Alaska AS 2402', 'FCA is 13min from Columbia Falls', '3 adults Fri-Sun: need 2 bedrooms', 'Going-to-the-Sun Road NOT fully open — Logan Pass closed until ~mid-June'],
      budgetBreakdown: { accommodation: 196, food: 80, activities: 0, gas: 60, total: 336 },
      momNotes: {
        vibes: ['drive', 'robin'], energy: 2,
        blurb: 'Drive to Glacier. ROBIN ARRIVES at the airport in the evening! 💜',
        tip: '🐻 BUY BEAR SPRAY in Kalispell ($45-55 Sportsman & Ski Haus) — can\'t fly with it. Russell\'s Fireside dinner at Lake McDonald Lodge (1913 historic) — reservation made.'
      }
    },

    // ============================================================
    // DAY 21: GLACIER — ALL THREE — LAKE MCDONALD, TRAIL OF CEDARS, HIKE
    // ============================================================
    {
      id: 'd21',
      dayNumber: 21,
      date: '2026-05-30',
      title: 'Glacier — All Three — Lake McDonald, Trail of Cedars, Hike',
      summary: 'Lake McDonald, Trail of Cedars boardwalk, Avalanche Lake hike, colorful rocks',
      location: locations.find(l => l.id === 'glacier')!,
      overnight: 'Columbia Falls, MT',
      weather: { high: 19, low: 7, conditions: 'Clearing — partly cloudy to mainly clear. 67°F/45°F. GTSR ends at Avalanche Creek (Logan Pass closed til mid-June).' },
      activities: [
        {
          id: 'a21-1',
          name: 'Lake McDonald Morning',
          description: 'Drive to the west entrance (20min from Columbia Falls). Walk along the famous colorful rocky shore at Lake McDonald. Clear water over multicolored stones is one of Glacier\'s signature sights.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['20min from Columbia Falls to West Glacier entrance', 'Famous colorful rocks on the shore', 'Morning calm water = best reflections', 'iPhone: shoot at rock-level for colorful pebbles with mountains behind', 'Park entrance: $35/vehicle or use America the Beautiful pass']
        },
        {
          id: 'a21-2',
          name: 'Trail of the Cedars',
          url: 'https://www.alltrails.com/trail/us/montana/trail-of-the-cedars--2',
          description: '1mi boardwalk loop through ancient old-growth cedar and hemlock forest. Fully accessible, flat, gorgeous. Everyone does this together.',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '1 mile (boardwalk loop)',
          tips: ['Fully easy access boardwalk', 'Old-growth western red cedars — some 500+ years old', 'Gorge viewpoint along the trail is stunning', 'Near the Avalanche Creek trailhead']
        },
        {
          id: 'a21-3',
          name: 'Avalanche Lake Hike (Colin + Robin)',
          url: 'https://www.alltrails.com/trail/us/montana/avalanche-lake--6',
          description: 'Mom: Trail of the Cedars only (1mi, flat boardwalk) — relax at Lake McDonald Lodge or Apgar Village while Colin and Robin hike. Colin + Robin: continue to Avalanche Lake (5.8mi RT, 730ft gain). Turquoise alpine lake ringed by waterfalls.',
          duration: '3-4 hours (full hike)',
          difficulty: 'moderate',
          seniorFriendly: false,
          reservationRequired: false,
          distance: '5.8 miles RT',
          elevation: { gain: 730 },
          tips: ['Mom: Trail of the Cedars only — wait at Lake McDonald Lodge or Apgar', 'Colin + Robin: Avalanche Lake is 5.8mi RT, 730ft gain', 'Snow patches possible in late May — bring hiking poles', 'Carry bear spray', 'The lake is surrounded by waterfalls from Sperry Glacier']
        },
        {
          id: 'a21-4',
          name: 'Afternoon: Lake McDonald Lodge & Apgar Village',
          description: 'Regroup at Lake McDonald for a relaxed afternoon. Lake McDonald Lodge has a Swiss chalet vibe and is worth exploring inside. Apgar Village has a gift shop, boat rentals, and visitor center.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Lake McDonald Lodge has a Swiss chalet vibe', 'Apgar Village has a gift shop and visitor center', 'Kayak/canoe rentals at Apgar if available', 'Water is cold — kayaking only, no swimming!']
        },
        {
          id: 'a21-5',
          name: 'Celebration Dinner — Last Night Together',
          description: 'Cook a final meal in the condo (full kitchen) or go out for a nice dinner. Celebrate an incredible 21-day trip.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Cook at the condo — more intimate last meal', 'Or: Belton Chalet for upscale Montana cuisine (in West Glacier)', 'Whitefish restaurants (15min drive) are also excellent', 'Pack tonight — flight day tomorrow!']
        }
      ],
      accommodation: {
        id: 'acc21a',
        name: 'Apgar Village Lodge (same as previous night)',
        type: 'cabin',
        priceRange: '$181/night',
        pricePerNight: 196,
        seniorFriendly: true,
        recommended: true,
        notes: 'Second and final night. All 3 together. Pack tonight for tomorrow\'s flights.'
      },
      notes: ['ALL THREE TOGETHER — Robin\'s full day in Glacier (Saturday)', 'Trail of the Cedars is the must-do for everyone', 'Avalanche Lake is Colin + Robin only (Mom waits at lodge/Apgar)', 'Going-to-the-Sun Road only open to Avalanche Creek area in late May', 'No vehicle reservations needed for 2026', 'CELEBRATION DINNER — what an incredible trip!'],
      budgetBreakdown: { accommodation: 196, food: 100, activities: 35, gas: 15, total: 346 },
      momNotes: {
        vibes: ['mountain'], energy: 3,
        blurb: 'Glacier National Park together. Lake McDonald + easy hike with Robin.',
        tip: '🥾 Avalanche Lake bail point at 1mi (creek gorge — still gorgeous). DeSmet boat tour 1hr historic 1930 wooden boat. Apgar pebble beach colored stones — leave them (federal offense to remove).'
      }
    },

    // ============================================================
    // DAY 22: FLY HOME FROM FCA — MORNING LAKE, AFTERNOON FLIGHTS
    // ============================================================
    {
      id: 'd22',
      dayNumber: 22,
      date: '2026-05-31',
      title: 'Fly Home from FCA — Morning Lake, Afternoon Flights',
      summary: 'Morning at the lake, return rental car, fly home',
      location: locations.find(l => l.id === 'glacier')!,
      overnight: 'Home!',
      weather: { high: 23, low: 7, conditions: 'Overcast, dry. 73°F/44°F. Comfortable mild departure day.' },
      activities: [
        {
          id: 'a22-1',
          name: 'Morning at Lake McDonald (optional)',
          description: 'If flights are afternoon, one last morning visit to Lake McDonald for quiet shoreline time. The colorful rocks at sunrise are magical.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Only if flights are afternoon — skip if morning departure', 'Morning calm water = best reflections on the lake', 'Say goodbye to the mountains']
        },
        {
          id: 'a22-2',
          name: 'Breakfast & Check Out',
          description: 'Last breakfast at the condo. Pack up and check out. Drive 15 min to FCA airport.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['FCA is only 15 min from Columbia Falls', 'Return rental car at FCA airport', 'Small airport — no TSA chaos']
        },
        {
          id: 'a22-3',
          name: 'Fly Home',
          description: 'Mom: Delta DL 2575 FCA 2:30pm→MSP 6:15pm + DL 3866 MSP 8:05pm→YYZ 11:14pm (conf G5FIWA). Colin: Alaska AS 2419 FCA 5:40pm→SEA 6:12pm First Class (conf ZAAGXY). Robin: Alaska AS 2419 FCA 5:40pm→SEA 6:12pm (same flight as Colin).',
          duration: 'All day',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          tips: ['FCA is a small, easy airport — very manageable', 'Arrive 1.5hrs before departure', 'Mom departs first at 2:30pm (Delta to MSP then YYZ)', 'Colin departs 5:40pm (Alaska AS 2419 First Class to SEA)', 'Robin + Colin: Alaska AS 2419 FCA 5:40pm→SEA 6:12pm', 'What an incredible 22-day trip!']
        }
      ],
      notes: ['FLIGHT DAY — morning lake (optional), then airport', 'Return rental car at FCA airport', 'Mom: DL 2575 FCA 2:30pm→MSP, DL 3866 MSP→YYZ 11:14pm (conf G5FIWA)', 'Colin: AS 2419 FCA 5:40pm→SEA 6:12pm First Class (conf ZAAGXY)', 'Robin + Colin: AS 2419 FCA 5:40pm→SEA 6:12pm — BOOKED', '22 days, 6 national parks, Las Vegas to Glacier — trip of a lifetime!'],
      budgetBreakdown: { accommodation: 0, food: 30, activities: 0, gas: 0, total: 30 },
      momNotes: {
        vibes: ['fly', 'mountain'], energy: 1,
        blurb: 'Morning by the lake. Fly home from Kalispell.',
        tip: '🌅 Sunrise at Lake McDonald (Apgar pier 5min). Eddie\'s Cafe huckleberry pie. Leave Apgar by 12pm HARD to make 2:30pm flight.'
      }
    }
  ],
  totalBudget: {
    flights: 952,
    carRental: 1040,
    accommodations: 6242,
    food: 1570,
    activities: 350,
    gas: 505,
    misc: 520,
    total: 11179
  },
  costBreakdown: {
    flights: {
      colinOutbound: { description: 'PAE→LAS Alaska AS 777 — BOOKED Chase #1016489986 conf KJMXSI', price: 212.83 },
      momOutbound: { description: 'YYZ→LAS Porter PD 653 — BOOKED conf C3STYI', price: 276.23 },
      colinReturn: { description: 'FCA→SEA Alaska AS 2419 First Class — BOOKED Chase #1016667852 conf ZAAGXY', price: 218.40 },
      momReturn: { description: 'FCA→MSP→YYZ Delta DL 2575+3866 — BOOKED Amex #7468-1456 conf G5FIWA', price: 244.33 },
      robinOutbound: { description: 'SEA→FCA Alaska AS 2402 — BOOKED (Robin paid separately)', price: 0 },
      robinReturn: { description: 'FCA→SEA Alaska AS 2419 — BOOKED (same flight as Colin, Robin paid separately)', price: 0 },
      total: 951.79,
    },
    carRental: {
      dailyRate: 40,
      days: 21,
      dropoffFee: 200,
      total: 1040,
      notes: 'BOOKED: Booking.com Itinerary #767545928. LAS pickup May 10 noon, one-way to FCA over 21 days. Chase Sapphire Reserve = primary insurance.',
    },
    accommodationAvg: 132,
    foodPerDay: 71,
    gasEstimate: 500,
  },
  importantReservations: [
    {
      item: '✅ Upper Antelope Canyon Tour — BOOKED',
      bookBy: 'BOOKED',
      website: 'https://antelopeslotcanyon.com/',
      notes: 'Order #FMBYMK. 10:00am MST May 14, 2 adults. Antelope Slot Canyon Tours. ⚠️ TIMEZONE: Tour operates on MST (Arizona time = same as PDT in summer), NOT Navajo MDT. Mom still needs to sign waiver — check email.'
    },
    {
      item: '✅ Grand Canyon — Maswik Lodge BOOKED',
      bookBy: 'BOOKED',
      website: 'https://www.grandcanyonlodges.com/',
      notes: 'Maswik Lodge IN-PARK (not Tusayan). Xanterra #20514347. Standard 2 Queen North, 20% discount. $547.30 total ($273.65 deposit paid).'
    },
    {
      item: '✅ Car Rental LAS→FCA — BOOKED',
      bookBy: 'BOOKED',
      website: 'https://cars.booking.com',
      notes: 'Booking.com Itinerary #767545928. LAS pickup May 10 at 12:00pm noon. Pay with Chase Sapphire Reserve = primary rental insurance, decline ALL CDW/LDW.'
    },
    {
      item: '✅ Driggs — Mountain Modern Victor House BOOKED',
      bookBy: 'BOOKED',
      website: 'https://www.airbnb.com/rooms/1133460407258641526',
      notes: 'Airbnb HM2FC8WSJ8. 8487 Caribou Ct, Victor ID 83455. 3n Sun-Wed May 24-27. $885.47 paid 4/15 (Visa 6386). NON-REFUNDABLE.'
    },
    {
      item: '✅ Glacier — Apgar Village Lodge BOOKED',
      bookBy: 'BOOKED',
      website: 'https://www.glacierparkcollection.com/lodging/apgar-village/',
      notes: 'Apgar Village Lodge (IN-PARK, near Lake McDonald — NOT Columbia Falls). Reservation #3870048. Cabin 3 Queen, 2 Room. 2n May 29-31. $392.26 ($189.22 paid, $203.04 balance at check-in).'
    },
    {
      item: '✅ America the Beautiful Pass — OWNED',
      bookBy: 'OWNED',
      website: 'https://store.usgs.gov/pass/annual',
      notes: 'Colin\'s annual pass. Covers all passengers including nonresident fees at federal parks. Saves $250 across 6 parks. ⚠️ Does NOT waive Mom\'s Grand Teton non-resident $100 surcharge (new for 2026) — that is in addition to vehicle entry.'
    },
    {
      item: '🔴 Mom\'s Antelope Canyon Waiver',
      bookBy: 'ASAP before May 14',
      website: 'https://antelopeslotcanyon.com/',
      notes: 'Colin signed his. Mom STILL NEEDS TO SIGN. Check email for waiver link from Antelope Slot Canyon Tours. Order #FMBYMK.'
    },
    {
      item: 'ℹ️ Arches NP — No Timed Entry in 2026',
      bookBy: 'N/A',
      website: 'https://www.nps.gov/arch/learn/news/news02182026.htm',
      notes: 'Timed entry CANCELLED for 2026. No reservation needed. Arrive before 8am or after 3pm to avoid parking restrictions when full.'
    },
    {
      item: 'ℹ️ Glacier — No Vehicle Reservation in 2026',
      bookBy: 'N/A',
      website: 'https://www.nps.gov/glac/planyourvisit/visiting-glacier-2026.htm',
      notes: 'Timed-entry vehicle reservation ELIMINATED for 2026. Sun Road only open to Avalanche Creek area in late May (Logan Pass closed until mid-June).'
    },
    {
      item: '🔴 Mom\'s Travel Insurance (Canadian)',
      bookBy: 'Before May 10',
      website: 'https://www.manulife.ca/personal/travel-insurance.html',
      notes: 'OHIP/provincial covers ~5-10% of US medical costs. Single ER visit $3,000+. Get supplemental for entire 22 days from Manulife/Blue Cross/TuGo/Allianz. Expect $200-400. Verify pre-existing condition coverage (90-180 day stability).'
    }
  ]
};
