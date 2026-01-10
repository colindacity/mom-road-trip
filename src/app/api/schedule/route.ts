import { getValue, setValue } from '@/lib/redis';
import { NextResponse } from 'next/server';

const SCHEDULE_KEY = 'mom-road-trip-schedule';

// GET - Load schedule
export async function GET() {
  try {
    const data = await getValue(SCHEDULE_KEY);
    const schedule = data ? JSON.parse(data) : {};
    return NextResponse.json({ schedule });
  } catch (error) {
    console.error('Error loading schedule:', error);
    return NextResponse.json(
      { error: 'Failed to load schedule' },
      { status: 500 }
    );
  }
}

// POST - Save schedule
export async function POST(request: Request) {
  try {
    const { schedule } = await request.json();
    await setValue(SCHEDULE_KEY, JSON.stringify(schedule));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving schedule:', error);
    return NextResponse.json(
      { error: 'Failed to save schedule' },
      { status: 500 }
    );
  }
}
