import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedMenu from "./components/FeaturedMenu";
import PopularDishes from "./components/PopularDishes";
import CartModal from "./components/CartModal";
import About from "./components/About";
import Gallery from "./components/Gallery";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import { foodData } from "./data/foodData";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

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
  const filteredItems =
    selectedCategory === "All"
      ? foodData
      : foodData.filter(
          (item) => item.category === selectedCategory
        );

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

  return (
    <>
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setShowCart(true)}
      />

      <Hero />

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
      <ContactCTA />

      {showCart && (
        <CartModal
          cart={cart}
          totalPrice={totalPrice}
          onClose={() => setShowCart(false)}
          onIncrease={increaseQty}
          onDecrease={decreaseQty}
          onRemove={removeItem}
        />
      )}
      <WhatsAppButton />


      <Footer />
    </>
  );
}
