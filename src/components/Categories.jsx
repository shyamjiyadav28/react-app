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
    <section className="py-10 sm:py-14 bg-gradient-to-r from-amber-100 to-orange-100 border-y border-orange-200">
      <h2 className="section-title px-5 sm:px-6">Categories</h2>

      <div className="flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory px-5 sm:px-6 -mx-5 sm:-mx-6">
        {categories.map((name) => (
          <button
            key={name}
            onClick={() => onSelect(name)}
            className={`min-w-max rounded-full px-5 sm:px-6 py-2.5 sm:py-3 font-semibold transition-all duration-200 whitespace-nowrap
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
    </section>
  );
}
