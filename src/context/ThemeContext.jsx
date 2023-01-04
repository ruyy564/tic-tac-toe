import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext('light');

const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
};

const getTheme = () => {
  let theme = localStorage.getItem('theme');

  if (!theme) {
    localStorage.setItem('theme', THEME.LIGHT);
    theme = THEME.LIGHT;
  }

  return theme;
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    document.querySelector('html').dataset.theme = theme;
  }, [theme]);

  const switchTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
