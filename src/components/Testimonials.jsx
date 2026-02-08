const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Kalyanpur, Kanpur UP",
    rating: 5,
    text: "Authentic North Indian food! Best tandoori dishes.",
    avatar: "👨‍💼",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Kalyanpur, Kanpur UP",
    rating: 5,
    text: "Fast delivery, hot & delicious food. Highly recommended!",
    avatar: "👩‍💼",
  },
  {
    id: 3,
    name: "Anil Patel",
    location: "Kalyanpur, Kanpur UP",
    rating: 5,
    text: "Excellent quality and authentic recipes!",
    avatar: "👨‍🍳",
  },
  {
    id: 4,
    name: "Neha Singh",
    location: "Kalyanpur, Kanpur UP",
    rating: 5,
    text: "30 mins delivery, perfectly packaged!",
    avatar: "👩‍💻",
  },
  {
    id: 5,
    name: "Ravi Verma",
    location: "Kalyanpur, Kanpur UP",
    rating: 5,
    text: "Paneer butter masala is incredible!",
    avatar: "👨‍💻",
  },
  {
    id: 6,
    name: "Anjali Yadav",
    location: "Kalyanpur, Kanpur UP",
    rating: 5,
    text: "Fresh breads & perfectly spiced gravies!",
    avatar: "👩‍🍳",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <h2 className="section-title text-center mb-12">What Our Guests Say</h2>

        <div className="flex gap-3 sm:gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory -mx-5 sm:-mx-6 md:mx-0 px-5 sm:px-6 md:px-0 pb-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="min-w-[calc(100vw-40px)] sm:min-w-[280px] md:min-w-[340px] lg:min-w-[360px] flex-shrink-0 snap-start bg-white rounded-2xl p-3 sm:p-4 md:p-5 shadow-md card-hover border-2 border-orange-200 h-max"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-desiRed text-sm sm:text-base">★</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-xs sm:text-sm mb-3 sm:mb-4 leading-snug line-clamp-3 min-h-[60px]">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-2 pt-3 border-t border-orange-100">
                <div className="text-2xl flex-shrink-0">{testimonial.avatar}</div>
                <div className="min-w-0">
                  <h4 className="font-bold text-gray-900 text-xs sm:text-sm truncate">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500 truncate">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
