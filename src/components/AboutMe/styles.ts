import styled from 'styled-components';
import { colors } from '../../global/Colors';

export const AboutMeContainer = styled.div`
    height: 50vh;
`;


export const AboutMeTitle = styled.h2`
  font-size: clamp(20px, 4vw, 44px);
  margin-bottom: 1rem;
  margin-top: 4rem;
`;


export const AboutMeContent = styled.p`
  font-size: 1rem;
  color: ${colors.text.lightPurple};
  line-height: 1.5;
`;