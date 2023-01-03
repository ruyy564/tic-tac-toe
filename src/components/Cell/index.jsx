import React from 'react';

import { PLAYERS } from '../../constants';

import css from './index.module.css';

const Cell = ({ label, clickHandler, win }) => {
  const cellClass = label === PLAYERS.CROSS ? css.cross : css.zero;

  return (
    <div
      className={`${css.root} ${cellClass} ${win ? css.win : ''}`}
      onClick={clickHandler}
    >
      {label}
    </div>
  );
};

export default Cell;
