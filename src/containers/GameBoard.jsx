import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeTurn } from '../store/slices/gameSlice';
import { cellsSelector, winnerLineSelector } from '../selectors';

import Board from '../components/Board';
import Cell from '../components/Cell';

const GameBoard = () => {
  const cells = useSelector(cellsSelector);
  const winnerLine = useSelector(winnerLineSelector);
  const dispatch = useDispatch();

  const clickHandler = (i, j) => {
    dispatch(makeTurn({ i, j }));
  };

  const isWinCell = (winnerLine, columnIndex, rowIndex) =>
    winnerLine &&
    ((winnerLine[0][0] === columnIndex && winnerLine[0][1] === rowIndex) ||
      (winnerLine[1][0] === columnIndex && winnerLine[1][1] === rowIndex) ||
      (winnerLine[2][0] === columnIndex && winnerLine[2][1] === rowIndex));

  return (
    <Board>
      {cells.map((cell, columnIndex) =>
        cell.map((label, rowIndex) => {
          return (
            <Cell
              key={columnIndex + rowIndex}
              label={label}
              win={isWinCell(winnerLine, columnIndex, rowIndex)}
              clickHandler={() => clickHandler(columnIndex, rowIndex)}
            />
          );
        })
      )}
    </Board>
  );
};

export default GameBoard;
