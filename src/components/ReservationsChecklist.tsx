'use client';

import { useState, useEffect } from 'react';
import { CheckCircle2, Circle, ExternalLink, AlertTriangle, Calendar } from 'lucide-react';

interface Reservation {
  item: string;
  bookBy: string;
  website: string;
  notes?: string;
}

interface ReservationsChecklistProps {
  reservations: Reservation[];
}

export default function ReservationsChecklist({ reservations }: ReservationsChecklistProps) {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('trip-reservations-checked');
    if (saved) {
      setChecked(new Set(JSON.parse(saved)));
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('trip-reservations-checked', JSON.stringify([...checked]));
  }, [checked]);

  const toggleChecked = (item: string) => {
    const newChecked = new Set(checked);
    if (newChecked.has(item)) {
      newChecked.delete(item);
    } else {
      newChecked.add(item);
    }
    setChecked(newChecked);
  };

  const completedCount = checked.size;
  const totalCount = reservations.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <Calendar className="w-5 h-5" />
            <h2 className="font-semibold">Reservations Checklist</h2>
          </div>
          <div className="text-white/90 text-sm font-medium">
            {completedCount}/{totalCount}
          </div>
        </div>
        {/* Progress bar */}
        <div className="mt-2 h-1.5 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white/80 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="p-3 space-y-2 max-h-[400px] overflow-y-auto">
        {reservations.map((res, i) => {
          const isChecked = checked.has(res.item);
          const isUrgent = res.bookBy.includes('month') || res.bookBy.includes('NOW');

          return (
            <div
              key={i}
              className={`p-3 rounded-lg border transition-all cursor-pointer ${
                isChecked
                  ? 'bg-green-50 border-green-200'
                  : isUrgent
                    ? 'bg-amber-50 border-amber-200'
                    : 'bg-gray-50 border-gray-100 hover:border-gray-200'
              }`}
              onClick={() => toggleChecked(res.item)}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  {isChecked ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-300" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`font-medium text-sm ${isChecked ? 'text-green-700 line-through' : 'text-gray-800'}`}>
                    {res.item}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    {isUrgent && !isChecked && (
                      <span className="inline-flex items-center gap-1 text-xs text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                        <AlertTriangle className="w-3 h-3" />
                        {res.bookBy}
                      </span>
                    )}
                    {!isUrgent && (
                      <span className="text-xs text-gray-500">Book: {res.bookBy}</span>
                    )}
                  </div>
                  {res.notes && (
                    <p className="text-xs text-gray-500 mt-1">{res.notes}</p>
                  )}
                </div>
                <a
                  href={res.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded transition-colors"
                  title="Open booking site"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {completedCount === totalCount && totalCount > 0 && (
        <div className="p-3 bg-green-50 border-t border-green-100 text-center">
          <span className="text-green-700 text-sm font-medium">
            🎉 All reservations booked!
          </span>
        </div>
      )}
    </div>
  );
}
