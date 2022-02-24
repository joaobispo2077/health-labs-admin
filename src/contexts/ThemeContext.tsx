import { createContext } from 'react';

import { Theme } from '@material-ui/core/styles';
export type ThemeOptions = 'light' | 'dark';

export type ThemeProps = {
  theme: ThemeOptions;
  setTheme(theme: ThemeOptions): void;
  selectedTheme: Theme;
};

export const ThemeContext = createContext<ThemeProps>({
  theme: 'light',
  setTheme: () => {
    return;
  },
  selectedTheme: {} as Theme,
});
