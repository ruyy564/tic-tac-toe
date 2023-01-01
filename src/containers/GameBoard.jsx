import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeTurn } from '../store/slices/gameSlice';
import { cellsSelector } from '../selectors';

import Board from '../components/Board';
import Cell from '../components/Cell';

const GameBoard = () => {
  const cells = useSelector(cellsSelector);
  const dispatch = useDispatch();

  const clickHandler = (i, j) => {
    dispatch(makeTurn({ i, j }));
  };

  return (
    <Board>
      {cells.map((cell, columnIndex) =>
        cell.map((label, rowIndex) => (
          <Cell
            key={columnIndex + rowIndex}
            label={label}
            clickHandler={() => clickHandler(columnIndex, rowIndex)}
          />
        ))
      )}
    </Board>
  );
};

export default GameBoard;
