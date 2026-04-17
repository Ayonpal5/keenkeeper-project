import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const nav = useNavigate();

  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">😕</div>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-2">Page Not Found</p>
        <p className="text-gray-500 mb-8">
          Sorry, the page you're looking for doesn't exist. Let's get you back on track!
        </p>
        <button 
          onClick={() => nav("/")}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition inline-flex items-center gap-2"
        >
          🏠 Back to Home
        </button>
      </div>
    </main>
  );
}
