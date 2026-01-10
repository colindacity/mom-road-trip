'use client';

import { useState } from 'react';
import { X, Plus, Link2, Clock, Mountain, MapPin } from 'lucide-react';
import { ParsedActivity } from '@/lib/urlParser';

interface AddCustomEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (activity: ParsedActivity) => void;
  initialData?: Partial<ParsedActivity>;
}

export default function AddCustomEventModal({
  isOpen,
  onClose,
  onAdd,
  initialData,
}: AddCustomEventModalProps) {
  const [name, setName] = useState(initialData?.name || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [duration, setDuration] = useState(initialData?.duration || '');
  const [difficulty, setDifficulty] = useState<'easy' | 'moderate' | 'challenging'>(
    initialData?.difficulty || 'easy'
  );
  const [seniorFriendly, setSeniorFriendly] = useState(initialData?.seniorFriendly ?? true);
  const [distance, setDistance] = useState(initialData?.distance || '');
  const [category, setCategory] = useState(initialData?.category || 'activity');
  const [reservationRequired, setReservationRequired] = useState(
    initialData?.reservationRequired || false
  );
  const [urlInput, setUrlInput] = useState('');
  const [isLoadingUrl, setIsLoadingUrl] = useState(false);
  const [urlError, setUrlError] = useState('');

  if (!isOpen) return null;

  const handleUrlImport = async () => {
    if (!urlInput.trim()) return;

    setIsLoadingUrl(true);
    setUrlError('');

    try {
      const response = await fetch('/api/parse-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: urlInput.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        setUrlError(data.error || 'Failed to parse URL');
        return;
      }

      // Populate form with parsed data
      if (data.activity) {
        setName(data.activity.name || '');
        setDescription(data.activity.description || '');
        setDuration(data.activity.duration || '');
        setDifficulty(data.activity.difficulty || 'easy');
        setSeniorFriendly(data.activity.seniorFriendly ?? true);
        setDistance(data.activity.distance || '');
        setCategory(data.activity.category || 'activity');
      }
    } catch (error) {
      setUrlError('Failed to fetch URL data');
    } finally {
      setIsLoadingUrl(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return;

    const activity: ParsedActivity = {
      name: name.trim(),
      description: description.trim() || undefined,
      duration: duration.trim() || undefined,
      difficulty,
      seniorFriendly,
      distance: distance.trim() || undefined,
      category,
      reservationRequired,
      source: 'custom',
      sourceUrl: urlInput.trim() || '',
    };

    onAdd(activity);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Add Custom Activity</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* URL Import */}
          <div className="bg-blue-50 rounded-lg p-3">
            <label className="block text-xs font-medium text-blue-700 mb-2">
              <Link2 className="w-3.5 h-3.5 inline mr-1" />
              Import from URL (optional)
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="Paste Google Maps, AllTrails, Yelp URL..."
                className="flex-1 px-3 py-2 text-sm border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={handleUrlImport}
                disabled={isLoadingUrl || !urlInput.trim()}
                className="px-3 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoadingUrl ? '...' : 'Import'}
              </button>
            </div>
            {urlError && (
              <p className="text-xs text-red-600 mt-1">{urlError}</p>
            )}
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Activity Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Sunrise at Horseshoe Bend"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description of the activity..."
              rows={2}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
            />
          </div>

          {/* Duration & Distance */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Clock className="w-3.5 h-3.5 inline mr-1" />
                Duration
              </label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g., 2 hours"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <MapPin className="w-3.5 h-3.5 inline mr-1" />
                Distance
              </label>
              <input
                type="text"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                placeholder="e.g., 3.5 miles"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
          </div>

          {/* Category & Difficulty */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                <option value="activity">Activity</option>
                <option value="hike">Hike</option>
                <option value="viewpoint">Viewpoint</option>
                <option value="restaurant">Restaurant</option>
                <option value="park">Park</option>
                <option value="museum">Museum</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Mountain className="w-3.5 h-3.5 inline mr-1" />
                Difficulty
              </label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as 'easy' | 'moderate' | 'challenging')}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="challenging">Challenging</option>
              </select>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={seniorFriendly}
                onChange={(e) => setSeniorFriendly(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <span className="text-sm text-gray-700">Senior Friendly</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={reservationRequired}
                onChange={(e) => setReservationRequired(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
              />
              <span className="text-sm text-gray-700">Reservation Required</span>
            </label>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!name.trim()}
              className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Activity
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
