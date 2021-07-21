import { typographyVariants } from './typographyVariants';

export const colors = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#292929',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  primary: {
    main: {
      color: '#D7385E',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#FB7B6B',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#FFF',
      contrastText: '#FFF',
    },
    light: {
      color: '#FFFFFF',
      contrastText: '#fff',
    },
  },
  error: {
    main: {
      color: '#DC3545',
      contrastText: '#fff',
    },
  },
  success: {
    main: {
      color: '#28A745',
      contrastText: '#fff',
    },
  },
  modes: {
    dark: {
      backgroundColor: '#191919',
    },
  },
};

const light = {
  logo: { color: '#070C0E' },
  background: {
    color: '#FFFFFF',
    main: { color: '#292929' },
  },
  borders: { color: '#F1F1F1' },
  primary: {
    color: '#D7385E',
    contrast: '#FFFFFF',
  },
  secondary: { color: '#FB7B6B' },
  tertiary: {
    color: '#88989E',
    contrast: '#FFFFFF',
    main: { color: '#070C0E' },
  },
  error: { color: '#dc3545' },
  success: { color: '#28a745' },
};

const dark = {
  logo: { color: '#FFFFFF' },
  background: {
    color: '#030506',
    main: { color: '#030506' },
  },
  borders: { color: '#181F22' },
  primary: {
    color: '#F27895',
    contrast: '#FFFFFF',
  },
  secondary: { color: '#FFA59A' },
  tertiary: {
    color: '#D5D5D5',
    contrast: '#FFFFFF',
    main: { color: '#FFFFFF' },
  },
  error: { color: '#EB5C50' },
  success: { color: '#28a745' },
};

export const colorThemes = {
  light,
  dark,
};

export default {
  colors,
  typographyVariants,
  breakpoints: {
    xs: 0, // extra small
    sm: 480, // small
    md: 768, // medium
    lg: 992, // large
    xl: 1200, // extra large
  },
  borderRadius: '8px',
  transition: '200ms ease-in-out',
  fontFamily: '\'Rubik\', sans-serif',
};
