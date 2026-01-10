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
}

export interface Accommodation {
  id: string;
  name: string;
  type: 'hotel' | 'lodge' | 'resort' | 'motel';
  priceRange: string;
  pricePerNight?: number;
  rating?: number;
  address?: string;
  phone?: string;
  website?: string;
  bookingUrl?: string;
  amenities?: string[];
  seniorFriendly: boolean;
  notes?: string;
  image?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  address?: string;
  notes?: string;
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
  passenger: 'colin' | 'mom';
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
  price?: number;
  bookingUrl?: string;
  notes?: string;
  alternative?: boolean; // Is this an alternative option?
}

export interface FlightOption {
  id: string;
  passenger: 'colin' | 'mom';
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
  packingList?: string[];
  importantReservations?: {
    item: string;
    bookBy: string;
    website: string;
    notes?: string;
  }[];
}

export type ViewMode = 'timeline' | 'map' | 'list' | 'budget' | 'phases';
