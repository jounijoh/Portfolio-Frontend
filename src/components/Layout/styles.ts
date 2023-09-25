import styled, { css, keyframes } from 'styled-components';
import { colors } from '../../global/Colors';
import { inter } from '../../global/fonts';

export const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 150px;

`;
export const FullHeightSection = styled.div`
  height: 100vh;
  position: relative;

`;

export const MainContent = styled.main`
  font-family: ${inter.fontFamily};
  color: ${colors.text.lighterPurple};
  background-color: ${colors.secondary.veryDarkBlue};
  margin-top: 5rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
 
 
  overflow-y: visible;
  scroll-behavior: smooth;

  @media (max-width: 1200px) {
    max-width: 80%; 
  }

  @media (max-width: 768px) {
    max-width: 80%;
    margin-right: auto;
  }
`;
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInScaleUp = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const AnimatedSection = styled.section<{ inView: boolean }>`
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  animation: ${({ inView }) =>
    inView ? css`${fadeInUp} 0.3s forwards, ${fadeInScaleUp} 0.3s forwards` : 'none'};
  scroll-margin-top: 10rem;
`;

export const StickyWrapper = styled.div`
  position: sticky;
  top: 150px;
  z-index: 3;
`;

export const SectionWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
`;