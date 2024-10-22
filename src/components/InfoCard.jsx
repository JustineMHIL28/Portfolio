// Developer: Justine M. Hilario

import '../styles/InfoCard/InfoCard-Responsive.scss';
import React from 'react';
import { Image } from 'antd';

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

const renderCard = (
  { style, theme, type, disableDataImage, disableDataSubImage, disableDataTechImage, disableDataDescription, disableDataLink, disableDataTooltips },
  { name, description, image, subimage, techimage, duration, link }
) => (
  <div style={style} className={`infoCard${type}Page ${theme}`}>
    <div className={`group${type}Page`}>
      {!disableDataImage && renderImage(type, image, link, disableDataLink, name, disableDataTooltips)}
      <div className={`${type}Name`}>
        {name} {duration && <div className={`${type}Date`}>{duration}</div>}
      </div>
    </div>
    {!disableDataSubImage && renderImage(type, subimage, link, disableDataLink, name, disableDataTooltips)}
    {!disableDataDescription && <div className={`${type}Desc`}>{description}</div>}
    {!disableDataTechImage && techimage.map((techImage, index) => (
        <Image key={index} className={`${type}TechImage`} src={`${process.env.PUBLIC_URL}/${techImage}`} preview={false} />
      ))
    }
  </div>
);

export const INFOCARD = { main: renderCard };
