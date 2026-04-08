import { getValue, setValue } from '@/lib/redis';
import { NextResponse } from 'next/server';

const KEY = 'mom-road-trip-bookings-v2';

export interface BookingsData {
  notes: Record<string, { text: string; updatedAt: string; updatedBy: string }>;
  statuses: Record<string, string>; // id → 'booked' | 'pending' | 'done'
  customItems: Record<string, { name: string; price?: string; link?: string; note?: string; addedBy: string; addedAt: string }[]>;
  checks: Record<string, boolean>; // signup-0 → true
}

const empty: BookingsData = { notes: {}, statuses: {}, customItems: {}, checks: {} };

async function load(): Promise<BookingsData> {
  const raw = await getValue(KEY);
  if (raw) {
    const parsed = JSON.parse(raw);
    // Migrate from v1 (notes-only) to v2
    if (!parsed.statuses) return { ...empty, notes: parsed.notes || parsed };
    return { ...empty, ...parsed };
  }
  // Try loading v1 data
  const v1 = await getValue('mom-road-trip-bookings-notes');
  if (v1) {
    const v1data = JSON.parse(v1);
    return { ...empty, notes: v1data };
  }
  return empty;
}

async function save(data: BookingsData) {
  await setValue(KEY, JSON.stringify(data));
}

export async function GET() {
  try {
    const data = await load();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error loading bookings data:', error);
    return NextResponse.json(empty);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = await load();

    if (body.action === 'note') {
      const { sectionId, text, updatedBy } = body;
      if (text.trim() === '') delete data.notes[sectionId];
      else data.notes[sectionId] = { text, updatedAt: new Date().toISOString(), updatedBy: updatedBy || 'unknown' };
    } else if (body.action === 'status') {
      data.statuses[body.id] = body.status;
    } else if (body.action === 'addItem') {
      const { listId, item } = body;
      if (!data.customItems[listId]) data.customItems[listId] = [];
      data.customItems[listId].push({ ...item, addedAt: new Date().toISOString() });
    } else if (body.action === 'removeItem') {
      const { listId, index } = body;
      if (data.customItems[listId]) data.customItems[listId].splice(index, 1);
    } else if (body.action === 'check') {
      data.checks[body.id] = body.checked;
    } else {
      // Legacy: direct note save (backwards compat)
      const { sectionId, text, updatedBy } = body;
      if (sectionId) {
        if (text.trim() === '') delete data.notes[sectionId];
        else data.notes[sectionId] = { text, updatedAt: new Date().toISOString(), updatedBy: updatedBy || 'unknown' };
      }
    }

    await save(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error saving bookings data:', error);
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 });
  }
}
