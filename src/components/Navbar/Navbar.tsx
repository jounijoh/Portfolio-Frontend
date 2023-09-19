import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Logo, Container, DownloadButton, Menu, MenuItem, MobileMenuIcon } from './styles';
import { CyanWrap } from '../../global/Colors';


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
                <Logo src={'/src/assets/images/J.J-logo.svg'} alt='logo' />
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

