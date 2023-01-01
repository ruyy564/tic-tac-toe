export const cellsSelector = (state) => state.game.gameBoard;
export const winnerSelector = (state) => state.game.winner;
export const winnerInfoSelector = (state) => state.game.winnerInfo;
export const currentTurnSelector = (state) => state.game.currentTurn;
export const isFinishedSelector = (state) => state.game.isFinished;
