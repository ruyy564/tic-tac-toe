import React from 'react';
import { useSelector } from 'react-redux';

import {
  winnerSelector,
  winnerInfoSelector,
  isFinishedSelector,
  currentTurnSelector,
} from '../selectors';

import StatisticTable from '../components/StatisticTable';

const StatisticTableContainer = () => {
  const winnerInfo = useSelector(winnerInfoSelector);
  const winner = useSelector(winnerSelector);
  const isFinished = useSelector(isFinishedSelector);
  const currentTurn = useSelector(currentTurnSelector);

  return (
    <StatisticTable
      winnerInfo={winnerInfo}
      winner={winner}
      isFinished={isFinished}
      currentTurn={currentTurn}
    />
  );
};

export default StatisticTableContainer;
