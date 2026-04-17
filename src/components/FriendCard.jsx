import { useNavigate } from "react-router-dom";

const statusStyles = {
  overdue: "bg-red-100 text-red-800",
  "almost due": "bg-yellow-100 text-yellow-800",
  "on-track": "bg-green-100 text-green-800"
};

export default function FriendCard({ friend }) {
  const nav = useNavigate();
  
  return (
    <div 
      onClick={() => nav("/friend/" + friend.id)} 
      className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer border border-gray-200"
    >
      <img 
        src={friend.picture} 
        alt={friend.name}
        className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
      />
      <h2 className="text-lg font-bold text-center mb-2">{friend.name}</h2>
      
      <div className="flex justify-center mb-2">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[friend.status]}`}>
          {friend.status}
        </span>
      </div>
      
      <p className="text-sm text-gray-600 text-center mb-3">
        {friend.days_since_contact} days since contact
      </p>
      
      <div className="flex flex-wrap gap-1 justify-center mb-3">
        {friend.tags.map((tag, i) => (
          <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}