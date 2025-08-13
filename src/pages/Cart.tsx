import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(()=>{
    const cart = JSON.parse(localStorage.getItem("cart")||"[]");
    setItems(cart);
  },[]);

  const remove = (i:number)=>{
    const cart = JSON.parse(localStorage.getItem("cart")||"[]");
    cart.splice(i,1);
    localStorage.setItem("cart", JSON.stringify(cart));
    setItems(cart);
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {items.length === 0 ? (
        <div>Your cart is empty. <Link to="/collections/pens" className="underline">Shop pens</Link></div>
      ) : (
        <div className="space-y-3">
          {items.map((it, i)=> (
            <div key={i} className="border rounded-xl p-3 flex items-center justify-between">
              <div>{it.slug}</div>
              <div className="flex items-center gap-2">
                <div>Qty: {it.qty}</div>
                <button className="px-3 py-1 rounded-lg border" onClick={()=>remove(i)}>Remove</button>
              </div>
            </div>
          ))}
          <Link to="/checkout" className="inline-block mt-4 px-6 py-3 rounded-xl bg-blue-600 text-white">Proceed to Checkout</Link>
        </div>
      )}
    </main>
  );
}
