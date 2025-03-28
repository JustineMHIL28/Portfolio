// Developer: Justine M. Hilario

import '../styles/InfoCard/InfoCard-Responsive.scss'; // Importing SCSS styles for the InfoCard component
import React from 'react'; // Importing React library
import { Image } from 'antd'; // Importing Image component from Ant Design

// Function to render an image with an optional link and tooltip
const renderImage = (type, image, link, disableDataLink, name, disableDataTooltips) => (
  disableDataLink ? (
    <>
      {/* Render image without link */}
      <Image className={`${type}Image`} src={`${process.env.PUBLIC_URL}/${image}`} preview={false} />
      {!disableDataTooltips && <div className="tooltip">{name}</div>} {/* Render tooltip if not disabled */}
    </>
  ) : (
    <a href={link}> {/* Render image with link */}
      <Image className={`${type}Image`} src={`${process.env.PUBLIC_URL}/${image}`} preview={false} />
      {!disableDataTooltips && <div className="tooltip">{name}</div>} {/* Render tooltip if not disabled */}
    </a>
  )
);

const renderVideo = (type, video, link, disableDataLink, name, disableDataTooltips) => (
  disableDataLink ? (
    <>
      {/* Render image without link */}
      <div className="video-container">
        <video autoPlay controls>
          <source src={`${process.env.PUBLIC_URL}/${video}`} type="video/mp4" />
        </video>
      </div>
      {!disableDataTooltips && <div className="tooltip">{name}</div>} {/* Render tooltip if not disabled */}
    </>
  ) : (
    <a href={link}> {/* Render image with link */}
      <div className="video-container">
        <video autoPlay controls>
          <source src={`${process.env.PUBLIC_URL}/${video}`} type="video/mp4" />
        </video>
      </div>
      {!disableDataTooltips && <div className="tooltip">{name}</div>} {/* Render tooltip if not disabled */}
    </a>
  )
);

// Function to render the card with various details
const renderCard = (
  { style, theme, type, disableDataImage, disableDataSubImage, disableDataTechImage, disableDataDescription, disableDataLink, disableDataTooltips },
  { name, description, image, subimage, techimage, duration, link }
) => {
  console.log("Rendering card:", { name, duration, description }); // Log the details being rendered for debugging

  return (
    <div style={style} className={`infoCard${type}Page ${theme}`}>
      <div className={`group${type}Page`}>
        {/* Render the main image */}
        {!disableDataImage && renderImage(type, image, link, disableDataLink, name, disableDataTooltips)}
        <div className={`${type}Name`}>
          {name} 
          {duration && <div className={`${type}Date`}>{duration}</div>} {/* Render duration if available */}
        </div>
      </div>
      {/* Render subimage if not disabled */}
      {!disableDataSubImage && renderVideo(type, subimage, link, disableDataLink, name, disableDataTooltips)}
      {/* Render description if not disabled */}
      {!disableDataDescription && <div className={`${type}Desc`}>{description}</div>}
      {/* Render tech images if not disabled */}
      {!disableDataTechImage && techimage.map((techImage, index) => (
        <Image key={index} className={`${type}TechImage`} src={`${process.env.PUBLIC_URL}/${techImage}`} preview={false} />
      ))}
    </div>
  );
};

export const INFOCARD = { main: renderCard }; // Exporting the renderCard function as INFOCARD
