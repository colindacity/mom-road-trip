'use client';

import { useState, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { tripData, locations } from '@/data/tripData';
import { TripPhase } from '@/types/trip';
import { differenceInDays, parseISO } from 'date-fns';
import { getTodayDay, formatTripDateLong } from '@/lib/dateUtils';
import PhaseNav from '@/components/PhaseNav';
import CompactDayRow from '@/components/CompactDayRow';
import ActivityQueue from '@/components/ActivityQueue';
import DndCalendar from '@/components/DndCalendar';
import TripCalendarView from '@/components/TripCalendarView';
import { useTripState } from '@/hooks/useTripState';
import CostBreakdown from '@/components/CostBreakdown';
import PackingList from '@/components/PackingList';
import FlightInfo from '@/components/FlightInfo';
import CarRentalInfo from '@/components/CarRentalInfo';
import ActionTracker from '@/components/ActionTracker';
import TripTable from '@/components/TripTable';
import {
  Map, DollarSign, Calendar, Users, Car, Search, ListTodo, CalendarCheck, RotateCcw, LayoutGrid, List, Backpack, Plane, Clock, MoreVertical, X, Wifi, HeartPulse, ExternalLink, Table2
} from 'lucide-react';
import SiteNav from '@/components/SiteNav';

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
  const [showBudget, setShowBudget] = useState(false);
  const [showPacking, setShowPacking] = useState(false);
  const [showFlights, setShowFlights] = useState(false);
  const [showCarRental, setShowCarRental] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [viewMode, setViewMode] = useState<'timeline' | 'calendar' | 'table'>('timeline');

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

  // Calculate days until trip
  const daysUntilTrip = differenceInDays(parseISO(tripData.startDate), new Date());
  const today = getTodayDay();

  // Auto-expand today's day when it exists
  useEffect(() => {
    if (today && expandedDays.size === 0) {
      setExpandedDays(new Set([today.id]));
      setSelectedDay(today.dayNumber);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SiteNav current="home" />
      {/* Page header (tier 2 + 3) */}
      <header className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-[40px] z-40">
        <div className="max-w-6xl mx-auto px-4">
          {/* Tier 2: page title + sidebar toggles */}
          <div className="flex items-center justify-between py-2.5">
            <div className="flex items-center gap-3 min-w-0">
              <div className="font-semibold text-gray-900 truncate">{tripData.name}</div>
              <span className="text-xs text-gray-400 hidden sm:inline whitespace-nowrap">
                {tripData.startDate} → {tripData.endDate}
              </span>
              {confirmedCount > 0 && (
                <div className="flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-700 rounded-full text-xs whitespace-nowrap">
                  <CalendarCheck className="w-3 h-3" />
                  <span className="font-medium">{confirmedCount} confirmed</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              {/* Reset (only shown when there's state to reset) */}
              {(queuedCount > 0 || confirmedCount > 0) && (
                <button
                  onClick={() => {
                    if (confirm('Reset all selections? This will restore all activities and clear calendar selections.')) {
                      resetState();
                    }
                  }}
                  className="p-1.5 rounded text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                  title="Reset all"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}

              {/* Queue */}
              <button
                onClick={() => setShowQueue(!showQueue)}
                className={`relative px-2 py-1.5 rounded text-xs font-medium transition-colors flex items-center gap-1 ${
                  showQueue ? 'bg-amber-100 text-amber-700' : 'text-gray-500 hover:bg-gray-100'
                }`}
                title="Activity queue"
              >
                <ListTodo className="w-4 h-4" />
                <span className="hidden sm:inline">Queue</span>
                {queuedCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-white text-[10px] rounded-full flex items-center justify-center">
                    {queuedCount}
                  </span>
                )}
              </button>

              {/* View mode segmented control */}
              <div className="flex items-center border border-gray-200 rounded overflow-hidden">
                <button
                  onClick={() => setViewMode('timeline')}
                  className={`p-1.5 transition-colors ${
                    viewMode === 'timeline' ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-100'
                  }`}
                  title="Timeline view"
                >
                  <List className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode('calendar')}
                  className={`p-1.5 transition-colors ${
                    viewMode === 'calendar' ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-100'
                  }`}
                  title="Calendar view"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`p-1.5 transition-colors ${
                    viewMode === 'table' ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-100'
                  }`}
                  title="Table view"
                >
                  <Table2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={() => setShowMap(!showMap)}
                className={`p-1.5 rounded transition-colors ${
                  showMap ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-100'
                }`}
                title="Toggle map"
              >
                <Map className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tier 3: Side-panel toggles (clearly labeled) */}
          <div className="flex items-center gap-1 pb-2 overflow-x-auto scrollbar-hide -mx-1 px-1">
            <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mr-1 shrink-0">Panels:</span>
            {([
              ['Actions', ListTodo, showActions, () => setShowActions(!showActions), 'bg-teal-100 text-teal-700 ring-1 ring-teal-200'],
              ['Flights', Plane, showFlights, () => setShowFlights(!showFlights), 'bg-blue-100 text-blue-700 ring-1 ring-blue-200'],
              ['Car', Car, showCarRental, () => setShowCarRental(!showCarRental), 'bg-orange-100 text-orange-700 ring-1 ring-orange-200'],
              ['Packing', Backpack, showPacking, () => setShowPacking(!showPacking), 'bg-indigo-100 text-indigo-700 ring-1 ring-indigo-200'],
              ['Budget', DollarSign, showBudget, () => setShowBudget(!showBudget), 'bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200'],
            ] as const).map(([label, Icon, active, toggle, activeClass]) => (
              <button
                key={label}
                onClick={toggle}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  active ? activeClass : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-4">
        {/* Today banner */}
        {today && (
          <div className="mb-4 rounded-xl border-2 border-amber-400 bg-gradient-to-r from-amber-50 via-orange-50 to-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="shrink-0">
                <div className="text-[10px] font-bold tracking-widest uppercase text-amber-700 bg-amber-200 px-2 py-0.5 rounded-full inline-block">TODAY</div>
                <div className="text-xl font-bold text-gray-900 mt-1">{formatTripDateLong(today.date)}</div>
              </div>
              <div className="flex-1 min-w-0 border-l border-amber-200 pl-3">
                <div className="text-sm font-semibold text-gray-800 leading-tight">{today.title}</div>
                {today.momNotes?.blurb && <div className="text-xs text-gray-600 mt-0.5 line-clamp-2">{today.momNotes.blurb}</div>}
                <div className="flex flex-wrap gap-2 mt-1.5 text-[10px]">
                  <span className="bg-white text-gray-700 px-2 py-0.5 rounded-full border border-gray-200">📍 {today.overnight || today.location.name}</span>
                  {today.drivingDistance && <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">🚗 {today.drivingDistance} · {today.drivingTime}</span>}
                  {today.driveRoute && <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-semibold">🛣️ Drive route on /mom & /guide</span>}
                </div>
              </div>
              <a href="/mom" className="shrink-0 text-xs bg-amber-500 hover:bg-amber-600 text-white px-3 py-1.5 rounded-lg font-semibold">Today details →</a>
            </div>
          </div>
        )}

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
          {daysUntilTrip > 0 && (
            <div className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap bg-amber-50 px-2 py-0.5 rounded-full">
              <Clock className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-amber-600" />
              <span className="font-medium text-amber-700">{daysUntilTrip}</span>
              <span className="text-amber-600 hidden sm:inline">days to go!</span>
              <span className="text-amber-600 sm:hidden">d</span>
            </div>
          )}
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
          <TripCalendarView
            onSelectDay={(dayNum) => {
              setViewMode('timeline');
              setSelectedDay(dayNum);
              setExpandedDays(new Set([`d${dayNum}`]));
            }}
          />
        ) : viewMode === 'table' ? (
          /* Table View */
          <TripTable
            days={tripData.days}
            phases={tripData.phases}
            onSelectDay={(dayNum) => {
              setViewMode('timeline');
              setSelectedDay(dayNum);
              setExpandedDays(new Set([`d${dayNum}`]));
            }}
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

            {/* Right column - Map, Queue, Budget, Reservations, Packing */}
            {(showMap || showQueue || showBudget || showPacking || showActions) && (
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

                  {/* Budget Breakdown */}
                  {showBudget && (
                    <CostBreakdown tripDays={tripData.days.length} />
                  )}

                  {/* Packing List */}
                  {showPacking && tripData.packingList && (
                    <PackingList items={tripData.packingList} />
                  )}

                  {/* Flight Info */}
                  {showFlights && tripData.flights && (
                    <FlightInfo flights={tripData.flights} tripStartDate={tripData.startDate} />
                  )}

                  {/* Car Rental Info */}
                  {showCarRental && tripData.carRental && (
                    <CarRentalInfo carRental={tripData.carRental} />
                  )}

                  {/* Action Tracker */}
                  {showActions && (
                    <ActionTracker />
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
            {tripData.importantReservations && tripData.importantReservations.length > 0 && (() => {
              const items = tripData.importantReservations;
              const actionItems = items.filter(r => r.item.startsWith('🔴'));
              const bookedCount = items.filter(r => /^(BOOKED|OWNED|N\/A)$/i.test(r.bookBy) || r.item.startsWith('✅') || r.item.startsWith('ℹ️')).length;
              const bg = actionItems.length > 0 ? 'bg-red-50' : 'bg-emerald-50';
              const labelColor = actionItems.length > 0 ? 'text-red-600' : 'text-emerald-700';
              return (
                <div className={`p-3 ${bg} rounded-lg col-span-2`}>
                  <div className={`text-xs ${labelColor} font-medium mb-1`}>
                    {bookedCount}/{items.length} done
                    {actionItems.length > 0 && ` · ${actionItems.length} action needed`}
                  </div>
                  <div className="space-y-1">
                    {(actionItems.length > 0 ? actionItems : items).slice(0, 2).map((res, i) => (
                      <div key={i} className="text-xs text-gray-600">{res.item}</div>
                    ))}
                  </div>
                </div>
              );
            })()}

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

          {/* Travel Guides */}
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="/packing-list.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-medium hover:bg-indigo-100 transition-colors"
            >
              <Backpack className="w-3.5 h-3.5" />
              Packing List
              <ExternalLink className="w-3 h-3 opacity-50" />
            </a>
            <a
              href="/medical-emergency-guide.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-700 rounded-lg text-xs font-medium hover:bg-red-100 transition-colors"
            >
              <HeartPulse className="w-3.5 h-3.5" />
              Medical &amp; Emergency Guide
              <ExternalLink className="w-3 h-3 opacity-50" />
            </a>
            <a
              href="/connectivity-guide.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-sky-50 text-sky-700 rounded-lg text-xs font-medium hover:bg-sky-100 transition-colors"
            >
              <Wifi className="w-3.5 h-3.5" />
              Cell &amp; WiFi Guide
              <ExternalLink className="w-3 h-3 opacity-50" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
