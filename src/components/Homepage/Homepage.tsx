import React from 'react';
import { HomepageContainer, HomepageTitle, HomepageSubtitle, Name } from './styles';
import { CyanWrap } from '../../global/Colors';
import { SocialMediaIcons } from '../Contact/styles';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Homepage: React.FC = () => {

  return (
    <>
      <HomepageContainer>
        <HomepageTitle>Hey there<CyanWrap>!</CyanWrap>  I am</HomepageTitle>
        <Name>Jouni Johansson,</Name>
        <HomepageSubtitle>Tech enthusiast and Business Information Technology student
          with a passion for FullStack Software Development<CyanWrap>.</CyanWrap></HomepageSubtitle>
        <SocialMediaIcons>
          <a href="https://www.linkedin.com/in/JouniJohansson" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/jounijoh" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.github.com/jounijoh" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </SocialMediaIcons>
      </HomepageContainer>

    </>
  );
};

export default Homepage;
