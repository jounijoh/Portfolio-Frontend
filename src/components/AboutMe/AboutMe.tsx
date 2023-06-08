import React, { useEffect, useState } from 'react';
import { AboutMeContainer, AboutMeTitle, AboutMeContent } from './styles';
import { CyanWrap } from '../../global/Colors';
import axios from 'axios';
import { AboutType } from '../../types';

const AboutMe: React.FC = () => {
  const [aboutData, setAboutData] = useState<AboutType[]>([]);
  
  //useEffect(() => {
    const fetchContext = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_VERCEL_FETCH_URL}/about`);
        setAboutData(response.data);
      } catch (error) {
        console.error('Error fetching content for about section:', error);
      }
    };

    fetchContext();
  //}, []);

  return (
    <AboutMeContainer>
      {aboutData.map((item, index) => {
        if (item.contentType === 'title') {
          return (
            <AboutMeTitle key={index}>
              {item.context}
              <CyanWrap>.</CyanWrap>
            </AboutMeTitle>
          );
        } else if (item.contentType === 'text') {
          return <AboutMeContent key={index}>{item.context}</AboutMeContent>;
        } else {
          return null;
        }
      })}
    </AboutMeContainer>
  );
};

export default AboutMe;
