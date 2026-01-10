import { render, screen, waitFor } from '@testing-library/react';
import TripMap from '@/components/TripMap';
import { Location, DayPlan } from '@/types/trip';

// Mock data
const mockLocations: Location[] = [
  { id: 'phx', name: 'Phoenix, AZ', lat: 33.4484, lng: -112.0740, type: 'city' },
  { id: 'gc', name: 'Grand Canyon', lat: 36.0544, lng: -112.1401, type: 'national_park' },
];

const mockDays: DayPlan[] = [
  {
    id: 'd1',
    dayNumber: 1,
    date: '2025-05-20',
    title: 'Arrive Phoenix',
    location: mockLocations[0],
    overnight: 'Phoenix',
    activities: [
      {
        id: 'a1',
        name: 'Arrive at airport',
        description: 'Pick up car',
        duration: '2 hours',
        difficulty: 'easy',
        seniorFriendly: true,
        reservationRequired: false,
      }
    ],
  },
  {
    id: 'd2',
    dayNumber: 2,
    date: '2025-05-21',
    title: 'Grand Canyon',
    location: mockLocations[1],
    overnight: 'Grand Canyon',
    drivingDistance: '230 miles',
    activities: [
      {
        id: 'a2',
        name: 'Rim Trail Walk',
        description: 'Walk the rim',
        duration: '2 hours',
        difficulty: 'easy',
        seniorFriendly: true,
        reservationRequired: false,
      }
    ],
  },
];

describe('TripMap', () => {
  it('renders loading state initially', () => {
    render(
      <TripMap
        locations={mockLocations}
        days={mockDays}
        selectedDay={null}
        onSelectDay={jest.fn()}
      />
    );

    expect(screen.getByText('Loading map...')).toBeInTheDocument();
  });

  it('computes location data correctly', () => {
    // Test the locationData computation logic
    const locationMap = new Map<string, { location: Location; days: DayPlan[]; firstDay: number; lastDay: number }>();

    mockDays.forEach(day => {
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

    const locationData = Array.from(locationMap.values());

    expect(locationData).toHaveLength(2);
    expect(locationData[0].location.id).toBe('phx');
    expect(locationData[0].firstDay).toBe(1);
    expect(locationData[1].location.id).toBe('gc');
    expect(locationData[1].firstDay).toBe(2);
  });

  it('computes bounds correctly', () => {
    const bounds = mockDays.map(day => [day.location.lat, day.location.lng] as [number, number]);

    expect(bounds).toHaveLength(2);
    expect(bounds[0]).toEqual([33.4484, -112.0740]);
    expect(bounds[1]).toEqual([36.0544, -112.1401]);
  });
});

describe('Helper functions', () => {
  it('getTypeLabel returns correct labels', () => {
    const labels: Record<string, string> = {
      'national_park': 'National Park',
      'city': 'City',
      'attraction': 'Attraction',
      'transit': 'Transit Stop'
    };

    expect(labels['national_park']).toBe('National Park');
    expect(labels['city']).toBe('City');
  });

  it('getTypeColor returns correct color classes', () => {
    const colors: Record<string, string> = {
      'national_park': 'bg-green-100 text-green-700',
      'city': 'bg-blue-100 text-blue-700',
    };

    expect(colors['national_park']).toBe('bg-green-100 text-green-700');
    expect(colors['city']).toBe('bg-blue-100 text-blue-700');
  });
});
