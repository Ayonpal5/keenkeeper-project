import { useState, useEffect } from "react";

const typeIcons = {
  Call: "📞",
  Text: "💬",
  Video: "📹"
};

const typeColors = {
  Call: "border-blue-500 bg-blue-50",
  Text: "border-green-500 bg-green-50",
  Video: "border-purple-500 bg-purple-50"
};

export default function Timeline() {
  const [entries, setEntries] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const timeline = JSON.parse(localStorage.getItem("timeline")) || [];
      // Sort by newest first
      timeline.sort((a, b) => new Date(b.fullDate || b.date) - new Date(a.fullDate || a.date));
      setEntries(timeline);
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const filteredEntries = filter === "all" 
    ? entries 
    : entries.filter(e => e.type === filter);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin text-4xl">⏳</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Timeline</h1>
        <p className="text-gray-600 mb-6">Track all your interactions with friends</p>

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-8 flex-wrap">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filter === "all"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("Call")}
            className={`px-4 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${
              filter === "Call"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 border border-blue-300 hover:bg-blue-50"
            }`}
          >
            <span>📞</span> Calls
          </button>
          <button
            onClick={() => setFilter("Text")}
            className={`px-4 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${
              filter === "Text"
                ? "bg-green-600 text-white"
                : "bg-white text-green-600 border border-green-300 hover:bg-green-50"
            }`}
          >
            <span>💬</span> Texts
          </button>
          <button
            onClick={() => setFilter("Video")}
            className={`px-4 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${
              filter === "Video"
                ? "bg-purple-600 text-white"
                : "bg-white text-purple-600 border border-purple-300 hover:bg-purple-50"
            }`}
          >
            <span>📹</span> Videos
          </button>
        </div>

        {/* Timeline Entries */}
        <div className="space-y-4">
          {filteredEntries.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <p className="text-gray-600 text-lg">No interactions recorded yet</p>
              <p className="text-gray-500 mt-2">Start logging interactions with your friends from their detail page!</p>
            </div>
          ) : (
            filteredEntries.map((entry, i) => (
              <div key={i} className={`bg-white rounded-lg shadow p-6 border-l-4 ${typeColors[entry.type]}`}>
                <div className="flex items-start gap-4">
                  <div className="text-3xl mt-1">{typeIcons[entry.type]}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800">{entry.title}</h3>
                    <p className="text-gray-600 mt-1">
                      📅 {new Date(entry.fullDate || entry.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                      })}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded-full capitalize">
                      {entry.type}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Summary Stats */}
        {entries.length > 0 && (
          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <p className="text-2xl font-bold text-gray-800">{entries.filter(e => e.type === "Call").length}</p>
              <p className="text-sm text-gray-600 mt-1">Calls</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <p className="text-2xl font-bold text-gray-800">{entries.filter(e => e.type === "Text").length}</p>
              <p className="text-sm text-gray-600 mt-1">Texts</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <p className="text-2xl font-bold text-gray-800">{entries.filter(e => e.type === "Video").length}</p>
              <p className="text-sm text-gray-600 mt-1">Videos</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}