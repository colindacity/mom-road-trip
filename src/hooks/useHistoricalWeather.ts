'use client';

import { useState, useEffect, useCallback } from 'react';
import { DailyWeatherStats } from '@/lib/historicalWeather';

interface CacheEntry {
  data: DailyWeatherStats;
  timestamp: number;
}

// In-memory cache to avoid repeated API calls
const weatherCache: Record<string, CacheEntry> = {};
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

function getCacheKey(lat: number, lng: number, date: string): string {
  // Round coordinates to 2 decimal places for caching
  return `${lat.toFixed(2)}_${lng.toFixed(2)}_${date}`;
}

export function useHistoricalWeather(
  lat: number | undefined,
  lng: number | undefined,
  date: string | undefined,
  enabled: boolean = true
) {
  const [data, setData] = useState<DailyWeatherStats | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    if (!lat || !lng || !date || !enabled) {
      setData(null);
      return;
    }

    const cacheKey = getCacheKey(lat, lng, date);

    // Check cache first
    const cached = weatherCache[cacheKey];
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      setData(cached.data);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/weather/historical?lat=${lat}&lng=${lng}&date=${date}&years=3`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const result = await response.json();

      if (result.stats) {
        // Cache the result
        weatherCache[cacheKey] = {
          data: result.stats,
          timestamp: Date.now(),
        };
        setData(result.stats);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }, [lat, lng, date, enabled]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
}

// Batch hook for fetching multiple days at once
export function useBatchHistoricalWeather(
  locations: Array<{ lat: number; lng: number; date: string }>,
  enabled: boolean = true
) {
  const [data, setData] = useState<Record<string, DailyWeatherStats>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const fetchAll = useCallback(async () => {
    if (!enabled || locations.length === 0) {
      setData({});
      return;
    }

    setIsLoading(true);
    setProgress(0);

    const results: Record<string, DailyWeatherStats> = {};
    const uncached: typeof locations = [];

    // Check cache for each location
    for (const loc of locations) {
      const cacheKey = getCacheKey(loc.lat, loc.lng, loc.date);
      const cached = weatherCache[cacheKey];

      if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        results[loc.date] = cached.data;
      } else {
        uncached.push(loc);
      }
    }

    // Fetch uncached data
    let completed = locations.length - uncached.length;
    setProgress(Math.round((completed / locations.length) * 100));

    for (const loc of uncached) {
      try {
        const response = await fetch(
          `/api/weather/historical?lat=${loc.lat}&lng=${loc.lng}&date=${loc.date}&years=3`
        );

        if (response.ok) {
          const result = await response.json();
          if (result.stats) {
            const cacheKey = getCacheKey(loc.lat, loc.lng, loc.date);
            weatherCache[cacheKey] = {
              data: result.stats,
              timestamp: Date.now(),
            };
            results[loc.date] = result.stats;
          }
        }
      } catch (error) {
        console.warn(`Failed to fetch weather for ${loc.date}:`, error);
      }

      completed++;
      setProgress(Math.round((completed / locations.length) * 100));

      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 50));
    }

    setData(results);
    setIsLoading(false);
  }, [locations, enabled]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return { data, isLoading, progress, refetch: fetchAll };
}
