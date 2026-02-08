import { Search, X } from 'lucide-react';

export default function SearchBar({ searchQuery, onSearch }) {
  return (
    <section className="py-6 sm:py-8 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-orange-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-600 w-5 h-5" />
          
          <input
            type="text"
            placeholder="Search dishes, tandoori, paneer..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-12 pr-12 py-3 sm:py-3.5 bg-white border-2 border-orange-200 rounded-full focus:outline-none focus:border-desiRed focus:ring-2 focus:ring-desiRed/20 text-gray-800 placeholder-gray-500 font-medium transition-all duration-200"
          />
          
          {searchQuery && (
            <button
              onClick={() => onSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        
        {searchQuery && (
          <p className="mt-2 text-xs sm:text-sm text-gray-600">
            Searching for: <span className="font-semibold text-desiRed">"{searchQuery}"</span>
          </p>
        )}
      </div>
    </section>
  );
}
