import { getValue, setValue } from '@/lib/redis';
import { NextResponse } from 'next/server';

const NOTES_KEY = 'mom-road-trip-bookings-notes';

export interface BookingsNotes {
  [sectionId: string]: {
    text: string;
    updatedAt: string;
    updatedBy: string;
  };
}

export async function GET() {
  try {
    const data = await getValue(NOTES_KEY);
    if (data) {
      return NextResponse.json({ notes: JSON.parse(data) });
    }
    return NextResponse.json({ notes: {} });
  } catch (error) {
    console.error('Error loading bookings notes:', error);
    return NextResponse.json({ error: 'Failed to load notes' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { sectionId, text, updatedBy } = await request.json();

    const existing = await getValue(NOTES_KEY);
    const notes: BookingsNotes = existing ? JSON.parse(existing) : {};

    if (text.trim() === '') {
      delete notes[sectionId];
    } else {
      notes[sectionId] = {
        text,
        updatedAt: new Date().toISOString(),
        updatedBy: updatedBy || 'unknown',
      };
    }

    await setValue(NOTES_KEY, JSON.stringify(notes));
    return NextResponse.json({ success: true, notes });
  } catch (error) {
    console.error('Error saving bookings note:', error);
    return NextResponse.json({ error: 'Failed to save note' }, { status: 500 });
  }
}
