// Developer: Justine M. Hilario

import '../styles/Global/Global-Responsive.scss'; 
import '../styles/Main/Main-Responsive.scss'; 
import React, { useState, useEffect } from 'react';
import { useTheme } from '../utils/ThemeContext';
import { useFetch } from '../hook/useFetch.js';
import { FETCH } from '../utils/fetch.js';
import { ARRAY } from "../constants/array.js";
import { STRING } from "../constants/string.js";

import profile from '../profiles/profile.jpg';
import { Image } from 'antd'; // Importing Image component from Ant Design


export const MainPage = () => {
  // Fetch all data using the custom hook
  const { data: useFetchAllData } = useFetch.useFetchData();
  
  // State to hold the original fetched data
  const [originalData, setOriginalData] = useState({});
  
  // Access the current theme from context
  const { theme } = useTheme();
  
  // Define styles based on the current theme
  const style = { 
    background: theme === 'dark' ? '#333' : '#d6d6d6', 
    color: theme === 'dark' ? 'white' : 'black' 
  };

  useEffect(() => {
    // Update original data when fetched data changes
    setOriginalData(useFetchAllData || {});
  }, [useFetchAllData]);

  return (
    <div className='module-page'>
      <div className="section main-page">

        <div className='main-page-background'>
          <div className='main-flex'>
            <Image className="profile" src={profile} preview={false} />
            <div className='main-text-1'> JUSTINE M.
              <div className='main-text-2'> Web Developer</div>
            </div>
          </div>
        </div>
        
      </div>

      {/* Render Sections */}
      {[
        STRING.overview, 
        STRING.technologies, 
        STRING.projects, 
        STRING.career, 
        STRING.footer
      ].map((section, index) => (
        <div className={`section section-${section}`} key={index}>
          {FETCH.section({
            style, theme,
            type: STRING[section], // Set the type of the section
            title: section === STRING.footer ? "Find Me Out !" : STRING[`${section}Title`], // Set the title of the section
            subtitle: STRING[`${section}SubTitle`], // Set the subtitle of the section
            description: ARRAY.descriptions?.find(desc => desc.type === section)?.content, // Get the description from the array
            disableSubtitle: true, // Disable subtitle
            disableDescription: section === STRING.footer, // Disable description for footer section
            data: originalData[`${section}Data`] || [], // Get the data for the section
            disableDataImage: section === STRING.projects, // Disable image for projects section
            disableDataSubImage: [STRING.overview, STRING.technologies, STRING.career, STRING.footer].includes(section),
            disableDataTechImage: [STRING.overview, STRING.technologies, STRING.career, STRING.footer].includes(section),
            disableDataDescription: [STRING.overview, STRING.technologies, STRING.footer].includes(section), // Disable sub images for specific sections
            disableDataLink: section === STRING.overview, // Disable link for overview section
            disableDataTooltips: [STRING.overview, STRING.technologies, STRING.projects, STRING.career].includes(section), // Disable tooltips for specific sections
          })}
        </div>
      ))}
    </div>
  );
};
