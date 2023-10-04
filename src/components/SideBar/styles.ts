import styled from 'styled-components';
import { colors } from '../../global/Colors';

export const Sidebar = styled.aside`
  width: min(5%, 15px);
  background: ${colors.secondary.veryDarkBlue};
  position: sticky;
  top: 6.5rem;
  bottom: 0;
  color: ${colors.text};
  padding: 2rem;
  height: 80vh;
  

  @media (max-width: 768px) {
    padding-top: 2rem;
    padding-left: 0.5rem;
    padding-right: 1rem;
    display: none;
  }

`;


export const SocialMediaIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  height: 10rem;
  
 // border: 1px solid ${colors.secondary.cyan};

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

  @media (min-width: 768px) {
      font-size: 1.3rem; // adjust this value as per your preference
    }
  

`;

