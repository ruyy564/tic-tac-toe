import React from 'react';

import Link from '../../components/Link';
import SwitchThemeButton from '../../containers/SwitchThemeButton';

import css from './index.module.css';

const MenuPage = () => {
  return (
    <div className={css.root}>
      <Link to="/twoplayer">Start game</Link>
      <SwitchThemeButton />
    </div>
  );
};

export default MenuPage;
