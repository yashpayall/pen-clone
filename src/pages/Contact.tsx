import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [ok, setOk] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries());
    await axios.post("http://localhost:4000/api/contact", data);
    setOk(true);
    form.reset();
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={submit} className="grid gap-3 max-w-md">
        <input name="name" placeholder="Your name" className="border rounded-xl px-3 py-2" required />
        <input name="email" placeholder="Email" type="email" className="border rounded-xl px-3 py-2" required />
        <textarea name="message" placeholder="Message" className="border rounded-xl px-3 py-2" rows={4} />
        <button className="rounded-xl bg-blue-600 text-white py-2">Send</button>
      </form>
      {ok && <div className="mt-4 text-green-700">Thanks! We'll reach out soon.</div>}
    </main>
  );
}
