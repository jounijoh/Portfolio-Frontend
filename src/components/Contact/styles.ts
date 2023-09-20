import styled from 'styled-components';
import { colors } from '../../global/Colors';

export const ContactContainer = styled.div`
  min-height: 50vh;
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContactTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  margin-bottom: 1rem;
  margin-top: 4rem;
`;

export const ContactContent = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${colors.text.lightPurple};
  line-height: ${({ theme }) => theme.lineHeights.body};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px; // Spacing between the buttons
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