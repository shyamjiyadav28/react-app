import { MapPin, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen bg-emerald-50 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 mb-6 bg-white px-4 py-2 rounded-full shadow-sm">
          <MapPin className="text-emerald-500 w-4 h-4" />
          <span className="text-sm font-medium text-gray-600">
            Greater Noida, UP
          </span>
        </div>

        <h1 className="text-7xl font-black text-gray-900 mb-4">
          Hungry?
        </h1>

        <h2 className="text-4xl font-bold text-emerald-600 mb-8">
          Get It Fast
        </h2>

        <button className="bg-emerald-500 text-white font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-emerald-600 transition-all mx-auto">
          Browse Menu <ArrowRight />
        </button>
      </div>
    </div>
  );
}
