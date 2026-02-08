import { MapPin, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
  };

  return (
    <div id="home" className="py-16 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-b from-amber-50 via-orange-50 to-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
        {/* Location Badge */}
        <a 
          href="https://maps.app.goo.gl/CJZnMqK3oHcsqhn2A?g_st=aw" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 mb-6 sm:mb-8 bg-white px-4 py-2 rounded-full shadow-md border border-amber-200 hover:border-desiRed hover:shadow-lg transition-all duration-200 cursor-pointer">
          <MapPin className="text-orange-600 w-4 h-4" />
          <span className="text-xs sm:text-sm font-medium text-gray-700">Kalyanpur, Kanpur UP</span>
        </a>

        {/* Main Tagline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-desiRed mb-3 sm:mb-4 leading-tight">
          Our Taste is Our Identity
        </h1>

        {/* Hindi Tagline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-6 sm:mb-8 leading-relaxed">
          हमारा स्वाद ही हमारी पहचान है
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
          Experience authentic North Indian cuisine crafted with traditional recipes, premium spices, and generations of culinary heritage. Every dish tells a story of taste and tradition.
        </p>

        {/* CTA Button */}
        <button 
          onClick={() => scrollTo('menu')}
          className="bg-desiRed hover:bg-red-700 active:bg-red-800 text-white font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 text-base sm:text-lg"
        >
          Explore Our Menu <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
