export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        
        <div>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            About Us
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to India Food Court — where passion meets plate! Established with the idea of delivering delicious 
            and authentic Indian cuisine right to your doorstep, we are committed to serving you fresh, flavorful meals 
            crafted with love and care.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From classic favorites to modern twists, our menu showcases a variety of dishes made from the finest 
            ingredients. Whether you’re craving a spicy starter or a comforting main course, we’ve got you covered.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="About Us"
            className="rounded-3xl shadow-md"
          />
        </div>
        
      </div>
    </section>
  );
}
