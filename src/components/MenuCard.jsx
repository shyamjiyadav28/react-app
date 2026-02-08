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
      {/* Image Container */}
      <div className="relative w-full h-32 sm:h-36 md:h-40 overflow-hidden bg-gray-200 flex items-center justify-center group">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="text-center">
            <p className="text-sm sm:text-base font-semibold text-gray-400">Photo coming soon</p>
            <p className="text-xs text-gray-500 mt-1">Will add later</p>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        
        {/* Dish Name */}
        <div className="mb-3">
          <h3 className="font-bold text-lg text-gray-900 line-clamp-2">{item.name}</h3>
          {item.description && (
            <p className="text-sm text-gray-500 mt-1.5 line-clamp-2 leading-snug">{item.description}</p>
          )}
        </div>

        {/* Rating Row */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex items-center gap-0.5">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-gray-800 text-sm">{rating}</span>
          </div>
          <span className="text-xs text-gray-500">({ratingCount})</span>
        </div>

        {/* Price Row */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-green-600 font-bold text-lg">₹{discountedPrice}</span>
          {originalPrice !== discountedPrice && (
            <>
              <span className="text-gray-400 line-through text-sm">₹{Math.round(originalPrice)}</span>
              <span className="text-green-600 font-semibold text-xs bg-green-50 px-2 py-0.5 rounded">
                {Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)}% OFF
              </span>
            </>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAdd(item)}
          className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <ShoppingCart className="w-4.5 h-4.5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
