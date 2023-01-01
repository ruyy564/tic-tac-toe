import React from 'react';
import { Link } from 'react-router-dom';

import css from './index.module.css';

const LinkButton = ({ children, to, clickHandler }) => {
  return (
    <Link className={css.root} to={to} onClick={clickHandler}>
      {children}
    </Link>
  );
};

export default LinkButton;
