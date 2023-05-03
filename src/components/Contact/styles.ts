import styled from 'styled-components';
import { colors } from '../../global/Colors';

export const ContactContainer = styled.div`
    height: 50vh;
    width: 60%;

    @media (max-width: 768px) {
        width: 100%;
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

export const MailButton = styled.button`
  //background-color: #4caf50; /* Green */
  border: 1px solid ${colors.secondary.cyan};
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  padding: 10px 24px;
  border-radius: 4px;
  transition-duration: 0.4s;

  &:hover {
    background-color: ${colors.secondary.darkGray};
    color: ${colors.secondary.cyan};
  }
`;