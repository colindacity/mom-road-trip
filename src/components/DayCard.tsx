'use client';

import { useState } from 'react';
import { DayPlan, Activity } from '@/types/trip';
import { format, parseISO } from 'date-fns';
import { Accommodation } from '@/types/trip';
import {
  ChevronDown,
  ChevronRight,
  MapPin,
  Clock,
  Car,
  Hotel,
  Utensils,
  Camera,
  AlertCircle,
  DollarSign,
  Sun,
  Cloud,
  Thermometer,
  CheckCircle2,
  ExternalLink,
  Edit2,
  Footprints,
  Star,
  Home,
  Trees,
  Building2
} from 'lucide-react';

interface DayCardProps {
  day: DayPlan;
  isExpanded: boolean;
  isSelected: boolean;
  onToggle: () => void;
  onSelect: () => void;
  onEdit?: (dayId: string, field: string, value: any) => void;
}

const difficultyColors = {
  easy: 'bg-green-100 text-green-700',
  moderate: 'bg-yellow-100 text-yellow-700',
  challenging: 'bg-red-100 text-red-700'
};

const locationTypeIcons = {
  city: '🏙️',
  national_park: '🏞️',
  attraction: '📸',
  transit: '🚗'
};

export default function DayCard({ day, isExpanded, isSelected, onToggle, onSelect, onEdit }: DayCardProps) {
  const [editingField, setEditingField] = useState<string | null>(null);

  const formattedDate = format(parseISO(day.date), 'EEE, MMM d');
  const dayOfWeek = format(parseISO(day.date), 'EEEE');

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border transition-all duration-200 ${
        isSelected ? 'border-red-500 ring-2 ring-red-100' : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      {/* Header - Always visible */}
      <div
        className="p-4 cursor-pointer"
        onClick={onSelect}
      >
        <div className="flex items-start gap-3">
          {/* Day number badge */}
          <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex flex-col items-center justify-center ${
            isSelected ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700'
          }`}>
            <span className="text-xs font-medium opacity-80">Day</span>
            <span className="text-lg font-bold leading-none">{day.dayNumber}</span>
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-gray-900 text-lg">{day.title}</h3>
              <span className="text-lg">{locationTypeIcons[day.location.type]}</span>
            </div>

            <div className="flex items-center gap-3 mt-1 text-sm text-gray-600 flex-wrap">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {day.location.name}
              </span>
              <span className="text-gray-300">•</span>
              <span>{formattedDate}</span>
            </div>

            {/* Quick info badges */}
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              {day.drivingDistance && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full">
                  <Car className="w-3 h-3" />
                  {day.drivingDistance}
                </span>
              )}
              {day.weather && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-50 text-amber-700 text-xs rounded-full">
                  <Thermometer className="w-3 h-3" />
                  {day.weather.high}°/{day.weather.low}°F
                </span>
              )}
              {day.activities.length > 0 && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-purple-50 text-purple-700 text-xs rounded-full">
                  <Camera className="w-3 h-3" />
                  {day.activities.length} activities
                </span>
              )}
              {day.budgetBreakdown?.total && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded-full">
                  <DollarSign className="w-3 h-3" />
                  ${day.budgetBreakdown.total}
                </span>
              )}
            </div>
          </div>

          {/* Expand/collapse button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isExpanded ? (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronRight className="w-5 h-5 text-gray-500" />
            )}
          </button>
        </div>
      </div>

      {/* Expanded content */}
      {isExpanded && (
        <div className="border-t border-gray-100 animate-fade-in">
          {/* Activities section */}
          {day.activities.length > 0 && (
            <div className="p-4">
              <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                <Camera className="w-4 h-4 text-purple-500" />
                Activities
              </h4>
              <div className="space-y-3">
                {day.activities.map((activity, idx) => (
                  <ActivityItem key={activity.id} activity={activity} index={idx + 1} />
                ))}
              </div>
            </div>
          )}

          {/* Accommodation Options */}
          {(day.accommodationOptions || day.accommodation) && (
            <div className="p-4 bg-gray-50 border-t border-gray-100">
              <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                <Hotel className="w-4 h-4 text-blue-500" />
                Stays: {day.overnight}
                {day.accommodationOptions && day.accommodationOptions.length > 1 && (
                  <span className="text-xs font-normal text-gray-500">
                    ({day.accommodationOptions.length} options)
                  </span>
                )}
              </h4>
              <div className="space-y-2">
                {day.accommodationOptions && day.accommodationOptions.length > 0 ? (
                  day.accommodationOptions.map((acc) => (
                    <AccommodationCard key={acc.id} acc={acc} />
                  ))
                ) : day.accommodation ? (
                  <AccommodationCard acc={day.accommodation} />
                ) : null}
              </div>
            </div>
          )}

          {/* Reservations needed */}
          {day.reservationsNeeded && day.reservationsNeeded.length > 0 && (
            <div className="p-4 bg-red-50 border-t border-red-100">
              <h4 className="font-medium text-red-800 mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Reservations Needed
              </h4>
              <ul className="space-y-1">
                {day.reservationsNeeded.map((res, idx) => (
                  <li key={idx} className="text-sm text-red-700 flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    {res}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Notes */}
          {day.notes && day.notes.length > 0 && (
            <div className="p-4 border-t border-gray-100">
              <h4 className="font-medium text-gray-900 mb-2">Notes</h4>
              <ul className="space-y-1">
                {day.notes.map((note, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5">•</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Budget breakdown */}
          {day.budgetBreakdown && (
            <div className="p-4 bg-green-50 border-t border-green-100">
              <h4 className="font-medium text-green-800 mb-2 flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Day Budget: ${day.budgetBreakdown.total}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
                {day.budgetBreakdown.accommodation && day.budgetBreakdown.accommodation > 0 && (
                  <div className="bg-white rounded px-2 py-1">
                    <span className="text-gray-500">Stay:</span>{' '}
                    <span className="font-medium">${day.budgetBreakdown.accommodation}</span>
                  </div>
                )}
                {day.budgetBreakdown.food && day.budgetBreakdown.food > 0 && (
                  <div className="bg-white rounded px-2 py-1">
                    <span className="text-gray-500">Food:</span>{' '}
                    <span className="font-medium">${day.budgetBreakdown.food}</span>
                  </div>
                )}
                {day.budgetBreakdown.activities && day.budgetBreakdown.activities > 0 && (
                  <div className="bg-white rounded px-2 py-1">
                    <span className="text-gray-500">Activities:</span>{' '}
                    <span className="font-medium">${day.budgetBreakdown.activities}</span>
                  </div>
                )}
                {day.budgetBreakdown.gas && day.budgetBreakdown.gas > 0 && (
                  <div className="bg-white rounded px-2 py-1">
                    <span className="text-gray-500">Gas:</span>{' '}
                    <span className="font-medium">${day.budgetBreakdown.gas}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const accTypeConfig: Record<string, { icon: typeof Hotel; label: string; color: string }> = {
  hotel: { icon: Building2, label: 'Hotel', color: 'bg-blue-100 text-blue-700' },
  motel: { icon: Building2, label: 'Motel', color: 'bg-blue-100 text-blue-700' },
  inn: { icon: Hotel, label: 'Inn', color: 'bg-blue-100 text-blue-700' },
  lodge: { icon: Hotel, label: 'Lodge', color: 'bg-amber-100 text-amber-700' },
  resort: { icon: Hotel, label: 'Resort', color: 'bg-purple-100 text-purple-700' },
  airbnb: { icon: Home, label: 'Airbnb', color: 'bg-rose-100 text-rose-700' },
  cabin: { icon: Trees, label: 'Cabin', color: 'bg-green-100 text-green-700' },
  condo: { icon: Home, label: 'Condo', color: 'bg-teal-100 text-teal-700' },
};

function AccommodationCard({ acc }: { acc: Accommodation }) {
  const typeConf = accTypeConfig[acc.type] || accTypeConfig.hotel;
  const TypeIcon = typeConf.icon;

  return (
    <div className={`bg-white rounded-lg p-3 border ${acc.recommended ? 'border-blue-300 ring-1 ring-blue-100' : 'border-gray-200'}`}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            {acc.recommended && (
              <span className="px-1.5 py-0.5 bg-blue-500 text-white text-[10px] font-semibold rounded uppercase tracking-wide">
                Top Pick
              </span>
            )}
            <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-medium rounded ${typeConf.color}`}>
              <TypeIcon className="w-2.5 h-2.5" />
              {typeConf.label}
            </span>
            <span className="font-medium text-gray-900 text-sm">{acc.name}</span>
          </div>
          <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-600 flex-wrap">
            <span className="font-semibold text-gray-900">{acc.priceRange}/night</span>
            {acc.reviewRating && (
              <span className="inline-flex items-center gap-0.5">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span className="font-medium">{acc.reviewRating}</span>
                {acc.reviewSource && (
                  <span className="text-gray-400">({acc.reviewSource})</span>
                )}
              </span>
            )}
            {acc.reviewCount && (
              <span className="text-gray-400">{acc.reviewCount.toLocaleString()} reviews</span>
            )}
          </div>
        </div>
        <div className="flex gap-1 flex-shrink-0">
          {acc.website && (
            <a
              href={acc.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
              title="Website"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {acc.bookingUrl && acc.bookingUrl !== acc.website && (
            <a
              href={acc.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded transition-colors"
              title="Book"
              onClick={(e) => e.stopPropagation()}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
      {acc.amenities && acc.amenities.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {acc.amenities.map((amenity, idx) => (
            <span key={idx} className="px-1.5 py-0.5 bg-gray-100 text-gray-500 text-[10px] rounded">
              {amenity}
            </span>
          ))}
        </div>
      )}
      {acc.notes && (
        <p className="text-xs text-gray-500 mt-1.5">{acc.notes}</p>
      )}
    </div>
  );
}

function ActivityItem({ activity, index }: { activity: Activity; index: number }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
      <div className="flex items-start gap-3">
        <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-medium flex-shrink-0">
          {index}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h5 className="font-medium text-gray-900">{activity.name}</h5>
              <p className="text-sm text-gray-600 mt-0.5">{activity.description}</p>
            </div>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              {showDetails ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-200 text-gray-700 text-xs rounded-full">
              <Clock className="w-3 h-3" />
              {activity.duration}
            </span>
            <span className={`px-2 py-0.5 text-xs rounded-full ${difficultyColors[activity.difficulty]}`}>
              {activity.difficulty}
            </span>
            {activity.seniorFriendly && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                <Footprints className="w-3 h-3" />
                Senior-friendly
              </span>
            )}
            {activity.reservationRequired && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full">
                <AlertCircle className="w-3 h-3" />
                Reservation
              </span>
            )}
            {activity.cost && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">
                <DollarSign className="w-3 h-3" />
                {activity.cost}
              </span>
            )}
          </div>

          {showDetails && (
            <div className="mt-3 space-y-2 animate-fade-in">
              {activity.tips && activity.tips.length > 0 && (
                <div className="bg-blue-50 rounded p-2">
                  <div className="text-xs font-medium text-blue-800 mb-1">Tips:</div>
                  <ul className="space-y-0.5">
                    {activity.tips.map((tip, idx) => (
                      <li key={idx} className="text-xs text-blue-700 flex items-start gap-1">
                        <span className="text-blue-400">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {activity.reservationUrl && (
                <a
                  href={activity.reservationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800"
                >
                  Book online <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
