import './styles/App/App-Responsive.scss'; // Import SCSS file
import React from "react";
import { MainPage } from './pages/Main.jsx';
import { useTheme } from './utils/ThemeContext';
import { MoonOutlined, SunOutlined } from '@ant-design/icons'; // Correctly import the icons

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app-container ${theme}`}>
      <div className="header">
        <button 
          className="float-button" 
          onClick={toggleTheme}
          title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        >
          {theme === 'dark' ? (
            <SunOutlined className="theme-icon" /> // Use SunOutlined for dark theme
          ) : (
            <MoonOutlined className="theme-icon" /> // Use MoonOutlined for light theme
          )}
        </button>
      </div>
      <MainPage/>
    </div>
  );
}

export default App;
