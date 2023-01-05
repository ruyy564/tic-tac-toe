import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts';

import css from './index.module.css';

const SwitchThemeButton = () => {
  const { switchTheme } = useContext(ThemeContext);

  return <div className={css.root} onClick={switchTheme} />;
};

export default SwitchThemeButton;
