import { useState } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

const breakpoints = {
  xs: '600px',
  sm: '960px',
  md: '1280px',
  lg: '1920px'
}

export const mq = {
  xs: `(max-width: ${breakpoints.xs})`,
  gtXs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) `,
  gtSm: `(min-width: ${breakpoints.sm})`,
  ltMd: `(max-width: ${breakpoints.md})`,
  md: `(min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md})`,
  gtMd: `(min-width: ${breakpoints.md})`,
  ltLg: `(max-width: ${breakpoints.lg})`,
  lg: `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg})`,
  gtLg: `(min-width: ${breakpoints.lg})`,
};

const appTheme = {
  palette: {
    secondary: {
      main: '#cc835c',
    },
    background: {
      default: '#fbf8f5',
    },
    type: 'dark',
  },
  typography: {
    fontFamily: 'Poppins, Roboto, Helvetica',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
  },
};

export const useTheme = () => {
  const [theme, setTheme] = useState(appTheme);

  const { palette: { type } } = theme;
  const toggleDarkMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === 'light' ? 'dark' : 'light',
      }
    }
    console.log({ updatedTheme });

    setTheme(updatedTheme);
  }

  return [theme, toggleDarkMode];
}
