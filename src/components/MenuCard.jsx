export default function MenuCard({ item, onAdd }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800">
          {item.name}
        </h3>

        <div className="flex items-center justify-between mt-3">
          <span className="text-emerald-600 font-semibold">
            ₹{item.price}
          </span>

          <button
            onClick={() => onAdd(item)}
            className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm hover:bg-emerald-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
