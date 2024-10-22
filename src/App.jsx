// Developer: Justine M. Hilario

import './styles/App/App-Responsive.scss'; // Importing styles for the App component
import React from "react"; // Importing React library
import { MainPage } from './pages/Main.jsx'; // Importing the MainPage component
import { useTheme } from './utils/ThemeContext'; // Importing custom hook for theme management
import { MoonOutlined, SunOutlined } from '@ant-design/icons'; // Importing icons for theme toggle
import Footer from './components/Footer.jsx'; // Importing the Footer component

function App() {
  // Accessing current theme and function to toggle theme from context
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app-container ${theme}`}> {/* Applying theme class to the main container */}
      <MainPage /> {/* Rendering the MainPage component */}
      <button 
        className={`float-button ${theme}`} // Styling for the floating button
        onClick={toggleTheme} // Event handler to toggle theme
        title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'} // Tooltip for the button
      >
        {/* Conditionally render the theme icon based on current theme */}
        {theme === 'dark' ? (
          <SunOutlined className="theme-icon" /> // Sun icon for light mode
        ) : (
          <MoonOutlined className="theme-icon" /> // Moon icon for dark mode
        )}
      </button>
      <Footer /> {/* Rendering the Footer component */} 
    </div>
  );
}

export default App; // Exporting the App component for use in other parts of the application
