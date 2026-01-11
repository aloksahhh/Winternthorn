import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ isAuthenticated, userRole, onLogout, isDarkMode, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">Classroom Platform</div>
        
        <div className="nav-links">
          {isAuthenticated ? (
            <>
              <span>
                Welcome, {userRole === 'teacher' ? 'Teacher' : 'Student'}!
              </span>
              <Link to={userRole === 'teacher' ? '/teacher' : '/student'}>
                Dashboard
              </Link>
              <button onClick={onLogout} className="logout-btn">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;