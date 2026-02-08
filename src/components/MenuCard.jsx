import { ShoppingCart, Star } from 'lucide-react';

export default function MenuCard({ item, onAdd }) {
  // Default rating if not available
  const rating = item.rating || 4.5;
  const ratingCount = item.ratingCount || 120;
  // If there's no original price, use item price as original
  const discountedPrice = item.discountedPrice || item.price;
  const originalPrice = item.originalPrice || (item.price * 1.15); // 15% markup as original

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-200">
      {/* Image Container (rounded top only) */}
      <div className="relative w-full h-28 sm:h-32 md:h-36 overflow-hidden bg-gray-100 flex items-center justify-center rounded-t-2xl">
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-300"
            />
          ) : (
            <div className="text-center">
              <p className="text-sm font-medium text-gray-400">Photo coming soon</p>
            </div>
          )}
      </div>

      {/* Content Container */}
      <div className="p-3 flex-1 flex flex-col justify-between">
        {/* Dish Name */}
        <div>
          <h3 className="font-semibold text-base text-gray-900 line-clamp-2">{item.name}</h3>
          {item.description && (
            <p className="text-xs text-gray-500 mt-1 line-clamp-2">{item.description}</p>
          )}
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="font-semibold text-sm text-gray-800">{rating}</span>
            <span className="text-xs text-gray-500">({ratingCount})</span>
          </div>

          <div className="ml-auto text-right">
            <div className="text-sm font-bold text-gray-900">₹{discountedPrice}</div>
            {originalPrice !== discountedPrice && (
              <div className="text-xs text-gray-400 line-through">₹{Math.round(originalPrice)}</div>
            )}
          </div>
        </div>

        <button
          onClick={() => onAdd(item)}
          className="w-full mt-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition-transform duration-150 transform hover:-translate-y-0.5"
        >
          <ShoppingCart className="w-4 h-4" />
          <span className="text-sm">Add</span>
        </button>
      </div>
    </div>
  );
}
