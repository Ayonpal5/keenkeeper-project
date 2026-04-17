import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/friends.json";
import FriendCard from "../components/FriendCard";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = {
    total: data.length,
    overdue: data.filter(f => f.status === "overdue").length,
    almostDue: data.filter(f => f.status === "almost due").length,
    onTrack: data.filter(f => f.status === "on-track").length
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin text-4xl">⏳</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Friends to Keep Close in Your Life</h1>
          <p className="text-lg text-green-100 mb-6">
            Stay connected with the people who matter most. Track when you last connected and never let a friendship fade.
          </p>
          <button 
            onClick={() => nav("/timeline")}
            className="bg-white text-green-700 font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition flex items-center gap-2"
          >
            <span>➕</span> View Timeline
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-white p-6 rounded-lg shadow text-center border-l-4 border-blue-500">
            <h3 className="text-4xl font-bold text-blue-600">{stats.total}</h3>
            <p className="text-gray-600 mt-2">Total Friends</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center border-l-4 border-red-500">
            <h3 className="text-4xl font-bold text-red-600">{stats.overdue}</h3>
            <p className="text-gray-600 mt-2">Overdue</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center border-l-4 border-yellow-500">
            <h3 className="text-4xl font-bold text-yellow-600">{stats.almostDue}</h3>
            <p className="text-gray-600 mt-2">Almost Due</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center border-l-4 border-green-500">
            <h3 className="text-4xl font-bold text-green-600">{stats.onTrack}</h3>
            <p className="text-gray-600 mt-2">On Track</p>
          </div>
        </div>

        {/* Friends Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Your Friends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map(friend => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}