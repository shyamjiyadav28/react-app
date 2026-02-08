export default function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="sticky top-0 z-50 bg-desiBlack text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* BRAND */}
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
          <span className="text-gold">Desi</span>
          <span className="text-desiRed">Tadka</span>
        </h1>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-6 items-center text-sm font-medium">
          <button className="hover:text-gold transition">Home</button>
          <button className="hover:text-gold transition">Menu</button>
          <button className="hover:text-gold transition">About</button>
          <button className="hover:text-gold transition">Gallery</button>
          <button className="hover:text-gold transition">Contact</button>

          {/* LOCATION */}
          <a
            href="https://maps.google.com/?q=Desi+Tadka"
            target="_blank"
            rel="noreferrer"
            className="border border-gold px-3 py-1 rounded-full text-gold hover:bg-gold hover:text-black transition"
          >
            📍 Location
          </a>
        </div>

        {/* CART */}
        <button
          onClick={onCartClick}
          className="relative bg-desiRed px-4 py-2 rounded-full hover:bg-red-700 transition"
        >
          🛒 Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-gold text-black text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </button>

      </div>
    </nav>
  );
}
