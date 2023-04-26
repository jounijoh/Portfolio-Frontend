import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Avatar, Container, Menu, MenuItem, MobileMenuIcon } from './styles';
import { CyanWrap } from '../../global/Colors';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <Container>
            <a href="#homepage">
            <Avatar src={'/src/assets/images/spacelogo.png'} alt='logo' />
            </a>

            <Menu isOpen={mobileMenuOpen}>
                <MenuItem>
                    <a href="#about">About<CyanWrap> .</CyanWrap></a>
                </MenuItem>
                <MenuItem>
                    <a href="#skills">Skills<CyanWrap> .</CyanWrap></a>
                </MenuItem>
                <MenuItem>
                    <a href="#projects">Projects<CyanWrap> .</CyanWrap></a>
                </MenuItem>
                <MenuItem>
                    <a href="#contact">Contact<CyanWrap> .</CyanWrap></a>
                </MenuItem>
            </Menu>
            <MobileMenuIcon onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </MobileMenuIcon>
        </Container>
    );
};

