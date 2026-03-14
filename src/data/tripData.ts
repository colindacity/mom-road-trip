import { TripData, Location, DayPlan, Accommodation } from '@/types/trip';

export const locations: Location[] = [
  { id: 'las', name: 'Las Vegas, NV', lat: 36.1699, lng: -115.1398, type: 'city',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Las_Vegas_strip.jpg/1280px-Las_Vegas_strip.jpg',
    infoUrl: 'https://www.visitlasvegas.com/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Harry+Reid+International+Airport+Las+Vegas' },
  { id: 'flagstaff', name: 'Flagstaff, AZ', lat: 35.1983, lng: -111.6513, type: 'city',
    image: 'https://images.unsplash.com/photo-1558862107-d49ef2a04d72?w=1200',
    infoUrl: 'https://www.flagstaffarizona.org/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Flagstaff+AZ' },
  { id: 'gc', name: 'Grand Canyon South Rim', lat: 36.0544, lng: -112.1401, type: 'national_park',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dawn_on_the_S_rim_of_the_Grand_Canyon_%288645178272%29.jpg/1280px-Dawn_on_the_S_rim_of_the_Grand_Canyon_%288645178272%29.jpg',
    infoUrl: 'https://www.nps.gov/grca/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Mather+Point+Grand+Canyon+Village+AZ',
    video: 'https://www.youtube.com/embed/K2dVhFc8Qzk' },
  { id: 'page', name: 'Page, AZ', lat: 36.9147, lng: -111.4558, type: 'city',
    image: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=1200',
    infoUrl: 'https://visitpagelakepowell.com/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Page+AZ' },
  { id: 'antelope', name: 'Antelope Canyon', lat: 36.8619, lng: -111.3743, type: 'attraction',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/USA_Antelope-Canyon.jpg/800px-USA_Antelope-Canyon.jpg',
    infoUrl: 'https://navajonationparks.org/tribal-parks/antelope-canyon/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Upper+Antelope+Canyon+AZ',
    video: 'https://www.youtube.com/embed/0i4t3SznP8c' },
  { id: 'horseshoe', name: 'Horseshoe Bend', lat: 36.8791, lng: -111.5104, type: 'attraction',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Horseshoe_Bend_TC_27-09-2012_15-34-14.jpg/1280px-Horseshoe_Bend_TC_27-09-2012_15-34-14.jpg',
    infoUrl: 'https://www.nps.gov/glca/planyourvisit/horseshoe-bend.htm',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Horseshoe+Bend+Overlook',
    video: 'https://www.youtube.com/embed/gZjwRxgN2AQ' },
  { id: 'monument', name: 'Monument Valley', lat: 36.9980, lng: -110.0985, type: 'attraction',
    image: 'https://images.pexels.com/photos/950210/pexels-photo-950210.jpeg?auto=compress&cs=tinysrgb&w=1260',
    infoUrl: 'https://navajonationparks.org/tribal-parks/monument-valley/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Monument+Valley+Navajo+Tribal+Park',
    video: 'https://www.youtube.com/embed/2_kWVxF6fqA' },
  { id: 'moab', name: 'Moab, UT', lat: 38.5733, lng: -109.5498, type: 'city',
    image: 'https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&w=1260',
    infoUrl: 'https://www.discovermoab.com/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Moab+UT' },
  { id: 'arches', name: 'Arches National Park', lat: 38.7331, lng: -109.5925, type: 'national_park',
    image: 'https://images.unsplash.com/photo-1605999236719-48f3c79c5873?w=1200',
    infoUrl: 'https://www.nps.gov/arch/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Arches+National+Park+Visitor+Center',
    video: 'https://www.youtube.com/embed/wMR_gMC7l2E' },
  { id: 'canyonlands', name: 'Canyonlands - Island in the Sky', lat: 38.4587, lng: -109.8213, type: 'national_park',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1200',
    infoUrl: 'https://www.nps.gov/cany/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Island+in+the+Sky+Visitor+Center',
    video: 'https://www.youtube.com/embed/5e8gT9GLCPQ' },
  { id: 'slc', name: 'Salt Lake City, UT', lat: 40.7608, lng: -111.8910, type: 'city',
    image: 'https://images.unsplash.com/photo-1607537674045-8ba7617b2e3e?w=1200',
    infoUrl: 'https://www.visitsaltlake.com/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Salt+Lake+City+UT' },
  { id: 'jackson', name: 'Jackson, WY', lat: 43.4799, lng: -110.7624, type: 'city',
    image: 'https://images.unsplash.com/photo-1548625361-1adbed6c5a8d?w=1200',
    infoUrl: 'https://www.visitjacksonhole.com/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Jackson+Town+Square+WY' },
  { id: 'teton', name: 'Grand Teton National Park', lat: 43.7904, lng: -110.6818, type: 'national_park',
    image: 'https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=1200',
    infoUrl: 'https://www.nps.gov/grte/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Craig+Thomas+Discovery+and+Visitor+Center',
    video: 'https://www.youtube.com/embed/0BrXBWVfR3E' },
  { id: 'yellowstone', name: 'Yellowstone National Park', lat: 44.4280, lng: -110.5885, type: 'national_park',
    image: 'https://images.unsplash.com/photo-1533953263568-3f96e0ac6c80?w=1200',
    infoUrl: 'https://www.nps.gov/yell/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Old+Faithful+Visitor+Education+Center',
    video: 'https://www.youtube.com/embed/EtFNKFmP1wE' },
  { id: 'west_yellowstone', name: 'West Yellowstone, MT', lat: 44.6621, lng: -111.1041, type: 'city',
    image: 'https://images.unsplash.com/photo-1565019001609-8f76b22af50e?w=1200',
    infoUrl: 'https://www.destinationyellowstone.com/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=West+Yellowstone+MT' },
  { id: 'bozeman', name: 'Bozeman, MT', lat: 45.6770, lng: -111.0429, type: 'city',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200',
    infoUrl: 'https://www.bozemancvb.com/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Bozeman+MT' },
  { id: 'glacier', name: 'Glacier National Park', lat: 48.7596, lng: -113.7870, type: 'national_park',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Glacier_National_Park%2C_Going-to-the-Sun_Road.JPG',
    infoUrl: 'https://www.nps.gov/glac/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Apgar+Visitor+Center+Glacier',
    video: 'https://www.youtube.com/embed/k7R8y7zeVXI' },
  { id: 'columbia_falls', name: 'Columbia Falls, MT', lat: 48.3724, lng: -114.1813, type: 'city',
    image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1200',
    infoUrl: 'https://www.columbiafallschamber.org/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Columbia+Falls+MT' },
  { id: 'missoula', name: 'Missoula, MT (MSO)', lat: 46.8721, lng: -114.0076, type: 'city',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200',
    infoUrl: 'https://destinationmissoula.org/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Missoula+MT' },
  { id: 'whitefish', name: 'Whitefish, MT', lat: 48.4106, lng: -114.3528, type: 'city',
    image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1200',
    infoUrl: 'https://www.explorewhitefish.com/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Whitefish+MT' },
];

export const tripData: TripData = {
  id: 'mom-road-trip-2026',
  name: "Southwest to Glacier Road Trip",
  tagline: "25 days, 6 national parks, Las Vegas to Glacier, one unforgettable journey with Mom",
  startDate: '2026-05-15',
  endDate: '2026-06-08',
  travelers: [
    { id: 'colin', name: 'Colin', origin: 'SEA', originCity: 'Seattle, WA', color: '#3b82f6', notes: 'Flying SEA → LAS' },
    { id: 'mom', name: 'Mom', origin: 'YYZ', originCity: 'Toronto, ON', color: '#ec4899', notes: 'Active 80yo, walks a lot, can do short hikes. Flying YYZ → LAS.' },
    { id: 'wife', name: 'Wife', origin: 'SEA', originCity: 'Seattle, WA', color: '#8b5cf6', notes: 'Joining for Glacier long weekend (Thu Jun 4 evening - Sun Jun 7 evening). Takes Friday off. Flying SEA → FCA (Kalispell). Alaska Airlines nonstop ~$160-200 RT, 1hr 20min. FCA is 13min from Columbia Falls.' }
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
      highlights: ['Las Vegas (2 nights)', 'Grand Canyon', 'Desert View Watchtower', 'Antelope Canyon', 'Horseshoe Bend']
    },
    {
      id: 'utah',
      name: 'Utah',
      summary: 'Monument Valley, Arches, Canyonlands, Salt Lake City',
      days: [7, 8, 9, 10, 11, 12],
      startDay: 7,
      endDay: 12,
      color: '#f59e0b',
      highlights: ['Monument Valley drive-by', 'Arches NP', 'Canyonlands', 'Salt Lake City']
    },
    {
      id: 'wyoming',
      name: 'Wyoming',
      summary: 'Grand Teton and Yellowstone',
      days: [13, 14, 15, 16, 17, 18, 19, 20],
      startDay: 13,
      endDay: 20,
      color: '#22c55e',
      highlights: ['Grand Teton (3 days)', 'Yellowstone geysers', 'Yellowstone canyon & wildlife']
    },
    {
      id: 'montana',
      name: 'Montana & Glacier',
      summary: 'Glacier National Park with wife joining for the weekend',
      days: [21, 22, 23, 24, 25],
      startDay: 21,
      endDay: 25,
      color: '#06b6d4',
      highlights: ['Sun Road (west side to Avalanche Creek)', 'Lake McDonald', 'Avalanche Lake hike', 'Wife joins for weekend', 'Fly home from FCA']
    }
  ],
  flights: [
    {
      id: 'f1',
      type: 'outbound',
      passenger: 'colin',
      from: 'SEA',
      to: 'LAS',
      date: '2026-05-15',
      airline: 'Alaska Airlines',
      price: 80,
      duration: '2h 40m',
      bookingUrl: 'https://www.google.com/travel/flights?q=Flights+from+SEA+to+LAS+on+2026-05-15&curr=USD',
      notes: 'Multiple direct flights daily ~2h 40m. SEA→LAS is heavily served — cheap fares.'
    },
    {
      id: 'f2',
      type: 'outbound',
      passenger: 'mom',
      from: 'YYZ',
      to: 'LAS',
      date: '2026-05-15',
      airline: 'Porter Airlines / WestJet',
      price: 200,
      duration: '4h 45m',
      bookingUrl: 'https://www.google.com/travel/flights?q=Flights+from+YYZ+to+LAS+on+2026-05-15&curr=USD',
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
      date: '2026-06-08',
      airline: 'Alaska Airlines',
      price: 130,
      duration: '1h 20m',
      bookingUrl: 'https://www.google.com/travel/flights?q=Flights+from+FCA+to+SEA+on+2026-06-08&curr=USD',
      notes: 'FCA→SEA NONSTOP on Alaska Airlines. ~3 flights/day. Embraer E175 jet (76 seats, 2-2 config, excellent safety record). 1hr 20min.'
    },
    {
      id: 'f4',
      type: 'return',
      passenger: 'mom',
      from: 'FCA',
      fromCity: 'Kalispell (Glacier Park), MT',
      to: 'YYZ',
      toCity: 'Toronto',
      date: '2026-06-08',
      airline: 'Delta',
      price: 350,
      bookingUrl: 'https://www.google.com/travel/flights?q=Flights+from+FCA+to+YYZ+on+2026-06-08&curr=USD',
      notes: 'FCA→MSP→YYZ on Delta. Best option: one airline, one stop at Minneapolis hub (~8hrs total). MSP is well-organized.'
    },
    {
      id: 'f5',
      type: 'outbound',
      passenger: 'wife',
      from: 'SEA',
      fromCity: 'Seattle',
      to: 'FCA',
      toCity: 'Kalispell (Glacier Park)',
      date: '2026-06-04',
      airline: 'Alaska Airlines',
      price: 110,
      duration: '1h 20m',
      bookingUrl: 'https://www.google.com/travel/flights?q=Flights+from+SEA+to+FCA+on+2026-06-04&curr=USD',
      notes: 'Wife takes Friday off. DIRECT on Alaska Airlines. ~3 flights/day. FCA is 13 min from Columbia Falls. Thursday evening arrival — same day as Bozeman→Glacier drive.'
    },
    {
      id: 'f6',
      type: 'return',
      passenger: 'wife',
      from: 'FCA',
      fromCity: 'Kalispell (Glacier Park)',
      to: 'SEA',
      toCity: 'Seattle',
      date: '2026-06-07',
      airline: 'Alaska Airlines',
      price: 110,
      duration: '1h 20m',
      bookingUrl: 'https://www.google.com/travel/flights?q=Flights+from+FCA+to+SEA+on+2026-06-07&curr=USD',
      notes: 'Wife\'s return. Sunday evening flight — full day in Glacier before heading home.'
    }
  ],
  flightOptions: [
    {
      id: 'fo1',
      passenger: 'colin',
      type: 'outbound',
      recommended: 'sea-phx-direct',
      notes: 'Colin flies SEA→LAS. Multiple direct flights daily.',
      options: [
        {
          id: 'sea-phx-direct',
          type: 'outbound',
          passenger: 'colin',
          from: 'SEA',
          to: 'LAS',
          date: '2026-05-15',
          airline: 'Alaska Airlines',
          price: 89,
          duration: '2h 55m DIRECT',
          bookingUrl: 'https://www.google.com/travel/flights?q=Flights+from+SEA+to+LAS+on+2026-05-15&curr=USD',
          notes: 'DIRECT! 4+ daily nonstops.'
        },
        {
          id: 'sea-phx-sw',
          type: 'outbound',
          passenger: 'colin',
          from: 'SEA',
          to: 'LAS',
          date: '2026-05-15',
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
      recommended: 'yyz-phx-porter',
      notes: 'Mom flies YYZ→LAS. Porter or WestJet direct.',
      options: [
        {
          id: 'yyz-phx-porter',
          type: 'outbound',
          passenger: 'mom',
          from: 'YYZ',
          to: 'LAS',
          date: '2026-05-15',
          airline: 'Porter Airlines',
          price: 220,
          duration: '4h 32m DIRECT',
          bookingUrl: 'https://www.google.com/travel/flights?q=Flights+from+YYZ+to+LAS+on+2026-05-15&curr=USD',
          notes: 'No middle seats, free wine, snacks. Best for seniors.'
        },
        {
          id: 'yyz-phx-westjet',
          type: 'outbound',
          passenger: 'mom',
          from: 'YYZ',
          to: 'LAS',
          date: '2026-05-15',
          airline: 'WestJet',
          price: 280,
          duration: '4h 35m DIRECT',
          bookingUrl: 'https://www.google.com/travel/flights?q=Flights+from+YYZ+to+LAS+on+2026-05-15+WestJet&curr=USD',
          notes: 'Canadian airline, good service.'
        }
      ]
    }
  ],
  carRental: {
    company: 'Budget or Enterprise',
    vehicleType: 'Compact AWD SUV (Subaru Crosstrek / Toyota RAV4)',
    pickupLocation: 'Las Vegas Harry Reid Airport (LAS)',
    pickupDate: '2026-05-15',
    dropoffLocation: 'Glacier Park International Airport (FCA)',
    dropoffDate: '2026-06-08',
    totalDays: 24,
    dailyRate: 40,
    dropoffFee: 200,
    totalCost: 1160,
    notes: 'One-way compact SUV. LAS to FCA drop-off. Saves the 3-hour drive to Missoula! AWD nice but not required — all roads are paved. Book via Costco Travel or AutoSlash. Try Hertz with DRIVE rate code for cheap one-way drops. AARP gets 30-35% off at Avis/Budget.'
  },
  days: [
    // ============================================================
    // DAY 1: ARRIVE LAS VEGAS
    // ============================================================
    {
      id: 'd1',
      dayNumber: 1,
      date: '2026-05-15',
      title: 'Arrive Las Vegas',
      summary: 'Land, pick up car, evening on the Strip',
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
          description: 'Get settled at the hotel. Rest up from the flights before hitting the Strip.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Request a room away from elevators for quiet', 'Pool time if you arrive early enough']
        },
        {
          id: 'a1-3',
          name: 'Evening Strip Walk & Dinner',
          description: 'Stroll the Las Vegas Strip at dusk when the lights come alive. See the Bellagio fountains, Venetian, and Caesars Palace. Grab dinner at one of the casino restaurants.',
          duration: '3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Bellagio fountains run every 15 min after 8pm — free show', 'Wear comfortable shoes — the Strip is longer than it looks', 'Mon Ami Gabi at Paris has great patio dining with fountain views', 'Bacchanal Buffet at Caesars is the best buffet in Vegas (~$75/person)']
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
        notes: 'Center Strip location, great value mid-week. 2 queen beds. Walking distance to everything. May weeknights are cheap.'
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
          notes: 'Best value on the Strip. Center location. 2 queen beds. May weeknights can be under $60.'
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
      notes: ['ARRIVAL DAY — light evening only', 'Vegas hotels are cheap mid-week in May', 'Resort fees ~$40-50/night extra (not included in room rate)', 'Hydrate — desert air is very dry'],
      budgetBreakdown: { accommodation: 70, food: 60, activities: 0, gas: 0, total: 130 }
    },

    // ============================================================
    // DAY 2: LAS VEGAS FULL DAY
    // ============================================================
    {
      id: 'd2',
      dayNumber: 2,
      date: '2026-05-16',
      title: 'Las Vegas — Full Day',
      summary: 'Strip sights, shows, world-class dining, Fremont Street',
      location: locations.find(l => l.id === 'las')!,
      overnight: 'Las Vegas, NV',
      weather: { high: 36, low: 20, conditions: 'Hot and sunny' },
      activities: [
        {
          id: 'a2-1',
          name: 'Breakfast & Morning Strip Walk',
          description: 'The Strip is much less crowded in the morning. Walk through the Bellagio Conservatory (free, stunning botanical display), browse the Forum Shops at Caesars, and see the Venetian Grand Canal.',
          duration: '2.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Bellagio Conservatory is free and wheelchair accessible', 'The Venetian canal has free gondolier singing', 'Egg & I or Hash House A Go Go for breakfast']
        },
        {
          id: 'a2-2',
          name: 'High Roller Observation Wheel',
          description: 'The world\'s tallest observation wheel (550 ft). 30-minute rotation with stunning views of the Strip and surrounding desert mountains. Fully enclosed, air-conditioned cabins.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          cost: '$25-37/person',
          tips: ['Day ticket is cheaper than night ($25 vs $37)', 'Cabins are wheelchair accessible', 'Go early afternoon for shorter lines', 'iPhone: great panorama shots from the top']
        },
        {
          id: 'a2-3',
          name: 'Afternoon Show or Pool',
          description: 'Catch a matinee Cirque du Soleil show (O, Mystere, or Beatles LOVE), or relax by the pool. Alternatively, visit the Mob Museum or Neon Museum.',
          duration: '2-3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          cost: '$70-150/person for shows',
          tips: ['Mystere at Treasure Island is the most accessible Cirque show', 'Beatles LOVE at Mirage is great for music fans', 'Book shows in advance at cirquedusoleil.com', 'Neon Museum: book the guided tour ($20) for the best experience', 'Pool is free with hotel stay — great for an afternoon rest']
        },
        {
          id: 'a2-4',
          name: 'Dinner & Fremont Street',
          description: 'Head downtown to Fremont Street Experience for the original Vegas vibe — the pedestrian canopy light show runs every hour after dark. Grab dinner at a celebrity chef restaurant.',
          duration: '3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Fremont Street light show runs on the hour after dark — free', 'Oscar\'s Steakhouse at the Plaza is a classic downtown spot', 'Uber/taxi to Fremont is ~$15 from Strip', 'Mom might enjoy the old-school casino vibe at Golden Nugget', 'Return to Strip for Bellagio fountains at night']
        }
      ],
      accommodation: {
        id: 'acc2a',
        name: 'The LINQ Hotel + Experience (same as previous night)',
        type: 'hotel',
        priceRange: '$50-90',
        pricePerNight: 70,
        reviewRating: 4.0,
        reviewSource: 'TripAdvisor (4.0/5)',
        seniorFriendly: true,
        recommended: true,
        notes: 'Second night — same hotel.'
      },
      notes: ['FULL VEGAS DAY — no driving', 'Book Cirque show in advance if interested', 'Bellagio Conservatory + fountains are free must-sees', 'Fremont Street is the authentic old Vegas', 'Wear comfortable shoes — lots of walking on marble floors'],
      budgetBreakdown: { accommodation: 70, food: 100, activities: 80, gas: 0, total: 250 }
    },

    // ============================================================
    // DAY 3: LAS VEGAS → GRAND CANYON
    // ============================================================
    {
      id: 'd3',
      dayNumber: 3,
      date: '2026-05-17',
      title: 'Las Vegas → Grand Canyon',
      summary: 'Scenic desert drive to the canyon, first views and Hermit Road shuttle',
      location: locations.find(l => l.id === 'gc')!,
      overnight: 'Grand Canyon (Tusayan)',
      drivingDistance: '280 miles',
      drivingTime: '4.5 hours',
      weather: { high: 26, low: 7, conditions: 'Sunny, pleasant at rim elevation (7,000 ft)' },
      activities: [
        {
          id: 'a3-1',
          name: 'Drive: Las Vegas to Grand Canyon',
          description: 'Head southeast on US-93 to Kingman, then I-40 east to Williams, then AZ-64 north to the South Rim. Landscape shifts from Mojave desert to high-country pines. Stop in Williams for lunch — a charming Route 66 town.',
          duration: '4.5 hours (with stops)',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Leave by 8:30am to have afternoon at the canyon', 'Hoover Dam bypass bridge has a viewpoint (optional 20 min stop)', 'Williams is a fun Route 66 stop for lunch', 'Gas up in Williams — last cheap gas before Tusayan']
        },
        {
          id: 'a3-2',
          name: 'Lunch in Williams (Route 66)',
          description: 'Stop in this charming Route 66 town. Walk the main drag, grab lunch at a classic diner.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Rod\'s Steak House or Pine Country Restaurant', 'Historic Route 66 signs make fun photos', 'Grand Canyon Railway departs from here (not for this trip but fun to see)']
        },
        {
          id: 'a3-3',
          name: 'First Views at Mather Point',
          description: 'Your first Grand Canyon views! Short accessible walk to the most iconic viewpoint. Visitor Center is right here.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Accessible viewpoints with railings', 'Visitor Center nearby for maps and info', 'iPhone: 0.5x ultrawide captures the full canyon', 'Late afternoon light paints the walls orange']
        },
        {
          id: 'a3-4',
          name: 'Hermit Road Shuttle — Western Viewpoints',
          description: 'Take the free Red Route shuttle west along Hermit Road to 9 viewpoints. Hop on/off at each stop. Key stops: Trailview Overlook, Maricopa Point, Powell Point, Hopi Point (best sunset spot), Mohave Point, The Abyss, Pima Point, and Hermit\'s Rest (snacks, water, gift shop). Afternoon light is best for this direction — canyon walls glow orange.',
          duration: '3-4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Free shuttle only — no private cars Mar-Nov', 'Hop off at any stop, catch the next shuttle (every 10-15 min)', 'Hopi Point is the classic sunset spot — stay here last', 'The Abyss is the most dramatic vertical drop', 'Hermit\'s Rest has restrooms, snacks, and Mary Colter\'s stone building', 'Sunset ~7:30pm mid-May. iPhone: 2x zoom for layered canyon depth', 'Bring layers — gets cool after sunset at 7,000ft']
        }
      ],
      accommodation: {
        id: 'acc3a',
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
          id: 'acc3a',
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
          id: 'acc3b',
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
          notes: 'Inside the park! Request Yavapai East (newer, has A/C). 2 queen beds. Books 12+ months ahead.'
        },
        {
          id: 'acc3c',
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
      notes: ['DRIVING DAY — light activities after arrival', 'Route goes through Route 66 town of Williams', 'GC elevation 7,000ft — may feel altitude', 'Pack layers for evening', 'Mom pays $100 nonresident surcharge at gate (new 2026 policy for non-US visitors)', 'BOOK El Tovar dinner NOW — 60 day window, reserve at grandcanyonlodges.com'],
      budgetBreakdown: { accommodation: 165, food: 80, activities: 35, gas: 55, total: 335 }
    },

    // ============================================================
    // DAY 4: DESERT VIEW DRIVE → PAGE + HORSESHOE BEND
    // ============================================================
    {
      id: 'd4',
      dayNumber: 4,
      date: '2026-05-18',
      title: 'Desert View Drive → Page & Horseshoe Bend',
      summary: 'Morning eastern viewpoints and Watchtower, then drive to Page for Horseshoe Bend',
      location: locations.find(l => l.id === 'page')!,
      overnight: 'Page, AZ',
      drivingDistance: '160 miles (Desert View to Page via Cameron)',
      drivingTime: '2.5 hours (after Desert View Drive)',
      weather: { high: 31, low: 14, conditions: 'Sunny, warm in the desert' },
      activities: [
        {
          id: 'a4-1',
          name: 'Sunrise at Yavapai Point',
          description: 'Less crowded than Mather Point with same eastern exposure. Arrive 30min before sunrise (~5:15am in May). Quick stop — then head east.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Sunrise ~5:15am mid-May — warm light floods the canyon', 'Far fewer people than Mather Point', 'iPhone: burst mode during golden hour, 0.5x ultrawide captures the full panorama']
        },
        {
          id: 'a4-2',
          name: 'Desert View Drive — Eastern Viewpoints',
          description: 'Drive your own car 25 miles east along the South Rim on Desert View Drive (AZ-64). Stop at the best viewpoints on the way out of the park. Key stops: Grandview Point (widest canyon views), Moran Point (colorful rock layers), Lipan Point (see the Colorado River and Unkar Delta), Navajo Point (highest point on the South Rim at 7,498ft), and Desert View Watchtower (Mary Colter\'s 70-foot stone tower with 360° views, Hopi-inspired murals, gift shop, snack bar). Morning light illuminates the eastern canyon walls beautifully. End at Desert View — this is the east park exit, so you drive straight on to Page from here.',
          duration: '2.5-3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '25 miles (Grand Canyon Village to Desert View)',
          tips: [
            'Drive your own car — no shuttle needed on Desert View Drive',
            'Grandview Point has the widest panorama on the South Rim',
            'Lipan Point is the best place to see the Colorado River from the rim',
            'Navajo Point is the highest overlook on the South Rim (7,498ft)',
            'Desert View Watchtower: climb to the top for 360° views, $2 suggested donation',
            'Watchtower has restrooms, snack bar, and gift shop — good breakfast/snack stop',
            'Morning light is best — canyon walls glow orange from this direction',
            'iPhone: 0.5x ultrawide at the Watchtower top floor, 2x zoom for river shots at Lipan Point',
            'Fill gas at Desert View gas station (last gas before Cameron, 30mi)'
          ]
        },
        {
          id: 'a4-3',
          name: 'Drive Desert View → Page via Cameron',
          description: 'Exit the park from Desert View east entrance. Drive AZ-64 east to Cameron, then US-89 north to Page. Stop at Cameron Trading Post for gas, snacks, and Navajo crafts. Beautiful Navajo Nation desert scenery.',
          duration: '2.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Cameron Trading Post is a must-stop — gas, food, restrooms, Native crafts', 'Limited services on Navajo Nation between Cameron and Page', 'Painted Desert views along US-89']
        },
        {
          id: 'a4-4',
          name: 'Check In & Lunch in Page',
          description: 'Arrive in Page by early afternoon. Check into hotel, grab lunch.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Big John\'s Texas BBQ is a local favorite', 'Bonkers for good casual food']
        },
        {
          id: 'a4-5',
          name: 'Horseshoe Bend',
          description: 'Iconic 1,000-foot drop viewpoint over the Colorado River. Short walk from parking. Late afternoon light illuminates the bend beautifully.',
          duration: '1.5 hours',
          difficulty: 'moderate',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '1.5 miles round trip',
          elevation: { gain: 150, highest: 4300, lowest: 4150 },
          tips: ['$10 parking fee', 'Go late afternoon for best light — sun illuminates the bend', 'Stairs with handrails', 'Bring water — exposed and hot', 'iPhone: 0.5x ultrawide is essential here to get the full horseshoe. Shoot vertically for Instagram-worthy framing']
        }
      ],
      accommodation: {
        id: 'acc5a',
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
          id: 'acc5a',
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
          notes: 'Newest hotel in Page (2020). Kitchenette with fridge, microwave, dishwasher. Budget pick.'
        },
        {
          id: 'acc5b',
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
          notes: 'Highest-rated hotel in Page. 2-queen balcony studio suites. May be at top of budget in peak season.'
        },
        {
          id: 'acc5c',
          name: 'Airbnb 2BR Duplex in Page',
          type: 'airbnb',
          priceRange: '$120-180',
          pricePerNight: 140,
          reviewRating: 4.9,
          reviewSource: 'Airbnb',
          address: 'Downtown Page',
          bookingUrl: 'https://www.airbnb.com/page-az/stays',
          amenities: ['2 bedrooms', 'Full kitchen', 'Washer/dryer', 'Free parking'],
          seniorFriendly: true,
          notes: 'Walking distance to downtown. Full kitchen saves on meals. Search: 2BR, May 18-20, $150 max.'
        }
      ],
      notes: ['Drive + moderate walk day', 'Horseshoe Bend is 1.5mi with stairs', 'Bring water and hat'],
      budgetBreakdown: { accommodation: 120, food: 70, activities: 10, gas: 30, total: 230 }
    },

    // ============================================================
    // DAY 5: ANTELOPE CANYON
    // ============================================================
    {
      id: 'd5',
      dayNumber: 5,
      date: '2026-05-19',
      title: 'Antelope Canyon & Leisure',
      summary: 'Guided tour of slot canyons, relaxing afternoon',
      location: locations.find(l => l.id === 'antelope')!,
      overnight: 'Page, AZ',
      weather: { high: 31, low: 14, conditions: 'Sunny, warm' },
      activities: [
        {
          id: 'a5-1',
          name: 'Antelope Canyon Tour (Upper or Canyon X)',
          description: 'Guided Navajo tour through the famous slot canyon. Light beams in late morning are magical. Upper Canyon has a steep hill climb on exit now — consider Antelope Canyon X (Taadidiin Tours) as a senior-friendly alternative with no ladders or steep stairs.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          cost: '$75-140/person + $15 Navajo park fee',
          tips: ['Book 9:00 AM slot — 11:20 AM sold out, 1:40 PM limited', 'Book at antelopecanyon.com (FareHarbor)', '$65-80/person + $15 Navajo entry fee', 'Sandy ground — wear closed shoes', 'iPhone: shoot straight up for light beams. HDR auto mode handles the extreme contrast well. Best light beams 10:30am-12:30pm in Upper Canyon'],
          reservationUrl: 'https://fareharbor.com/embeds/book/antelopecanyon/items/49363/date/2026-05-19/?ref=https://www.antelopecanyon.com'
        },
        {
          id: 'a5-2',
          name: 'Lunch in Page',
          description: 'Relax and refuel after the tour.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Big John\'s Texas BBQ is a local favorite', 'Bonkers for good casual food']
        },
        {
          id: 'a5-3',
          name: 'Rest & Leisure Afternoon',
          description: 'Pool time, nap, or optional drive to Lake Powell overlook. No hiking — save energy for Arches.',
          duration: '3-4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Wahweap Overlook is a quick drive for Lake Powell views', 'Or just rest!']
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
      notes: ['LIGHT DAY — guided tour + rest', 'No hiking today', 'Good rest before driving day tomorrow'],
      budgetBreakdown: { accommodation: 120, food: 70, activities: 75, gas: 0, total: 265 }
    },

    // ============================================================
    // DAY 6: WORK/REST DAY — PAGE
    // ============================================================
    {
      id: 'd6',
      dayNumber: 6,
      date: '2026-05-20',
      title: 'Work Day — Page',
      summary: 'Remote work day, Mom explores on her own',
      location: locations.find(l => l.id === 'page')!,
      overnight: 'Page, AZ',
      weather: { high: 31, low: 14, conditions: 'Sunny, warm' },
      activities: [
        {
          id: 'aW1-1',
          name: 'Colin Works — Hotel or Slackers (8am-12pm)',
          description: 'Work block at hotel (Home2 Suites has good WiFi and a lobby workspace) or Slackers bar/restaurant on Lake Powell Blvd which has WiFi and is open mornings.',
          duration: '4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Home2 Suites lobby has a dedicated work area', 'Page is a small town — hotel WiFi is your best bet', 'Hotspot as backup — Verizon/T-Mobile have decent coverage in Page']
        },
        {
          id: 'aW1-2',
          name: 'Mom Solo: Wahweap Overlook & Lake Powell Blvd',
          description: 'Drive or Uber 10 min to Wahweap Overlook for sweeping Lake Powell views (paved pulloff, no hiking required). Then browse the shops and galleries on Lake Powell Blvd — the main drag. Rim View Trail (0.5mi, flat, paved) has panoramic canyon views right in town.',
          duration: '3-4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Wahweap Overlook: paved pulloff, wheelchair accessible views', 'Rim View Trail: 0.5mi flat paved loop in town, great canyon views', 'Lake Powell Blvd: shops, galleries, restaurants — Main Street of Page', 'Big Lake Trading Post for Navajo crafts and jewelry', 'Hotel pool is always an option for a quiet morning']
        },
        {
          id: 'aW1-3',
          name: 'Afternoon Together — Sunset at Horseshoe Bend',
          description: 'Reconnect for a late lunch on Lake Powell Blvd, then optional second visit to Horseshoe Bend for golden hour light (if you want better photos than yesterday).',
          duration: '2-3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Bonkers for burgers or El Tapatio for Mexican', 'Horseshoe Bend at sunset is less crowded and the light is incredible']
        }
      ],
      accommodation: {
        id: 'accW1a',
        name: 'Same as previous night',
        type: 'hotel',
        priceRange: '$100-140',
        pricePerNight: 120,
        seniorFriendly: true,
        recommended: true,
        notes: 'Same hotel — extra night.'
      },
      notes: ['WORK DAY — Colin works, Mom explores', 'Same hotel as previous night', 'Good WiFi at Home2 Suites'],
      budgetBreakdown: { accommodation: 120, food: 70, activities: 0, gas: 0, total: 190 }
    },

    // ============================================================
    // DAY 7: PAGE → MONUMENT VALLEY → MOAB (DRIVING DAY)
    // ============================================================
    {
      id: 'd7',
      dayNumber: 7,
      date: '2026-05-21',
      title: 'Page → Monument Valley → Moab',
      summary: 'Long drive with optional Monument Valley photo stop, no hiking',
      location: locations.find(l => l.id === 'moab')!,
      overnight: 'Moab, UT',
      drivingDistance: '270 miles',
      drivingTime: '5 hours (with Monument Valley stop)',
      weather: { high: 32, low: 16, conditions: 'Sunny, hot in the desert' },
      activities: [
        {
          id: 'a6-1',
          name: 'Drive Page to Monument Valley',
          description: 'Head northeast through Navajo Nation. Iconic buttes appear as you approach on US-163.',
          duration: '2.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Fill gas in Kayenta', 'The approach on US-163 is the famous Forrest Gump road']
        },
        {
          id: 'a6-2',
          name: 'Monument Valley Photo Stop',
          description: 'Quick stop at the Monument Valley Visitor Center for the iconic mittens view. No need for a full tour.',
          duration: '30-45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          cost: '$8 entry fee',
          tips: ['Visitor center has restrooms and snacks', 'Views from parking lot are incredible', 'Full Navajo guided tour optional ($65, 2.5hrs)', 'iPhone: 2x zoom frames the mittens beautifully. The Forrest Gump road shot is on US-163 about 13mi south of the park entrance — stop on the center line (carefully) facing north']
        },
        {
          id: 'a6-3',
          name: 'Continue to Moab',
          description: 'Drive north through Utah to Moab. Beautiful red rock scenery the whole way.',
          duration: '2.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Stop in Bluff or Mexican Hat for a stretch', 'Gas up before Moab stretch']
        }
      ],
      accommodation: {
        id: 'acc6a',
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
        notes: 'Best value in Moab. Downtown location, walkable to restaurants. 2 queen beds. No-frills but clean.'
      },
      accommodationOptions: [
        {
          id: 'acc6a',
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
          id: 'acc6b',
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
          notes: 'Closest to Arches (2mi). Free hot breakfast saves $30+/day. Book early for best rates, May is peak.'
        },
        {
          id: 'acc6c',
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
          notes: 'Best value in Moab. 2 queen rooms. Heated pool with slides. Walking distance to shops. Way under budget.'
        }
      ],
      notes: ['DRIVING DAY — no hiking', 'Monument Valley is an optional stop', 'FILL GAS in Page or Kayenta before Navajo Nation stretch', 'Rest day for the body'],
      budgetBreakdown: { accommodation: 140, food: 70, activities: 8, gas: 55, total: 273 }
    },

    // ============================================================
    // DAY 8: ARCHES NATIONAL PARK
    // ============================================================
    {
      id: 'd8',
      dayNumber: 8,
      date: '2026-05-22',
      title: 'Arches National Park',
      summary: 'Windows, Delicate Arch viewpoint, iconic red rock arches',
      location: locations.find(l => l.id === 'arches')!,
      overnight: 'Moab, UT',
      weather: { high: 32, low: 14, conditions: 'Sunny, hot — go early' },
      activities: [
        {
          id: 'a7-1',
          name: 'Windows Section',
          description: 'Easy loop past North Window, South Window, and Turret Arch. Spectacular formations.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '1.6 miles (loop)',
          elevation: { gain: 60 },
          tips: ['Flat, well-maintained trail', 'Go early morning for fewer crowds', 'Best photos in morning light']
        },
        {
          id: 'a7-2',
          name: 'Delicate Arch Viewpoint (Lower)',
          description: 'See Delicate Arch from the lower viewpoint. Much easier than the full hike up.',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '0.5 miles round trip',
          tips: ['Lower viewpoint is flat and accessible', 'Bring binoculars for a closer look', 'Full hike to the arch is 3mi with 480ft gain — not recommended for this trip', 'Best light: late afternoon when the arch glows orange-red. iPhone 5x zoom works well from the lower viewpoint']
        },
        {
          id: 'a7-3',
          name: 'Balanced Rock & Park Avenue',
          description: 'Quick stops at iconic formations. Park Avenue viewpoint is right from the car.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Short walk around Balanced Rock', 'Park Avenue viewpoint is a pullover']
        },
        {
          id: 'a7-4',
          name: 'Landscape Arch (optional)',
          description: 'The longest natural arch in North America. Easy trail in Devils Garden.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '1.6 miles round trip',
          elevation: { gain: 60 },
          tips: ['Flat gravel trail', 'Go in morning before heat', 'Only do this if energy permits — skip if you did Windows + Delicate Arch viewpoint']
        }
      ],
      accommodation: {
        id: 'acc6a',
        name: 'Big Horn Lodge (same as previous night)',
        type: 'motel',
        priceRange: '$130-160',
        pricePerNight: 140,
        seniorFriendly: true,
        recommended: true,
        notes: 'Second night in Moab.'
      },
      notes: ['HIKING DAY — ~3mi total (easy terrain)', 'NO timed entry needed in 2026! But arrive before 8am — parking fills fast', 'Wednesday = fewer crowds than weekend', 'America the Beautiful pass ($80) covers Arches + Canyonlands + all other parks', 'Bring 2L water per person'],
      budgetBreakdown: { accommodation: 140, food: 70, activities: 15, gas: 10, total: 235 }
    },

    // ============================================================
    // DAY 9: REST DAY IN MOAB
    // ============================================================
    {
      id: 'd9',
      dayNumber: 9,
      date: '2026-05-23',
      title: 'Half Work Day + Rest in Moab',
      summary: 'Colin works morning, pool & town, optional sunset at Dead Horse Point',
      location: locations.find(l => l.id === 'moab')!,
      overnight: 'Moab, UT',
      weather: { high: 32, low: 14, conditions: 'Sunny, hot' },
      activities: [
        {
          id: 'a8-1',
          name: 'Colin Works — Hotel or Cafe (8am-12pm)',
          description: 'Work block at hotel or a Moab cafe. Moab has decent WiFi options. Red Rock Bakery on Main St has WiFi and good coffee.',
          duration: '4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Red Rock Bakery & Net Cafe: Main St, WiFi, coffee, pastries', 'Hotel WiFi is solid', 'Jailhouse Cafe for breakfast before work']
        },
        {
          id: 'a8-2',
          name: 'Mom Solo: Main Street & Pool',
          description: 'Sleep in, then browse shops on Main Street, grab ice cream, visit the Moab Museum. Pool at the hotel to beat the heat.',
          duration: '3-4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Main Street is flat and walkable', 'Moab Museum: local history, free', 'Love Muffin Cafe is a local breakfast favorite', 'Pool to beat the 32°C heat']
        },
        {
          id: 'a8-3',
          name: 'Pool & Relaxation',
          description: 'Beat the heat at the hotel pool. Read, nap, recharge.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
        },
        {
          id: 'a8-4',
          name: 'Sunset at Dead Horse Point (optional)',
          description: 'Drive to Dead Horse Point State Park for one of the best sunset viewpoints in Utah. Overlook right from the parking lot.',
          duration: '2 hours (with drive)',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          cost: '$20 vehicle entry',
          tips: ['30-min drive from Moab', 'View from the car/parking lot — no hiking needed', 'Arrive 45min before sunset (~8pm late May)', 'One of the best sunset photo spots in Utah — Colorado River meanders 2,000ft below. iPhone panorama mode captures the full mesa']
        }
      ],
      accommodation: {
        id: 'acc6a',
        name: 'Big Horn Lodge (same as previous night)',
        type: 'motel',
        priceRange: '$130-160',
        pricePerNight: 140,
        seniorFriendly: true,
        recommended: true,
        notes: 'Third night in Moab.'
      },
      notes: ['HALF WORK DAY — Colin works morning, rest afternoon', 'Recover from Arches before Canyonlands tomorrow', 'Dead Horse Point sunset is worth the drive'],
      budgetBreakdown: { accommodation: 140, food: 70, activities: 20, gas: 10, total: 240 }
    },

    // ============================================================
    // DAY 10: CANYONLANDS → DRIVE TO SLC
    // ============================================================
    {
      id: 'd10',
      dayNumber: 10,
      date: '2026-05-24',
      title: 'Canyonlands Morning → Salt Lake City',
      summary: 'Morning overlooks at Canyonlands, afternoon drive to SLC',
      location: locations.find(l => l.id === 'slc')!,
      overnight: 'Salt Lake City, UT',
      drivingDistance: '270 miles (Moab → Canyonlands → SLC)',
      drivingTime: '4.5 hours total driving',
      weather: { high: 27, low: 13, conditions: 'Clear and warm' },
      activities: [
        {
          id: 'a9-1',
          name: 'Mesa Arch Sunrise (optional)',
          description: 'Famous arch that glows orange at sunrise. Very short walk.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '0.5 miles round trip',
          tips: ['Sunrise ~6am in late May — the arch literally glows from beneath', 'Only if you\'re up early — this is THE iconic Canyonlands photo', 'Can skip and just do Grand View instead', 'iPhone: lie on the ground and shoot through the arch for the classic shot. 0.5x ultrawide captures arch + canyon']
        },
        {
          id: 'a9-2',
          name: 'Grand View Point Overlook',
          description: 'The signature view of Canyonlands. Walk to the end of the point for 360-degree canyon views.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '2 miles round trip',
          elevation: { gain: 50 },
          tips: ['Flat trail along the rim', 'Views in every direction', 'Bring water even for short walks']
        },
        {
          id: 'a9-3',
          name: 'Drive to Salt Lake City',
          description: 'Head north on I-70 and I-15. Beautiful drive through canyons and valleys.',
          duration: '4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Stop in Green River for gas/snacks', 'I-70 through San Rafael Swell is stunning']
        }
      ],
      accommodation: {
        id: 'acc9a',
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
          id: 'acc9a',
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
          id: 'acc9b',
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
          notes: '2 queen beds. Consistent Hilton quality. Top of budget. Check for AAA/AARP discounts.'
        },
        {
          id: 'acc9c',
          name: 'Comfort Inn & Suites SLC Airport',
          type: 'hotel',
          priceRange: '$80-110',
          pricePerNight: 90,
          reviewRating: 3.5,
          reviewSource: 'TripAdvisor (3.5/5)',
          address: 'Off I-80, near airport',
          website: 'https://www.choicehotels.com/utah/salt-lake-city/comfort-inn-hotels',
          bookingUrl: 'https://www.kayak.com/Salt-Lake-City-Hotels-Comfort-Inn-Suites-Salt-Lake-City-Airport.21397.ksp',
          amenities: ['Free breakfast', 'Free parking', 'Free WiFi'],
          seniorFriendly: true,
          notes: 'Budget fallback. 2 queen beds. Reviews are mixed — Crystal Inn is better for $10 more.'
        }
      ],
      notes: ['Light hiking AM + driving PM', 'Canyonlands overlooks are easy', 'FILL GAS in Moab — Green River to Salina on I-70 is 110mi with NO gas stations'],
      budgetBreakdown: { accommodation: 100, food: 70, activities: 15, gas: 55, total: 240 }
    },

    // ============================================================
    // DAY 11: SALT LAKE CITY — FULL DAY
    // ============================================================
    {
      id: 'd11',
      dayNumber: 11,
      date: '2026-05-25',
      title: 'Salt Lake City — Half Work + Explore',
      summary: 'Colin works morning, Temple Square & Great Salt Lake afternoon',
      location: locations.find(l => l.id === 'slc')!,
      overnight: 'Salt Lake City, UT',
      weather: { high: 27, low: 13, conditions: 'Clear and warm' },
      activities: [
        {
          id: 'a10-1',
          name: 'Colin Works — Hotel or Three Pines Coffee (8am-12pm)',
          description: 'Work block at Crystal Inn (free WiFi, lobby area) or walk to Three Pines Coffee (165 S Main St, specialty coffee, fast WiFi). Mom can sleep in or walk to Temple Square on her own.',
          duration: '4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Three Pines Coffee: 165 S Main St, good WiFi, 10min walk from hotel', 'Crystal Inn lobby has a work-friendly area', 'Mom: Temple Square is a 10min walk — safe solo morning activity']
        },
        {
          id: 'a10-2',
          name: 'Lunch & Temple Square Together',
          description: 'Reconnect for lunch. Red Iguana for famous Mexican mole, or Caputo\'s for deli sandwiches. Then walk through Temple Square together (free, beautifully landscaped). Free organ recital in the Tabernacle at noon Mon-Sat.',
          duration: '2.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Red Iguana: legendary mole sauces, always a line but worth it', 'Temple Square is free and open to all', 'The Tabernacle has incredible acoustics — free organ recitals at noon Mon-Sat', 'Capitol building is free to enter — walk up for Wasatch views']
        },
        {
          id: 'a10-3',
          name: 'Great Salt Lake — Antelope Island',
          description: 'Drive 40 minutes north to Antelope Island State Park to see the Great Salt Lake up close. Walk the short Bridger Bay trail, see free-roaming bison, and dip your toes in the hyper-saline water. The lake is much lower than historic levels but still impressive.',
          duration: '3 hours (including drive)',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          cost: '$15 vehicle entry',
          tips: ['$15 per vehicle entry fee', 'Bison roam freely — keep 25+ yards distance', 'The water is 8x saltier than the ocean — you will float', 'Bring water shoes if you want to wade in', 'Afternoon light is best for photos of the lake', 'Fielding Garr Ranch at the south end is a cool historic stop']
        },
        {
          id: 'a10-4',
          name: 'Dinner & Evening Walk',
          description: 'Stroll through the Gateway district or 9th & 9th neighborhood. Catch sunset views of the Wasatch Mountains from a restaurant patio.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['HSL (Handle, Salt Lake) for craft cocktails and small plates', 'Liberty Heights Fresh for a casual neighborhood vibe', 'The Gateway has nice outdoor walking areas']
        }
      ],
      accommodation: {
        id: 'acc10a',
        name: 'Crystal Inn Hotel & Suites Downtown SLC (same as previous night)',
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
        notes: 'Second night — same hotel. Book both nights together for better rate.'
      },
      notes: ['HALF WORK DAY — Colin works morning, explore together afternoon', 'Temple Square is beautiful and free — Mom can visit solo in AM or together after lunch', 'Great Salt Lake is a unique experience for Canadians', 'Laundry day — Crystal Inn has guest laundry'],
      budgetBreakdown: { accommodation: 100, food: 80, activities: 15, gas: 10, total: 205 }
    },

    // ============================================================
    // DAY 12: WORK/REST DAY — SALT LAKE CITY
    // ============================================================
    {
      id: 'd12',
      dayNumber: 12,
      date: '2026-05-26',
      title: 'Work Day — Salt Lake City',
      summary: 'Remote work day, Mom explores on her own',
      location: locations.find(l => l.id === 'slc')!,
      overnight: 'Salt Lake City, UT',
      weather: { high: 27, low: 13, conditions: 'Clear and warm' },
      activities: [
        {
          id: 'aW2-1',
          name: 'Colin Works — Hotel or Work Hive Coworking (8am-12pm)',
          description: 'Work block at hotel or drop in at Work Hive, a locally-owned coworking space in downtown SLC. Day passes available. Fast WiFi, good coffee, professional environment.',
          duration: '4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Work Hive: downtown SLC coworking, day pass ~$30', 'Hotel lobby/room WiFi is solid at Crystal Inn', 'SLC has excellent cell coverage for hotspot backup']
        },
        {
          id: 'aW2-2',
          name: 'Mom Solo: Temple Square, City Creek & Family History Library',
          description: 'Walk through Temple Square gardens (35 acres, flat, benches everywhere). Browse City Creek Center — upscale outdoor mall with a retractable glass roof, right next to Temple Square. The Family History Library (free) has the world\'s largest genealogy collection — Mom could trace family roots.',
          duration: '4-5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Temple Square: free, flat, beautifully landscaped, 90min self-guided', 'City Creek Center: outdoor mall, retractable roof, great for browsing', 'Family History Library: free genealogy research — could spend hours here', 'Natural History Museum of Utah ($18, Uber 15min) if she wants more', 'All walkable from downtown hotels — no car needed']
        },
        {
          id: 'aW2-3',
          name: 'Afternoon Together — Downtown Dinner',
          description: 'Reconnect for a late lunch or explore downtown together. Red Iguana for famous Mexican mole, or The Copper Onion for upscale American.',
          duration: '2-3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Red Iguana: legendary SLC mole — worth a short wait', 'The Copper Onion: upscale American, great cocktails', 'Laundry at Crystal Inn if needed']
        }
      ],
      accommodation: {
        id: 'accW2a',
        name: 'Same as previous night',
        type: 'hotel',
        priceRange: '$90-120',
        pricePerNight: 100,
        seniorFriendly: true,
        recommended: true,
        notes: 'Same hotel — extra night.'
      },
      notes: ['WORK DAY — Colin works, Mom explores', 'Same hotel as previous night', 'Temple Square and City Creek are walkable from most downtown hotels'],
      budgetBreakdown: { accommodation: 100, food: 70, activities: 0, gas: 0, total: 170 }
    },

    // ============================================================
    // DAY 13: SLC → JACKSON / GRAND TETON
    // ============================================================
    {
      id: 'd13',
      dayNumber: 13,
      date: '2026-05-27',
      title: 'Salt Lake City → Jackson / Grand Teton',
      summary: 'Drive north to Jackson Hole, afternoon arrival in Teton country',
      location: locations.find(l => l.id === 'jackson')!,
      overnight: 'Jackson, WY',
      drivingDistance: '280 miles',
      drivingTime: '5 hours',
      weather: { high: 18, low: 3, conditions: 'Cooler mountain weather, partly cloudy' },
      activities: [
        {
          id: 'a11-1',
          name: 'Drive SLC to Jackson',
          description: 'Scenic drive north through Idaho farmland, then over Teton Pass into Jackson Hole. Mountain views emerge gradually.',
          duration: '5 hours (with stops)',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Stop in Pocatello or Idaho Falls for lunch', 'Teton Pass is dramatic — pullover for photos', 'Alt route via Star Valley is easier grades']
        },
        {
          id: 'a11-2',
          name: 'Arrive Jackson & Explore Town Square',
          description: 'Walk through the famous elk antler arches on the town square. Browse galleries and shops.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Town square elk arches are a must-photo', 'Million Dollar Cowboy Bar is fun', 'Persephone Bakery for a snack']
        }
      ],
      accommodation: {
        id: 'acc11a',
        name: 'Elk Refuge Inn',
        type: 'inn',
        priceRange: '$110-150',
        pricePerNight: 130,
        reviewRating: 4.0,
        reviewSource: 'TripAdvisor (4.0/5, #3 of 40 in Jackson)',
        reviewCount: 1343,
        address: '1755 N Hwy 89, Jackson, WY',
        website: 'https://www.elkrefugeinn.net/',
        amenities: ['Free parking', 'Fridge', 'Microwave', 'Laundry', 'Elk Refuge views'],
        seniorFriendly: true,
        recommended: true,
        notes: '2 queen beds. 5min from Grand Teton entrance. Views of National Elk Refuge. Best budget option in Jackson.'
      },
      accommodationOptions: [
        {
          id: 'acc11a',
          name: 'Elk Refuge Inn',
          type: 'inn',
          priceRange: '$110-150',
          pricePerNight: 130,
          reviewRating: 4.0,
          reviewSource: 'TripAdvisor (#3 of 40 in Jackson)',
          reviewCount: 1343,
          address: '1755 N Hwy 89, Jackson, WY',
          website: 'https://www.elkrefugeinn.net/',
          amenities: ['Free parking', 'Fridge', 'Microwave', 'Elk Refuge views'],
          seniorFriendly: true,
          recommended: true,
          notes: '2 queen beds. Best budget option in Jackson. 5min from Teton entrance. 18% discount for direct bookings. BOOK ASAP — Memorial Day weekend (May 23-25) overlaps and Jackson prices spike.'
        },
        {
          id: 'acc11b',
          name: 'Teton Valley Cabins (Driggs, ID)',
          type: 'cabin',
          priceRange: '$130-160',
          pricePerNight: 145,
          reviewRating: 4.3,
          reviewSource: 'TripAdvisor',
          address: '1 mile east of Driggs, ID',
          website: 'https://www.tetonvalleycabins.com/',
          amenities: ['Hot tub', 'Fire pit', 'Fridge', 'Microwave', 'Free parking'],
          seniorFriendly: true,
          notes: 'Charming log cabins. 2 queen beds. 40-45min to park via Teton Pass. $50-80/night cheaper than Jackson proper.'
        },
        {
          id: 'acc11c',
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
          notes: 'Best value for 5 nights. Full kitchen saves on food. 40min to park. Search: 2BR, May 27-Jun 1, $150 max.'
        }
      ],
      notes: ['DRIVING DAY — no hiking', 'Jackson is expensive — Driggs/Victor ID is cheaper alt', 'Cooler temps — bring layers', 'WILDLIFE: Late May is calving season — moose, bison, bears with cubs all active', 'Best spots: Oxbow Bend, Schwabacher Landing, Antelope Flats', 'Elk Refuge is EMPTY in May — herd migrates to high country by April'],
      budgetBreakdown: { accommodation: 130, food: 80, activities: 0, gas: 55, total: 265 }
    },

    // ============================================================
    // DAY 14: GRAND TETON DAY 1 — SOUTHERN PARK: JENNY LAKE & ICONS
    // ============================================================
    {
      id: 'd14',
      dayNumber: 14,
      date: '2026-05-28',
      title: 'Grand Teton Day 1 — Jenny Lake & Iconic Views',
      summary: 'Mormon Row sunrise, Jenny Lake boat to Hidden Falls, Schwabacher Landing reflections',
      location: locations.find(l => l.id === 'teton')!,
      overnight: 'Jackson, WY',
      weather: { high: 18, low: 3, conditions: 'Clear skies, crisp mountain air' },
      activities: [
        {
          id: 'a12-1',
          name: 'Mormon Row Sunrise',
          description: 'Drive-up sunrise spot: iconic Moulton Barns with the Teton Range behind them. Bison often graze in the fields at dawn. Free — no park fee needed if entering from the east side.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Arrive 15-20min before sunrise (~5:50am late May)', 'Stay in or near the car — bison are close', 'T.A. Moulton Barn is the most photographed barn in America', 'No park fee needed from east side approach', 'iPhone: use 1x or 2x with barn in foreground, Tetons behind. The pink alpenglow on the peaks lasts only 5-10 minutes']
        },
        {
          id: 'a12-2',
          name: 'Jenny Lake Boat Shuttle & Hidden Falls',
          description: 'Take the boat shuttle across Jenny Lake to Hidden Falls. Short 1mi round trip hike with 300ft gain to a beautiful waterfall. Mom rides FREE at 80+. Boat is $12-20 RT for others.',
          duration: '2.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '1 mile RT (from boat dock to Hidden Falls)',
          elevation: { gain: 300 },
          tips: ['Boat shuttle: $12-20 RT, FREE for 80+ seniors', 'First boat at 10am typically', 'Trail to Hidden Falls is well-maintained but uphill', 'Can continue to Inspiration Point (+0.5mi, +400ft) if feeling strong', 'Arrive early — boat line gets long by 11am']
        },
        {
          id: 'a12-3',
          name: 'Schwabacher Landing',
          description: 'Short gravel road to a beaver-pond area with stunning Teton reflections. Only 0.5mi walk from parking to the best viewpoints. One of the most photographed spots in the park.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '0.5 miles',
          tips: ['Best reflections in early morning or late afternoon — need still water', 'Gravel road is fine for any car', 'Beavers active at dawn/dusk', 'Flat, easy walk from parking area', 'iPhone: shoot at water level for mirror reflections of the Tetons. 0.5x ultrawide captures the full range']
        },
        {
          id: 'a12-4',
          name: 'Cathedral Group & Teton Point Turnouts',
          description: 'Drive-up pulloffs along Teton Park Road with some of the best framed views of the Cathedral Group (Grand, Middle, and South Teton). No walking required.',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Cathedral Group Turnout has the classic postcard view', 'Teton Point Turnout is great for sunset']
        },
        {
          id: 'a12-5',
          name: 'Dinner in Jackson',
          description: 'Return to Jackson for dinner. Great restaurants near the town square.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Cafe Genevieve for Southern comfort food', 'Snake River Grill for a splurge', 'Thai Me Up for casual']
        }
      ],
      accommodation: {
        id: 'acc11a',
        name: 'Elk Refuge Inn (same as previous night)',
        type: 'inn',
        priceRange: '$110-150',
        pricePerNight: 130,
        seniorFriendly: true,
        recommended: true,
        notes: 'Second night.'
      },
      notes: ['Jenny Lake boat is FREE for 80+ seniors', 'Mormon Row sunrise is a drive-up — no hiking needed', 'Schwabacher Landing is flat, easy 0.5mi walk', 'Hidden Falls trail is short but uphill — assess Mom\'s energy'],
      budgetBreakdown: { accommodation: 130, food: 80, activities: 15, gas: 15, total: 240 }
    },

    // ============================================================
    // DAY 15: GRAND TETON DAY 2 — NORTHERN PARK: LODGE, LAKES & WILDLIFE
    // ============================================================
    {
      id: 'd15',
      dayNumber: 15,
      date: '2026-05-29',
      title: 'Grand Teton Day 2 — Lodge, Lakes & Wildlife',
      summary: 'Oxbow Bend sunrise, Jackson Lake Lodge, Colter Bay lakeshore, Signal Mountain',
      location: locations.find(l => l.id === 'teton')!,
      overnight: 'Jackson, WY',
      weather: { high: 18, low: 3, conditions: 'Clear, cool mornings' },
      activities: [
        {
          id: 'a13-1',
          name: 'Oxbow Bend Sunrise Wildlife Drive',
          description: 'Drive to Oxbow Bend at dawn for moose, beavers, and the iconic Mt. Moran reflection on still water. All viewing from the car or roadside pulloff.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Dawn is best — still water for reflections', 'Moose are frequently spotted here', 'Bring binoculars', 'Stay in/near the car', 'Mt. Moran reflection is a classic Teton shot', 'iPhone: 2x zoom for the Mt. Moran reflection composition. Portrait mode works great for moose with blurred background']
        },
        {
          id: 'a13-2',
          name: 'Jackson Lake Lodge',
          description: 'Visit the historic Jackson Lake Lodge with its famous 60-foot picture windows framing the entire Teton Range. The lobby alone is worth the visit. Walk to Lunch Tree Hill (1mi, easy) for a panoramic view.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '1 mile (Lunch Tree Hill)',
          tips: ['60-foot windows in the lobby — one of the great views in the national parks', 'Lunch Tree Hill: 1mi easy walk behind the lodge, 360-degree views', 'Grab coffee or lunch at the lodge', 'Lobby has comfortable seating to just sit and take in the view']
        },
        {
          id: 'a13-3',
          name: 'Colter Bay Lakeshore Trail',
          description: 'Easy flat trail along the Jackson Lake shoreline with mountain views. 2mi round trip on level ground.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '2 miles RT',
          elevation: { gain: 50 },
          tips: ['Flat trail along the lakeshore', 'Great mountain views across the lake', 'Colter Bay Visitor Center has a Native American art collection', 'Carry bear spray']
        },
        {
          id: 'a13-4',
          name: 'Signal Mountain Summit Drive',
          description: 'Drive the 5-mile road to the 7,720ft summit of Signal Mountain for 360-degree views of the Tetons, Jackson Lake, and the valley. No hiking required — drive to the top.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Check if road is open (may be closed in late May for snow)', 'Views from the summit are incredible', 'Two overlooks: Jackson Point and the summit', 'Drive-up — no hiking needed']
        }
      ],
      accommodation: {
        id: 'acc11a',
        name: 'Elk Refuge Inn (same as previous night)',
        type: 'inn',
        priceRange: '$110-150',
        pricePerNight: 130,
        seniorFriendly: true,
        recommended: true,
        notes: 'Third night.'
      },
      notes: ['Northern park focus — lodges, lakes, and wildlife', 'Oxbow Bend sunrise is from the car', 'Colter Bay trail is flat and easy', 'Signal Mountain drive may be closed — check at visitor center', 'Carry bear spray on all trails'],
      budgetBreakdown: { accommodation: 130, food: 70, activities: 0, gas: 15, total: 215 }
    },

    // ============================================================
    // DAY 16: GRAND TETON DAY 3 — REST DAY IN JACKSON
    // ============================================================
    {
      id: 'd16',
      dayNumber: 16,
      date: '2026-05-30',
      title: 'Half Work Day + Rest in Jackson',
      summary: 'Colin works morning, optional Leigh Lake, browse Jackson, recharge before Yellowstone',
      location: locations.find(l => l.id === 'teton')!,
      overnight: 'Jackson, WY',
      weather: { high: 18, low: 3, conditions: 'Clear, cool' },
      activities: [
        {
          id: 'a14-1',
          name: 'Colin Works — Persephone Bakery or Hotel (8am-12pm)',
          description: 'Work from Persephone Bakery (145 E Broadway, fast WiFi, excellent pastries) or hotel. Mom can sleep in or browse the town square galleries on her own.',
          duration: '4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Persephone Bakery: 145 E Broadway, opens 7am, great WiFi', 'Cowboy Coffee: 125 N Cache St, on the square, opens 6:30am', 'Mom: town square galleries are a 5min walk from most hotels']
        },
        {
          id: 'a14-2',
          name: 'Afternoon: Optional Leigh Lake Trail',
          description: 'Reconnect for lunch, then optional Leigh Lake trail (1.8mi, nearly flat). Beautiful alpine lake with mountain backdrop. Easy enough for a rest day stroll. Or just browse Jackson together.',
          duration: '1.5-2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '1.8 miles RT',
          elevation: { gain: 50 },
          tips: ['Nearly flat trail', 'Starts from the String Lake trailhead', 'Can skip if tired — it\'s a rest day', 'Carry bear spray']
        },
        {
          id: 'a14-3',
          name: 'Browse Jackson Town Square',
          description: 'Walk the iconic town square with its elk-antler arches. Browse western art galleries, souvenir shops, and outdoor gear stores.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Elk-antler arches on all 4 corners of the square', 'Valley Bookstore is lovely', 'Made: a Jackson Hole gift shop for local crafts', 'Grab ice cream at Moo\'s Gourmet Ice Cream']
        },
        {
          id: 'a14-4',
          name: 'Dinner: Hand Fire Pizza or The Mangy Moose',
          description: 'Hand Fire Pizza: wood-fired pizza in a converted 1941 movie theater. Or The Mangy Moose at Teton Village for a lively mountain-town vibe.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Hand Fire Pizza — wood-fired in a converted 1941 theater', 'The Mangy Moose — lively, at Teton Village (15min drive)', 'Both are casual and fun']
        }
      ],
      accommodation: {
        id: 'acc11a',
        name: 'Elk Refuge Inn (same as previous night)',
        type: 'inn',
        priceRange: '$110-150',
        pricePerNight: 130,
        seniorFriendly: true,
        recommended: true,
        notes: 'Fourth and final night in Jackson.'
      },
      notes: ['HALF WORK DAY — Colin works morning, rest/explore afternoon', 'Leigh Lake trail is optional (1.8mi, nearly flat)', 'Recharge for Yellowstone tomorrow', 'Last night in Jackson — enjoy the town'],
      budgetBreakdown: { accommodation: 130, food: 80, activities: 0, gas: 10, total: 220 }
    },

    // ============================================================
    // DAY 17: WORK/REST DAY — JACKSON
    // ============================================================
    {
      id: 'd17',
      dayNumber: 17,
      date: '2026-05-31',
      title: 'Work Day — Jackson',
      summary: 'Remote work day, Mom explores on her own',
      location: locations.find(l => l.id === 'jackson')!,
      overnight: 'Jackson, WY',
      weather: { high: 18, low: 3, conditions: 'Clear, cool' },
      activities: [
        {
          id: 'aW3-1',
          name: 'Colin Works — Persephone Bakery or Cowboy Coffee (8am-12pm)',
          description: 'Work from Persephone Bakery (145 E Broadway, fast WiFi, excellent pastries and coffee) or Cowboy Coffee (125 N Cache St, right on the square, WiFi, laid-back vibe). Both are work-friendly with good seating.',
          duration: '4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Persephone Bakery: 145 E Broadway, opens 7am, great WiFi', 'Cowboy Coffee: 125 N Cache St, on the square, opens 6:30am', 'Hotel WiFi works too but the cafes are more fun', 'Jackson has good cell coverage for hotspot']
        },
        {
          id: 'aW3-2',
          name: 'Mom Solo: Town Square, Galleries & Wildlife Art Museum',
          description: 'Stroll the Town Square with its famous elk antler arches (great photo ops). Browse 20+ art galleries along Broadway and Cache St. The National Museum of Wildlife Art ($18, 10min drive or shuttle) is world-class — built into a hillside overlooking the National Elk Refuge, with works by Georgia O\'Keeffe, Andy Warhol, and Carl Rungius.',
          duration: '4-5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Town Square: flat, benches, people-watching, elk antler arches', 'National Museum of Wildlife Art: $18, 10min north of town, fully accessible', 'Galleries: Trailside Galleries, Mountain Trails Gallery — window shopping is free', 'Persephone Bakery for a pastry and coffee treat', 'Everything downtown is flat and walkable within 4 blocks']
        },
        {
          id: 'aW3-3',
          name: 'Afternoon Together — Dinner with Teton Views',
          description: 'Reconnect for a late lunch. The Bunnery for comfort food, or Cafe Genevieve for upscale Southern. Evening: drive to the Elk Refuge overlook for sunset Teton views.',
          duration: '2-3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['The Bunnery: legendary breakfast/lunch spot', 'Cafe Genevieve: Southern-inspired, on the square', 'Elk Refuge overlook at sunset — Tetons glow pink']
        }
      ],
      accommodation: {
        id: 'accW3a',
        name: 'Same as previous night',
        type: 'hotel',
        priceRange: '$110-150',
        pricePerNight: 130,
        seniorFriendly: true,
        recommended: true,
        notes: 'Same hotel — extra night.'
      },
      notes: ['WORK DAY — Colin works, Mom explores', 'Same hotel as previous night', 'Jackson town square is great for solo exploring'],
      budgetBreakdown: { accommodation: 130, food: 70, activities: 0, gas: 0, total: 200 }
    },

    // ============================================================
    // DAY 18: GRAND TETON → YELLOWSTONE SOUTH LOOP
    // ============================================================
    {
      id: 'd18',
      dayNumber: 18,
      date: '2026-06-01',
      title: 'Yellowstone Day 1 — South Loop: Geysers, Springs & Canyon',
      summary: 'West Thumb, Old Faithful, Grand Prismatic, Artist Point at the Grand Canyon of Yellowstone',
      location: locations.find(l => l.id === 'yellowstone')!,
      overnight: 'West Yellowstone, MT',
      drivingDistance: '60 miles (Jackson to Old Faithful) + ~80mi loop',
      drivingTime: '1.5 hours (to Old Faithful)',
      weather: { high: 16, low: 0, conditions: 'Cool, variable — can change fast at elevation' },
      activities: [
        {
          id: 'a15-1',
          name: 'Enter South Entrance from Grand Teton',
          description: 'Drive through Grand Teton into Yellowstone via the south entrance. Watch for bison on the road. Stop at West Thumb Geyser Basin right on Yellowstone Lake — a 30min boardwalk loop.',
          duration: '2 hours (drive + West Thumb)',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '0.5 miles (West Thumb boardwalk)',
          tips: ['South entrance may have lines — arrive early', 'West Thumb Geyser Basin is right on the lakeshore', 'Bison frequently block the road — be patient!', 'Fill gas at Grant Village']
        },
        {
          id: 'a15-2',
          name: 'Old Faithful',
          description: 'Watch the world\'s most famous geyser erupt. 0.8mi flat boardwalk loop around the geyser basin with benches. Eruptions every 60-110 minutes — check the visitor center for the next predicted time.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '0.8 miles (boardwalk loop)',
          tips: ['Download the GeyserTimes app for eruption predictions', 'Arrive 30min early for good bench seats', 'Old Faithful Inn lobby is worth seeing — largest log structure in the world', 'Flat boardwalk with benches throughout', 'iPhone: video mode for the eruption, then switch to slo-mo for the peak. Shoot from the south side for the sun behind you']
        },
        {
          id: 'a15-3',
          name: 'Grand Prismatic Spring / Midway Geyser Basin',
          description: 'The largest hot spring in the US, famous for its vivid rainbow colors. Short boardwalk loop, 30-45 minutes.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '0.8 miles (boardwalk)',
          tips: ['Midway Geyser Basin parking fills up — go early or late', 'Colors best on sunny, warm days when steam is minimal', 'Grand Prismatic Overlook trail is 1.6mi — skip for this trip', 'Afternoon (after 1pm) is better for photos: less steam, sun overhead shows the colors', 'iPhone: 0.5x ultrawide from the boardwalk. Colors look best shooting away from the steam']
        },
        {
          id: 'a15-4',
          name: 'Drive to Canyon Village',
          description: 'Drive north through Hayden Valley to Canyon Village. Watch for bison herds and maybe grizzlies along the way.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Fill gas at Canyon Village', 'Hayden Valley is prime wildlife territory — scan the meadows', 'Pull fully off road for wildlife stops']
        },
        {
          id: 'a15-5',
          name: 'Artist Point — Grand Canyon of the Yellowstone',
          description: 'Short paved walk to the most iconic viewpoint in Yellowstone: the Grand Canyon of the Yellowstone with Lower Falls (308ft). This is a must-see.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '0.3 miles (paved walk to overlook)',
          tips: ['Artist Point is THE iconic Yellowstone viewpoint', 'Short paved path from parking', 'Uncle Tom\'s Trail has 300+ stairs — skip it', 'Upper Falls viewpoint is also easy and worth a quick stop']
        }
      ],
      accommodation: {
        id: 'acc15a',
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
          id: 'acc15a',
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
          id: 'acc15b',
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
          notes: '2 queen beds + sofa bed. Recognized brand. Good if you have IHG points.'
        },
        {
          id: 'acc15c',
          name: 'Brandin\' Iron Inn',
          type: 'motel',
          priceRange: '$90-120',
          pricePerNight: 105,
          reviewRating: 3.5,
          reviewSource: 'TripAdvisor (mixed), KAYAK',
          address: '201 Canyon St, West Yellowstone',
          website: 'https://www.brandiniron.com/',
          amenities: ['Free breakfast', 'Full kitchen', 'Free parking', 'Free WiFi'],
          seniorFriendly: true,
          notes: 'Budget pick. Full kitchen is a bonus. On main strip. Reviews inconsistent — read recent ones.'
        }
      ],
      notes: ['Download GeyserTimes app for eruption predictions', 'All boardwalk walking (~3mi total) — flat and accessible', 'WILDLIFE: Hayden Valley (45min from West entrance) has huge bison herds with calves', 'Fill gas at Grant Village and Canyon Village', 'Dress in layers — Yellowstone is cold!', 'Artist Point is a MUST-SEE — don\'t skip it'],
      budgetBreakdown: { accommodation: 140, food: 70, activities: 35, gas: 25, total: 270 }
    },

    // ============================================================
    // DAY 19: YELLOWSTONE NORTH → BOZEMAN
    // ============================================================
    {
      id: 'd19',
      dayNumber: 19,
      date: '2026-06-02',
      title: 'Yellowstone North Loop → Bozeman',
      summary: 'Lamar Valley wildlife at dawn, Tower Fall, Mammoth Hot Springs, drive to Bozeman via Paradise Valley',
      location: locations.find(l => l.id === 'bozeman')!,
      overnight: 'Bozeman, MT',
      drivingDistance: '78 miles (Gardiner to Bozeman via Paradise Valley)',
      drivingTime: '1hr 20min (Gardiner to Bozeman)',
      weather: { high: 16, low: 2, conditions: 'Cool, variable' },
      activities: [
        {
          id: 'a16-1',
          name: 'Lamar Valley Wildlife Drive',
          description: 'Early morning drive through the Lamar Valley — the "Serengeti of North America." Dawn to 9am is best. Stay in the car with binoculars. Wolves, bison herds, bears, pronghorn, and elk are all possible.',
          duration: '2-3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Dawn to 9am is the best window', 'Stay in the car — binoculars essential', 'Wolves are best spotted with a scope at distance', 'Bison herds are almost guaranteed', 'Look for bears on hillsides in early morning', 'Fill gas at Tower/Roosevelt area']
        },
        {
          id: 'a16-2',
          name: 'Tower Fall Viewpoint',
          description: 'Short walk from parking to view the 132ft Tower Fall. Quick stop on the way west.',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Very short walk from parking to the overlook', 'The trail down to the base is steep — skip it for this trip']
        },
        {
          id: 'a16-3',
          name: 'Mammoth Hot Springs Terraces',
          description: 'Boardwalk through stunning travertine terraces formed by hot springs. 30-45 minutes, gentle inclines on the lower terraces. The terraces constantly change — some are flowing, some are dry.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '0.75 miles (lower terraces boardwalk)',
          tips: ['Lower terraces boardwalk has gentle inclines', 'Upper terraces accessible by car (one-way loop drive)', 'Terraces change constantly — different every visit', 'Fill gas at Mammoth before exiting the park', 'Historic Fort Yellowstone buildings are worth a quick look']
        },
        {
          id: 'a16-4',
          name: 'Exit North Entrance & Drive to Bozeman',
          description: 'Exit at Gardiner, MT (the original park entrance with the Roosevelt Arch). Drive 78mi through scenic Paradise Valley along the Yellowstone River to Bozeman.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Photo op at the Roosevelt Arch in Gardiner', 'Paradise Valley is gorgeous — Yellowstone River with Absaroka Range backdrop', 'Stop in Livingston for a late lunch if hungry (Gil\'s Goods or Pinky\'s Cafe)', 'Arrive Bozeman by mid-afternoon']
        }
      ],
      accommodation: {
        id: 'acc16a',
        name: 'C\'mon Inn Bozeman',
        type: 'hotel',
        priceRange: '$124-138',
        pricePerNight: 130,
        reviewRating: 4.3,
        reviewSource: 'Booking.com (9.4/10)',
        reviewCount: 1100,
        address: '6139 E Valley Center Rd, Bozeman, MT',
        website: 'https://www.cmoninn.com/bozeman',
        bookingUrl: 'https://www.kayak.com/Bozeman-Hotels-C-mon-Inn-Bozeman.160638.ksp',
        amenities: ['Free breakfast buffet', 'Indoor pool', '5 hot tubs', 'Koi pond', 'Free parking'],
        seniorFriendly: true,
        recommended: true,
        notes: '2 queen beds. Excellent breakfast for the Glacier drive tomorrow. Right off I-90. Highly rated.'
      },
      accommodationOptions: [
        {
          id: 'acc16a',
          name: 'C\'mon Inn Bozeman',
          type: 'hotel',
          priceRange: '$124-138',
          pricePerNight: 130,
          reviewRating: 4.3,
          reviewSource: 'Booking.com (9.4/10)',
          reviewCount: 1100,
          address: '6139 E Valley Center Rd, Bozeman',
          website: 'https://www.cmoninn.com/bozeman',
          amenities: ['Free breakfast', 'Indoor pool', '5 hot tubs', 'Free parking'],
          seniorFriendly: true,
          recommended: true,
          notes: '2 queen beds. Great breakfast for the road. 5 hot tubs after a Yellowstone day. Right off I-90.'
        },
        {
          id: 'acc16b',
          name: 'Comfort Inn Bozeman',
          type: 'hotel',
          priceRange: '$99-108',
          pricePerNight: 100,
          reviewRating: 3.9,
          reviewSource: 'TripAdvisor (3.9/5, #26 of 40)',
          reviewCount: 291,
          address: '1370 N 7th Ave, Bozeman',
          website: 'https://www.choicehotels.com/montana/bozeman/comfort-inn-hotels/mt029',
          bookingUrl: 'https://www.kayak.com/Bozeman-Hotels-Comfort-Inn-Bozeman.25627.ksp',
          amenities: ['Free breakfast', 'Indoor pool', 'Hot tub', 'Free parking'],
          seniorFriendly: true,
          notes: '2 queen beds. Cheapest reliable option. Walmart next door for supplies.'
        },
        {
          id: 'acc16c',
          name: 'The Sapphire Motel',
          type: 'motel',
          priceRange: '$100-140',
          pricePerNight: 120,
          reviewRating: 4.8,
          reviewSource: 'KAYAK (9.6/10)',
          address: 'Bozeman, MT (3 blocks off Main St)',
          website: 'https://www.thesapphiremotel.com/',
          bookingUrl: 'https://www.kayak.com/Bozeman-Hotels-Royal-7-Budget-Inn-Motel.69210.ksp',
          amenities: ['Free parking', 'Fridge', 'Microwave', 'Free WiFi'],
          seniorFriendly: true,
          notes: 'Boutique mid-century motel, beautifully restored. 2-queen rooms. 9.6/10 reviews. Charming character.'
        }
      ],
      notes: ['Fill gas at Tower/Roosevelt and Mammoth before exiting', 'WILDLIFE: Lamar Valley at dawn — wolves, grizzlies, bison calves (leave by 5am!)', 'Lamar is 1.5-2.5hrs from West Yellowstone — commit the whole morning', 'Gardiner to Bozeman via Paradise Valley is scenic and easy', 'Bozeman is a transit stop for Glacier — fuel up for 4.5hr drive tomorrow'],
      budgetBreakdown: { accommodation: 130, food: 70, activities: 0, gas: 25, total: 225 }
    },

    // ============================================================
    // DAY 20: WORK/REST DAY — BOZEMAN
    // ============================================================
    {
      id: 'd20',
      dayNumber: 20,
      date: '2026-06-03',
      title: 'Work Day — Bozeman',
      summary: 'Remote work day, Mom explores on her own',
      location: locations.find(l => l.id === 'bozeman')!,
      overnight: 'Bozeman, MT',
      weather: { high: 16, low: 2, conditions: 'Cool, variable' },
      activities: [
        {
          id: 'aW4-1',
          name: 'Colin Works — Wild Joe\'s or Sidecar Coworking (8am-12pm)',
          description: 'Work from Wild Joe\'s Coffee (18 W Main St, downtown, fast WiFi, large tables, great pastries) or Sidecar coworking on E Main St (day pass available, fast internet, proper workspace). Bozeman is a remote-work-friendly town.',
          duration: '4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Wild Joe\'s: 18 W Main St, opens 7am, work-friendly, strong WiFi', 'Sidecar coworking: E Main St, day pass available, pro setup', 'Treeline Coffee Roasters also excellent for a change of scene', 'Bozeman Public Library has free WiFi and study rooms with mountain views']
        },
        {
          id: 'aW4-2',
          name: 'Mom Solo: Museum of the Rockies & Main Street',
          description: 'Museum of the Rockies ($16.50, Uber 5min or 20min walk from downtown) — world-class dinosaur collection with the largest T. rex skull ever found, plus a planetarium show. Then walk Main Street for indie bookshops (Country Bookshelf), galleries, and boutiques. Flat and very walkable.',
          duration: '4-5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Museum of the Rockies: $16.50, fully accessible, allow 2-3 hours', 'Largest T. rex skull ever found is here', 'Planetarium shows run hourly — check schedule', 'Country Bookshelf: independent bookstore on Main St, a Bozeman institution', 'Main Street is flat, walkable, with benches and window shopping', 'Pick her up for lunch at the museum or she can walk back']
        },
        {
          id: 'aW4-3',
          name: 'Afternoon Together — Dinner & Pack for Glacier',
          description: 'Reconnect for lunch at the Co-op\'s Flying C Cafe (fresh, healthy) or Open Range for Montana fare. Pack for tomorrow\'s drive to Glacier.',
          duration: '2-3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Flying C Cafe at Bozeman Co-op: fresh sandwiches and juices', 'Open Range: Montana steaks and elk burgers on Main St', 'FILL GAS at Costco (1000 N 7th Ave) before Glacier drive tomorrow']
        }
      ],
      accommodation: {
        id: 'accW4a',
        name: 'Same as previous night',
        type: 'hotel',
        priceRange: '$90-130',
        pricePerNight: 110,
        seniorFriendly: true,
        recommended: true,
        notes: 'Same hotel — extra night.'
      },
      notes: ['WORK DAY — Colin works, Mom explores', 'Same hotel as previous night', 'Museum of the Rockies is worth the visit'],
      budgetBreakdown: { accommodation: 110, food: 70, activities: 0, gas: 0, total: 180 }
    },

    // ============================================================
    // DAY 21: BOZEMAN → GLACIER (WIFE ARRIVES!)
    // ============================================================
    {
      id: 'd21',
      dayNumber: 21,
      date: '2026-06-04',
      title: 'Bozeman → Glacier — Wife Arrives!',
      summary: 'Drive to Glacier, settle in, wife flies in Thursday evening',
      location: locations.find(l => l.id === 'glacier')!,
      overnight: 'Columbia Falls / West Glacier, MT',
      drivingDistance: '340 miles',
      drivingTime: '4.5 hours',
      weather: { high: 17, low: 3, conditions: 'Cool, mountain weather' },
      activities: [
        {
          id: 'a17-1',
          name: 'Drive Bozeman to Glacier',
          description: 'Drive west on I-90 to Missoula, then north on US-93. Beautiful Montana scenery. Stop in Missoula or Polson for lunch.',
          duration: '4.5 hours (with stops)',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Leave by 8am to arrive early afternoon', 'Polson on Flathead Lake is a nice lunch stop', 'Alt route via Helena is similar time']
        },
        {
          id: 'a17-2',
          name: 'Settle in at Columbia Falls',
          description: 'Arrive at accommodation, unpack, get settled. Stock up on groceries in Columbia Falls for the next few days (full kitchen in the condo).',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Super 1 Foods in Columbia Falls for groceries', 'Stock up — you have a full kitchen for several nights']
        },
        {
          id: 'a17-3',
          name: 'Evening at Lake McDonald',
          description: 'Drive to the west entrance (20min from Columbia Falls) for an evening visit to Lake McDonald. Walk along the famous colorful rocky shore, watch the sunset over the lake.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['20min from Columbia Falls to West Glacier entrance', 'Famous colorful rocks on the shore', 'Sunset over the lake is stunning — ~9:15pm in late May', 'Apgar Village has a gift shop and visitor center', 'Park entrance: $35/vehicle or use America the Beautiful pass', 'iPhone: shoot at rock-level on the shore for colorful pebbles in foreground with mountains behind. Golden hour lasts extra long here due to mountain shadows']
        }
      ],
      accommodation: {
        id: 'acc17a',
        name: 'Meadow Lake Resort & Condos',
        type: 'condo',
        priceRange: '$99-150',
        pricePerNight: 130,
        reviewRating: 4.0,
        reviewSource: 'TripAdvisor (4.0/5, #1 in Columbia Falls)',
        reviewCount: 1147,
        address: 'Columbia Falls, MT (20 min to West Glacier)',
        website: 'https://meadowlake.com/',
        bookingUrl: 'https://www.kayak.com/Columbia-Falls-Hotels-Meadow-Lake-Resort.83377.ksp',
        amenities: ['2 bedrooms', 'Full kitchen', 'Hot tub', 'Indoor/outdoor pool', 'Free parking', 'Golf course', 'Restaurant'],
        seniorFriendly: true,
        recommended: true,
        notes: '2BR condo: separate bedrooms for 3 adults when wife arrives Thu night. Full kitchen saves money over 4 nights. Private hot tub. Best value near Glacier.'
      },
      accommodationOptions: [
        {
          id: 'acc17a',
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
          notes: '2BR condo. Full kitchen, hot tub. 20min to park. 4 nights with 3 adults (Thu-Sun). Late May rates trending $130-180.'
        },
        {
          id: 'acc17b',
          name: 'Paddle Ridge Cabins (West Glacier)',
          type: 'cabin',
          priceRange: '$126-160 (with 20% early bird)',
          pricePerNight: 145,
          reviewRating: 4.0,
          reviewSource: 'TripAdvisor (4.0/5, 287 "Excellent")',
          reviewCount: 371,
          address: 'West Glacier, MT (1mi from park entrance)',
          website: 'https://www.glacierparkcollection.com/lodging/paddle-ridge/',
          amenities: ['Full kitchen', 'Electric fireplace', 'BBQ', 'Trout pond', 'Free WiFi'],
          seniorFriendly: true,
          notes: '1BR cabin (queen + sleeper sofa for 3). RIGHT at park entrance. 20% off if booked by March 31, 2026!'
        },
        {
          id: 'acc17c',
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
          notes: 'Search: 2BR, Jun 4-Jun 8, $175 max. Hungry Horse is 10-15min from park. Book early — Glacier rentals go fast.'
        }
      ],
      notes: ['DRIVING DAY + wife arrival', 'Wife arrives FCA Thursday evening — Alaska Airlines nonstop from SEA', 'FCA is 13min from Columbia Falls — she can Uber/taxi', '3 adults Thu-Sun: need 2 bedrooms', 'FILL GAS in Bozeman — Costco gas at 1000 N 7th Ave', 'Gallatin Canyon (US-191) is winding — drive carefully', 'Going-to-the-Sun Road NOT fully open — Logan Pass closed until ~mid-June'],
      budgetBreakdown: { accommodation: 150, food: 80, activities: 0, gas: 55, total: 285 }
    },

    // ============================================================
    // DAY 22: GLACIER — WEST SIDE (WIFE'S DAY)
    // ============================================================
    {
      id: 'd22',
      dayNumber: 22,
      date: '2026-06-05',
      title: 'Glacier West Side — Wife\'s First Day',
      summary: 'Trail of the Cedars boardwalk, Lake McDonald, all three together',
      location: locations.find(l => l.id === 'glacier')!,
      overnight: 'Columbia Falls / West Glacier, MT',
      weather: { high: 17, low: 3, conditions: 'Cool, possible mountain weather' },
      activities: [
        {
          id: 'a18-1',
          name: 'Trail of the Cedars',
          description: '1mi boardwalk loop through ancient old-growth cedar and hemlock forest. Wheelchair accessible, flat, gorgeous. Everyone does this together.',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '1 mile (boardwalk loop)',
          tips: ['Fully wheelchair accessible boardwalk', 'Old-growth western red cedars — some 500+ years old', 'Gorge viewpoint along the trail is stunning', 'Near the Avalanche Creek trailhead']
        },
        {
          id: 'a18-2',
          name: 'Avalanche Lake Hike (Colin + Wife)',
          description: 'Mom: Trail of the Cedars only (1mi, flat boardwalk) — wait at the trailhead or drive back to Lake McDonald Lodge. Colin + wife: continue to Avalanche Lake (5.8mi RT, 730ft gain). Turquoise alpine lake ringed by waterfalls. Wife\'s day so activities can be more ambitious.',
          duration: '3-4 hours (full hike)',
          difficulty: 'moderate',
          seniorFriendly: false,
          reservationRequired: false,
          distance: '5.8 miles RT',
          elevation: { gain: 730 },
          tips: ['Mom: Trail of the Cedars only (1mi, flat boardwalk)', 'Colin + wife: continue to Avalanche Lake (5.8mi RT, 730ft gain)', 'Snow patches likely in early June — bring hiking poles', 'Carry bear spray', 'The lake is surrounded by waterfalls from Sperry Glacier', 'Trail starts easy, gets steeper in the last mile']
        },
        {
          id: 'a18-3',
          name: 'Afternoon: Lake McDonald Scenic Area',
          description: 'Regroup at Lake McDonald for a relaxed afternoon. Kayak or canoe rental at Apgar if available, or just enjoy the lakeshore. Lake McDonald Lodge is worth a visit.',
          duration: '2-3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Kayak/canoe rentals at Apgar Village (if open by late May)', 'Lake McDonald Lodge has a Swiss chalet vibe — worth a look inside', 'Colorful rocky shoreline is great for photos', 'Water is cold — kayaking/canoeing only, no swimming!']
        }
      ],
      accommodation: {
        id: 'acc17a',
        name: 'Meadow Lake Resort (same as previous night)',
        type: 'condo',
        priceRange: '$130-180',
        pricePerNight: 150,
        seniorFriendly: true,
        recommended: true,
        notes: 'Second night. Wife is here (arrived Thursday). 3 adults: 2BR condo works perfectly.'
      },
      notes: ['WIFE\'S FIRST FULL DAY — she arrived last night', 'Wife took Friday off work — full day together, all 3', 'Going-to-the-Sun Road NOT fully open — Logan Pass closed until ~mid-June', 'No vehicle reservations needed for 2026', 'Park entrance: $35/vehicle or use America the Beautiful pass'],
      budgetBreakdown: { accommodation: 150, food: 80, activities: 35, gas: 15, total: 280 }
    },

    // ============================================================
    // DAY 23: GLACIER EAST SIDE — GTSR, WILD GOOSE ISLAND, ST. MARY FALLS, GOAT LICK
    // ============================================================
    {
      id: 'd23',
      dayNumber: 23,
      date: '2026-06-06',
      title: 'Glacier East Side — GTSR & St. Mary Falls',
      summary: 'GTSR east drive, Wild Goose Island, St. Mary Falls, Goat Lick on the way back',
      location: locations.find(l => l.id === 'glacier')!,
      overnight: 'Columbia Falls / West Glacier, MT',
      drivingDistance: '~120 miles RT (Columbia Falls to St. Mary via Hwy 2)',
      drivingTime: '~1.5 hours each way',
      weather: { high: 17, low: 3, conditions: 'Cool mountain weather' },
      activities: [
        {
          id: 'a19-1',
          name: 'Drive to St. Mary Entrance (East Side)',
          description: 'Drive to the St. Mary entrance on the east side of the park via Hwy 2. About 1.5 hours from Columbia Falls. The east side of GTSR from St. Mary to Jackson Glacier Overlook should be open.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Route: Columbia Falls → Hwy 2 east → Hwy 89 north to St. Mary', 'Leave by 8am to maximize the day', 'Fill gas in Columbia Falls before heading out']
        },
        {
          id: 'a19-2',
          name: 'GTSR East Side Drive & Wild Goose Island',
          description: 'Drive the open section of Going-to-the-Sun Road from St. Mary entrance. Stop at Wild Goose Island overlook (THE iconic Glacier photo), Rising Sun, Sun Point, and Jackson Glacier Overlook.',
          duration: '1.5-2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Wild Goose Island overlook is THE iconic Glacier photo — don\'t miss it', 'Rising Sun has a small store and restaurant for snacks', 'Sun Point has a short walk to a stunning St. Mary Lake viewpoint', 'Road open from St. Mary to Jackson Glacier Overlook area']
        },
        {
          id: 'a19-3',
          name: 'St. Mary Falls Hike',
          description: 'Easy 1.6mi round trip hike to a beautiful cascading waterfall. One of the most rewarding short hikes in the park. Can continue to Virginia Falls (+0.6mi) if feeling good.',
          duration: '1-1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '1.6 miles RT (2.8 with Virginia Falls)',
          elevation: { gain: 200 },
          tips: ['Trailhead is at the St. Mary Falls shuttle stop on GTSR', 'Mostly downhill to the falls, uphill on the return', 'Can continue to Virginia Falls (+0.6mi) — worth it if Mom is feeling good', 'Carry bear spray']
        },
        {
          id: 'a19-4',
          name: 'Lunch at Rising Sun',
          description: 'Stop at Rising Sun for lunch at the camp store/restaurant before heading back. Or pack a picnic from groceries.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
        },
        {
          id: 'a19-5',
          name: 'Goat Lick Overlook (on the way back)',
          description: 'Stop at Goat Lick overlook on Hwy 2 on the drive back to Columbia Falls. Mountain goats are frequently visible from this highway pulloff, licking mineral deposits on the exposed rock face.',
          duration: '20-30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Right off Hwy 2 between West Glacier and Essex', 'Mountain goats visible on the rock face', 'Bring binoculars for a closer look', 'Best in spring/early summer when goats crave minerals']
        }
      ],
      accommodation: {
        id: 'acc17a',
        name: 'Meadow Lake Resort (same as previous night)',
        type: 'condo',
        priceRange: '$130-180',
        pricePerNight: 150,
        seniorFriendly: true,
        recommended: true,
        notes: 'Third night. Wife\'s Saturday.'
      },
      notes: ['FULL DAY — east side of Glacier', 'Wild Goose Island is THE iconic Glacier photo', 'St. Mary Falls is short and easy (1.6mi RT)', 'Goat Lick overlook on Hwy 2 on the way back — mountain goats!', 'Wife\'s full Saturday — all 3 together', 'Park entrance: $35/vehicle or use America the Beautiful pass'],
      budgetBreakdown: { accommodation: 150, food: 70, activities: 0, gas: 30, total: 250 }
    },

    // ============================================================
    // DAY 24: WHITEFISH + WIFE FAREWELL + CELEBRATION DINNER
    // ============================================================
    {
      id: 'd24',
      dayNumber: 24,
      date: '2026-06-07',
      title: 'Whitefish, Wife Farewell & Celebration Dinner',
      summary: 'Morning in Whitefish, wife flies home Sunday evening, celebration dinner',
      location: locations.find(l => l.id === 'whitefish')!,
      overnight: 'Columbia Falls / West Glacier, MT',
      weather: { high: 17, low: 3, conditions: 'Cool mountain weather' },
      activities: [
        {
          id: 'a20-1',
          name: 'Morning in Whitefish — All Three',
          description: 'Drive 15 min to Whitefish for a morning exploring this charming ski town. Browse Central Avenue shops and galleries. Coffee at Montana Coffee Traders (110 Central Ave) or Loula\'s Cafe for brunch in the historic Masonic temple.',
          duration: '3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Central Avenue: flat 4-block strip, boutiques, galleries, ice cream', 'Montana Coffee Traders: 110 Central Ave, locally roasted coffee', 'Loula\'s Cafe: brunch institution in historic building', 'Everything walkable — no car needed once in downtown Whitefish']
        },
        {
          id: 'a20-2',
          name: 'Whitefish Lake & City Beach',
          description: 'Walk to Whitefish Lake City Beach (15min walk or 5min drive from downtown). Sandy beach, picnic tables, mountain views. Relaxed afternoon by the water.',
          duration: '2-3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Whitefish Lake City Beach: sandy, benches, mountain backdrop', 'Paved lakeside trail for an easy walk', 'Great Northern Brewing Company nearby for a beer']
        },
        {
          id: 'a20-3',
          name: 'Drop Wife at FCA',
          description: 'Drive wife to FCA airport (13min from Columbia Falls) for her Sunday evening flight back to Seattle.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['FCA is 13min from Columbia Falls', 'Wife: Alaska nonstop to SEA, 1h20m', 'Small airport — drop off 1.5hrs before flight']
        },
        {
          id: 'a20-4',
          name: 'Celebration Dinner — Last Night',
          description: 'Nice dinner to celebrate an incredible trip. Whitefish has great restaurants, or cook a final meal in the condo.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Cafe Kandahar — upscale Montana cuisine', 'Tupelo Grille — Southern-inspired, excellent reviews', 'Whitefish Lake Restaurant — lakeside dining', 'Or cook at the condo — more intimate last meal']
        }
      ],
      accommodation: {
        id: 'acc17a',
        name: 'Meadow Lake Resort (last night)',
        type: 'condo',
        priceRange: '$130-180',
        pricePerNight: 150,
        seniorFriendly: true,
        recommended: true,
        notes: 'Last night! Pack tonight for tomorrow\'s flight.'
      },
      notes: ['WIFE\'S LAST DAY — Sunday evening flight FCA→SEA', 'Full day together before wife departs', 'Drop wife at FCA (~6pm) — 13 min from Columbia Falls', 'CELEBRATION DINNER — what an incredible trip!', 'Pack tonight — flight day tomorrow, no activities'],
      budgetBreakdown: { accommodation: 150, food: 100, activities: 0, gas: 10, total: 260 }
    },

    // ============================================================
    // DAY 25: FLY HOME FROM FCA — NO ACTIVITIES
    // ============================================================
    {
      id: 'd25',
      dayNumber: 25,
      date: '2026-06-08',
      title: 'Fly Home from Glacier Park',
      summary: 'Return rental car at FCA, fly home — trip complete!',
      location: locations.find(l => l.id === 'glacier')!,
      overnight: 'Home!',
      weather: { high: 17, low: 3, conditions: 'Cool mountain weather' },
      activities: [
        {
          id: 'a21-1',
          name: 'Breakfast & Check Out',
          description: 'Last breakfast. Pack up and check out of Meadow Lake. Drive 15 min to FCA airport.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['FCA is only 15 min from Columbia Falls', 'Return rental car at FCA airport', 'Small airport — no TSA chaos']
        },
        {
          id: 'a21-2',
          name: 'Fly Home',
          description: 'Colin: FCA → SEA nonstop on Alaska Airlines (1h20m, Embraer E175 jet). Mom: FCA → MSP → YYZ on Delta (~8hrs total, one stop at Minneapolis).',
          duration: 'All day',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          tips: ['FCA is a small, easy airport — very manageable', 'Arrive 1.5hrs before departure', 'Colin: Alaska nonstop to SEA, 1h20m', 'Mom: Delta to MSP then YYZ, ~8hrs total — one airline the whole way']
        }
      ],
      notes: ['FLIGHT DAY — no activities', 'Return rental car at FCA airport', 'Colin: FCA→SEA nonstop (Alaska, 1h20m)', 'Mom: FCA→MSP→YYZ (Delta, ~8hrs, one stop)', 'What an incredible 25-day trip!'],
      budgetBreakdown: { accommodation: 0, food: 30, activities: 0, gas: 0, total: 30 }
    }
  ],
  totalBudget: {
    flights: 999,
    carRental: 1500,
    accommodations: 3395,
    food: 1920,
    activities: 400,
    gas: 300,
    misc: 941,
    total: 9455
  },
  costBreakdown: {
    flights: {
      colinOutbound: { description: 'SEA→LAS Alaska', price: 90 },
      momOutbound: { description: 'YYZ→LAS Porter', price: 220 },
      colinReturn: { description: 'FCA→SEA Alaska nonstop', price: 130 },
      momReturn: { description: 'FCA→MSP→YYZ Delta', price: 350 },
      total: 790,
    },
    carRental: {
      dailyRate: 40,
      days: 24,
      dropoffFee: 200,
      total: 1160,
      notes: 'LAS→FCA one-way. Saves 3-hour drive to Missoula! Book via Costco Travel or AutoSlash.',
    },
    passengerAssistance: {
      cost: 0,
      notes: 'No special assistance needed — Mom is active and mobile.',
    },
    accommodationAvg: 134,
    foodPerDay: 71,
    gasEstimate: 300,
  },
  importantReservations: [
    {
      item: 'Antelope Canyon Tour (Upper or Canyon X)',
      bookBy: '2026-04-25',
      website: 'https://fareharbor.com/embeds/book/antelopecanyon/items/49363/date/2026-05-19/?ref=https://www.antelopecanyon.com',
      notes: 'Book 9:00 AM slot — 11:20 AM sold out, 1:40 PM limited. $65-80/person + $15 Navajo entry fee. Book at antelopecanyon.com (FareHarbor).'
    },
    {
      item: 'Grand Canyon Lodging (Tusayan)',
      bookBy: '2026-03-19',
      website: 'https://www.redfeatherlodge.com/',
      notes: 'May is peak season. Book ASAP. In-park lodges (Yavapai) book 6-13 months ahead — check grandcanyonlodges.com too.'
    },
    {
      item: 'Jackson WY Lodging (Memorial Day Weekend)',
      bookBy: '2026-03-19',
      website: 'https://www.kayak.com/Jackson-Hotels.22713.hotel.ksp',
      notes: 'May 27-Jun 1 is just after Memorial Day weekend (May 23-25). Jackson is a resort town — prices spike on holiday weekends. Book ASAP.'
    },
    {
      item: 'Car Rental LAS→MSO One-Way',
      bookBy: '2026-03-19',
      website: 'https://www.costcotravel.com/Rental-Cars',
      notes: 'Inside optimal 4-8 week booking window. Book via Costco Travel, then check AutoSlash (autoslash.com). Free cancellation — rebook if prices drop.'
    },
    {
      item: 'El Tovar Dining Room Reservation',
      bookBy: '2026-03-16',
      website: 'https://www.exploretock.com/el-tovar-dining-room---grand-canyon-south-rim',
      notes: 'Opens 60 days ahead on Tock. For May 17 dinner, book by mid-March. Lunch is easier to get.'
    },
    {
      item: 'Park Passes (NEW 2026 Nonresident Fees!)',
      bookBy: '2026-05-01',
      website: 'https://www.nps.gov/planyourvisit/passes.htm',
      notes: 'Colin: $80 America the Beautiful pass. Mom (Canadian): NEW $250 Nonresident Annual Pass — saves $150 vs paying $100 surcharge at each of 4 designated parks (Grand Canyon, Teton, Yellowstone, Glacier). Buy at first park entrance.'
    },
    {
      item: 'Arches NP — No Timed Entry in 2026',
      bookBy: 'N/A',
      website: 'https://www.nps.gov/arch/planyourvisit/timed-entry-reservation.htm',
      notes: 'Timed entry dropped for 2026. No reservation needed. Arrive early (before 8am) to avoid crowds.'
    },
    {
      item: 'Paddle Ridge Cabin (Glacier) — 20% Early Bird',
      bookBy: '2026-03-31',
      website: 'https://www.glacierparkcollection.com/lodging/paddle-ridge/',
      notes: '20% off if booked by March 31 for May 1-Jul 1 stays.'
    },
    {
      item: 'Grand Canyon Lodging',
      bookBy: '2026-03-15',
      website: 'https://www.grandcanyonlodges.com/',
      notes: 'In-park lodges book 12+ months ahead. Tusayan hotels fill fast for May.'
    },
    {
      item: 'Glacier — No Vehicle Reservation in 2026',
      bookBy: 'N/A',
      website: 'https://www.nps.gov/glac/planyourvisit/visiting-glacier-2026.htm',
      notes: 'Timed-entry vehicle reservation system discontinued for 2026. New ticketed shuttle + 3hr Logan Pass parking limit starts July 1 (after your trip). Sun Road will only be open to Avalanche Creek area in late May.'
    }
  ]
};
