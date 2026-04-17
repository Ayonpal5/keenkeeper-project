export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-700 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-3xl">🤝</span>
              <h3 className="text-2xl font-bold">KeenKeeper</h3>
            </div>
            <p className="text-green-100">
              Stay connected with the people who matter most. Never let a friendship fade away.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-green-100">
              <li><a href="/" className="hover:text-white transition duration-200">🏠 Home</a></li>
              <li><a href="/timeline" className="hover:text-white transition duration-200">📅 Timeline</a></li>
              <li><a href="/stats" className="hover:text-white transition duration-200">📊 Stats</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Connect</h4>
            <div className="flex gap-4">
              <a href="#" title="GitHub" className="text-2xl hover:text-green-200 transition duration-200 transform hover:scale-110">🐙</a>
              <a href="#" title="Twitter" className="text-2xl hover:text-green-200 transition duration-200 transform hover:scale-110">🐦</a>
              <a href="#" title="Email" className="text-2xl hover:text-green-200 transition duration-200 transform hover:scale-110">📧</a>
            </div>
          </div>
        </div>

        <div className="border-t border-green-600 pt-6 text-center text-green-100">
          <p>&copy; {currentYear} <span className="font-bold">KeenKeeper</span>. Friends to keep close in your life. ❤️</p>
          <p className="text-xs mt-2">Build with React, Tailwind CSS, and Recharts</p>
        </div>
      </div>
    </footer>
  );
}