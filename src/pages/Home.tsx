import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section className="mb-8 bg-gradient-to-tr from-purple-200 to-blue-200 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold">Discover Creative Pens</h1>
          <p className="mt-3 text-lg text-gray-700">From sketching to note-taking—explore your style.</p>
          <Link to="/collections/pens" className="inline-block mt-6 px-6 py-3 rounded-full bg-purple-600 text-white">Shop Pens</Link>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-4">Why Original Pens?</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border p-4">Smooth inks & reliable tips</div>
          <div className="rounded-2xl border p-4">Curated for students & artists</div>
          <div className="rounded-2xl border p-4">Friendly prices, fast shipping</div>
        </div>
      </section>
    </main>
  );
}
