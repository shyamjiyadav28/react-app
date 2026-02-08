export default function Footer() {
  return (
    <footer className="bg-desiBlack text-white py-8 sm:py-12 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-gold">Desi</span>
              <span className="text-desiRed">Tadka</span>
            </h3>
            <p className="text-gray-400 text-sm">Authentic Indian cuisine delivered to your doorstep.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-gold transition">Home</a></li>
              <li><a href="#menu" className="hover:text-gold transition">Menu</a></li>
              <li><a href="#about" className="hover:text-gold transition">About</a></li>
              <li><a href="#contact" className="hover:text-gold transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: info@destitadka.com</li>
              <li>Phone: +91 9956785112</li>
              <li>Address: Greater Noida, UP</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-gold font-bold mb-4">Hours</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Mon - Fri: 11am - 11pm</li>
              <li>Sat - Sun: 10am - 12am</li>
              <li className="text-desiRed font-semibold">Open 24/7 Delivery</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2026 Desi Tadka. All rights reserved. Made with by passionate food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
