export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
        
        <div className="order-2 md:order-1">
          <h2 className="section-title !mb-6 sm:!mb-8 text-3xl sm:text-4xl md:text-5xl text-desiRed">
            About Desi Tadka
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
            Welcome to Desi Tadka — where tradition meets taste! Born from generations of North Indian culinary heritage, we bring authentic flavors and time-honored recipes to your table. Every spice, every technique, every dish is a celebration of Indian culture.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
            From the aromatic Tandoori specialties to rich, creamy gravies, from crispy breads to comfort food classics — we create masterpieces that honor our roots while delighting modern palates.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8 sm:pt-12 border-t-2 border-orange-200">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-desiRed">50+</div>
              <div className="text-xs sm:text-sm text-gray-700 mt-2 font-medium">Authentic Dishes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-desiRed">100%</div>
              <div className="text-xs sm:text-sm text-gray-700 mt-2 font-medium">Fresh Quality</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-desiRed">24/7</div>
              <div className="text-xs sm:text-sm text-gray-700 mt-2 font-medium">Fast Delivery</div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=600&fit=crop"
            alt="About Us"
            className="rounded-3xl shadow-xl w-full h-auto object-cover hover:shadow-2xl transition-shadow duration-300 border-4 border-orange-200"
          />
        </div>
        
      </div>
    </section>
  );
}
