import MenuCard from "./MenuCard";
import { useState, useEffect, useRef } from "react";

export default function FeaturedMenu({ items, onAdd }) {
  const [visibleIndices, setVisibleIndices] = useState(new Set());
  const sectionRef = useRef(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          items.forEach((_, index) => {
            setTimeout(() => {
              setVisibleIndices((prev) => new Set([...prev, index]));
            }, index * 100);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [items]);

  return (
    <section ref={sectionRef} id="menu" className="section-padding bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <h2 className="section-title">Featured Menu</h2>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 overflow-x-auto snap-x snap-center md:overflow-visible -mx-5 sm:-mx-6 md:mx-0 px-8 sm:px-10 md:px-0 pb-2">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`min-w-[calc(100vw-80px)] sm:min-w-[160px] md:min-w-0 flex-shrink-0 md:flex-none snap-center transition-all duration-500 ${
                visibleIndices.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <MenuCard item={item} onAdd={onAdd} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
