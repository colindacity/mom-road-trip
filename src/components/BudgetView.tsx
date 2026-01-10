'use client';

import { TripData } from '@/types/trip';
import {
  DollarSign,
  Plane,
  Car,
  Hotel,
  Utensils,
  Camera,
  Fuel,
  HelpCircle,
  TrendingUp,
  PieChart
} from 'lucide-react';

interface BudgetViewProps {
  trip: TripData;
}

const categoryConfig = [
  { key: 'flights', label: 'Flights', icon: Plane, color: 'bg-purple-500', bgColor: 'bg-purple-100', textColor: 'text-purple-700' },
  { key: 'carRental', label: 'Car Rental', icon: Car, color: 'bg-amber-500', bgColor: 'bg-amber-100', textColor: 'text-amber-700' },
  { key: 'accommodations', label: 'Accommodations', icon: Hotel, color: 'bg-blue-500', bgColor: 'bg-blue-100', textColor: 'text-blue-700' },
  { key: 'food', label: 'Food & Dining', icon: Utensils, color: 'bg-orange-500', bgColor: 'bg-orange-100', textColor: 'text-orange-700' },
  { key: 'activities', label: 'Activities & Tours', icon: Camera, color: 'bg-pink-500', bgColor: 'bg-pink-100', textColor: 'text-pink-700' },
  { key: 'gas', label: 'Gas', icon: Fuel, color: 'bg-green-500', bgColor: 'bg-green-100', textColor: 'text-green-700' },
  { key: 'misc', label: 'Miscellaneous', icon: HelpCircle, color: 'bg-gray-500', bgColor: 'bg-gray-100', textColor: 'text-gray-700' },
];

export default function BudgetView({ trip }: BudgetViewProps) {
  const budget = trip.totalBudget;

  if (!budget) {
    return (
      <div className="text-center py-12 text-gray-500">
        No budget information available
      </div>
    );
  }

  const perPerson = budget.total / trip.travelers.length;
  const perDay = budget.total / trip.days.length;

  // Calculate percentages for pie chart
  const total = budget.total;
  const categories = categoryConfig.map(cat => ({
    ...cat,
    value: budget[cat.key as keyof typeof budget] as number || 0,
    percentage: ((budget[cat.key as keyof typeof budget] as number || 0) / total * 100).toFixed(1)
  })).filter(cat => cat.value > 0);

  return (
    <div className="space-y-6">
      {/* Total Budget Card */}
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="w-6 h-6" />
          <h2 className="text-lg font-semibold">Total Trip Budget</h2>
        </div>
        <div className="text-4xl font-bold mb-4">
          ${budget.total.toLocaleString()}
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-white/10 rounded-lg p-3">
            <div className="text-white/70">Per person</div>
            <div className="text-xl font-semibold">${perPerson.toLocaleString()}</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <div className="text-white/70">Per day</div>
            <div className="text-xl font-semibold">${Math.round(perDay).toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <PieChart className="w-5 h-5 text-gray-500" />
          Budget Breakdown
        </h3>

        {/* Visual bar chart */}
        <div className="mb-6">
          <div className="h-8 rounded-full overflow-hidden flex">
            {categories.map((cat, idx) => (
              <div
                key={cat.key}
                className={`${cat.color} transition-all hover:opacity-80`}
                style={{ width: `${cat.percentage}%` }}
                title={`${cat.label}: $${cat.value.toLocaleString()} (${cat.percentage}%)`}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-3">
            {categories.map(cat => (
              <div key={cat.key} className="flex items-center gap-1.5 text-xs">
                <div className={`w-3 h-3 rounded ${cat.color}`} />
                <span className="text-gray-600">{cat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category list */}
        <div className="space-y-3">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <div key={cat.key} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg ${cat.bgColor} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${cat.textColor}`} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{cat.label}</div>
                    <div className="text-sm text-gray-500">{cat.percentage}% of total</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">${cat.value.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">
                    ${Math.round(cat.value / trip.travelers.length).toLocaleString()}/person
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Daily Budget Trend */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-gray-500" />
          Daily Spending Breakdown
        </h3>

        <div className="space-y-2 max-h-96 overflow-y-auto">
          {trip.days.filter(d => d.budgetBreakdown?.total).map(day => (
            <div key={day.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-700">
                {day.dayNumber}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate">{day.title}</div>
                <div className="text-xs text-gray-500">{day.location.name}</div>
              </div>
              <div className="flex-1">
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${Math.min((day.budgetBreakdown?.total || 0) / 500 * 100, 100)}%` }}
                  />
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-gray-900">${day.budgetBreakdown?.total || 0}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div className="bg-amber-50 rounded-xl border border-amber-200 p-4">
        <h4 className="font-medium text-amber-800 mb-2">Budget Notes</h4>
        <ul className="text-sm text-amber-700 space-y-1">
          <li>• Prices are estimates based on research and may vary</li>
          <li>• Book accommodations early for better rates</li>
          <li>• One-way car rentals have significant drop-off fees</li>
          <li>• Consider America the Beautiful Pass ($80) for all national parks</li>
          <li>• Budget includes ~$100/day for food for 2 people</li>
        </ul>
      </div>
    </div>
  );
}
