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
  tagline: "21 days, 6 national parks, Phoenix to Glacier, one unforgettable journey with Mom",
  startDate: '2026-05-15',
  endDate: '2026-06-04',
  travelers: [
    { id: 'colin', name: 'Colin', origin: 'SEA', originCity: 'Seattle, WA', color: '#3b82f6', notes: 'Flying SEA → PHX' },
    { id: 'mom', name: 'Mom', origin: 'YYZ', originCity: 'Toronto, ON', color: '#ec4899', notes: 'Active 80yo, walks a lot, can do short hikes. Flying YYZ → PHX. PASSENGER ASSISTANCE: Request wheelchair/mobility assistance 48hrs before each flight.' },
    { id: 'wife', name: 'Wife', origin: 'SEA', originCity: 'Seattle, WA', color: '#8b5cf6', notes: 'Joining for Glacier weekend (May 30-31). Flying SEA → FCA or MSO.' }
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
      days: [6, 7, 8, 9],
      startDay: 6,
      endDay: 9,
      color: '#f59e0b',
      highlights: ['Monument Valley drive-by', 'Arches NP', 'Rest day', 'Canyonlands']
    },
    {
      id: 'wyoming',
      name: 'Wyoming',
      summary: 'Grand Teton and Yellowstone',
      days: [10, 11, 12, 13, 14, 15],
      startDay: 10,
      endDay: 15,
      color: '#22c55e',
      highlights: ['Grand Teton (3 days)', 'Yellowstone geysers', 'Yellowstone canyon & wildlife']
    },
    {
      id: 'montana',
      name: 'Montana & Glacier',
      summary: 'Glacier National Park with wife joining for the weekend',
      days: [16, 17, 18, 19, 20, 21],
      startDay: 16,
      endDay: 21,
      color: '#06b6d4',
      highlights: ['Going-to-the-Sun Road', 'Lake McDonald', 'Wife joins for weekend', 'Fly home from MSO']
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
      date: '2026-06-04',
      airline: 'Alaska Airlines',
      price: 120,
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
      date: '2026-06-04',
      airline: 'United / Alaska',
      price: 350,
      notes: 'MSO→connecting hub→YYZ. Request wheelchair/passenger assistance. United has MSO→DEN→YYZ options.'
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
          notes: 'Free checked bags and flexible rebooking.'
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
    notes: 'One-way compact AWD SUV. PHX to MSO drop-off. Book via Costco Travel or AutoSlash. AWD essential for mountain roads. Target $20-50/day. AARP/AAA discounts available.'
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
      weather: { high: 100, low: 73, conditions: 'Hot and sunny — stay by the pool!' },
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
      weather: { high: 78, low: 45, conditions: 'Sunny, pleasant at rim elevation (7,000 ft)' },
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
          description: 'Your first Grand Canyon views! Short accessible walk to iconic viewpoint.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Accessible viewpoints', 'Visitor Center nearby', 'Prepare to be amazed!']
        },
        {
          id: 'a2-4',
          name: 'Sunset at Hopi Point',
          description: 'One of the best sunset spots on the South Rim. Take the free shuttle.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Shuttle runs regularly', 'Bring layers — cool after sunset', 'Arrive 30 min early']
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
          name: 'Grand Canyon Plaza Hotel',
          type: 'hotel',
          priceRange: '$130-180',
          pricePerNight: 150,
          reviewRating: 3.5,
          reviewSource: 'TripAdvisor (3.5/5), HotelsCombined (8.0/10)',
          reviewCount: 5340,
          address: 'Tusayan, AZ',
          website: 'https://www.grandcanyonplaza.com/',
          amenities: ['Hot tub', 'Pool (seasonal)', 'Restaurant', 'Free WiFi'],
          seniorFriendly: true,
          notes: 'Budget fallback. Slightly dated but clean and spacious. 2 queen beds.'
        }
      ],
      notes: ['DRIVING DAY — light activities', 'GC elevation 7,000ft — may feel altitude', 'Pack layers for evening'],
      budgetBreakdown: { accommodation: 165, food: 80, activities: 35, gas: 50, total: 330 }
    },

    // ============================================================
    // DAY 3: GRAND CANYON FULL DAY
    // ============================================================
    {
      id: 'd3',
      dayNumber: 3,
      date: '2026-05-17',
      title: 'Grand Canyon Full Day',
      summary: 'Rim walks, overlooks, take your time with the views',
      location: locations.find(l => l.id === 'gc')!,
      overnight: 'Grand Canyon (Tusayan)',
      weather: { high: 78, low: 45, conditions: 'Sunny, pleasant' },
      activities: [
        {
          id: 'a3-1',
          name: 'Rim Trail Walk',
          description: 'Walk sections of the paved Rim Trail between viewpoints. Flat and accessible.',
          duration: '2.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '2.8 miles (Mather Point to Bright Angel Lodge)',
          elevation: { gain: 100, highest: 7120, lowest: 7000 },
          tips: ['Paved and wheelchair accessible', 'Free shuttle stops at viewpoints', 'Benches throughout']
        },
        {
          id: 'a3-2',
          name: 'Lunch at El Tovar or Bright Angel Lodge',
          description: 'Historic lodges with canyon views. El Tovar is upscale, Bright Angel more casual.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['El Tovar may need reservation for dinner', 'Bright Angel has good burgers']
        },
        {
          id: 'a3-3',
          name: 'Hermit Road Scenic Drive',
          description: 'Take the free shuttle along Hermit Road to multiple overlooks. Best in afternoon light.',
          duration: '2-3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Free shuttle only (no private cars in summer)', 'Get off at any stop, catch next shuttle', 'The Abyss and Pima Point are favorites']
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
      notes: ['HIKING DAY — 2.8mi Rim Trail (easy, paved)', 'Max 3.5mi today', 'Hydrate at altitude'],
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
      weather: { high: 88, low: 58, conditions: 'Sunny, warm in the desert' },
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
          tips: ['$10 parking fee', 'Go late afternoon for best light', 'Stairs with handrails', 'Bring water — exposed and hot']
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
      weather: { high: 88, low: 58, conditions: 'Sunny, warm' },
      activities: [
        {
          id: 'a5-1',
          name: 'Upper Antelope Canyon Tour',
          description: 'Guided Navajo tour through the famous slot canyon. Light beams in late morning are magical.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          cost: '$65-80 per person',
          tips: ['Book 2-3 months ahead', '10am-12pm for best light beams', 'Sandy ground — wear closed shoes', 'Photography tour option if interested'],
          reservationUrl: 'https://navajonationparks.org/tribal-parks/antelope-canyon/'
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
      weather: { high: 90, low: 60, conditions: 'Sunny, hot in the desert' },
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
          tips: ['Visitor center has restrooms and snacks', 'Views from parking lot are incredible', 'Full Navajo guided tour optional ($65, 2.5hrs)']
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
          priceRange: '$150-230',
          pricePerNight: 175,
          reviewRating: 4.7,
          reviewSource: 'Booking.com (9.3/10)',
          address: '1551 N Highway 191, Moab, UT',
          website: 'https://www.aarchwayinn.com/',
          bookingUrl: 'https://www.kayak.com/Moab-Hotels-Aarchway-Inn.97848.ksp',
          amenities: ['Pool', 'Hot tub', 'Free breakfast', 'Free parking', 'EV charger'],
          seniorFriendly: true,
          notes: 'Closest to Arches (2mi). Free hot breakfast saves $30+/day. May push budget in peak season.'
        },
        {
          id: 'acc6c',
          name: 'Airbnb 2BR Condo in Moab',
          type: 'airbnb',
          priceRange: '$120-180',
          pricePerNight: 145,
          reviewRating: 4.8,
          reviewSource: 'Airbnb',
          address: 'Downtown Moab or South Valley',
          bookingUrl: 'https://www.airbnb.com/moab-ut/stays',
          amenities: ['2 bedrooms', 'Full kitchen', 'Pool (complex)', 'Free parking', 'Washer/dryer'],
          seniorFriendly: true,
          notes: '3 nights with a kitchen saves serious money. Search: 2BR, May 20-23, pool. Weekly discounts common.'
        }
      ],
      notes: ['DRIVING DAY — no hiking', 'Monument Valley is an optional stop', 'Rest day for the body'],
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
      weather: { high: 90, low: 58, conditions: 'Sunny, hot — go early' },
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
          tips: ['Lower viewpoint is flat and accessible', 'Bring binoculars for a closer look', 'Full hike to the arch is 3mi with 480ft gain — not recommended for this trip']
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
      notes: ['HIKING DAY — ~3mi total (easy terrain)', 'Timed entry reservation required for Arches — book at recreation.gov', 'Start early to beat heat', 'Bring 2L water per person'],
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
      weather: { high: 90, low: 58, conditions: 'Sunny, hot' },
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
          tips: ['30-min drive from Moab', 'View from the car/parking lot — no hiking needed', 'Arrive 45min before sunset']
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
      weather: { high: 80, low: 55, conditions: 'Clear and warm' },
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
          tips: ['Sunrise ~6am in late May', 'Only if you\'re up early', 'Can skip and just do Grand View instead']
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
          amenities: ['Free breakfast', 'Free parking', 'Free WiFi'],
          seniorFriendly: true,
          notes: 'Budget fallback. 2 queen beds. Reviews are mixed — Crystal Inn is better for $10 more.'
        }
      ],
      notes: ['Light hiking AM + driving PM', 'Canyonlands overlooks are easy', 'Transit night in SLC'],
      budgetBreakdown: { accommodation: 100, food: 70, activities: 15, gas: 55, total: 240 }
    },

    // ============================================================
    // DAY 10: SLC → JACKSON / GRAND TETON
    // ============================================================
    {
      id: 'd10',
      dayNumber: 10,
      date: '2026-05-24',
      title: 'Salt Lake City → Jackson / Grand Teton',
      summary: 'Drive north to Jackson Hole, afternoon arrival in Teton country',
      location: locations.find(l => l.id === 'jackson')!,
      overnight: 'Jackson, WY',
      drivingDistance: '280 miles',
      drivingTime: '5 hours',
      weather: { high: 65, low: 38, conditions: 'Cooler mountain weather, partly cloudy' },
      activities: [
        {
          id: 'a10-1',
          name: 'Drive SLC to Jackson',
          description: 'Scenic drive north through Idaho farmland, then over Teton Pass into Jackson Hole. Mountain views emerge gradually.',
          duration: '5 hours (with stops)',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Stop in Pocatello or Idaho Falls for lunch', 'Teton Pass is dramatic — pullover for photos', 'Alt route via Star Valley is easier grades']
        },
        {
          id: 'a10-2',
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
        id: 'acc10a',
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
          id: 'acc10a',
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
          notes: '2 queen beds. Best budget option in Jackson. 5min from Teton entrance.'
        },
        {
          id: 'acc10b',
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
          notes: 'Charming log cabins. 2 queen beds. 40-45min to park via Teton Pass. Cheaper than Jackson.'
        },
        {
          id: 'acc10c',
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
      notes: ['DRIVING DAY — no hiking', 'Jackson is expensive — Driggs/Victor ID is cheaper alt', 'Cooler temps — bring layers'],
      budgetBreakdown: { accommodation: 130, food: 80, activities: 0, gas: 55, total: 265 }
    },

    // ============================================================
    // DAY 11: GRAND TETON DAY 1 — SCENIC DRIVING
    // ============================================================
    {
      id: 'd11',
      dayNumber: 11,
      date: '2026-05-25',
      title: 'Grand Teton Day 1 — Scenic Driving & Overlooks',
      summary: 'Teton Park Road, Jenny Lake, iconic mountain views',
      location: locations.find(l => l.id === 'teton')!,
      overnight: 'Jackson, WY',
      weather: { high: 65, low: 38, conditions: 'Clear skies, crisp mountain air' },
      activities: [
        {
          id: 'a11-1',
          name: 'Teton Park Road Scenic Drive',
          description: 'Drive the inner park road with pulloffs at every major viewpoint. The Tetons rise dramatically from the valley floor.',
          duration: '3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Stop at every pulloff — each view is different', 'Mormon Row is a classic photo spot', 'Snake River Overlook (Ansel Adams\' famous shot)']
        },
        {
          id: 'a11-2',
          name: 'Jenny Lake Overlook',
          description: 'Drive to Jenny Lake and enjoy the crystal-clear water with Teton reflections.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Visitor center has good info', 'Short flat walk along the lakeshore', 'Boat shuttle runs across lake (optional)']
        },
        {
          id: 'a11-3',
          name: 'Craig Thomas Visitor Center',
          description: 'Beautiful modern visitor center with exhibits on Teton geology and wildlife.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
        },
        {
          id: 'a11-4',
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
        id: 'acc10a',
        name: 'Elk Refuge Inn (same as previous night)',
        type: 'inn',
        priceRange: '$110-150',
        pricePerNight: 130,
        seniorFriendly: true,
        recommended: true,
        notes: 'Second night.'
      },
      notes: ['LIGHT DAY — driving + short walks', 'No real hiking today', 'Save energy for hiking day tomorrow'],
      budgetBreakdown: { accommodation: 130, food: 80, activities: 15, gas: 15, total: 240 }
    },

    // ============================================================
    // DAY 12: GRAND TETON DAY 2 — HIKING & LAKES
    // ============================================================
    {
      id: 'd12',
      dayNumber: 12,
      date: '2026-05-26',
      title: 'Grand Teton Day 2 — Hiking & Lakes',
      summary: 'String Lake and Leigh Lake, mountain reflections, max 3.5mi',
      location: locations.find(l => l.id === 'teton')!,
      overnight: 'Jackson, WY',
      weather: { high: 65, low: 38, conditions: 'Clear, cool mornings' },
      activities: [
        {
          id: 'a12-1',
          name: 'String Lake Trail',
          description: 'Gentle flat trail along the lakeshore with mountain reflections. One of the most accessible hikes in the Tetons.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '3.5 miles (out and back or partial loop)',
          elevation: { gain: 50 },
          tips: ['Flat and sandy trail', 'Can turn around at any point', 'Morning reflections are best', 'Carry bear spray']
        },
        {
          id: 'a12-2',
          name: 'Picnic Lunch at String Lake',
          description: 'Picnic area at the String Lake trailhead. Bring lunch from town or pack from the hotel.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Picnic tables available', 'Pack out all trash', 'Gorgeous setting for lunch']
        },
        {
          id: 'a12-3',
          name: 'Afternoon Rest',
          description: 'Head back to Jackson for a rest. Optional browse of the National Museum of Wildlife Art.',
          duration: '2-3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Museum is on the hill north of town', 'Or just rest at the hotel']
        }
      ],
      accommodation: {
        id: 'acc10a',
        name: 'Elk Refuge Inn (same as previous night)',
        type: 'inn',
        priceRange: '$110-150',
        pricePerNight: 130,
        seniorFriendly: true,
        recommended: true,
        notes: 'Third night.'
      },
      notes: ['HIKING DAY — 3.5mi max (easy, flat)', 'String Lake is the gentlest trail in the Tetons', 'Carry bear spray'],
      budgetBreakdown: { accommodation: 130, food: 70, activities: 0, gas: 10, total: 210 }
    },

    // ============================================================
    // DAY 13: GRAND TETON DAY 3 — WILDLIFE & REST
    // ============================================================
    {
      id: 'd13',
      dayNumber: 13,
      date: '2026-05-27',
      title: 'Grand Teton Day 3 — Wildlife Dawn & Rest',
      summary: 'Early wildlife spotting, lazy afternoon, rest before Yellowstone',
      location: locations.find(l => l.id === 'teton')!,
      overnight: 'Jackson, WY',
      weather: { high: 65, low: 38, conditions: 'Clear, cool' },
      activities: [
        {
          id: 'a13-1',
          name: 'Dawn Wildlife Drive',
          description: 'Drive through the park at dawn for best wildlife viewing. Moose, elk, bison, and maybe bears. No hiking — just drive and watch.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Leave by 6am for best sightings', 'Oxbow Bend for moose', 'Bring binoculars', 'Stay in the car — watch from a safe distance']
        },
        {
          id: 'a13-2',
          name: 'Breakfast in Jackson',
          description: 'Return to town for a nice breakfast.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Persephone Bakery', 'The Bunnery for classic breakfast']
        },
        {
          id: 'a13-3',
          name: 'Rest Afternoon',
          description: 'Full afternoon off. Read, nap, walk around town. Recharge before Yellowstone tomorrow.',
          duration: '4-5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Jackson has great bookshops', 'Valley Bookstore is lovely']
        }
      ],
      accommodation: {
        id: 'acc10a',
        name: 'Elk Refuge Inn (same as previous night)',
        type: 'inn',
        priceRange: '$110-150',
        pricePerNight: 130,
        seniorFriendly: true,
        recommended: true,
        notes: 'Fourth and final night in Jackson.'
      },
      notes: ['REST DAY — no hiking', 'Wildlife drive is from the car', 'Recharge for Yellowstone'],
      budgetBreakdown: { accommodation: 130, food: 80, activities: 0, gas: 10, total: 220 }
    },

    // ============================================================
    // DAY 14: TETON → YELLOWSTONE DAY 1
    // ============================================================
    {
      id: 'd14',
      dayNumber: 14,
      date: '2026-05-28',
      title: 'Yellowstone Day 1 — Geysers & Hot Springs',
      summary: 'Old Faithful, Grand Prismatic Spring, geyser basins on boardwalks',
      location: locations.find(l => l.id === 'yellowstone')!,
      overnight: 'West Yellowstone, MT',
      drivingDistance: '60 miles (Jackson to Old Faithful)',
      drivingTime: '1.5 hours',
      weather: { high: 60, low: 32, conditions: 'Cool, variable — can change fast at elevation' },
      activities: [
        {
          id: 'a14-1',
          name: 'Drive Jackson to Old Faithful',
          description: 'Drive through Grand Teton into Yellowstone via the south entrance. Watch for bison on the road.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['South entrance may have lines', 'Bison frequently block the road — be patient!', 'Lewis Lake is a nice stop']
        },
        {
          id: 'a14-2',
          name: 'Old Faithful',
          description: 'Watch the world\'s most famous geyser erupt. Eruptions every ~90 minutes, predicted times posted at visitor center.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '0.5 miles (boardwalk loop)',
          tips: ['Check eruption prediction at visitor center', 'Arrive 30min early for good seats', 'Old Faithful Inn lobby is worth seeing']
        },
        {
          id: 'a14-3',
          name: 'Grand Prismatic Spring',
          description: 'The largest hot spring in the US, famous for its rainbow colors. Boardwalk loop.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '0.8 miles (boardwalk)',
          tips: ['Midway Geyser Basin parking fills up — go early or late', 'Colors best on sunny days', 'Grand Prismatic Overlook trail is 1.6mi — skip for this trip']
        },
        {
          id: 'a14-4',
          name: 'Biscuit Basin & Black Sand Basin',
          description: 'Two small but beautiful geyser basins near Old Faithful. Short boardwalks.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '0.5 miles each',
          tips: ['Less crowded than Old Faithful area', 'Sapphire Pool in Biscuit Basin is stunning']
        }
      ],
      accommodation: {
        id: 'acc14a',
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
          id: 'acc14a',
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
          id: 'acc14b',
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
          id: 'acc14c',
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
      notes: ['LIGHT DAY — all boardwalk walking (~2mi total)', 'Yellowstone boardwalks are flat and accessible', 'Dress in layers — Yellowstone is cold!'],
      budgetBreakdown: { accommodation: 140, food: 70, activities: 35, gas: 20, total: 265 }
    },

    // ============================================================
    // DAY 15: YELLOWSTONE DAY 2 → BOZEMAN
    // ============================================================
    {
      id: 'd15',
      dayNumber: 15,
      date: '2026-05-29',
      title: 'Yellowstone Day 2 → Bozeman',
      summary: 'Canyon, wildlife, Lamar Valley morning, then drive to Bozeman',
      location: locations.find(l => l.id === 'bozeman')!,
      overnight: 'Bozeman, MT',
      drivingDistance: '90 miles (West Yellowstone to Bozeman)',
      drivingTime: '1.5 hours',
      weather: { high: 60, low: 35, conditions: 'Cool, variable' },
      activities: [
        {
          id: 'a15-1',
          name: 'Grand Canyon of the Yellowstone',
          description: 'See the dramatic yellow canyon and Lower Falls (308ft). Multiple viewpoints, some accessible.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '1 mile (between viewpoints)',
          tips: ['Artist Point is the most iconic viewpoint', 'Uncle Tom\'s Trail has 300+ stairs — skip it', 'Upper Falls viewpoint is very easy']
        },
        {
          id: 'a15-2',
          name: 'Hayden Valley Wildlife Watching',
          description: 'Drive through Hayden Valley between Canyon and Yellowstone Lake. Prime bison and sometimes grizzly territory.',
          duration: '1-1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Stay in/near vehicle', 'Binoculars essential', 'Morning is best for activity', 'Pull fully off road for wildlife stops']
        },
        {
          id: 'a15-3',
          name: 'Drive to Bozeman',
          description: 'Head north from West Yellowstone to Bozeman via US-191 through the Gallatin Canyon. Scenic river road.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Beautiful drive along the Gallatin River', 'Arrive Bozeman by mid-afternoon']
        }
      ],
      accommodation: {
        id: 'acc15a',
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
          id: 'acc15a',
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
          id: 'acc15b',
          name: 'Comfort Inn Bozeman',
          type: 'hotel',
          priceRange: '$99-108',
          pricePerNight: 100,
          reviewRating: 3.9,
          reviewSource: 'TripAdvisor (3.9/5, #26 of 40)',
          reviewCount: 291,
          address: '1370 N 7th Ave, Bozeman',
          website: 'https://www.choicehotels.com/montana/bozeman/comfort-inn-hotels/mt029',
          amenities: ['Free breakfast', 'Indoor pool', 'Hot tub', 'Free parking'],
          seniorFriendly: true,
          notes: '2 queen beds. Cheapest reliable option. Walmart next door for supplies.'
        },
        {
          id: 'acc15c',
          name: 'My Place Hotel Bozeman',
          type: 'hotel',
          priceRange: '$71-129',
          pricePerNight: 105,
          reviewRating: 4.0,
          reviewSource: 'TripAdvisor',
          website: 'https://www.myplacehotels.com/locations/my-place-hotel-bozeman-mt',
          amenities: ['Full kitchen', 'Free parking', 'Free WiFi', '24hr laundry'],
          seniorFriendly: true,
          notes: '2 queen beds + full kitchen. Extended-stay style. No breakfast but you can cook. Budget pick.'
        }
      ],
      notes: ['Yellowstone AM + driving PM', 'Bozeman is a transit stop for Glacier', 'Fuel up for 4.5hr drive tomorrow'],
      budgetBreakdown: { accommodation: 130, food: 70, activities: 0, gas: 25, total: 225 }
    },

    // ============================================================
    // DAY 16: BOZEMAN → GLACIER (WIFE ARRIVES!)
    // ============================================================
    {
      id: 'd16',
      dayNumber: 16,
      date: '2026-05-30',
      title: 'Bozeman → Glacier — Wife Arrives!',
      summary: 'Drive to Glacier, wife flies in for the weekend, afternoon exploring',
      location: locations.find(l => l.id === 'glacier')!,
      overnight: 'Columbia Falls / West Glacier, MT',
      drivingDistance: '340 miles',
      drivingTime: '4.5 hours',
      weather: { high: 62, low: 38, conditions: 'Cool, mountain weather' },
      activities: [
        {
          id: 'a16-1',
          name: 'Drive Bozeman to Glacier',
          description: 'Drive west on I-90 to Missoula, then north on US-93. Beautiful Montana scenery. Stop in Missoula or Polson for lunch.',
          duration: '4.5 hours (with stops)',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Leave by 8am to arrive early afternoon', 'Polson on Flathead Lake is a nice lunch stop', 'Alt route via Helena is similar time']
        },
        {
          id: 'a16-2',
          name: 'Check In & Settle',
          description: 'Arrive at accommodation, get settled. Wife arrives at FCA/MSO — pick up or meet.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Coordinate wife\'s arrival time', 'Stock up on groceries in Columbia Falls']
        },
        {
          id: 'a16-3',
          name: 'Apgar Village & Lake McDonald',
          description: 'Quick afternoon visit to Apgar Village at the foot of Lake McDonald. Crystal clear water, mountain backdrop.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['10min from West Glacier entrance', 'Walk along the lakeshore', 'Gift shop and visitor center', 'Famous colorful rocks on the shore']
        }
      ],
      accommodation: {
        id: 'acc16a',
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
          id: 'acc16a',
          name: 'Meadow Lake Resort & Condos',
          type: 'condo',
          priceRange: '$99-150',
          pricePerNight: 130,
          reviewRating: 4.0,
          reviewSource: 'TripAdvisor (#1 in Columbia Falls)',
          reviewCount: 1147,
          address: 'Columbia Falls, MT',
          website: 'https://meadowlake.com/',
          bookingUrl: 'https://www.kayak.com/Columbia-Falls-Hotels-Meadow-Lake-Resort.83377.ksp',
          amenities: ['2 bedrooms', 'Full kitchen', 'Hot tub', 'Pool', 'Restaurant'],
          seniorFriendly: true,
          recommended: true,
          notes: '2BR condo. Full kitchen, hot tub. 20min to park. Best value for 4 nights with 3 adults.'
        },
        {
          id: 'acc16b',
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
          id: 'acc16c',
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
      notes: ['DRIVING DAY + wife arrival', 'Saturday — wife joins for the weekend!', '3 adults: need 2 bedrooms or 2BR rental'],
      budgetBreakdown: { accommodation: 130, food: 80, activities: 0, gas: 55, total: 265 }
    },

    // ============================================================
    // DAY 17: GLACIER DAY 2 — GOING-TO-THE-SUN ROAD
    // ============================================================
    {
      id: 'd17',
      dayNumber: 17,
      date: '2026-05-31',
      title: 'Glacier — Going-to-the-Sun Road',
      summary: 'Iconic mountain road, Lake McDonald, alpine scenery with wife',
      location: locations.find(l => l.id === 'glacier')!,
      overnight: 'Columbia Falls / West Glacier, MT',
      weather: { high: 62, low: 38, conditions: 'Cool, possible mountain weather' },
      activities: [
        {
          id: 'a17-1',
          name: 'Going-to-the-Sun Road Drive',
          description: 'One of the most scenic roads in North America. Drive as far as the road is open (may not be fully open until late June). Logan Pass if open.',
          duration: '4-5 hours (with stops)',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Vehicle reservation may be required June 1+ — check nps.gov/glac', 'Road may only be open to Avalanche Creek in late May', 'Stop at every pulloff', 'Lake McDonald Lodge is worth a stop']
        },
        {
          id: 'a17-2',
          name: 'Trail of the Cedars',
          description: 'Easy boardwalk loop through ancient cedar forest. Wheelchair accessible.',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '0.7 miles (loop)',
          tips: ['Boardwalk is fully accessible', 'Old-growth cedars and hemlocks', 'Near Avalanche Creek area']
        },
        {
          id: 'a17-3',
          name: 'Lake McDonald Lakeshore Walk',
          description: 'Walk along the colorful rocky shore of Lake McDonald. Crystal clear water with mountain reflections.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '1 mile (casual walk)',
          tips: ['Famous colorful rocks', 'Great for photos', 'Flat walking along the shore']
        }
      ],
      accommodation: {
        id: 'acc16a',
        name: 'Meadow Lake Resort (same as previous night)',
        type: 'condo',
        priceRange: '$99-150',
        pricePerNight: 130,
        seniorFriendly: true,
        recommended: true,
        notes: 'Second night. Sunday — last day with wife.'
      },
      notes: ['MODERATE DAY — driving + ~2mi walking', 'Going-to-the-Sun Road may not be fully open in late May', 'Check road status at nps.gov/glac'],
      budgetBreakdown: { accommodation: 130, food: 80, activities: 35, gas: 15, total: 260 }
    },

    // ============================================================
    // DAY 18: GLACIER DAY 3
    // ============================================================
    {
      id: 'd18',
      dayNumber: 18,
      date: '2026-06-01',
      title: 'Glacier Day 3 — Explore & Discover',
      summary: 'Avalanche Lake or Many Glacier, depending on road conditions',
      location: locations.find(l => l.id === 'glacier')!,
      overnight: 'Columbia Falls / West Glacier, MT',
      weather: { high: 62, low: 38, conditions: 'Cool mountain weather' },
      activities: [
        {
          id: 'a18-1',
          name: 'Avalanche Lake Trail (if conditions allow)',
          description: 'Beautiful hike through old-growth forest to a stunning alpine lake surrounded by waterfalls. The reward-to-effort ratio is incredible.',
          duration: '3 hours',
          difficulty: 'moderate',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '3.4 miles round trip',
          elevation: { gain: 500 },
          tips: ['Trail may have snow patches in early June', 'Carry bear spray', 'Poles helpful for the last section', 'Turn around at any point if too strenuous']
        },
        {
          id: 'a18-2',
          name: 'Lunch & Rest',
          description: 'Return to Columbia Falls or Hungry Horse for lunch and rest.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Backslope Brewing in Columbia Falls', 'Glacier Grill for casual food']
        },
        {
          id: 'a18-3',
          name: 'Flathead Lake Drive (optional)',
          description: 'If energy permits, drive the east shore of Flathead Lake (largest natural freshwater lake west of the Mississippi).',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Cherry orchards along the shore', 'Bigfork is a charming arts village', 'Wild Horse Island is visible from shore']
        }
      ],
      accommodation: {
        id: 'acc16a',
        name: 'Meadow Lake Resort (same as previous night)',
        type: 'condo',
        priceRange: '$99-150',
        pricePerNight: 130,
        seniorFriendly: true,
        recommended: true,
        notes: 'Third night.'
      },
      notes: ['HIKING DAY — Avalanche Lake is 3.4mi with 500ft gain (moderate)', 'Max trail for this trip — go at Mom\'s pace', 'Skip if conditions are bad'],
      budgetBreakdown: { accommodation: 130, food: 70, activities: 0, gas: 15, total: 215 }
    },

    // ============================================================
    // DAY 19: GLACIER REST/BUFFER DAY
    // ============================================================
    {
      id: 'd19',
      dayNumber: 19,
      date: '2026-06-02',
      title: 'Glacier — Rest & Buffer Day',
      summary: 'Rest day, revisit favorites, or explore local towns',
      location: locations.find(l => l.id === 'glacier')!,
      overnight: 'Columbia Falls / West Glacier, MT',
      weather: { high: 62, low: 38, conditions: 'Cool' },
      activities: [
        {
          id: 'a19-1',
          name: 'Sleep In & Lazy Morning',
          description: 'No alarm, cook breakfast in the kitchen, enjoy the mountain air from the deck.',
          duration: '2-3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
        },
        {
          id: 'a19-2',
          name: 'Optional: Revisit Lake McDonald or Apgar',
          description: 'Go back to your favorite spot, take more photos, or just sit by the lake.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
        },
        {
          id: 'a19-3',
          name: 'Columbia Falls / Whitefish Town Walk',
          description: 'Browse local shops, get ice cream, walk the town. Whitefish is 15min north and has a charming downtown.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Whitefish Gallery Nights on Thursdays', 'Great Coffee at Montana Coffee Traders']
        }
      ],
      accommodation: {
        id: 'acc16a',
        name: 'Meadow Lake Resort (same as previous night)',
        type: 'condo',
        priceRange: '$99-150',
        pricePerNight: 130,
        seniorFriendly: true,
        recommended: true,
        notes: 'Fourth and final night at Glacier.'
      },
      notes: ['REST DAY — no hiking', 'Recovery from Avalanche Lake yesterday', 'Pack and prep for drive to Missoula tomorrow'],
      budgetBreakdown: { accommodation: 130, food: 60, activities: 0, gas: 10, total: 200 }
    },

    // ============================================================
    // DAY 20: GLACIER → MISSOULA
    // ============================================================
    {
      id: 'd20',
      dayNumber: 20,
      date: '2026-06-03',
      title: 'Drive to Missoula',
      summary: 'Short drive south, evening in Missoula, return rental car',
      location: locations.find(l => l.id === 'missoula')!,
      overnight: 'Missoula, MT (near MSO airport)',
      drivingDistance: '145 miles',
      drivingTime: '2.5 hours',
      weather: { high: 72, low: 45, conditions: 'Pleasant' },
      activities: [
        {
          id: 'a20-1',
          name: 'Morning at Glacier (optional last look)',
          description: 'One more quick visit to the park if you want. Or just pack up and head south.',
          duration: '1-2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
        },
        {
          id: 'a20-2',
          name: 'Drive to Missoula',
          description: 'Head south on US-93 through the Flathead Valley and Mission Valley. Beautiful ranch and mountain scenery.',
          duration: '2.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Stop at Flathead Lake for one last look', 'National Bison Range is near the route', 'Return rental car at MSO airport']
        },
        {
          id: 'a20-3',
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
        id: 'acc20a',
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
          id: 'acc20a',
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
          id: 'acc20b',
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
          id: 'acc20c',
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
      notes: ['DRIVING + LIGHT DAY', 'Return rental car at MSO', 'Last evening — nice dinner to celebrate the trip!'],
      budgetBreakdown: { accommodation: 110, food: 80, activities: 0, gas: 30, total: 220 }
    },

    // ============================================================
    // DAY 21: FLY HOME
    // ============================================================
    {
      id: 'd21',
      dayNumber: 21,
      date: '2026-06-04',
      title: 'Fly Home from Missoula',
      summary: 'Breakfast, airport shuttle, fly home — trip complete!',
      location: locations.find(l => l.id === 'missoula')!,
      overnight: 'Home!',
      weather: { high: 72, low: 45, conditions: 'Pleasant' },
      activities: [
        {
          id: 'a21-1',
          name: 'Hotel Breakfast & Pack Up',
          description: 'Enjoy the free breakfast. Pack up and check out.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Take advantage of the free breakfast', 'Airport shuttle from hotel']
        },
        {
          id: 'a21-2',
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
    flights: 780,
    carRental: 960,
    accommodations: 2580,
    food: 1470,
    activities: 300,
    gas: 500,
    misc: 300,
    total: 6890
  },
  importantReservations: [
    {
      item: 'Antelope Canyon Tour',
      bookBy: '2026-03-15',
      website: 'https://navajonationparks.org/tribal-parks/antelope-canyon/',
      notes: 'Book 2-3 months ahead. 10am-12pm slot for best light beams.'
    },
    {
      item: 'Arches NP Timed Entry',
      bookBy: '2026-04-01',
      website: 'https://www.recreation.gov/timed-entry/10088426',
      notes: 'Timed entry reservation required April-October. Book on recreation.gov.'
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
      item: 'Glacier Going-to-the-Sun Road Vehicle Reservation',
      bookBy: '2026-05-01',
      website: 'https://www.nps.gov/glac/planyourvisit/gtsrvehiclereservation.htm',
      notes: 'May be required starting June 1. Check for 2026 dates. Road may only be partially open in late May.'
    }
  ]
};
