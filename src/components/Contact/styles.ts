import styled from 'styled-components';
import { colors } from '../../global/Colors';

export const ContactContainer = styled.div`
  min-height: 50vh;
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 10rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContactTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  margin-bottom: 1rem;
  margin-top: 15rem;

  @media (max-width: 768px) {
    text-align: center;  // Center text on mobile
  }
  
`;

export const ContactContent = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${colors.text.lightPurple};
  line-height: ${({ theme }) => theme.lineHeights.body};

  @media (max-width: 768px) {
    text-align: center;  // Center text on mobile
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 1px solid ${colors.secondary.cyan};
  width: 150px; 
  height: 40px;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px;
  font: inherit;
  box-sizing: border-box;

  cursor: pointer;
  border-radius: 4px;
  transition-duration: 0.4s;

  &:hover {
    background-color: ${colors.secondary.darkGray};
    color: ${colors.secondary.cyan};
  }
`;

export const SocialMediaIcons = styled.div`
  display: none;

    @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 auto;
    width: 60%;
    height: 10rem;
    
    svg {
      transition: color 0.3s;

      &:hover {
        color: ${colors.secondary.cyan};
        transform: scale(1.4);
      }
    }

    a:nth-child(1) {
      color: #0077b5; // LinkedIn icon color
    }

    a:nth-child(2) {
      color: #e1306c; // Instagram icon color
    }

    a:nth-child(3) {
      color: white; // GitHub icon color
    }

  }

`;
