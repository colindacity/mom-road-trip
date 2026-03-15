'use client';

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { generateActionItems } from '@/data/actionItems';
import type { ActionItem, ActionStatus } from '@/types/actions';

export interface UseActionTrackerReturn {
  items: ActionItem[];
  isLoading: boolean;
  isSaving: boolean;

  updateStatus: (id: string, status: ActionStatus) => void;
  updateItem: (id: string, updates: Partial<ActionItem>) => void;
  resetItem: (id: string) => void;

  pendingCount: number;
  bookedCount: number;
  verifiedCount: number;
  totalCount: number;
  urgentItems: ActionItem[];
  totalEstimated: number;
  totalActual: number;
}

export function useActionTracker(): UseActionTrackerReturn {
  const [overrides, setOverrides] = useState<Record<string, Partial<ActionItem>>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const loadedRef = useRef(false);

  const seedItems = useMemo(() => generateActionItems(), []);

  // Merge seed data with stored overrides
  const items = useMemo(() => {
    return seedItems.map(seed => {
      const override = overrides[seed.id];
      if (!override) return seed;
      return { ...seed, ...override };
    });
  }, [seedItems, overrides]);

  // Load overrides from API
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/actions');
        const { actions, source } = await res.json();
        if (actions && source === 'stored') {
          setOverrides(actions.items ?? {});
        }
      } catch (error) {
        console.error('Failed to load actions:', error);
      } finally {
        setIsLoading(false);
        loadedRef.current = true;
      }
    }
    load();
  }, []);

  // Save overrides to API (debounced)
  const save = useCallback(async (data: Record<string, Partial<ActionItem>>) => {
    setIsSaving(true);
    try {
      await fetch('/api/actions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: data }),
      });
    } catch (error) {
      console.error('Failed to save actions:', error);
    } finally {
      setIsSaving(false);
    }
  }, []);

  useEffect(() => {
    if (!loadedRef.current) return;
    const timeout = setTimeout(() => save(overrides), 1000);
    return () => clearTimeout(timeout);
  }, [overrides, save]);

  const updateStatus = useCallback((id: string, status: ActionStatus) => {
    setOverrides(prev => ({
      ...prev,
      [id]: { ...prev[id], status, updatedAt: new Date().toISOString() },
    }));
  }, []);

  const updateItem = useCallback((id: string, updates: Partial<ActionItem>) => {
    setOverrides(prev => ({
      ...prev,
      [id]: { ...prev[id], ...updates, updatedAt: new Date().toISOString() },
    }));
  }, []);

  const resetItem = useCallback((id: string) => {
    setOverrides(prev => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  // Computed values
  const pendingCount = items.filter(i => i.status === 'pending').length;
  const bookedCount = items.filter(i => i.status === 'booked').length;
  const verifiedCount = items.filter(i => i.status === 'verified').length;
  const totalCount = items.length;

  const urgentItems = useMemo(() => {
    const now = new Date();
    const sevenDays = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    return items.filter(i =>
      i.status === 'pending' &&
      i.deadline &&
      new Date(i.deadline) <= sevenDays
    );
  }, [items]);

  const totalEstimated = items.reduce((sum, i) => sum + (i.estimatedCost ?? 0), 0);
  const totalActual = items.reduce((sum, i) => sum + (i.actualCost ?? i.estimatedCost ?? 0), 0);

  return {
    items,
    isLoading,
    isSaving,
    updateStatus,
    updateItem,
    resetItem,
    pendingCount,
    bookedCount,
    verifiedCount,
    totalCount,
    urgentItems,
    totalEstimated,
    totalActual,
  };
}
