export default function CartModal({
  cart,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
  totalPrice,
}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-2xl p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button onClick={onClose} className="text-gray-500 text-xl">
            ✕
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-4 max-h-[300px] overflow-y-auto">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    ₹{item.price} × {item.qty}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onDecrease(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    −
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => onIncrease(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>

                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-red-500 ml-2"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>

          <button
            className="w-full mt-4 bg-emerald-500 text-white py-3 rounded-full hover:bg-emerald-600"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
