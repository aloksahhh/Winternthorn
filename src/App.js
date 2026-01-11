import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';
import Navbar from './components/Navbar';
import { mockUsers } from './data/mockUsers';
import { authenticateUser, registerUser, getCurrentUser } from './utils/auth';
import './styles/App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedUser = getCurrentUser();
    
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
    
    if (savedUser) {
      setIsAuthenticated(true);
      setUserRole(savedUser.role);
    }
  }, []);

  const handleLogin = (email, password) => {
    const user = authenticateUser(email, password);
    if (user) {
      setIsAuthenticated(true);
      setUserRole(user.role);
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  };

  const handleSignUp = (email, password, role) => {
    return registerUser(email, password, role);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    localStorage.removeItem('currentUser');
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Router>
      <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
        <Navbar 
          isAuthenticated={isAuthenticated} 
          userRole={userRole} 
          onLogout={handleLogout}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
        />
        
        <Routes>
          <Route 
            path="/" 
            element={
              isAuthenticated ? 
                (userRole === 'teacher' ? 
                  <Navigate to="/teacher" /> : 
                  <Navigate to="/student" />) :
                <Navigate to="/login" />
            } 
          />
          <Route 
            path="/login" 
            element={
              !isAuthenticated ? 
                <Login onLogin={handleLogin} /> : 
                (userRole === 'teacher' ? 
                  <Navigate to="/teacher" /> : 
                  <Navigate to="/student" />)
            } 
          />
          <Route 
            path="/signup" 
            element={
              !isAuthenticated ? 
                <SignUp onSignUp={handleSignUp} /> : 
                (userRole === 'teacher' ? 
                  <Navigate to="/teacher" /> : 
                  <Navigate to="/student" />)
            } 
          />
          <Route 
            path="/teacher" 
            element={
              isAuthenticated && userRole === 'teacher' ? 
                <TeacherDashboard /> : 
                <Navigate to="/login" />
            } 
          />
          <Route 
            path="/student" 
            element={
              isAuthenticated && userRole === 'student' ? 
                <StudentDashboard /> : 
                <Navigate to="/login" />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;