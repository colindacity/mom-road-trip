// Historical Weather using Open-Meteo Archive API (free, no API key required)

export interface DailyWeatherStats {
  date: string; // MM-DD format
  avgHigh: number;
  avgLow: number;
  minHigh: number;
  maxHigh: number;
  minLow: number;
  maxLow: number;
  avgPrecipitation: number;
  precipitationDays: number; // days with >0.1mm
  avgWindSpeed: number;
  conditions: WeatherConditionProbability[];
}

export interface WeatherConditionProbability {
  condition: string;
  probability: number; // 0-100
  icon: string;
}

export interface LocationWeatherHistory {
  location: string;
  lat: number;
  lng: number;
  yearsAnalyzed: number;
  dailyStats: DailyWeatherStats[];
}

// Weather code mapping from Open-Meteo
const WEATHER_CODES: Record<number, { condition: string; icon: string }> = {
  0: { condition: 'Clear', icon: '☀️' },
  1: { condition: 'Mainly Clear', icon: '🌤️' },
  2: { condition: 'Partly Cloudy', icon: '⛅' },
  3: { condition: 'Overcast', icon: '☁️' },
  45: { condition: 'Foggy', icon: '🌫️' },
  48: { condition: 'Rime Fog', icon: '🌫️' },
  51: { condition: 'Light Drizzle', icon: '🌧️' },
  53: { condition: 'Drizzle', icon: '🌧️' },
  55: { condition: 'Heavy Drizzle', icon: '🌧️' },
  61: { condition: 'Light Rain', icon: '🌧️' },
  63: { condition: 'Rain', icon: '🌧️' },
  65: { condition: 'Heavy Rain', icon: '🌧️' },
  71: { condition: 'Light Snow', icon: '🌨️' },
  73: { condition: 'Snow', icon: '🌨️' },
  75: { condition: 'Heavy Snow', icon: '🌨️' },
  77: { condition: 'Snow Grains', icon: '🌨️' },
  80: { condition: 'Light Showers', icon: '🌦️' },
  81: { condition: 'Showers', icon: '🌦️' },
  82: { condition: 'Heavy Showers', icon: '🌦️' },
  85: { condition: 'Light Snow Showers', icon: '🌨️' },
  86: { condition: 'Snow Showers', icon: '🌨️' },
  95: { condition: 'Thunderstorm', icon: '⛈️' },
  96: { condition: 'Thunderstorm + Hail', icon: '⛈️' },
  99: { condition: 'Thunderstorm + Heavy Hail', icon: '⛈️' },
};

interface OpenMeteoResponse {
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_sum: number[];
    wind_speed_10m_max: number[];
    weather_code: number[];
  };
}

export async function fetchHistoricalWeather(
  lat: number,
  lng: number,
  targetMonth: number,
  targetDay: number,
  yearsBack: number = 3
): Promise<DailyWeatherStats | null> {
  try {
    const currentYear = new Date().getFullYear();
    const allData: {
      high: number[];
      low: number[];
      precip: number[];
      wind: number[];
      weatherCodes: number[];
    } = {
      high: [],
      low: [],
      precip: [],
      wind: [],
      weatherCodes: [],
    };

    // Fetch data for each year
    for (let i = 1; i <= yearsBack; i++) {
      const year = currentYear - i;
      const startDate = `${year}-${String(targetMonth).padStart(2, '0')}-${String(targetDay).padStart(2, '0')}`;

      // Get a 5-day window around the target date for more data
      const startDateObj = new Date(year, targetMonth - 1, targetDay - 2);
      const endDateObj = new Date(year, targetMonth - 1, targetDay + 2);

      const start = startDateObj.toISOString().split('T')[0];
      const end = endDateObj.toISOString().split('T')[0];

      const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lng}&start_date=${start}&end_date=${end}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max,weather_code&timezone=auto&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch`;

      const response = await fetch(url);
      if (!response.ok) continue;

      const data: OpenMeteoResponse = await response.json();

      if (data.daily) {
        allData.high.push(...data.daily.temperature_2m_max.filter(v => v !== null));
        allData.low.push(...data.daily.temperature_2m_min.filter(v => v !== null));
        allData.precip.push(...data.daily.precipitation_sum.filter(v => v !== null));
        allData.wind.push(...data.daily.wind_speed_10m_max.filter(v => v !== null));
        allData.weatherCodes.push(...data.daily.weather_code.filter(v => v !== null));
      }
    }

    if (allData.high.length === 0) return null;

    // Calculate statistics
    const avgHigh = Math.round(allData.high.reduce((a, b) => a + b, 0) / allData.high.length);
    const avgLow = Math.round(allData.low.reduce((a, b) => a + b, 0) / allData.low.length);
    const avgPrecip = allData.precip.reduce((a, b) => a + b, 0) / allData.precip.length;
    const precipDays = allData.precip.filter(p => p > 0.01).length;
    const avgWind = Math.round(allData.wind.reduce((a, b) => a + b, 0) / allData.wind.length);

    // Calculate weather condition probabilities
    const conditionCounts: Record<string, { count: number; icon: string }> = {};
    for (const code of allData.weatherCodes) {
      const info = WEATHER_CODES[code] || WEATHER_CODES[0];
      if (!conditionCounts[info.condition]) {
        conditionCounts[info.condition] = { count: 0, icon: info.icon };
      }
      conditionCounts[info.condition].count++;
    }

    const totalObs = allData.weatherCodes.length;
    const conditions: WeatherConditionProbability[] = Object.entries(conditionCounts)
      .map(([condition, { count, icon }]) => ({
        condition,
        probability: Math.round((count / totalObs) * 100),
        icon,
      }))
      .sort((a, b) => b.probability - a.probability)
      .slice(0, 4); // Top 4 conditions

    return {
      date: `${String(targetMonth).padStart(2, '0')}-${String(targetDay).padStart(2, '0')}`,
      avgHigh,
      avgLow,
      minHigh: Math.round(Math.min(...allData.high)),
      maxHigh: Math.round(Math.max(...allData.high)),
      minLow: Math.round(Math.min(...allData.low)),
      maxLow: Math.round(Math.max(...allData.low)),
      avgPrecipitation: Math.round(avgPrecip * 100) / 100,
      precipitationDays: precipDays,
      avgWindSpeed: avgWind,
      conditions,
    };
  } catch (error) {
    console.error('Error fetching historical weather:', error);
    return null;
  }
}

// Batch fetch for multiple dates (useful for trip planning)
export async function fetchWeatherForDateRange(
  lat: number,
  lng: number,
  startDate: Date,
  numDays: number,
  yearsBack: number = 3
): Promise<DailyWeatherStats[]> {
  const results: DailyWeatherStats[] = [];

  // Fetch in parallel with rate limiting
  const promises: Promise<DailyWeatherStats | null>[] = [];

  for (let i = 0; i < numDays; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);

    promises.push(
      fetchHistoricalWeather(lat, lng, date.getMonth() + 1, date.getDate(), yearsBack)
    );

    // Add small delay to avoid rate limiting
    if (i > 0 && i % 5 === 0) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  const data = await Promise.all(promises);

  for (const stat of data) {
    if (stat) results.push(stat);
  }

  return results;
}

// Helper to get weather summary for a specific date
export function getWeatherSummary(stats: DailyWeatherStats): string {
  const topCondition = stats.conditions[0];
  const precipChance = stats.precipitationDays > 0
    ? Math.round((stats.precipitationDays / 15) * 100) // Assuming ~15 data points over 3 years
    : 0;

  let summary = `${stats.avgHigh}°/${stats.avgLow}°F`;

  if (topCondition) {
    summary += ` • ${topCondition.icon} ${topCondition.condition} (${topCondition.probability}%)`;
  }

  if (precipChance > 20) {
    summary += ` • ${precipChance}% rain`;
  }

  return summary;
}
