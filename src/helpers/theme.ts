// import colors constant
import {
  colors,
  breakpoints,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
} from './constants';

// import extendTheme function and type ThemeConfig
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// Add the color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// Extend the theme
const theme = extendTheme({
  colors,
  breakpoints,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  config,
});

export { theme };
