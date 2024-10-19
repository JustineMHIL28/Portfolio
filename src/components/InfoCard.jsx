import '../styles/InfoCard/InfoCard-Responsive.scss';
import React from "react";
import { Image } from "antd";

// Renders a card with images, names, durations, and descriptions based on provided props
const renderCard = (
    { style, type, disableDataImage, disableDataSubImage, disableDataDescription, disableLink, disableTooltips },
    { name, description, image, subimage, duration, link }
) => (
    <div style={style} className={`infoCard${type}Page`}>
        <div className={`group${type}Page`}>
            {/* Render main image with link or as a button if link is disabled */}
            {!disableDataImage && (
                disableLink ? (
                    <button className={`${type}ImageButton`}>
                        <Image className={`${type}Image`} src={image} preview={false} />
                        {!disableTooltips && <div className="tooltip">{name}</div>}
                    </button>
                ) : (
                    <a href={link} className={`${type}ImageLink`}>
                        <Image className={`${type}Image`} src={image} preview={false} />
                        {!disableTooltips && <div className="tooltip">{name}</div>}
                    </a>
                )
            )}
            {/* Display name and duration */}
            <div className={`${type}Name`}>
                {name}
                {duration && <div className={`${type}Date`}>{duration}</div>}
            </div>
        </div>
        
        {/* Render subimage with link or as a button if link is disabled */}
        {!disableDataSubImage && (
            disableLink ? (
                <button className={`${type}SubImageButton`}>
                    <Image className={`${type}SubImage`} src={subimage} preview={false} />
                    {!disableTooltips && <div className="tooltip">{name}</div>}
                </button>
            ) : (
                <a href={link} className={`${type}SubImageLink`}>
                    <Image className={`${type}SubImage`} src={subimage} preview={false} />
                    {!disableTooltips && <div className="tooltip">{name}</div>}
                </a>
            )
        )}
        
        {/* Display description if not disabled */}
        {!disableDataDescription && <div className={`${type}Desc`}>{description}</div>}
    </div>
);

// Expose the renderCard function as INFOCARD.main
export const INFOCARD = {
    main: renderCard,
};
