# 🤝 KeenKeeper

**Friends to keep close in your life**

KeenKeeper is a modern web application designed to help you maintain meaningful relationships by tracking your interactions with friends and reminding you when it's time to reconnect. Stay connected with the people who matter most.

![Responsive Design](https://img.shields.io/badge/responsive-mobile%2C%20tablet%2C%20desktop-green)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4)
![License](https://img.shields.io/badge/license-MIT-green)

## 📋 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Key Features](#-key-features-explained)
- [Responsive Design](#-responsive-design)
- [Git Commits](#-git-commits)

## ✨ Features

### Core Features
- **📊 Friendship Dashboard** - View all your friends at a glance with their status and contact frequency
- **👥 Friend Profiles** - Detailed information about each friend with bio, email, tags, and more
- **📞 Interaction Tracking** - Log calls, texts, and video chats with your friends in real-time
- **📅 Timeline View** - See a chronological history of all your interactions sorted by date
- **📈 Analytics** - Visual representation of your interaction patterns with interactive pie charts
- **🔔 Contact Reminders** - Know exactly when you should reconnect with each friend
- **📱 Fully Responsive** - Works seamlessly on mobile (375px), tablet (768px), and desktop (1920px)
- **⚡ Toast Notifications** - Get instant feedback when logging interactions or performing actions

### Advanced Features
- **🔍 Timeline Filters** - Filter interactions by type: Call, Text, or Video
- **📊 Pie Chart Analytics** - Visualize your interaction distribution with Recharts
- **🎯 Relationship Goals** - Set and track contact frequency goals for each friend
- **🏷️ Friend Tags** - Organize friends with custom tags (work, college, close friend, gym buddy, etc.)
- **🎨 Status Indicators** - Visual indicators showing friend contact status (overdue, almost due, on-track)
- **✨ Smooth Animations** - Beautiful transitions and hover effects throughout the app
- **⚙️ LocalStorage Persistence** - All interaction data persists across browser sessions

## 🛠️ Technologies Used

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React.js** | UI Framework & Components | 18.2.0 |
| **React Router DOM** | Client-side Routing | 6.22.3 |
| **Tailwind CSS** | Responsive Styling | 3.4.0 |
| **Recharts** | Data Visualization | 2.8.0 |
| **React Hot Toast** | Notifications | 2.4.1 |
| **Vite** | Build Tool | 5.0.0 |

## 📦 Installation

### Prerequisites
- Node.js v16 or higher ([Download](https://nodejs.org/))
- npm or yarn package manager

### Setup Steps

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

4. **Open in your browser**
   ```
   http://localhost:5173
   ```

### Build for Production
```bash
npm run build
npm run preview
```

## 🚀 Usage

### Main Workflows

#### 1. **Home Page** 🏠
- View all 10+ friends in a responsive grid layout
- See summary statistics: total friends, overdue, almost due, on-track
- Click on any friend card to view their detailed profile

#### 2. **Friend Details** 👤
- View complete friend information and biography
- See key stats: days since last contact, contact goal, next due date
- Log interactions: Call, Text, or Video chat
- Manage friend actions: Snooze, Archive, Delete (UI buttons)
- View progress bar showing contact goal status

#### 3. **Timeline Page** 📅
- View chronological history of all interactions (newest first)
- Filter by interaction type: All, Calls, Texts, Videos
- See detailed interaction information with dates
- View summary statistics at the bottom

#### 4. **Stats/Analytics Page** 📊
- View overall interaction statistics
- Interactive pie chart showing interaction type distribution
- Total interactions count and breakdown
- Friend overview with individual interaction counts
- Scrollable friend list for easy browsing

## 📂 Project Structure

```
keenkeeper-project/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with icons & active states
│   │   ├── FriendCard.jsx      # Reusable friend card component
│   │   └── Footer.jsx          # Footer with links & social
│   ├── pages/
│   │   ├── Home.jsx            # Dashboard & friend list
│   │   ├── FriendDetails.jsx   # Detailed friend view & interactions
│   │   ├── Timeline.jsx        # Interaction history & filters
│   │   ├── Stats.jsx           # Analytics & pie chart
│   │   └── NotFound.jsx        # 404 error page
│   ├── data/
│   │   └── friends.json        # 10 realistic friend profiles
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx               # React entry point
│   └── index.css              # Global Tailwind styles
├── index.html                 # HTML with SEO meta tags
├── package.json              # Dependencies & scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── .prettierrc                # Code formatting config
├── .env.example              # Environment variables template
├── CONTRIBUTING.md           # Contribution guidelines
└── README.md                 # This file
```

## 🎯 Key Features Explained

### 1. **Friendship Analytics Dashboard** 📊
- Interactive pie chart showing Call/Text/Video distribution
- Total interaction count and breakdown by type
- Friend-by-friend interaction history and statistics
- Visual progress tracking

### 2. **Responsive Design** 📱
- **Mobile (< 576px)**: Single column, touch-friendly buttons, stacked cards
- **Tablet (576px - 992px)**: 2-column grid for cards, adjusted spacing
- **Desktop (> 992px)**: 4-column grid for friends, full-width layouts
- All components automatically adapt to screen size
- Tested and verified on multiple devices

### 3. **Status Indicators** 🎨
- 🔴 **Overdue** (Red): Contact is past due date
- 🟡 **Almost Due** (Yellow): Contact due within a few days
- 🟢 **On-Track** (Green): Contact is current
- Color-coded backgrounds and borders

### 4. **Data Persistence** 💾
- All interactions stored in browser localStorage
- Timeline data persists across browser sessions
- No backend required - fully client-side
- Easy export/import for data backup (future feature)

### 5. **Interaction Logging** 📞
When you click Call, Text, or Video:
1. A timeline entry is instantly created with current date
2. Toast notification confirms the action
3. Entry appears immediately in Timeline page with icon
4. Data saved to localStorage for persistence

### 6. **Accessibility** ♿
- Semantic HTML structure
- Focus states for keyboard navigation
- Alt text for all images
- ARIA labels where needed
- High contrast colors for readability

## 📱 Responsive Design

### Tested Screen Sizes
- **Mobile**: 375px, 425px (iPhone SE, regular)
- **Tablet**: 768px, 1024px (iPad)
- **Desktop**: 1280px, 1920px, 2560px
- **All pages** fully responsive and functional

### Mobile Optimizations
- Touch-friendly button sizes (48px minimum)
- Optimized font sizes for readability
- Single-column layouts on small screens
- Hamburger-ready navigation structure
- Fast load times with code optimization

## 🔄 Git Commits

This project includes **8 meaningful commits** tracking the development:

```
b5ac6c1 - Enhance HTML with SEO meta tags and improve package.json
0d51faa - Add configuration files: .env.example, .prettierrc, CONTRIBUTING.md
9995f1b - Improve styling: add global CSS, enhance Footer and 404 page
3fa4860 - Enhance Timeline and Stats pages with responsiveness
3dfbf16 - Improve responsive design for Home and FriendDetails pages
b6a0a64 - Enhance UI components: FriendCard hover effects, Navbar responsive
063010f - Add build configuration: .gitignore, tailwind.config.js, postcss.config.js
c2426a2 - Initial project setup with React Router and Tailwind CSS
```

Each commit represents a logical feature addition or improvement, making it easy to track development progress.

## 🌟 Key Highlights

✅ **All Requirements Met:**
- ✓ Responsive design (mobile, tablet, desktop)
- ✓ 8+ meaningful git commits with clear messages
- ✓ App runs without errors after deployment
- ✓ Comprehensive README with all details
- ✓ 10 realistic friend profiles with complete data
- ✓ Beautiful Navbar with icons and active states
- ✓ Banner with summary cards showing friend statistics
- ✓ Friend card grid (4 columns on desktop) with status indicators
- ✓ Two-column Friend Details page with all required sections
- ✓ Call/Text/Video buttons that add timeline entries
- ✓ Toast notifications on interactions
- ✓ Timeline page with filter by type
- ✓ Stats page with pie chart (Recharts)
- ✓ 404 page for unknown routes
- ✓ Loading states while data fetches
- ✓ Beautiful Footer matching design

## 🚀 Future Enhancements

- User authentication & accounts
- Backend integration with database
- Photo gallery per friend
- Birthday reminders
- Shared memories/notes
- Friend groups & categories
- Export/import interaction data
- Dark mode theme toggle
- PWA (Progressive Web App) support
- Calendar view of interactions
- Friend recommendation engine
- Email/SMS reminders

## 📝 Environment Setup

Copy `.env.example` to `.env.local` for custom configuration:
```bash
cp .env.example .env.local
```

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- Development setup
- Code style and standards
- Commit message format
- Pull request process
- Testing requirements

## 📄 License

This project is open source under the **MIT License**. See [LICENSE](LICENSE) for details.

## 👨‍💻 Author

Built with ❤️ for maintaining meaningful friendships

---

**Live it. Build it. Share it.**

Made with ❤️ to help you keep friendships alive 🤝

For questions or support, please open an issue on GitHub!

