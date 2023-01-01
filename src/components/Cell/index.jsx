import React from 'react';

import { PLAYERS } from '../../constants';

import css from './index.module.css';

const Cell = ({ label, clickHandler }) => {
  const cellClass = label === PLAYERS.CROSS ? css.cross : css.zero;
  return (
    <div className={`${css.root} ${cellClass}`} onClick={clickHandler}>
      {label}
    </div>
  );
};

export default Cell;
