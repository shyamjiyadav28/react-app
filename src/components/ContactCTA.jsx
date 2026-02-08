export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="section-title !mb-4 text-desiRed">Contact Us</h2>

          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
            Have questions about our authentic North Indian offerings? We'd love to hear from you. Reach out anytime!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 bg-gradient-to-b from-amber-50 to-white p-6 sm:p-8 rounded-2xl border-2 border-orange-200 shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="border-2 border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition text-base"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="border-2 border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition text-base"
            />
          </div>
          
          <textarea
            rows="4"
            placeholder="Your Message"
            required
            className="w-full border-2 border-orange-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-desiRed focus:border-transparent transition resize-none text-base bg-white"
          ></textarea>

          <button type="submit" className="bg-desiRed hover:bg-red-700 active:bg-red-800 text-white font-bold py-3 px-8 rounded-full w-full sm:w-auto transition-all duration-200 shadow-md hover:shadow-lg">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
