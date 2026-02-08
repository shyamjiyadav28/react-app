import { useState, useEffect, useRef } from "react";

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
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
  }, [isVisible]);

  return (
    <section ref={sectionRef} className={`py-8 sm:py-10 bg-gradient-to-r from-amber-100 to-orange-100 border-y border-orange-200 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <h2 className="section-title mb-4">Categories</h2>

        <div className="flex gap-2 sm:gap-3 overflow-x-auto snap-x snap-mandatory pb-2">
          {categories.map((name) => (
            <button
              key={name}
              onClick={() => onSelect(name)}
              className={`flex-shrink-0 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 font-semibold transition-colors duration-150 whitespace-nowrap text-sm sm:text-base
                ${
                  selected === name
                    ? "bg-desiRed text-white shadow-md md:scale-105"
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
