import '../styles/InfoCard/InfoCard-Responsive.scss';
import React from "react";
import { Image } from "antd";

const renderCard = (
    { style, type, disableDataImage, disableDataSubImage, disableDataDescription, disableLink, disableTooltips },
    { name, description, image, subimage, duration, link }
) => (
    <div style={style} className={`infoCard${type}Page`}>
        <div className={`group${type}Page`}>
            {!disableDataImage && (
                <>
                    {!disableLink ? (
                        <a href={link}>
                            <Image className={`${type}Image`} src={image} preview={false} />
                            {!disableTooltips && <div className="tooltip">{name}</div>}
                        </a>
                    ) : (
                        <>
                            <Image className={`${type}Image`} src={image} preview={false} />
                            {!disableTooltips && <div className="tooltip">{name}</div>}
                        </>
                    )}
                </>
            )}
            <div className={`${type}Name`}>
                {name}
                {duration && <div className={`${type}Date`}>{duration}</div>}
            </div>
        </div>
        {!disableDataSubImage && (
            <>
                {!disableLink ? (
                    <a href={link}>
                        <Image className={`${type}SubImage`} src={subimage} preview={false} />
                        {!disableTooltips && <div className="tooltip">{name}</div>}
                    </a>
                ) : (
                    <>
                        <Image className={`${type}SubImage`} src={subimage} preview={false} />
                        {!disableTooltips && <div className="tooltip">{name}</div>}
                    </>
                )}
            </>
        )}
        {!disableDataDescription && (
            <div className={`${type}Desc`}>{description}</div>
        )}
    </div>
);

export const INFOCARD = {
    main: renderCard,
};
