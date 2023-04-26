import { createGlobalStyle } from 'styled-components';
import { colors } from './Colors';

export const GlobalStyle = createGlobalStyle` 

@font-face {
    font-family: 'Tilt Prism';
    src: url('/src/assets/fonts/TiltPrism-Regular-VariableFont_XROT,YROT.ttf') format('truetype'),
        url('/src/assets/fonts/static/TiltPrism-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
@font-face {
  font-family: 'Reenie Beanie';
    src: url('src/assets/fonts/ReenieBeanie-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  body {
    font-family: 'Inter', sans-serif;
    background-color: ${colors.secondary.veryDarkBlue};
    color: ${colors.text};
    /* ... */
  }
`;