import { Activity } from './trip';

export interface ScheduledItem {
  id: string;
  activityId: string;
  dayNumber: number;
  date: string;
  order: number;
  startTime?: string;
  notes?: string;
}

export interface DaySchedule {
  dayNumber: number;
  date: string;
  items: ScheduledItem[];
}

export interface ScheduleState {
  schedule: Record<string, ScheduledItem[]>; // keyed by date (YYYY-MM-DD)
  unscheduledPool: string[]; // activity IDs not assigned to any day
}

export interface CustomActivity extends Activity {
  isCustom: true;
  sourceUrl?: string;
  createdAt: string;
}

export type DragItemType = 'pool' | 'scheduled';

export interface DragData {
  type: DragItemType;
  activityId: string;
  sourceDate?: string;
}
