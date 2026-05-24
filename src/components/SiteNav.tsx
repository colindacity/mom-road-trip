'use client';

interface SiteNavProps {
  current: 'home' | 'guide' | 'mom' | 'bookings' | 'offline';
}

const TABS = [
  { id: 'home', href: '/', label: '📅 Trip Plan' },
  { id: 'guide', href: '/guide', label: '🧭 Tour Guide' },
  { id: 'mom', href: '/mom', label: '👵 Mom\'s View' },
  { id: 'bookings', href: '/bookings', label: '✅ Bookings' },
  { id: 'offline', href: '/offline', label: '📍 Offline' },
] as const;

export default function SiteNav({ current }: SiteNavProps) {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-[60] shadow-sm">
      <div className="max-w-6xl mx-auto px-3 flex items-center gap-1 py-1.5 overflow-x-auto scrollbar-hide">
        {TABS.map(tab => (
          <a
            key={tab.id}
            href={tab.href}
            className={`px-3 py-1.5 text-sm font-medium rounded transition-colors whitespace-nowrap ${
              current === tab.id
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
