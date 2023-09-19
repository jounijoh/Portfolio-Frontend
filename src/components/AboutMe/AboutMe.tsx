import React, { useEffect, useState } from 'react';
import { AboutMeContainer, AboutMeTitle, AboutMeContent } from './styles';
import { CyanWrap } from '../../global/Colors';
import { AboutType } from '../../types';

interface AboutMeProps {
  data?: AboutType[];
}


const AboutMe: React.FC<AboutMeProps> = ({ data }) => {

  console.log("Received data:", data);


  return (
    <AboutMeContainer>
      {data && data.length > 0 && data.map((item, index) => {
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
