import React from 'react';

import { PLAYERS } from '../../constants';

import css from './index.module.css';

const StatisticTable = ({ winner, winnerInfo, isFinished }) => {
  return (
    <>
      <div>{isFinished && `The game is over. ${winner}`}</div>

      <div className={css.root}>
        <div>Player 0:{winnerInfo[PLAYERS.ZERO]}</div>
        <div>Player X:{winnerInfo[PLAYERS.CROSS]}</div>
        <div>The draw:{winnerInfo[PLAYERS.DRAW]}</div>
      </div>
    </>
  );
};

export default StatisticTable;
