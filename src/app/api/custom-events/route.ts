import { getValue, setValue } from '@/lib/redis';
import { NextResponse } from 'next/server';
import type { CustomActivity } from '@/types/schedule';

const CUSTOM_EVENTS_KEY = 'mom-road-trip-custom-events';

// GET - Load custom events
export async function GET() {
  try {
    const data = await getValue(CUSTOM_EVENTS_KEY);
    const events = data ? JSON.parse(data) : [];
    return NextResponse.json({ events });
  } catch (error) {
    console.error('Error loading custom events:', error);
    return NextResponse.json(
      { error: 'Failed to load custom events' },
      { status: 500 }
    );
  }
}

// POST - Add custom event
export async function POST(request: Request) {
  try {
    const event: CustomActivity = await request.json();
    const data = await getValue(CUSTOM_EVENTS_KEY);
    const events: CustomActivity[] = data ? JSON.parse(data) : [];

    events.push({
      ...event,
      isCustom: true,
      createdAt: new Date().toISOString(),
    });

    await setValue(CUSTOM_EVENTS_KEY, JSON.stringify(events));
    return NextResponse.json({ success: true, event });
  } catch (error) {
    console.error('Error adding custom event:', error);
    return NextResponse.json(
      { error: 'Failed to add custom event' },
      { status: 500 }
    );
  }
}

// DELETE - Remove custom event
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const data = await getValue(CUSTOM_EVENTS_KEY);
    const events: CustomActivity[] = data ? JSON.parse(data) : [];

    const filtered = events.filter(e => e.id !== id);
    await setValue(CUSTOM_EVENTS_KEY, JSON.stringify(filtered));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting custom event:', error);
    return NextResponse.json(
      { error: 'Failed to delete custom event' },
      { status: 500 }
    );
  }
}
