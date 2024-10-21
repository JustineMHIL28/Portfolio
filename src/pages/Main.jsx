import '../styles/Global/Global-Responsive.scss'; 
import '../styles/Main/Main-Responsive.scss'; 
import React, { useState, useEffect } from 'react';
import { useTheme } from '../utils/ThemeContext';
import { useFetch } from '../hook/useFetch.js';
import { FETCH } from '../utils/fetch.js';
import { ARRAY } from "../constants/array.js";
import { STRING } from "../constants/string.js";

export const MainPage = () => {
  const { data: useFetchAllData } = useFetch.useFetchData();
  const [originalData, setOriginalData] = useState({});

  // Set original data when fetched data changes
  useEffect(() => {
    setOriginalData(useFetchAllData || {});
  }, [useFetchAllData]);

  const { theme } = useTheme();
  const style = theme === 'dark' ? { background: '#333', color: 'white' } : { background: '#e9e9e9e9', color: 'black' };

  // Scroll to the next section when the user scrolls down
  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      const nextSection = document.querySelector('.section:not(.hidden)');
      if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  console.log("Original Data:", originalData); // Debugging: log original data

  return (
    <div className='module-page'>
      <div className="section main-page active">
        <div className='main-flex'>
          <div className='main-text-1'> HI, I'M JUSTINE M. HILARIO </div>
          <div className='main-text-2'> Web Developer {'</>, <_'} </div>
        </div>
      </div>

      {/* Render Overview Section */}
      <div className="section section-overview">
        {FETCH.section({
          style,
          type: STRING.overview,
          title: STRING.overviewTitle,
          subtitle: STRING.introductionSubTitle,
          disableSubtitle: false,
          description: ARRAY.descriptions?.find(desc => desc.type === 'overview')?.content,
          disableDescription: false,
          data: originalData.overviewData || [],
          disableDataImage: false,
          disableDataSubImage: true,
          disableDataDescription: true,
          disableDataLink: true,
          disableDataTooltips: true,
        })}
      </div>

      {/* Render Technologies Section */}
      <div className="section section-technologies">
        {FETCH.section({
          style,
          type: STRING.technologies,
          title: STRING.technologiesTitle,
          subtitle: STRING.myskillsSubTitle,
          description: ARRAY.descriptions?.find(desc => desc.type === 'technologies')?.content,
          disableSubtitle: false,
          disableDescription: false,
          // for data
          data: originalData.technologiesData || [],
          disableDataImage: false,
          disableDataSubImage: true,
          disableDataDescription: true,
          disableDataLink: false,
          disableDataTooltips: true,
        })}
      </div>

      {/* Render Projects Section */}
      <div className="section section-projects">
        {FETCH.section({
          style,
          type: STRING.projects,
          title: STRING.projectsTitle,
          subtitle: STRING.projectsSubTitle,
          description: ARRAY.descriptions?.find(desc => desc.type === 'projects')?.content,
          disableSubtitle: true,
          disableDescription: false,
          // for data
          data: originalData.projectsData || [],
          disableDataImage: true,
          disableDataSubImage: false,
          disableDataDescription: false,
          disableDataLink: false,
          disableDataTooltips: true,
        })}
      </div>

      {/* Render Work Experience Section with Career Details */}
      <div className="section section-career">
        {FETCH.section({
          style,
          type: STRING.career,
          title: STRING.careerTitle,
          subtitle: STRING.workexperienceSubTitle,
          description: ARRAY.descriptions?.find(desc => desc.type === 'career')?.content,
          disableSubtitle: false,
          disableDescription: false,
          // for data
          data: originalData.careerData || [],
          disableDataImage: false,
          disableDataSubImage: true,
          disableDataDescription: false,
          disableDataLink: false,
          disableDataTooltips: true,
        })}
      </div>

      {/* Render Footer Section */}
      <div className="section section-footer">
        {FETCH.section({
          style,
          type: STRING.footer,
          title: "FIND ME ON !",
          subtitle: "",
          description: "",
          disableSubtitle: true,
          disableDescription: true,
          // for data
          data: originalData.footerData || [],
          disableDataImage: false,
          disableDataSubImage: true,
          disableDataDescription: true,
          disableDataLink: false,
          disableDataTooltips: false,
        })}
      </div>
    </div>
  );
};
