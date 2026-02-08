const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Greater Noida",
    rating: 5,
    text: "Best authentic North Indian food! The tandoori dishes are absolutely delicious. Highly recommended!",
    avatar: "👨‍💼",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Noida",
    rating: 5,
    text: "Fast delivery, hot food, and amazing flavors. Desi Tadka has become our go-to restaurant!",
    avatar: "👩‍💼",
  },
  {
    id: 3,
    name: "Anil Patel",
    location: "Greater Noida",
    rating: 5,
    text: "Excellent quality and authentic recipes. The customer service is outstanding!",
    avatar: "👨‍🍳",
  },
  {
    id: 4,
    name: "Neha Singh",
    location: "Noida",
    rating: 5,
    text: "Got the order in 30 minutes. Everything was perfectly packaged. Will order again!",
    avatar: "👩‍💻",
  },
  {
    id: 5,
    name: "Ravi Verma",
    location: "Noida Sector 62",
    rating: 5,
    text: "The paneer butter masala is incredible! A taste of heaven in every bite.",
    avatar: "👨‍💻",
  },
  {
    id: 6,
    name: "Anjali Yadav",
    location: "Greater Noida West",
    rating: 5,
    text: "Pure North Indian flavors! The breads are fresh and the gravies are perfectly spiced.",
    avatar: "👩‍🍳",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <h2 className="section-title text-center mb-12">What Our Guests Say</h2>

        <div className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory -mx-5 sm:-mx-6 md:mx-0 px-5 sm:px-6 md:px-0 pb-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="min-w-[calc(100vw-50px)] sm:min-w-[280px] md:min-w-[340px] lg:min-w-[360px] flex-shrink-0 snap-start bg-white rounded-2xl p-3 sm:p-5 md:p-6 shadow-md hover:shadow-2xl card-hover border-2 border-orange-200"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-desiRed text-lg">★</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm mb-5 leading-relaxed line-clamp-3">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-orange-100">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
