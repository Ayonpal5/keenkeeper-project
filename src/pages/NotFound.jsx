import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const nav = useNavigate();

  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="text-7xl md:text-8xl mb-6 animate-bounce">😕</div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-3 font-semibold">Page Not Found</p>
        <p className="text-gray-500 mb-8 text-base md:text-lg">
          Sorry, the page you're looking for doesn't exist. It seems like this friendship journey took an unexpected turn!
        </p>
        <button 
          onClick={() => nav("/")}
          className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold py-3 px-8 rounded-lg transition shadow-lg hover:shadow-xl inline-flex items-center gap-2"
        >
          <span>🏠</span> Back to Home
        </button>
      </div>
    </main>
  );
}
