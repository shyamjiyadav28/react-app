import MenuCard from "./MenuCard";

export default function PopularDishes({ items, onAdd }) {
  return (
    <section className="section-padding bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <h2 className="section-title">Popular Dishes</h2>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-5 sm:-mx-6 md:mx-0 px-5 sm:px-6 md:px-0">
          {items.map((item) => (
            <div key={item.id} className="min-w-[calc(100vw-40px)] sm:min-w-[160px] md:min-w-0 flex-shrink-0 md:flex-none snap-start">
              <MenuCard item={item} onAdd={onAdd} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
