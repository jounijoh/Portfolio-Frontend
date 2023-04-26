import styled from 'styled-components';
import { colors } from '../../global/Colors';

export const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left; 
  height: 100vh;
`;

export const HomepageTitle = styled.h1`
  margin-left: 0.4rem;
  font-size: clamp(18px, 2.5vw, 20px);
  color: ${colors.text.gray};
  margin-bottom: 1rem;
`;

export const HomepageSubtitle = styled.h3`
  color: ${colors.text.lightPurple};
  font-size: clamp(18px, 2.5vw, 25px);
  
`;

export const Name = styled.a`
  
  color: ${colors.text.lighterPurple};
  font-size: clamp(35px, 5vw, 65px);
  font-weight: bold;
 // text-decoration: none;
 // background-image: linear-gradient(90deg, #ff9a9e, #fad0c4, #f6d365);
  //-webkit-background-clip: text;
  //-webkit-text-fill-color: transparent;
`;