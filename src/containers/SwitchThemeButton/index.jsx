import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import css from './index.module.css';

const SwitchThemeButton = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  return <div className={css.root} onClick={switchTheme} />;
};

export default SwitchThemeButton;
