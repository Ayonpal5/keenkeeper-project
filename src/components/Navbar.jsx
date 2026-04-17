import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home", icon: "🏠" },
  { path: "/timeline", label: "Timeline", icon: "📅" },
  { path: "/stats", label: "Stats", icon: "📊" }
];

export default function Navbar() {
  const activeStyle = ({ isActive }) => 
    isActive 
      ? "text-green-700 font-bold flex items-center gap-1 border-b-2 border-green-700 pb-1 transition-colors duration-300" 
      : "text-gray-600 flex items-center gap-1 hover:text-green-600 transition-colors duration-300";

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
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
            <span className="text-lg">{item.icon}</span>
            <span className="hidden sm:inline">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}