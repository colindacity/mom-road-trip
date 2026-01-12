'use client';

import { Car, MapPin, Calendar, DollarSign, ExternalLink, AlertCircle } from 'lucide-react';
import { CarRental } from '@/types/trip';
import { format, parseISO } from 'date-fns';

interface CarRentalInfoProps {
  carRental: CarRental;
}

export default function CarRentalInfo({ carRental }: CarRentalInfoProps) {
  const pickupDate = parseISO(carRental.pickupDate);
  const dropoffDate = parseISO(carRental.dropoffDate);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4">
        <div className="flex items-center gap-2 text-white">
          <Car className="w-5 h-5" />
          <h2 className="font-semibold">Car Rental</h2>
        </div>
        <p className="text-white/80 text-sm mt-1">
          {carRental.totalDays} days • One-way rental
        </p>
      </div>

      <div className="p-4 space-y-4">
        {/* Vehicle Info */}
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <Car className="w-6 h-6 text-orange-600" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-gray-900">{carRental.vehicleType}</div>
            <div className="text-sm text-gray-500">{carRental.company}</div>
          </div>
          {carRental.bookingUrl && (
            <a
              href={carRental.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-1"
            >
              Book
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

        {/* Pickup & Dropoff */}
        <div className="grid grid-cols-2 gap-4">
          {/* Pickup */}
          <div className="space-y-1">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Pickup</div>
            <div className="flex items-center gap-1.5 text-sm text-gray-900">
              <MapPin className="w-3.5 h-3.5 text-green-500" />
              {carRental.pickupLocation}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <Calendar className="w-3 h-3" />
              {format(pickupDate, 'EEE, MMM d')}
            </div>
          </div>

          {/* Dropoff */}
          <div className="space-y-1">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Dropoff</div>
            <div className="flex items-center gap-1.5 text-sm text-gray-900">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              {carRental.dropoffLocation}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <Calendar className="w-3 h-3" />
              {format(dropoffDate, 'EEE, MMM d')}
            </div>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="space-y-2 pt-2 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Daily rate</span>
            <span className="font-medium">${carRental.dailyRate}/day</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Duration</span>
            <span className="font-medium">{carRental.totalDays} days</span>
          </div>
          {carRental.dropoffFee && carRental.dropoffFee > 0 && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">One-way dropoff fee</span>
              <span className="font-medium">${carRental.dropoffFee}</span>
            </div>
          )}
          <div className="flex items-center justify-between text-base font-bold pt-2 border-t border-gray-200">
            <span className="text-gray-800">Estimated Total</span>
            <span className="text-orange-600">${carRental.totalCost?.toLocaleString() || ((carRental.dailyRate || 0) * carRental.totalDays + (carRental.dropoffFee || 0)).toLocaleString()}</span>
          </div>
        </div>

        {/* Notes */}
        {carRental.notes && (
          <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-amber-800">{carRental.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}
