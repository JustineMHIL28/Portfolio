// Developer: Justine M. Hilario

import React, { createContext, useContext, useState } from 'react';

// Lumikha ng Theme Context
const ThemeContext = createContext();

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  // Default na tema ay 'dark'
  const [theme, setTheme] = useState('dark');

  // Function para i-toggle ang tema
  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      console.log(`Theme switched to: ${newTheme}`); // Console log para sa pagbabago ng tema
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* Siguraduhing walang nested <p> dito */}
    </ThemeContext.Provider>
  );
};

// Custom hook para makuha ang kasalukuyang tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    console.error('useTheme must be used within a ThemeProvider'); // Error log kung hindi mahanap ang context
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context; // Ibalik ang context kung ito ay wasto
};
