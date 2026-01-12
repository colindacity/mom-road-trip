'use client';

import { Plane, Clock, User, ExternalLink, Phone, Accessibility } from 'lucide-react';
import { Flight } from '@/types/trip';
import { format, parseISO, differenceInDays } from 'date-fns';

interface FlightInfoProps {
  flights: Flight[];
  tripStartDate: string;
}

export default function FlightInfo({ flights, tripStartDate }: FlightInfoProps) {
  const today = new Date();
  const tripStart = parseISO(tripStartDate);
  const daysUntilTrip = differenceInDays(tripStart, today);

  // Group flights by type
  const outboundFlights = flights.filter(f => f.type === 'outbound');
  const returnFlights = flights.filter(f => f.type === 'return');

  const getPassengerColor = (passenger: string) => {
    return passenger === 'colin' ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700';
  };

  const getPassengerName = (passenger: string) => {
    return passenger === 'colin' ? 'Colin' : 'Mom';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header with countdown */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <Plane className="w-5 h-5" />
            <h2 className="font-semibold">Flight Information</h2>
          </div>
          {daysUntilTrip > 0 && (
            <div className="bg-white/20 px-3 py-1 rounded-full">
              <span className="text-white text-sm font-medium">
                {daysUntilTrip} days until takeoff!
              </span>
            </div>
          )}
        </div>
        <p className="text-white/80 text-sm mt-1">
          Book flights early for best rates. Request wheelchair assistance 48hrs ahead.
        </p>
      </div>

      <div className="p-4 space-y-4">
        {/* Outbound Flights */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Outbound - {outboundFlights[0]?.date ? format(parseISO(outboundFlights[0].date), 'EEEE, MMM d') : ''}
          </h3>
          <div className="space-y-2">
            {outboundFlights.map(flight => (
              <FlightCard key={flight.id} flight={flight} />
            ))}
          </div>
        </div>

        {/* Return Flights */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Return - {returnFlights[0]?.date ? format(parseISO(returnFlights[0].date), 'EEEE, MMM d') : ''}
          </h3>
          <div className="space-y-2">
            {returnFlights.map(flight => (
              <FlightCard key={flight.id} flight={flight} />
            ))}
          </div>
        </div>

        {/* Accessibility reminder */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-3">
          <Accessibility className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium text-amber-800">Wheelchair Assistance</p>
            <p className="text-amber-700 text-xs mt-0.5">
              FREE service. Request 48 hours before departure.
            </p>
            <div className="flex flex-wrap gap-3 mt-2 text-xs">
              <a href="tel:1-800-252-7522" className="flex items-center gap-1 text-amber-700 hover:text-amber-900">
                <Phone className="w-3 h-3" />
                Alaska: 1-800-252-7522
              </a>
              <a href="tel:1-833-909-0909" className="flex items-center gap-1 text-amber-700 hover:text-amber-900">
                <Phone className="w-3 h-3" />
                Porter: 1-833-909-0909
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlightCard({ flight }: { flight: Flight }) {
  const getPassengerColor = (passenger: string) => {
    return passenger === 'colin' ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700';
  };

  const getPassengerName = (passenger: string) => {
    return passenger === 'colin' ? 'Colin' : 'Mom';
  };

  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
      {/* Passenger badge */}
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPassengerColor(flight.passenger)}`}>
        {getPassengerName(flight.passenger)}
      </span>

      {/* Route */}
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <span className="font-semibold text-gray-900">{flight.from}</span>
        <Plane className="w-4 h-4 text-gray-400 rotate-90" />
        <span className="font-semibold text-gray-900">{flight.to}</span>
        {flight.fromCity && (
          <span className="text-xs text-gray-500 hidden sm:inline truncate">
            ({flight.fromCity})
          </span>
        )}
      </div>

      {/* Airline & Price */}
      <div className="text-right shrink-0">
        <div className="text-sm font-medium text-gray-900">
          ${flight.price}
        </div>
        <div className="text-xs text-gray-500 truncate max-w-[120px]">
          {flight.airline?.replace(' (Recommended)', '')}
        </div>
      </div>
    </div>
  );
}
