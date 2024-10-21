import '../styles/InfoCard/InfoCard-Responsive.scss';
import React from "react";
import { Image } from "antd";

const renderCard = (
    { style, type, disableDataImage, disableDataSubImage, disableDataDescription, disableDataLink, disableDataTooltips },
    { name, description, image, subimage, duration, link }
) => {
    console.log("Rendering card:", { name, description, image, subimage, duration, link });

    return (
        <div style={style} className={`infoCard${type}Page`}>
            <div className={`group${type}Page`}>
                {/* Render main image with optional link and tooltip */}
                {!disableDataImage && (
                    <>
                        {disableDataLink ? (
                            <>
                                <Image className={`${type}Image`} src={`${process.env.PUBLIC_URL}/${image}`} preview={false} />
                                {!disableDataTooltips && <div className="tooltip">{name}</div>}
                            </>
                        ) : (
                            <a href={link}>
                                <Image className={`${type}Image`} src={`${process.env.PUBLIC_URL}/${image}`} preview={false} />
                                {!disableDataTooltips && <div className="tooltip">{name}</div>}
                            </a>
                        )}
                    </>
                )}
                <div className={`${type}Name`}>
                    {name}
                    {duration && <div className={`${type}Date`}>{duration}</div>}
                </div>
            </div>
            {/* Render subimage with optional link and tooltip */}
            {!disableDataSubImage && (
                <>
                    {disableDataLink ? (
                        <>
                            <Image className={`${type}SubImage`} src={`${process.env.PUBLIC_URL}/${subimage}`} preview={false} />
                            {!disableDataTooltips && <div className="tooltip">{name}</div>}
                        </>
                    ) : (
                        <a href={link}>
                            <Image className={`${type}SubImage`} src={`${process.env.PUBLIC_URL}/${subimage}`} preview={false} />
                            {!disableDataTooltips && <div className="tooltip">{name}</div>}
                        </a>
                    )}
                </>
            )}
            {/* Render description if not disabled */}
            {!disableDataDescription && <div className={`${type}Desc`}>{description}</div>}
        </div>
    );
};

export const INFOCARD = {
    main: renderCard,
};
