import { createSlice } from '@reduxjs/toolkit';

import { getWinnerLine, isFillCells } from '../../helpers';
import { PLAYERS } from '../../constants';

const initialState = {
  currentTurn: PLAYERS.ZERO,
  gameBoard: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  isFinished: false,
  winnerInfo: { [PLAYERS.ZERO]: 0, [PLAYERS.CROSS]: 0, [PLAYERS.DRAW]: 0 },
  winner: null,
  winnerLine: null,
};

export const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    makeTurn: (state, { payload }) => {
      const { i, j } = payload;

      if (!state.isFinished && !state.gameBoard[i][j]) {
        state.gameBoard[i][j] = state.currentTurn;
        const winnerLine = getWinnerLine(state.gameBoard);

        if (winnerLine) {
          state.winnerLine = winnerLine;
          state.winnerInfo[state.currentTurn] += 1;
          state.winner = `Winner is ${state.currentTurn}.`;
          state.isFinished = true;
        } else if (isFillCells(state.gameBoard)) {
          state.winnerInfo[PLAYERS.DRAW] += 1;
          state.winner = 'The draw.';
          state.isFinished = true;
        }

        if (!state.isFinished) {
          state.currentTurn =
            state.currentTurn === PLAYERS.ZERO ? PLAYERS.CROSS : PLAYERS.ZERO;
        }
      }
    },
    finishGame: (state) => {
      state.currentTurn = initialState.currentTurn;
      state.gameBoard = initialState.gameBoard;
      state.isFinished = initialState.isFinished;
      state.winnerInfo = initialState.winnerInfo;
      state.winner = initialState.winner;
      state.winnerLine = initialState.winnerLine;
    },
    continueGame: (state) => {
      state.currentTurn = initialState.currentTurn;
      state.gameBoard = initialState.gameBoard;
      state.isFinished = initialState.isFinished;
      state.winnerLine = initialState.winnerLine;
    },
  },
});

export const { finishGame, makeTurn, continueGame } = gameSlice.actions;

export default gameSlice.reducer;
