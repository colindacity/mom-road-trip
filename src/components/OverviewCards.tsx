'use client';

import { TripData } from '@/types/trip';
import { format, parseISO } from 'date-fns';
import {
  Plane,
  Car,
  AlertCircle,
  ExternalLink,
  Calendar,
  MapPin,
  DollarSign,
  Clock,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Package
} from 'lucide-react';
import { useState } from 'react';

interface OverviewCardsProps {
  trip: TripData;
}

export default function OverviewCards({ trip }: OverviewCardsProps) {
  return (
    <div className="space-y-4">
      <FlightsCard flights={trip.flights} />
      <CarRentalCard rental={trip.carRental} />
      <ReservationsCard reservations={trip.importantReservations || []} />
      <PackingCard packingList={trip.packingList || []} />
    </div>
  );
}

function FlightsCard({ flights }: { flights: TripData['flights'] }) {
  const [expanded, setExpanded] = useState(true);

  // Group by traveler for clearer per-person view
  const colinFlights = flights.filter(f => f.passenger === 'colin');
  const momFlights = flights.filter(f => f.passenger === 'mom');
  const robinFlights = flights.filter(f => f.passenger === 'robin');

  const colinOutbound = colinFlights.find(f => f.type === 'outbound');
  const colinReturn = colinFlights.find(f => f.type === 'return');
  const momOutbound = momFlights.find(f => f.type === 'outbound');
  const momReturn = momFlights.find(f => f.type === 'return');
  const robinOutbound = robinFlights.find(f => f.type === 'outbound');
  const robinReturn = robinFlights.find(f => f.type === 'return');

  const colinTotal = colinFlights.reduce((sum, f) => sum + (f.price || 0), 0);
  const momTotal = momFlights.reduce((sum, f) => sum + (f.price || 0), 0);

  // All booked check
  const allBooked = flights.every(f => !!(f.bookingRef || (f.notes && /booked/i.test(f.notes))));

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${allBooked ? 'bg-emerald-100' : 'bg-purple-100'}`}>
            <Plane className={`w-5 h-5 ${allBooked ? 'text-emerald-600' : 'text-purple-600'}`} />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-gray-900">Flights {allBooked && '— All Booked ✓'}</h3>
            <p className="text-sm text-gray-500">{flights.length} flights for 3 travelers</p>
          </div>
        </div>
        {expanded ? (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-400" />
        )}
      </button>

      {expanded && (
        <div className="border-t border-gray-100 p-4 space-y-4 animate-fade-in">
          {/* Colin's Flights */}
          <div className="border border-blue-200 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center">C</div>
                <span className="font-semibold text-blue-900">Colin</span>
                <span className="text-blue-600 text-sm">(Everett PAE)</span>
              </div>
              <span className="font-semibold text-blue-700">${colinTotal}</span>
            </div>
            <div className="p-3 space-y-2">
              {colinOutbound && (
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-green-600 font-medium w-16">Outbound</span>
                  <span className="font-medium text-gray-900">{colinOutbound.from} → {colinOutbound.to}</span>
                  <span className="text-gray-500">{colinOutbound.date && format(parseISO(colinOutbound.date), 'MMM d')}</span>
                  <span className="text-gray-600 ml-auto">${colinOutbound.price}</span>
                </div>
              )}
              {colinOutbound?.airline && (
                <div className="text-xs text-gray-500 pl-[76px]">{colinOutbound.airline}</div>
              )}
              {colinReturn && (
                <div className="flex items-center gap-3 text-sm mt-2">
                  <span className="text-red-600 font-medium w-16">Return</span>
                  <span className="font-medium text-gray-900">{colinReturn.from} → {colinReturn.to}</span>
                  <span className="text-gray-500">{colinReturn.date && format(parseISO(colinReturn.date), 'MMM d')}</span>
                  <span className="text-gray-600 ml-auto">${colinReturn.price}</span>
                </div>
              )}
              {colinReturn?.airline && (
                <div className="text-xs text-gray-500 pl-[76px]">{colinReturn.airline}</div>
              )}
            </div>
          </div>

          {/* Mom's Flights */}
          <div className="border border-pink-200 rounded-lg overflow-hidden">
            <div className="bg-pink-50 px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-pink-500 text-white text-xs font-bold flex items-center justify-center">M</div>
                <span className="font-semibold text-pink-900">Mom</span>
                <span className="text-pink-600 text-sm">(Toronto)</span>
              </div>
              <span className="font-semibold text-pink-700">${momTotal}</span>
            </div>
            <div className="p-3 space-y-2">
              {momOutbound && (
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-green-600 font-medium w-16">Outbound</span>
                  <span className="font-medium text-gray-900">{momOutbound.from} → {momOutbound.to}</span>
                  <span className="text-gray-500">{momOutbound.date && format(parseISO(momOutbound.date), 'MMM d')}</span>
                  <span className="text-gray-600 ml-auto">${momOutbound.price}</span>
                </div>
              )}
              {momOutbound?.airline && (
                <div className="text-xs text-gray-500 pl-[76px]">{momOutbound.airline}</div>
              )}
              {momOutbound?.notes && (
                <div className="text-xs text-green-600 bg-green-50 rounded px-2 py-1 mt-1 ml-[76px]">{momOutbound.notes}</div>
              )}
              {momReturn && (
                <div className="flex items-center gap-3 text-sm mt-2">
                  <span className="text-red-600 font-medium w-16">Return</span>
                  <span className="font-medium text-gray-900">{momReturn.from} → {momReturn.to}</span>
                  <span className="text-gray-500">{momReturn.date && format(parseISO(momReturn.date), 'MMM d')}</span>
                  <span className="text-gray-600 ml-auto">${momReturn.price}</span>
                </div>
              )}
              {momReturn?.airline && (
                <div className="text-xs text-gray-500 pl-[76px]">{momReturn.airline}</div>
              )}
            </div>
          </div>

          {/* Robin's Flights */}
          {robinFlights.length > 0 && (
            <div className="border border-purple-200 rounded-lg overflow-hidden">
              <div className="bg-purple-50 px-3 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-purple-500 text-white text-xs font-bold flex items-center justify-center">R</div>
                  <span className="font-semibold text-purple-900">Robin</span>
                  <span className="text-purple-600 text-sm">(Seattle, joins Glacier weekend)</span>
                </div>
                <span className="text-purple-700 text-xs">Booked separately</span>
              </div>
              <div className="p-3 space-y-2">
                {robinOutbound && (
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-green-600 font-medium w-16">Outbound</span>
                    <span className="font-medium text-gray-900">{robinOutbound.from} → {robinOutbound.to}</span>
                    <span className="text-gray-500">{robinOutbound.date && format(parseISO(robinOutbound.date), 'MMM d')}</span>
                    <span className="text-emerald-600 ml-auto text-xs font-semibold">✓ {robinOutbound.flightNumber}</span>
                  </div>
                )}
                {robinOutbound?.airline && (
                  <div className="text-xs text-gray-500 pl-[76px]">{robinOutbound.airline} {robinOutbound.departureTime} → {robinOutbound.arrivalTime}</div>
                )}
                {robinReturn && (
                  <div className="flex items-center gap-3 text-sm mt-2">
                    <span className="text-red-600 font-medium w-16">Return</span>
                    <span className="font-medium text-gray-900">{robinReturn.from} → {robinReturn.to}</span>
                    <span className="text-gray-500">{robinReturn.date && format(parseISO(robinReturn.date), 'MMM d')}</span>
                    <span className="text-emerald-600 ml-auto text-xs font-semibold">✓ Same as Colin</span>
                  </div>
                )}
                {robinReturn?.airline && (
                  <div className="text-xs text-gray-500 pl-[76px]">{robinReturn.airline} {robinReturn.flightNumber} {robinReturn.departureTime} → {robinReturn.arrivalTime}</div>
                )}
              </div>
            </div>
          )}

          <div className="pt-2 border-t border-gray-100">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Total flights:</span>
              <span className="font-semibold text-gray-900">
                ${flights.reduce((sum, f) => sum + (f.price || 0), 0).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CarRentalCard({ rental }: { rental?: TripData['carRental'] }) {
  const [expanded, setExpanded] = useState(true);

  if (!rental) return null;

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
            <Car className="w-5 h-5 text-amber-600" />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-gray-900">Car Rental</h3>
            <p className="text-sm text-gray-500">{rental.totalDays} days, one-way</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {rental.totalCost && (
            <span className="font-semibold text-gray-900">${rental.totalCost.toLocaleString()}</span>
          )}
          {expanded ? (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </button>

      {expanded && (
        <div className="border-t border-gray-100 p-4 animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-3">
              <div className="text-xs font-medium text-green-700 mb-1">PICK UP</div>
              <div className="font-medium text-gray-900">{rental.pickupLocation}</div>
              <div className="text-sm text-gray-600">{format(parseISO(rental.pickupDate), 'EEE, MMM d, yyyy')}</div>
            </div>
            <div className="bg-red-50 rounded-lg p-3">
              <div className="text-xs font-medium text-red-700 mb-1">DROP OFF</div>
              <div className="font-medium text-gray-900">{rental.dropoffLocation}</div>
              <div className="text-sm text-gray-600">{format(parseISO(rental.dropoffDate), 'EEE, MMM d, yyyy')}</div>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Vehicle type:</span>
              <span className="text-gray-900">{rental.vehicleType}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Company:</span>
              <span className="text-gray-900">{rental.company}</span>
            </div>
            {rental.dailyRate && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Daily rate:</span>
                <span className="text-gray-900">~${rental.dailyRate}/day</span>
              </div>
            )}
            {rental.dropoffFee && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">One-way fee:</span>
                <span className="text-gray-900">~${rental.dropoffFee}</span>
              </div>
            )}
          </div>

          {rental.notes && (
            <p className="mt-3 text-sm text-gray-500 bg-gray-50 rounded p-2">{rental.notes}</p>
          )}
        </div>
      )}
    </div>
  );
}

function ReservationsCard({ reservations }: { reservations: TripData['importantReservations'] }) {
  const [expanded, setExpanded] = useState(true);

  if (!reservations || reservations.length === 0) return null;

  // Categorize each reservation
  const isBooked = (r: { bookBy: string; item: string }) =>
    /^(BOOKED|OWNED|N\/A)$/i.test(r.bookBy) || r.item.startsWith('✅') || r.item.startsWith('ℹ️');
  const isAction = (r: { item: string }) => r.item.startsWith('🔴');

  const bookedCount = reservations.filter(isBooked).length;
  const actionCount = reservations.filter(isAction).length;

  return (
    <div className="bg-white rounded-xl border border-emerald-200 shadow-sm overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-center justify-between hover:bg-emerald-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
            <AlertCircle className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-gray-900">Reservations & Status</h3>
            <p className="text-sm text-gray-600">
              <span className="text-emerald-700 font-medium">{bookedCount} booked/done</span>
              {actionCount > 0 && <span className="text-red-600 font-medium"> · {actionCount} action needed</span>}
            </p>
          </div>
        </div>
        {expanded ? (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-400" />
        )}
      </button>

      {expanded && (
        <div className="border-t border-emerald-100 p-4 space-y-3 animate-fade-in">
          {reservations.map((res, idx) => {
            const booked = isBooked(res);
            const action = isAction(res);
            const bg = booked ? 'bg-emerald-50' : action ? 'bg-red-50' : 'bg-amber-50';
            const labelColor = booked ? 'text-emerald-700' : action ? 'text-red-700' : 'text-amber-700';
            return (
            <div key={idx} className={`${bg} rounded-lg p-3`}>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="font-medium text-gray-900">{res.item}</h4>
                  <p className={`text-sm ${labelColor} mt-0.5`}>{res.bookBy}</p>
                  {res.notes && (
                    <p className="text-xs text-gray-500 mt-1">{res.notes}</p>
                  )}
                </div>
                <a
                  href={res.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 p-2 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-gray-600" />
                </a>
              </div>
            </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function PackingCard({ packingList }: { packingList: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState<Set<string>>(new Set());

  if (packingList.length === 0) return null;

  const toggleItem = (item: string) => {
    const newChecked = new Set(checked);
    if (checked.has(item)) {
      newChecked.delete(item);
    } else {
      newChecked.add(item);
    }
    setChecked(newChecked);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
            <Package className="w-5 h-5 text-blue-600" />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-gray-900">Packing List</h3>
            <p className="text-sm text-gray-500">{checked.size}/{packingList.length} packed</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all"
              style={{ width: `${(checked.size / packingList.length) * 100}%` }}
            />
          </div>
          {expanded ? (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </button>

      {expanded && (
        <div className="border-t border-gray-100 p-4 animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 overflow-y-auto">
            {packingList.map((item, idx) => (
              <label
                key={idx}
                className={`flex items-center gap-2 p-2 rounded cursor-pointer transition-colors ${
                  checked.has(item) ? 'bg-green-50' : 'hover:bg-gray-50'
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked.has(item)}
                  onChange={() => toggleItem(item)}
                  className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <span className={`text-sm ${checked.has(item) ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
