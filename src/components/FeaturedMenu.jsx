import MenuCard from "./MenuCard";

export default function FeaturedMenu({ items, onAdd }) {
  return (
    <section className="py-14 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Menu
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onAdd={onAdd}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
