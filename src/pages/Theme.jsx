// src/pages/Theme.jsx
import React, { useState } from 'react';

const Theme = () => {
  // Khởi tạo state cho theme với giá trị mặc định là 'light'
  const [theme, setTheme] = useState('light');

  // Hàm chuyển đổi theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <h1>Theme Page</h1>
      <p>Chuyển đổi theme giữa Light và Dark</p>
      <button 
        onClick={toggleTheme} 
        className="p-2 bg-blue-500 text-white rounded focus:outline-none">
        Toggle Theme
      </button>
    </div>
  );
};

export default Theme;
