# 🤝 KeenKeeper

**Friends to keep close in your life**

KeenKeeper is a modern web application designed to help you maintain meaningful relationships by tracking your interactions with friends and reminding you when it's time to reconnect.

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Responsive Design](#responsive-design)

## ✨ Features

### Core Features
- **📊 Friendship Dashboard** - View all your friends at a glance with their status and contact frequency
- **👥 Friend Profiles** - Detailed information about each friend with bio, email, and tags
- **📞 Interaction Tracking** - Log calls, texts, and video chats with your friends
- **📅 Timeline View** - See a chronological history of all your interactions
- **📈 Analytics** - Visual representation of your interaction patterns with pie charts
- **🔔 Contact Reminders** - Know when you should reconnect with each friend
- **📱 Fully Responsive** - Works seamlessly on mobile, tablet, and desktop screens
- **⚡ Toast Notifications** - Get instant feedback when logging interactions

### Advanced Features
- **🔍 Timeline Filters** - Filter interactions by type (Call, Text, Video)
- **📊 Pie Chart Analytics** - Visualize your interaction distribution using Recharts
- **🎯 Relationship Goals** - Set contact frequency goals for each friend
- **🏷️ Friend Tags** - Organize friends with custom tags (work, college, close friend, etc.)
- **🎨 Status Indicators** - Visual indicators showing if friends are overdue, almost due, or on-track for contact
- **🌙 Clean Dark Mode Support** - Tailwind CSS for beautiful styling

## 🛠️ Technologies Used

| Technology | Purpose |
|-----------|---------|
| **React.js** | UI Framework & Component Library |
| **React Router DOM** | Client-side Routing & Navigation |
| **Tailwind CSS** | Responsive Styling & Design System |
| **Recharts** | Data Visualization & Charts |
| **React Hot Toast** | Toast Notifications & Feedback |
| **Vite** | Fast Build Tool & Development Server |

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/keenkeeper.git
   cd keenkeeper
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🚀 Usage

### Main Workflows

1. **Home Page**
   - View all friends in a 4-column grid layout
   - See summary statistics at the top
   - Click on any friend card to view their details

2. **Friend Details**
   - View complete friend information and bio
   - See key stats: days since contact, contact goal, next due date
   - Log interactions: Call, Text, or Video
   - Manage friend (Snooze, Archive, Delete buttons)

3. **Timeline Page**
   - View history of all interactions
   - Filter by interaction type
   - See interaction statistics
   - Entries are sorted by newest first

4. **Stats/Analytics Page**
   - View overall interaction statistics
   - See pie chart breakdown of interaction types
   - Check individual friend interaction counts
   - Track total interactions

## 📂 Project Structure

```
keenkeeper-project/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with icons
│   │   ├── FriendCard.jsx      # Friend display component
│   │   └── Footer.jsx          # App footer
│   ├── pages/
│   │   ├── Home.jsx            # Dashboard & friend list
│   │   ├── FriendDetails.jsx   # Detailed friend view
│   │   ├── Timeline.jsx        # Interaction history
│   │   ├── Stats.jsx           # Analytics & charts
│   │   └── NotFound.jsx        # 404 page
│   ├── data/
│   │   └── friends.json        # Friend data (10 sample friends)
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # React entry point
│   └── index.css              # Tailwind CSS styles
├── index.html                 # HTML entry point
├── package.json              # Dependencies & scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js         # Tailwind configuration
└── README.md                 # This file
```

## 🎯 Key Features Explained

### 1. **Friendship Analytics Dashboard**
- Displays pie chart showing distribution of Call, Text, and Video interactions
- Shows total interaction count and breakdown by type
- Lists all friends with their interaction counts

### 2. **Responsive Design**
- **Mobile (< 768px)**: Single column layout with full-width cards
- **Tablet (768px - 1024px)**: 2-column grid for friend cards
- **Desktop (> 1024px)**: 4-column grid for optimal viewing
- All components adapt seamlessly to screen size

### 3. **Status Indicators**
- 🔴 **Overdue** (red): Contact is overdue
- 🟡 **Almost Due** (yellow): Contact is coming due soon
- 🟢 **On-Track** (green): Contact is current

### 4. **Data Persistence**
- Interaction timeline stored in browser localStorage
- Persists across browser sessions
- No backend required for demo purposes

### 5. **Interaction Logging**
When you click Call, Text, or Video:
- A timeline entry is automatically created
- Toast notification confirms the action
- Entry appears immediately in Timeline page
- Tracked with date and interaction type

## 📱 Responsive Design

All pages are fully responsive:

- **Friend Cards**: Adapt from 1 column (mobile) → 4 columns (desktop)
- **Layout**: Two-column FriendDetails page becomes single column on mobile
- **Navigation**: Sticky navbar with icons for easy access
- **Buttons**: Touch-friendly sizing on mobile devices
- **Charts**: Recharts automatically scale to container width

### Tested Screen Sizes
- 📱 Mobile: 375px, 425px
- 📱 Tablet: 768px, 1024px
- 🖥️ Desktop: 1280px, 1920px

## 🔄 Git Commits

The project includes 8+ meaningful commits tracking:
- Initial project setup
- Friends data expansion
- Component styling improvements
- Page implementations
- Responsive design additions
- README documentation

## 🌟 Future Enhancements

- User authentication & accounts
- Photo gallery per friend
- Birthday reminders
- Shared memories/notes
- Friend groups & categories
- Export interaction data
- Dark mode theme toggle
- PWA capabilities
- Calendar view of interactions
- Friend recommendation engine

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

---

**Made with ❤️ to help you keep friendships alive** 🤝
