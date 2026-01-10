'use client';

import { useState } from 'react';
import { DailyWeatherStats } from '@/lib/historicalWeather';
import { useHistoricalWeather } from '@/hooks/useHistoricalWeather';
import { Cloud, Droplets, Wind, Thermometer, ChevronDown, ChevronUp, Loader2, History } from 'lucide-react';

interface HistoricalWeatherProps {
  lat: number;
  lng: number;
  date: string; // YYYY-MM-DD format
  compact?: boolean;
}

export default function HistoricalWeather({
  lat,
  lng,
  date,
  compact = false,
}: HistoricalWeatherProps) {
  const [expanded, setExpanded] = useState(false);
  const { data, isLoading, error } = useHistoricalWeather(lat, lng, date);

  if (isLoading) {
    return (
      <div className="flex items-center gap-1.5 text-xs text-gray-400">
        <Loader2 className="w-3 h-3 animate-spin" />
        <span>Loading weather...</span>
      </div>
    );
  }

  if (error || !data) {
    return null; // Silently fail for weather
  }

  if (compact) {
    return <CompactWeatherDisplay data={data} />;
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-lg border border-blue-100">
      {/* Collapsed view */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-3 text-left"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <History className="w-3.5 h-3.5 text-blue-500" />
            <span className="text-xs font-medium text-blue-700">Historical Weather</span>
          </div>
          <span className="text-sm text-gray-700">
            {data.avgHigh}°/{data.avgLow}°F
          </span>
          {data.conditions[0] && (
            <span className="text-sm">
              {data.conditions[0].icon}
            </span>
          )}
        </div>
        {expanded ? (
          <ChevronUp className="w-4 h-4 text-gray-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400" />
        )}
      </button>

      {/* Expanded view */}
      {expanded && (
        <div className="px-3 pb-3 space-y-3 border-t border-blue-100">
          {/* Temperature range */}
          <div className="pt-3">
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1.5">
              <Thermometer className="w-3.5 h-3.5" />
              Temperature (3-year avg)
            </div>
            <div className="flex items-center gap-4">
              <div>
                <div className="text-lg font-semibold text-orange-600">{data.avgHigh}°</div>
                <div className="text-[10px] text-gray-400">High ({data.minHigh}°-{data.maxHigh}°)</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-blue-600">{data.avgLow}°</div>
                <div className="text-[10px] text-gray-400">Low ({data.minLow}°-{data.maxLow}°)</div>
              </div>
            </div>
          </div>

          {/* Weather conditions */}
          <div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1.5">
              <Cloud className="w-3.5 h-3.5" />
              Typical Conditions
            </div>
            <div className="flex flex-wrap gap-1.5">
              {data.conditions.map((cond) => (
                <span
                  key={cond.condition}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-white rounded-full text-xs border border-gray-200"
                >
                  <span>{cond.icon}</span>
                  <span className="text-gray-700">{cond.condition}</span>
                  <span className="text-gray-400 font-medium">{cond.probability}%</span>
                </span>
              ))}
            </div>
          </div>

          {/* Precipitation & Wind */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-lg p-2 border border-gray-100">
              <div className="flex items-center gap-1 text-xs text-gray-500 mb-0.5">
                <Droplets className="w-3 h-3" />
                Precipitation
              </div>
              <div className="text-sm font-medium text-gray-800">
                {data.avgPrecipitation.toFixed(2)}" avg
              </div>
              <div className="text-[10px] text-gray-400">
                {Math.round((data.precipitationDays / 15) * 100)}% chance of rain
              </div>
            </div>
            <div className="bg-white rounded-lg p-2 border border-gray-100">
              <div className="flex items-center gap-1 text-xs text-gray-500 mb-0.5">
                <Wind className="w-3 h-3" />
                Wind
              </div>
              <div className="text-sm font-medium text-gray-800">
                {data.avgWindSpeed} mph avg
              </div>
              <div className="text-[10px] text-gray-400">
                Max wind speed
              </div>
            </div>
          </div>

          <div className="text-[10px] text-gray-400 text-center pt-1">
            Based on 3-year historical data from Open-Meteo
          </div>
        </div>
      )}
    </div>
  );
}

// Compact inline display for day rows
function CompactWeatherDisplay({ data }: { data: DailyWeatherStats }) {
  const precipChance = Math.round((data.precipitationDays / 15) * 100);

  return (
    <div className="flex items-center gap-2 text-xs">
      {data.conditions[0] && (
        <span title={data.conditions[0].condition}>{data.conditions[0].icon}</span>
      )}
      <span className="text-gray-600">{data.avgHigh}°/{data.avgLow}°</span>
      {precipChance > 20 && (
        <span className="text-blue-500 flex items-center gap-0.5">
          <Droplets className="w-3 h-3" />
          {precipChance}%
        </span>
      )}
    </div>
  );
}

// Summary card for showing weather overview
export function WeatherSummaryCard({ stats }: { stats: DailyWeatherStats[] }) {
  if (stats.length === 0) return null;

  const avgHigh = Math.round(stats.reduce((sum, s) => sum + s.avgHigh, 0) / stats.length);
  const avgLow = Math.round(stats.reduce((sum, s) => sum + s.avgLow, 0) / stats.length);
  const avgPrecip = stats.reduce((sum, s) => sum + s.precipitationDays, 0) / stats.length;

  // Find most common condition
  const conditionCounts: Record<string, { count: number; icon: string }> = {};
  for (const stat of stats) {
    for (const cond of stat.conditions) {
      if (!conditionCounts[cond.condition]) {
        conditionCounts[cond.condition] = { count: 0, icon: cond.icon };
      }
      conditionCounts[cond.condition].count += cond.probability;
    }
  }

  const topCondition = Object.entries(conditionCounts)
    .sort((a, b) => b[1].count - a[1].count)[0];

  return (
    <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg p-3 border border-sky-100">
      <div className="flex items-center gap-2 mb-2">
        <History className="w-4 h-4 text-sky-600" />
        <span className="text-sm font-medium text-sky-800">Trip Weather Forecast</span>
        <span className="text-xs text-sky-500">(3-year avg)</span>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{topCondition?.[1].icon}</span>
          <div>
            <div className="text-lg font-semibold text-gray-800">
              {avgHigh}°/{avgLow}°F
            </div>
            <div className="text-xs text-gray-500">Average temps</div>
          </div>
        </div>
        {avgPrecip > 2 && (
          <div className="text-sm text-blue-600">
            <Droplets className="w-4 h-4 inline mr-1" />
            {Math.round((avgPrecip / 15) * 100)}% rain chance
          </div>
        )}
      </div>
    </div>
  );
}
