import { useState } from "react";

export default function Navbar({ cartCount, onCartClick }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "auto", block: "start" });
      setOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-desiBlack text-white shadow-lg border-b border-desiRed/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-3 md:py-4 flex items-center justify-between">

        {/* BRAND */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-wide cursor-pointer md:hover:text-gold md:transition-colors md:duration-200">
          <span className="text-gold">Desi</span>
          <span className="text-desiRed">Tadka</span>
        </h1>

        {/* MOBILE TOGGLE */}
        <div className="flex items-center md:hidden gap-3">
          <button
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
            className="p-2.5 rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            {open ? "✕" : "☰"}
          </button>

          <button
            onClick={onCartClick}
            className="relative bg-desiRed px-3 py-2 rounded-full hover:bg-red-700 transition-colors duration-200 text-sm font-semibold shadow-md"
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-3 -right-3 bg-gold text-black text-xs px-2 py-1 rounded-full font-bold shadow-md">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* NAV LINKS - desktop */}
        <div className="hidden md:flex gap-8 items-center text-sm font-semibold">
          <button onClick={() => scrollTo("home")} className="text-gold hover:text-white transition-colors duration-200 font-medium">Home</button>
          <button onClick={() => scrollTo("menu")} className="text-gold hover:text-white transition-colors duration-200 font-medium">Menu</button>
          <button onClick={() => scrollTo("about")} className="text-gold hover:text-white transition-colors duration-200 font-medium">About</button>
          <button onClick={() => scrollTo("gallery")} className="text-gold hover:text-white transition-colors duration-200 font-medium">Gallery</button>
          <button onClick={() => scrollTo("contact")} className="text-gold hover:text-white transition-colors duration-200 font-medium">Contact</button>

          <a
            href="https://maps.google.com/?q=Desi+Tadka"
            target="_blank"
            rel="noreferrer"
            className="border-2 border-gold px-4 py-2 rounded-full text-gold hover:bg-gold hover:text-black transition-all duration-200 font-semibold"
          >
            📍 Location
          </a>

          <button
            onClick={onCartClick}
            className="relative bg-desiRed px-5 py-2.5 rounded-full hover:bg-red-700 transition-colors duration-200 font-semibold shadow-md"
          >
            🛒 Cart
            {cartCount > 0 && (
              <span className="absolute -top-3 -right-3 bg-gold text-black text-xs px-2.5 py-1 rounded-full font-bold shadow-md">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* MOBILE PANEL */}
        {open && (
          <div className="md:hidden absolute left-4 right-4 top-full mt-2 bg-desiBlack rounded-2xl p-5 shadow-2xl border-2 border-desiRed/40">
            <div className="flex flex-col gap-4 text-sm font-semibold">
              <button onClick={() => scrollTo("home")} className="text-left text-gold hover:text-white transition-colors duration-200 font-medium py-2">Home</button>
              <button onClick={() => scrollTo("menu")} className="text-left text-gold hover:text-white transition-colors duration-200 font-medium py-2">Menu</button>
              <button onClick={() => scrollTo("about")} className="text-left text-gold hover:text-white transition-colors duration-200 font-medium py-2">About</button>
              <button onClick={() => scrollTo("gallery")} className="text-left text-gold hover:text-white transition-colors duration-200 font-medium py-2">Gallery</button>
              <button onClick={() => scrollTo("contact")} className="text-left text-gold hover:text-white transition-colors duration-200 font-medium py-2">Contact</button>
              <a
                href="https://maps.google.com/?q=Desi+Tadka"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-gold px-3 py-2 rounded-full text-gold hover:bg-gold hover:text-black transition-all duration-200 w-max"
              >
                📍 Location
              </a>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
