import { useState } from "react";

export default function Filters({ onChange }: { onChange: (q: Record<string, string>)=>void }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [sort, setSort] = useState("rating_desc");

  const apply = ()=> onChange({ search, category, brand, min, max, sort });

  return (
    <div className="grid sm:grid-cols-6 gap-2">
      <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search" className="border rounded-xl px-3 py-2 sm:col-span-2"/>
      <input value={category} onChange={e=>setCategory(e.target.value)} placeholder="Category (e.g. Gel Pens)" className="border rounded-xl px-3 py-2"/>
      <input value={brand} onChange={e=>setBrand(e.target.value)} placeholder="Brand (e.g. Inklore)" className="border rounded-xl px-3 py-2"/>
      <input value={min} onChange={e=>setMin(e.target.value)} placeholder="Min ₹" className="border rounded-xl px-3 py-2"/>
      <input value={max} onChange={e=>setMax(e.target.value)} placeholder="Max ₹" className="border rounded-xl px-3 py-2"/>
      <select value={sort} onChange={e=>setSort(e.target.value)} className="border rounded-xl px-3 py-2">
        <option value="rating_desc">Top Rated</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
      </select>
      <button onClick={apply} className="sm:col-span-6 mt-2 rounded-xl bg-blue-600 text-white py-2">Apply</button>
    </div>
  );
}
