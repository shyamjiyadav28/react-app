export default function MenuCard({ item, onAdd }) {
  return (
    <div className="bg-white rounded-2xl shadow-md card-hover overflow-hidden h-full flex flex-col border border-gray-100">
      {/* Image Container */}
      <div className="w-full h-32 sm:h-40 md:h-48 overflow-hidden bg-gray-200">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover md:hover:scale-105 md:transition-transform md:duration-300"
        />
      </div>

      {/* Content Container */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-sm sm:text-base text-gray-800 line-clamp-2">{item.name}</h3>
          {item.description && (
            <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-1">{item.description}</p>
          )}
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
          <span className="text-desiRed font-bold text-base sm:text-lg">₹{item.price}</span>

          <button
            onClick={() => onAdd(item)}
            className="btn-primary-sm text-xs sm:text-sm"
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}
