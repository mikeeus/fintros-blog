import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    // primary: {
    //   main: '',
    // },
    secondary: {
      main: '#cc835c',
    },
    // error: {
    //   main: '',
    // },
    background: {
      default: '#fbf8f5',
    },
    type: 'dark',
  },
});

export default theme;