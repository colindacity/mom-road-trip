'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { tripData, locations } from '@/data/tripData';
import { TripPhase } from '@/types/trip';
import PhaseNav from '@/components/PhaseNav';
import CompactDayRow from '@/components/CompactDayRow';
import ActivityQueue from '@/components/ActivityQueue';
import DndCalendar from '@/components/DndCalendar';
import { useTripState } from '@/hooks/useTripState';
import {
  Map, DollarSign, Calendar, Users, Car, Search, ListTodo, CalendarCheck, RotateCcw, LayoutGrid, List
} from 'lucide-react';

const TripMap = dynamic(() => import('@/components/TripMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-50 flex items-center justify-center">
      <div className="text-gray-400 text-sm">Loading map...</div>
    </div>
  ),
});

export default function Home() {
  const [activePhase, setActivePhase] = useState<string | null>(null);
  const [expandedDays, setExpandedDays] = useState<Set<string>>(new Set());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [showMap, setShowMap] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showQueue, setShowQueue] = useState(false);
  const [viewMode, setViewMode] = useState<'timeline' | 'calendar'>('timeline');

  // Trip state management (persisted to localStorage)
  const {
    state,
    isLoaded,
    toggleConfirmed,
    removeActivity,
    restoreActivity,
    deleteFromQueue,
    isHidden,
    isConfirmed,
    resetState,
    queuedCount,
    confirmedCount,
  } = useTripState();

  // Filter days by phase and search
  const filteredDays = useMemo(() => {
    let days = tripData.days;

    if (activePhase) {
      const phase = tripData.phases.find(p => p.id === activePhase);
      if (phase) {
        days = days.filter(d => phase.days.includes(d.dayNumber));
      }
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      days = days.filter(d =>
        d.title.toLowerCase().includes(q) ||
        d.location.name.toLowerCase().includes(q) ||
        d.activities.some(a => a.name.toLowerCase().includes(q))
      );
    }

    return days;
  }, [activePhase, searchQuery]);

  const toggleDay = (dayId: string) => {
    const newExpanded = new Set(expandedDays);
    if (newExpanded.has(dayId)) {
      newExpanded.delete(dayId);
    } else {
      newExpanded.add(dayId);
    }
    setExpandedDays(newExpanded);
  };

  const selectDay = (dayNumber: number) => {
    setSelectedDay(dayNumber);
    const day = tripData.days.find(d => d.dayNumber === dayNumber);
    if (day) {
      setExpandedDays(new Set([day.id]));
    }
  };

  const getPhaseForDay = (dayNumber: number): TripPhase | undefined => {
    return tripData.phases.find(p =>
      dayNumber >= p.startDay && dayNumber <= p.endDay
    );
  };

  // Calculate totals
  const totalBudget = tripData.totalBudget?.total || 0;
  const totalDays = tripData.days.length;
  const totalMiles = tripData.days.reduce((sum, d) => {
    const miles = d.drivingDistance?.match(/(\d+)/)?.[1];
    return sum + (miles ? parseInt(miles) : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-lg font-semibold text-gray-900">{tripData.name}</div>
              <span className="text-xs text-gray-400 hidden sm:inline">
                {tripData.startDate} → {tripData.endDate}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {/* Confirmed activities count */}
              {confirmedCount > 0 && (
                <div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 text-green-700 rounded-lg text-xs">
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span className="font-medium">{confirmedCount}</span>
                </div>
              )}

              {/* Queue button */}
              <button
                onClick={() => setShowQueue(!showQueue)}
                className={`relative p-2 rounded-lg transition-colors ${
                  showQueue ? 'bg-amber-100 text-amber-700' : 'text-gray-400 hover:text-gray-600'
                }`}
                title="Activity queue"
              >
                <ListTodo className="w-4 h-4" />
                {queuedCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-white text-[10px] rounded-full flex items-center justify-center">
                    {queuedCount}
                  </span>
                )}
              </button>

              {/* Reset button */}
              {(queuedCount > 0 || confirmedCount > 0) && (
                <button
                  onClick={() => {
                    if (confirm('Reset all selections? This will restore all activities and clear calendar selections.')) {
                      resetState();
                    }
                  }}
                  className="p-2 rounded-lg text-gray-400 hover:text-gray-600 transition-colors"
                  title="Reset all"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}

              {/* View toggle */}
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('timeline')}
                  className={`p-2 transition-colors ${
                    viewMode === 'timeline' ? 'bg-gray-100 text-gray-900' : 'text-gray-400 hover:text-gray-600'
                  }`}
                  title="Timeline view"
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('calendar')}
                  className={`p-2 transition-colors ${
                    viewMode === 'calendar' ? 'bg-gray-100 text-gray-900' : 'text-gray-400 hover:text-gray-600'
                  }`}
                  title="Calendar view"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => setShowMap(!showMap)}
                className={`p-2 rounded-lg transition-colors ${
                  showMap ? 'bg-gray-100 text-gray-900' : 'text-gray-400 hover:text-gray-600'
                }`}
                title="Toggle map"
              >
                <Map className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-4">
        {/* Quick stats row */}
        <div className="flex items-center gap-3 sm:gap-6 text-xs text-gray-500 mb-4 overflow-x-auto pb-2 scrollbar-hide" suppressHydrationWarning>
          <div className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
            <Calendar className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            <span className="font-medium text-gray-700">{totalDays}</span> <span className="hidden sm:inline">days</span><span className="sm:hidden">d</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
            <Car className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            <span className="font-medium text-gray-700">{totalMiles.toLocaleString()}</span> <span className="hidden sm:inline">miles</span><span className="sm:hidden">mi</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
            <DollarSign className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            <span className="font-medium text-gray-700">${totalBudget.toLocaleString()}</span>
          </div>
          <div className="hidden md:flex items-center gap-1.5 whitespace-nowrap">
            <Users className="w-3.5 h-3.5" />
            {tripData.travelers.map((t, i) => (
              <span key={t.id} className="flex items-center gap-1">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: t.color }}
                />
                <span>{t.name}</span>
                {i < tripData.travelers.length - 1 && <span className="text-gray-300 mx-1">+</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Calendar View */}
        {viewMode === 'calendar' ? (
          <DndCalendar
            onPhaseSelect={setActivePhase}
            selectedPhase={activePhase}
          />
        ) : (
          /* Timeline View */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left column - Itinerary */}
            <div className="lg:col-span-2">
              {/* Phase navigation */}
              <div className="mb-3">
                <PhaseNav
                  phases={tripData.phases}
                  activePhase={activePhase}
                  onSelectPhase={setActivePhase}
                />
              </div>

              {/* Search */}
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search days, locations, activities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoComplete="off"
                  suppressHydrationWarning
                  className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>

              {/* Phase summary */}
              {activePhase && (
                <div className="mb-3 p-3 rounded-lg" style={{
                  backgroundColor: `${tripData.phases.find(p => p.id === activePhase)?.color}10`,
                  borderLeft: `3px solid ${tripData.phases.find(p => p.id === activePhase)?.color}`
                }}>
                  <h2 className="text-sm font-medium text-gray-900">
                    {tripData.phases.find(p => p.id === activePhase)?.name}
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {tripData.phases.find(p => p.id === activePhase)?.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {tripData.phases.find(p => p.id === activePhase)?.highlights?.map((h, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 bg-white rounded-full text-gray-600">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Days list */}
              <div className="border border-gray-100 rounded-lg divide-y divide-gray-50">
                {filteredDays.map(day => (
                  <CompactDayRow
                    key={day.id}
                    day={day}
                    phase={getPhaseForDay(day.dayNumber)}
                    isExpanded={expandedDays.has(day.id)}
                    isSelected={selectedDay === day.dayNumber}
                    onToggle={() => toggleDay(day.id)}
                    onSelect={() => selectDay(day.dayNumber)}
                    onRemoveActivity={removeActivity}
                    onToggleConfirmed={toggleConfirmed}
                    isActivityHidden={isHidden}
                    isActivityConfirmed={isConfirmed}
                  />
                ))}
                {filteredDays.length === 0 && (
                  <div className="p-8 text-center text-gray-400 text-sm">
                    No days match your search
                  </div>
                )}
              </div>

              {/* Quick actions */}
              <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                <button
                  onClick={() => setExpandedDays(new Set(tripData.days.map(d => d.id)))}
                  className="hover:text-gray-600"
                >
                  Expand all
                </button>
                <button
                  onClick={() => setExpandedDays(new Set())}
                  className="hover:text-gray-600"
                >
                  Collapse all
                </button>
              </div>
            </div>

            {/* Right column - Map or Queue */}
            {(showMap || showQueue) && (
              <div className="lg:col-span-1 order-first lg:order-last">
                <div className="lg:sticky lg:top-20 space-y-4">
                  {/* Activity Queue */}
                  {showQueue && (
                    <ActivityQueue
                      queuedActivities={state.queuedActivities}
                      onRestore={restoreActivity}
                      onDelete={deleteFromQueue}
                      onClose={() => setShowQueue(false)}
                    />
                  )}

                  {/* Map */}
                  {showMap && (
                    <div className="rounded-lg overflow-hidden border border-gray-100 bg-gray-50 h-[250px] sm:h-[300px] lg:h-[calc(100vh-140px)]">
                      <TripMap
                        locations={locations}
                        days={tripData.days}
                        selectedDay={selectedDay}
                        onSelectDay={selectDay}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom quick info */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Car rental */}
            {tripData.carRental && (
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                  <Car className="w-3.5 h-3.5" />
                  Car Rental
                </div>
                <div className="text-sm font-medium text-gray-900">{tripData.carRental.vehicleType}</div>
                <div className="text-xs text-gray-500">${tripData.carRental.totalCost}</div>
              </div>
            )}

            {/* Important reservations */}
            {tripData.importantReservations && tripData.importantReservations.length > 0 && (
              <div className="p-3 bg-red-50 rounded-lg col-span-2">
                <div className="text-xs text-red-600 font-medium mb-1">
                  {tripData.importantReservations.length} reservations needed
                </div>
                <div className="space-y-1">
                  {tripData.importantReservations.slice(0, 2).map((res, i) => (
                    <div key={i} className="text-xs text-gray-600">{res.item}</div>
                  ))}
                  {tripData.importantReservations.length > 2 && (
                    <div className="text-xs text-gray-400">+{tripData.importantReservations.length - 2} more</div>
                  )}
                </div>
              </div>
            )}

            {/* Budget breakdown */}
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2 text-xs text-green-700 mb-1">
                <DollarSign className="w-3.5 h-3.5" />
                Per Person
              </div>
              <div className="text-sm font-medium text-gray-900">
                ${Math.round(totalBudget / tripData.travelers.length).toLocaleString()}
              </div>
              <div className="text-xs text-gray-500">
                ${Math.round(totalBudget / totalDays)}/day
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
