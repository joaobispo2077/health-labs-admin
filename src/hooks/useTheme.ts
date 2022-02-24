import { useContext } from 'react';

import { ThemeContext, ThemeProps } from '../contexts/ThemeContext';

export const useTheme = (): ThemeProps => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
