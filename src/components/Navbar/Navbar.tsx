import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Logo, Container, DownloadButton, Menu, MenuItem, MobileMenuIcon } from './styles';
import { CyanWrap } from '../../global/Colors';
import { downloadResume } from '../downloadResume';



export const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Hide Navbar on scroll down
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;

            if (currentScrollPosition < scrollPosition) {
                // Scrolling up
                setIsVisible(true);
            } else {
                // Scrolling down
                setIsVisible(false);
            }

            setScrollPosition(currentScrollPosition);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    return (
        <Container style={{ top: isVisible ? '0' : '-5rem', transition: 'top 0.3s' }}>
            <a href="#homepage">
                <Logo src={'/images/J.J-logo.svg'} alt='logo' />
            </a>

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

