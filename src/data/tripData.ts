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
    image: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=1200',
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
    { id: 'colin', name: 'Colin', origin: 'SEA', originCity: 'Seattle, WA', color: '#3b82f6', notes: 'Flying SEA → LAS' },
    { id: 'mom', name: 'Mom', origin: 'YYZ', originCity: 'Toronto, ON', color: '#ec4899', notes: 'Active 80yo, walks a lot, can do short hikes. Flying YYZ → LAS.' },
    { id: 'robin', name: 'Robin', origin: 'SEA', originCity: 'Seattle, WA', color: '#8b5cf6', notes: 'Joining for Glacier weekend (Fri May 29 evening - Sun May 31). Flying SEA → FCA (Kalispell). Alaska Airlines nonstop ~$110 one-way, 1hr 20min. FCA is 13min from Columbia Falls.' }
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
      days: [7, 8, 9, 10, 11],
      startDay: 7,
      endDay: 11,
      color: '#f59e0b',
      highlights: ['Monument Valley drive-through', 'Arches NP full day', 'Canyonlands overlooks']
    },
    {
      id: 'slc_tetons',
      name: 'SLC & Tetons',
      summary: 'Salt Lake City, Driggs, Grand Teton',
      days: [12, 13, 14, 15, 16, 17],
      startDay: 12,
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
      from: 'SEA',
      to: 'LAS',
      date: '2026-05-10',
      airline: 'Alaska Airlines',
      price: 80,
      duration: '2h 40m',
      bookingUrl: 'https://www.google.com/travel/flights?type=2&q=Flights+from+SEA+to+LAS+on+2026-05-10&curr=USD',
      notes: 'Multiple direct flights daily ~2h 40m. SEA→LAS is heavily served.'
    },
    {
      id: 'f2',
      type: 'outbound',
      passenger: 'mom',
      from: 'YYZ',
      to: 'LAS',
      date: '2026-05-10',
      airline: 'Porter Airlines',
      price: 200,
      duration: '4h 45m',
      bookingUrl: 'https://www.google.com/travel/flights?type=2&q=Flights+from+YYZ+to+LAS+on+2026-05-10&curr=USD',
      notes: 'YYZ→LAS has many options. Porter, WestJet, Flair all fly direct.'
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
      price: 130,
      duration: '1h 20m',
      bookingUrl: 'https://www.google.com/travel/flights?type=2&q=Flights+from+FCA+to+SEA+on+2026-05-31&curr=USD',
      notes: 'FCA→SEA NONSTOP on Alaska Airlines. ~3 flights/day. 1hr 20min. Could be same flight as Robin.'
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
      price: 350,
      bookingUrl: 'https://www.google.com/travel/flights?type=2&q=Flights+from+FCA+to+YYZ+on+2026-05-31&curr=USD',
      notes: 'FCA→MSP→YYZ on Delta. One airline, one stop at Minneapolis hub (~8hrs total).'
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
      price: 110,
      duration: '1h 20m',
      bookingUrl: 'https://www.google.com/travel/flights?type=2&q=Flights+from+SEA+to+FCA+on+2026-05-29&curr=USD',
      notes: 'Robin flies in Friday evening. DIRECT on Alaska Airlines. FCA is 13 min from Columbia Falls.'
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
      price: 110,
      duration: '1h 20m',
      bookingUrl: 'https://www.google.com/travel/flights?type=2&q=Flights+from+FCA+to+SEA+on+2026-05-31&curr=USD',
      notes: 'Robin\'s return. Sunday May 31 flight — could be same flight as Colin.'
    }
  ],
  flightOptions: [
    {
      id: 'fo1',
      passenger: 'colin',
      type: 'outbound',
      recommended: 'sea-las-alaska',
      notes: 'Colin flies SEA→LAS. Multiple direct flights daily.',
      options: [
        {
          id: 'sea-las-alaska',
          type: 'outbound',
          passenger: 'colin',
          from: 'SEA',
          to: 'LAS',
          date: '2026-05-10',
          airline: 'Alaska Airlines',
          price: 89,
          duration: '2h 55m DIRECT',
          bookingUrl: 'https://www.google.com/travel/flights?type=2&q=Flights+from+SEA+to+LAS+on+2026-05-10&curr=USD',
          notes: 'DIRECT! 4+ daily nonstops.'
        },
        {
          id: 'sea-las-sw',
          type: 'outbound',
          passenger: 'colin',
          from: 'SEA',
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
    company: 'Budget or Enterprise',
    vehicleType: 'Compact AWD SUV (Subaru Crosstrek / Toyota RAV4)',
    pickupLocation: 'Las Vegas Harry Reid Airport (LAS)',
    pickupDate: '2026-05-10',
    dropoffLocation: 'Glacier Park International Airport (FCA)',
    dropoffDate: '2026-05-31',
    totalDays: 21,
    dailyRate: 40,
    dropoffFee: 200,
    totalCost: 1040,
    notes: 'One-way compact SUV. LAS to FCA drop-off. AWD nice but not required — all roads are paved. Book via Costco Travel or AutoSlash. Try Hertz with DRIVE rate code for cheap one-way drops. AARP gets 30-35% off at Avis/Budget.'
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
      weather: { high: 36, low: 20, conditions: 'Hot and sunny — desert heat!' },
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
          description: 'Get settled at The LINQ. Rest up from the flights before hitting the Strip.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Request a room away from elevators for quiet', 'Pool time if you arrive early enough']
        },
        {
          id: 'a1-3',
          name: 'Bacchanal Buffet at Caesars Palace',
          description: 'The best buffet in Las Vegas. Over 250 dishes from nine stations including Japanese, Chinese, Italian, American, and seafood. Walk-in or reserve ahead. Worth the splurge for your first meal together.',
          duration: '2 hours',
          startTime: '3:00 PM',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          cost: '$75/person',
          tips: ['Reserve at caesars.com for shorter waits', 'Go for late lunch (3-4pm) to skip the dinner rush', 'The crab legs and prime rib are standouts', 'Unlimited food — pace yourself']
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
        name: 'The LINQ Hotel + Experience',
        type: 'hotel',
        priceRange: '$50-90',
        pricePerNight: 70,
        reviewRating: 4.0,
        reviewSource: 'TripAdvisor (4.0/5)',
        address: '3535 S Las Vegas Blvd, Las Vegas, NV',
        website: 'https://www.caesars.com/linq',
        bookingUrl: 'https://www.kayak.com/Las-Vegas-Hotels-The-LINQ-Hotel-Experience.23474.ksp',
        amenities: ['Pool', 'Center Strip location', 'Free WiFi', 'Casino', 'Multiple restaurants'],
        seniorFriendly: true,
        recommended: true,
        notes: 'Center Strip location, great value mid-week. 2 queen beds. Walking distance to everything. Sunday night = cheap.'
      },
      accommodationOptions: [
        {
          id: 'acc1a',
          name: 'The LINQ Hotel + Experience',
          type: 'hotel',
          priceRange: '$50-90',
          pricePerNight: 70,
          reviewRating: 4.0,
          reviewSource: 'TripAdvisor (4.0/5)',
          address: '3535 S Las Vegas Blvd',
          website: 'https://www.caesars.com/linq',
          bookingUrl: 'https://www.kayak.com/Las-Vegas-Hotels-The-LINQ-Hotel-Experience.23474.ksp',
          amenities: ['Pool', 'Center Strip', 'Free WiFi', 'Casino'],
          seniorFriendly: true,
          recommended: true,
          notes: 'Best value on the Strip. Center location. 2 queen beds. Sunday night can be under $60.'
        },
        {
          id: 'acc1b',
          name: 'Flamingo Las Vegas',
          type: 'hotel',
          priceRange: '$40-80',
          pricePerNight: 55,
          reviewRating: 3.8,
          reviewSource: 'TripAdvisor (3.5/5)',
          address: '3555 S Las Vegas Blvd',
          website: 'https://www.caesars.com/flamingo-las-vegas',
          bookingUrl: 'https://www.kayak.com/Las-Vegas-Hotels-Flamingo-Las-Vegas.8700.ksp',
          amenities: ['Pool complex', 'Wildlife habitat', 'Center Strip', 'Casino'],
          seniorFriendly: true,
          notes: 'Budget option. Famous pool and flamingo habitat. Older rooms but great location.'
        },
        {
          id: 'acc1c',
          name: 'Park MGM',
          type: 'hotel',
          priceRange: '$80-140',
          pricePerNight: 100,
          reviewRating: 4.2,
          reviewSource: 'TripAdvisor (4.0/5)',
          address: '3770 S Las Vegas Blvd',
          website: 'https://www.parkmgm.com/',
          bookingUrl: 'https://www.kayak.com/Las-Vegas-Hotels-Park-MGM-Las-Vegas.256206.ksp',
          amenities: ['Pool', 'Spa', 'Eataly food hall', 'Non-smoking floors', 'Casino'],
          seniorFriendly: true,
          notes: 'Quieter, more refined. Has non-smoking casino floor. Eataly is great for casual dining.'
        }
      ],
      notes: ['ARRIVAL DAY — buffet + Fremont St', 'Vegas hotels are cheap on Sundays', 'Resort fees ~$40-50/night extra (not included in room rate)', 'Hydrate — desert air is very dry', 'Only 1 night in Vegas — pack it in!'],
      budgetBreakdown: { accommodation: 70, food: 100, activities: 0, gas: 0, total: 170 }
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
      overnight: 'Grand Canyon (Tusayan)',
      drivingDistance: '280 miles',
      drivingTime: '4.5 hours',
      weather: { high: 26, low: 7, conditions: 'Sunny, pleasant at rim elevation (7,000 ft)' },
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
          startTime: '10:30 AM',
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
        name: 'Red Feather Lodge',
        type: 'hotel',
        priceRange: '$150-180',
        pricePerNight: 165,
        reviewRating: 4.0,
        reviewSource: 'TripAdvisor (4.0/5), KAYAK (9.0/10)',
        reviewCount: 2100,
        address: 'Tusayan, AZ (1 mile from South Rim entrance)',
        website: 'https://www.redfeatherlodge.com/',
        amenities: ['Pool (seasonal)', 'Hot tub', 'Free parking', 'Free WiFi', 'On-site restaurant'],
        seniorFriendly: true,
        recommended: true,
        notes: 'Highest-rated hotel in Tusayan. Request hotel-side rooms (newer). Book ASAP — GC books up fast.'
      },
      accommodationOptions: [
        {
          id: 'acc2a',
          name: 'Red Feather Lodge',
          type: 'hotel',
          priceRange: '$150-180',
          pricePerNight: 165,
          reviewRating: 4.0,
          reviewSource: 'TripAdvisor (4.0/5), KAYAK (9.0/10)',
          reviewCount: 2100,
          address: 'Tusayan, AZ',
          website: 'https://www.redfeatherlodge.com/',
          amenities: ['Pool', 'Hot tub', 'Free parking', 'Restaurant'],
          seniorFriendly: true,
          recommended: true,
          notes: 'Highest-rated in Tusayan. 2 queen beds. 1mi from park entrance.'
        },
        {
          id: 'acc2b',
          name: 'Yavapai Lodge (Inside Park)',
          type: 'lodge',
          priceRange: '$150-200',
          pricePerNight: 180,
          reviewRating: 4.0,
          reviewSource: 'TripAdvisor (4.0/5), KAYAK (8.6/10)',
          reviewCount: 1800,
          address: 'Grand Canyon Village, South Rim',
          website: 'https://www.visitgrandcanyon.com/stay/lodging/yavapai-lodge/',
          bookingUrl: 'https://www.grandcanyonlodges.com/',
          amenities: ['Inside park', 'Free shuttle', 'Free parking', 'Dining on-site'],
          seniorFriendly: true,
          notes: 'Inside the park! Request Yavapai East (newer, has A/C). Books 12+ months ahead.'
        },
        {
          id: 'acc2c',
          name: 'Maswik Lodge (Inside Park)',
          type: 'lodge',
          priceRange: '$96-200',
          pricePerNight: 150,
          reviewRating: 4.0,
          reviewSource: 'TripAdvisor (4.0/5)',
          address: 'Grand Canyon Village, South Rim',
          website: 'https://www.grandcanyonlodges.com/lodging/maswik-lodge/',
          bookingUrl: 'https://www.grandcanyonlodges.com/',
          amenities: ['Inside park', 'Free shuttle', 'Pizza pub', 'Gift shop'],
          seniorFriendly: true,
          notes: 'Inside the park! 2 queen beds. Call (888) 297-2757 to book. Best budget in-park option.'
        }
      ],
      notes: ['DRIVING DAY + canyon PM', 'Route goes through Route 66 town of Williams', 'GC elevation 7,000ft — may feel altitude', 'Pack layers for evening', 'BOOK El Tovar dinner for tomorrow NOW — 60 day window at grandcanyonlodges.com'],
      budgetBreakdown: { accommodation: 165, food: 80, activities: 35, gas: 55, total: 335 }
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
      overnight: 'Grand Canyon (Tusayan)',
      weather: { high: 26, low: 7, conditions: 'Sunny, pleasant at rim elevation' },
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
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '2.5 miles (one-way, shuttle return)',
          tips: ['Paved and mostly flat — fully accessible', 'Canyon views the entire way', 'Pass through Grand Canyon Village, historic buildings', 'Take the Village Route shuttle back to Mather Point', 'Morning light is best for this direction (facing west)']
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
        name: 'Red Feather Lodge (same as previous night)',
        type: 'hotel',
        priceRange: '$150-180',
        pricePerNight: 165,
        reviewRating: 4.0,
        reviewSource: 'TripAdvisor (4.0/5)',
        seniorFriendly: true,
        recommended: true,
        notes: 'Second night — same hotel.'
      },
      notes: ['FULL DAY at Grand Canyon — no driving', 'El Tovar lunch is a highlight — book ahead', 'Rim Trail is paved and flat — perfect for Mom', 'Rest in the afternoon, sunset shuttle in the evening'],
      budgetBreakdown: { accommodation: 165, food: 100, activities: 0, gas: 0, total: 265 }
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
      weather: { high: 31, low: 14, conditions: 'Sunny, warm in the desert' },
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
        name: 'Home2 Suites by Hilton Page Lake Powell',
        type: 'hotel',
        priceRange: '$100-140',
        pricePerNight: 120,
        reviewRating: 4.2,
        reviewSource: 'TripAdvisor (4+/5), Booking.com',
        address: 'Page, AZ',
        website: 'https://www.hilton.com/en/hotels/pgaplht-home2-suites-page-lake-powell/',
        bookingUrl: 'https://www.kayak.com/Page-Hotels-Home2-Suites-by-Hilton-Page-Lake-Powell.6116940.ksp',
        amenities: ['Free breakfast', 'Kitchenette', 'Pool (seasonal)', 'Free parking', 'Free WiFi'],
        seniorFriendly: true,
        recommended: true,
        notes: 'Built 2020, spacious rooms with kitchenette. Queen bed + sofa bed. Best budget option in Page.'
      },
      accommodationOptions: [
        {
          id: 'acc4a',
          name: 'Home2 Suites by Hilton Page Lake Powell',
          type: 'hotel',
          priceRange: '$100-140',
          pricePerNight: 120,
          reviewRating: 4.2,
          reviewSource: 'TripAdvisor (4+/5)',
          address: 'Page, AZ',
          website: 'https://www.hilton.com/en/hotels/pgaplht-home2-suites-page-lake-powell/',
          bookingUrl: 'https://www.kayak.com/Page-Hotels-Home2-Suites-by-Hilton-Page-Lake-Powell.6116940.ksp',
          amenities: ['Free breakfast', 'Kitchenette', 'Pool', 'Free parking'],
          seniorFriendly: true,
          recommended: true,
          notes: 'Newest hotel in Page (2020). Kitchenette with fridge, microwave, dishwasher.'
        },
        {
          id: 'acc4b',
          name: 'Hampton Inn & Suites Page - Lake Powell',
          type: 'hotel',
          priceRange: '$120-160',
          pricePerNight: 140,
          reviewRating: 4.5,
          reviewSource: 'TripAdvisor (4.5/5), Booking.com (8.6/10)',
          address: 'Page, AZ',
          website: 'https://www.hilton.com/en/hotels/pgalphx-hampton-suites-page-lake-powell/',
          bookingUrl: 'https://www.kayak.com/Page-Hotels-Hampton-Inn-Suites-Page---Lake-Powell-AZ.867305.ksp',
          amenities: ['Free breakfast', 'Indoor pool', 'Hot tub', 'Free parking'],
          seniorFriendly: true,
          notes: 'Highest-rated hotel in Page. 2-queen balcony studio suites.'
        }
      ],
      notes: ['Drive + Horseshoe Bend sunset', 'Horseshoe Bend is 1.5mi with stairs — moderate', 'Bring water and hat', '3 nights in Page coming up'],
      budgetBreakdown: { accommodation: 120, food: 70, activities: 10, gas: 30, total: 230 }
    },

    // ============================================================
    // DAY 5: ANTELOPE CANYON X & LAKE POWELL VIEWS
    // ============================================================
    {
      id: 'd5',
      dayNumber: 5,
      date: '2026-05-14',
      title: 'Antelope Canyon X & Lake Powell Views',
      summary: 'Guided slot canyon tour, Lake Powell overlooks, relaxing afternoon',
      location: locations.find(l => l.id === 'antelope')!,
      overnight: 'Page, AZ',
      weather: { high: 31, low: 14, conditions: 'Sunny, warm' },
      activities: [
        {
          id: 'a5-1',
          name: 'Antelope Canyon X Tour',
          description: 'Canyon X recommended for Mom (boardwalk entry, no ladders, wider paths). Alternative: Upper Canyon has the famous light beams; inside is ground-level (no ladders), but the exit is a 1-mile stair climb. Mom can handle stairs, so Upper is doable if you want the beams.',
          startTime: '9:00 AM',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          cost: '$92/person + $15 Navajo park fee',
          tips: ['Book 9:00 AM slot — sells out fast', 'Book at antelopecanyon.com (FareHarbor)', '$92/person (ages 8+) + $15 Navajo entry fee', 'Sandy ground — wear closed shoes', 'Canyon X has no ladders — best for seniors', 'iPhone: shoot straight up for light beams'],
          reservationUrl: 'https://fareharbor.com/embeds/book/antelopecanyon/items/49363/date/2026-05-14/?ref=https://www.antelopecanyon.com'
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
          tips: ['Wahweap Overlook: paved pulloff, fully accessible views', 'Glen Canyon Dam viewpoint is right off the road', 'Lake Powell is massive — 1,960 miles of shoreline', 'Great afternoon activity that\'s easy on the legs']
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
        name: 'Home2 Suites by Hilton Page (same as previous night)',
        type: 'hotel',
        priceRange: '$100-140',
        pricePerNight: 120,
        seniorFriendly: true,
        recommended: true,
        notes: 'Second night — same hotel.'
      },
      notes: ['Antelope Canyon + Lake Powell views', 'No intense hiking today', 'Good rest before work day tomorrow'],
      budgetBreakdown: { accommodation: 120, food: 70, activities: 107, gas: 10, total: 307 }
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
      weather: { high: 31, low: 14, conditions: 'Sunny, warm' },
      activities: [
        {
          id: 'a6-1',
          name: 'Colin Works — Hotel (Full Day)',
          description: 'Full work day at hotel. Home2 Suites has good WiFi and a lobby workspace. Slackers bar on Lake Powell Blvd also has WiFi.',
          duration: '8 hours',
          startTime: '8:00 AM',
          endTime: '5:00 PM',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Home2 Suites lobby has a dedicated work area', 'Page is a small town — hotel WiFi is your best bet', 'Hotspot as backup']
        },
        {
          id: 'a6-2',
          name: 'Mom Solo: Wahweap & Rim View Trail',
          description: 'Drive or Uber 10 min to Wahweap Overlook for sweeping Lake Powell views (paved pulloff). Rim View Trail (0.5mi, flat, paved) has panoramic canyon views right in town. Browse shops on Lake Powell Blvd.',
          duration: '4-5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Wahweap Overlook: paved pulloff, fully accessible views', 'Rim View Trail: 0.5mi flat paved loop in town', 'Lake Powell Blvd: shops, galleries, restaurants', 'Big Lake Trading Post for Navajo crafts', 'Hotel pool is always an option']
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
        name: 'Home2 Suites by Hilton Page (same as previous night)',
        type: 'hotel',
        priceRange: '$100-140',
        pricePerNight: 120,
        seniorFriendly: true,
        recommended: true,
        notes: 'Third night — same hotel.'
      },
      notes: ['FULL WORK DAY — Colin works, Mom explores', 'Same hotel as previous nights', 'Good WiFi at Home2 Suites', 'Pack tonight for early departure tomorrow'],
      budgetBreakdown: { accommodation: 120, food: 70, activities: 0, gas: 0, total: 190 }
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
      weather: { high: 32, low: 16, conditions: 'Sunny, hot in the desert' },
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
        name: 'Big Horn Lodge',
        type: 'motel',
        priceRange: '$130-160',
        pricePerNight: 140,
        reviewRating: 4.0,
        reviewSource: 'Booking.com (9.0/10)',
        address: '550 S Main St, Moab, UT 84532',
        website: 'https://moabbighorn.com/',
        bookingUrl: 'https://www.kayak.com/Moab-Hotels-Big-Horn-Lodge.70345.ksp',
        amenities: ['Pool (seasonal)', 'Free parking', 'Free WiFi', 'Fridge', 'On-site restaurant'],
        seniorFriendly: true,
        recommended: true,
        notes: 'Best value in Moab. Downtown location, walkable to restaurants. 2 queen beds.'
      },
      accommodationOptions: [
        {
          id: 'acc7a',
          name: 'Big Horn Lodge',
          type: 'motel',
          priceRange: '$130-160',
          pricePerNight: 140,
          reviewRating: 4.0,
          reviewSource: 'Booking.com (9.0/10)',
          address: '550 S Main St, Moab, UT',
          website: 'https://moabbighorn.com/',
          bookingUrl: 'https://www.kayak.com/Moab-Hotels-Big-Horn-Lodge.70345.ksp',
          amenities: ['Pool', 'Free parking', 'Fridge', 'Restaurant'],
          seniorFriendly: true,
          recommended: true,
          notes: 'Downtown Moab, walkable. 2 queen beds. Best value. May is peak — book early.'
        },
        {
          id: 'acc7b',
          name: 'Aarchway Inn',
          type: 'hotel',
          priceRange: '$130-175',
          pricePerNight: 150,
          reviewRating: 4.7,
          reviewSource: 'Booking.com (9.3/10)',
          address: '1551 N Highway 191, Moab, UT',
          website: 'https://www.aarchwayinn.com/',
          bookingUrl: 'https://www.kayak.com/Moab-Hotels-Aarchway-Inn.97848.ksp',
          amenities: ['Pool', 'Hot tub', 'Free breakfast', 'Free parking', 'EV charger'],
          seniorFriendly: true,
          notes: 'Closest to Arches (2mi). Free hot breakfast saves $30+/day.'
        },
        {
          id: 'acc7c',
          name: 'Expedition Lodge',
          type: 'hotel',
          priceRange: '$60-98',
          pricePerNight: 80,
          reviewRating: 4.3,
          reviewSource: 'KAYAK (8.6/10), 3,334 reviews',
          reviewCount: 3334,
          address: 'Moab, UT',
          website: 'https://www.expeditionlodge.com/',
          bookingUrl: 'https://www.kayak.com/Moab-Hotels-Expedition-Lodge.2847337.ksp',
          amenities: ['Heated pool', 'Water slides', 'Free breakfast', 'Free parking'],
          seniorFriendly: true,
          notes: 'Best value in Moab. Heated pool with slides. Way under budget.'
        }
      ],
      notes: ['HALF WORK + DRIVING DAY', 'Monument Valley is an optional stop — can skip to arrive earlier', 'FILL GAS in Page or Kayenta before Navajo Nation stretch', 'Pack food — limited services between Page and Moab', 'Arrive Moab by evening'],
      budgetBreakdown: { accommodation: 140, food: 70, activities: 10, gas: 55, total: 275 }
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
      weather: { high: 32, low: 14, conditions: 'Sunny, hot' },
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
        name: 'Big Horn Lodge (same as previous night)',
        type: 'motel',
        priceRange: '$130-160',
        pricePerNight: 140,
        seniorFriendly: true,
        recommended: true,
        notes: 'Second night in Moab.'
      },
      notes: ['FULL WORK DAY — Colin works, Mom explores', 'Dead Horse Point is an easy solo drive for Mom', 'Rest up for extra work day tomorrow'],
      budgetBreakdown: { accommodation: 140, food: 70, activities: 20, gas: 10, total: 240 }
    },

    // ============================================================
    // DAY 9: WORK DAY — MOAB (EXTRA WEEK 1 WORK DAY)
    // ============================================================
    {
      id: 'd9',
      dayNumber: 9,
      date: '2026-05-18',
      title: 'Work Day — Moab (Extra Week 1 Work Day)',
      summary: 'Colin works full day, Mom explores Moab town or relaxes',
      location: locations.find(l => l.id === 'moab')!,
      overnight: 'Moab, UT',
      weather: { high: 32, low: 14, conditions: 'Sunny, hot' },
      activities: [
        {
          id: 'a9-1',
          name: 'Colin Works — Hotel or Cafe (Full Day)',
          description: 'Full work day. Red Rock Bakery on Main St has WiFi and good coffee. Hotel WiFi is solid.',
          duration: '8 hours',
          startTime: '8:00 AM',
          endTime: '5:00 PM',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Red Rock Bakery & Net Cafe: Main St, WiFi, coffee, pastries', 'Hotel WiFi is solid', 'Jailhouse Cafe for breakfast']
        },
        {
          id: 'a9-2',
          name: 'Mom Solo: Main Street Browse & Pool',
          description: 'Browse shops on Main Street, grab ice cream, visit the Moab Museum. Hotel pool to beat the 32-degree heat.',
          duration: '3-4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Main Street is flat and walkable', 'Moab Museum: local history, free', 'Love Muffin Cafe is a local breakfast favorite', 'Pool to beat the heat']
        },
        {
          id: 'a9-3',
          name: 'Mom Solo: Dead Horse Point Scenic Drive (optional)',
          optionalSkip: true,
          description: 'If Mom didn\'t go yesterday, drive to Dead Horse Point State Park for one of the best viewpoints in Utah. Overlook right from the parking lot. Colorado River meanders 2,000ft below.',
          duration: '2 hours (with drive)',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          cost: '$20 vehicle entry',
          tips: ['30-min drive from Moab', 'View from the car/parking lot — no hiking needed', 'One of the best photo spots in Utah']
        },
        {
          id: 'a9-4',
          name: 'Dinner Together',
          description: 'Reconnect for dinner in downtown Moab.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Sunset Grill for Moab valley views', 'Eddie McStiff\'s for pub food and local brews', 'Quesadilla Mobilla food truck']
        }
      ],
      accommodation: {
        id: 'acc9a',
        name: 'Big Horn Lodge (same as previous night)',
        type: 'motel',
        priceRange: '$130-160',
        pricePerNight: 140,
        seniorFriendly: true,
        recommended: true,
        notes: 'Third night in Moab.'
      },
      notes: ['FULL WORK DAY — extra work day to catch up', 'Mom can explore Moab at her own pace', 'Rest up for Arches tomorrow'],
      budgetBreakdown: { accommodation: 140, food: 70, activities: 0, gas: 5, total: 215 }
    },

    // ============================================================
    // DAY 10: ARCHES FULL DAY — WINDOWS, DOUBLE ARCH, DELICATE ARCH VIEW
    // ============================================================
    {
      id: 'd10',
      dayNumber: 10,
      date: '2026-05-19',
      title: 'Arches Full Day — Windows, Double Arch, Delicate Arch View',
      summary: 'Windows section, Double Arch, Delicate Arch viewpoint, Balanced Rock',
      location: locations.find(l => l.id === 'arches')!,
      overnight: 'Moab, UT',
      weather: { high: 32, low: 14, conditions: 'Sunny, hot — go early' },
      activities: [
        {
          id: 'a10-1',
          name: 'Windows Section',
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
          id: 'a10-2',
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
          id: 'a10-3',
          name: 'Delicate Arch Viewpoint (Lower)',
          description: 'See Delicate Arch from the lower viewpoint. Much easier than the full hike up to the arch itself.',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '0.5 miles round trip',
          tips: ['Lower viewpoint is flat and accessible', 'Bring binoculars for a closer look', 'Full hike to the arch is 3mi with 480ft gain — not recommended for this trip', 'Best light: late afternoon when the arch glows orange-red']
        },
        {
          id: 'a10-4',
          name: 'Balanced Rock & Park Avenue',
          description: 'Quick stops at iconic formations. Park Avenue viewpoint is right from the car. Balanced Rock has a short loop around the base.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Short walk around Balanced Rock', 'Park Avenue viewpoint is a pullover — no walking needed']
        },
        {
          id: 'a10-5',
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
        id: 'acc10a',
        name: 'Big Horn Lodge (same as previous night)',
        type: 'motel',
        priceRange: '$130-160',
        pricePerNight: 140,
        seniorFriendly: true,
        recommended: true,
        notes: 'Fourth night in Moab.'
      },
      notes: ['HIKING DAY — ~3-4mi total (easy terrain)', 'NO timed entry needed in 2026! But arrive before 8am — parking fills fast', 'Tuesday = fewer crowds', 'America the Beautiful pass ($80) covers Arches + Canyonlands + all other parks', 'Bring 2L water per person', 'Double Arch is a highlight — don\'t skip it'],
      budgetBreakdown: { accommodation: 140, food: 70, activities: 15, gas: 10, total: 235 }
    },

    // ============================================================
    // DAY 11: CANYONLANDS AM + HALF WORK PM
    // ============================================================
    {
      id: 'd11',
      dayNumber: 11,
      date: '2026-05-20',
      title: 'Canyonlands AM + Half Work PM',
      summary: 'Morning overlooks at Canyonlands, Colin works afternoon',
      location: locations.find(l => l.id === 'canyonlands')!,
      overnight: 'Moab, UT',
      weather: { high: 32, low: 14, conditions: 'Sunny, hot' },
      activities: [
        {
          id: 'a11-1',
          name: 'Mesa Arch Sunrise (optional)',
          description: 'Famous arch that glows orange at sunrise. Very short walk from parking. Only if you\'re up early.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '0.5 miles round trip',
          tips: ['Sunrise ~6am in late May — the arch literally glows from beneath', 'THE iconic Canyonlands photo', 'Can skip and just do Grand View instead', 'iPhone: lie on the ground and shoot through the arch']
        },
        {
          id: 'a11-2',
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
          id: 'a11-3',
          name: 'Green River Overlook & Shafer Canyon',
          description: 'Drive to Green River Overlook for views of the winding river far below, then stop at Shafer Canyon Overlook to see the dramatic switchback road descending into the canyon.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Both are drive-up viewpoints, no hiking', 'Green River Overlook is stunning in morning light', 'Shafer Canyon road is for 4WD only — just view from the top']
        },
        {
          id: 'a11-4',
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
        id: 'acc11a',
        name: 'Big Horn Lodge (same as previous night)',
        type: 'motel',
        priceRange: '$130-160',
        pricePerNight: 140,
        seniorFriendly: true,
        recommended: true,
        notes: 'Fifth and final night in Moab.'
      },
      notes: ['Canyonlands AM + HALF WORK PM', 'Canyonlands overlooks are easy — mostly drive-up', 'Last night in Moab — pack for SLC drive tomorrow', 'FILL GAS — Green River to Salina on I-70 is 110mi with NO gas stations'],
      budgetBreakdown: { accommodation: 140, food: 70, activities: 15, gas: 15, total: 240 }
    },

    // ============================================================
    // DAY 12: HALF WORK AM + MOAB → SLC + TEMPLE SQUARE PM
    // ============================================================
    {
      id: 'd12',
      dayNumber: 12,
      date: '2026-05-21',
      title: 'Half Work AM + Drive Moab → SLC + Temple Square',
      summary: 'Morning work, drive to SLC, Temple Square afternoon',
      location: locations.find(l => l.id === 'slc')!,
      overnight: 'Salt Lake City, UT',
      drivingDistance: '230 miles',
      drivingTime: '4 hours',
      weather: { high: 27, low: 13, conditions: 'Clear and warm' },
      activities: [
        {
          id: 'a12-1',
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
          id: 'a12-2',
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
          id: 'a12-checkin',
          name: 'Check In & Drop Bags at Hotel',
          description: 'Drop bags, freshen up, get settled before exploring.',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
        },
        {
          id: 'a12-3',
          name: 'Temple Square PM',
          description: 'Arrive SLC by mid-afternoon. Walk through Temple Square (free, 35 acres, beautifully landscaped). See the Salt Lake Temple, Tabernacle, and Conference Center. Free organ recital in the Tabernacle at noon Mon-Sat.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Temple Square is free and open to all', 'The Tabernacle has incredible acoustics', 'Capitol building is free to enter — walk up for Wasatch views', 'City Creek Center next door for shopping']
        },
        {
          id: 'a12-4',
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
        id: 'acc12a',
        name: 'Crystal Inn Hotel & Suites Downtown SLC',
        type: 'hotel',
        priceRange: '$90-120',
        pricePerNight: 100,
        reviewRating: 4.0,
        reviewSource: 'TripAdvisor (4.0/5)',
        address: '230 W 500 S, Salt Lake City, UT',
        website: 'https://www.crystalinnsaltlake.com/',
        amenities: ['Free breakfast', 'Free parking', 'Airport shuttle', 'Indoor pool', 'Sauna'],
        seniorFriendly: true,
        recommended: true,
        notes: '2 queen beds. Best value downtown. Hot breakfast included. Right off I-15.'
      },
      accommodationOptions: [
        {
          id: 'acc12a',
          name: 'Crystal Inn Hotel & Suites Downtown SLC',
          type: 'hotel',
          priceRange: '$90-120',
          pricePerNight: 100,
          reviewRating: 4.0,
          reviewSource: 'TripAdvisor (4.0/5)',
          address: '230 W 500 S, SLC',
          website: 'https://www.crystalinnsaltlake.com/',
          amenities: ['Free breakfast', 'Free parking', 'Airport shuttle', 'Indoor pool'],
          seniorFriendly: true,
          recommended: true,
          notes: '2 queen beds. Best value with hot breakfast. Downtown, right off I-15.'
        },
        {
          id: 'acc12b',
          name: 'Hilton Garden Inn SLC Downtown',
          type: 'hotel',
          priceRange: '$130-160',
          pricePerNight: 145,
          reviewRating: 4.2,
          reviewSource: 'TripAdvisor (4+/5)',
          address: 'Downtown SLC',
          website: 'https://www.hilton.com/en/hotels/slcdagi-hilton-garden-inn-salt-lake-city-downtown/',
          bookingUrl: 'https://www.kayak.com/Salt-Lake-City-Hotels-Hilton-Garden-Inn-Salt-Lake-City-Downtown.5926.ksp',
          amenities: ['Indoor pool', 'Hot tub', 'Free WiFi', 'On-site restaurant'],
          seniorFriendly: true,
          notes: '2 queen beds. Consistent Hilton quality. Check for AAA/AARP discounts.'
        }
      ],
      notes: ['HALF WORK AM + DRIVING DAY', 'Temple Square is a good first-afternoon activity', 'SLC is a transit city — 3 nights here with work mixed in', 'Green River stop: Tamarisk restaurant, Price UT for a break'],
      budgetBreakdown: { accommodation: 100, food: 70, activities: 0, gas: 55, total: 225 }
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
      weather: { high: 27, low: 13, conditions: 'Clear and warm' },
      activities: [
        {
          id: 'a13-1',
          name: 'Colin Works — Hotel or Three Pines Coffee (Full Day)',
          description: 'Full work day at Crystal Inn (free WiFi, lobby area) or Three Pines Coffee (165 S Main St, specialty coffee, fast WiFi).',
          duration: '8 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Three Pines Coffee: 165 S Main St, good WiFi, 10min walk from hotel', 'Crystal Inn lobby has a work-friendly area']
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
          name: 'Mom Solo: Capitol Hill & City Creek',
          description: 'Walk to the Utah State Capitol (free, stunning views of the Wasatch Mountains from the steps). Browse City Creek Center — upscale outdoor mall with retractable glass roof.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Capitol building is free to enter', 'City Creek Center: outdoor mall, retractable roof', 'Both walkable from downtown hotels']
        },
        {
          id: 'a13-4',
          name: 'Dinner Together',
          description: 'Reconnect for dinner downtown.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Red Iguana if you haven\'t been yet', 'The Copper Onion for upscale American', 'Laundry at Crystal Inn if needed']
        }
      ],
      accommodation: {
        id: 'acc13a',
        name: 'Crystal Inn (same as previous night)',
        type: 'hotel',
        priceRange: '$90-120',
        pricePerNight: 100,
        seniorFriendly: true,
        recommended: true,
        notes: 'Second night — same hotel.'
      },
      notes: ['FULL WORK DAY — Colin works, Mom explores', 'Great Salt Lake is a unique experience for Canadians', 'Capitol Hill is free and walkable', 'Laundry day — Crystal Inn has guest laundry'],
      budgetBreakdown: { accommodation: 100, food: 70, activities: 15, gas: 10, total: 195 }
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
      weather: { high: 27, low: 13, conditions: 'Clear and warm' },
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
        name: 'Crystal Inn (same as previous night)',
        type: 'hotel',
        priceRange: '$90-120',
        pricePerNight: 100,
        seniorFriendly: true,
        recommended: true,
        notes: 'Third and final night in SLC.'
      },
      notes: ['EXPLORE DAY — museums, nature, views', 'Natural History Museum is a highlight', 'Antelope Island: bison from the car, great for seniors', 'Ensign Peak: short hike, huge views', 'Saturday in SLC — relaxed pace', 'Pack tonight for Driggs drive tomorrow'],
      budgetBreakdown: { accommodation: 100, food: 80, activities: 18, gas: 0, total: 198 }
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
      weather: { high: 18, low: 3, conditions: 'Cooler mountain weather, partly cloudy' },
      activities: [
        {
          id: 'a15-1',
          name: 'Colin Works — Hotel (8am-11am)',
          description: 'Morning work block at Crystal Inn. Check out by 11am.',
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
        name: 'Teton Valley Cabins',
        type: 'cabin',
        priceRange: '$130-160',
        pricePerNight: 145,
        reviewRating: 4.3,
        reviewSource: 'TripAdvisor',
        address: '1 mile east of Driggs, ID',
        website: 'https://www.tetonvalleycabins.com/',
        amenities: ['Hot tub', 'Fire pit', 'Fridge', 'Microwave', 'Free parking', 'Teton views'],
        seniorFriendly: true,
        recommended: true,
        notes: 'Charming log cabins. 2 queen beds. 45min to park via Teton Pass. Much cheaper than staying in Jackson.'
      },
      accommodationOptions: [
        {
          id: 'acc15a',
          name: 'Teton Valley Cabins',
          type: 'cabin',
          priceRange: '$130-160',
          pricePerNight: 145,
          reviewRating: 4.3,
          reviewSource: 'TripAdvisor',
          address: '1 mile east of Driggs, ID',
          website: 'https://www.tetonvalleycabins.com/',
          amenities: ['Hot tub', 'Fire pit', 'Fridge', 'Microwave', 'Teton views'],
          seniorFriendly: true,
          recommended: true,
          notes: '2 queen beds. Log cabins with Teton views. 45min to park via Teton Pass.'
        },
        {
          id: 'acc15b',
          name: 'Airbnb 2BR in Driggs/Victor, ID',
          type: 'airbnb',
          priceRange: '$80-140',
          pricePerNight: 110,
          reviewRating: 4.9,
          reviewSource: 'Airbnb',
          address: 'Driggs or Victor, ID',
          bookingUrl: 'https://www.airbnb.com/driggs-id/stays',
          amenities: ['2 bedrooms', 'Full kitchen', 'Free parking', 'Teton views', 'Washer/dryer'],
          seniorFriendly: true,
          notes: 'Best value. Full kitchen saves on food. 45min to park. Search: 2BR, May 24-27, $150 max.'
        },
        {
          id: 'acc15c',
          name: 'Grand Targhee Resort (Alta, WY)',
          type: 'resort',
          priceRange: '$140-200',
          pricePerNight: 170,
          reviewRating: 4.5,
          reviewSource: 'TripAdvisor',
          address: 'Alta, WY (12mi from Driggs)',
          website: 'https://www.grandtarghee.com/',
          amenities: ['Pool', 'Hot tub', 'Restaurant', 'Spa', 'Mountain views'],
          seniorFriendly: true,
          notes: 'Ski resort with summer amenities. Up the canyon — closer to the Tetons. Splurge option.'
        }
      ],
      notes: ['HALF WORK + DRIVING DAY', 'Driggs is cheaper than Jackson and has great Teton views', 'Cooler temps — bring layers', 'Sunday drive — light traffic on I-15 northbound'],
      budgetBreakdown: { accommodation: 145, food: 70, activities: 0, gas: 55, total: 270 }
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
      weather: { high: 18, low: 3, conditions: 'Clear, cool mountain air' },
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
        name: 'Teton Valley Cabins (same as previous night)',
        type: 'cabin',
        priceRange: '$130-160',
        pricePerNight: 145,
        seniorFriendly: true,
        recommended: true,
        notes: 'Second night in Driggs.'
      },
      notes: ['FULL WORK DAY — Memorial Day Monday', 'Mom can explore Driggs at her own pace', 'Quiet, peaceful mountain town setting', 'Rest up for Teton full day tomorrow'],
      budgetBreakdown: { accommodation: 145, food: 70, activities: 0, gas: 5, total: 220 }
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
      weather: { high: 18, low: 3, conditions: 'Clear skies, crisp mountain air' },
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
        name: 'Teton Valley Cabins (same as previous night)',
        type: 'cabin',
        priceRange: '$130-160',
        pricePerNight: 145,
        seniorFriendly: true,
        recommended: true,
        notes: 'Third and final night in Driggs.'
      },
      notes: ['FULL TETON DAY — no work, all sightseeing', 'Teton Pass drive is dramatic — take it slow', 'All activities are easy/drive-up except Lunch Tree Hill (1mi optional walk)', 'Signal Mountain road likely CLOSED in late May (opens ~June 1) — skip it, do Schwabacher Landing instead', 'Carry bear spray on any trails', 'WILDLIFE: Late May is calving season — moose, bison, bears with cubs'],
      budgetBreakdown: { accommodation: 145, food: 80, activities: 0, gas: 30, total: 255 }
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
      weather: { high: 16, low: 0, conditions: 'Cool, variable — can change fast at elevation' },
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
        name: 'Kelly Inn West Yellowstone',
        type: 'hotel',
        priceRange: '$130-150',
        pricePerNight: 140,
        reviewRating: 4.5,
        reviewSource: 'TripAdvisor (4.5/5, #2 of 41), Booking.com (9.4/10)',
        reviewCount: 2500,
        address: '104 S Canyon St, West Yellowstone, MT',
        website: 'https://www.yellowstonekellyinn.com/',
        amenities: ['Free breakfast', 'Indoor pool (largest in town)', 'Hot tub', 'Free parking'],
        seniorFriendly: true,
        recommended: true,
        notes: '2 queen beds. Best-rated hotel in West Yellowstone. Free breakfast. Walking distance to restaurants.'
      },
      accommodationOptions: [
        {
          id: 'acc18a',
          name: 'Kelly Inn West Yellowstone',
          type: 'hotel',
          priceRange: '$130-150',
          pricePerNight: 140,
          reviewRating: 4.5,
          reviewSource: 'TripAdvisor (#2 of 41)',
          reviewCount: 2500,
          address: '104 S Canyon St, West Yellowstone',
          website: 'https://www.yellowstonekellyinn.com/',
          amenities: ['Free breakfast', 'Indoor pool', 'Hot tub', 'Free parking'],
          seniorFriendly: true,
          recommended: true,
          notes: '2 queen beds. Highest-rated in town. Rustic wood furniture. Great breakfast.'
        },
        {
          id: 'acc18b',
          name: 'Holiday Inn West Yellowstone',
          type: 'hotel',
          priceRange: '$130-170',
          pricePerNight: 150,
          reviewRating: 3.8,
          reviewSource: 'TripAdvisor (3.5-4/5)',
          reviewCount: 1100,
          address: '315 Yellowstone Ave, West Yellowstone',
          website: 'https://www.ihg.com/holidayinn/hotels/us/en/west-yellowstone/wysmt/hoteldetail',
          amenities: ['Free breakfast (rate-dependent)', 'Indoor pool', 'Hot tub', 'Free parking'],
          seniorFriendly: true,
          notes: '2 queen beds + sofa bed. Good if you have IHG points.'
        }
      ],
      notes: ['TETON AM + YELLOWSTONE PM', 'Last Teton views at Schwabacher Landing', 'Old Faithful + Grand Prismatic are the two must-sees', 'Dress in layers — Yellowstone is cold!', 'Fill gas at Grant Village and West Yellowstone'],
      budgetBreakdown: { accommodation: 140, food: 70, activities: 35, gas: 30, total: 275 }
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
      weather: { high: 16, low: 0, conditions: 'Cool, variable' },
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
        name: 'Kelly Inn West Yellowstone (same as previous night)',
        type: 'hotel',
        priceRange: '$130-150',
        pricePerNight: 140,
        seniorFriendly: true,
        recommended: true,
        notes: 'Second night — same hotel.'
      },
      notes: ['FULL YELLOWSTONE DAY — big loop, long but rewarding', 'Leave early (5am) for Lamar Valley wildlife', 'Lamar → Tower Fall → Mammoth → Canyon → West Yellowstone', 'All boardwalk/drive-up activities — no real hiking', 'WILDLIFE: Lamar Valley at dawn — wolves, grizzlies, bison calves', 'Artist Point is a MUST-SEE', 'Dress in warm layers — Yellowstone is cold in late May'],
      budgetBreakdown: { accommodation: 140, food: 70, activities: 0, gas: 40, total: 250 }
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
      weather: { high: 17, low: 3, conditions: 'Cool, mountain weather' },
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
          name: 'Robin Arrives FCA — Evening',
          description: 'Robin flies in Friday evening on Alaska Airlines from Seattle. FCA is 13 minutes from Columbia Falls. Pick her up at the airport.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['FCA is 13min from Columbia Falls', 'Robin: Alaska nonstop from SEA, 1h20m (Friday evening)', 'Small airport — she\'ll be out quickly', 'Celebrate the reunion at the condo!']
        }
      ],
      accommodation: {
        id: 'acc20a',
        name: 'Meadow Lake Resort & Condos',
        type: 'condo',
        priceRange: '$130-180',
        pricePerNight: 150,
        reviewRating: 4.0,
        reviewSource: 'TripAdvisor (4.0/5, #1 in Columbia Falls)',
        reviewCount: 1147,
        address: 'Columbia Falls, MT (20 min to West Glacier)',
        website: 'https://meadowlake.com/',
        bookingUrl: 'https://www.kayak.com/Columbia-Falls-Hotels-Meadow-Lake-Resort.83377.ksp',
        amenities: ['2 bedrooms', 'Full kitchen', 'Hot tub', 'Indoor/outdoor pool', 'Free parking', 'Golf course', 'Restaurant'],
        seniorFriendly: true,
        recommended: true,
        notes: '2BR condo: separate bedrooms for 3 adults when Robin arrives Friday night. Full kitchen saves money. Private hot tub.'
      },
      accommodationOptions: [
        {
          id: 'acc20a',
          name: 'Meadow Lake Resort & Condos',
          type: 'condo',
          priceRange: '$130-180',
          pricePerNight: 150,
          reviewRating: 4.0,
          reviewSource: 'TripAdvisor (#1 in Columbia Falls)',
          reviewCount: 1147,
          address: 'Columbia Falls, MT',
          website: 'https://meadowlake.com/',
          bookingUrl: 'https://www.kayak.com/Columbia-Falls-Hotels-Meadow-Lake-Resort.83377.ksp',
          amenities: ['2 bedrooms', 'Full kitchen', 'Hot tub', 'Pool', 'Restaurant'],
          seniorFriendly: true,
          recommended: true,
          notes: '2BR condo. Full kitchen, hot tub. 20min to park. 2 nights (Thu-Sat). Late May rates trending $130-180.'
        },
        {
          id: 'acc20b',
          name: 'Paddle Ridge Cabins (West Glacier)',
          type: 'cabin',
          priceRange: '$126-160',
          pricePerNight: 145,
          reviewRating: 4.0,
          reviewSource: 'TripAdvisor (4.0/5, 287 "Excellent")',
          reviewCount: 371,
          address: 'West Glacier, MT (1mi from park entrance)',
          website: 'https://www.glacierparkcollection.com/lodging/paddle-ridge/',
          amenities: ['Full kitchen', 'Electric fireplace', 'BBQ', 'Trout pond', 'Free WiFi'],
          seniorFriendly: true,
          notes: '1BR cabin (queen + sleeper sofa for 3). RIGHT at park entrance.'
        },
        {
          id: 'acc20c',
          name: 'Airbnb 2BR Cabin (Hungry Horse/Columbia Falls)',
          type: 'airbnb',
          priceRange: '$100-175',
          pricePerNight: 135,
          reviewRating: 4.9,
          reviewSource: 'Airbnb',
          address: 'Hungry Horse or Columbia Falls, MT',
          bookingUrl: 'https://www.airbnb.com/columbia-falls-mt/stays',
          amenities: ['2 bedrooms', 'Full kitchen', 'Hot tub (some)', 'Free parking'],
          seniorFriendly: true,
          notes: 'Search: 2BR, May 29-31, $175 max. Hungry Horse is 10-15min from park.'
        }
      ],
      notes: ['DRIVING DAY + Robin arrives!', 'Robin arrives FCA Friday evening — Alaska Airlines nonstop from SEA', 'FCA is 13min from Columbia Falls', '3 adults Fri-Sun: need 2 bedrooms', 'Going-to-the-Sun Road NOT fully open — Logan Pass closed until ~mid-June'],
      budgetBreakdown: { accommodation: 150, food: 80, activities: 0, gas: 60, total: 290 }
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
      weather: { high: 17, low: 3, conditions: 'Cool, possible mountain weather' },
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
          description: '1mi boardwalk loop through ancient old-growth cedar and hemlock forest. Fully accessible, flat, gorgeous. Everyone does this together.',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '1 mile (boardwalk loop)',
          tips: ['Fully fully accessible boardwalk', 'Old-growth western red cedars — some 500+ years old', 'Gorge viewpoint along the trail is stunning', 'Near the Avalanche Creek trailhead']
        },
        {
          id: 'a21-3',
          name: 'Avalanche Lake Hike (Colin + Robin)',
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
        name: 'Meadow Lake Resort (same as previous night)',
        type: 'condo',
        priceRange: '$130-180',
        pricePerNight: 150,
        seniorFriendly: true,
        recommended: true,
        notes: 'Second and final night. All 3 together. Pack tonight for tomorrow\'s flights.'
      },
      notes: ['ALL THREE TOGETHER — Robin\'s full day in Glacier (Saturday)', 'Trail of the Cedars is the must-do for everyone', 'Avalanche Lake is Colin + Robin only (Mom waits at lodge/Apgar)', 'Going-to-the-Sun Road only open to Avalanche Creek area in late May', 'No vehicle reservations needed for 2026', 'CELEBRATION DINNER — what an incredible trip!'],
      budgetBreakdown: { accommodation: 150, food: 100, activities: 35, gas: 15, total: 300 }
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
      weather: { high: 17, low: 3, conditions: 'Cool mountain weather' },
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
          description: 'Colin + Robin: FCA → SEA nonstop on Alaska Airlines (1h20m) — could be same flight. Mom: FCA → MSP → YYZ on Delta (~8hrs total, one stop at Minneapolis).',
          duration: 'All day',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          tips: ['FCA is a small, easy airport — very manageable', 'Arrive 1.5hrs before departure', 'Colin + Robin: Alaska nonstop to SEA, 1h20m — could share a flight!', 'Mom: Delta to MSP then YYZ, ~8hrs total', 'What an incredible 22-day trip!']
        }
      ],
      notes: ['FLIGHT DAY — morning lake (optional), then airport', 'Return rental car at FCA airport', 'Colin + Robin: FCA→SEA nonstop (Alaska, could be same flight!)', 'Mom: FCA→MSP→YYZ (Delta, ~8hrs, one stop)', '22 days, 6 national parks, Las Vegas to Glacier — trip of a lifetime!'],
      budgetBreakdown: { accommodation: 0, food: 30, activities: 0, gas: 0, total: 30 }
    }
  ],
  totalBudget: {
    flights: 980,
    carRental: 1040,
    accommodations: 2770,
    food: 1570,
    activities: 350,
    gas: 505,
    misc: 520,
    total: 7735
  },
  costBreakdown: {
    flights: {
      colinOutbound: { description: 'SEA→LAS Alaska', price: 80 },
      momOutbound: { description: 'YYZ→LAS Porter', price: 200 },
      colinReturn: { description: 'FCA→SEA Alaska nonstop', price: 130 },
      momReturn: { description: 'FCA→MSP→YYZ Delta', price: 350 },
      total: 760,
    },
    carRental: {
      dailyRate: 40,
      days: 21,
      dropoffFee: 200,
      total: 1040,
      notes: 'LAS→FCA one-way. 21 days (May 10 → May 31). Book via Costco Travel or AutoSlash.',
    },
    passengerAssistance: {
      cost: 0,
      notes: 'Mom is active — hikes, walks a lot. No assistance needed.',
    },
    accommodationAvg: 132,
    foodPerDay: 71,
    gasEstimate: 500,
  },
  importantReservations: [
    {
      item: 'Antelope Canyon X Tour',
      bookBy: '2026-04-15',
      website: 'https://fareharbor.com/embeds/book/antelopecanyon/items/49363/date/2026-05-14/?ref=https://www.antelopecanyon.com',
      notes: 'Book 9:00 AM or 9:50 AM slot. $92/person + $15 Navajo entry fee = $107/person. Book at antelopecanyon.com (FareHarbor). Canyon X is senior-friendly (no ladders).'
    },
    {
      item: 'Grand Canyon Lodging (Tusayan)',
      bookBy: '2026-03-15',
      website: 'https://www.redfeatherlodge.com/',
      notes: 'May is peak season. Book ASAP. In-park lodges (Yavapai) book 6-13 months ahead — check grandcanyonlodges.com too.'
    },
    {
      item: 'El Tovar Dining Room Reservation',
      bookBy: '2026-03-14',
      website: 'https://www.exploretock.com/el-tovar-dining-room---grand-canyon-south-rim',
      notes: 'Opens 60 days ahead on Tock. For May 12 lunch, book by mid-March. Lunch is easier to get than dinner.'
    },
    {
      item: 'Car Rental LAS→FCA One-Way',
      bookBy: '2026-03-15',
      website: 'https://www.costcotravel.com/Rental-Cars',
      notes: 'Book via Costco Travel, then check AutoSlash (autoslash.com). Free cancellation — rebook if prices drop. 21-day rental, ~$1040 total.'
    },
    {
      item: 'Driggs Lodging (Memorial Day Weekend)',
      bookBy: '2026-03-15',
      website: 'https://www.tetonvalleycabins.com/',
      notes: 'May 24-27 overlaps Memorial Day weekend (Mon May 25). Teton Valley fills up — book ASAP.'
    },
    {
      item: 'Glacier Lodging (Columbia Falls)',
      bookBy: '2026-03-15',
      website: 'https://meadowlake.com/',
      notes: '2BR condo for 3 adults (Robin arrives Fri). May 29-31. Book early — Memorial Day weekend travelers may extend into this period.'
    },
    {
      item: 'Park Passes (NEW 2026 Nonresident Fees!)',
      bookBy: '2026-05-01',
      website: 'https://www.nps.gov/planyourvisit/passes.htm',
      notes: 'Colin: $80 America the Beautiful pass. This covers Colin + all passengers (including Mom) and waives nonresident fees. Mom does NOT need the $250 Nonresident Pass — Colin\'s pass covers her as a vehicle passenger at all parks. Buy at first park entrance or online at recreation.gov.'
    },
    {
      item: 'Arches NP — No Timed Entry in 2026',
      bookBy: 'N/A',
      website: 'https://www.nps.gov/arch/planyourvisit/timed-entry-reservation.htm',
      notes: 'Timed entry dropped for 2026. No reservation needed. Arrive early (before 8am) to avoid crowds.'
    },
    {
      item: 'Glacier — No Vehicle Reservation in 2026',
      bookBy: 'N/A',
      website: 'https://www.nps.gov/glac/planyourvisit/visiting-glacier-2026.htm',
      notes: 'Timed-entry vehicle reservation system discontinued for 2026. New ticketed shuttle + 3hr Logan Pass parking limit starts July 1 (after your trip). Sun Road will only be open to Avalanche Creek area in late May.'
    }
  ]
};
