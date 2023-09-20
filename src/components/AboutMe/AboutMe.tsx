import React, { useEffect, useState } from 'react';
import { AboutMeContainer, AboutMeTitle, AboutMeContent, ProfileImage, ContentWithImage } from './styles';
import { CyanWrap } from '../../global/Colors';
import { AboutType } from '../../types';
import profilePicture from '/images/profileImg.jpg';

interface AboutMeProps {
  data?: AboutType[];
}


const AboutMe: React.FC<AboutMeProps> = ({ data }) => {

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
        } else {
          return null;
        }
      })}
      <ContentWithImage>
        <div>
          {data && data.length > 0 && data.map((item, index) => {
            if (item.contentType === 'text') {
              return <AboutMeContent key={index}>{item.context}</AboutMeContent>;
            } else {
              return null;
            }
          })}
        </div>
        <ProfileImage src={profilePicture} alt="Jouni Johansson" />
      </ContentWithImage>
    </AboutMeContainer>
  );
};

export default AboutMe;
