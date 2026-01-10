'use client';

import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { DayPlan } from '@/types/trip';

interface MapControllerProps {
  selectedDayData: DayPlan | null;
  bounds: [number, number][];
  mapRef: React.MutableRefObject<any>;
  setZoomLevel: (level: 'full' | 'region' | 'location') => void;
}

export default function MapController({
  selectedDayData,
  bounds,
  mapRef,
  setZoomLevel
}: MapControllerProps) {
  const map = useMap();
  const hasFitted = useRef(false);
  const prevSelectedDay = useRef<number | null>(null);

  // Store map reference
  useEffect(() => {
    mapRef.current = map;
  }, [map, mapRef]);

  // Initial fit to bounds
  useEffect(() => {
    if (bounds.length > 0 && map && !hasFitted.current) {
      hasFitted.current = true;
      const leafletBounds = L.latLngBounds(bounds.map((b) => L.latLng(b[0], b[1])));
      map.fitBounds(leafletBounds, { padding: [30, 30], maxZoom: 7 });
    }
  }, [map, bounds]);

  // Auto-zoom to selected day location
  useEffect(() => {
    if (selectedDayData && map && prevSelectedDay.current !== selectedDayData.dayNumber) {
      prevSelectedDay.current = selectedDayData.dayNumber;

      // Zoom to the selected location
      const lat = selectedDayData.location.lat;
      const lng = selectedDayData.location.lng;

      // Animate to the location with appropriate zoom
      map.flyTo([lat, lng], 10, {
        duration: 0.8,
        easeLinearity: 0.5
      });

      setZoomLevel('location');
    }
  }, [selectedDayData, map, setZoomLevel]);

  return null;
}
