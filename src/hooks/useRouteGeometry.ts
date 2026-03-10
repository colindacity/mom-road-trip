import { useState, useEffect, useMemo } from 'react';
import { DayPlan } from '@/types/trip';

interface RouteSegment {
  from: string;
  to: string;
  coordinates: [number, number][];
  dayNum: number;
}

// Fetch real road route from OSRM (free, no API key)
async function fetchRoute(
  fromLat: number, fromLng: number,
  toLat: number, toLng: number
): Promise<[number, number][]> {
  try {
    const url = `https://router.project-osrm.org/route/v1/driving/${fromLng},${fromLat};${toLng},${toLat}?overview=full&geometries=geojson`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    if (data.code !== 'Ok' || !data.routes?.[0]) return [];
    // GeoJSON coordinates are [lng, lat], Leaflet needs [lat, lng]
    return data.routes[0].geometry.coordinates.map(
      (c: [number, number]) => [c[1], c[0]] as [number, number]
    );
  } catch {
    return [];
  }
}

export function useRouteGeometry(days: DayPlan[]) {
  const [routes, setRoutes] = useState<RouteSegment[]>([]);
  const [loading, setLoading] = useState(true);

  // Compute unique driving segments (where location changes between days)
  const segments = useMemo(() => {
    const segs: { fromId: string; toId: string; fromLat: number; fromLng: number; toLat: number; toLng: number; dayNum: number }[] = [];
    for (let i = 0; i < days.length - 1; i++) {
      const from = days[i];
      const to = days[i + 1];
      if (from.location.id !== to.location.id) {
        // Dedupe — only add if we haven't already fetched this pair
        const exists = segs.some(s => s.fromId === from.location.id && s.toId === to.location.id);
        if (!exists) {
          segs.push({
            fromId: from.location.id,
            toId: to.location.id,
            fromLat: from.location.lat,
            fromLng: from.location.lng,
            toLat: to.location.lat,
            toLng: to.location.lng,
            dayNum: to.dayNumber,
          });
        }
      }
    }
    return segs;
  }, [days]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    async function fetchAll() {
      const results: RouteSegment[] = [];

      // Fetch in batches of 3 to avoid hammering OSRM
      for (let i = 0; i < segments.length; i += 3) {
        const batch = segments.slice(i, i + 3);
        const batchResults = await Promise.all(
          batch.map(async (seg) => {
            const coords = await fetchRoute(seg.fromLat, seg.fromLng, seg.toLat, seg.toLng);
            return {
              from: seg.fromId,
              to: seg.toId,
              coordinates: coords,
              dayNum: seg.dayNum,
            };
          })
        );
        if (cancelled) return;
        results.push(...batchResults);
      }

      if (!cancelled) {
        setRoutes(results);
        setLoading(false);
      }
    }

    fetchAll();
    return () => { cancelled = true; };
  }, [segments]);

  return { routes, loading };
}
