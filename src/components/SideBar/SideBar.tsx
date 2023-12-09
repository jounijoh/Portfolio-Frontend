import React, { useState } from 'react';
import { Sidebar, SocialMediaIcons, } from './styles';

import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';


export const SidebarComponent: React.FC = () => {

  return (

    <Sidebar>

      <SocialMediaIcons>
        <a href="https://www.linkedin.com/in/JouniJohansson" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/jounijoh" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.github.com/jounijo" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </SocialMediaIcons>

    </Sidebar>

  );
};

