import '../styles/Main/Main-Responsive.scss';
import React from 'react';
import { INFOCARD } from "../components/InfoCard.jsx";
import { STRING } from "../constants/string.js";

export const FETCH = {
  section: ({ 
    title, subtitle, disableSubtitle, description, disableDescription, data,
    style, type, disableDataImage, disableDataSubImage, disableDataDescription, disableLink, disableTooltips
  }) => {
    
    const infoCardProps = { 
      style, type,
      disableDataImage, disableDataSubImage, disableDataDescription,
      disableLink, disableTooltips
    };

    // Reusable function for rendering cards
    const renderCards = () => {
      const cardFunction = INFOCARD['main']; // Dynamically select function based on the 'type' prop

      if (typeof cardFunction !== 'function') {
        console.warn(`No render function found for type: ${type}`);
        return null;
      }

      return data.map(item => (
        <div key={item.id}>
          {Array.isArray(item) 
            ? cardFunction(infoCardProps, ...item) 
            : cardFunction(infoCardProps, item)}
        </div>
      ));
    };

    return (
      <div className={`${STRING[type]}Page`}>
        <div className={`${STRING[type]}Flex`}>
          {/* Subtitle display */}
          {!disableSubtitle && (<p className={`${STRING[type]}SubTitle`}>{subtitle}</p>)}
          {/* Title display */}
          <div className={`${STRING[type]}Title`}>{title}</div>
          {/* Description display */}
          {!disableDescription && (<p className={`${STRING[type]}Description`}>{description}</p>)}
          <div className={`${STRING[type]}InfoCard`}>{renderCards()}</div>
        </div>
      </div>
    );
  }
}
