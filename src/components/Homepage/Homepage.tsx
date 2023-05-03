import React from 'react';
import { HomepageContainer, HomepageTitle, HomepageSubtitle, Name } from './styles';
import { CyanWrap } from '../../global/Colors';

const Homepage: React.FC = () => {
  
  return (
    <>
        <HomepageContainer>
          <HomepageTitle>Hey there<CyanWrap>!</CyanWrap>  I am</HomepageTitle>
          <Name>Jouni Johansson,</Name>
          <HomepageSubtitle>Tech enthusiast and Business Information Technology student
            with a passion for Software Development<CyanWrap>.</CyanWrap></HomepageSubtitle>
        </HomepageContainer>
    </>
  );
};

export default Homepage;