import { useState, useEffect, useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  "https://images.unsplash.com/photo-1555992336-03a23c08c42c",
  "https://images.unsplash.com/photo-1543357480-cf9c456b4c75",
];

export default function Gallery() {
  const [visibleIndices, setVisibleIndices] = useState(new Set());
  const sectionRef = useRef(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          images.forEach((_, index) => {
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
  }, []);

  return (
    <section ref={sectionRef} id="gallery" className="section-padding bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <h2 className="section-title text-center mb-10 sm:mb-14">Our Culinary Gallery</h2>

        <div className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto snap-x snap-center -mx-5 sm:-mx-6 md:mx-0 px-8 sm:px-10 md:px-0 pb-2">
          {images.map((src, i) => (
            <div key={i} className={`min-w-[calc(100vw-80px)] sm:min-w-[calc(50%-12px)] md:min-w-[calc(33.333%-16px)] lg:min-w-[30%] flex-shrink-0 snap-center overflow-hidden rounded-2xl shadow-lg md:hover:shadow-2xl md:transition-shadow md:duration-300 border-4 border-orange-200 transition-all duration-500 ${
              visibleIndices.has(i)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}>
              <img
                src={src}
                alt="Food gallery"
                loading="lazy"
                decoding="async"
                className="w-full h-56 sm:h-72 md:h-64 object-cover md:hover:scale-105 md:transition-transform md:duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
