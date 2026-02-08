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
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 px-6">
        Categories
      </h2>

      <div className="flex gap-4 overflow-x-auto px-6">
        {categories.map((name) => (
          <button
            key={name}
            onClick={() => onSelect(name)}
            className={`min-w-[140px] rounded-full px-6 py-3 font-semibold transition
              ${
                selected === name
                  ? "bg-emerald-500 text-white"
                  : "bg-emerald-50 text-gray-800 hover:bg-emerald-100"
              }`}
          >
            {name}
          </button>
        ))}
      </div>
    </section>
  );
}
