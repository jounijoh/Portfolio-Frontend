import { colors } from './Colors';
import { inter, reenieBeanie, spaceMono } from './fonts';

const fontSizes = {
  h1: `clamp(35px, 5vw, 65px)`,
  h2: `clamp(20px, 4vw, 44px)`,
  h3: `clamp(18px, 4vw, 22px)`,
  body: `clamp(14px, 3vw, 16px)`,
  // Add more font sizes based on your needs
};

const lineHeights = {
  body: 1.5,
  heading: 1.1,
};

const theme = {
    colors,
    fonts: {
      inter,
      reenieBeanie,
      spaceMono,
    },
    fontSizes,
    lineHeights,
  };


export default theme;
