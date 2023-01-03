import React from 'react';

import css from './index.module.css';

const StatisticTable = ({ winner, winnerInfo, isFinished }) => {
  return (
    <>
      <div height="100px">{isFinished && `Game is over. ${winner}`}</div>

      <div className={css.root}>
        <div>Player 0:{winnerInfo['0']}</div>
        <div>Player X:{winnerInfo['X']}</div>
        <div>Draw:{winnerInfo['DRAW']}</div>
      </div>
    </>
  );
};

export default StatisticTable;
