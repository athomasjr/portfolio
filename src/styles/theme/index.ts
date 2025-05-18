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
  borders: {
    test: `1px solid red`,
  },
  fontSize: {
    xs: `0.625rem`, // 10px
    sm: `0.8125rem`, // 13px
    base: `1rem`, // 16px
    md: `1.25rem`, // 20px
    lg: `1.5625rem`, // 25px
    xl: `1.9375rem`, // 31px
    '2xl': `2.4375rem`, // 39px
    '3xl': `3.0625rem`, // 49px
    '4xl': `3.8125rem`, // 61px
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
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: `"Source Sans Pro", sans-serif`,
        },
      },
    },
  },
  palette: {
    mode: `light`,
    primary: {
      main: themeVariables.colors.primary,
    },
    secondary: {
      main: themeVariables.colors.accentBrown,
      light: themeVariables.colors.accentBrown,
      dark: themeVariables.colors.accentBrown,
      contrastText: themeVariables.colors.white,
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
      lineHeight: 1.3,
      fontWeight: themeVariables.fontWeight.black,
    },
    h2: {
      fontSize: themeVariables.fontSize[`2xl`],
      lineHeight: 1.35,
      fontWeight: themeVariables.fontWeight.bold,
    },
    h3: {
      fontSize: themeVariables.fontSize.xl,
      lineHeight: 1.4,
      fontWeight: themeVariables.fontWeight.semibold,
    },
    h4: {
      fontSize: themeVariables.fontSize.lg,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: themeVariables.fontSize.base,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: themeVariables.fontSize.sm,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: themeVariables.fontSize.base,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: themeVariables.fontSize.sm,
      lineHeight: 1.6,
    },
  },
  // Add our custom variables to the theme
  custom: themeVariables,
});

export default baseTheme;
