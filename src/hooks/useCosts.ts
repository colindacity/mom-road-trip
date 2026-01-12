'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { tripData } from '@/data/tripData';
import type { CostBreakdown } from '@/types/trip';

export interface TotalBudget {
  flights: number;
  carRental: number;
  accommodations: number;
  food: number;
  activities: number;
  gas: number;
  misc: number;
  total: number;
}

export interface UseCostsReturn {
  breakdown: CostBreakdown;
  totalBudget: TotalBudget;
  isLoading: boolean;
  isSaving: boolean;
  lastSaved: string | null;

  // Actions
  updateFlightPrice: (key: 'colinOutbound' | 'momOutbound' | 'colinReturn' | 'momReturn', price: number) => void;
  updateCarRental: (updates: Partial<CostBreakdown['carRental']>) => void;
  updateAccommodationAvg: (avg: number) => void;
  updateFoodPerDay: (amount: number) => void;
  updateGasEstimate: (amount: number) => void;
  resetToDefaults: () => void;
  saveNow: () => Promise<void>;
}

const defaultBreakdown = tripData.costBreakdown!;
const defaultBudget = tripData.totalBudget!;
const tripDays = tripData.days.length;

function calculateTotals(breakdown: CostBreakdown): TotalBudget {
  const flightsTotal = breakdown.flights.colinOutbound.price +
    breakdown.flights.momOutbound.price +
    breakdown.flights.colinReturn.price +
    breakdown.flights.momReturn.price;

  const carTotal = breakdown.carRental.dailyRate * breakdown.carRental.days + breakdown.carRental.dropoffFee;
  const accommodationsTotal = breakdown.accommodationAvg * (tripDays - 1); // Last day is travel
  const foodTotal = breakdown.foodPerDay * tripDays;
  const gasTotal = breakdown.gasEstimate;
  const miscTotal = 500; // Fixed misc budget

  return {
    flights: flightsTotal,
    carRental: carTotal,
    accommodations: accommodationsTotal,
    food: foodTotal,
    activities: 700, // Activities budget
    gas: gasTotal,
    misc: miscTotal,
    total: flightsTotal + carTotal + accommodationsTotal + foodTotal + 700 + gasTotal + miscTotal,
  };
}

export function useCosts(): UseCostsReturn {
  const [breakdown, setBreakdown] = useState<CostBreakdown>(defaultBreakdown);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);

  // Calculate totals from breakdown
  const totalBudget = useMemo(() => calculateTotals(breakdown), [breakdown]);

  // Load saved costs from API on mount
  useEffect(() => {
    async function loadCosts() {
      try {
        const res = await fetch('/api/costs');
        const { costs, source } = await res.json();

        if (costs && source === 'stored') {
          setBreakdown(costs.breakdown);
          setLastSaved(costs.updatedAt);
        }
      } catch (error) {
        console.error('Failed to load costs:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadCosts();
  }, []);

  // Save to API
  const saveNow = useCallback(async () => {
    setIsSaving(true);
    try {
      const res = await fetch('/api/costs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          breakdown,
          totalBudget,
        }),
      });
      const { updatedAt } = await res.json();
      setLastSaved(updatedAt);
    } catch (error) {
      console.error('Failed to save costs:', error);
    } finally {
      setIsSaving(false);
    }
  }, [breakdown, totalBudget]);

  // Debounced auto-save when breakdown changes
  useEffect(() => {
    if (isLoading) return;

    const timeout = setTimeout(() => {
      saveNow();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [breakdown, isLoading, saveNow]);

  // Update flight price
  const updateFlightPrice = useCallback((
    key: 'colinOutbound' | 'momOutbound' | 'colinReturn' | 'momReturn',
    price: number
  ) => {
    setBreakdown(prev => ({
      ...prev,
      flights: {
        ...prev.flights,
        [key]: { ...prev.flights[key], price },
        total: key === 'colinOutbound' ? price + prev.flights.momOutbound.price + prev.flights.colinReturn.price + prev.flights.momReturn.price :
          key === 'momOutbound' ? prev.flights.colinOutbound.price + price + prev.flights.colinReturn.price + prev.flights.momReturn.price :
          key === 'colinReturn' ? prev.flights.colinOutbound.price + prev.flights.momOutbound.price + price + prev.flights.momReturn.price :
          prev.flights.colinOutbound.price + prev.flights.momOutbound.price + prev.flights.colinReturn.price + price,
      },
    }));
  }, []);

  // Update car rental
  const updateCarRental = useCallback((updates: Partial<CostBreakdown['carRental']>) => {
    setBreakdown(prev => {
      const newCarRental = { ...prev.carRental, ...updates };
      newCarRental.total = newCarRental.dailyRate * newCarRental.days + newCarRental.dropoffFee;
      return { ...prev, carRental: newCarRental };
    });
  }, []);

  // Update accommodation average
  const updateAccommodationAvg = useCallback((avg: number) => {
    setBreakdown(prev => ({ ...prev, accommodationAvg: avg }));
  }, []);

  // Update food per day
  const updateFoodPerDay = useCallback((amount: number) => {
    setBreakdown(prev => ({ ...prev, foodPerDay: amount }));
  }, []);

  // Update gas estimate
  const updateGasEstimate = useCallback((amount: number) => {
    setBreakdown(prev => ({ ...prev, gasEstimate: amount }));
  }, []);

  // Reset to defaults
  const resetToDefaults = useCallback(() => {
    setBreakdown(defaultBreakdown);
  }, []);

  return {
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
    saveNow,
  };
}
