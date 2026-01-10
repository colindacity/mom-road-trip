'use client';

import { useState } from 'react';
import { DollarSign, Plane, Car, Utensils, Fuel, Home, Accessibility, Edit2, Check, X } from 'lucide-react';
import { CostBreakdown as CostBreakdownType } from '@/types/trip';

interface CostBreakdownProps {
  breakdown: CostBreakdownType;
  totalBudget: {
    flights: number;
    carRental: number;
    accommodations: number;
    food: number;
    activities: number;
    gas: number;
    misc: number;
    total: number;
  };
  tripDays: number;
}

export default function CostBreakdownComponent({ breakdown, totalBudget, tripDays }: CostBreakdownProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBreakdown, setEditedBreakdown] = useState(breakdown);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleSave = () => {
    // In a real app, this would save to backend/localStorage
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedBreakdown(breakdown);
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <DollarSign className="w-5 h-5" />
            <h2 className="font-semibold">Trip Cost Breakdown</h2>
          </div>
          {isEditing ? (
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="p-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                title="Save changes"
              >
                <Check className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={handleCancel}
                className="p-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                title="Cancel"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="p-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              title="Edit costs"
            >
              <Edit2 className="w-4 h-4 text-white" />
            </button>
          )}
        </div>
        <p className="text-white/80 text-sm mt-1">{tripDays} days • Click edit to swap options</p>
      </div>

      <div className="p-4 space-y-4">
        {/* Flights Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-700 font-medium">
            <Plane className="w-4 h-4" />
            <span>Flights</span>
            <span className="ml-auto text-emerald-600 font-semibold">
              {formatCurrency(editedBreakdown.flights.total)}
            </span>
          </div>
          <div className="pl-6 space-y-1.5 text-sm">
            <FlightRow
              label="Colin: SEA→PHX"
              item={editedBreakdown.flights.colinOutbound}
              isEditing={isEditing}
              onChange={(price) => setEditedBreakdown({
                ...editedBreakdown,
                flights: { ...editedBreakdown.flights, colinOutbound: { ...editedBreakdown.flights.colinOutbound, price } }
              })}
            />
            <FlightRow
              label="Mom: YYZ→PHX"
              item={editedBreakdown.flights.momOutbound}
              isEditing={isEditing}
              onChange={(price) => setEditedBreakdown({
                ...editedBreakdown,
                flights: { ...editedBreakdown.flights, momOutbound: { ...editedBreakdown.flights.momOutbound, price } }
              })}
            />
            <FlightRow
              label="Colin: FCA→SEA"
              item={editedBreakdown.flights.colinReturn}
              isEditing={isEditing}
              onChange={(price) => setEditedBreakdown({
                ...editedBreakdown,
                flights: { ...editedBreakdown.flights, colinReturn: { ...editedBreakdown.flights.colinReturn, price } }
              })}
            />
            <FlightRow
              label="Mom: FCA→YYZ"
              item={editedBreakdown.flights.momReturn}
              isEditing={isEditing}
              onChange={(price) => setEditedBreakdown({
                ...editedBreakdown,
                flights: { ...editedBreakdown.flights, momReturn: { ...editedBreakdown.flights.momReturn, price } }
              })}
            />
          </div>
        </div>

        {/* Car Rental */}
        <div className="flex items-center gap-2 text-gray-700">
          <Car className="w-4 h-4" />
          <div className="flex-1">
            <span className="font-medium">Car Rental</span>
            <p className="text-xs text-gray-500">
              {editedBreakdown.carRental.days} days @ ${editedBreakdown.carRental.dailyRate}/day + ${editedBreakdown.carRental.dropoffFee} dropoff
            </p>
          </div>
          <span className="text-emerald-600 font-semibold">
            {formatCurrency(editedBreakdown.carRental.total)}
          </span>
        </div>

        {/* Accommodations */}
        <div className="flex items-center gap-2 text-gray-700">
          <Home className="w-4 h-4" />
          <div className="flex-1">
            <span className="font-medium">Accommodations</span>
            <p className="text-xs text-gray-500">~${editedBreakdown.accommodationAvg}/night avg</p>
          </div>
          <span className="text-emerald-600 font-semibold">
            {formatCurrency(totalBudget.accommodations)}
          </span>
        </div>

        {/* Food */}
        <div className="flex items-center gap-2 text-gray-700">
          <Utensils className="w-4 h-4" />
          <div className="flex-1">
            <span className="font-medium">Food & Dining</span>
            <p className="text-xs text-gray-500">~${editedBreakdown.foodPerDay}/day for 2 people</p>
          </div>
          <span className="text-emerald-600 font-semibold">
            {formatCurrency(totalBudget.food)}
          </span>
        </div>

        {/* Gas */}
        <div className="flex items-center gap-2 text-gray-700">
          <Fuel className="w-4 h-4" />
          <span className="font-medium flex-1">Gas</span>
          <span className="text-emerald-600 font-semibold">
            {formatCurrency(editedBreakdown.gasEstimate)}
          </span>
        </div>

        {/* Passenger Assistance */}
        <div className="flex items-center gap-2 text-gray-700">
          <Accessibility className="w-4 h-4" />
          <div className="flex-1">
            <span className="font-medium">Passenger Assistance</span>
            <p className="text-xs text-gray-500">{editedBreakdown.passengerAssistance.notes}</p>
          </div>
          <span className="text-emerald-600 font-semibold">FREE</span>
        </div>

        {/* Divider */}
        <hr className="border-gray-200" />

        {/* Total */}
        <div className="flex items-center justify-between text-lg font-bold">
          <span className="text-gray-800">Estimated Total</span>
          <span className="text-emerald-600">{formatCurrency(totalBudget.total)}</span>
        </div>

        {/* Per Person */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Per person (split 50/50)</span>
          <span>{formatCurrency(totalBudget.total / 2)}</span>
        </div>

        {/* Per Day */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Per day average</span>
          <span>{formatCurrency(totalBudget.total / tripDays)}</span>
        </div>
      </div>
    </div>
  );
}

interface FlightRowProps {
  label: string;
  item: { description: string; price: number; editable?: boolean };
  isEditing: boolean;
  onChange: (price: number) => void;
}

function FlightRow({ label, item, isEditing, onChange }: FlightRowProps) {
  return (
    <div className="flex items-center justify-between text-gray-600">
      <span>{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-400">{item.description}</span>
        {isEditing && item.editable ? (
          <input
            type="number"
            value={item.price}
            onChange={(e) => onChange(parseInt(e.target.value) || 0)}
            className="w-20 px-2 py-0.5 text-right border border-gray-200 rounded text-sm"
          />
        ) : (
          <span className="font-medium">${item.price}</span>
        )}
      </div>
    </div>
  );
}
