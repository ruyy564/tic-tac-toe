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

export const getWinnerLine = (cells) => {
  if (
    cells[0][0] &&
    cells[0][0] === cells[0][1] &&
    cells[0][0] === cells[0][2]
  ) {
    return [
      [0, 0],
      [0, 1],
      [0, 2],
    ];
  }

  if (
    cells[1][0] &&
    cells[1][0] === cells[1][1] &&
    cells[1][0] === cells[1][2]
  ) {
    return [
      [1, 0],
      [1, 1],
      [1, 2],
    ];
  }

  if (
    cells[2][0] &&
    cells[2][0] === cells[2][1] &&
    cells[2][0] === cells[2][2]
  ) {
    return [
      [2, 0],
      [2, 1],
      [2, 2],
    ];
  }

  if (
    cells[0][0] &&
    cells[0][0] === cells[1][0] &&
    cells[0][0] === cells[2][0]
  ) {
    return [
      [0, 0],
      [1, 0],
      [2, 0],
    ];
  }

  if (
    cells[0][1] &&
    cells[0][1] === cells[1][1] &&
    cells[0][1] === cells[2][1]
  ) {
    return [
      [0, 1],
      [1, 1],
      [2, 1],
    ];
  }

  if (
    cells[0][2] &&
    cells[0][2] === cells[1][2] &&
    cells[0][2] === cells[2][2]
  ) {
    return [
      [0, 2],
      [1, 2],
      [2, 2],
    ];
  }

  if (
    cells[0][0] &&
    cells[0][0] === cells[1][1] &&
    cells[0][0] === cells[2][2]
  ) {
    return [
      [0, 0],
      [1, 1],
      [2, 2],
    ];
  }

  if (
    cells[0][2] &&
    cells[0][2] === cells[1][1] &&
    cells[0][2] === cells[2][0]
  ) {
    return [
      [0, 2],
      [1, 1],
      [2, 0],
    ];
  }

  return false;
};
