import React from 'react';

import Link from '../../components/Link';
import Wrapper from '../../components/Wrapper';

import css from './index.module.css';

const MenuPage = () => {
  return (
    <div className={css.root}>
      <Wrapper>
        <Link to="/twoplayer">Start game</Link>
      </Wrapper>
    </div>
  );
};

export default MenuPage;
