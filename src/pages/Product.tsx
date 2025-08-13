import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Product() {
  const { slug } = useParams();
  const [item, setItem] = useState<any | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/products/${slug}`)
      .then(r => setItem(r.data))
      .catch(() => setItem(null));
  }, [slug]);

  if (!item) return <div className="max-w-6xl mx-auto px-4 py-8">Loading...</div>;

  const out = item.stock <= 0;

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 grid gap-8 md:grid-cols-2">
      <div className="aspect-square rounded-2xl bg-gray-100 grid place-items-center text-gray-400">Image</div>
      <div>
        <h1 className="text-3xl font-extrabold">{item.name}</h1>
        <div className="mt-1 text-sm text-gray-600">{item.brand} • {item.category}</div>
        <div className="mt-3 flex items-center gap-2">
          <div className="text-2xl font-bold text-blue-700">₹{item.price}</div>
          <div className="text-sm line-through text-gray-400">₹{item.mrp}</div>
        </div>
        <div className="mt-1 text-sm text-gray-600">{item.rating} ⭐ ({item.reviews} reviews)</div>
        <p className="mt-4 text-gray-700">{item.description}</p>

        <button
          className={`mt-6 px-6 py-3 rounded-xl text-white ${out ? "bg-gray-400 cursor-not-allowed" : "bg-gray-900"}`}
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
    </main>
  );
}
