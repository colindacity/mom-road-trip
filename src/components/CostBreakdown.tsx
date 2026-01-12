'use client';

import { useState } from 'react';
import { DollarSign, Plane, Car, Utensils, Fuel, Home, Accessibility, Edit2, Check, X, Loader2, RefreshCw } from 'lucide-react';
import { useCosts } from '@/hooks/useCosts';

interface CostBreakdownProps {
  tripDays: number;
}

export default function CostBreakdownComponent({ tripDays }: CostBreakdownProps) {
  const {
    breakdown,
    totalBudget,
    isLoading,
    isSaving,
    lastSaved,
    updateFlightPrice,
    updateCarRental,
    updateAccommodationAvg,
    updateFoodPerDay,
    updateGasEstimate,
    resetToDefaults,
  } = useCosts();

  const [isEditing, setIsEditing] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-emerald-500" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <DollarSign className="w-5 h-5" />
            <h2 className="font-semibold">Trip Cost Breakdown</h2>
            {isSaving && <Loader2 className="w-3 h-3 animate-spin" />}
          </div>
          <div className="flex gap-2">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="p-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                  title="Done editing"
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
                <button
                  onClick={resetToDefaults}
                  className="p-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                  title="Reset to defaults"
                >
                  <RefreshCw className="w-4 h-4 text-white" />
                </button>
              </>
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
        </div>
        <p className="text-white/80 text-sm mt-1">
          {tripDays} days • {isEditing ? 'Edit values below' : 'Click edit to modify'}
          {lastSaved && !isEditing && (
            <span className="text-white/60 text-xs ml-2">
              Saved {new Date(lastSaved).toLocaleTimeString()}
            </span>
          )}
        </p>
      </div>

      <div className="p-4 space-y-4">
        {/* Flights Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-700 font-medium">
            <Plane className="w-4 h-4" />
            <span>Flights</span>
            <span className="ml-auto text-emerald-600 font-semibold">
              {formatCurrency(totalBudget.flights)}
            </span>
          </div>
          <div className="pl-6 space-y-1.5 text-sm">
            <FlightRow
              label="Colin: SEA→PHX"
              item={breakdown.flights.colinOutbound}
              isEditing={isEditing}
              onChange={(price) => updateFlightPrice('colinOutbound', price)}
            />
            <FlightRow
              label="Mom: YYZ→PHX"
              item={breakdown.flights.momOutbound}
              isEditing={isEditing}
              onChange={(price) => updateFlightPrice('momOutbound', price)}
            />
            <FlightRow
              label="Colin: PDX→SEA"
              item={breakdown.flights.colinReturn}
              isEditing={isEditing}
              onChange={(price) => updateFlightPrice('colinReturn', price)}
            />
            <FlightRow
              label="Mom: PDX→YYZ"
              item={breakdown.flights.momReturn}
              isEditing={isEditing}
              onChange={(price) => updateFlightPrice('momReturn', price)}
            />
          </div>
        </div>

        {/* Car Rental */}
        <div className="flex items-center gap-2 text-gray-700">
          <Car className="w-4 h-4" />
          <div className="flex-1">
            <span className="font-medium">Car Rental</span>
            {isEditing ? (
              <div className="flex items-center gap-2 mt-1 text-xs">
                <input
                  type="number"
                  value={breakdown.carRental.days}
                  onChange={(e) => updateCarRental({ days: parseInt(e.target.value) || 0 })}
                  className="w-12 px-1 py-0.5 border border-gray-200 rounded text-center"
                />
                <span>days @</span>
                <input
                  type="number"
                  value={breakdown.carRental.dailyRate}
                  onChange={(e) => updateCarRental({ dailyRate: parseInt(e.target.value) || 0 })}
                  className="w-14 px-1 py-0.5 border border-gray-200 rounded text-center"
                />
                <span>/day +</span>
                <input
                  type="number"
                  value={breakdown.carRental.dropoffFee}
                  onChange={(e) => updateCarRental({ dropoffFee: parseInt(e.target.value) || 0 })}
                  className="w-16 px-1 py-0.5 border border-gray-200 rounded text-center"
                />
                <span>dropoff</span>
              </div>
            ) : (
              <p className="text-xs text-gray-500">
                {breakdown.carRental.days} days @ ${breakdown.carRental.dailyRate}/day + ${breakdown.carRental.dropoffFee} dropoff
              </p>
            )}
          </div>
          <span className="text-emerald-600 font-semibold">
            {formatCurrency(totalBudget.carRental)}
          </span>
        </div>

        {/* Accommodations */}
        <div className="flex items-center gap-2 text-gray-700">
          <Home className="w-4 h-4" />
          <div className="flex-1">
            <span className="font-medium">Accommodations</span>
            {isEditing ? (
              <div className="flex items-center gap-2 mt-1 text-xs">
                <span>~$</span>
                <input
                  type="number"
                  value={breakdown.accommodationAvg}
                  onChange={(e) => updateAccommodationAvg(parseInt(e.target.value) || 0)}
                  className="w-16 px-1 py-0.5 border border-gray-200 rounded text-center"
                />
                <span>/night avg</span>
              </div>
            ) : (
              <p className="text-xs text-gray-500">~${breakdown.accommodationAvg}/night avg</p>
            )}
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
            {isEditing ? (
              <div className="flex items-center gap-2 mt-1 text-xs">
                <span>~$</span>
                <input
                  type="number"
                  value={breakdown.foodPerDay}
                  onChange={(e) => updateFoodPerDay(parseInt(e.target.value) || 0)}
                  className="w-16 px-1 py-0.5 border border-gray-200 rounded text-center"
                />
                <span>/day for 2 people</span>
              </div>
            ) : (
              <p className="text-xs text-gray-500">~${breakdown.foodPerDay}/day for 2 people</p>
            )}
          </div>
          <span className="text-emerald-600 font-semibold">
            {formatCurrency(totalBudget.food)}
          </span>
        </div>

        {/* Gas */}
        <div className="flex items-center gap-2 text-gray-700">
          <Fuel className="w-4 h-4" />
          <div className="flex-1">
            <span className="font-medium">Gas</span>
            {isEditing && (
              <div className="flex items-center gap-2 mt-1 text-xs">
                <span>$</span>
                <input
                  type="number"
                  value={breakdown.gasEstimate}
                  onChange={(e) => updateGasEstimate(parseInt(e.target.value) || 0)}
                  className="w-20 px-1 py-0.5 border border-gray-200 rounded text-center"
                />
                <span>estimate</span>
              </div>
            )}
          </div>
          <span className="text-emerald-600 font-semibold">
            {formatCurrency(totalBudget.gas)}
          </span>
        </div>

        {/* Passenger Assistance */}
        <div className="flex items-center gap-2 text-gray-700">
          <Accessibility className="w-4 h-4" />
          <div className="flex-1">
            <span className="font-medium">Passenger Assistance</span>
            <p className="text-xs text-gray-500">{breakdown.passengerAssistance.notes}</p>
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
        {isEditing ? (
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
