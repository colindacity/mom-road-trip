'use client';

import { TripData, ViewMode } from '@/types/trip';
import { format, parseISO, differenceInDays } from 'date-fns';
import {
  MapIcon,
  ListIcon,
  CalendarDays,
  DollarSign,
  Users,
  Plane,
  Car,
  Mountain,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

interface TripHeaderProps {
  trip: TripData;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

const viewModes: { mode: ViewMode; label: string; icon: React.ReactNode }[] = [
  { mode: 'timeline', label: 'Timeline', icon: <CalendarDays className="w-4 h-4" /> },
  { mode: 'map', label: 'Map', icon: <MapIcon className="w-4 h-4" /> },
  { mode: 'list', label: 'List', icon: <ListIcon className="w-4 h-4" /> },
  { mode: 'budget', label: 'Budget', icon: <DollarSign className="w-4 h-4" /> },
];

export default function TripHeader({ trip, viewMode, onViewModeChange }: TripHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const startDate = parseISO(trip.startDate);
  const endDate = parseISO(trip.endDate);
  const totalDays = differenceInDays(endDate, startDate) + 1;

  // Count unique national parks
  const nationalParks = [...new Set(trip.days
    .filter(d => d.location.type === 'national_park')
    .map(d => d.location.name)
  )];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main header */}
        <div className="py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Mountain className="w-6 h-6 text-red-500" />
              <span className="hidden sm:inline">{trip.name}</span>
              <span className="sm:hidden">Road Trip</span>
            </h1>
            <p className="text-sm text-gray-600 mt-0.5">
              {format(startDate, 'MMM d')} - {format(endDate, 'MMM d, yyyy')}
              <span className="mx-2 text-gray-300">•</span>
              {totalDays} days
            </p>
          </div>

          {/* Desktop view mode buttons */}
          <div className="hidden md:flex items-center gap-1 bg-gray-100 rounded-lg p-1">
            {viewModes.map(({ mode, label, icon }) => (
              <button
                key={mode}
                onClick={() => onViewModeChange(mode)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  viewMode === mode
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-wrap gap-2">
              {viewModes.map(({ mode, label, icon }) => (
                <button
                  key={mode}
                  onClick={() => {
                    onViewModeChange(mode);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    viewMode === mode
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quick stats bar */}
        <div className="py-3 border-t border-gray-100 flex items-center gap-4 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-2 text-sm whitespace-nowrap">
            <Users className="w-4 h-4 text-blue-500" />
            <span className="text-gray-600">{trip.travelers.length} travelers</span>
          </div>
          <div className="flex items-center gap-2 text-sm whitespace-nowrap">
            <Plane className="w-4 h-4 text-purple-500" />
            <span className="text-gray-600">{trip.flights.length} flights</span>
          </div>
          <div className="flex items-center gap-2 text-sm whitespace-nowrap">
            <Car className="w-4 h-4 text-amber-500" />
            <span className="text-gray-600">~2,000 mi drive</span>
          </div>
          <div className="flex items-center gap-2 text-sm whitespace-nowrap">
            <Mountain className="w-4 h-4 text-green-500" />
            <span className="text-gray-600">{nationalParks.length} national parks</span>
          </div>
          {trip.totalBudget && (
            <div className="flex items-center gap-2 text-sm whitespace-nowrap">
              <DollarSign className="w-4 h-4 text-green-600" />
              <span className="text-gray-600">${trip.totalBudget.total.toLocaleString()} total</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
