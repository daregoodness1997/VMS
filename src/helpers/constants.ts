import { useColorModeValue } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
};

const fonts = {
  body: 'system-ui, sans-serif',
  heading: 'Inter , sans-serif',
  mono: 'Menlo, monospace',
};

const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
  '8xl': '6rem',
  '9xl': '8rem',
};

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const lineHeights = {
  normal: 'normal',
  none: 1,
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
  tall: 1.625,
  taller: '2',
  '3': '.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.75rem',
  '8': '2rem',
  '9': '2.25rem',
  '10': '2.5rem',
};

const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

interface LinkItemProps {
  name: string;
  icon: IconType | any;
  to: string;
}

const adminLinkItems: Array<LinkItemProps> = [
  { name: 'Overview', icon: FiHome, to: '/app' },
  { name: 'Organization', icon: FiTrendingUp, to: '/app' },
  { name: 'Departments', icon: FiCompass, to: '/app/departments' },
  { name: 'Staffs', icon: FiStar, to: '/app/staffs' },
  { name: 'Visit Purpose', icon: FiStar, to: '/app' },
  { name: 'Profile', icon: FiStar, to: '/app' },
  { name: 'Admins', icon: FiStar, to: '/app' },
  { name: 'VMS', icon: FiStar, to: '/app' },
  { name: 'Preference', icon: FiSettings, to: '/app' },
];
const staffLinkItems: Array<LinkItemProps> = [
  { name: 'Overview', icon: '', to: '/app' },
  { name: 'Visitors Logbook', icon: '', to: '/app' },
  { name: 'Invitations', icon: '', to: '/app' },
  { name: 'Profile', icon: '', to: '/app' },
  { name: 'VMS', icon: '', to: '/app' },
  { name: 'Preference', icon: '', to: '/app' },
];
const visitorLinkItems: Array<LinkItemProps> = [
  { name: 'Overview', icon: '', to: '/app' },
  { name: 'History', icon: '', to: '/app' },
  { name: 'Profile', icon: '', to: '/app' },
  { name: 'Preference', icon: '', to: '/app' },
];

// const textColor = useColorModeValue('gray.700', 'white');

export {
  colors,
  breakpoints,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  adminLinkItems,
  staffLinkItems,
  visitorLinkItems,
  // textColor,
};
