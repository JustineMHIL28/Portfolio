// Developer: Justine M. Hilario

import '../styles/InfoCard/InfoCard-Responsive.scss';
import React from 'react';
import { Image } from 'antd';

// Function to render an image with an optional link and tooltip
const renderImage = (type, image, link, disableDataLink, name, disableDataTooltips) => (
  disableDataLink ? (
    <>
      <Image className={`${type}Image`} src={`${process.env.PUBLIC_URL}/${image}`} preview={false} />
      {!disableDataTooltips && <div className="tooltip">{name}</div>}
    </>
  ) : (
    <a href={link}>
      <Image className={`${type}Image`} src={`${process.env.PUBLIC_URL}/${image}`} preview={false} />
      {!disableDataTooltips && <div className="tooltip">{name}</div>}
    </a>
  )
);

// Function to render sub-images with preview/enlarge capability
const renderSubImages = (type, subimages, name, disableDataTooltips) => {
  if (Array.isArray(subimages) && subimages.length > 0) {
    return (
      <div className="image-gallery-container">
        <Image.PreviewGroup>
          <Image
            className={`${type}SubImage`}
            src={`${process.env.PUBLIC_URL}/${subimages[0]}`}
            preview={{
              mask: (
                <div className="preview-mask">
                  <span className="preview-text">Click to view gallery</span>
                  <span className="image-count">{subimages.length} images</span>
                </div>
              )
            }}
            style={{ 
              width: '100%',
              height: 'auto',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
          />
          {subimages.slice(1).map((subimage, index) => (
            <Image
              key={index + 1}
              src={`${process.env.PUBLIC_URL}/${subimage}`}
              style={{ display: 'none' }}
            />
          ))}
        </Image.PreviewGroup>
        {!disableDataTooltips && <div className="tooltip">{name}</div>}
      </div>
    );
  }
  
  if (typeof subimages === 'string') {
    return (
      <>
        <Image 
          className={`${type}SubImage`} 
          src={`${process.env.PUBLIC_URL}/${subimages}`} 
          preview={true}
          style={{ 
            width: '100%',
            height: 'auto',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        />
        {!disableDataTooltips && <div className="tooltip">{name}</div>}
      </>
    );
  }
  
  return null;
};

// Function to render the card with various details
const renderCard = (
  { style, theme, type, disableDataImage, disableDataSubImage, disableDataTechImage, disableDataDescription, disableDataLink, disableDataTooltips },
  { name, description, image, subimage, techimage, duration, link }
) => {
  return (
    <div style={style} className={`infoCard${type}Page ${theme}`}>
      <div className={`group${type}Page`}>
        {!disableDataImage && renderImage(type, image, link, disableDataLink, name, disableDataTooltips)}
        <div className={`${type}Name`}>
          {name} 
          {duration && <div className={`${type}Date`}>{duration}</div>}
        </div>
      </div>
      {!disableDataSubImage && subimage && renderSubImages(type, subimage, name, disableDataTooltips)}
      {!disableDataDescription && <div className={`${type}Desc`}>{description}</div>}
      {/* TECH ICONS IN CONTAINER */}
      {!disableDataTechImage && techimage && (
        <div className="tech-icons-container">
          {techimage.map((techImage, index) => (
            <Image key={index} className={`${type}TechImage`} src={`${process.env.PUBLIC_URL}/${techImage}`} preview={false} />
          ))}
        </div>
      )}
    </div>
  );
};

export const INFOCARD = { main: renderCard };