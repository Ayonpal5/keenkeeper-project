import { useParams, useNavigate } from "react-router-dom";
import data from "../data/friends.json";
import toast from "react-hot-toast";

const statusStyles = {
  overdue: "bg-red-100 text-red-800",
  "almost due": "bg-yellow-100 text-yellow-800",
  "on-track": "bg-green-100 text-green-800"
};

export default function FriendDetails() {
  const { id } = useParams();
  const nav = useNavigate();
  const friend = data.find(x => x.id == id);

  if (!friend) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <p className="text-xl text-gray-600 mb-4">Friend not found</p>
        <button 
          onClick={() => nav("/")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const addInteraction = (type) => {
    let timeline = JSON.parse(localStorage.getItem("timeline")) || [];
    timeline.push({
      title: `${type} with ${friend.name}`,
      date: new Date().toLocaleDateString(),
      type: type,
      friendId: friend.id,
      fullDate: new Date().toISOString()
    });
    localStorage.setItem("timeline", JSON.stringify(timeline));
    toast.success(`${type} logged! Added to timeline.`);
  };

  const icons = {
    Call: "📞",
    Text: "💬",
    Video: "📹"
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => nav("/")}
          className="mb-6 text-green-700 hover:text-green-600 font-semibold flex items-center gap-1"
        >
          ← Back to Friends
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Friend Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img 
                src={friend.picture} 
                alt={friend.name}
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              />
              <h1 className="text-2xl font-bold text-center mb-2">{friend.name}</h1>
              
              <div className="flex justify-center mb-4">
                <span className={`px-4 py-2 rounded-full font-semibold text-sm ${statusStyles[friend.status]}`}>
                  {friend.status.toUpperCase()}
                </span>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <p className="text-sm text-gray-600 font-semibold mb-2">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {friend.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <div className="mb-6">
                <p className="text-sm text-gray-600 font-semibold mb-2">Bio</p>
                <p className="text-gray-700">{friend.bio}</p>
              </div>

              {/* Email */}
              <div className="mb-6">
                <p className="text-sm text-gray-600 font-semibold mb-2">Email</p>
                <p className="text-blue-600 break-words">{friend.email}</p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 border-t pt-6">
                <button className="w-full bg-blue-50 text-blue-700 py-2 rounded hover:bg-blue-100 transition font-semibold text-sm flex items-center justify-center gap-2">
                  ⏰ Snooze 2 Weeks
                </button>
                <button className="w-full bg-yellow-50 text-yellow-700 py-2 rounded hover:bg-yellow-100 transition font-semibold text-sm flex items-center justify-center gap-2">
                  📦 Archive
                </button>
                <button className="w-full bg-red-50 text-red-700 py-2 rounded hover:bg-red-100 transition font-semibold text-sm flex items-center justify-center gap-2">
                  🗑️ Delete
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <p className="text-3xl font-bold text-gray-800">{friend.days_since_contact}</p>
                <p className="text-sm text-gray-600 mt-2">Days Since Contact</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <p className="text-3xl font-bold text-gray-800">{friend.goal}</p>
                <p className="text-sm text-gray-600 mt-2">Goal (days)</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <p className="text-sm text-gray-600 mb-2">Next Due Date</p>
                <p className="text-lg font-bold text-gray-800">{new Date(friend.next_due_date).toLocaleDateString()}</p>
              </div>
            </div>

            {/* Relationship Goal Card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Relationship Goal</h3>
                <button className="text-green-600 hover:text-green-700 font-semibold">✏️ Edit</button>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">
                  Contact <span className="font-bold">{friend.name}</span> every <span className="font-bold">{friend.goal} days</span>
                </p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-green-600 h-3 rounded-full" 
                    style={{ width: `${Math.min(100, (friend.goal - friend.days_since_contact) / friend.goal * 100)}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">
                  {Math.max(0, friend.goal - friend.days_since_contact)} days remaining
                </p>
              </div>
            </div>

            {/* Quick Check-In Card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Quick Check-In</h3>
              <p className="text-gray-600 mb-6">Log an interaction with {friend.name}</p>
              <div className="grid grid-cols-3 gap-3">
                <button 
                  onClick={() => addInteraction("Call")}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex flex-col items-center gap-2 transition"
                >
                  <span className="text-2xl">📞</span>
                  <span>Call</span>
                </button>
                <button 
                  onClick={() => addInteraction("Text")}
                  className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold flex flex-col items-center gap-2 transition"
                >
                  <span className="text-2xl">💬</span>
                  <span>Text</span>
                </button>
                <button 
                  onClick={() => addInteraction("Video")}
                  className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold flex flex-col items-center gap-2 transition"
                >
                  <span className="text-2xl">📹</span>
                  <span>Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}