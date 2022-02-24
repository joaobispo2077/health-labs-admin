import { createMuiTheme, defaultTheme } from 'react-admin';

export const lightTheme = createMuiTheme(
  Object.assign({}, defaultTheme, {
    palette: {
      ...defaultTheme.palette,
      type: 'light',
    },
  }),
);

export const darkTheme = createMuiTheme(
  Object.assign({}, defaultTheme, {
    palette: {
      ...defaultTheme.palette,
      type: 'dark',
    },
  }),
);
