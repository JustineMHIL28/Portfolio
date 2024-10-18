import '../styles/Global/Global-Responsive.scss'; 
import '../styles/Main/Main-Responsive.scss'; 
import React, { useState, useEffect } from 'react';
import { useTheme } from '../utils/ThemeContext';
import { useFetch } from '../hook/useFetch.js';
import { FETCH } from '../utils/fetch.js';
import { STRING } from "../constants/string.js";

export const MainPage = () => {
  const { data: useFetchAllData } = useFetch.useFetchData();
  const [originalData, setOriginalData] = useState({});

  useEffect(() => {
    setOriginalData(useFetchAllData || {});
  }, [useFetchAllData]);

  const { theme } = useTheme();
  const style = theme === 'dark' ? { background: '#333', color: 'white' } : { background: '#e9e9e9e9', color: 'black' };

  // Scroll to the next section when the user scrolls down
  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      // Scroll down
      const nextSection = document.querySelector('.section:not(.hidden)');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return (
    <div className='module-page'>

      <div className="section main-page active">
        <div className='main-flex'>
          <div className='main-text-1'> HI, I'M JUSTINE M. HILARIO </div>
          <div className='main-text-2'> Web Developer {'</>, <_'} </div>
        </div>
      </div>

      {/** Render Overview Section */}
      <div className="section section-overview">
        {FETCH.section({
          style: style,
          type: STRING.overview,
          title: STRING.overviewTitle,
          subtitle: "INTRODUCTION",
          disableSubtitle: false,
          description: (
            <>
              <p>
                I’m Hilario Justine M., a 27-year-old Web Developer from Malolos, Bulacan. With a passion for technology, I specialize in building efficient and reliable web applications. I have experience in various technologies, including HTML, CSS, JavaScript, and ReactJS, allowing me to create dynamic user experiences.
              </p>
              <p style={{marginTop: '5px'}}>
                I thrive on continuous learning and enjoy collaborating with others to deliver high-quality projects. When I'm not coding, I love exploring new tech trends and sharing insights with fellow developers.
              </p>
            </>
          ),
          disableDescription: false,
          data: originalData.overviewData || [],
          disableDataImage: false,
          disableDataSubImage: true,
          disableDataDescription: true,
          disableLink: true,
          disableTooltips: true,
        })}
      </div>

      {/** Render Technologies Section */}
      <div className="section section-technologies">
        {FETCH.section({
          style: style,
          type: STRING.technologies,
          title: STRING.technologiesTitle,
          subtitle: "MY SKILLS",
          disableSubtitle: false,
          description: (
            <>
              <p>
                I have hands-on experience with a variety of technologies that empower me to create dynamic and efficient web applications. Some of the key technologies 
              </p>
              <p style={{marginTop: '20px'}}>
                 I've worked with include JavaScript, which allows me to build interactive elements; React, a powerful library for building user interfaces; Redux for state management; Node.js for server-side development; and RESTful APIs that facilitate seamless communication between the client and server. Additionally, I continuously explore emerging technologies to enhance my skill set and deliver innovative solutions.
             </p>
            </>
          ),
          disableDescription: false,
          data: originalData.technologiesData || [],
          disableDataImage: false,
          disableDataSubImage: true,
          disableDataDescription: true,
          disableLink: false,
          disableTooltips: true,
        })}
      </div>

      {/** Render Projects Section */}
      <div className="section section-projects">
        {FETCH.section({
          style: style,
          type: STRING.projects,
          title: STRING.projectsTitle,
          subtitle: "PROJECTS",
          disableSubtitle: true,
          description: (
            <>
              <p>
                Here are a few projects I've had the opportunity to work on, showcasing my skills and expertise in web development.
              </p>
              <p style={{marginTop: '5px'}}>
                Each project reflects my commitment to creating efficient and user-friendly applications that meet the needs of clients and users alike.
             </p>
            </>
          ),
          disableDescription: false,
          data: originalData.projectsData || [],
          disableDataImage: true,
          disableDataSubImage: false,
          disableDataDescription: false,
          disableLink: false,
          disableTooltips: true,
        })}
      </div>

      {/** Render Work Experience Section with Career Details */}
      <div className="section section-career">
        {FETCH.section({
          style: style,
          type: STRING.career,
          title: STRING.careerTitle,
          subtitle: "WORK EXPERIENCE",
          disableSubtitle: false,
          description: (
            <>
              <p>
                Here’s a quick rundown of my work experience, highlighting the roles I've held and the skills I've developed over the years.
              </p>
              <p style={{marginTop: '5px'}}>
                Each position has contributed to my growth as a web developer and equipped me with the necessary tools to tackle complex challenges in the tech industry.
             </p>
            </>
          ),
          disableDescription: false,
          data: originalData.careerData || [],
          disableDataImage: false,
          disableDataSubImage: true,
          disableDataDescription: false,
          disableLink: false,
          disableTooltips: true,
        })}
      </div>

      {/** Render Footer Section */}
      <div className="section section-footer">
        {FETCH.section({
          style: style,
          type: STRING.footer,
          title: "FIND ME ON !",
          subtitle: "",
          disableSubtitle: true,
          description: "",
          disableDescription: true,
          data: originalData.footerData || [],
          disableDataImage: false,
          disableDataSubImage: true,
          disableDataDescription: true,
          disableLink: false,
          disableTooltips: false,
        })}
      </div>
    </div>
  );
};
