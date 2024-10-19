import './styles/App/App-Responsive.scss';
import React from "react";
import { MainPage } from './pages/Main.jsx';
import { useTheme } from './utils/ThemeContext';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';

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
            <SunOutlined className="theme-icon" />
          ) : (
            <MoonOutlined className="theme-icon" />
          )}
        </button>
      </div>
      <MainPage />
    </div>
  );
}

export default App;
