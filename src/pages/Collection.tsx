import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";

export default function Collection() {
  const [items, setItems] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const [query, setQuery] = useState<Record<string, string>>({});

  const load = async (p = 1, q: Record<string, string> = query) => {
    const params = new URLSearchParams({ page: String(p), limit: "9", sort: q.sort || "rating_desc" });
    if (q.search) params.set("search", q.search);
    if (q.category) params.set("category", q.category);
    if (q.brand) params.set("brand", q.brand);
    if (q.min) params.set("min", q.min);
    if (q.max) params.set("max", q.max);

    const res = await axios.get("http://localhost:4000/api/products", { params });
    setItems(res.data.items);
    setTotal(res.data.total);
    setPage(res.data.page);
  };

  useEffect(()=>{ load(1); }, []);

  const pages = Math.ceil(total / 9);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Pens</h1>
        <div className="text-sm text-gray-600">{total} items</div>
      </div>

      <Filters onChange={(q)=> { setQuery(q); load(1, q); }} />

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mt-6">
        {items.map(item => <ProductCard key={item.id} item={item} />)}
      </div>

      <div className="flex gap-2 mt-8 justify-center">
        {Array.from({length: pages}, (_,i)=> i+1).map(n => (
          <button key={n}
            onClick={()=> load(n)}
            className={`px-3 py-1 rounded-lg border ${n===page ? "bg-gray-900 text-white" : ""}`}>
            {n}
          </button>
        ))}
      </div>
    </main>
  );
}
