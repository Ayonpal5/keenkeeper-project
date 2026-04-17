export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-green-800 text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🤝</span>
              <h3 className="text-2xl font-bold">KeenKeeper</h3>
            </div>
            <p className="text-green-100">
              Stay connected with the people who matter most.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-green-100">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/timeline" className="hover:text-white transition">Timeline</a></li>
              <li><a href="/stats" className="hover:text-white transition">Stats</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold mb-3">Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="text-xl hover:text-green-200 transition">🐙</a>
              <a href="#" className="text-xl hover:text-green-200 transition">🐦</a>
              <a href="#" className="text-xl hover:text-green-200 transition">📧</a>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 pt-6 text-center text-green-100">
          <p>&copy; {currentYear} KeenKeeper. Friends to keep close in your life.</p>
        </div>
      </div>
    </footer>
  );
}