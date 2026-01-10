import { NextRequest, NextResponse } from 'next/server';
import { fetchHistoricalWeather, fetchWeatherForDateRange } from '@/lib/historicalWeather';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const lat = parseFloat(searchParams.get('lat') || '');
    const lng = parseFloat(searchParams.get('lng') || '');
    const date = searchParams.get('date'); // YYYY-MM-DD format
    const days = parseInt(searchParams.get('days') || '1');
    const years = parseInt(searchParams.get('years') || '3');

    if (isNaN(lat) || isNaN(lng)) {
      return NextResponse.json(
        { error: 'Invalid latitude or longitude' },
        { status: 400 }
      );
    }

    if (!date) {
      return NextResponse.json(
        { error: 'Date is required (YYYY-MM-DD format)' },
        { status: 400 }
      );
    }

    const [year, month, day] = date.split('-').map(Number);

    if (days === 1) {
      // Single day request
      const stats = await fetchHistoricalWeather(lat, lng, month, day, years);

      if (!stats) {
        return NextResponse.json(
          { error: 'No weather data available for this location/date' },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        location: { lat, lng },
        stats,
      });
    } else {
      // Multiple days request
      const startDate = new Date(year, month - 1, day);
      const stats = await fetchWeatherForDateRange(lat, lng, startDate, days, years);

      return NextResponse.json({
        success: true,
        location: { lat, lng },
        stats,
      });
    }
  } catch (error) {
    console.error('Error fetching historical weather:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
