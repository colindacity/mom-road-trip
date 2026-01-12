import { getValue, setValue } from '@/lib/redis';
import { NextResponse } from 'next/server';
import type { CostBreakdown } from '@/types/trip';

const COSTS_KEY = 'mom-road-trip-costs';

export interface StoredCosts {
  breakdown: CostBreakdown;
  totalBudget: {
    flights: number;
    carRental: number;
    accommodations: number;
    food: number;
    activities: number;
    gas: number;
    misc: number;
    total: number;
  };
  updatedAt: string;
}

// GET - Load saved cost data
export async function GET() {
  try {
    const data = await getValue(COSTS_KEY);
    if (data) {
      const costs = JSON.parse(data) as StoredCosts;
      return NextResponse.json({ costs, source: 'stored' });
    }
    // Return null to signal client should use defaults from tripData
    return NextResponse.json({ costs: null, source: 'default' });
  } catch (error) {
    console.error('Error loading costs:', error);
    return NextResponse.json(
      { error: 'Failed to load costs' },
      { status: 500 }
    );
  }
}

// POST - Save cost data
export async function POST(request: Request) {
  try {
    const { breakdown, totalBudget } = await request.json();

    const storedCosts: StoredCosts = {
      breakdown,
      totalBudget,
      updatedAt: new Date().toISOString(),
    };

    await setValue(COSTS_KEY, JSON.stringify(storedCosts));
    return NextResponse.json({ success: true, updatedAt: storedCosts.updatedAt });
  } catch (error) {
    console.error('Error saving costs:', error);
    return NextResponse.json(
      { error: 'Failed to save costs' },
      { status: 500 }
    );
  }
}
