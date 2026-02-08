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
    <section className="py-16 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl">
              <img
                src={src}
                alt="Food gallery"
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
