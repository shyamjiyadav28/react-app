import React from "react";

export default function MobileMenuGrid({ items = [], onAdd }) {
  return (
    <section className="py-6 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Menu</h3>

        <div className="grid grid-cols-2 gap-4">
          {items.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col text-sm"
              aria-label={item.name}
            >
              {/* Image */}
              <div className="w-full h-24 bg-gray-100 overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span>Photo</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-3 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 leading-snug truncate">
                    {item.name}
                  </h4>
                  {item.description && (
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="mt-3 flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900">₹{item.price}</span>
                  </div>

                  <button
                    onClick={() => onAdd && onAdd(item)}
                    className="ml-auto bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-xl px-3 py-1 text-xs font-semibold transition-colors duration-150 shadow-sm"
                    aria-label={`Add ${item.name} to cart`}
                  >
                    Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
