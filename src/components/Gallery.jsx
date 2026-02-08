const images = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  "https://images.unsplash.com/photo-1555992336-03a23c08c42c",
  "https://images.unsplash.com/photo-1543357480-cf9c456b4c75",
  "https://images.unsplash.com/photo-1604908177522-040d2d96b56b",
  "https://images.unsplash.com/photo-1481833761820-0509d3217039",
  "https://images.unsplash.com/photo-1516685018646-549c39777251",
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <h2 className="section-title text-center mb-10 sm:mb-14">Our Culinary Gallery</h2>

        <div className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory -mx-5 sm:-mx-6 md:mx-0 px-5 sm:px-6 md:px-0 pb-2">
          {images.map((src, i) => (
            <div key={i} className="min-w-[calc(100vw-50px)] sm:min-w-[calc(50%-12px)] md:min-w-[calc(33.333%-16px)] lg:min-w-[30%] flex-shrink-0 snap-start overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-4 border-orange-200">
              <img
                src={src}
                alt="Food gallery"
                loading="lazy"
                decoding="async"
                className="w-full h-56 sm:h-72 md:h-64 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
