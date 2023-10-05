import styled from 'styled-components';
import { colors } from '../../global/Colors';
import { inter } from '../../global/fonts';

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.1rem 2.5rem 1.1rem 1.8rem;  
  background: ${colors.secondary.veryDarkBlue};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 4rem;


  @media (max-width: 768px) {
   padding: 0;
   padding-left: 1rem;
  }
`;

export const Logo = styled.img`
  height: 2.5rem;

  @media (min-width: 768px) {
    height: 3rem;
  }
`;

interface MenuProps {
  isOpen: boolean;
}

export const Menu = styled.ul<MenuProps>`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background-color: rgba(0, 0, 0, 0.9);
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  }
`;

export const MenuItem = styled.li`
  a {
    color: ${colors.text.lightPurple};
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;
    font-family: ${inter.fontFamily};
    font-weight: ${inter.fontWeight.regular};
    &:hover {
      color: ${colors.secondary.cyan};
    }
  }
`;

export const MobileMenuIcon = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
    z-index: 1000;
  }
`;

// Download Resume Button
export const DownloadButton = styled.button`
    background: transparent;
    border: 1px solid ${colors.secondary.cyan}; 
    color: ${colors.text.lightPurple};
    padding: 0.5rem 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    font-family: ${inter.fontFamily};
    font-weight: ${inter.fontWeight.regular};
    transition: background 0.3s ease, color 0.3s ease;

    &:hover {
        background: ${colors.secondary.cyan};
        color: ${colors.secondary.veryDarkBlue};
    }

    &:focus {
        outline: none;
    }
`;