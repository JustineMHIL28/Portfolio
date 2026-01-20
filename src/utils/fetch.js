// Developer: Justine M. Hilario

import '../styles/Main/Main-Responsive.scss';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { INFOCARD } from "../components/InfoCard.jsx";
import { STRING } from "../constants/string.js";

// FETCH object to handle section data rendering
export const FETCH = {
  section: ({
    title, subtitle, disableSubtitle, description, disableDescription, data,
    style, theme, type, disableDataImage, disableDataSubImage, disableDataTechImage, disableDataDescription, disableDataLink, disableDataTooltips
  }) => {
    
    // InfoCard properties to be passed
    const infoCardProps = { 
      style, theme, type,
      disableDataImage, disableDataSubImage, disableDataTechImage, disableDataDescription,
      disableDataLink, disableDataTooltips
    };

  // Carousel settings for projects section - ISA LANG NAKIKITA!
  const carouselSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1, // ISA LANG! 
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    centerMode: false,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

    // Function to render InfoCards
    const renderCards = () => {
      const cardFunction = INFOCARD['main']; // Get render function from INFOCARD
      
      // Check if cardFunction is valid
      if (typeof cardFunction !== 'function') {
        console.warn(`No render function found for type: ${type}`);
        return null; // Exit if function is not valid
      }

      // Check if this is the projects section - use carousel
      if (type === 'projects' && data.length > 0) {
        return (
          <div className={`carousel-wrapper ${theme}`}>
            <Slider {...carouselSettings}>
              {data.map(item => (
                <div key={item.id} className="carousel-slide">
                  {Array.isArray(item) 
                    ? cardFunction(infoCardProps, ...item)
                    : cardFunction(infoCardProps, item)}
                </div>
              ))}
            </Slider>
          </div>
        );
      }

      // Render regular grid for other sections
      return data.map(item => (
        <div key={item.id}>
          {Array.isArray(item) 
            ? cardFunction(infoCardProps, ...item)
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
          {!disableDescription && <div className={`${STRING[type]}Description`}>{description}</div>}
          {/* Render InfoCards */}
          <div className={`${STRING[type]}InfoCard`}>{renderCards()}</div>
        </div>
      </div>
    );
  }
};