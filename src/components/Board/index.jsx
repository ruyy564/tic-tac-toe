import React from 'react';

import css from './index.module.css';

const Board = ({ children }) => {
  return <div className={css.root}>{children}</div>;
};

export default Board;
