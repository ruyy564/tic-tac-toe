import { useEffect, useState } from 'react';

import { THEME, LOCAL_STORAGE_THEME } from '../constants';
import { ThemeContext } from '../contexts';
import { getTheme } from '../helpers';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    document.querySelector('html').dataset.theme = theme;
  }, [theme]);

  const switchTheme = () => {
    setTheme((currentTheme) => {
      const theme = currentTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;

      localStorage.setItem(LOCAL_STORAGE_THEME, theme);

      return theme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
