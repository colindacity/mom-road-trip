'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { tripData } from '@/data/tripData';
import type { ScheduledItem, CustomActivity } from '@/types/schedule';
import type { Activity } from '@/types/trip';

export interface UseScheduleReturn {
  // State
  schedule: Record<string, ScheduledItem[]>;
  unscheduled: string[];
  customEvents: CustomActivity[];
  isLoading: boolean;
  isSaving: boolean;

  // All activities (built-in + custom)
  allActivities: Activity[];
  getActivity: (id: string) => Activity | undefined;

  // Actions
  addToDay: (activityId: string, date: string, order?: number) => void;
  removeFromDay: (activityId: string, date: string) => void;
  moveToDay: (activityId: string, fromDate: string, toDate: string) => void;
  reorderInDay: (date: string, activityIds: string[]) => void;
  returnToPool: (activityId: string, date: string) => void;

  // Custom events
  addCustomEvent: (event: Omit<CustomActivity, 'isCustom' | 'createdAt'>) => Promise<void>;
  deleteCustomEvent: (id: string) => Promise<void>;

  // Utilities
  resetSchedule: () => void;
  autoSchedule: () => void;
}

export function useSchedule(): UseScheduleReturn {
  const [schedule, setSchedule] = useState<Record<string, ScheduledItem[]>>({});
  const [unscheduled, setUnscheduled] = useState<string[]>([]);
  const [customEvents, setCustomEvents] = useState<CustomActivity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  // Combine built-in activities with custom events
  const allActivities = useMemo(() => {
    const builtIn = tripData.days.flatMap(day => day.activities);
    return [...builtIn, ...customEvents] as Activity[];
  }, [customEvents]);

  // Get activity by ID
  const getActivity = useCallback((id: string): Activity | undefined => {
    return allActivities.find(a => a.id === id);
  }, [allActivities]);

  // Load schedule from API on mount
  useEffect(() => {
    async function loadData() {
      try {
        const [scheduleRes, eventsRes] = await Promise.all([
          fetch('/api/schedule'),
          fetch('/api/custom-events'),
        ]);

        const { schedule: savedSchedule } = await scheduleRes.json();
        const { events } = await eventsRes.json();

        if (savedSchedule && Object.keys(savedSchedule).length > 0) {
          setSchedule(savedSchedule);

          // Calculate unscheduled activities
          const scheduledIds = (Object.values(savedSchedule) as ScheduledItem[][])
            .flat()
            .map((item) => item.activityId);

          const allIds = allActivities.map(a => a.id);
          setUnscheduled(allIds.filter(id => !scheduledIds.includes(id)));
        } else {
          // Initialize with all activities unscheduled
          setUnscheduled(allActivities.map(a => a.id));
        }

        if (events) {
          setCustomEvents(events);
        }
      } catch (error) {
        console.error('Failed to load schedule:', error);
        // Fallback to all unscheduled
        setUnscheduled(allActivities.map(a => a.id));
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  // Debounced save to API
  useEffect(() => {
    if (isLoading) return;

    setIsSaving(true);
    const timeout = setTimeout(async () => {
      try {
        await fetch('/api/schedule', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ schedule }),
        });
      } catch (error) {
        console.error('Failed to save schedule:', error);
      } finally {
        setIsSaving(false);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [schedule, isLoading]);

  // Add activity to a day
  const addToDay = useCallback((activityId: string, date: string, order?: number) => {
    setSchedule(prev => {
      const existing = prev[date] || [];

      // Don't add if already exists
      if (existing.some(item => item.activityId === activityId)) {
        return prev;
      }

      const dayNumber = tripData.days.find(d => d.date === date)?.dayNumber || 0;
      const newOrder = order ?? existing.length;

      const newItem: ScheduledItem = {
        id: `${activityId}-${date}`,
        activityId,
        dayNumber,
        date,
        order: newOrder,
      };

      return {
        ...prev,
        [date]: [...existing, newItem].sort((a, b) => a.order - b.order),
      };
    });

    // Remove from unscheduled
    setUnscheduled(prev => prev.filter(id => id !== activityId));
  }, []);

  // Remove activity from a day
  const removeFromDay = useCallback((activityId: string, date: string) => {
    setSchedule(prev => ({
      ...prev,
      [date]: (prev[date] || []).filter(item => item.activityId !== activityId),
    }));
  }, []);

  // Move activity between days
  const moveToDay = useCallback((activityId: string, fromDate: string, toDate: string) => {
    if (fromDate === toDate) return;

    setSchedule(prev => {
      const fromItems = prev[fromDate] || [];
      const toItems = prev[toDate] || [];

      const movingItem = fromItems.find(item => item.activityId === activityId);
      if (!movingItem) return prev;

      const dayNumber = tripData.days.find(d => d.date === toDate)?.dayNumber || 0;

      return {
        ...prev,
        [fromDate]: fromItems.filter(item => item.activityId !== activityId),
        [toDate]: [
          ...toItems,
          {
            ...movingItem,
            id: `${activityId}-${toDate}`,
            date: toDate,
            dayNumber,
            order: toItems.length,
          },
        ],
      };
    });
  }, []);

  // Reorder activities within a day
  const reorderInDay = useCallback((date: string, activityIds: string[]) => {
    setSchedule(prev => {
      const items = prev[date] || [];
      const reordered = activityIds.map((id, index) => {
        const existing = items.find(item => item.activityId === id);
        if (existing) {
          return { ...existing, order: index };
        }
        return null;
      }).filter(Boolean) as ScheduledItem[];

      return {
        ...prev,
        [date]: reordered,
      };
    });
  }, []);

  // Return activity to pool
  const returnToPool = useCallback((activityId: string, date: string) => {
    removeFromDay(activityId, date);
    setUnscheduled(prev => [...prev, activityId]);
  }, [removeFromDay]);

  // Add custom event
  const addCustomEvent = useCallback(async (event: Omit<CustomActivity, 'isCustom' | 'createdAt'>) => {
    try {
      const response = await fetch('/api/custom-events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event),
      });

      if (response.ok) {
        const { event: savedEvent } = await response.json();
        setCustomEvents(prev => [...prev, savedEvent]);
        setUnscheduled(prev => [...prev, event.id]);
      }
    } catch (error) {
      console.error('Failed to add custom event:', error);
    }
  }, []);

  // Delete custom event
  const deleteCustomEvent = useCallback(async (id: string) => {
    try {
      await fetch('/api/custom-events', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      setCustomEvents(prev => prev.filter(e => e.id !== id));
      setUnscheduled(prev => prev.filter(i => i !== id));

      // Also remove from schedule
      setSchedule(prev => {
        const updated = { ...prev };
        Object.keys(updated).forEach(date => {
          updated[date] = updated[date].filter(item => item.activityId !== id);
        });
        return updated;
      });
    } catch (error) {
      console.error('Failed to delete custom event:', error);
    }
  }, []);

  // Reset schedule
  const resetSchedule = useCallback(() => {
    setSchedule({});
    setUnscheduled(allActivities.map(a => a.id));

    fetch('/api/schedule', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ schedule: {} }),
    }).catch(console.error);
  }, [allActivities]);

  // Auto-schedule activities to their default days
  const autoSchedule = useCallback(() => {
    const newSchedule: Record<string, ScheduledItem[]> = {};
    const toRemove: string[] = [];

    tripData.days.forEach(day => {
      day.activities.forEach((activity, index) => {
        if (!unscheduled.includes(activity.id)) return;

        if (!newSchedule[day.date]) {
          newSchedule[day.date] = [];
        }

        newSchedule[day.date].push({
          id: `${activity.id}-${day.date}`,
          activityId: activity.id,
          dayNumber: day.dayNumber,
          date: day.date,
          order: index,
        });

        toRemove.push(activity.id);
      });
    });

    setSchedule(prev => {
      const merged = { ...prev };
      Object.keys(newSchedule).forEach(date => {
        const existing = merged[date] || [];
        merged[date] = [...existing, ...newSchedule[date]];
      });
      return merged;
    });

    setUnscheduled(prev => prev.filter(id => !toRemove.includes(id)));
  }, [unscheduled]);

  return {
    schedule,
    unscheduled,
    customEvents,
    isLoading,
    isSaving,
    allActivities,
    getActivity,
    addToDay,
    removeFromDay,
    moveToDay,
    reorderInDay,
    returnToPool,
    addCustomEvent,
    deleteCustomEvent,
    resetSchedule,
    autoSchedule,
  };
}
