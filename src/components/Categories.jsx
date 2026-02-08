const categories = [
  "All",
  "Starters",
  "Paneer",
  "Mushroom",
  "Dal",
  "Chaap",
  "Egg",
  "Veg",
];


export default function Categories({ selected, onSelect }) {
  return (
    <section className="py-8 sm:py-10 bg-gradient-to-r from-amber-100 to-orange-100 border-y border-orange-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <h2 className="section-title mb-4">Categories</h2>

        <div className="flex gap-2 sm:gap-3 overflow-x-auto snap-x snap-mandatory pb-2">
          {categories.map((name) => (
            <button
              key={name}
              onClick={() => onSelect(name)}
              className={`flex-shrink-0 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 font-semibold transition-all duration-200 whitespace-nowrap text-sm sm:text-base
                ${
                  selected === name
                    ? "bg-desiRed text-white shadow-lg scale-105"
                    : "bg-white text-gray-800 hover:bg-orange-100 border border-yellow-300"
                }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
