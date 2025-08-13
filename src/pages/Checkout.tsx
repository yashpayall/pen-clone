import { useState } from "react";
import axios from "axios";

export default function Checkout() {
  const [status, setStatus] = useState<string| null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:4000/api/cart/checkout", {});
    setStatus("Order placed! ID: " + res.data.orderId);
    localStorage.removeItem("cart");
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={submit} className="grid gap-3 max-w-md">
        <input placeholder="Full name" className="border rounded-xl px-3 py-2" required />
        <input placeholder="Email" type="email" className="border rounded-xl px-3 py-2" required />
        <input placeholder="Address" className="border rounded-xl px-3 py-2" required />
        <button className="rounded-xl bg-blue-600 text-white py-2">Place Order</button>
      </form>
      {status && <div className="mt-4 text-green-700">{status}</div>}
    </main>
  );
}
