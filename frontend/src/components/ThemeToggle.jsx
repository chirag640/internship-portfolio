// src/components/ThemeToggle.js
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none mr-2"
    >
      <span className="sr-only">Toggle Theme</span>
      <span
        className={`transform transition ease-in-out duration-200 ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 rounded-full bg-white`}
      />
      <span
        className={`${
          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
        } absolute block w-full h-full rounded-full transition duration-200 ease-in-out`}
      />
    </button>
  );
};

export default ThemeToggle;
