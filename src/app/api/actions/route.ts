import { getValue, setValue } from '@/lib/redis';
import { NextResponse } from 'next/server';
import type { ActionItem } from '@/types/actions';

const ACTIONS_KEY = 'mom-road-trip-actions';

export interface StoredActions {
  items: Record<string, Partial<ActionItem>>;
  updatedAt: string;
}

// GET - Load saved action overrides
export async function GET() {
  try {
    const data = await getValue(ACTIONS_KEY);
    if (data) {
      const actions = JSON.parse(data) as StoredActions;
      return NextResponse.json({ actions, source: 'stored' });
    }
    return NextResponse.json({ actions: null, source: 'default' });
  } catch (error) {
    console.error('Error loading actions:', error);
    return NextResponse.json(
      { error: 'Failed to load actions' },
      { status: 500 }
    );
  }
}

// POST - Save action overrides (only changed fields, not full seed data)
export async function POST(request: Request) {
  try {
    const { items } = await request.json();

    const stored: StoredActions = {
      items,
      updatedAt: new Date().toISOString(),
    };

    await setValue(ACTIONS_KEY, JSON.stringify(stored));
    return NextResponse.json({ success: true, updatedAt: stored.updatedAt });
  } catch (error) {
    console.error('Error saving actions:', error);
    return NextResponse.json(
      { error: 'Failed to save actions' },
      { status: 500 }
    );
  }
}
