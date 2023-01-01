export const isFillCells = (cells) => {
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      if (!cells[i][j]) {
        return false;
      }
    }
  }

  return true;
};

export const isFinishTheGame = (cells) => {
  if (
    cells[0][0] &&
    cells[0][0] === cells[0][1] &&
    cells[0][0] === cells[0][2]
  ) {
    return true;
  }

  if (
    cells[1][0] &&
    cells[1][0] === cells[1][1] &&
    cells[1][0] === cells[1][2]
  ) {
    return true;
  }

  if (
    cells[2][0] &&
    cells[2][0] === cells[2][1] &&
    cells[2][0] === cells[2][2]
  ) {
    return true;
  }

  if (
    cells[0][0] &&
    cells[0][0] === cells[1][0] &&
    cells[0][0] === cells[2][0]
  ) {
    return true;
  }

  if (
    cells[0][1] &&
    cells[0][1] === cells[1][1] &&
    cells[0][1] === cells[2][1]
  ) {
    return true;
  }

  if (
    cells[0][2] &&
    cells[0][2] === cells[1][2] &&
    cells[0][2] === cells[2][2]
  ) {
    return true;
  }

  if (
    cells[0][0] &&
    cells[0][0] === cells[1][1] &&
    cells[0][0] === cells[2][2]
  ) {
    return true;
  }

  if (
    cells[0][2] &&
    cells[0][2] === cells[1][1] &&
    cells[0][2] === cells[2][0]
  ) {
    return true;
  }

  return false;
};
