'use client';

import { TripPhase } from '@/types/trip';

interface PhaseNavProps {
  phases: TripPhase[];
  activePhase: string | null;
  onSelectPhase: (phaseId: string | null) => void;
}

export default function PhaseNav({ phases, activePhase, onSelectPhase }: PhaseNavProps) {
  return (
    <div className="flex items-center gap-1 overflow-x-auto pb-2 scrollbar-hide">
      <button
        onClick={() => onSelectPhase(null)}
        className={`px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-all ${
          activePhase === null
            ? 'bg-gray-900 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        All Days
      </button>
      {phases.map((phase) => (
        <button
          key={phase.id}
          onClick={() => onSelectPhase(phase.id)}
          className={`px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-all flex items-center gap-1.5 ${
            activePhase === phase.id
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: phase.color || '#6b7280' }}
          />
          {phase.name}
        </button>
      ))}
    </div>
  );
}
