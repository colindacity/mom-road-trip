export type ActionStatus = 'pending' | 'booked' | 'verified' | 'needs_attention';
export type ActionCategory = 'flight' | 'accommodation' | 'activity' | 'car_rental' | 'pass' | 'dining';

export interface ActionItem {
  id: string;
  category: ActionCategory;
  title: string;
  description?: string;
  status: ActionStatus;
  deadline?: string;
  tripDay?: number;
  estimatedCost?: number;
  actualCost?: number;
  currency?: string;
  bookingUrl?: string;
  confirmationNumber?: string;
  notes?: string;
  updatedAt: string;
}

export interface ActionTrackerState {
  items: ActionItem[];
  lastSynced?: string;
}
