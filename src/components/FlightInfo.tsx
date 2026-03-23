'use client';

import { Plane, Clock, User, ExternalLink, Phone } from 'lucide-react';
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

  // Group flights by type, then by date within each group
  const outboundFlights = flights.filter(f => f.type === 'outbound');
  const returnFlights = flights.filter(f => f.type === 'return');

  // Group outbound by date (main trip vs Robin's separate date)
  const outboundByDate = outboundFlights.reduce<Record<string, typeof outboundFlights>>((acc, f) => {
    const key = f.date;
    if (!acc[key]) acc[key] = [];
    acc[key].push(f);
    return acc;
  }, {});

  const returnByDate = returnFlights.reduce<Record<string, typeof returnFlights>>((acc, f) => {
    const key = f.date;
    if (!acc[key]) acc[key] = [];
    acc[key].push(f);
    return acc;
  }, {});

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
          Book flights early for best rates.
        </p>
      </div>

      <div className="p-4 space-y-4">
        {/* Outbound Flights grouped by date */}
        {Object.entries(outboundByDate).sort(([a], [b]) => a.localeCompare(b)).map(([date, flights]) => (
          <div key={`out-${date}`}>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Outbound - {format(parseISO(date), 'EEEE, MMM d')}
            </h3>
            <div className="space-y-2">
              {flights.map(flight => (
                <FlightCard key={flight.id} flight={flight} />
              ))}
            </div>
          </div>
        ))}

        {/* Return Flights grouped by date */}
        {Object.entries(returnByDate).sort(([a], [b]) => a.localeCompare(b)).map(([date, flights]) => (
          <div key={`ret-${date}`}>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Return - {format(parseISO(date), 'EEEE, MMM d')}
            </h3>
            <div className="space-y-2">
              {flights.map(flight => (
                <FlightCard key={flight.id} flight={flight} />
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

function FlightCard({ flight }: { flight: Flight }) {
  const getPassengerColor = (passenger: string) => {
    const colors: Record<string, string> = {
      colin: 'bg-blue-100 text-blue-700',
      mom: 'bg-pink-100 text-pink-700',
      robin: 'bg-purple-100 text-purple-700',
    };
    return colors[passenger] || 'bg-gray-100 text-gray-700';
  };

  const getPassengerName = (passenger: string) => {
    const names: Record<string, string> = { colin: 'Colin', mom: 'Mom', robin: 'Robin' };
    return names[passenger] || passenger;
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

      {/* Search link */}
      {flight.bookingUrl && (
        <a
          href={flight.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-2.5 py-1.5 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-1"
        >
          <ExternalLink className="w-3 h-3" />
          Search
        </a>
      )}
    </div>
  );
}
