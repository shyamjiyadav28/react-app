import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import FeaturedMenu from "./components/FeaturedMenu";
import PopularDishes from "./components/PopularDishes";
import CartModal from "./components/CartModal";
import Checkout from "./components/Checkout";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import { foodData } from "./data/foodData";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "" });

  // 🔄 LOAD CART FROM LOCALSTORAGE
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // 💾 SAVE CART TO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // FILTER MENU
  const filteredItems = foodData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description &&
        item.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const popularItems = foodData.filter(
    (item) => item.popular
  );

  // ADD TO CART
  const handleAddToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setToast({ show: true, message: `${item.name} added to cart! ✓` });
  };

  // CART CONTROLS
  const increaseQty = (id) =>
    setCart((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, qty: i.qty + 1 } : i
      )
    );

  const decreaseQty = (id) =>
    setCart((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0)
    );

  const removeItem = (id) =>
    setCart((prev) => prev.filter((i) => i.id !== id));

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce(
    (s, i) => s + i.price * i.qty,
    0
  );

  const [showCheckout, setShowCheckout] = useState(false);

  const handlePlaceOrder = (order) => {
    // for now: clear cart and close checkout
    setCart([]);
    setShowCheckout(false);
    setShowCart(false);
    // optionally: could persist order or call an API
    console.log("Order placed:", order);
  };

  return (
    <>
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setShowCart(true)}
      />

      <Hero />

      <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />

      <Categories
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <FeaturedMenu
        items={filteredItems}
        onAdd={handleAddToCart}
      />

      <PopularDishes
        items={popularItems}
        onAdd={handleAddToCart}
      />

      {/* NEW SECTIONS (NO LOGIC TOUCHED) */}
      <About />
      <Gallery />
      <Testimonials />
      <ContactCTA />

      {showCart && (
        <CartModal
          cart={cart}
          totalPrice={totalPrice}
          onClose={() => setShowCart(false)}
          onIncrease={increaseQty}
          onDecrease={decreaseQty}
          onRemove={removeItem}
          onCheckout={() => {
            setShowCart(false);
            setShowCheckout(true);
          }}
        />
      )}

      {showCheckout && (
        <Checkout
          cart={cart}
          totalPrice={totalPrice}
          onClose={() => setShowCheckout(false)}
          onPlaceOrder={handlePlaceOrder}
        />
      )}
      <WhatsAppButton />

      <Toast 
        show={toast.show} 
        message={toast.message} 
        onClose={() => setToast({ show: false, message: "" })}
      />

      <Footer />
    </>
  );
}
