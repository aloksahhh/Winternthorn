import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.5rem',
        color: 'var(--text-color)',
        padding: '0.5rem',
        borderRadius: '50%',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--border-color)'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
    >
      {isDarkMode ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default ThemeToggle;