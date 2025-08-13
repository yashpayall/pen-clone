import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-3 gap-6 text-sm text-gray-600">
        <div>
          <div className="font-semibold mb-2">Original Pens</div>
          <p>Fresh stationery at friendly prices. All content is original.</p>
        </div>
        <div className="space-y-1">
          <Link to="/policy/shipping" className="hover:underline">Shipping Policy</Link><br/>
          <Link to="/policy/returns" className="hover:underline">Returns Policy</Link><br/>
          <Link to="/policy/privacy" className="hover:underline">Privacy Policy</Link>
        </div>
        <div>
          <div>© {new Date().getFullYear()} Original Pens — All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
