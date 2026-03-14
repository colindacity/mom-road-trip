import { TripData, Location, DayPlan, Accommodation } from '@/types/trip';

export const locations: Location[] = [
  { id: 'phx', name: 'Phoenix, AZ', lat: 33.4484, lng: -112.0740, type: 'city',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Downtown_Phoenix_Skyline_%286974043971%29.jpg/1280px-Downtown_Phoenix_Skyline_%286974043971%29.jpg',
    infoUrl: 'https://www.visitphoenix.com/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Phoenix+Sky+Harbor+Airport' },
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
];

export const tripData: TripData = {
  id: 'mom-road-trip-2026',
  name: "Southwest to Glacier Road Trip",
  tagline: "22 days, 6 national parks, Phoenix to Glacier, one unforgettable journey with Mom",
  startDate: '2026-05-15',
  endDate: '2026-06-05',
  travelers: [
    { id: 'colin', name: 'Colin', origin: 'SEA', originCity: 'Seattle, WA', color: '#3b82f6', notes: 'Flying SEA → PHX' },
    { id: 'mom', name: 'Mom', origin: 'YYZ', originCity: 'Toronto, ON', color: '#ec4899', notes: 'Active 80yo, walks a lot, can do short hikes. Flying YYZ → PHX. PASSENGER ASSISTANCE: Request wheelchair/mobility assistance 48hrs before each flight.' },
    { id: 'wife', name: 'Wife', origin: 'SEA', originCity: 'Seattle, WA', color: '#8b5cf6', notes: 'Joining for Glacier weekend (May 31 - Jun 2). Flying SEA → FCA (Kalispell). Alaska Airlines nonstop ~$160-200 RT, 1hr 20min. FCA is 13min from Columbia Falls.' }
  ],
  phases: [
    {
      id: 'arizona',
      name: 'Arizona',
      summary: 'Grand Canyon, Antelope Canyon, Horseshoe Bend',
      days: [1, 2, 3, 4, 5],
      startDay: 1,
      endDay: 5,
      color: '#ef4444',
      highlights: ['Phoenix arrival', 'Grand Canyon', 'Antelope Canyon', 'Horseshoe Bend']
    },
    {
      id: 'utah',
      name: 'Utah',
      summary: 'Arches, Canyonlands, red rock country',
      days: [6, 7, 8, 9, 10],
      startDay: 6,
      endDay: 10,
      color: '#f59e0b',
      highlights: ['Monument Valley drive-by', 'Arches NP', 'Rest day', 'Canyonlands', 'Salt Lake City']
    },
    {
      id: 'wyoming',
      name: 'Wyoming',
      summary: 'Grand Teton and Yellowstone',
      days: [11, 12, 13, 14, 15, 16],
      startDay: 11,
      endDay: 16,
      color: '#22c55e',
      highlights: ['Grand Teton (3 days)', 'Yellowstone geysers', 'Yellowstone canyon & wildlife']
    },
    {
      id: 'montana',
      name: 'Montana & Glacier',
      summary: 'Glacier National Park with wife joining for the weekend',
      days: [17, 18, 19, 20, 21, 22],
      startDay: 17,
      endDay: 22,
      color: '#06b6d4',
      highlights: ['Sun Road (west side to Avalanche Creek)', 'Lake McDonald', 'Avalanche Lake hike', 'Wife joins for weekend', 'Fly home from MSO']
    }
  ],
  flights: [
    {
      id: 'f1',
      type: 'outbound',
      passenger: 'colin',
      from: 'SEA',
      to: 'PHX',
      date: '2026-05-15',
      airline: 'Alaska Airlines',
      price: 90,
      duration: '2h 55m',
      bookingUrl: 'https://www.google.com/travel/flights?q=Flights+from+SEA+to+PHX+on+2026-05-15&curr=USD',
      notes: 'Direct flights ~2h 55m. Book 45-60 days ahead for best rates.'
    },
    {
      id: 'f2',
      type: 'outbound',
      passenger: 'mom',
      from: 'YYZ',
      to: 'PHX',
      date: '2026-05-15',
      airline: 'Porter Airlines (Recommended)',
      price: 220,
      duration: '4h 32m',
      bookingUrl: 'https://www.google.com/travel/flights?q=Flights+from+YYZ+to+PHX+on+2026-05-15&curr=USD',
      notes: 'DIRECT flight. Porter has no middle seats, complimentary wine. Request wheelchair assist 48hrs ahead.'
    },
    {
      id: 'f3',
      type: 'return',
      passenger: 'colin',
      from: 'MSO',
      fromCity: 'Missoula, MT',
      to: 'SEA',
      toCity: 'Seattle',
      date: '2026-06-05',
      airline: 'Alaska Airlines',
      price: 120,
      bookingUrl: 'https://www.google.com/travel/flights?q=Flights+from+MSO+to+SEA+on+2026-06-04&curr=USD',
      notes: 'MSO→SEA. Check for direct or 1-stop options.'
    },
    {
      id: 'f4',
      type: 'return',
      passenger: 'mom',
      from: 'MSO',
      fromCity: 'Missoula, MT',
      to: 'YYZ',
      toCity: 'Toronto',
      date: '2026-06-05',
      airline: 'United / Alaska',
      price: 350,
      bookingUrl: 'https://www.google.com/travel/flights?q=Flights+from+MSO+to+YYZ+on+2026-06-04&curr=USD',
      notes: 'MSO→connecting hub→YYZ. Request wheelchair/passenger assistance. United has MSO→DEN→YYZ options.'
    },
    {
      id: 'f5',
      type: 'outbound',
      passenger: 'wife',
      from: 'SEA',
      fromCity: 'Seattle',
      to: 'FCA',
      toCity: 'Kalispell (Glacier Park)',
      date: '2026-05-31',
      airline: 'Alaska Airlines',
      price: 110,
      duration: '1h 20m',
      bookingUrl: 'https://www.google.com/travel/flights?q=Flights+from+SEA+to+FCA+on+2026-05-31&curr=USD',
      notes: 'Wife\'s flight. DIRECT on Alaska Airlines. ~3 flights/day. FCA is 13 min from Columbia Falls. Saturday arrival — same day as Bozeman→Glacier drive.'
    },
    {
      id: 'f6',
      type: 'return',
      passenger: 'wife',
      from: 'FCA',
      fromCity: 'Kalispell (Glacier Park)',
      to: 'SEA',
      toCity: 'Seattle',
      date: '2026-06-02',
      airline: 'Alaska Airlines',
      price: 110,
      duration: '1h 20m',
      bookingUrl: 'https://www.google.com/travel/flights?q=Flights+from+FCA+to+SEA+on+2026-06-02&curr=USD',
      notes: 'Wife\'s return. Tuesday morning flight, or Monday Jun 1 evening.'
    }
  ],
  flightOptions: [
    {
      id: 'fo1',
      passenger: 'colin',
      type: 'outbound',
      recommended: 'sea-phx-direct',
      notes: 'Colin flies SEA→PHX. Multiple direct options daily.',
      options: [
        {
          id: 'sea-phx-direct',
          type: 'outbound',
          passenger: 'colin',
          from: 'SEA',
          to: 'PHX',
          date: '2026-05-15',
          airline: 'Alaska Airlines',
          price: 89,
          duration: '2h 55m DIRECT',
          bookingUrl: 'https://www.google.com/travel/flights?q=Flights+from+SEA+to+PHX+on+2026-05-15&curr=USD',
          notes: 'DIRECT! 4+ daily nonstops.'
        },
        {
          id: 'sea-phx-sw',
          type: 'outbound',
          passenger: 'colin',
          from: 'SEA',
          to: 'PHX',
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
      notes: 'Mom flies YYZ→PHX. Porter recommended for comfort.',
      options: [
        {
          id: 'yyz-phx-porter',
          type: 'outbound',
          passenger: 'mom',
          from: 'YYZ',
          to: 'PHX',
          date: '2026-05-15',
          airline: 'Porter Airlines',
          price: 220,
          duration: '4h 32m DIRECT',
          bookingUrl: 'https://www.google.com/travel/flights?q=Flights+from+YYZ+to+PHX+on+2026-05-15&curr=USD',
          notes: 'No middle seats, free wine, snacks. Best for seniors.'
        },
        {
          id: 'yyz-phx-westjet',
          type: 'outbound',
          passenger: 'mom',
          from: 'YYZ',
          to: 'PHX',
          date: '2026-05-15',
          airline: 'WestJet',
          price: 280,
          duration: '4h 35m DIRECT',
          bookingUrl: 'https://www.google.com/travel/flights?q=Flights+from+YYZ+to+PHX+on+2026-05-15+WestJet&curr=USD',
          notes: 'Canadian airline, good service.'
        }
      ]
    }
  ],
  carRental: {
    company: 'Budget or Enterprise',
    vehicleType: 'Compact AWD SUV (Subaru Crosstrek / Toyota RAV4)',
    pickupLocation: 'Phoenix Sky Harbor Airport (PHX)',
    pickupDate: '2026-05-15',
    dropoffLocation: 'Missoula Airport (MSO)',
    dropoffDate: '2026-06-03',
    totalDays: 19,
    dailyRate: 40,
    dropoffFee: 200,
    totalCost: 960,
    notes: 'One-way compact SUV. PHX to MSO drop-off. AWD nice but not required — all roads are paved. Book via Costco Travel or AutoSlash. Try Hertz with DRIVE rate code for cheap one-way drops. AARP gets 30-35% off at Avis/Budget. Expect ~$1,100-1,200 all-in with taxes/fees.'
  },
  days: [
    // ============================================================
    // DAY 1: ARRIVE PHOENIX
    // ============================================================
    {
      id: 'd1',
      dayNumber: 1,
      date: '2026-05-15',
      title: 'Arrive Phoenix — Rest & Recover',
      summary: 'Land, pick up car, easy evening, recover from travel',
      location: locations.find(l => l.id === 'phx')!,
      overnight: 'Phoenix / Scottsdale, AZ',
      weather: { high: 38, low: 23, conditions: 'Hot and sunny — stay by the pool!' },
      activities: [
        {
          id: 'a1-1',
          name: 'Arrive Phoenix & Pick Up Rental',
          description: 'Arrive at Phoenix Sky Harbor, pick up compact AWD SUV. Mom arrives ~10:30am, Colin adjust timing to meet.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          tips: ['Pre-book rental online', 'Confirm AWD vehicle', 'Meet at rental car center']
        },
        {
          id: 'a1-2',
          name: 'Check into Hotel & Rest',
          description: 'Get settled, unpack, rest up. Long trip ahead — start well-rested!',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Request ground floor room', 'Pool hotels are ideal in Phoenix heat']
        },
        {
          id: 'a1-3',
          name: 'Pool Time & Relaxation',
          description: 'Enjoy the Arizona sunshine by the pool. Hydrate well — desert air is dry!',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Sunscreen essential', 'Drink lots of water', 'Stay in shade 2-4pm']
        },
        {
          id: 'a1-4',
          name: 'Dinner in Scottsdale',
          description: 'Nice dinner to kick off the trip. Old Town Scottsdale has great options.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['The Mission, Barrio Queen, or Cafe Monarch', 'Outdoor patios lovely in the evening']
        }
      ],
      accommodation: {
        id: 'acc1a',
        name: 'La Quinta Inn & Suites Scottsdale',
        type: 'hotel',
        priceRange: '$70-100',
        pricePerNight: 85,
        reviewRating: 4.1,
        reviewSource: 'Booking.com (8.2/10)',
        reviewCount: 1487,
        address: '8888 E Shea Blvd, Scottsdale, AZ 85260',
        website: 'https://www.wyndhamhotels.com/laquinta/scottsdale-arizona/la-quinta-phoenix-scottsdale/overview',
        bookingUrl: 'https://www.kayak.com/Scottsdale-Hotels-La-Quinta-Inn-Suites-by-Wyndham-Phoenix-Scottsdale.34466.ksp',
        amenities: ['Pool', 'Hot tub', 'Free breakfast', 'Free parking', 'Free WiFi'],
        seniorFriendly: true,
        recommended: true,
        notes: 'Best value. 2 double beds, pool, free hot breakfast. May is off-peak in Phoenix so rates are low.'
      },
      accommodationOptions: [
        {
          id: 'acc1a',
          name: 'La Quinta Inn & Suites Scottsdale',
          type: 'hotel',
          priceRange: '$70-100',
          pricePerNight: 85,
          reviewRating: 4.1,
          reviewSource: 'Booking.com (8.2/10)',
          reviewCount: 1487,
          address: '8888 E Shea Blvd, Scottsdale, AZ 85260',
          website: 'https://www.wyndhamhotels.com/laquinta/scottsdale-arizona/la-quinta-phoenix-scottsdale/overview',
          bookingUrl: 'https://www.kayak.com/Scottsdale-Hotels-La-Quinta-Inn-Suites-by-Wyndham-Phoenix-Scottsdale.34466.ksp',
          amenities: ['Pool', 'Hot tub', 'Free breakfast', 'Free parking', 'Free WiFi'],
          seniorFriendly: true,
          recommended: true,
          notes: 'Best value. 2 double beds, pool, free hot breakfast. May off-peak pricing.'
        },
        {
          id: 'acc1b',
          name: 'Hampton Inn & Suites Scottsdale/Shea Blvd',
          type: 'hotel',
          priceRange: '$112-135',
          pricePerNight: 125,
          reviewRating: 4.3,
          reviewSource: 'TripAdvisor (4.5/5)',
          reviewCount: 850,
          address: '10101 N Scottsdale Rd, Scottsdale, AZ 85253',
          website: 'https://www.hilton.com/en/hotels/phxsdhx-hampton-suites-phoenix-scottsdale-on-shea-boulevard/',
          bookingUrl: 'https://www.kayak.com/Scottsdale-Hotels-Hampton-Inn-Suites-Scottsdale-on-Shea-Blvd.5991.ksp',
          amenities: ['Heated pool', 'Spa', 'Free breakfast', 'Free parking', 'Kitchen suite available'],
          seniorFriendly: true,
          notes: '2-queen suite with kitchen and living room. Best pool setup. Top of budget but more space.'
        },
        {
          id: 'acc1c',
          name: 'Airbnb 2BR Condo in Scottsdale',
          type: 'airbnb',
          priceRange: '$100-140',
          pricePerNight: 120,
          reviewRating: 4.9,
          reviewSource: 'Airbnb',
          address: 'North Scottsdale / Kierland area',
          bookingUrl: 'https://www.airbnb.com/scottsdale-az/stays',
          amenities: ['2 bedrooms', 'Full kitchen', 'Community pool', 'Free parking', 'Washer/dryer'],
          seniorFriendly: true,
          notes: 'Search for 2BR condos near Kierland Commons. May off-peak = good inventory. Filter: 2BR, $150 max, pool.'
        }
      ],
      notes: ['NO DRIVING TODAY — rest after flights!', 'Phoenix is HOT — stay cool', 'Hydrate constantly'],
      budgetBreakdown: { accommodation: 85, food: 60, activities: 0, gas: 0, total: 145 }
    },

    // ============================================================
    // DAY 2: PHOENIX → GRAND CANYON
    // ============================================================
    {
      id: 'd2',
      dayNumber: 2,
      date: '2026-05-16',
      title: 'Phoenix → Grand Canyon',
      summary: 'Morning drive through desert to canyon, first views at sunset',
      location: locations.find(l => l.id === 'gc')!,
      overnight: 'Grand Canyon (Tusayan)',
      drivingDistance: '230 miles',
      drivingTime: '4 hours',
      weather: { high: 26, low: 7, conditions: 'Sunny, pleasant at rim elevation (7,000 ft)' },
      activities: [
        {
          id: 'a2-1',
          name: 'Morning Drive: Phoenix to Grand Canyon',
          description: 'Scenic 4-hour drive. Stop in Flagstaff for lunch. Watch landscape change from desert to pine forest.',
          duration: '4 hours (with stops)',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Leave by 9am', 'Rest stop at Sunset Point and Flagstaff', 'Saguaros first hour, pines near Flagstaff']
        },
        {
          id: 'a2-2',
          name: 'Lunch in Flagstaff',
          description: 'Stop in charming Flagstaff for lunch. Historic downtown has great cafes.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['MartAnne\'s Breakfast Palace or Pizzicletta']
        },
        {
          id: 'a2-3',
          name: 'First Views at Mather Point',
          description: 'Your first Grand Canyon views! Short accessible walk to iconic viewpoint. Visitor Center right here.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Accessible viewpoints', 'Visitor Center nearby', 'iPhone: use 0.5x ultrawide to capture the full canyon', 'Late afternoon light paints the walls orange and red']
        },
        {
          id: 'a2-4',
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
          notes: 'Inside the park! Request Yavapai East (newer, has A/C). 2 queen beds. Books 12+ months ahead.'
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
      notes: ['DRIVING DAY — light activities', 'GC elevation 7,000ft — may feel altitude', 'Pack layers for evening', 'Mom pays $100 nonresident surcharge at gate (new 2026 policy for non-US visitors)', 'BOOK El Tovar dinner NOW — 60 day window, reserve at grandcanyonlodges.com'],
      budgetBreakdown: { accommodation: 165, food: 80, activities: 35, gas: 50, total: 330 }
    },

    // ============================================================
    // DAY 3: GRAND CANYON FULL DAY
    // ============================================================
    {
      id: 'd3',
      dayNumber: 3,
      date: '2026-05-17',
      title: 'Grand Canyon — Desert View Drive East',
      summary: 'Drive east to Watchtower, Lipan Point, and all the eastern viewpoints',
      location: locations.find(l => l.id === 'gc')!,
      overnight: 'Grand Canyon (Tusayan)',
      weather: { high: 26, low: 7, conditions: 'Sunny, pleasant' },
      activities: [
        {
          id: 'a3-1',
          name: 'Sunrise at Yavapai Point',
          description: 'Less crowded than Mather Point with same eastern exposure. Arrive 30min before sunrise (~5:15am in May). The Geology Museum nearby opens at 8am — worth a quick stop after.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Sunrise ~5:15am mid-May — warm light floods the canyon', 'Far fewer people than Mather Point', 'Geology Museum opens at 8am nearby', 'iPhone: burst mode during golden hour, 0.5x ultrawide captures the full panorama']
        },
        {
          id: 'a3-2',
          name: 'Morning Rim Trail Walk',
          description: 'Walk the paved Rim Trail from Mather Point to Bright Angel Lodge (2mi). Flat, wheelchair accessible, benches throughout. Cool morning temps are ideal for Mom.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '2 miles (Mather Point to Bright Angel Lodge)',
          elevation: { gain: 100, highest: 7120, lowest: 7000 },
          tips: ['Paved and wheelchair accessible', 'Free shuttle stops at viewpoints along the way', 'Benches every few hundred yards', 'Morning light is soft and great for photos']
        },
        {
          id: 'a3-3',
          name: 'Desert View Drive — Eastern Viewpoints',
          description: 'Drive your own car 25 miles east along the South Rim on Desert View Drive (AZ-64). Stop at 6 major viewpoints with increasingly dramatic canyon views. Key stops: Yaki Point (panoramic views, shuttle-only but worth it), Grandview Point (one of the widest canyon views), Moran Point (colorful rock layers), Lipan Point (see the Colorado River and Unkar Delta), Navajo Point (highest point on the South Rim at 7,498ft), and Desert View Watchtower (Mary Colter\'s 70-foot stone tower with 360° views, Hopi-inspired murals inside, gift shop). Morning light illuminates the eastern canyon walls beautifully.',
          duration: '3-4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '25 miles one way (50 miles round trip)',
          tips: [
            'Drive your own car — no shuttle needed on Desert View Drive',
            'Yaki Point requires the Orange Route shuttle (no private cars) — stop here first via shuttle before driving east',
            'Grandview Point has the widest panorama on the South Rim',
            'Lipan Point is the best place to see the Colorado River from the rim',
            'Navajo Point is the highest overlook on the South Rim (7,498ft)',
            'Desert View Watchtower: climb to the top for 360° views, $2 suggested donation',
            'Watchtower has restrooms, snack bar, and gift shop',
            'Morning light is best — canyon walls glow orange from this direction',
            'iPhone: 0.5x ultrawide at the Watchtower top floor, 2x zoom for river shots at Lipan Point',
            'Fill gas at Desert View gas station if needed (last gas before Cameron)'
          ]
        },
        {
          id: 'a3-4',
          name: 'Lunch at El Tovar or Bright Angel Lodge',
          description: 'Return to Grand Canyon Village for lunch at one of the historic lodges. El Tovar is upscale dining with canyon views. Bright Angel Lodge is more casual with good burgers and a saloon.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['El Tovar lunch is walk-in (dinner needs reservation)', 'Bright Angel has a casual café and the Arizona Room steakhouse', 'Both have canyon-view seating']
        }
      ],
      accommodation: {
        id: 'acc2a',
        name: 'Red Feather Lodge (same as previous night)',
        type: 'hotel',
        priceRange: '$150-180',
        pricePerNight: 165,
        reviewRating: 4.0,
        reviewSource: 'TripAdvisor',
        seniorFriendly: true,
        recommended: true,
        notes: 'Second night — same hotel.'
      },
      notes: ['DESERT VIEW DRIVE DAY — 25mi scenic drive east along South Rim', 'Sunrise at Yavapai, morning rim walk, then drive east to Watchtower', 'Desert View Watchtower is a must-see — 70ft stone tower with 360° views', 'Skip South Kaibab to Ooh Aah Point — too steep and loose gravel for 80yo', 'Hydrate at altitude — 7,000ft'],
      budgetBreakdown: { accommodation: 165, food: 80, activities: 0, gas: 0, total: 245 }
    },

    // ============================================================
    // DAY 4: GRAND CANYON → PAGE + HORSESHOE BEND
    // ============================================================
    {
      id: 'd4',
      dayNumber: 4,
      date: '2026-05-18',
      title: 'Grand Canyon → Page & Horseshoe Bend',
      summary: 'Drive to Page, afternoon at iconic Horseshoe Bend',
      location: locations.find(l => l.id === 'page')!,
      overnight: 'Page, AZ',
      drivingDistance: '135 miles',
      drivingTime: '2.5 hours',
      weather: { high: 31, low: 14, conditions: 'Sunny, warm in the desert' },
      activities: [
        {
          id: 'a4-1',
          name: 'Drive Grand Canyon to Page',
          description: 'Scenic 2.5-hour drive through the Navajo Nation. Desert views and wide open spaces.',
          duration: '2.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Fill up gas at Cameron Trading Post', 'Limited services on Navajo Nation']
        },
        {
          id: 'a4-2',
          name: 'Check In & Lunch in Page',
          description: 'Arrive, get settled, grab lunch in town.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
        },
        {
          id: 'a4-3',
          name: 'Horseshoe Bend',
          description: 'Iconic 1,000-foot drop viewpoint over the Colorado River. Short walk from parking.',
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
          notes: 'Newest hotel in Page (2020). Kitchenette with fridge, microwave, dishwasher. Budget pick.'
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
          notes: 'Highest-rated hotel in Page. 2-queen balcony studio suites. May be at top of budget in peak season.'
        },
        {
          id: 'acc4c',
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
        id: 'acc4a',
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
    // DAY 6: PAGE → MONUMENT VALLEY → MOAB (DRIVING DAY)
    // ============================================================
    {
      id: 'd6',
      dayNumber: 6,
      date: '2026-05-20',
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
    // DAY 7: ARCHES NATIONAL PARK
    // ============================================================
    {
      id: 'd7',
      dayNumber: 7,
      date: '2026-05-21',
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
    // DAY 8: REST DAY IN MOAB
    // ============================================================
    {
      id: 'd8',
      dayNumber: 8,
      date: '2026-05-22',
      title: 'Rest Day in Moab',
      summary: 'Pool, town exploring, optional sunset at Dead Horse Point',
      location: locations.find(l => l.id === 'moab')!,
      overnight: 'Moab, UT',
      weather: { high: 32, low: 14, conditions: 'Sunny, hot' },
      activities: [
        {
          id: 'a8-1',
          name: 'Sleep In & Leisurely Morning',
          description: 'No alarm. Enjoy breakfast at a local cafe or at the hotel.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Jailhouse Cafe for breakfast', 'Love Muffin Cafe is another favorite']
        },
        {
          id: 'a8-2',
          name: 'Moab Town Exploration',
          description: 'Browse shops on Main Street, grab ice cream, visit the Moab Museum.',
          duration: '2-3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Main Street is walkable', 'Moab Brewery for lunch']
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
      notes: ['REST DAY — no hiking!', 'Recover from Arches before Canyonlands tomorrow', 'Pool and town day'],
      budgetBreakdown: { accommodation: 140, food: 70, activities: 20, gas: 10, total: 240 }
    },

    // ============================================================
    // DAY 9: CANYONLANDS → DRIVE TO SLC
    // ============================================================
    {
      id: 'd9',
      dayNumber: 9,
      date: '2026-05-23',
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
    // DAY 10: SALT LAKE CITY — FULL DAY
    // ============================================================
    {
      id: 'd10',
      dayNumber: 10,
      date: '2026-05-24',
      title: 'Salt Lake City — Explore Day',
      summary: 'Temple Square, Great Salt Lake, downtown SLC',
      location: locations.find(l => l.id === 'slc')!,
      overnight: 'Salt Lake City, UT',
      weather: { high: 27, low: 13, conditions: 'Clear and warm' },
      activities: [
        {
          id: 'a10-1',
          name: 'Temple Square & Capitol Hill',
          description: 'Walk through the beautifully landscaped Temple Square (open to all visitors). See the Salt Lake Temple exterior (recently renovated), Tabernacle, and visitor centers. Then walk or drive up to the Utah State Capitol for panoramic views of the valley and Wasatch Mountains.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Temple Square is free and open to all — no membership required', 'The Tabernacle has incredible acoustics — free organ recitals at noon Mon-Sat', 'Capitol building is free to enter, rotunda is impressive', 'Great views of the Wasatch Front from Capitol steps']
        },
        {
          id: 'a10-2',
          name: 'Lunch Downtown',
          description: 'Try the local food scene. Red Iguana for famous Mexican mole, or The Copper Onion for upscale American.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Red Iguana: legendary mole sauces, always a line but worth it', 'The Copper Onion: one of the best restaurants in Utah', 'Caputo\'s Market & Deli for artisan sandwiches', 'City Creek Center food court for casual options']
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
      notes: ['EXPLORE DAY — no driving, no hiking', 'Temple Square is beautiful and free', 'Great Salt Lake is a unique experience for Canadians', 'Good rest day before the long drive to Jackson tomorrow', 'Laundry day — Crystal Inn has guest laundry'],
      budgetBreakdown: { accommodation: 100, food: 80, activities: 15, gas: 10, total: 205 }
    },

    // ============================================================
    // DAY 11: SLC → JACKSON / GRAND TETON
    // ============================================================
    {
      id: 'd11',
      dayNumber: 11,
      date: '2026-06-05',
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
          notes: 'Best value for 4 nights. Full kitchen saves on food. 40min to park. Search: 2BR, May 24-28, $150 max.'
        }
      ],
      notes: ['DRIVING DAY — no hiking', 'Jackson is expensive — Driggs/Victor ID is cheaper alt', 'Cooler temps — bring layers', 'WILDLIFE: Late May is calving season — moose, bison, bears with cubs all active', 'Best spots: Oxbow Bend, Schwabacher Landing, Antelope Flats', 'Elk Refuge is EMPTY in May — herd migrates to high country by April'],
      budgetBreakdown: { accommodation: 130, food: 80, activities: 0, gas: 55, total: 265 }
    },

    // ============================================================
    // DAY 12: GRAND TETON DAY 1 — SOUTHERN PARK: JENNY LAKE & ICONS
    // ============================================================
    {
      id: 'd12',
      dayNumber: 12,
      date: '2026-06-05',
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
    // DAY 13: GRAND TETON DAY 2 — NORTHERN PARK: LODGE, LAKES & WILDLIFE
    // ============================================================
    {
      id: 'd13',
      dayNumber: 13,
      date: '2026-06-05',
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
    // DAY 14: GRAND TETON DAY 3 — REST DAY IN JACKSON
    // ============================================================
    {
      id: 'd14',
      dayNumber: 14,
      date: '2026-06-05',
      title: 'Grand Teton Day 3 — Rest Day in Jackson',
      summary: 'Sleep in, optional Leigh Lake, browse Jackson, recharge before Yellowstone',
      location: locations.find(l => l.id === 'teton')!,
      overnight: 'Jackson, WY',
      weather: { high: 18, low: 3, conditions: 'Clear, cool' },
      activities: [
        {
          id: 'a14-1',
          name: 'Sleep In & Late Breakfast',
          description: 'No alarm. Sleep in and enjoy a late breakfast in Jackson at Persephone Bakery (excellent pastries and coffee, European-style).',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Persephone Bakery — arrive by 9am to beat the line', 'The Bunnery for a classic American breakfast alternative']
        },
        {
          id: 'a14-2',
          name: 'Optional: Leigh Lake Trail',
          description: 'If feeling up for it, the Leigh Lake trail is 1.8mi and nearly flat. Beautiful alpine lake with mountain backdrop. Easy enough for a rest day stroll.',
          duration: '1.5 hours',
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
      notes: ['REST DAY — sleep in, take it easy', 'Leigh Lake trail is optional (1.8mi, nearly flat)', 'Recharge for Yellowstone tomorrow', 'Last night in Jackson — enjoy the town'],
      budgetBreakdown: { accommodation: 130, food: 80, activities: 0, gas: 10, total: 220 }
    },

    // ============================================================
    // DAY 15: GRAND TETON → YELLOWSTONE SOUTH LOOP
    // ============================================================
    {
      id: 'd15',
      dayNumber: 15,
      date: '2026-06-05',
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
    // DAY 16: YELLOWSTONE NORTH → BOZEMAN
    // ============================================================
    {
      id: 'd16',
      dayNumber: 16,
      date: '2026-06-05',
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
    // DAY 17: BOZEMAN → GLACIER (WIFE ARRIVES!)
    // ============================================================
    {
      id: 'd17',
      dayNumber: 17,
      date: '2026-06-05',
      title: 'Bozeman → Glacier — Wife Arrives!',
      summary: 'Drive to Glacier, wife flies in for the weekend, afternoon exploring',
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
          tips: ['Super 1 Foods in Columbia Falls for groceries', 'Stock up — you have a full kitchen for 4 nights', 'Wife arrives FCA tonight — Alaska Airlines nonstop from SEA']
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
        notes: '2BR condo: separate bedrooms for 3 adults (wife weekend). Full kitchen saves money over 4 nights. Private hot tub. Best value near Glacier.'
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
          notes: '2BR condo. Full kitchen, hot tub. 20min to park. Best value for 4 nights with 3 adults. Late May rates trending $130-180.'
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
          notes: 'Search: 2BR, May 30-Jun 3, $175 max. Hungry Horse is 10-15min from park. Book early — Glacier rentals go fast.'
        }
      ],
      notes: ['DRIVING DAY + wife arrival', 'Saturday — wife joins for the weekend!', 'Wife arrives FCA tonight — Alaska Airlines nonstop from SEA', '3 adults: need 2 bedrooms or 2BR rental', 'FILL GAS in Bozeman — Costco gas at 1000 N 7th Ave', 'Gallatin Canyon (US-191) is winding — drive carefully, one of MT\'s most dangerous roads', 'Going-to-the-Sun Road NOT fully open — Logan Pass closed until ~mid-June', 'No vehicle reservations needed for 2026'],
      budgetBreakdown: { accommodation: 150, food: 80, activities: 0, gas: 55, total: 285 }
    },

    // ============================================================
    // DAY 18: GLACIER — WEST SIDE (WIFE'S DAY)
    // ============================================================
    {
      id: 'd18',
      dayNumber: 18,
      date: '2026-06-05',
      title: 'Glacier West Side — Trail of Cedars & Avalanche Lake (Wife\'s Day)',
      summary: 'Trail of the Cedars boardwalk, Avalanche Lake hike for Colin + wife, Lake McDonald kayaking',
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
        notes: 'Second night. Sunday — wife\'s day in Glacier.'
      },
      notes: ['WIFE\'S DAY — activities can be more ambitious', 'Mom: Trail of the Cedars only (1mi, flat boardwalk)', 'Colin + wife: Avalanche Lake hike (5.8mi RT, 730ft)', 'Going-to-the-Sun Road NOT fully open — Logan Pass closed until ~mid-June', 'No vehicle reservations needed for 2026', 'Park entrance: $35/vehicle or use America the Beautiful pass'],
      budgetBreakdown: { accommodation: 150, food: 80, activities: 35, gas: 15, total: 280 }
    },

    // ============================================================
    // DAY 19: GLACIER — MANY GLACIER (EAST SIDE)
    // ============================================================
    {
      id: 'd19',
      dayNumber: 19,
      date: '2026-06-05',
      title: 'Glacier — Many Glacier Valley',
      summary: 'Drive to Many Glacier, Swiftcurrent Lake, boat tour, Iceberg Lake trail start',
      location: locations.find(l => l.id === 'glacier')!,
      overnight: 'Columbia Falls / West Glacier, MT',
      drivingDistance: '~150 miles RT (Columbia Falls to Many Glacier via Hwy 2)',
      drivingTime: '~2.5 hours each way',
      weather: { high: 17, low: 3, conditions: 'Cool mountain weather' },
      activities: [
        {
          id: 'a19-1',
          name: 'Drive to Many Glacier',
          description: 'Drive to the east side of Glacier via Hwy 2 (south of the park) to the Many Glacier entrance. About 2.5 hours from Columbia Falls. Many Glacier is widely considered the most spectacular valley in the park.',
          duration: '2.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Leave early — it\'s a long drive', 'Route: Columbia Falls → Hwy 2 east → Hwy 89 north → Many Glacier Road', 'Note: construction at Many Glacier in 2026 (parking, water system) — expect some disruption', 'Fill gas before entering — no gas in Many Glacier']
        },
        {
          id: 'a19-2',
          name: 'Swiftcurrent Lake Area',
          description: 'Explore the Swiftcurrent Lake area with flat trails and a stunning mountain backdrop. The Many Glacier Hotel sits on the lakeshore with incredible views.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Many Glacier Hotel is worth a visit for the views', 'Flat trails around the lakeshore', 'Mountain backdrop is dramatic — bring the camera', 'Watch for moose along Swiftcurrent Creek']
        },
        {
          id: 'a19-3',
          name: 'Boat Tour on Swiftcurrent Lake',
          description: 'Scenic boat tour on Swiftcurrent Lake operated by Glacier Park Boat Company. Check if running by June 1 — season may not have started yet.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Glacier Park Boat Company operates the tours', 'Check schedule — may not be running by June 1', 'If not running, the lakeshore walk is just as beautiful', 'Mountain reflections on the lake are incredible']
        },
        {
          id: 'a19-4',
          name: 'Iceberg Lake Trail (first 1-2 miles)',
          description: 'The full Iceberg Lake trail is 9.6mi RT, but the first 1-2 miles are flat and scenic with wildflower meadows and mountain views. Walk as far as comfortable, then turn back. Great for all fitness levels as a partial hike.',
          duration: '1-1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '2-4 miles RT (partial)',
          tips: ['First 1-2 miles are flat and scenic — turn back at Mom\'s comfort level', 'Wildflower meadows with mountain backdrop', 'Full trail to Iceberg Lake is 9.6mi RT — not for this trip', 'Carry bear spray — grizzly country', 'Trail may have snow patches in early June']
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
        notes: 'Third night.'
      },
      notes: ['FULL DAY — long drive to Many Glacier (~2.5hrs each way)', 'Many Glacier is worth the drive — most spectacular valley in the park', 'Construction at Many Glacier in 2026 (parking, water system)', 'Going-to-the-Sun Road NOT fully open — Logan Pass closed until ~mid-June', 'No vehicle reservations needed for 2026', 'Park entrance: $35/vehicle or use America the Beautiful pass'],
      budgetBreakdown: { accommodation: 150, food: 70, activities: 20, gas: 30, total: 270 }
    },

    // ============================================================
    // DAY 20: GLACIER — EAST SIDE / ST. MARY + REST
    // ============================================================
    {
      id: 'd20',
      dayNumber: 20,
      date: '2026-06-05',
      title: 'Glacier East Side — St. Mary & Rest',
      summary: 'GTSR east side drive, St. Mary Falls, boat tour, afternoon rest',
      location: locations.find(l => l.id === 'glacier')!,
      overnight: 'Columbia Falls / West Glacier, MT',
      weather: { high: 17, low: 3, conditions: 'Cool' },
      activities: [
        {
          id: 'a20-1',
          name: 'Drive to St. Mary Entrance (East Side)',
          description: 'Drive to the St. Mary entrance on the east side of the park. The GTSR east side from St. Mary to Jackson Glacier Overlook should be open.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Route: Columbia Falls → Hwy 2 east → Hwy 89 north to St. Mary', 'About 1.5 hours from Columbia Falls']
        },
        {
          id: 'a20-2',
          name: 'GTSR East Side Drive',
          description: 'Drive the open section of Going-to-the-Sun Road from St. Mary entrance. Stop at Rising Sun, Wild Goose Island overlook (iconic photo spot), and Sun Point.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Wild Goose Island overlook is an iconic Glacier photo', 'Rising Sun has a small store and restaurant', 'Sun Point has a short walk to a St. Mary Lake viewpoint', 'Road open from St. Mary to Jackson Glacier Overlook area']
        },
        {
          id: 'a20-3',
          name: 'St. Mary Falls Hike',
          description: 'Easy 1.6mi round trip hike to a beautiful waterfall. One of the most rewarding short hikes in the park.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '1.6 miles RT',
          elevation: { gain: 200 },
          tips: ['Trailhead is at the St. Mary Falls shuttle stop on GTSR', 'Mostly downhill to the falls, uphill on the return', 'Beautiful cascading waterfall', 'Can continue to Virginia Falls (+0.6mi) if feeling good']
        },
        {
          id: 'a20-4',
          name: 'Boat Tour on St. Mary Lake (optional)',
          description: 'Scenic boat tour on St. Mary Lake departing from Rising Sun. Check if running by early June.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Glacier Park Boat Company operates the tours', 'Departures from Rising Sun dock', 'Check schedule — may not be running by June 2', 'St. Mary Lake is the second-largest lake in the park']
        },
        {
          id: 'a20-5',
          name: 'Afternoon Rest & Leisure',
          description: 'Head back to Columbia Falls for a quiet afternoon. Rest at the condo, or explore local shops and coffee.',
          duration: '3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Montana Coffee Traders for great local coffee', 'Backslope Brewing in Columbia Falls', 'Pack and prep for drive to Missoula tomorrow']
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
        notes: 'Fourth and final night at Glacier.'
      },
      notes: ['REST DAY vibe — take it easy after 3 active Glacier days', 'St. Mary Falls is short and easy (1.6mi RT)', 'Wild Goose Island overlook is a must-photo', 'WILDLIFE: Goat Lick Overlook on Hwy 2 (30min east of West Glacier) — mountain goats at dawn/dusk', 'Bears common near Avalanche Creek — always carry bear spray'],
      budgetBreakdown: { accommodation: 150, food: 70, activities: 20, gas: 25, total: 265 }
    },

    // ============================================================
    // DAY 21: GLACIER → MISSOULA
    // ============================================================
    {
      id: 'd21',
      dayNumber: 21,
      date: '2026-06-05',
      title: 'Glacier → Missoula',
      summary: 'Goat Lick overlook, drive south via US-93, evening in Missoula, return rental car',
      location: locations.find(l => l.id === 'missoula')!,
      overnight: 'Missoula, MT (near MSO airport)',
      drivingDistance: '~150 miles (via Hwy 2 + US-93)',
      drivingTime: '~3 hours',
      weather: { high: 22, low: 7, conditions: 'Pleasant' },
      activities: [
        {
          id: 'a21-1',
          name: 'Morning at Glacier (optional last look)',
          description: 'One more quick visit to the park if you want. Or just pack up and head south.',
          duration: '1-2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
        },
        {
          id: 'a21-2',
          name: 'Goat Lick Overlook (Hwy 2)',
          description: 'Stop at the Goat Lick overlook on Hwy 2 (between West Glacier and Essex). Mountain goats are frequently visible from this highway pulloff, licking mineral deposits on the exposed rock face.',
          duration: '20 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Right off Hwy 2 — easy pulloff', 'Mountain goats visible on the rock face', 'Bring binoculars for a closer look', 'Best in spring/early summer when goats crave minerals']
        },
        {
          id: 'a21-3',
          name: 'Drive to Missoula',
          description: 'Head south on US-93 through the Flathead Valley and Mission Valley. Glacier to Missoula is about 3 hours. Beautiful ranch and mountain scenery.',
          duration: '3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Stop at Flathead Lake for one last look', 'National Bison Range is near the route (check if open)', 'Return rental car at MSO airport']
        },
        {
          id: 'a21-4',
          name: 'Explore Downtown Missoula',
          description: 'Walk the Hip Strip and downtown. Great breweries, bookshops (it\'s a college town), and restaurants.',
          duration: '2-3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Caras Park along the Clark Fork River', 'Shakespeare & Co bookshop', 'Biga Pizza or Scotty\'s Table for dinner']
        }
      ],
      accommodation: {
        id: 'acc21a',
        name: 'Fairfield by Marriott Missoula Airport',
        type: 'hotel',
        priceRange: '$97-130',
        pricePerNight: 110,
        reviewRating: 4.0,
        reviewSource: 'TripAdvisor (4.0/5, #18 of 40), Booking.com (8.1/10)',
        address: 'Near MSO airport',
        website: 'https://www.marriott.com/en-us/hotels/msofi-fairfield-inn-and-suites-missoula-airport/overview/',
        amenities: ['Free breakfast', 'Free airport shuttle', 'Indoor pool', 'Free parking', 'Free WiFi'],
        seniorFriendly: true,
        recommended: true,
        notes: '2 queen beds. Free breakfast before flight. Free airport shuttle (5min to MSO). No-brainer for last night.'
      },
      accommodationOptions: [
        {
          id: 'acc21a',
          name: 'Fairfield by Marriott Missoula Airport',
          type: 'hotel',
          priceRange: '$97-130',
          pricePerNight: 110,
          reviewRating: 4.0,
          reviewSource: 'TripAdvisor (#18 of 40)',
          website: 'https://www.marriott.com/en-us/hotels/msofi-fairfield-inn-and-suites-missoula-airport/overview/',
          amenities: ['Free breakfast', 'Airport shuttle', 'Indoor pool', 'Free parking'],
          seniorFriendly: true,
          recommended: true,
          notes: '2 queen beds. Free breakfast + free airport shuttle. Best for last night.'
        },
        {
          id: 'acc21b',
          name: 'My Place Hotel Missoula',
          type: 'hotel',
          priceRange: '$85-110',
          pricePerNight: 95,
          reviewRating: 4.0,
          reviewSource: 'TripAdvisor (4.0/5, #17 of 40)',
          reviewCount: 277,
          website: 'https://www.myplacehotels.com/locations/my-place-hotel-missoula',
          amenities: ['Full kitchen', 'Free parking', 'Free WiFi', '24hr laundry'],
          seniorFriendly: true,
          notes: '2 queen beds. Full kitchen. No breakfast or shuttle. Budget pick — 10min to airport.'
        },
        {
          id: 'acc21c',
          name: 'La Quinta Inn Missoula',
          type: 'hotel',
          priceRange: '$95-150',
          pricePerNight: 110,
          reviewRating: 3.8,
          reviewSource: 'TripAdvisor',
          address: '5059 N Reserve St, Missoula',
          website: 'https://www.wyndhamhotels.com/laquinta/missoula-montana/la-quinta-inn-missoula/overview',
          amenities: ['Free breakfast', 'Indoor pool', 'Free parking', 'Pet-friendly'],
          seniorFriendly: true,
          notes: '2 queen beds. Free breakfast and pool. 10min to airport.'
        }
      ],
      notes: ['DRIVING + LIGHT DAY', 'Goat Lick overlook on Hwy 2 — mountain goats visible from highway pulloff', 'Glacier to Missoula is ~3hrs via US-93', 'Return rental car at MSO', 'Last evening — nice dinner to celebrate the trip!'],
      budgetBreakdown: { accommodation: 110, food: 80, activities: 0, gas: 30, total: 220 }
    },

    // ============================================================
    // DAY 22: FLY HOME
    // ============================================================
    {
      id: 'd22',
      dayNumber: 22,
      date: '2026-06-05',
      title: 'Fly Home from Missoula',
      summary: 'Breakfast, airport shuttle, fly home — trip complete!',
      location: locations.find(l => l.id === 'missoula')!,
      overnight: 'Home!',
      weather: { high: 22, low: 7, conditions: 'Pleasant' },
      activities: [
        {
          id: 'a22-1',
          name: 'Hotel Breakfast & Pack Up',
          description: 'Enjoy the free breakfast. Pack up and check out.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Take advantage of the free breakfast', 'Airport shuttle from hotel']
        },
        {
          id: 'a22-2',
          name: 'Fly Home',
          description: 'Colin: MSO → SEA. Mom: MSO → connecting hub → YYZ.',
          duration: 'All day',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          tips: ['Request wheelchair assist for Mom at check-in', 'MSO is a small, easy airport', 'Arrive 1.5hrs before departure']
        }
      ],
      notes: ['DEPARTURE DAY', 'Request wheelchair assistance for Mom', 'What an incredible trip!'],
      budgetBreakdown: { accommodation: 0, food: 30, activities: 0, gas: 0, total: 30 }
    }
  ],
  totalBudget: {
    flights: 999,
    carRental: 1200,
    accommodations: 2675,
    food: 1500,
    activities: 400,
    gas: 300,
    misc: 941,
    total: 8015
  },
  costBreakdown: {
    flights: {
      colinOutbound: { description: 'SEA→PHX Alaska', price: 90 },
      momOutbound: { description: 'YYZ→PHX Porter', price: 220 },
      colinReturn: { description: 'MSO→SEA Alaska', price: 120 },
      momReturn: { description: 'MSO→YYZ United', price: 350 },
      total: 780,
    },
    carRental: {
      dailyRate: 40,
      days: 19,
      dropoffFee: 200,
      total: 960,
      notes: 'PHX→MSO one-way. Book via Costco Travel or AutoSlash.',
    },
    passengerAssistance: {
      cost: 0,
      notes: 'Free wheelchair/mobility assistance on all airlines',
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
      notes: 'May 24-27 overlaps Memorial Day weekend (May 23-25). Jackson is a resort town — prices spike. Book ASAP.'
    },
    {
      item: 'Car Rental PHX→MSO One-Way',
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
