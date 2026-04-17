import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
import data from "../data/friends.json";

const COLORS = ["#3b82f6", "#10b981", "#a855f7"];

export default function Stats() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const timeline = JSON.parse(localStorage.getItem("timeline")) || [];
      setEntries(timeline);
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const callCount = entries.filter(e => e.type === "Call").length;
  const textCount = entries.filter(e => e.type === "Text").length;
  const videoCount = entries.filter(e => e.type === "Video").length;

  const chartData = [
    { name: "Calls", value: callCount, icon: "📞" },
    { name: "Texts", value: textCount, icon: "💬" },
    { name: "Videos", value: videoCount, icon: "📹" }
  ];

  const totalInteractions = callCount + textCount + videoCount;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin text-6xl">⏳</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Friendship Analytics</h1>
        <p className="text-gray-600 mb-8">Track your interaction patterns with friends</p>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10">
          <div className="bg-white rounded-lg shadow p-4 md:p-6 text-center hover:shadow-lg transition">
            <p className="text-3xl md:text-4xl font-bold text-gray-800">{totalInteractions}</p>
            <p className="text-gray-600 mt-2 text-sm md:text-base">Total Interactions</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 md:p-6 text-center border-b-4 border-blue-500 hover:shadow-lg transition">
            <p className="text-3xl md:text-4xl font-bold text-blue-600">{callCount}</p>
            <p className="text-gray-600 mt-2 text-sm md:text-base">Calls</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 md:p-6 text-center border-b-4 border-green-500 hover:shadow-lg transition">
            <p className="text-3xl md:text-4xl font-bold text-green-600">{textCount}</p>
            <p className="text-gray-600 mt-2 text-sm md:text-base">Texts</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 md:p-6 text-center border-b-4 border-purple-500 hover:shadow-lg transition">
            <p className="text-3xl md:text-4xl font-bold text-purple-600">{videoCount}</p>
            <p className="text-gray-600 mt-2 text-sm md:text-base">Videos</p>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-lg shadow p-6 md:p-8 mb-10">
          {totalInteractions === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No interactions recorded yet</p>
              <p className="text-gray-500 mt-2">Start logging interactions to see your friendship analytics!</p>
            </div>
          ) : (
            <div className="w-full h-96 md:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value} interactions`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* Friend Stats */}
        <div className="bg-white rounded-lg shadow p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6">Friend Overview</h2>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {data.map(friend => {
              const friendInteractions = entries.filter(e => e.friendId === friend.id);
              return (
                <div key={friend.id} className="flex items-center justify-between p-4 border-b hover:bg-gray-50 transition">
                  <div className="flex items-center gap-3">
                    <img 
                      src={friend.picture} 
                      alt={friend.name}
                      className="w-10 h-10 rounded-full object-cover border border-gray-200"
                    />
                    <div>
                      <p className="font-semibold text-sm md:text-base">{friend.name}</p>
                      <p className="text-xs md:text-sm text-gray-600">{friend.days_since_contact} days since contact</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-800 text-lg">{friendInteractions.length}</p>
                    <p className="text-xs text-gray-600">interactions</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
