import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home", icon: "🏠" },
  { path: "/timeline", label: "Timeline", icon: "📅" },
  { path: "/stats", label: "Stats", icon: "📊" }
];

export default function Navbar() {
  const activeStyle = ({ isActive }) => 
    isActive 
      ? "text-green-700 font-bold flex items-center gap-1 border-b-2 border-green-700 pb-1" 
      : "text-gray-600 flex items-center gap-1 hover:text-green-600 transition";

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🤝</span>
        <h1 className="text-2xl font-bold text-green-700">KeenKeeper</h1>
      </div>
      <div className="flex gap-6">
        {navItems.map(item => (
          <NavLink 
            key={item.path}
            to={item.path} 
            className={navItems => activeStyle(navItems)}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}