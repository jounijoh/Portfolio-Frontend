import styled from 'styled-components';
import { colors } from '../../global/Colors';
import { inter } from '../../global/fonts';

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${colors.secondary.veryDarkBlue};
  //background: linear-gradient(20deg, ${colors.background}, 60%, ${colors.primary});
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const Avatar = styled.img`
  height: 3rem;
 
`;

// Container to make the avatar image fade into the background
export const AvatarContainer = styled.div`
  position: relative;
  width: 60px; 
  height: 60px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, transparent 50%, ${colors.background} 100%);
    border-radius: 50%;
}
`;

interface MenuProps {
  isOpen: boolean;
}

export const Menu = styled.ul<MenuProps>`
  display: flex;
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

  @media (max-width: 768px) {
    display: block;
  }
`;
