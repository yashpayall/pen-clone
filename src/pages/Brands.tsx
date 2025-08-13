import { useEffect, useState } from "react";
import axios from "axios";

export default function Brands() {
  const [brands, setBrands] = useState<any[]>([]);
  useEffect(()=>{
    axios.get("http://localhost:4000/api/brands").then(r=> setBrands(r.data));
  },[]);
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Featured Makers</h1>
      <div className="flex gap-6 overflow-x-auto py-2">
        {brands.map(b => (
          <div key={b.id} className="min-w-[120px] text-center">
            <div className="h-16 w-16 mx-auto bg-gray-200 rounded-full grid place-items-center text-xl">{b.name[0]}</div>
            <div className="mt-2">{b.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
