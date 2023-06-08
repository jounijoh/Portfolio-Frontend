import styled from 'styled-components';
import { colors } from '../../global/Colors';

export const AboutMeContainer = styled.section`
    min-height: 40vh;
    
`;


export const AboutMeTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  margin-bottom: 1rem;
  margin-top: 4rem;
`;


export const AboutMeContent = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${colors.text.lightPurple};
  line-height: ${({ theme }) => theme.lineHeights.body};
`;