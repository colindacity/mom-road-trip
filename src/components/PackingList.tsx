'use client';

import { useState, useEffect, useMemo } from 'react';
import { CheckCircle2, Circle, Backpack, Plus, X, Search } from 'lucide-react';

interface PackingListProps {
  items: string[];
}

export default function PackingList({ items }: PackingListProps) {
  const [packed, setPacked] = useState<Set<string>>(new Set());
  const [customItems, setCustomItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedPacked = localStorage.getItem('trip-packing-checked');
    const savedCustom = localStorage.getItem('trip-packing-custom');
    if (savedPacked) {
      setPacked(new Set(JSON.parse(savedPacked)));
    }
    if (savedCustom) {
      setCustomItems(JSON.parse(savedCustom));
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('trip-packing-checked', JSON.stringify([...packed]));
  }, [packed]);

  useEffect(() => {
    localStorage.setItem('trip-packing-custom', JSON.stringify(customItems));
  }, [customItems]);

  const allItems = useMemo(() => [...items, ...customItems], [items, customItems]);

  const filteredItems = useMemo(() => {
    if (!searchQuery) return allItems;
    return allItems.filter(item =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [allItems, searchQuery]);

  const togglePacked = (item: string) => {
    const newPacked = new Set(packed);
    if (newPacked.has(item)) {
      newPacked.delete(item);
    } else {
      newPacked.add(item);
    }
    setPacked(newPacked);
  };

  const addItem = () => {
    if (newItem.trim() && !allItems.includes(newItem.trim())) {
      setCustomItems([...customItems, newItem.trim()]);
      setNewItem('');
      setShowAddForm(false);
    }
  };

  const removeCustomItem = (item: string) => {
    setCustomItems(customItems.filter(i => i !== item));
    const newPacked = new Set(packed);
    newPacked.delete(item);
    setPacked(newPacked);
  };

  const packedCount = packed.size;
  const totalCount = allItems.length;
  const progress = totalCount > 0 ? (packedCount / totalCount) * 100 : 0;

  // Categorize items
  const categories = useMemo(() => {
    const cats: Record<string, string[]> = {
      'Clothing': [],
      'Footwear': [],
      'Gear': [],
      'Health': [],
      'Electronics': [],
      'Other': [],
    };

    filteredItems.forEach(item => {
      const lower = item.toLowerCase();
      if (lower.includes('shirt') || lower.includes('pants') || lower.includes('jacket') ||
          lower.includes('shorts') || lower.includes('fleece') || lower.includes('beanie') ||
          lower.includes('hat') || lower.includes('layer')) {
        cats['Clothing'].push(item);
      } else if (lower.includes('shoe') || lower.includes('sandal') || lower.includes('boot')) {
        cats['Footwear'].push(item);
      } else if (lower.includes('backpack') || lower.includes('pole') || lower.includes('spray') ||
                 lower.includes('binocular') || lower.includes('bottle') || lower.includes('passport')) {
        cats['Gear'].push(item);
      } else if (lower.includes('sunscreen') || lower.includes('medication') || lower.includes('first aid') ||
                 lower.includes('lip balm') || lower.includes('repellent') || lower.includes('electrolyte')) {
        cats['Health'].push(item);
      } else if (lower.includes('camera') || lower.includes('charger') || lower.includes('phone')) {
        cats['Electronics'].push(item);
      } else {
        cats['Other'].push(item);
      }
    });

    return Object.entries(cats).filter(([_, items]) => items.length > 0);
  }, [filteredItems]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <Backpack className="w-5 h-5" />
            <h2 className="font-semibold">Packing List</h2>
          </div>
          <div className="text-white/90 text-sm font-medium">
            {packedCount}/{totalCount}
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

      {/* Search and Add */}
      <div className="p-3 border-b border-gray-100 space-y-2">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {showAddForm ? (
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Add custom item..."
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addItem()}
              autoFocus
              className="flex-1 px-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={addItem}
              className="px-3 py-1.5 bg-indigo-500 text-white text-sm rounded-lg hover:bg-indigo-600"
            >
              Add
            </button>
            <button
              onClick={() => { setShowAddForm(false); setNewItem(''); }}
              className="p-1.5 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowAddForm(true)}
            className="w-full flex items-center justify-center gap-1.5 py-1.5 text-sm text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add custom item
          </button>
        )}
      </div>

      {/* Items by category */}
      <div className="p-3 space-y-4 max-h-[400px] overflow-y-auto">
        {categories.map(([category, categoryItems]) => (
          <div key={category}>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              {category}
            </h3>
            <div className="space-y-1">
              {categoryItems.map((item, i) => {
                const isPacked = packed.has(item);
                const isCustom = customItems.includes(item);

                return (
                  <div
                    key={i}
                    className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-colors ${
                      isPacked ? 'bg-green-50' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => togglePacked(item)}
                  >
                    {isPacked ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    ) : (
                      <Circle className="w-4 h-4 text-gray-300 flex-shrink-0" />
                    )}
                    <span className={`text-sm flex-1 ${isPacked ? 'text-green-700 line-through' : 'text-gray-700'}`}>
                      {item}
                    </span>
                    {isCustom && (
                      <button
                        onClick={(e) => { e.stopPropagation(); removeCustomItem(item); }}
                        className="p-1 text-gray-400 hover:text-red-500 rounded"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {packedCount === totalCount && totalCount > 0 && (
        <div className="p-3 bg-green-50 border-t border-green-100 text-center">
          <span className="text-green-700 text-sm font-medium">
            🎒 All packed and ready!
          </span>
        </div>
      )}
    </div>
  );
}
