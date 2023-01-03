import { createSlice } from '@reduxjs/toolkit';

import { isFinishTheGame, isFillCells } from '../../helpers';
import { PLAYERS } from '../../constants';

const initialState = {
  currentTurn: PLAYERS.ZERO,
  gameBoard: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  isFinished: false,
  winnerInfo: { [PLAYERS.ZERO]: 0, [PLAYERS.CROSS]: 0, DRAW: 0 },
  winner: null,
};

export const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    makeTurn: (state, { payload }) => {
      const { i, j } = payload;

      if (!state.isFinished && !state.gameBoard[i][j]) {
        state.gameBoard[i][j] = state.currentTurn;

        if (isFinishTheGame(state.gameBoard)) {
          state.winnerInfo[state.currentTurn] += 1;
          state.winner = `Winner: ${state.currentTurn}.`;
          state.isFinished = true;
        } else if (isFillCells(state.gameBoard)) {
          state.winnerInfo.DRAW += 1;
          state.winner = 'Draw';
          state.isFinished = true;
        }

        if (!state.isFinished) {
          state.currentTurn =
            state.currentTurn === PLAYERS.ZERO ? PLAYERS.CROSS : PLAYERS.ZERO;
        }
      }
    },
    restart: (state) => {
      state.currentTurn = initialState.currentTurn;
      state.gameBoard = initialState.gameBoard;
      state.isFinished = initialState.isFinished;
      state.winnerInfo = initialState.winnerInfo;
      state.winner = initialState.winner;
    },
    continueGame: (state) => {
      state.currentTurn = initialState.currentTurn;
      state.gameBoard = initialState.gameBoard;
      state.isFinished = initialState.isFinished;
    },
  },
});

export const { restart, makeTurn, continueGame } = gameSlice.actions;

export default gameSlice.reducer;
