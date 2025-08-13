import { Link } from "react-router-dom";

export default function ProductCard({ item }: any) {
  const out = item.stock <= 0;
  return (
    <div className="rounded-2xl border p-4 hover:shadow transition">
      <Link to={`/product/${item.slug}`}>
        <div className="aspect-square rounded-xl bg-gray-100 grid place-items-center text-gray-400">Image</div>
        <div className="mt-3 font-semibold">{item.name}</div>
      </Link>
      <div className="flex items-center gap-2 mt-1">
        <div className="text-blue-700 font-bold">₹{item.price}</div>
        <div className="text-xs line-through text-gray-400">₹{item.mrp}</div>
      </div>
      <div className="text-sm text-gray-600">{item.rating} ⭐ ({item.reviews})</div>
      <button
        className={`mt-3 w-full py-2 rounded-xl text-white ${out ? "bg-gray-400 cursor-not-allowed" : "bg-gray-900"}`}
        disabled={out}
        onClick={()=>{
          const cart = JSON.parse(localStorage.getItem("cart")||"[]");
          cart.push({slug:item.slug, qty:1});
          localStorage.setItem("cart", JSON.stringify(cart));
          alert(out ? "Out of stock" : "Added to cart");
        }}
      >
        {out ? "Out of Stock" : "Add to Cart"}
      </button>
    </div>
  );
}
