import '../styles/Main/Main-Responsive.scss';
import React from 'react';
import { INFOCARD } from "../components/InfoCard.jsx";
import { STRING } from "../constants/string.js";

// FETCH object to handle section data rendering
export const FETCH = {
  section: ({
    title, subtitle, disableSubtitle, description, disableDescription, data,
    style, type, disableDataImage, disableDataSubImage, disableDataDescription, disableDataLink, disableDataTooltips
  }) => {
    
    // InfoCard properties to be passed
    const infoCardProps = { 
      style, type,
      disableDataImage, disableDataSubImage, disableDataDescription,
      disableDataLink, disableDataTooltips
    };

    // Function to render InfoCards
    const renderCards = () => {
      const cardFunction = INFOCARD['main']; // Get render function from INFOCARD
      
      // Check if cardFunction is valid
      if (typeof cardFunction !== 'function') {
        console.warn(`No render function found for type: ${type}`);
        return null; // Exit if function is not valid
      }

      // Render cards based on data array
      return data.map(item => (
        <div key={item.id}>
          {Array.isArray(item) 
            ? cardFunction(infoCardProps, ...item) // Spread item if it's an array
            : cardFunction(infoCardProps, item)} 
        </div>
      ));
    };

    // Main component return
    return (
      <div className={`${STRING[type]}Page`}>
        <div className={`${STRING[type]}Flex`}>
          {/* Subtitle display */}
          {!disableSubtitle && <p className={`${STRING[type]}SubTitle`}>{subtitle}</p>}
          {/* Title display */}
          <div className={`${STRING[type]}Title`}>{title}</div>
          {/* Description display */}
          {!disableDescription && <p className={`${STRING[type]}Description`}>{description}</p>}
          {/* Render InfoCards */}
          <div className={`${STRING[type]}InfoCard`}>{renderCards()}</div>
        </div>
      </div>
    );
  }
};