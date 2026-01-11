import { TripData, Location, DayPlan } from '@/types/trip';

export const locations: Location[] = [
  { id: 'phx', name: 'Phoenix, AZ', lat: 33.4484, lng: -112.0740, type: 'city',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Downtown_Phoenix_Skyline_%286974043971%29.jpg/1280px-Downtown_Phoenix_Skyline_%286974043971%29.jpg',
    infoUrl: 'https://www.visitphoenix.com/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Phoenix+Sky+Harbor+Airport' },
  { id: 'flagstaff', name: 'Flagstaff, AZ', lat: 35.1983, lng: -111.6513, type: 'city',
    image: 'https://images.unsplash.com/photo-1558862107-d49ef2a04d72?w=1200',
    infoUrl: 'https://www.flagstaffarizona.org/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Flagstaff+AZ' },
  { id: 'sedona', name: 'Sedona, AZ', lat: 34.8697, lng: -111.7610, type: 'city',
    image: 'https://images.unsplash.com/photo-1558862107-d49ef2a04d72?w=1200',
    infoUrl: 'https://visitsedona.com/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Sedona+AZ' },
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
  { id: 'bryce', name: 'Bryce Canyon National Park', lat: 37.5930, lng: -112.1871, type: 'national_park',
    image: 'https://images.unsplash.com/photo-1529733905644-3e4a7c9c2f4a?w=1200',
    infoUrl: 'https://www.nps.gov/brca/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Bryce+Canyon+Visitor+Center',
    video: 'https://www.youtube.com/embed/kRqUl2z6yUg' },
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
  { id: 'butte', name: 'Butte, MT', lat: 46.0038, lng: -112.5348, type: 'transit',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Butte+MT' },
  { id: 'helena', name: 'Helena, MT', lat: 46.5927, lng: -112.0361, type: 'city',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200',
    infoUrl: 'https://www.helenamt.com/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Helena+MT' },
  { id: 'missoula', name: 'Missoula, MT', lat: 46.8721, lng: -114.0076, type: 'city',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200',
    infoUrl: 'https://destinationmissoula.org/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Missoula+MT' },
  { id: 'glacier', name: 'Glacier National Park', lat: 48.7596, lng: -113.7870, type: 'national_park',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Glacier_National_Park%2C_Going-to-the-Sun_Road.JPG',
    infoUrl: 'https://www.nps.gov/glac/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Apgar+Visitor+Center+Glacier',
    video: 'https://www.youtube.com/embed/k7R8y7zeVXI' },
  { id: 'whitefish', name: 'Whitefish, MT', lat: 48.4106, lng: -114.3353, type: 'city',
    image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1200',
    infoUrl: 'https://explorewhitefish.com/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Whitefish+MT' },
  { id: 'kalispell', name: 'Kalispell, MT (FCA)', lat: 48.1920, lng: -114.3168, type: 'city',
    image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1200',
    infoUrl: 'https://discoverkalispell.com/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Glacier+Park+International+Airport' },
  { id: 'spokane', name: 'Spokane, WA', lat: 47.6588, lng: -117.4260, type: 'city',
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=1200',
    infoUrl: 'https://www.visitspokane.com/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Spokane+WA' },
  { id: 'seattle', name: 'Seattle, WA (SEA)', lat: 47.6062, lng: -122.3321, type: 'city',
    image: 'https://images.unsplash.com/photo-1502175353174-a7a70e73b362?w=1200',
    infoUrl: 'https://visitseattle.org/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Seattle-Tacoma+International+Airport' },
  { id: 'portland', name: 'Portland, OR (PDX)', lat: 45.5152, lng: -122.6784, type: 'city',
    image: 'https://images.unsplash.com/photo-1507245351038-92eb0d498a15?w=1200',
    infoUrl: 'https://www.travelportland.com/',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Portland+OR' },
];

// Chase Sapphire Reserve Exclusive Tables - Portland restaurants
export const portlandRestaurants = [
  { name: "L'Orange", cuisine: 'Mediterranean', neighborhood: 'Southeast', priceRange: '$$$$',
    chaseReserve: true, notes: 'NYT Best Restaurants 2024. Intimate upstairs setting.',
    reservationUrl: 'https://www.opentable.com/r/lorange-portland' },
  { name: 'Arden', cuisine: 'Pacific Northwest', neighborhood: 'Pearl District', priceRange: '$$$',
    chaseReserve: true, notes: 'Prix fixe $75, 250+ wine list. Seasonal menus.',
    reservationUrl: 'https://www.opentable.com/r/arden-portland' },
  { name: 'Nodoguro', cuisine: 'Japanese Kaiseki', neighborhood: 'Downtown', priceRange: '$$$$',
    chaseReserve: true, notes: '20-course seasonal tasting. Reservations essential.',
    reservationUrl: 'https://www.opentable.com/r/nodoguro-portland' },
  { name: 'Canard', cuisine: 'Wine Bar/American', neighborhood: 'Burnside', priceRange: '$$',
    chaseReserve: true, notes: 'From Le Pigeon team. Casual but excellent.',
    reservationUrl: 'https://www.opentable.com/r/canard-portland' },
  { name: "Oma's Hideaway", cuisine: 'Malaysian/Indonesian', neighborhood: 'Richmond', priceRange: '$$',
    chaseReserve: true, notes: 'Hawker-inspired, vegan-friendly. Vibrant atmosphere.',
    reservationUrl: 'https://www.opentable.com/r/omas-hideaway-portland' },
  { name: 'Han Oak', cuisine: 'Korean', neighborhood: 'Northeast', priceRange: '$$$',
    chaseReserve: true, notes: 'Communal prix-fixe dining. Has karaoke!',
    reservationUrl: 'https://www.opentable.com/r/han-oak-portland' },
  { name: 'Jeju', cuisine: 'Korean BBQ', neighborhood: 'Southeast', priceRange: '$$$',
    chaseReserve: true, notes: 'Wood-fired, whole-animal butchery. From Han Oak family.',
    reservationUrl: 'https://www.opentable.com/r/jeju-portland' },
  { name: "Shalom Y'all", cuisine: 'Levantine/Mediterranean', neighborhood: 'Southeast', priceRange: '$$',
    chaseReserve: true, notes: 'Middle Eastern with PNW ingredients. Great for sharing.',
    reservationUrl: 'https://www.opentable.com/r/shalom-yall-portland' },
  { name: 'Hayward', cuisine: 'Farm-to-table', neighborhood: 'Carlton (Wine Country)', priceRange: '$$$$',
    chaseReserve: true, notes: 'James Beard finalist 2024. 45min from Portland.',
    reservationUrl: 'https://www.opentable.com/r/hayward-carlton' },
];

export const tripData: TripData = {
  id: 'mom-road-trip-2025',
  name: "Southwest to Glacier Road Trip",
  tagline: "30 days, 7 national parks, Phoenix to Glacier, one unforgettable journey with Mom",
  startDate: '2025-05-20',
  endDate: '2025-06-18',
  travelers: [
    { id: 'colin', name: 'Colin', origin: 'SEA', originCity: 'Seattle, WA', color: '#3b82f6', notes: 'Flying SEA → PHX' },
    { id: 'mom', name: 'Mom', origin: 'YYZ', originCity: 'Toronto, ON', color: '#ec4899', notes: 'Active 80yo, walks a lot, can do short hikes. Flying YYZ → PHX. PASSENGER ASSISTANCE: Request wheelchair/mobility assistance 48hrs before each flight. Airlines provide free assistance for seniors - just call airline or add to booking.' }
  ],
  phases: [
    {
      id: 'arrival',
      name: 'Arrival & Arizona',
      summary: 'Fly in, rest up, and explore Grand Canyon',
      days: [1, 2, 3, 4, 5, 6],
      startDay: 1,
      endDay: 6,
      color: '#ef4444',
      highlights: ['Phoenix arrival', 'Grand Canyon', 'Antelope Canyon', 'Horseshoe Bend', 'Buffer day']
    },
    {
      id: 'utah',
      name: 'Utah Parks',
      summary: 'Monument Valley, arches, canyons, and hoodoos',
      days: [7, 8, 9, 10, 11, 12, 13],
      startDay: 7,
      endDay: 13,
      color: '#f59e0b',
      highlights: ['Monument Valley', 'Arches NP', 'Buffer day', 'Canyonlands', 'Bryce Canyon']
    },
    {
      id: 'wyoming',
      name: 'Wyoming',
      summary: 'Majestic Tetons and Yellowstone\'s wonders',
      days: [14, 15, 16, 17, 18, 19, 20, 21],
      startDay: 14,
      endDay: 21,
      color: '#22c55e',
      highlights: ['Grand Teton', 'Yellowstone geysers', 'Wildlife viewing', 'Buffer days']
    },
    {
      id: 'montana',
      name: 'Montana',
      summary: 'Crown of the Continent at Glacier National Park',
      days: [22, 23, 24, 25, 26, 27, 28, 29],
      startDay: 22,
      endDay: 29,
      color: '#06b6d4',
      highlights: ['Going-to-the-Sun Road', 'Lake McDonald', 'Alpine meadows', 'Whitefish', 'Flathead Lake']
    },
    {
      id: 'departure',
      name: 'Departure',
      summary: 'Fly home from Glacier Park (FCA)',
      days: [30],
      startDay: 30,
      endDay: 30,
      color: '#8b5cf6',
      highlights: ['FCA→SEA→YYZ', 'Colin home to Seattle', 'Mom home to Toronto']
    }
  ],
  flights: [
    {
      id: 'f1',
      type: 'outbound',
      passenger: 'colin',
      from: 'SEA',
      to: 'PHX',
      date: '2025-05-20',
      airline: 'Alaska Airlines (Recommended)',
      price: 90,
      notes: 'Direct flights ~2h 55m. Book 45-60 days ahead for best rates. ~4 daily nonstop flights available.'
    },
    {
      id: 'f2',
      type: 'outbound',
      passenger: 'mom',
      from: 'YYZ',
      to: 'PHX',
      date: '2025-05-20',
      airline: 'Porter Airlines (Recommended)',
      price: 220,
      notes: 'DIRECT flight ~4h 32m. Porter has no middle seats, complimentary wine, premium snacks. Request wheelchair assist 48hrs ahead. Book 8:50am departure to arrive 10:22am Phoenix time.'
    },
    {
      id: 'f3',
      type: 'return',
      passenger: 'colin',
      from: 'FCA',
      fromCity: 'Glacier Park Intl (Kalispell)',
      to: 'SEA',
      toCity: 'Seattle',
      date: '2025-06-18',
      airline: 'Alaska Airlines',
      flightNumber: 'AS2331',
      departureTime: '6:00 AM',
      arrivalTime: '7:21 AM',
      duration: '1h 21m',
      price: 89,
      notes: 'DIRECT flight FCA→SEA only. Colin heads home after landing in Seattle. Request wheelchair assist for mom during connection.'
    },
    {
      id: 'f4',
      type: 'return',
      passenger: 'mom',
      from: 'FCA',
      fromCity: 'Glacier Park Intl (Kalispell)',
      to: 'YYZ',
      toCity: 'Toronto',
      date: '2025-06-18',
      airline: 'Alaska Airlines',
      flightNumber: 'AS2331 + AS385',
      departureTime: '6:00 AM',
      arrivalTime: '5:40 PM',
      duration: '8h 40m (1 stop SEA)',
      price: 337,
      notes: 'FCA→SEA→YYZ. Connecting in Seattle (~3hr layover). Request wheelchair/passenger assistance when booking - Alaska provides free mobility assistance for seniors. Call 1-800-252-7522 48hrs before to confirm.'
    }
  ],
  flightOptions: [
    {
      id: 'fo1',
      passenger: 'mom',
      type: 'return',
      recommended: 'fca-sea-yyz',
      notes: 'Flying from FCA (Kalispell) eliminates 10+ hour drive to Seattle. Worth the connection!',
      options: [
        {
          id: 'fca-sea-yyz',
          type: 'return',
          passenger: 'mom',
          from: 'FCA',
          fromCity: 'Glacier Park (Kalispell)',
          to: 'YYZ',
          toCity: 'Toronto',
          date: '2025-06-18',
          airline: 'Alaska Airlines (SELECTED)',
          flightNumber: 'AS2331 + AS385',
          price: 337,
          duration: '8h 40m (1 stop SEA)',
          notes: 'SELECTED: FCA→SEA→YYZ. 3hr layover in Seattle. Request passenger assistance.'
        },
        {
          id: 'fca-sea-yyz-later',
          type: 'return',
          passenger: 'mom',
          from: 'FCA',
          fromCity: 'Glacier Park (Kalispell)',
          to: 'YYZ',
          toCity: 'Toronto',
          date: '2025-06-18',
          airline: 'Alaska Airlines',
          price: 380,
          duration: '10h (1 stop SEA)',
          notes: 'Later departure option. More relaxed morning but longer layover.'
        }
      ]
    },
    {
      id: 'fo2',
      passenger: 'colin',
      type: 'outbound',
      recommended: 'sea-phx-direct',
      notes: 'Colin flies SEA→PHX to meet Mom. Multiple direct options daily.',
      options: [
        {
          id: 'sea-phx-direct',
          type: 'outbound',
          passenger: 'colin',
          from: 'SEA',
          fromCity: 'Seattle',
          to: 'PHX',
          toCity: 'Phoenix',
          date: '2025-05-20',
          airline: 'Alaska Airlines (Recommended)',
          price: 89,
          duration: '2h 55m DIRECT',
          notes: 'DIRECT flight! 4+ daily nonstops. Book 45-60 days ahead for ~$89-120.'
        },
        {
          id: 'sea-phx-sw',
          type: 'outbound',
          passenger: 'colin',
          from: 'SEA',
          fromCity: 'Seattle',
          to: 'PHX',
          toCity: 'Phoenix',
          date: '2025-05-20',
          airline: 'Southwest',
          price: 100,
          duration: '2h 55m DIRECT',
          notes: 'DIRECT! Southwest has free checked bags and flexible rebooking.'
        }
      ]
    },
    {
      id: 'fo3',
      passenger: 'mom',
      type: 'outbound',
      recommended: 'yyz-phx-porter',
      notes: 'Mom flies YYZ→PHX. Porter recommended for comfort and service.',
      options: [
        {
          id: 'yyz-phx-porter',
          type: 'outbound',
          passenger: 'mom',
          from: 'YYZ',
          fromCity: 'Toronto',
          to: 'PHX',
          toCity: 'Phoenix',
          date: '2025-05-20',
          airline: 'Porter Airlines (Recommended)',
          price: 220,
          duration: '4h 32m DIRECT',
          notes: 'DIRECT! Porter has no middle seats, free wine, snacks. 8:50am dep, 10:22am PHX arrival. Perfect for senior travelers!'
        },
        {
          id: 'yyz-phx-westjet',
          type: 'outbound',
          passenger: 'mom',
          from: 'YYZ',
          fromCity: 'Toronto',
          to: 'PHX',
          toCity: 'Phoenix',
          date: '2025-05-20',
          airline: 'WestJet',
          price: 280,
          duration: '4h 35m DIRECT',
          notes: 'DIRECT! Canadian airline, good service.'
        },
        {
          id: 'yyz-phx-ac',
          type: 'outbound',
          passenger: 'mom',
          from: 'YYZ',
          fromCity: 'Toronto',
          to: 'PHX',
          toCity: 'Phoenix',
          date: '2025-05-20',
          airline: 'Air Canada',
          price: 350,
          duration: '4h 35m DIRECT',
          notes: 'DIRECT! Air Canada daily nonstop. Can book together with return.'
        }
      ]
    }
  ],
  carRental: {
    company: 'Budget or Enterprise',
    vehicleType: 'Subaru Crosstrek / Toyota RAV4 / Mazda CX-30 (compact AWD SUV)',
    pickupLocation: 'Phoenix Sky Harbor Airport (PHX)',
    pickupDate: '2025-05-20',
    dropoffLocation: 'Glacier Park International Airport (FCA)',
    dropoffDate: '2025-06-17',
    totalDays: 28,
    dailyRate: 45,
    dropoffFee: 200,
    totalCost: 1460,
    notes: 'One-way compact AWD SUV. PHX to FCA drop-off saves 10+ hr drive to Seattle! Book via Costco Travel or AutoSlash for best rates. AWD essential for mountain roads. AARP/AAA discounts available. Return car evening before 6am flight.'
  },
  days: [
    {
      id: 'd1',
      dayNumber: 1,
      date: '2025-05-20',
      title: 'Arrive Phoenix - Rest & Recover',
      summary: 'Land, pick up car, easy evening, recover from travel',
      location: locations.find(l => l.id === 'phx')!,
      overnight: 'Phoenix / Scottsdale, AZ',
      weather: { high: 100, low: 73, conditions: 'Hot and sunny - stay by the pool!' },
      activities: [
        {
          id: 'a1-1',
          name: 'Arrive Phoenix & Pick Up Rental',
          description: 'Arrive at Phoenix Sky Harbor, pick up compact AWD SUV (Crosstrek/RAV4). Mom arrives ~10:30am, Colin adjust timing to meet.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          tips: ['Pre-book rental online for best rates', 'Confirm AWD vehicle', 'Meet at rental car center']
        },
        {
          id: 'a1-2',
          name: 'Check into Hotel & Rest',
          description: 'Get settled, unpack, take a nap if needed. Long trip ahead - start rested!',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Request ground floor room for easy access', 'Look for hotel with good pool']
        },
        {
          id: 'a1-3',
          name: 'Pool Time & Relaxation',
          description: 'Enjoy the Arizona sunshine by the pool. Hydrate well - desert air is dry!',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Sunscreen essential', 'Drink lots of water', 'Stay in shade during peak heat 2-4pm']
        },
        {
          id: 'a1-4',
          name: 'Dinner in Scottsdale',
          description: 'Nice dinner to kick off the trip. Old Town Scottsdale has great options.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['The Mission, Café Monarch, or casual at Barrio Queen', 'Outdoor patios lovely in evening when cooler']
        }
      ],
      accommodation: {
        id: 'acc1',
        name: 'Hyatt Place Scottsdale / Hilton Garden Inn Phoenix',
        type: 'hotel',
        priceRange: '$120-180',
        pricePerNight: 150,
        seniorFriendly: true,
        amenities: ['Pool', 'Free parking', 'Breakfast included', 'Near Old Town Scottsdale'],
        notes: 'Stay near airport or Scottsdale for easy start tomorrow'
      },
      notes: ['NO DRIVING TODAY - rest after flights!', 'Phoenix is HOT - stay cool', 'Hydrate constantly in desert air'],
      budgetBreakdown: { accommodation: 150, food: 60, activities: 0, gas: 0, total: 210 }
    },
    {
      id: 'd2',
      dayNumber: 2,
      date: '2025-05-21',
      title: 'Phoenix → Grand Canyon (Scenic Drive)',
      summary: 'Morning drive through desert to canyon, first views at sunset',
      location: locations.find(l => l.id === 'gc')!,
      overnight: 'Grand Canyon (Tusayan or South Rim)',
      drivingDistance: '230 miles',
      drivingTime: '4 hours',
      weather: { high: 78, low: 45, conditions: 'Sunny, pleasant at rim elevation' },
      activities: [
        {
          id: 'a2-1',
          name: 'Morning Drive: Phoenix to Grand Canyon',
          description: 'Scenic 4-hour drive through Arizona. Stop in Flagstaff for lunch and stretch. Watch the landscape change from desert to pine forest!',
          duration: '4 hours (with stops)',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Leave by 9am to arrive for late lunch at canyon', 'Rest stops at Sunset Point and Flagstaff', 'Saguaros visible first hour, then pines near Flagstaff']
        },
        {
          id: 'a2-2',
          name: 'Lunch in Flagstaff',
          description: 'Stop in charming Flagstaff for lunch and leg stretch. Historic downtown has great cafes.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['MartAnne\'s Breakfast Palace, Pizzicletta, or tourist row near train tracks']
        },
        {
          id: 'a2-3',
          name: 'Arrive Grand Canyon & Check In',
          description: 'Final hour drive to Grand Canyon. Check into hotel, rest a bit before evening.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Tusayan has most lodging options just outside park', 'Get park map at entrance']
        },
        {
          id: 'a2-4',
          name: 'First Views at Mather Point',
          description: 'Your first Grand Canyon views! Short accessible walk to iconic viewpoint.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Accessible viewpoints', 'Visitor Center nearby for info', 'Prepare to be amazed!']
        },
        {
          id: 'a2-5',
          name: 'Sunset at Hopi Point',
          description: 'One of the best sunset spots on the South Rim. Take the free shuttle.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Shuttle runs regularly', 'Bring layers - cool after sunset', 'Arrive 30 min early']
        }
      ],
      accommodation: {
        id: 'acc2',
        name: 'Best Western Premier / Holiday Inn Express Tusayan',
        type: 'hotel',
        priceRange: '$180-280',
        pricePerNight: 220,
        seniorFriendly: true,
        notes: 'Tusayan is just outside park entrance. In-park lodges book 6+ months ahead.'
      },
      notes: ['DRIVING DAY - light activities', 'Grand Canyon elevation: 7,000 ft - may feel altitude', 'Pack layers for evening'],
      budgetBreakdown: { accommodation: 220, food: 80, activities: 35, gas: 50, total: 385 }
    },
    {
      id: 'd3',
      dayNumber: 3,
      date: '2025-05-22',
      title: 'Grand Canyon Full Day',
      summary: 'Rim walks, overlooks, take your time with the views',
      location: locations.find(l => l.id === 'gc')!,
      overnight: 'Grand Canyon (Tusayan or South Rim)',
      weather: { high: 78, low: 45, conditions: 'Sunny, pleasant at rim elevation' },
      activities: [
        {
          id: 'a3-1',
          name: 'Sunrise at Mather Point (optional)',
          description: 'Early risers can catch stunning sunrise colors on the canyon walls.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Sunrise ~5:30am in late May', 'Worth it if you\'re awake!']
        },
        {
          id: 'a3-2',
          name: 'Rim Trail Walk',
          description: 'Walk sections of the paved Rim Trail between viewpoints. Flat and accessible.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '2.8 miles (Mather Point to Bright Angel Lodge)',
          elevation: { gain: 100, highest: 7120, lowest: 7000 },
          trailhead: { lat: 36.0544, lng: -112.1068, name: 'Mather Point Trailhead' },
          pointsOfInterest: ['Yavapai Point', 'Yaki Point', 'Mather Point Overlook'],
          tips: ['Trail is paved and wheelchair accessible', 'Free shuttle stops at viewpoints']
        },
        {
          id: 'a3-3',
          name: 'Lunch at El Tovar or Bright Angel Lodge',
          description: 'Historic lodges with canyon views. El Tovar is upscale, Bright Angel more casual.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['El Tovar may need reservation for dinner', 'Bright Angel has good burgers']
        },
        {
          id: 'a3-4',
          name: 'Hermit Road Scenic Drive',
          description: 'Take the free shuttle along Hermit Road to multiple overlooks. Best in afternoon light.',
          duration: '2-3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Shuttle runs March-November', 'Hopi Point best for sunset', 'Bring water and snacks']
        },
        {
          id: 'a3-5',
          name: 'Sunset at Hopi Point',
          description: 'One of the best sunset spots on the South Rim. Arrive 30+ min early for parking.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Bring layers - cool after sunset', 'Stay for the colors after sun dips below horizon']
        }
      ],
      accommodation: {
        id: 'acc3',
        name: 'Best Western Premier / Holiday Inn Express Tusayan',
        type: 'hotel',
        priceRange: '$180-280',
        pricePerNight: 220,
        seniorFriendly: true,
        notes: 'Same hotel as last night - no need to repack!'
      },
      notes: ['SIGHTSEEING DAY - no driving', 'Take it easy, enjoy the views', 'Drink lots of water'],
      budgetBreakdown: { accommodation: 220, food: 80, activities: 35, gas: 10, total: 345 }
    },
    {
      id: 'd4',
      dayNumber: 4,
      date: '2025-05-23',
      title: 'Grand Canyon → Page (Desert View Drive)',
      summary: 'Desert View scenic drive, then short drive to Page',
      location: locations.find(l => l.id === 'page')!,
      overnight: 'Page, AZ',
      drivingDistance: '135 miles',
      drivingTime: '2.5 hours',
      weather: { high: 78, low: 45, conditions: 'Sunny at rim; warmer in Page' },
      activities: [
        {
          id: 'a4-1',
          name: 'Desert View Drive',
          description: '25-mile scenic drive with multiple overlooks. Visit Desert View Watchtower - spectacular views!',
          duration: '2-3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Watchtower ground floor accessible', 'Great photography spots', 'Last views of the canyon']
        },
        {
          id: 'a4-2',
          name: 'Desert View Watchtower',
          description: 'Historic 70-foot stone tower with painted interior murals. Ground floor is accessible.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Gift shop and restrooms here', 'Beautiful Navajo-inspired murals']
        },
        {
          id: 'a4-3',
          name: 'Drive to Page, AZ',
          description: 'Scenic drive through Navajo Nation to Page. Beautiful red rock landscapes.',
          duration: '2.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Stop at Cameron Trading Post for snacks/gifts', 'Dramatic landscape changes']
        },
        {
          id: 'a4-4',
          name: 'Settle in & Pool Time',
          description: 'Check into hotel, rest, enjoy the pool after driving.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        }
      ],
      accommodation: {
        id: 'acc4',
        name: 'Hyatt Place Page / Lake Powell Resort',
        type: 'hotel',
        priceRange: '$150-250',
        pricePerNight: 180,
        seniorFriendly: true,
        amenities: ['Pool', 'Restaurant', 'Lake Powell views']
      },
      notes: ['DRIVING DAY - light activities', 'Rest up for Antelope Canyon tomorrow'],
      reservationsNeeded: ['Upper Antelope Canyon tour - BOOK NOW'],
      budgetBreakdown: { accommodation: 180, food: 70, activities: 35, gas: 35, total: 320 }
    },
    {
      id: 'd5',
      dayNumber: 5,
      date: '2025-05-24',
      title: 'Antelope Canyon & Horseshoe Bend',
      summary: 'Light beams in slot canyon, iconic river horseshoe',
      location: locations.find(l => l.id === 'page')!,
      overnight: 'Page, AZ',
      weather: { high: 88, low: 58, conditions: 'Sunny, warm' },
      activities: [
        {
          id: 'a5-1',
          name: 'Upper Antelope Canyon Tour',
          summary: 'World-famous slot canyon - light beams, no ladders, senior-friendly',
          description: 'Navajo-guided tour through stunning sandstone slot canyon. Upper Canyon is BEST for 80-year-old visitors - no ladders required (unlike Lower Canyon which has 6 steep metal ladders). Light beams visible 11am-1pm May-October.',
          duration: '1 hr 45 min total (40 min in canyon)',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          reservationUrl: 'https://www.antelopecanyon.com/upper-antelope-canyon-tour/',
          cost: '$100-156 (includes $8 Navajo permit + 6% tax)',
          image: 'https://www.nps.gov/common/uploads/cropped_image/primary/7F37D3C3-A2D1-47A9-6A19C2E7CAD1B08C.jpg',
          url: 'https://navajonationparks.org/guided-tour-operators/antelope-canyon-tour-operators/',
          tips: [
            'Book 9:50-10am slot for balance of light + cooler temps',
            '11am-1pm slots are premium/pricier but best light beams',
            'No tripods, selfie sticks, or bags allowed',
            'Wear closed-toe shoes (sand floor)',
            'Upper Canyon has exit stairs/ramps (manageable, not Lower\'s ladders)',
            'Transportation is 40 min round trip via 4x4 vehicle',
            'Book 2-3 months ahead for May dates'
          ],
          requirements: [
            'Navajo-guided tour required (no independent access)',
            'Closed-toe shoes mandatory',
            'No food, drinks (water bottle OK), or bags'
          ]
        },
        {
          id: 'a5-2',
          name: 'Horseshoe Bend',
          description: 'Iconic Colorado River overlook. 1.5 mile round trip on accessible trail.',
          duration: '1.5 hours',
          difficulty: 'moderate',
          seniorFriendly: true,
          reservationRequired: false,
          cost: '$10 parking',
          distance: '1.5 miles round trip',
          elevation: { gain: 150, highest: 4300, lowest: 4150 },
          trailhead: { lat: 36.8808, lng: -111.5107, name: 'Horseshoe Bend Trailhead' },
          pointsOfInterest: ['Colorado River viewpoint', '1000-foot cliff overlook'],
          tips: ['Go early morning or late afternoon to avoid heat', 'First section is uphill', 'Bring water']
        },
        {
          id: 'a5-3',
          name: 'Lake Powell Scenic Drive',
          description: 'Drive to Wahweap Overlook for lake views',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a5-4',
          name: 'Relaxing afternoon',
          description: 'Pool time at hotel, rest up after busy sightseeing day',
          duration: '3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        }
      ],
      accommodation: {
        id: 'acc5',
        name: 'Same hotel in Page',
        type: 'hotel',
        priceRange: '$150-250',
        pricePerNight: 180,
        seniorFriendly: true
      },
      notes: ['SIGHTSEEING DAY', 'Rest well tonight - tomorrow is a buffer day!'],
      budgetBreakdown: { accommodation: 180, food: 70, activities: 210, gas: 10, total: 470 }
    },
    {
      id: 'd6',
      dayNumber: 6,
      date: '2025-05-25',
      title: 'Page - Rest & Work Day',
      summary: 'Buffer day to recover. Colin works, Mom relaxes by the pool.',
      location: locations.find(l => l.id === 'page')!,
      overnight: 'Page, AZ',
      weather: { high: 90, low: 60, conditions: 'Sunny, hot' },
      activities: [
        {
          id: 'a6-1',
          name: 'Sleep in & Slow Morning',
          description: 'No alarm! Leisurely breakfast at hotel or local cafe.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Big John\'s Texas BBQ does good breakfast', 'Hotel breakfast is included at most places']
        },
        {
          id: 'a6-2',
          name: 'Colin: Remote Work Session',
          description: 'Get some work done while Mom relaxes. Hotel has wifi, or find a cafe.',
          duration: '4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Starbucks in Page has reliable wifi', 'Or work poolside at hotel']
        },
        {
          id: 'a6-3',
          name: 'Mom: Pool & Relaxation',
          description: 'Enjoy the hotel pool, read a book, take a nap. True vacation mode!',
          duration: '4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Stay hydrated in desert heat', 'Shade by the pool is key']
        },
        {
          id: 'a6-4',
          name: 'Optional: Lake Powell Boat Tour',
          description: 'If feeling energetic, short boat tour on Lake Powell. Otherwise, skip!',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          tips: ['Antelope Point Marina has tours', 'Or just enjoy another pool/rest day']
        },
        {
          id: 'a6-5',
          name: 'Nice Dinner in Page',
          description: 'Celebrate the trip so far with a good dinner.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['State 48 Tavern is good', 'Or El Tapatio for Mexican']
        }
      ],
      accommodation: {
        id: 'acc6',
        name: 'Same hotel in Page',
        type: 'hotel',
        priceRange: '$150-250',
        pricePerNight: 180,
        seniorFriendly: true
      },
      notes: ['BUFFER/WORK DAY - no sightseeing required!', 'Recharge for long drive tomorrow', 'Colin catches up on work'],
      budgetBreakdown: { accommodation: 180, food: 80, activities: 0, gas: 0, total: 260 }
    },
    {
      id: 'd7',
      dayNumber: 7,
      date: '2025-05-26',
      title: 'Page → Monument Valley → Moab',
      summary: 'Navajo Nation, iconic western buttes, desert drive',
      location: locations.find(l => l.id === 'moab')!,
      overnight: 'Moab, UT',
      drivingDistance: '270 miles',
      drivingTime: '5 hours (with Monument Valley stop)',
      weather: { high: 90, low: 60, conditions: 'Sunny, hot' },
      activities: [
        {
          id: 'a7-1',
          name: 'Drive to Monument Valley',
          description: 'Scenic drive through Navajo Nation. About 2 hours from Page.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a7-2',
          name: 'Monument Valley Tribal Park',
          summary: '17-mile self-drive or guided tour - bumpy road, consider tour for comfort',
          description: '17-mile Valley Drive through the iconic Western landscape seen in countless movies. Self-drive is bumpy unpaved road (2-3 hours). For 80-year-old comfort, consider guided Navajo tour with better vehicles and access to restricted areas.',
          duration: '2-3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          cost: '$8/person entry (Federal passes NOT accepted - this is Navajo Nation)',
          image: 'https://navajonationparks.org/wp-content/uploads/2021/04/Monument-Valley-Navajo-Tribal-Park-1.jpg',
          url: 'https://navajonationparks.org/navajo-tribal-parks/monument-valley/',
          tips: [
            'Self-drive: 17 mi unpaved dirt road - bumpy with ruts',
            'RVs, motorcycles, low-clearance vehicles NOT recommended',
            'Guided Navajo tours: More comfortable, access sacred areas',
            'Tour operators: Navajo Spirit Tours, Monument Valley Safari',
            'Best stops: The Mittens, John Ford Point (photos with horses), Artist\'s Point',
            'Hours May: 7am-7pm, last entry 4:30pm',
            'Consider skipping self-drive and booking guided tour for senior comfort'
          ]
        },
        {
          id: 'a7-3',
          name: 'Continue to Moab',
          description: 'Drive through Mexican Hat, Bluff, and scenic Utah canyon country',
          duration: '3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Beautiful drive along the San Juan River', 'Stop at Goosenecks State Park if time permits']
        }
      ],
      accommodation: {
        id: 'acc7',
        name: 'Hyatt Place Moab / Springhill Suites',
        type: 'hotel',
        priceRange: '$180-280',
        pricePerNight: 220,
        seniorFriendly: true,
        amenities: ['Pool', 'Breakfast included', 'Close to parks']
      },
      notes: ['DRIVING DAY - Monument Valley is the sightseeing', 'Rest tonight, Arches tomorrow'],
      budgetBreakdown: { accommodation: 220, food: 80, activities: 20, gas: 60, total: 380 }
    },
    {
      id: 'd8',
      dayNumber: 8,
      date: '2025-05-27',
      title: 'Arches National Park',
      summary: 'Windows, Delicate Arch views, 2000+ stone arches',
      location: locations.find(l => l.id === 'arches')!,
      overnight: 'Moab, UT',
      weather: { high: 88, low: 58, conditions: 'Sunny' },
      activities: [
        {
          id: 'a8-1',
          name: 'Windows Section',
          summary: 'Spectacular arches visible from parking - best senior accessibility',
          description: 'Multiple arches viewable from parking area without walking. Trail has stone stairs after first 100 feet. For mobility-limited seniors, the parking lot views are excellent!',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          reservationUrl: 'https://www.recreation.gov/timed-entry/10088426',
          cost: '$2 reservation + $30 park entrance (FREE with Senior Pass)',
          image: 'https://www.nps.gov/common/uploads/cropped_image/primary/7A4F9AFC-C508-9F82-2B5B59E2DD2E2D35.jpg',
          url: 'https://www.nps.gov/arch/planyourvisit/the-windows.htm',
          distance: '1 mile loop',
          elevation: { gain: 100, highest: 5200, lowest: 5100 },
          trailhead: { lat: 38.6869, lng: -109.5367, name: 'Windows Trailhead' },
          pointsOfInterest: ['North Window', 'South Window', 'Turret Arch', 'Double Arch nearby'],
          tips: [
            'TIMED ENTRY REQUIRED April 1 - July 6, 2025 (7am-4pm)',
            'Book at Recreation.gov 3 months ahead',
            'Senior Pass ($80 lifetime) covers entrance fee',
            'Arches visible from parking area - no walking required!',
            'Trail has stone stairs - first 100 feet accessible',
            'Very little shade - bring water and sun protection'
          ]
        },
        {
          id: 'a8-2',
          name: 'Double Arch',
          description: 'Short 0.5 mile walk to spectacular double arch formation',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a8-3',
          name: 'Balanced Rock',
          description: 'Quick stop and short walk around this iconic formation',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a8-4',
          name: 'Landscape Arch Trail',
          summary: 'World\'s longest arch - excellent for seniors, relatively flat',
          description: 'One of the best senior-friendly trails in Arches! Well-maintained, relatively flat path to see Landscape Arch - 306 feet long, one of world\'s longest natural arches.',
          duration: '1-1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          image: 'https://www.nps.gov/common/uploads/cropped_image/primary/7A2E3F0F-92B5-3B0E-6D4C9A4E6B0B0A77.jpg',
          url: 'https://www.nps.gov/places/landscape-arch-trail.htm',
          distance: '1.9 miles round trip',
          elevation: { gain: 252, highest: 5240, lowest: 5180 },
          trailhead: { lat: 38.7910, lng: -109.6065, name: 'Devils Garden Trailhead' },
          pointsOfInterest: ['Landscape Arch (306 ft span)', 'Pine Tree Arch', 'Tunnel Arch'],
          tips: [
            'BEST hike for seniors - relatively flat, well-maintained',
            'Very little shade - start early morning',
            'Bring plenty of water and sun protection',
            'Hard-packed trail surface'
          ]
        },
        {
          id: 'a8-5',
          name: 'Delicate Arch Viewpoint (Lower)',
          description: 'Short paved walk to distant view of the iconic arch',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['The hike TO Delicate Arch (3 mi, steep) may be too strenuous']
        }
      ],
      notes: ['SIGHTSEEING DAY', 'Tomorrow is a rest day!'],
      accommodation: {
        id: 'acc8',
        name: 'Same hotel in Moab',
        type: 'hotel',
        priceRange: '$180-280',
        pricePerNight: 220,
        seniorFriendly: true
      },
      reservationsNeeded: ['Arches Timed Entry - CRITICAL - book at recreation.gov'],
      budgetBreakdown: { accommodation: 220, food: 70, activities: 30, gas: 15, total: 335 }
    },
    {
      id: 'd9',
      dayNumber: 9,
      date: '2025-05-28',
      title: 'Moab - Rest & Work Day',
      summary: 'Buffer day in Moab. Colin works, Mom relaxes.',
      location: locations.find(l => l.id === 'moab')!,
      overnight: 'Moab, UT',
      weather: { high: 88, low: 58, conditions: 'Sunny' },
      activities: [
        {
          id: 'a9-1',
          name: 'Sleep in & Leisurely Breakfast',
          description: 'No alarm needed! Enjoy breakfast at hotel or local spot.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Jailhouse Cafe has great breakfast', 'Or hotel breakfast is easy']
        },
        {
          id: 'a9-2',
          name: 'Colin: Remote Work Session',
          description: 'Work session while Mom relaxes. Good wifi at hotel or cafes.',
          duration: '4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Moab Coffee Roasters has good wifi', 'Work poolside if weather permits']
        },
        {
          id: 'a9-3',
          name: 'Mom: Pool & Relaxation',
          description: 'Pool time, reading, napping - true rest day!',
          duration: '4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a9-4',
          name: 'Optional: Easy Walk along Colorado River',
          description: 'If feeling active, short flat walk along the river near town.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Lions Park has easy access', 'Beautiful evening light on the red rocks']
        },
        {
          id: 'a9-5',
          name: 'Dinner in Downtown Moab',
          description: 'Explore the restaurant scene in this adventure town.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Desert Bistro for fine dining', 'Antica Forma for pizza', 'Moab Brewery is casual']
        }
      ],
      accommodation: {
        id: 'acc9',
        name: 'Same hotel in Moab',
        type: 'hotel',
        priceRange: '$180-280',
        pricePerNight: 220,
        seniorFriendly: true
      },
      notes: ['BUFFER/WORK DAY - no sightseeing required!', 'Colin catches up on work', 'Mom rests and recharges'],
      budgetBreakdown: { accommodation: 220, food: 80, activities: 0, gas: 0, total: 300 }
    },
    {
      id: 'd10',
      dayNumber: 10,
      date: '2025-05-29',
      title: 'Canyonlands National Park',
      summary: 'Mesa Arch sunrise, vast canyon panoramas, solitude',
      location: locations.find(l => l.id === 'canyonlands')!,
      overnight: 'Moab, UT',
      weather: { high: 88, low: 58, conditions: 'Sunny' },
      activities: [
        {
          id: 'a10-1',
          name: 'Mesa Arch Trail',
          description: 'Famous sunrise spot. Short 0.5 mile loop to arch framing the canyon.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '0.5 mile loop',
          elevation: { gain: 80, highest: 6100, lowest: 6020 },
          trailhead: { lat: 38.3883, lng: -109.8671, name: 'Mesa Arch Trailhead' },
          pointsOfInterest: ['Mesa Arch with canyon view', 'La Sal Mountains backdrop'],
          tips: ['Iconic at sunrise but crowded', 'Beautiful anytime']
        },
        {
          id: 'a10-2',
          name: 'Grand View Point',
          description: 'Stunning 270-degree panoramic view of canyons. Very short walk from parking.',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a10-3',
          name: 'Green River Overlook',
          description: 'View of the Green River far below in the canyon',
          duration: '20 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a10-4',
          name: 'Shafer Canyon Overlook',
          description: 'Dramatic view of the switchback road descending into the canyon',
          duration: '20 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a10-5',
          name: 'Upheaval Dome',
          description: 'Mysterious crater - meteor impact or salt dome collapse? 1.8 mile RT hike.',
          duration: '1.5 hours',
          difficulty: 'moderate',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '1.8 miles round trip',
          elevation: { gain: 200, highest: 5700, lowest: 5500 },
          trailhead: { lat: 38.4271, lng: -109.9293, name: 'Upheaval Dome Trailhead' },
          pointsOfInterest: ['First Overlook (0.5 mi)', 'Second Overlook (deeper view)']
        }
      ],
      notes: ['SIGHTSEEING DAY', 'No timed entry required for Canyonlands', 'Less crowded than Arches'],
      accommodation: {
        id: 'acc10',
        name: 'Same hotel in Moab',
        type: 'hotel',
        priceRange: '$180-280',
        pricePerNight: 220,
        seniorFriendly: true
      },
      budgetBreakdown: { accommodation: 220, food: 70, activities: 30, gas: 20, total: 340 }
    },
    {
      id: 'd11',
      dayNumber: 11,
      date: '2025-05-30',
      title: 'Moab → Bryce Canyon',
      summary: 'Highway 12 scenic route to otherworldly hoodoos',
      location: locations.find(l => l.id === 'bryce')!,
      overnight: 'Bryce Canyon area',
      drivingDistance: '270 miles',
      drivingTime: '4.5 hours',
      weather: { high: 65, low: 38, conditions: 'Cool at elevation' },
      activities: [
        {
          id: 'a11-1',
          name: 'Drive to Bryce Canyon',
          description: 'Scenic drive through Capitol Reef area and red rock country',
          duration: '4.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Stop at Capitol Reef scenic viewpoints if time', 'Highway 12 is stunning']
        },
        {
          id: 'a11-2',
          name: 'Bryce Canyon Rim Views',
          description: 'Visit Sunrise Point, Sunset Point, and Bryce Point overlooks',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['All overlooks have paved paths', 'Spectacular hoodoo formations']
        },
        {
          id: 'a11-3',
          name: 'Queens Garden Trail (assess carefully)',
          summary: '⚠️ 8,000 ft altitude - descent easy but climb OUT is challenging',
          description: '"Least strenuous" trail into amphitheater but still demanding due to 8,000+ ft altitude. Descent is easy; the climb OUT is the challenge. Some seniors manage it fine, others find it too much.',
          duration: '2 hours',
          difficulty: 'moderate',
          seniorFriendly: true,
          reservationRequired: false,
          image: 'https://www.nps.gov/brca/planyourvisit/images/Queens-Garden-Trail-NPS.jpg',
          url: 'https://www.nps.gov/brca/planyourvisit/queensgarden.htm',
          distance: '1.8 miles round trip (0.9 mi one-way)',
          elevation: { gain: 320, loss: 320, highest: 8000, lowest: 7680 },
          trailhead: { lat: 37.6272, lng: -112.1676, name: 'Sunrise Point Trailhead' },
          pointsOfInterest: ['Queens Garden', 'Hoodoo formations', "Queen Victoria rock"],
          tips: [
            'ALTITUDE WARNING: 8,000+ ft - harder to breathe, fatigue faster',
            'Going down is easy; coming UP is strenuous',
            'Take multiple rest breaks on return climb',
            'Can do just the first section and turn back',
            'Dress warm - 60s daytime, can freeze at night in late May',
            'Alternative: Enjoy rim viewpoints only (fully accessible)',
            'Free shuttle has wheelchair lifts (April-October)'
          ]
        }
      ],
      accommodation: {
        id: 'acc11',
        name: 'Best Western Plus Ruby Inn / Bryce Canyon Lodge',
        type: 'hotel',
        priceRange: '$150-250',
        pricePerNight: 180,
        seniorFriendly: true,
        notes: 'Bryce Canyon Lodge is in the park but books months ahead'
      },
      notes: ['DRIVING DAY', 'Bryce is at 8,000+ ft elevation - dress warmly', 'Can get cold at night even in May'],
      budgetBreakdown: { accommodation: 180, food: 70, activities: 35, gas: 55, total: 340 }
    },
    {
      id: 'd12',
      dayNumber: 12,
      date: '2025-05-31',
      title: 'Bryce Canyon → Salt Lake City',
      summary: 'Morning hoodoos, temple visit, gateway to Wyoming',
      location: locations.find(l => l.id === 'slc')!,
      overnight: 'Salt Lake City, UT',
      drivingDistance: '270 miles',
      drivingTime: '4 hours',
      weather: { high: 78, low: 52, conditions: 'Sunny' },
      activities: [
        {
          id: 'a12-1',
          name: 'Morning at Bryce (if missed yesterday)',
          description: 'Catch sunrise at Bryce Point or revisit favorite overlooks',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a12-2',
          name: 'Drive to Salt Lake City',
          description: 'Drive north through Utah to Salt Lake City',
          duration: '4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a12-3',
          name: 'Temple Square (optional)',
          description: 'Historic Mormon temple and beautiful gardens. Free to visit grounds.',
          duration: '1-2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Flat walking on paved paths', 'Beautiful architecture']
        }
      ],
      accommodation: {
        id: 'acc12',
        name: 'Marriott Downtown SLC / Hilton',
        type: 'hotel',
        priceRange: '$130-200',
        pricePerNight: 160,
        seniorFriendly: true,
        amenities: ['Downtown location', 'Restaurants nearby']
      },
      notes: ['DRIVING DAY - transit to Wyoming', 'Stock up on supplies at stores'],
      budgetBreakdown: { accommodation: 160, food: 80, activities: 0, gas: 55, total: 295 }
    },
    {
      id: 'd13',
      dayNumber: 13,
      date: '2025-06-01',
      title: 'Salt Lake City → Jackson / Grand Teton',
      summary: 'Mountain drive north, first Teton views, charming Jackson town',
      location: locations.find(l => l.id === 'jackson')!,
      overnight: 'Jackson, WY',
      drivingDistance: '280 miles',
      drivingTime: '5 hours',
      weather: { high: 65, low: 35, conditions: 'Partly cloudy, cool' },
      activities: [
        {
          id: 'a13-1',
          name: 'Drive to Jackson Hole',
          description: 'Beautiful drive through Idaho into Wyoming',
          duration: '5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Take US-89 through Star Valley for scenic route', 'Mountains get more dramatic as you approach']
        },
        {
          id: 'a13-2',
          name: 'Explore Jackson Town Square',
          description: 'Walk around the charming Western town with elk antler arches',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Many art galleries and shops', 'Million Dollar Cowboy Bar is iconic']
        },
        {
          id: 'a13-3',
          name: 'Dinner in Jackson',
          description: 'Many excellent restaurant options',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        }
      ],
      accommodation: {
        id: 'acc13',
        name: 'The Lexington at Jackson Hole / Snow King Resort',
        type: 'hotel',
        priceRange: '$200-350',
        pricePerNight: 250,
        seniorFriendly: true,
        notes: 'Jackson is expensive but worth it for location'
      },
      notes: ['DRIVING DAY - long scenic drive', 'Rest well tonight for Teton adventures'],
      budgetBreakdown: { accommodation: 250, food: 100, activities: 0, gas: 55, total: 405 }
    },
    {
      id: 'd14',
      dayNumber: 14,
      date: '2025-06-02',
      title: 'Grand Teton - Scenic Driving Day',
      summary: 'Teton Park Road, Jenny Lake views, Snake River overlooks',
      location: locations.find(l => l.id === 'teton')!,
      overnight: 'Jackson, WY',
      weather: { high: 62, low: 32, conditions: 'Sunny, chilly mornings' },
      activities: [
        {
          id: 'a14-1',
          name: 'Sunrise at Mormon Row',
          summary: 'Iconic T.A. Moulton Barn - minimal walking, sunrise ~5:48am',
          description: 'World-famous T.A. Moulton Barn with Teton backdrop. One of the most photographed spots in America. Minimal walking required - barns visible from roadside!',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          image: 'https://www.nps.gov/grte/planyourvisit/images/MormonRow-NPS-Photo.jpg',
          url: 'https://www.nps.gov/grte/learn/historyculture/mormon.htm',
          tips: [
            'Sunrise ~5:48am late May - arrive 30 min early',
            'Can drive right up to barns - minimal walking',
            'Sunrise better than sunset (sun behind you, Tetons lit up)',
            '1.5-mile gravel road (Antelope Flats Rd) - regular cars OK',
            'FREE - outside park fee area',
            'Vault toilet near T.A. Moulton Barn (wheelchair accessible)'
          ]
        },
        {
          id: 'a14-2',
          name: 'Schwabacher Landing',
          description: 'Beautiful Teton reflections in the Snake River',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a14-3',
          name: 'Oxbow Bend',
          description: 'Classic Mt. Moran reflection spot. Great for wildlife (moose, eagles)',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Best at sunrise or sunset', 'Bring binoculars for wildlife']
        },
        {
          id: 'a14-4',
          name: 'Jenny Lake Scenic Drive',
          description: 'One-way scenic road along Jenny Lake',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a14-5',
          name: 'Signal Mountain Summit Road',
          description: 'Drive to 7,727 ft summit for panoramic Teton views',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a14-6',
          name: 'Craig Thomas Visitor Center',
          description: 'Learn about Teton geology and wildlife',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        }
      ],
      accommodation: {
        id: 'acc14',
        name: 'Same hotel in Jackson',
        type: 'hotel',
        priceRange: '$200-350',
        pricePerNight: 250,
        seniorFriendly: true
      },
      notes: ['SIGHTSEEING DAY', 'Wildlife is most active at dawn and dusk', 'Carry bear spray (can rent in Jackson)'],
      budgetBreakdown: { accommodation: 250, food: 90, activities: 35, gas: 25, total: 400 }
    },
    {
      id: 'd15',
      dayNumber: 15,
      date: '2025-06-03',
      title: 'Grand Teton - Hiking & Lakes',
      summary: 'Taggart Lake trail, alpine waters, wildlife spotting',
      location: locations.find(l => l.id === 'teton')!,
      overnight: 'Jackson, WY',
      weather: { high: 64, low: 34, conditions: 'Sunny' },
      activities: [
        {
          id: 'a15-1',
          name: 'Jenny Lake Boat Shuttle',
          summary: 'Scenic boat ride - seniors 80+ ride FREE, saves 4+ miles hiking',
          description: 'Take the scenic boat across Jenny Lake to access Hidden Falls with minimal walking. AMAZING senior discount: ages 80+ ride FREE! Saves 4+ miles of hiking.',
          duration: '15 min each way',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          cost: 'Adults $20 RT, Seniors 62+ $17, AGE 80+ FREE!',
          image: 'https://www.nps.gov/grte/planyourvisit/images/Jenny-Lake-Boat-NPS-Photo.jpg',
          url: 'https://jennylakeboating.com/',
          tips: [
            'Mom rides FREE (80+)! Colin $20 round trip',
            'Boats run every 10-15 min, first boat ~8am',
            'No reservations needed - first come first served',
            'Paved path from Visitor Center to boat dock',
            'Season: mid-May through late September'
          ]
        },
        {
          id: 'a15-2',
          name: 'Hidden Falls',
          summary: 'Beautiful 100-ft waterfall - gentle walk from boat dock',
          description: 'Stunning 100-foot waterfall, only 0.5 miles from boat dock. Trail has been rehabilitated and improved - gentle slope suitable for seniors. One of the most rewarding short hikes for the effort!',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          image: 'https://www.nps.gov/grte/planyourvisit/images/Hidden-Falls-NPS-Photo.jpg',
          url: 'https://www.nps.gov/thingstodo/hiddenfalls.htm',
          distance: '0.5 miles from boat dock',
          elevation: { gain: 200, highest: 6900, lowest: 6800 },
          trailhead: { lat: 43.7601, lng: -110.7341, name: 'Jenny Lake Boat Dock (West)' },
          pointsOfInterest: ['100-foot Hidden Falls', 'Cascade Creek', 'Forested canyon'],
          tips: [
            'Trail recently rehabilitated - improved surface',
            'Gentle slope from boat dock to falls',
            'No restrooms on west shore - use Visitor Center before boarding',
            'Better option than Inspiration Point for mobility-limited seniors'
          ]
        },
        {
          id: 'a15-3',
          name: 'Inspiration Point',
          description: 'Stunning view over Jenny Lake. Additional 0.5 mile from Hidden Falls.',
          duration: '45 min',
          difficulty: 'moderate',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '1 mile from boat dock',
          elevation: { gain: 420, highest: 7200, lowest: 6800 },
          trailhead: { lat: 43.7601, lng: -110.7341, name: 'Jenny Lake Boat Dock (West)' },
          pointsOfInterest: ['Jenny Lake panorama', 'Teton Range views', 'Valley overlook'],
          tips: ['Some uphill but worth it', 'Take your time']
        },
        {
          id: 'a15-4',
          name: 'Lunch at Jenny Lake Lodge or picnic',
          description: 'Enjoy lunch with Teton views',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a15-5',
          name: 'Taggart Lake Trail (optional)',
          description: 'Easy 3-mile round trip to beautiful glacial lake',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '3 miles round trip',
          elevation: { gain: 400, highest: 7000, lowest: 6600 },
          trailhead: { lat: 43.7040, lng: -110.7270, name: 'Taggart Lake Trailhead' },
          pointsOfInterest: ['Taggart Lake', 'Teton views', 'Wildflowers in June'],
          tips: ['Well-maintained trail', 'Good wildlife viewing']
        }
      ],
      accommodation: {
        id: 'acc15',
        name: 'Same hotel in Jackson',
        type: 'hotel',
        priceRange: '$200-350',
        pricePerNight: 250,
        seniorFriendly: true
      },
      notes: ['SIGHTSEEING DAY', 'Take it easy after hiking'],
      budgetBreakdown: { accommodation: 250, food: 90, activities: 40, gas: 20, total: 400 }
    },
    {
      id: 'd16',
      dayNumber: 16,
      date: '2025-06-04',
      title: 'Grand Teton - Wildlife & Relaxation',
      summary: 'Sunrise wildlife safari, elk refuge, slow paced day',
      location: locations.find(l => l.id === 'teton')!,
      overnight: 'Jackson, WY',
      weather: { high: 66, low: 36, conditions: 'Partly cloudy' },
      activities: [
        {
          id: 'a16-1',
          name: 'Early morning wildlife drive',
          description: 'Drive Teton Park Road looking for moose, elk, bears',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Dawn is best for wildlife', 'Willow Flats is great for moose']
        },
        {
          id: 'a16-2',
          name: 'Lunch Tree Hill Trail',
          description: 'Easy 0.5 mile walk with interpretive signs and Teton views',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a16-3',
          name: 'Jackson Lake Lodge',
          description: 'Stop for coffee/lunch with picture-window views of Tetons',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['The view from the lobby is spectacular']
        },
        {
          id: 'a16-4',
          name: 'Afternoon rest in Jackson',
          description: 'Shopping, galleries, or spa time',
          duration: '3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a16-5',
          name: 'Sunset at Schwabacher Landing',
          description: 'Return for evening light and potential wildlife',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        }
      ],
      accommodation: {
        id: 'acc16',
        name: 'Same hotel in Jackson',
        type: 'hotel',
        priceRange: '$200-350',
        pricePerNight: 250,
        seniorFriendly: true
      },
      notes: ['BUFFER/SIGHTSEEING DAY', 'Easy pace for recovery'],
      budgetBreakdown: { accommodation: 250, food: 100, activities: 0, gas: 20, total: 370 }
    },
    {
      id: 'd17',
      dayNumber: 17,
      date: '2025-06-05',
      title: 'Yellowstone Day 1 - Geothermal Wonders',
      summary: 'Old Faithful, Grand Prismatic, paint pots and geysers',
      location: locations.find(l => l.id === 'yellowstone')!,
      overnight: 'West Yellowstone or Canyon Village',
      drivingDistance: '60 miles to Old Faithful',
      drivingTime: '1.5 hours',
      weather: { high: 62, low: 32, conditions: 'Variable, possible afternoon storms' },
      activities: [
        {
          id: 'a17-1',
          name: 'Drive to Old Faithful',
          description: 'Enter Yellowstone from South Entrance via Grand Teton',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Check road conditions - some may still be closed in early June']
        },
        {
          id: 'a17-2',
          name: 'Old Faithful Geyser',
          summary: 'Erupts every 65-95 min, wheelchair accessible, benches available',
          description: 'Watch the world\'s most famous geyser erupt! Predictions accurate to +/- 20 min. Fully accessible viewing area with dozens of benches. 5 miles of boardwalk trails in Upper Geyser Basin.',
          duration: '2-3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          image: 'https://www.nps.gov/common/uploads/cropped_image/primary/CC5B8B1A-0A60-99EB-3FC7C5D2C88DE3BA.jpg',
          url: 'https://www.nps.gov/yell/planyourvisit/geyser-activity.htm',
          tips: [
            'Erupts every 65-95 min - check predictions at Visitor Center',
            'Arrive 30 min before predicted time for best seats',
            'Viewing area fully wheelchair accessible with benches',
            'Wheelchair rental at Old Faithful clinic: $15/day',
            '5 miles of paved boardwalk trails in Upper Geyser Basin',
            'Free NPS app shows live geyser predictions'
          ]
        },
        {
          id: 'a17-3',
          name: 'Grand Prismatic Spring',
          summary: 'Largest US hot spring - boardwalk wheelchair accessible',
          description: 'America\'s largest hot spring (370 ft diameter) with stunning rainbow colors from thermophilic bacteria. Midway Geyser Basin boardwalk is wheelchair accessible - 0.8 miles, paved asphalt and wooden boardwalk.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          image: 'https://www.nps.gov/common/uploads/cropped_image/primary/DA88A5B5-FB2A-CF2E-CA47D5BEFB39E0C2.jpg',
          url: 'https://www.nps.gov/yell/planyourvisit/midway-geyser-basin.htm',
          tips: [
            'Boardwalk is WHEELCHAIR ACCESSIBLE (0.8 mi)',
            'Best colors on warm, calm days (steam obscures view on cold/windy days)',
            'Overlook trail (1.2 mi RT) is NOT accessible - dirt/gravel, 105 ft elevation gain',
            '3 designated accessible parking spots',
            'Wheelchair-accessible restrooms at trailhead',
            'Can\'t fully appreciate colors from ground level - that\'s normal!'
          ]
        },
        {
          id: 'a17-4',
          name: 'Midway Geyser Basin',
          description: 'Walk boardwalks past Excelsior Geyser and other thermal features',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a17-5',
          name: 'Fountain Paint Pots',
          description: 'Bubbling mud pots and colorful thermal features',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        }
      ],
      accommodation: {
        id: 'acc17',
        name: 'Old Faithful Inn / Canyon Lodge / West Yellowstone',
        type: 'lodge',
        priceRange: '$200-350',
        pricePerNight: 280,
        seniorFriendly: true,
        notes: 'In-park lodges book 6+ months ahead. West Yellowstone is good alternative.'
      },
      notes: ['SIGHTSEEING DAY', 'Stay on boardwalks - thermal areas are dangerous', 'Bring layers - weather changes quickly'],
      budgetBreakdown: { accommodation: 280, food: 90, activities: 35, gas: 30, total: 435 }
    },
    {
      id: 'd18',
      dayNumber: 18,
      date: '2025-06-06',
      title: 'Yellowstone Day 2 - Canyon & Wildlife',
      summary: 'Grand Canyon of Yellowstone, Hayden Valley bison',
      location: locations.find(l => l.id === 'yellowstone')!,
      overnight: 'West Yellowstone, MT',
      weather: { high: 60, low: 30, conditions: 'Sunny' },
      activities: [
        {
          id: 'a18-1',
          name: 'Grand Canyon of Yellowstone - Artist Point',
          summary: '308-ft falls, wheelchair accessible - most accessible area in park',
          description: 'Visit Artist Point for the iconic view of Lower Falls (308 ft - twice height of Niagara!). Canyon area is considered the MOST accessible area in the entire park.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          image: 'https://www.nps.gov/common/uploads/cropped_image/primary/CBEE1C2F-A0D0-C127-7F8F2F9C0E8C9E08.jpg',
          url: 'https://www.nps.gov/yell/planyourvisit/canyon.htm',
          distance: '0.3 miles out-and-back',
          tips: [
            'WHEELCHAIR ACCESSIBLE - smooth asphalt path 6+ ft wide',
            '4+ van-accessible parking spaces on South Rim Drive',
            'Recently restored as part of accessibility project',
            'Other accessible viewpoints: Inspiration Point, Lookout Point, Grand View',
            'Accessibility coordinator: 307-344-2314'
          ]
        },
        {
          id: 'a18-2',
          name: 'Hayden Valley Wildlife',
          description: 'Drive through prime wildlife habitat. Look for bison, elk, sometimes wolves.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Bring binoculars', 'Early morning or evening best', 'Bison often block road']
        },
        {
          id: 'a18-3',
          name: 'Norris Geyser Basin (if time)',
          description: 'Most volatile thermal area, home to Steamboat Geyser (tallest active)',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a18-4',
          name: 'Drive to West Yellowstone',
          description: 'Exit via West Entrance to base yourself for Glacier drive tomorrow',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        }
      ],
      accommodation: {
        id: 'acc18',
        name: 'Explorer Cabins at Yellowstone / Holiday Inn West Yellowstone',
        type: 'hotel',
        priceRange: '$180-280',
        pricePerNight: 220,
        seniorFriendly: true
      },
      notes: ['SIGHTSEEING DAY'],
      budgetBreakdown: { accommodation: 220, food: 90, activities: 35, gas: 40, total: 385 }
    },
    {
      id: 'd19',
      dayNumber: 19,
      date: '2025-06-07',
      title: 'West Yellowstone - Buffer Day',
      summary: 'Buffer day in West Yellowstone. Colin works, Mom relaxes.',
      location: locations.find(l => l.id === 'west_yellowstone')!,
      overnight: 'West Yellowstone, MT',
      weather: { high: 65, low: 35, conditions: 'Sunny' },
      activities: [
        {
          id: 'a19-1',
          name: 'Sleep In & Leisurely Morning',
          description: 'No alarm! Enjoy a slow morning after two days of Yellowstone exploring.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a19-2',
          name: 'Colin: Remote Work Session',
          description: 'Catch up on work while Mom relaxes. Good wifi at hotel or local cafes.',
          duration: '4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a19-3',
          name: 'Mom: Relaxation & Town Exploration',
          description: 'Explore the charming Western town, shops, or just rest at the hotel.',
          duration: '4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a19-4',
          name: 'Dinner in West Yellowstone',
          description: 'Nice dinner in this gateway town.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Many good restaurants along Canyon Street']
        }
      ],
      accommodation: {
        id: 'acc19',
        name: 'Same hotel in West Yellowstone',
        type: 'hotel',
        priceRange: '$180-280',
        pricePerNight: 220,
        seniorFriendly: true
      },
      notes: ['BUFFER/WORK DAY - recharge before Montana drive!', 'Colin catches up on work', 'No sightseeing required'],
      budgetBreakdown: { accommodation: 220, food: 100, activities: 0, gas: 0, total: 320 }
    },
    {
      id: 'd20',
      dayNumber: 20,
      date: '2025-06-08',
      title: 'West Yellowstone → Helena, Montana',
      summary: 'Long scenic drive north, Montana big sky country begins',
      location: locations.find(l => l.id === 'helena')!,
      overnight: 'Helena, MT',
      drivingDistance: '290 miles',
      drivingTime: '4.5 hours',
      weather: { high: 72, low: 45, conditions: 'Sunny' },
      activities: [
        {
          id: 'a20-1',
          name: 'Drive to Helena',
          description: 'Scenic drive through Bozeman and Montana ranch country',
          duration: '4.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Take breaks every 2 hours', 'Stop in Bozeman or Butte for lunch']
        },
        {
          id: 'a20-2',
          name: 'Last Chance Gulch',
          description: 'Walk Helena\'s historic downtown pedestrian mall',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Named for gold mining history', 'Charming shops and restaurants']
        }
      ],
      accommodation: {
        id: 'acc20',
        name: 'DoubleTree by Hilton Helena / Best Western Premier',
        type: 'hotel',
        priceRange: '$120-180',
        pricePerNight: 150,
        seniorFriendly: true
      },
      notes: ['DRIVING DAY - but shorter than from Jackson!', 'Helena is Montana state capital'],
      budgetBreakdown: { accommodation: 150, food: 80, activities: 0, gas: 60, total: 290 }
    },
    {
      id: 'd21',
      dayNumber: 21,
      date: '2025-06-09',
      title: 'Helena → Glacier National Park',
      summary: 'Morning drive, arrive Whitefish, first glacier glimpses',
      location: locations.find(l => l.id === 'glacier')!,
      overnight: 'West Glacier / Whitefish',
      drivingDistance: '190 miles',
      drivingTime: '3.5 hours',
      weather: { high: 65, low: 40, conditions: 'Partly cloudy' },
      activities: [
        {
          id: 'a21-1',
          name: 'Drive to Glacier National Park',
          description: 'Beautiful drive north through Montana to the Crown of the Continent',
          duration: '3.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a21-2',
          name: 'Apgar Visitor Center',
          description: 'Get oriented, check on road and trail conditions',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a21-3',
          name: 'Lake McDonald',
          description: 'Walk along the shore of stunning turquoise glacial lake',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Famous for colorful rocks in clear water', 'Beautiful at sunset']
        },
        {
          id: 'a21-4',
          name: 'Trail of the Cedars',
          summary: 'BEST trail for seniors - wheelchair accessible boardwalk, ancient cedars',
          description: 'One of only TWO wheelchair-accessible trails in Glacier! Raised wooden boardwalk through ancient western red cedars (up to 7 ft diameter, 100 ft tall). Views of Avalanche Gorge. THE best trail for mobility-limited visitors.',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          image: 'https://www.nps.gov/glac/planyourvisit/images/trail-of-the-cedars-boardwalk.jpg',
          url: 'https://www.nps.gov/places/trail-of-the-cedars.htm',
          distance: '1 mile loop',
          elevation: { gain: 60, highest: 3250, lowest: 3200 },
          trailhead: { lat: 48.6792, lng: -113.8183, name: 'Avalanche Creek Trailhead' },
          pointsOfInterest: ['Ancient cedar grove (7 ft diameter!)', 'Avalanche Gorge', 'Colorful rocks in creek', 'Western hemlocks'],
          tips: [
            'WHEELCHAIR ACCESSIBLE - one of only 2 in the park!',
            'Raised boardwalk (eastern half) + compact dirt (western)',
            'Benches available along trail',
            '2 van-accessible parking spaces - arrive early',
            'Peaceful, shaded, perfect for hot days',
            'Red Buses stop here and spend extra time'
          ]
        }
      ],
      accommodation: {
        id: 'acc21',
        name: 'Glacier Outdoor Center / West Glacier Village',
        type: 'lodge',
        priceRange: '$180-300',
        pricePerNight: 240,
        seniorFriendly: true,
        notes: 'Whitefish is 25 min away with more lodging options and a charming downtown'
      },
      reservationsNeeded: ['Going-to-the-Sun Road vehicle reservation may be needed'],
      notes: ['DRIVING DAY', 'Check if Going-to-the-Sun Road is fully open (typically opens mid-June)'],
      budgetBreakdown: { accommodation: 240, food: 80, activities: 35, gas: 45, total: 400 }
    },
    {
      id: 'd22',
      dayNumber: 22,
      date: '2025-06-10',
      title: 'Glacier - Going-to-the-Sun Road',
      summary: 'America\'s most scenic drive, Logan Pass, alpine vistas',
      location: locations.find(l => l.id === 'glacier')!,
      overnight: 'West Glacier / Whitefish',
      weather: { high: 62, low: 38, conditions: 'Variable mountain weather' },
      activities: [
        {
          id: 'a22-1',
          name: 'Going-to-the-Sun Road Drive',
          summary: '⚠️ CRITICAL: Road likely NOT fully open June 7-12 - opens mid-June!',
          description: '50 miles of Americas most spectacular mountain road. IMPORTANT: Road typically opens to Logan Pass mid-to-late June. In 2025, it fully opened June 16. Your dates (June 7-12) may have partial access only.',
          duration: '3-4 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          reservationUrl: 'https://www.recreation.gov/timed-entry/10087086',
          image: 'https://www.nps.gov/glac/planyourvisit/images/Going-to-the-Sun-Road-NPS.jpg',
          url: 'https://www.nps.gov/glac/planyourvisit/gtsrinfo.htm',
          tips: [
            '⚠️ Road typically opens mid-to-late June (opened June 16 in 2025)',
            'Your dates June 7-12: Expect PARTIAL ACCESS ONLY',
            'West side likely open to Avalanche Creek',
            'East side (St. Mary) usually opens before Logan Pass',
            'Timed entry required June 13 - Sept 28 (7am-3pm)',
            'Book reservations at Recreation.gov - $2 fee',
            'Check road status: nps.gov/glac/planyourvisit/conditions.htm',
            'Alternative: Take Red Bus Tour - they handle the driving!'
          ]
        },
        {
          id: 'a22-2',
          name: 'Logan Pass Visitor Center',
          description: 'High point of the road at 6,646 ft. Stunning alpine scenery.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Can be cold and windy even in June', 'Mountain goats often seen here']
        },
        {
          id: 'a22-3',
          name: 'Hidden Lake Overlook (if able)',
          description: '2.7 mile round trip boardwalk trail to overlook. Some elevation gain.',
          duration: '2 hours',
          difficulty: 'moderate',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '2.7 miles round trip',
          elevation: { gain: 500, highest: 7050, lowest: 6646 },
          trailhead: { lat: 48.6967, lng: -113.7181, name: 'Logan Pass Visitor Center' },
          pointsOfInterest: ['Hidden Lake vista', 'Alpine wildflowers', 'Mountain goat sightings'],
          tips: ['May still have snow in early June', 'First section to overlook is accessible']
        },
        {
          id: 'a22-4',
          name: 'Sunrift Gorge',
          description: 'Quick stop - gorge viewable from parking area',
          duration: '15 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a22-5',
          name: 'St. Mary Falls (optional)',
          description: 'Easy 1.6 mile round trip to beautiful waterfall',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '1.6 miles round trip',
          elevation: { gain: 285, highest: 5080, lowest: 4795 },
          trailhead: { lat: 48.6685, lng: -113.5350, name: 'St. Mary Falls Trailhead' },
          pointsOfInterest: ['St. Mary Falls', 'Virginia Falls (0.3 mi further)', 'Forest canyon views']
        }
      ],
      accommodation: {
        id: 'acc22',
        name: 'Same accommodation',
        type: 'lodge',
        priceRange: '$180-300',
        pricePerNight: 240,
        seniorFriendly: true
      },
      notes: ['SIGHTSEEING DAY', 'CRITICAL: Check if Going-to-the-Sun Road is fully open', 'Road may not fully open until late June in heavy snow years', 'Weather can change rapidly at elevation - bring layers'],
      budgetBreakdown: { accommodation: 240, food: 80, activities: 35, gas: 30, total: 385 }
    },
    {
      id: 'd23',
      dayNumber: 23,
      date: '2025-06-11',
      title: 'Glacier - Explore & Buffer Day',
      summary: 'Lake McDonald, Trail of the Cedars, flexible exploration',
      location: locations.find(l => l.id === 'glacier')!,
      overnight: 'West Glacier / Whitefish',
      weather: { high: 64, low: 40, conditions: 'Sunny' },
      activities: [
        {
          id: 'a23-1',
          name: 'Johns Lake Trail',
          description: 'Serene 1.1-mile walk through moss-covered forest to peaceful lake',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a23-2',
          name: 'McDonald Falls & Sacred Dancing Cascade',
          description: 'Short walk to two beautiful waterfalls along McDonald Creek',
          duration: '45 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a23-3',
          name: 'Red Bus Tour - HIGHLY RECOMMENDED',
          summary: 'Historic 1930s open-top buses - best way to see the park!',
          description: 'Iconic vintage open-top Red Buses (built 1936-1939) with roll-back canvas tops. Narrated tour by expert driver-guides. TWO wheelchair-accessible buses available with lifts and tie-downs. EXCELLENT option for seniors!',
          duration: '3.5-9.5 hours depending on tour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          reservationUrl: 'https://www.glaciernationalparklodges.com/red-bus-tours/',
          image: 'https://www.nps.gov/glac/planyourvisit/images/RedBusTour-NPS.jpg',
          url: 'https://www.nps.gov/glac/planyourvisit/bus-tours.htm',
          cost: '$68-132 per person depending on tour',
          tips: [
            '2 wheelchair-accessible buses with lifts available',
            'June 7-12 options: Huckleberry Mountain ($86) or Secret Valley ($68-86)',
            'Full Going-to-the-Sun tours start June 21 after road opens',
            'Book at 855-733-4522 or online',
            'Check-in 15 min before departure',
            'Bring park pass or entrance receipt',
            'Dress in layers - mountain weather variable'
          ]
        },
        {
          id: 'a23-4',
          name: 'Explore Whitefish downtown',
          description: 'Charming mountain town with shops, restaurants, breweries',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        }
      ],
      accommodation: {
        id: 'acc23',
        name: 'Same accommodation',
        type: 'lodge',
        priceRange: '$180-300',
        pricePerNight: 240,
        seniorFriendly: true
      },
      notes: ['BUFFER DAY', 'Buffer day for weather or to revisit favorite spots', 'Whitefish is a great rest day option'],
      budgetBreakdown: { accommodation: 240, food: 80, activities: 50, gas: 20, total: 390 }
    },
    {
      id: 'd24',
      dayNumber: 24,
      date: '2025-06-12',
      title: 'Glacier - Many Glacier (if accessible)',
      summary: 'East side adventure, Swiftcurrent Lake, grizzly country',
      location: locations.find(l => l.id === 'glacier')!,
      overnight: 'Whitefish / West Glacier',
      weather: { high: 65, low: 42, conditions: 'Partly cloudy' },
      activities: [
        {
          id: 'a24-1',
          name: 'Drive to Many Glacier',
          description: 'If road is open, visit the "American Switzerland" area on east side',
          duration: '2 hours drive',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Check if Many Glacier Road is open', 'One of the most scenic areas', 'Good chance of seeing bears']
        },
        {
          id: 'a24-2',
          name: 'Many Glacier Hotel',
          description: 'Historic Swiss-style lodge on Swiftcurrent Lake',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Even if not staying here, worth a visit', 'Beautiful lobby and views']
        },
        {
          id: 'a24-3',
          name: 'Boat ride on Swiftcurrent Lake (optional)',
          description: 'Scenic boat tour on glacial lake',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Check if tours are operating in early June']
        },
        {
          id: 'a24-4',
          name: 'Grinnell Lake View',
          description: 'Short walks near Many Glacier for stunning turquoise lake views',
          duration: '1-2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        }
      ],
      accommodation: {
        id: 'acc24',
        name: 'Same accommodation or Many Glacier Hotel',
        type: 'lodge',
        priceRange: '$180-400',
        pricePerNight: 250,
        seniorFriendly: true
      },
      notes: ['SIGHTSEEING DAY', 'Many Glacier road may not be open in early June', 'Have backup plan to enjoy west side more'],
      budgetBreakdown: { accommodation: 250, food: 80, activities: 30, gas: 45, total: 405 }
    },
    {
      id: 'd25',
      dayNumber: 25,
      date: '2025-06-13',
      title: 'Glacier - Final Day / Buffer',
      summary: 'Revisit favorites, catch what you missed, last glacier views',
      location: locations.find(l => l.id === 'glacier')!,
      overnight: 'Whitefish, MT',
      weather: { high: 68, low: 44, conditions: 'Sunny' },
      activities: [
        {
          id: 'a25-1',
          name: 'Avalanche Lake Trail (if able)',
          description: '4.5 mile round trip to dramatic glacial lake with waterfalls',
          duration: '3 hours',
          difficulty: 'moderate',
          seniorFriendly: true,
          reservationRequired: false,
          distance: '4.5 miles round trip',
          elevation: { gain: 730, highest: 3930, lowest: 3200 },
          trailhead: { lat: 48.6792, lng: -113.8183, name: 'Avalanche Creek Trailhead' },
          pointsOfInterest: ['Avalanche Lake', 'Glacier-fed waterfalls', 'Sperry Glacier views'],
          tips: ['Starts from Trail of the Cedars', '730 ft elevation gain', 'Go early to avoid crowds']
        },
        {
          id: 'a25-2',
          name: 'Lunch at Lake McDonald Lodge',
          description: 'Historic lodge with rustic charm',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a25-3',
          name: 'Final sunset at Lake McDonald',
          description: 'One last evening by the beautiful lake',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a25-4',
          name: 'Dinner in Whitefish',
          description: 'Celebrate the trip with a nice dinner',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        }
      ],
      accommodation: {
        id: 'acc25',
        name: 'Whitefish Mountain Resort / Lodge at Whitefish Lake',
        type: 'hotel',
        priceRange: '$200-300',
        pricePerNight: 250,
        seniorFriendly: true,
        notes: 'Stay in Whitefish for easy airport access'
      },
      notes: ['BUFFER DAY', 'Prepare for departure in 2 days', 'Review trip photos and memories'],
      budgetBreakdown: { accommodation: 250, food: 100, activities: 0, gas: 20, total: 370 }
    },
    // ============================================
    // OPTION A: PORTLAND WEEKEND (Days 26-27)
    // Drive Whitefish → Portland, use Chase Reserve $300 dining credit
    // Fly home from PDX instead of FCA
    // ============================================
    {
      id: 'd26',
      dayNumber: 26,
      date: '2025-06-14',
      title: 'Whitefish → Portland (Road Trip Finale)',
      summary: 'Scenic 8-hour drive to Portland for a foodie weekend',
      location: locations.find(l => l.id === 'portland')!,
      overnight: 'Portland, OR',
      drivingDistance: '530 miles',
      drivingTime: '8 hours',
      weather: { high: 75, low: 55, conditions: 'Sunny' },
      activities: [
        {
          id: 'a26-1',
          name: 'Early Start from Whitefish',
          description: 'Leave by 7am for the drive to Portland. Beautiful scenery through Montana, Idaho, and Washington/Oregon.',
          duration: '8 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Pack snacks and lunch', 'Stop at Coeur d\'Alene for break', 'Scenic Columbia River Gorge on approach to Portland']
        },
        {
          id: 'a26-2',
          name: 'Check into Portland Hotel',
          description: 'Arrive ~4pm. Check into hotel in Pearl District or Downtown for walkability.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          tips: ['The Hoxton, Woodlark Hotel, or Hotel Lucia all excellent', 'Request ground floor for Mom']
        },
        {
          id: 'a26-3',
          name: 'Dinner: L\'Orange ⭐ Chase Reserve',
          description: 'NYT Best Restaurants 2024. Intimate Mediterranean upstairs gem. BOOK AHEAD.',
          duration: '2.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          reservationUrl: 'https://www.opentable.com/r/lorange-portland',
          tips: ['Chase Sapphire Reserve Exclusive Table', 'Use your $300 annual dining credit!', 'Book via OpenTable']
        }
      ],
      accommodation: {
        id: 'acc26-pdx',
        name: 'The Hoxton Portland / Woodlark Hotel',
        type: 'hotel',
        priceRange: '$200-300',
        pricePerNight: 250,
        seniorFriendly: true,
        notes: 'Central location, walkable to restaurants. Rooftop bar at Hoxton.'
      },
      notes: ['DRIVING DAY', 'Long but scenic drive', 'PORTLAND WEEKEND - Use Chase Reserve $300 credit!'],
      budgetBreakdown: { accommodation: 250, food: 150, activities: 0, gas: 80, total: 480 }
    },
    {
      id: 'd27',
      dayNumber: 27,
      date: '2025-06-15',
      title: 'Portland Foodie Sunday',
      summary: 'Explore Portland, brunch, Powell\'s Books, dinner at Chase Reserve restaurant',
      location: locations.find(l => l.id === 'portland')!,
      overnight: 'Portland, OR',
      weather: { high: 78, low: 56, conditions: 'Partly Cloudy' },
      activities: [
        {
          id: 'a27-1',
          name: 'Brunch: Canard ⭐ Chase Reserve',
          description: 'Wine bar meets casual eatery from the Le Pigeon team. Perfect for brunch.',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          reservationUrl: 'https://www.opentable.com/r/canard-portland',
          tips: ['Another Chase Reserve restaurant!', 'Great wine selection', 'Casual but excellent']
        },
        {
          id: 'a27-2',
          name: 'Powell\'s City of Books',
          description: 'World\'s largest independent bookstore. A full city block of books! Mom will love it.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Get a map at the entrance', 'Rare book room is amazing', 'Great for souvenirs']
        },
        {
          id: 'a27-3',
          name: 'Explore Pearl District',
          description: 'Walk around the trendy Pearl District. Art galleries, boutiques, coffee shops.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a27-4',
          name: 'Rest at Hotel',
          description: 'Afternoon rest before the final dinner of the trip.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a27-5',
          name: 'Dinner: Arden or Nodoguro ⭐ Chase Reserve',
          description: 'Final celebration dinner! Arden for PNW cuisine ($75 prix fixe) or Nodoguro for 20-course kaiseki experience.',
          duration: '2.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          reservationUrl: 'https://www.opentable.com/r/arden-portland',
          tips: ['Both are Chase Reserve Exclusive Tables', 'Nodoguro is more adventurous', 'Arden more approachable for Mom']
        }
      ],
      accommodation: {
        id: 'acc27-pdx',
        name: 'Same hotel in Portland',
        type: 'hotel',
        priceRange: '$200-300',
        pricePerNight: 250,
        seniorFriendly: true
      },
      notes: ['FOODIE DAY', 'Multiple Chase Reserve options', 'Pack tonight - fly home tomorrow'],
      budgetBreakdown: { accommodation: 250, food: 200, activities: 0, gas: 0, total: 450 }
    },
    // ============================================
    // OPTION B: STAY IN WHITEFISH (Original Plan)
    // Keep relaxing near Glacier, fly home from FCA
    // ============================================
    /*
    {
      id: 'd26-alt',
      dayNumber: 26,
      date: '2025-06-14',
      title: 'Whitefish - Relaxation Day',
      summary: 'Easy day in charming Whitefish, spa, shopping, rest',
      location: locations.find(l => l.id === 'whitefish')!,
      overnight: 'Whitefish, MT',
      weather: { high: 72, low: 48, conditions: 'Sunny' },
      activities: [
        {
          id: 'a26-1',
          name: 'Sleep In & Leisurely Breakfast',
          description: 'No rush today! Enjoy a slow morning at the hotel or a cafe in downtown Whitefish.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a26-2',
          name: 'Explore Downtown Whitefish',
          description: 'Charming mountain town with boutiques, galleries, and cafes. Great for leisurely strolling.',
          duration: '2-3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Great local shops', 'Art galleries', 'Many cafes for coffee breaks']
        },
        {
          id: 'a26-3',
          name: 'Spa or Rest Time',
          description: 'Book a massage, enjoy the hotel amenities, or just rest. Well deserved after 3+ weeks of adventure!',
          duration: '2-3 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a26-4',
          name: 'Dinner at Whitefish Lake Restaurant',
          description: 'Upscale dining with lake views. Perfect for a celebration dinner.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        }
      ],
      accommodation: {
        id: 'acc26',
        name: 'Lodge at Whitefish Lake / Grouse Mountain Lodge',
        type: 'hotel',
        priceRange: '$180-280',
        pricePerNight: 220,
        seniorFriendly: true,
        notes: 'Nice property with lake access'
      },
      notes: ['RELAXATION DAY', 'No driving, no hiking - just rest!', 'Enjoy the mountain town vibe'],
      budgetBreakdown: { accommodation: 220, food: 100, activities: 50, gas: 0, total: 370 }
    },
    */
    // Day 28: Fly Home from Portland (PORTLAND OPTION)
    {
      id: 'd28',
      dayNumber: 28,
      date: '2025-06-16',
      title: 'Fly Home from Portland',
      summary: 'Colin home to Seattle, Mom connects to Toronto. End of an epic trip!',
      location: locations.find(l => l.id === 'portland')!,
      overnight: 'Home!',
      weather: { high: 72, low: 54, conditions: 'Clear' },
      activities: [
        {
          id: 'a28-1',
          name: 'Return Rental Car at PDX',
          description: 'Drop off the rental car at Portland International Airport by 9am.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Fill gas before returning', 'PDX is easy to navigate', 'Allow 30 min for return process']
        },
        {
          id: 'a28-2',
          name: 'Colin: PDX → SEA (Alaska ~1hr)',
          description: 'Short flight home to Seattle. Multiple daily flights available.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          tips: ['~$89-120 one way', 'Home by noon!', 'What a trip!']
        },
        {
          id: 'a28-3',
          name: 'Mom: PDX → YYZ (Direct options available)',
          description: 'Alaska or Air Canada fly direct PDX→YYZ. ~4.5 hour flight.',
          duration: '6 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          tips: ['Request wheelchair assistance', 'Direct flight available!', 'Arrive Toronto ~6pm']
        }
      ],
      accommodation: {
        id: 'acc28-home',
        name: 'Home!',
        type: 'hotel',
        priceRange: '$0',
        pricePerNight: 0,
        seniorFriendly: true
      },
      notes: ['TRAVEL DAY', '28 AMAZING DAYS COMPLETE!', 'Portland option saves 2 days vs FCA'],
      budgetBreakdown: { accommodation: 0, food: 30, activities: 0, gas: 0, total: 30 }
    }
    // ============================================
    // Remaining days 28-30 for FCA option are commented out above
    // Uncomment and use if skipping Portland
    // ============================================
  ],
  totalBudget: {
    flights: 736,
    carRental: 1460,
    accommodations: 6200,
    food: 2400,
    activities: 700,
    gas: 750,
    misc: 500,
    total: 12746
  },
  // EDITABLE COST BREAKDOWN - Swap options by changing prices
  costBreakdown: {
    flights: {
      colinOutbound: { description: 'SEA→PHX (Alaska)', price: 90, editable: true },
      momOutbound: { description: 'YYZ→PHX (Porter DIRECT)', price: 220, editable: true },
      colinReturn: { description: 'PDX→SEA (Alaska)', price: 89, editable: true },
      momReturn: { description: 'PDX→YYZ (Alaska/AC)', price: 300, editable: true },
      total: 699
    },
    carRental: {
      dailyRate: 45,
      days: 27,
      dropoffFee: 200,
      total: 1415,
      notes: 'PHX→PDX one-way, AWD SUV'
    },
    passengerAssistance: {
      cost: 0,
      notes: 'FREE - Request 48hrs ahead. Alaska: 1-800-252-7522. Porter: 1-833-909-0909'
    },
    accommodationAvg: 220,
    foodPerDay: 85,
    gasEstimate: 800
  },
  /* COMMENTED OUT: FCA Option days 28-30
     Uncomment these and comment out Portland days if flying from Glacier instead

  // Day 28 FCA Option:
  {
    id: 'd28-fca',
    dayNumber: 28,
    date: '2025-06-16',
    title: 'Flexible Buffer Day',
    summary: 'Optional extra Glacier day or rest before departure',
      location: locations.find(l => l.id === 'glacier')!,
      overnight: 'Whitefish, MT',
      weather: { high: 72, low: 46, conditions: 'Partly Cloudy' },
      activities: [
        {
          id: 'a28-1',
          name: 'Option A: Return to Glacier',
          description: 'One more visit to favorite spots - Lake McDonald, Trail of the Cedars, or Apgar Village',
          duration: '4-5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Last chance for photos!', 'Visit the gift shop', 'Say goodbye to the glaciers']
        },
        {
          id: 'a28-2',
          name: 'Option B: Rest Day in Whitefish',
          description: 'Stay in town and relax. Read, nap, enjoy the hotel.',
          duration: 'All day',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a28-3',
          name: 'Pack and Organize',
          description: 'Get everything ready for departure. Check flight details.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Confirm Alaska flight AS2331', 'Request wheelchair assist if not already done', 'Print boarding passes']
        }
      ],
      accommodation: {
        id: 'acc28',
        name: 'Same hotel in Whitefish',
        type: 'hotel',
        priceRange: '$180-280',
        pricePerNight: 220,
        seniorFriendly: true
      },
      notes: ['FLEXIBLE DAY', 'Do what feels right', 'Flight is day after tomorrow'],
      budgetBreakdown: { accommodation: 220, food: 80, activities: 0, gas: 15, total: 315 }
    },
    {
      id: 'd29',
      dayNumber: 29,
      date: '2025-06-17',
      title: 'Final Day - Return Rental Car',
      summary: 'Last day in Montana. Return rental car at FCA, stay near airport.',
      location: locations.find(l => l.id === 'kalispell')!,
      overnight: 'Kalispell (near FCA airport)',
      drivingDistance: '25 miles',
      weather: { high: 74, low: 48, conditions: 'Sunny' },
      activities: [
        {
          id: 'a29-1',
          name: 'Late Checkout & Final Breakfast',
          description: 'No rush! Enjoy a leisurely last breakfast in Whitefish.',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false
        },
        {
          id: 'a29-2',
          name: 'Drive to Kalispell & Return Rental Car',
          description: 'Short 25-min drive to Glacier Park International Airport (FCA). Return the rental car by 5pm.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Take photos of the car', 'Get gas before returning', 'Check for personal items']
        },
        {
          id: 'a29-3',
          name: 'Check into Airport Hotel',
          description: 'Walk or shuttle to nearby hotel. Early 6am flight tomorrow requires staying close.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true
        },
        {
          id: 'a29-4',
          name: 'Farewell Dinner',
          description: 'Final dinner together celebrating an amazing 30-day adventure!',
          duration: '2 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Montana Club Restaurant', 'Norm\'s News for casual', 'Keep it light - early morning ahead!']
        },
        {
          id: 'a29-5',
          name: 'Early Night - 4am Wake Up',
          description: 'Get to bed early! 6am flight means airport by 4:30am.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Set multiple alarms', 'Pack carry-ons tonight', 'Confirm passenger assistance']
        }
      ],
      accommodation: {
        id: 'acc29',
        name: 'Red Lion Kalispell / Hampton Inn Kalispell',
        type: 'hotel',
        priceRange: '$130-180',
        pricePerNight: 150,
        seniorFriendly: true,
        notes: 'Walking distance or free shuttle to FCA. Book room near lobby for easy exit.'
      },
      notes: ['TRAVEL PREP DAY', 'Return car by 5pm', 'Early dinner, early bed', '6AM FLIGHT TOMORROW'],
      budgetBreakdown: { accommodation: 150, food: 80, activities: 0, gas: 10, total: 240 }
    },
    {
      id: 'd30',
      dayNumber: 30,
      date: '2025-06-18',
      title: 'Fly Home - End of Trip',
      summary: 'Colin to Seattle, Mom to Toronto. What an adventure!',
      location: locations.find(l => l.id === 'kalispell')!,
      overnight: 'Home!',
      weather: { high: 70, low: 45, conditions: 'Clear skies for flying' },
      activities: [
        {
          id: 'a30-1',
          name: '4:00 AM - Wake Up & Get Ready',
          description: 'Early wake up for 6am flight. Quick shower, final packing check.',
          duration: '30 min',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Clothes laid out from night before', 'Quick hotel breakfast if available']
        },
        {
          id: 'a30-2',
          name: '4:30 AM - Arrive at FCA Airport',
          description: 'Small airport but arrive 90min early. Check in, get passenger assistance for Mom.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Alaska desk opens early', 'Wheelchair assist at check-in', 'FCA is very manageable']
        },
        {
          id: 'a30-3',
          name: '6:00 AM - Alaska AS2331 FCA → SEA',
          description: '1hr 21min flight to Seattle. Beautiful mountain views from the air!',
          duration: '1.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          tips: ['Window seat for views', 'Arrive SEA 7:21am', 'Colin heads home from here!']
        },
        {
          id: 'a30-4',
          name: '7:21 AM - Arrive Seattle / Colin Home',
          description: 'Colin says goodbye and takes light rail home. Mom continues to Toronto.',
          duration: '1 hour',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: false,
          tips: ['Goodbye hugs!', 'What an incredible trip!', 'Start planning the next one!']
        },
        {
          id: 'a30-5',
          name: '10:45 AM - Alaska AS385 SEA → YYZ (Mom only)',
          description: 'Mom\'s connecting flight to Toronto. 4h 15m flight arriving 5:40pm Eastern.',
          duration: '4.5 hours',
          difficulty: 'easy',
          seniorFriendly: true,
          reservationRequired: true,
          tips: ['Passenger assistance throughout', 'Direct to Toronto!', 'Arrival 5:40pm local time']
        }
      ],
      accommodation: {
        id: 'acc30',
        name: 'N/A - Flying home!',
        type: 'hotel',
        priceRange: '$0',
        pricePerNight: 0,
        seniorFriendly: true
      },
      notes: ['TRAVEL DAY', 'Colin: FCA→SEA, home by 9am', 'Mom: FCA→SEA→YYZ, home by 6pm', '30 AMAZING DAYS COMPLETE!'],
      budgetBreakdown: { accommodation: 0, food: 30, activities: 0, gas: 0, total: 30 }
    }
  END OF FCA OPTION */
  packingList: [
    'Sturdy walking/hiking shoes (broken in)',
    'Sandals for evenings',
    'Light hiking pants',
    'Shorts (for Arizona/Utah)',
    'T-shirts and long-sleeve shirts',
    'Fleece jacket',
    'Rain jacket/windbreaker',
    'Light down jacket (mountains)',
    'Sun hat with brim',
    'Warm beanie (Yellowstone/Glacier)',
    'Sunglasses',
    'Sunscreen SPF 50+',
    'Lip balm with SPF',
    'Prescription medications (extra supply)',
    'Basic first aid kit',
    'Insect repellent',
    'Reusable water bottles (2 per person)',
    'Electrolyte packets',
    'Binoculars (wildlife!)',
    'Camera and chargers',
    'Portable phone charger',
    'Trekking poles (recommended for stability)',
    'Day backpack',
    'Bear spray (rent in Jackson or Glacier area)',
    'National Park Passport book (for stamps)'
  ],
  importantReservations: [
    { item: 'Upper Antelope Canyon Tour', bookBy: '2-3 months ahead', website: 'https://www.antelopecanyon.com/', notes: 'Book 12pm tour for best light beams' },
    { item: 'Arches Timed Entry', bookBy: '3 months ahead', website: 'https://www.recreation.gov/timed-entry/10088426', notes: 'Required April-October' },
    { item: 'Glacier Going-to-the-Sun Entry', bookBy: 'NOT NEEDED!', website: 'https://www.recreation.gov/timed-entry/10087086', notes: 'Good news! Timed entry starts June 13, 2025. Your dates (June 7-10) are BEFORE the requirement - no reservation needed!' },
    { item: 'Yellowstone/Grand Teton Lodging', bookBy: '6+ months ahead', website: 'https://www.yellowstonenationalparklodges.com/', notes: 'In-park lodges book up fast' },
    { item: 'Glacier Lodging', bookBy: '6+ months ahead', website: 'https://www.glaciernationalparklodges.com/', notes: 'Lake McDonald Lodge, Many Glacier Hotel' },
    { item: 'Glacier Red Bus Tours', bookBy: '1-2 months ahead', website: 'https://www.glaciernationalparklodges.com/red-bus-tours', notes: 'Iconic vintage tour buses' }
  ]
};
