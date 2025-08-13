import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-extrabold text-xl">Original Pens</Link>
        <div className="flex items-center gap-4 text-sm">
          <NavLink to="/collections/pens" className={({isActive})=> isActive ? "font-semibold" : ""}>Pens</NavLink>
          <NavLink to="/brands" className={({isActive})=> isActive ? "font-semibold" : ""}>Brands</NavLink>
          <NavLink to="/contact" className={({isActive})=> isActive ? "font-semibold" : ""}>Contact</NavLink>
          <NavLink to="/cart" className={({isActive})=> isActive ? "font-semibold" : ""}>Cart</NavLink>
        </div>
      </div>
    </nav>
  );
}
