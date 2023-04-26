import React, { useState } from 'react';
import { Sidebar, SocialMediaIcons,} from './styles';
import { useSwipeable } from 'react-swipeable';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';


const SidebarComponent: React.FC = () => {
  // Make sidebar visible by default on desktop and hidden on mobile
  // Swible left to hide and right to show on mobile

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const handleSwipedLeft = () => {
    setIsSidebarVisible(false);
  };

  const handleSwipedRight = () => {
    setIsSidebarVisible(true);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipedLeft,
    onSwipedRight: handleSwipedRight,
  });

  return (

    <Sidebar isVisible={isSidebarVisible} {...swipeHandlers}>
      
      <SocialMediaIcons>
        <a href="https://www.linkedin.com/in/JouniJohansson" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/jounijo" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.github.com/jounijoh" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </SocialMediaIcons>
  
    </Sidebar>

  );
};

export default SidebarComponent;