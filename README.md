# 🏫 Role-Based Classroom Platform

A responsive, full-featured web application prototype for a role-based classroom platform with distinct interfaces for Teachers and Students. Features authentication, role-based access control, dark mode, and mock database integration.

## Live link : https://winternthorn.vercel.app/

## 🚀 Features

### 🔐 Authentication & Authorization
- **Login/Logout System** with secure credential validation
- **User Registration** with role selection (Teacher/Student)
- **Role-based Routing** - Automatic redirection based on user role
- **Session Persistence** - Remembers login state across page refreshes

### 👨‍🏫 Teacher Features
- ✅ **Start Classroom Sessions** - Generate unique session codes
- ✅ **Manage Questions** - Create and organize class questions
- ✅ **Monitor Active Sessions** - View ongoing classroom sessions
- ✅ **Analytics Dashboard** - Access engagement metrics
- ✅ **Classroom Settings** - Configure class preferences
- ❌ **Restricted from Student Features** (Ask Question, Join Session)

### 👩‍🎓 Student Features
- ✅ **Join Sessions** - Enter teacher-provided session codes
- ✅ **Ask Questions** - Post questions during live sessions
- ✅ **Upvote System** - Vote on important questions
- ✅ **Access Materials** - View/download class resources
- ✅ **Track Progress** - Monitor grades and performance
- ❌ **Restricted from Teacher Features** (Start Session, Manage Questions)

### 🎨 UI/UX Features
- 🌓 **Dark/Light Mode** - Toggle between themes
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- 🎯 **Clean Modern Design** - Minimalist, intuitive interface
- 🎨 **Consistent Styling** - CSS custom properties for theming
- ⚡ **Smooth Animations** - CSS transitions for better UX

### 💾 Data Management
- 📁 **Mock Database** - localStorage-based user management
- 🔄 **Real-time Updates** - Immediate UI feedback on actions
- 💾 **Data Persistence** - Users and sessions saved locally
- 🛡️ **Error Handling** - Graceful error messages and validation

## 📋 Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher) or **yarn**

---

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/role-classroom-platform.git
cd role-classroom-platform
```


2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the development server**
```bash
npm start
# or
yarn start
```
Open your browser and navigate to:

text
http://localhost:3000

---

## 📂 Project Structure
```bash
role-classroom-platform/
├── public/
│   └── index.html              # Main HTML template
├── src/
│   ├── components/             # React Components
│   │   ├── Login.js           # Login screen component
│   │   ├── SignUp.js          # Registration component
│   │   ├── TeacherDashboard.js # Teacher interface
│   │   ├── StudentDashboard.js # Student interface
│   │   ├── Navbar.js          # Navigation bar
│   │   └── ThemeToggle.js     # Dark/light mode toggle
│   ├── data/
│   │   └── mockUsers.js       # Mock database implementation
│   ├── styles/
│   │   └── App.css            # Global styles with CSS variables
│   ├── utils/
│   │   └── auth.js            # Authentication utilities
│   ├── App.js                 # Main application component
│   └── index.js               # Application entry point
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```
---

## 👨‍🏫 Teacher Dashboard
 - Start/end classroom sessions

 - Manage questions

 - View active sessions

  - Analytics & settings

  - Restricted: Ask questions, Join sessions

---

## 👩‍🎓 Student Dashboard
  - Join sessions with code

  - Ask & upvote questions

  - Access materials

  - View grades

  - Restricted: Start sessions, Manage questions

---

## 🎨 UI/UX
 - 🌓 Dark/light mode toggle

 - 📱 Fully responsive (mobile, tablet, desktop)

 - 🎯 Clean modern design

 - ⚡ Smooth transitions

---

##🛠️ Technologies Used

 - React 18 with Hooks

 - React Router DOM 6

- React Icons

- CSS3 with custom properties

- localStorage for data persistence

---

## 🚀 Available Scripts
```bash
npm start    # Start dev server
npm run build # Production build
npm test     # Run tests
npm run eject # Eject CRA (one-way)
```

---

## 🐛 Troubleshooting
 1) **App won't start?**

bash
```
rm -rf node_modules package-lock.json
npm install
npm start
```
2) **Styles not loading?**

 Clear browser cache (Ctrl+Shift+R)

 Check CSS imports

3) **Routing issues?**

  Verify all routes in App.js

  Check BrowserRouter setup

---

## 📄 License
MIT License










