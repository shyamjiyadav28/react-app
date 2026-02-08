export default function Contact() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Contact Us
        </h2>

        <p className="text-gray-700 mb-8">
          Have a question or feedback? We’d love to hear from you! Fill out the form below and we’ll get back to you soon.
        </p>

        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-emerald-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-emerald-500"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-emerald-500"
          ></textarea>

          <button className="bg-emerald-500 text-white font-bold py-3 rounded-full hover:bg-emerald-600 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
