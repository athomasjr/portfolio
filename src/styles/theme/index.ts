import { createTheme } from '@mui/material/styles';
import '@fontsource/source-sans-pro';
import '@fontsource/source-sans-pro/400.css';
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/700.css';
import '@fontsource/source-sans-pro/900.css';

// Define our custom theme variables
export const themeVariables = {
  colors: {
    primary: `hsl(213,46%, 25%)`,
    backgroundWhite: `hsl(60, 9%, 98%)`,
    backgroundBlue15: `hsl(230, 80%, 72%, .15)`,
    backgroundYellow10: `hsl(55,100%, 50%, .1)`,
    accentBrown: `hsl(23, 55%, 32%)`,
    accentYellow: `hsl(55, 100%, 50%)`,
    textCharcoal: `hsl(214, 17%, 30%)`,
    textCharcoal60: `hsl(214, 17%, 30%, 0.6)`,
    textElectricBlue: `hsl(208, 16%, 40%, 1)`,
    error: `hsl(0, 65%, 51%)`,
    white: `#FFFFFF`,
  },
  fontSize: {
    xs: `1rem`,
    sm: `1.3rem`,
    base: `1.6rem`,
    md: `2rem`,
    lg: `2.5rem`,
    xl: `3.1rem`,
    '2xl': `3.9rem`,
    '3xl': `4.9rem`,
    '4xl': `6.1rem`,
  },
  fontWeight: {
    normal: 400,
    semibold: 600,
    bold: 700,
    black: 900,
  },
} as const;

// eslint-disable-next-line quotes
declare module '@mui/material/styles' {
  interface Theme {
    custom: typeof themeVariables;
  }
  interface ThemeOptions {
    custom?: typeof themeVariables;
  }
}

const baseTheme = createTheme({
  palette: {
    mode: `light`,
    primary: {
      main: themeVariables.colors.primary,
    },
    secondary: {
      main: themeVariables.colors.accentYellow,
      light: themeVariables.colors.accentYellow,
      dark: themeVariables.colors.accentYellow,
      contrastText: themeVariables.colors.primary,
    },
    error: {
      main: themeVariables.colors.error,
    },
    background: {
      default: themeVariables.colors.backgroundWhite,
    },
    text: {
      primary: themeVariables.colors.textCharcoal,
      secondary: themeVariables.colors.textCharcoal60,
    },
  },
  typography: {
    fontFamily: [
      `Source Sans Pro`,
      `-apple-system`,
      `BlinkMacSystemFont`,
      `"Segoe UI"`,
      `Roboto`,
      `"Helvetica Neue"`,
      `Arial`,
      `sans-serif`,
    ].join(`,`),
    h1: {
      fontSize: themeVariables.fontSize[`3xl`],
    },
    h2: {
      fontSize: themeVariables.fontSize[`2xl`],
    },
    h3: {
      fontSize: themeVariables.fontSize.xl,
    },
    h4: {
      fontSize: themeVariables.fontSize.lg,
    },
    h5: {
      fontSize: themeVariables.fontSize.base,
    },
    h6: {
      fontSize: themeVariables.fontSize.sm,
    },
    body1: {
      fontSize: themeVariables.fontSize.base,
    },
    body2: {
      fontSize: themeVariables.fontSize.sm,
    },
  },
  // Add our custom variables to the theme
  custom: themeVariables,
});

export default baseTheme;
