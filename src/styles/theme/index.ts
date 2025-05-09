import { createTheme } from '@mui/material/styles';
import '@fontsource/source-sans-pro';

const colors = {
  primary: `hsl(213,46%, 25%)`,
  backgroundWhite: `hsl(60, 9%,98%)`,
  backgroundBlue15: `hsl(230, 80%, 72%, .15)`,
  backgroundYellow10: `hsl(55,100%, 50%, .1)`,
  accentBrown: `hsl(23, 55%, 32%)`,
  accentYellow: `hsl(55, 100%, 50%)`,
  textCharcoal: `hsl(214, 17%, 30%)`,
  textCharcoal60: `hsl(214, 17%, 30%, 0.6)`,
  textElectricBlue: `hsl(208, 16%, 40%, 1)`,
  error: `hsl(0, 65%, 51%)`,
  white: `#FFFFFF`,
};

const theme = createTheme({
  palette: {
    mode: `light`,
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.accentYellow,
      light: colors.accentYellow,
      dark: colors.accentYellow,
      contrastText: colors.primary,
    },
    error: {
      main: colors.error,
    },
    background: {
      default: colors.backgroundWhite,
    },
    text: {
      primary: colors.textCharcoal,
      secondary: colors.textCharcoal60,
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
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 400,
    },
  },
});

export default theme;
