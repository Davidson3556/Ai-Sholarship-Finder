// components/FilterSidebar.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Loader2, X, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    states: string[];
    degreeLevels: string[];
    categories: string[];
    international: boolean;
    minAmount: number;
    maxAmount: number;
  };
  onFilterChange: (filters: any) => void;
  isLoading: boolean;
}

export const FilterSidebar = ({ 
  isOpen, 
  onClose, 
  filters, 
  onFilterChange,
  isLoading 
}: FilterSidebarProps) => {
  const filterOptions = {
    states: ['California', 'New York', 'Texas', 'Massachusetts', 'Michigan'],
    degreeLevels: ['Undergraduate', 'Graduate', 'PhD', 'MBA'],
    categories: ['Merit-Based', 'Need-Based', 'Women', 'STEM', 'Research']
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.2 }}
          className="fixed inset-y-0 right-0 w-full max-w-xs bg-background border-l shadow-lg p-6 z-50 overflow-y-auto"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              Filters
              <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                Mock Data
              </Badge>
            </h3>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClose}
              disabled={isLoading}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-8 relative">
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center rounded-lg"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    <Loader2 className="h-8 w-8 text-primary animate-spin" />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-4">
              <h4 className="font-medium">Degree Level</h4>
              {filterOptions.degreeLevels.map((level) => (
                <motion.label
                  key={level}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={filters.degreeLevels.includes(level)}
                    onChange={(e) => {
                      const newLevels = e.target.checked
                        ? [...filters.degreeLevels, level]
                        : filters.degreeLevels.filter(l => l !== level);
                      onFilterChange({ ...filters, degreeLevels: newLevels });
                    }}
                    disabled={isLoading}
                    className="h-4 w-4 rounded border-primary text-primary focus:ring-primary disabled:opacity-50"
                  />
                  <span>{level}</span>
                </motion.label>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">States</h4>
              {filterOptions.states.map((state) => (
                <motion.label
                  key={state}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={filters.states.includes(state)}
                    onChange={(e) => {
                      const newStates = e.target.checked
                        ? [...filters.states, state]
                        : filters.states.filter(s => s !== state);
                      onFilterChange({ ...filters, states: newStates });
                    }}
                    disabled={isLoading}
                    className="h-4 w-4 rounded border-primary text-primary focus:ring-primary disabled:opacity-50"
                  />
                  <span>{state}</span>
                </motion.label>
              ))}
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h4 className="font-medium">Categories</h4>
              {filterOptions.categories.map((category) => (
                <motion.label
                  key={category}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(category)}
                    onChange={(e) => {
                      const newCategories = e.target.checked
                        ? [...filters.categories, category]
                        : filters.categories.filter(c => c !== category);
                      onFilterChange({ ...filters, categories: newCategories });
                    }}
                    disabled={isLoading}
                    className="h-4 w-4 rounded border-primary text-primary focus:ring-primary disabled:opacity-50"
                  />
                  <span>{category}</span>
                </motion.label>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">International Students</h4>
              <motion.label
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <input
                  type="checkbox"
                  checked={filters.international}
                  onChange={(e) => onFilterChange({ ...filters, international: e.target.checked })}
                  disabled={isLoading}
                  className="h-4 w-4 rounded border-primary text-primary focus:ring-primary disabled:opacity-50"
                />
                <span>Show International Scholarships</span>
              </motion.label>
            </div>

            <div className="p-4 bg-muted rounded-lg text-sm flex gap-2">
              <Info className="h-4 w-4 flex-shrink-0" />
              <p>All data shown is for demonstration purposes using mock data. Actual implementation would connect to a live database.</p>
            </div>
          </div>

          <div className="mt-6">
  <Button
    variant="outline"
    onClick={() => onFilterChange({
      states: [],
      degreeLevels: [],
      categories: [],
      international: false,
      minAmount: 0,
      maxAmount: 50000,
    })}
    disabled={isLoading}
    className="w-full"
  >
    Clear All Filters
  </Button>
</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};