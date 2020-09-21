//helper function that changes the amount of space given to each col and row within the grid
// sizes are 15x15, 30x30 or 50x50
export const gridDisplay = (gridSize) => {
  if (gridSize === 15) {
    return {
      display: "grid",
      gridTemplateColumns: `repeat(${gridSize}, 20px)`,
      gridTemplateRows: `repeat(${gridSize}, 20px)`,
    };
  }
};

export const cellDisplay = (alive, gridSize) => {
  let cellSize = 0;

  if (gridSize === 15) {
    cellSize = 20;
  }

  if (alive) {
    return {
      width: `${cellSize}`,
      height: `${cellSize}`,
      background: `white`,
    };
  } else {
    return {
      width: `${cellSize}`,
      height: `${cellSize}`,
      background: `black`,
    };
  }
};
