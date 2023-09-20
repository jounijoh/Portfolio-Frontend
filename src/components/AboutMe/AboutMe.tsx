import React, { useEffect, useState } from 'react';
import { AboutMeContainer, AboutMeTitle, AboutMeContent, ProfileImage, ContentWithImage } from './styles';
import { CyanWrap } from '../../global/Colors';
import { AboutType } from '../../types';
import profilePicture from '/images/profileImg.jpg';

interface AboutMeProps {
  data?: AboutType[];
}


const AboutMe: React.FC<AboutMeProps> = ({ data }) => {
  const titleData = data?.find(item => item.contentType === 'title');

  return (
    <AboutMeContainer>
      {titleData && (
        <AboutMeTitle key={titleData._id}>
          {titleData.context}
          <CyanWrap>.</CyanWrap>
        </AboutMeTitle>
      )}

      <ContentWithImage>
        <div>
          {data?.filter(item => item.contentType === 'text').map((item) => (
            <AboutMeContent key={item._id}>
              {item.context}
            </AboutMeContent>
          ))}
        </div>
        <ProfileImage src={profilePicture} alt="Jouni Johansson" />
      </ContentWithImage>
    </AboutMeContainer>
  );
};

export default AboutMe;
