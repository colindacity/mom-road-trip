'use client';

import { useState, useEffect, useCallback } from 'react';
import { Activity } from '@/types/trip';

export interface QueuedActivity {
  activity: Activity;
  originalDayId: string;
  originalDayNumber: number;
  removedAt: string;
}

export interface TripState {
  // Activities confirmed for calendar (by activity ID)
  confirmedActivities: Set<string>;
  // Activities removed and in the queue
  queuedActivities: QueuedActivity[];
  // Activities hidden from specific days (activityId -> dayId mapping)
  hiddenFromDays: Map<string, string>;
}

const STORAGE_KEY = 'mom-road-trip-state';

function loadState(): TripState {
  if (typeof window === 'undefined') {
    return {
      confirmedActivities: new Set(),
      queuedActivities: [],
      hiddenFromDays: new Map(),
    };
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        confirmedActivities: new Set(parsed.confirmedActivities || []),
        queuedActivities: parsed.queuedActivities || [],
        hiddenFromDays: new Map(Object.entries(parsed.hiddenFromDays || {})),
      };
    }
  } catch (e) {
    console.error('Failed to load trip state:', e);
  }

  return {
    confirmedActivities: new Set(),
    queuedActivities: [],
    hiddenFromDays: new Map(),
  };
}

function saveState(state: TripState): void {
  if (typeof window === 'undefined') return;

  try {
    const toSave = {
      confirmedActivities: Array.from(state.confirmedActivities),
      queuedActivities: state.queuedActivities,
      hiddenFromDays: Object.fromEntries(state.hiddenFromDays),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  } catch (e) {
    console.error('Failed to save trip state:', e);
  }
}

export function useTripState() {
  const [state, setState] = useState<TripState>(() => loadState());
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setState(loadState());
    setIsLoaded(true);
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    if (isLoaded) {
      saveState(state);
    }
  }, [state, isLoaded]);

  // Toggle activity confirmation (add to calendar)
  const toggleConfirmed = useCallback((activityId: string) => {
    setState(prev => {
      const newConfirmed = new Set(prev.confirmedActivities);
      if (newConfirmed.has(activityId)) {
        newConfirmed.delete(activityId);
      } else {
        newConfirmed.add(activityId);
      }
      return { ...prev, confirmedActivities: newConfirmed };
    });
  }, []);

  // Remove activity from day and add to queue
  const removeActivity = useCallback((activity: Activity, dayId: string, dayNumber: number) => {
    setState(prev => {
      // Check if already queued
      if (prev.queuedActivities.some(q => q.activity.id === activity.id)) {
        return prev;
      }

      const newQueued: QueuedActivity = {
        activity,
        originalDayId: dayId,
        originalDayNumber: dayNumber,
        removedAt: new Date().toISOString(),
      };

      const newHidden = new Map(prev.hiddenFromDays);
      newHidden.set(activity.id, dayId);

      // Remove from confirmed if it was there
      const newConfirmed = new Set(prev.confirmedActivities);
      newConfirmed.delete(activity.id);

      return {
        ...prev,
        queuedActivities: [...prev.queuedActivities, newQueued],
        hiddenFromDays: newHidden,
        confirmedActivities: newConfirmed,
      };
    });
  }, []);

  // Restore activity from queue back to its day
  const restoreActivity = useCallback((activityId: string) => {
    setState(prev => {
      const newQueued = prev.queuedActivities.filter(q => q.activity.id !== activityId);
      const newHidden = new Map(prev.hiddenFromDays);
      newHidden.delete(activityId);

      return {
        ...prev,
        queuedActivities: newQueued,
        hiddenFromDays: newHidden,
      };
    });
  }, []);

  // Permanently delete from queue
  const deleteFromQueue = useCallback((activityId: string) => {
    setState(prev => ({
      ...prev,
      queuedActivities: prev.queuedActivities.filter(q => q.activity.id !== activityId),
    }));
  }, []);

  // Check if activity is hidden from its day
  const isHidden = useCallback((activityId: string): boolean => {
    return state.hiddenFromDays.has(activityId);
  }, [state.hiddenFromDays]);

  // Check if activity is confirmed
  const isConfirmed = useCallback((activityId: string): boolean => {
    return state.confirmedActivities.has(activityId);
  }, [state.confirmedActivities]);

  // Clear all state
  const resetState = useCallback(() => {
    setState({
      confirmedActivities: new Set(),
      queuedActivities: [],
      hiddenFromDays: new Map(),
    });
  }, []);

  return {
    state,
    isLoaded,
    toggleConfirmed,
    removeActivity,
    restoreActivity,
    deleteFromQueue,
    isHidden,
    isConfirmed,
    resetState,
    queuedCount: state.queuedActivities.length,
    confirmedCount: state.confirmedActivities.size,
  };
}
