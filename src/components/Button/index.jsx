import React from 'react';

import css from './index.module.css';

const Button = ({ children, clickHandler }) => {
  return (
    <button className={css.root} onClick={clickHandler}>
      {children}
    </button>
  );
};

export default Button;
