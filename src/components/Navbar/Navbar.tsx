import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Logo, Container, DownloadButton, Menu, MenuItem, MobileMenuIcon } from './styles';
import { CyanWrap } from '../../global/Colors';
import { SocialMediaIcons } from '../Contact/styles';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';



export const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const downloadResume = () => {
        window.open('/resume_jouni_johansson.pdf', '_blank');
    };

    return (
        <Container>
            <a href="#homepage">
                <Logo src={'/images/J.J-logo.svg'} alt='logo' />
            </a>
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
            <Menu isOpen={mobileMenuOpen} onClick={(e) => e.stopPropagation()}>
                <MenuItem>
                    <a href="#about" onClick={toggleMobileMenu}>About<CyanWrap> .</CyanWrap></a>
                </MenuItem>
                <MenuItem>
                    <a href="#skills" onClick={toggleMobileMenu}>Skills<CyanWrap> .</CyanWrap></a>
                </MenuItem>
                <MenuItem>
                    <a href="#projects" onClick={toggleMobileMenu}>Projects<CyanWrap> .</CyanWrap></a>
                </MenuItem>
                <MenuItem>
                    <a href="#contact" onClick={toggleMobileMenu}>Contact<CyanWrap> .</CyanWrap></a>
                </MenuItem>
                <MenuItem>
                    <DownloadButton onClick={downloadResume}>
                        Resume
                    </DownloadButton>
                </MenuItem>
            </Menu>
            <MobileMenuIcon onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </MobileMenuIcon>
        </Container>
    );
};

