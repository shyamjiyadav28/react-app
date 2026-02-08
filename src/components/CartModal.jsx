export default function CartModal({
  cart,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
  totalPrice,
  onCheckout,
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-center p-5 sm:p-6 border-b border-gray-100 bg-gradient-to-r from-emerald-50 to-white">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Your Cart</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg">
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="max-h-[50vh] overflow-y-auto">
          {cart.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-500 text-lg">Your cart is empty.</p>
              <p className="text-gray-400 text-sm mt-2">Add items to get started!</p>
            </div>
          ) : (
            <div className="space-y-4 p-5 sm:p-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 items-start sm:items-center border-b border-gray-100 pb-4 last:border-0">
                  {/* Image */}
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0 shadow-sm"
                    />
                  ) : (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex-shrink-0 shadow-sm bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                      <p className="text-xs text-orange-600 font-semibold">Photo TBA</p>
                    </div>
                  )}

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{item.name}</p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">₹{item.price} each</p>
                    
                    {/* Quantity Controls */}
                    <div className="mt-3 inline-flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                      <button
                        onClick={() => onDecrease(item.id)}
                        className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white rounded text-gray-700 hover:bg-gray-200 transition-colors font-semibold"
                        aria-label={`Decrease ${item.name}`}
                      >
                        −
                      </button>

                      <span className="w-6 text-center font-semibold text-gray-900">{item.qty}</span>

                      <button
                        onClick={() => onIncrease(item.id)}
                        className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white rounded text-gray-700 hover:bg-gray-200 transition-colors font-semibold"
                        aria-label={`Increase ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Price & Remove */}
                  <div className="text-right flex flex-col items-end gap-2">
                    <div className="font-bold text-gray-900">₹{item.price * item.qty}</div>
                    <button 
                      onClick={() => onRemove(item.id)} 
                      className="text-red-500 hover:text-red-700 text-xs font-semibold transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary & Actions */}
        {cart.length > 0 && (
          <div className="p-5 sm:p-6 bg-gray-50 border-t border-gray-100">
            {/* Summary */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-xs sm:text-sm text-gray-500">Subtotal</div>
                <div className="text-lg sm:text-xl font-bold text-gray-900">₹{totalPrice}</div>
              </div>

              <div className="text-right">
                <div className="text-xs sm:text-sm text-gray-500">Items</div>
                <div className="text-lg sm:text-xl font-bold text-gray-900">{cart.reduce((s, i) => s + i.qty, 0)}</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => onCheckout && onCheckout()}
                className="btn-primary"
              >
                Proceed to Checkout
              </button>

              <button onClick={onClose} className="btn-secondary">
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
