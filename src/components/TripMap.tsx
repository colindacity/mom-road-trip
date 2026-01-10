'use client';

import { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { Location, DayPlan } from '@/types/trip';
import { MapPin, Car, Bed, Camera, ChevronRight } from 'lucide-react';
import MapController from './MapController';

interface TripMapProps {
  locations: Location[];
  days: DayPlan[];
  selectedDay: number | null;
  onSelectDay: (dayNumber: number) => void;
}

// Move type definition outside component to avoid initialization issues
interface LocationInfo {
  location: Location;
  days: DayPlan[];
  firstDay: number;
  lastDay: number;
}

// Helper functions moved outside component
function getTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    'national_park': 'National Park',
    'city': 'City',
    'attraction': 'Attraction',
    'transit': 'Transit Stop'
  };
  return labels[type] || type;
}

function getTypeColor(type: string): string {
  const colors: Record<string, string> = {
    'national_park': 'bg-green-100 text-green-700',
    'city': 'bg-blue-100 text-blue-700',
    'attraction': 'bg-orange-100 text-orange-700',
    'transit': 'bg-gray-100 text-gray-700'
  };
  return colors[type] || 'bg-gray-100 text-gray-700';
}

export default function TripMap({ days, selectedDay, onSelectDay }: TripMapProps) {
  const [isReady, setIsReady] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<'full' | 'region' | 'location'>('full');
  const mapRef = useRef<any>(null);
  const modulesRef = useRef<{
    MapContainer: any;
    TileLayer: any;
    Marker: any;
    Popup: any;
    Polyline: any;
    useMap: any;
    L: any;
  } | null>(null);

  // Load modules on mount
  useEffect(() => {
    let mounted = true;

    Promise.all([
      import('react-leaflet'),
      import('leaflet')
    ]).then(([reactLeaflet, leaflet]) => {
      if (mounted) {
        modulesRef.current = {
          MapContainer: reactLeaflet.MapContainer,
          TileLayer: reactLeaflet.TileLayer,
          Marker: reactLeaflet.Marker,
          Popup: reactLeaflet.Popup,
          Polyline: reactLeaflet.Polyline,
          useMap: reactLeaflet.useMap,
          L: leaflet.default || leaflet,
        };
        setIsReady(true);
      }
    });

    return () => { mounted = false; };
  }, []);

  // Compute location data - always runs, even before modules load
  const locationData = useMemo((): LocationInfo[] => {
    const locationMap = new Map<string, LocationInfo>();

    days.forEach(day => {
      const existing = locationMap.get(day.location.id);
      if (existing) {
        existing.days.push(day);
        existing.lastDay = Math.max(existing.lastDay, day.dayNumber);
      } else {
        locationMap.set(day.location.id, {
          location: day.location,
          days: [day],
          firstDay: day.dayNumber,
          lastDay: day.dayNumber,
        });
      }
    });

    return Array.from(locationMap.values());
  }, [days]);

  // Compute bounds - always runs
  const bounds = useMemo((): [number, number][] => {
    return locationData.map(loc => [loc.location.lat, loc.location.lng] as [number, number]);
  }, [locationData]);

  // Compute route coordinates - always runs
  const routeCoordinates = useMemo((): [number, number][] => {
    return days.map(day => [day.location.lat, day.location.lng] as [number, number]);
  }, [days]);

  // Generate route segments with direction indicators - must be before conditional return
  const routeSegments = useMemo(() => {
    const segments: { from: [number, number]; to: [number, number]; dayNum: number }[] = [];
    for (let i = 0; i < days.length - 1; i++) {
      const from = days[i];
      const to = days[i + 1];
      if (from.location.id !== to.location.id) {
        segments.push({
          from: [from.location.lat, from.location.lng],
          to: [to.location.lat, to.location.lng],
          dayNum: to.dayNumber
        });
      }
    }
    return segments;
  }, [days]);

  // Create icon function - memoized
  const createIcon = useCallback((dayNum: number, isSelected: boolean, type: string, isMultiDay: boolean) => {
    if (!modulesRef.current) return null;
    const L = modulesRef.current.L;

    const colors: Record<string, string> = {
      'national_park': '#16a34a',
      'city': '#2563eb',
      'attraction': '#ea580c',
      'transit': '#6b7280'
    };
    const color = isSelected ? '#dc2626' : colors[type] || '#2563eb';
    const size = isSelected ? 40 : (isMultiDay ? 34 : 28);

    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          width: ${size}px;
          height: ${size}px;
          background: ${color};
          border: 3px solid white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: ${isSelected ? '14px' : '12px'};
          font-weight: bold;
          color: white;
          box-shadow: 0 3px 10px rgba(0,0,0,0.35);
          cursor: pointer;
          transition: all 0.2s;
          ${isSelected ? 'z-index: 1000;' : ''}
        ">${dayNum}</div>
      `,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
    });
  }, []);

  // Get selected day's location for auto-zoom - must be before conditional return
  const selectedDayData = selectedDay ? days.find(d => d.dayNumber === selectedDay) ?? null : null;

  // Function to zoom out to full route - must be before conditional return
  const zoomToFullRoute = useCallback(() => {
    if (mapRef.current && bounds.length > 0 && modulesRef.current) {
      const L = modulesRef.current.L;
      const leafletBounds = L.latLngBounds(bounds.map((b: [number, number]) => L.latLng(b[0], b[1])));
      mapRef.current.fitBounds(leafletBounds, { padding: [30, 30], maxZoom: 7 });
      setZoomLevel('full');
    }
  }, [bounds]);

  // Show loading state if modules not ready
  if (!isReady || !modulesRef.current) {
    return (
      <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center">
        <div className="text-gray-500 flex items-center gap-2">
          <MapPin className="w-5 h-5 animate-pulse" />
          Loading map...
        </div>
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup, Polyline, L } = modulesRef.current;

  return (
    <div className="relative w-full h-full">
      {/* Zoom controls */}
      <div className="absolute top-2 right-2 z-[1000] flex flex-col gap-1">
        <button
          onClick={zoomToFullRoute}
          className={`px-2 py-1 text-xs rounded shadow-md transition-colors ${
            zoomLevel === 'full'
              ? 'bg-gray-900 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          title="View full route"
        >
          Full Route
        </button>
        {selectedDay && (
          <button
            onClick={() => {
              if (selectedDayData && mapRef.current) {
                mapRef.current.flyTo([selectedDayData.location.lat, selectedDayData.location.lng], 12, { duration: 0.5 });
                setZoomLevel('location');
              }
            }}
            className={`px-2 py-1 text-xs rounded shadow-md transition-colors ${
              zoomLevel === 'location'
                ? 'bg-red-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            title="Zoom to selected day"
          >
            Day {selectedDay}
          </button>
        )}
      </div>

      <MapContainer
        center={[40.5, -111.5]}
        zoom={5}
        className="w-full h-full rounded-xl"
        scrollWheelZoom={true}
        style={{ background: '#f3f4f6' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles &copy; Esri'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
        />

        <MapController
          selectedDayData={selectedDayData}
          bounds={bounds}
          mapRef={mapRef}
          setZoomLevel={setZoomLevel}
        />

      <Polyline
        positions={routeCoordinates}
        pathOptions={{
          color: '#dc2626',
          weight: 3,
          opacity: 0.6,
          dashArray: '8, 8'
        }}
      />

      {locationData.map((locData) => {
        const isSelected = selectedDay !== null &&
          locData.days.some(d => d.dayNumber === selectedDay);
        const isMultiDay = locData.days.length > 1;
        const dayRange = locData.firstDay === locData.lastDay
          ? `Day ${locData.firstDay}`
          : `Days ${locData.firstDay}-${locData.lastDay}`;

        const allActivities = locData.days.flatMap(d => d.activities);
        const topActivities = allActivities.slice(0, 3);

        const icon = createIcon(locData.firstDay, isSelected, locData.location.type, isMultiDay);
        if (!icon) return null;

        return (
          <Marker
            key={locData.location.id}
            position={[locData.location.lat, locData.location.lng]}
            icon={icon}
            eventHandlers={{
              click: () => onSelectDay(locData.firstDay),
            }}
          >
            <Popup maxWidth={320} minWidth={280}>
              <div className="p-1">
                {locData.location.image && (
                  <div className="w-full h-24 -mx-1 -mt-1 mb-2 rounded-t overflow-hidden">
                    <img
                      src={locData.location.image}
                      alt={locData.location.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900 text-base leading-tight">
                      {locData.location.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getTypeColor(locData.location.type)}`}>
                        {getTypeLabel(locData.location.type)}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">{dayRange}</span>
                    </div>
                  </div>
                </div>

                {locData.days.map(day => (
                  <div
                    key={day.dayNumber}
                    className={`p-2 rounded-lg mb-2 cursor-pointer transition-colors ${
                      selectedDay === day.dayNumber
                        ? 'bg-red-50 border border-red-200'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => onSelectDay(day.dayNumber)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          selectedDay === day.dayNumber
                            ? 'bg-red-500 text-white'
                            : 'bg-gray-200 text-gray-700'
                        }`}>
                          {day.dayNumber}
                        </span>
                        <span className="text-sm font-medium text-gray-900">{day.title}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>

                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                      {day.drivingDistance && (
                        <span className="flex items-center gap-1">
                          <Car className="w-3 h-3" />
                          {day.drivingDistance}
                        </span>
                      )}
                      {day.accommodation && (
                        <span className="flex items-center gap-1">
                          <Bed className="w-3 h-3" />
                          {day.accommodation.priceRange}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Camera className="w-3 h-3" />
                        {day.activities.length} activities
                      </span>
                    </div>
                  </div>
                ))}

                {topActivities.length > 0 && (
                  <div className="border-t border-gray-100 pt-2 mt-1">
                    <div className="text-xs font-medium text-gray-500 mb-1">Highlights</div>
                    <div className="space-y-1">
                      {topActivities.map((activity, i) => (
                        <div key={i} className="text-xs text-gray-700 flex items-start gap-1">
                          <span className="text-gray-400">•</span>
                          <span>{activity.name}</span>
                        </div>
                      ))}
                      {allActivities.length > 3 && (
                        <div className="text-xs text-gray-400">
                          +{allActivities.length - 3} more activities
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </Popup>
          </Marker>
        );
      })}
      </MapContainer>
    </div>
  );
}
