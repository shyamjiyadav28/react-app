import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function Checkout({ cart, totalPrice, onClose, onPlaceOrder }) {
  const [form, setForm] = useState({ name: "", phone: "", address: "", payment: "COD" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));

    const order = {
      id: Date.now(),
      customer: form,
      items: cart,
      total: totalPrice,
      createdAt: new Date().toISOString(),
    };

    setLoading(false);
    setSuccess(order);
    onPlaceOrder && onPlaceOrder(order);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-emerald-50 to-white border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Checkout</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg">
            ✕
          </button>
        </div>

        {/* Success State */}
        {success ? (
          <div className="p-8 sm:p-12 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-emerald-500" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Order Placed!</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-2">Thank you, <span className="font-semibold">{success.customer.name}</span>.</p>
            <p className="text-gray-500 text-sm mb-6">Order #{success.id} is on its way to you.</p>
            <button onClick={onClose} className="btn-primary">Close</button>
          </div>
        ) : (
          <div className="overflow-y-auto max-h-[70vh] sm:max-h-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 sm:p-6">
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
                    placeholder="John Doe"
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input 
                    name="phone" 
                    value={form.phone} 
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" 
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Delivery Address</label>
                  <textarea 
                    name="address" 
                    value={form.address} 
                    onChange={handleChange} 
                    rows={3}
                    placeholder="Enter your complete delivery address..."
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition resize-none" 
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Payment Method</label>
                  <select 
                    name="payment" 
                    value={form.payment} 
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  >
                    <option value="COD">Cash on Delivery</option>
                    <option value="UPI">UPI</option>
                    <option value="CARD">Card</option>
                  </select>
                </div>

                <div className="md:col-span-2 flex gap-3 pt-4">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Processing..." : `Place Order — ₹${totalPrice}`}
                  </button>
                  <button 
                    type="button" 
                    onClick={onClose}
                    className="flex-1 btn-secondary"
                  >
                    Cancel
                  </button>
                </div>
              </form>

              {/* Order Summary */}
              <div className="md:col-span-1">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h4>
                <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 space-y-4 max-h-[45vh] overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-start gap-3 pb-4 border-b border-gray-200 last:border-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-gray-900 text-sm line-clamp-1">{item.name}</div>
                        <div className="text-xs text-gray-500 mt-1">Qty × {item.qty}</div>
                      </div>
                      <div className="font-semibold text-gray-900 text-sm whitespace-nowrap">₹{item.price * item.qty}</div>
                    </div>
                  ))}

                  <div className="border-t-2 border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-900">Total</span>
                      <span className="text-2xl font-bold text-emerald-600">₹{totalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
