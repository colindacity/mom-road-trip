export interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  type: 'city' | 'national_park' | 'attraction' | 'transit';
  image?: string;
  thumbnail?: string;
  video?: string; // YouTube/Vimeo embed URL for vertical video
  infoUrl?: string; // NPS, official site, or Wikipedia
  directionsUrl?: string; // Google Maps directions URL
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  summary?: string; // 5-12 word summary
  duration: string;
  difficulty: 'easy' | 'moderate' | 'challenging';
  seniorFriendly: boolean;
  reservationRequired: boolean;
  reservationUrl?: string;
  cost?: string;
  tips?: string[];
  // Enhanced fields for hikes/trails
  elevation?: {
    gain?: number;
    loss?: number;
    highest?: number;
    lowest?: number;
  };
  distance?: string;
  trailhead?: {
    lat: number;
    lng: number;
    name?: string;
  };
  pointsOfInterest?: string[];
  image?: string; // Primary image
  images?: string[]; // Gallery
  url?: string; // External info link (AllTrails, NPS, etc.)
  bestTime?: string;
  requirements?: string[];
  startTime?: string; // Local time, e.g. "2:00 PM"
  endTime?: string;   // Local time, e.g. "5:00 PM"
  directionsUrl?: string; // Google Maps route with waypoints for multi-stop activities
  optionalSkip?: boolean; // Can skip this for half-work day instead
}

export interface AccommodationBooking {
  conf: string;          // confirmation # or booking code
  cost: string;          // human-friendly cost line
  paid: string;          // payment status
  details: string;       // host name, check-in time, room type, etc.
  checkIn?: string;      // e.g. "4pm"
  checkOut?: string;     // e.g. "11am"
  host?: string;
  phone?: string;
}

export interface Accommodation {
  id: string;
  name: string;
  type: 'hotel' | 'lodge' | 'resort' | 'motel' | 'airbnb' | 'cabin' | 'condo' | 'inn' | 'vacation_rental';
  priceRange: string;
  pricePerNight?: number;
  rating?: number;
  reviewRating?: number; // e.g. 4.5 (out of 5)
  reviewSource?: string; // e.g. 'TripAdvisor', 'Booking.com'
  reviewCount?: number;
  address?: string;
  phone?: string;
  website?: string;
  bookingUrl?: string;
  amenities?: string[];
  seniorFriendly: boolean;
  recommended?: boolean;
  notes?: string;
  image?: string;
  booking?: AccommodationBooking;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  address?: string;
  notes?: string;
}

export type Vibe = 'desert' | 'mountain' | 'city' | 'rest' | 'drive' | 'tour' | 'fly' | 'robin';

export interface MomNotes {
  vibes: Vibe[];
  energy: 1 | 2 | 3;     // 1 easy / 2 medium / 3 active
  blurb: string;          // 1-2 line summary in Mom voice
  tip: string;            // tour-guide tactical tip
}

export interface DriveStop {
  name: string;
  type: 'lunch' | 'view' | 'wildlife' | 'walk' | 'bathroom' | 'bonus';
  driveFromPrev?: string;       // e.g. "2h30 from SLC"
  timeNeeded: string;           // e.g. "45 min"
  note: string;                 // why it's good, address, fee, mom-fit note
  url?: string;
}

export interface DriveRoute {
  from: string;
  to: string;
  miles: number;
  driveHours: number;            // total driving without stops
  tldr: string;                  // 1-2 sentence why-this-route
  departure: string;             // e.g. "12:00 noon"
  arrival: string;               // e.g. "~6:30pm"
  sunset?: string;               // e.g. "8:52pm MDT"
  forecast?: string;             // e.g. "Sunny, 57°F high"
  stops: DriveStop[];
  alternatives?: { name: string; verdict: 'skip' | 'maybe' | 'save'; why: string }[];
  contingencies?: string[];      // weather / late departure / road closure
  preDeparture?: string[];       // top-off gas, reservations, etc.
}

export interface GuideScheduleItem {
  time: string;                  // e.g. "2:30pm" or "Morning"
  what: string;                  // e.g. "Lunch at Buddy's Italian"
  note?: string;                 // optional detail
}

export interface DayPlan {
  id: string;
  dayNumber: number;
  date: string;
  title: string;
  summary?: string; // 5-12 word summary
  location: Location;
  overnight: string;
  drivingDistance?: string;
  drivingTime?: string;
  weather?: {
    high: number;
    low: number;
    conditions: string;
  };
  activities: Activity[];
  meals?: {
    breakfast?: Restaurant;
    lunch?: Restaurant;
    dinner?: Restaurant;
  };
  accommodation?: Accommodation;
  accommodationOptions?: Accommodation[];
  notes?: string[];
  reservationsNeeded?: string[];
  budgetBreakdown?: {
    accommodation?: number;
    food?: number;
    activities?: number;
    gas?: number;
    total?: number;
  };
  image?: string;
  images?: string[];

  // Mom-facing presentation (was DAY_INFO in /mom)
  momNotes?: MomNotes;
  // Tour-guide tactical schedule (was SCHEDULE in /guide)
  guideSchedule?: GuideScheduleItem[];
  // Transit-day drive details
  driveRoute?: DriveRoute;
}

export interface TripPhase {
  id: string;
  name: string;
  summary: string; // 5-12 word summary
  description?: string;
  days: number[]; // Day numbers in this phase
  startDay: number;
  endDay: number;
  image?: string;
  color?: string;
  highlights?: string[];
}

export interface Flight {
  id: string;
  type: 'outbound' | 'return';
  passenger: 'colin' | 'mom' | 'robin';
  from: string;
  fromCity?: string;
  to: string;
  toCity?: string;
  date: string;
  airline?: string;
  flightNumber?: string;
  departureTime?: string;
  arrivalTime?: string;
  duration?: string;
  cabin?: string;
  legs?: string;
  price?: number;
  bookingRef?: string;
  bookingSource?: string;
  ticketNumber?: string;
  bookingUrl?: string;
  notes?: string;
  alternative?: boolean; // Is this an alternative option?
}

export interface FlightOption {
  id: string;
  passenger: 'colin' | 'mom' | 'robin';
  type: 'outbound' | 'return';
  options: Flight[];
  recommended?: string; // ID of recommended option
  notes?: string;
}

export interface CarRental {
  company: string;
  vehicleType: string;
  pickupLocation: string;
  pickupDate: string;
  dropoffLocation: string;
  dropoffDate: string;
  totalDays: number;
  dailyRate?: number;
  totalCost?: number;
  dropoffFee?: number;
  bookingUrl?: string;
  notes?: string;
}

export interface RouteSegment {
  from: Location;
  to: Location;
  distance: string;
  duration: string;
  coordinates?: [number, number][]; // Detailed route path
  highlights?: string[];
}

export interface CostItem {
  description: string;
  price: number;
  editable?: boolean;
}

export interface CostBreakdown {
  flights: {
    colinOutbound: CostItem;
    momOutbound: CostItem;
    colinReturn: CostItem;
    momReturn: CostItem;
    robinOutbound?: CostItem;
    robinReturn?: CostItem;
    total: number;
  };
  carRental: {
    dailyRate: number;
    days: number;
    dropoffFee: number;
    total: number;
    notes?: string;
  };
  accommodationAvg: number;
  foodPerDay: number;
  gasEstimate: number;
}

export interface TripData {
  id: string;
  name: string;
  tagline?: string;
  startDate: string;
  endDate: string;
  travelers: {
    id: string;
    name: string;
    origin: string;
    originCity?: string;
    color?: string;
    notes?: string;
  }[];
  phases: TripPhase[];
  flights: Flight[];
  flightOptions?: FlightOption[];
  carRental?: CarRental;
  days: DayPlan[];
  routes?: RouteSegment[];
  totalBudget?: {
    flights: number;
    carRental: number;
    accommodations: number;
    food: number;
    activities: number;
    gas: number;
    misc: number;
    total: number;
  };
  costBreakdown?: CostBreakdown;
  packingList?: string[];
  importantReservations?: {
    item: string;
    bookBy: string;
    website: string;
    notes?: string;
  }[];
}

export type ViewMode = 'timeline' | 'map' | 'list' | 'budget' | 'phases';
