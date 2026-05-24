import { format, parseISO, isWithinInterval, startOfDay } from 'date-fns';
import { tripData } from '@/data/tripData';
import { DayPlan } from '@/types/trip';

export function formatTripDate(date: string): string {
  return format(parseISO(date), 'EEE MMM d');
}

export function formatTripDateLong(date: string): string {
  return format(parseISO(date), 'EEEE, MMMM d');
}

export function formatTripDateShort(date: string): string {
  return format(parseISO(date), 'EEE M/d');
}

export function getTodayISODate(): string {
  return format(new Date(), 'yyyy-MM-dd');
}

export function getTodayDayNumber(): number | null {
  const today = startOfDay(new Date());
  const start = startOfDay(parseISO(tripData.startDate));
  const end = startOfDay(parseISO(tripData.endDate));
  if (!isWithinInterval(today, { start, end })) return null;
  const todayISO = getTodayISODate();
  return tripData.days.find(d => d.date === todayISO)?.dayNumber ?? null;
}

export function getTodayDay(): DayPlan | null {
  const n = getTodayDayNumber();
  return n == null ? null : (tripData.days.find(d => d.dayNumber === n) ?? null);
}

export function getDayByDate(date: string): DayPlan | undefined {
  return tripData.days.find(d => d.date === date);
}

export function getDayByNumber(n: number): DayPlan | undefined {
  return tripData.days.find(d => d.dayNumber === n);
}

export function isToday(date: string): boolean {
  return date === getTodayISODate();
}
