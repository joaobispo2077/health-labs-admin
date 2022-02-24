import { useState } from 'react';

import { ThemeContext, ThemeOptions } from '../contexts/ThemeContext';
import { darkTheme, lightTheme } from '../styles/theme';

export const ThemeProvider: React.FC = (props) => {
  const [theme, setTheme] = useState<ThemeOptions>('dark');

  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        selectedTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
