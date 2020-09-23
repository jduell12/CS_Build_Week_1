//helper function that changes the amount of space given to each col and row within the grid
// sizes are 10x10, 15x15 or 30x30
export const gridDisplay = (gridSize) => {
  if (gridSize === 15) {
    return {
      display: "grid",
      gridTemplateColumns: `repeat(${gridSize}, 20px)`,
      gridTemplateRows: `repeat(${gridSize}, 20px)`,
    };
  } else if (gridSize === 25) {
    return {
      display: "grid",
      gridTemplateColumns: `repeat(${gridSize}, 15px)`,
      gridTemplateRows: `repeat(${gridSize}, 15px)`,
    };
  } else {
    return {
      display: "grid",
      gridTemplateColumns: `repeat(${gridSize}, 10px)`,
      gridTemplateRows: `repeat(${gridSize}, 10px)`,
    };
  }
};

export const cellDisplay = (alive, gridSize) => {
  let cellSize = 0;

  if (gridSize === 15) {
    cellSize = 20;
  } else if (gridSize === 25) {
    cellSize = 15;
  } else {
    cellSize = 10;
  }

  if (alive) {
    return {
      width: `${cellSize}`,
      height: `${cellSize}`,
      background: `white`,
      border: `1px solid grey`,
    };
  } else {
    return {
      width: `${cellSize}`,
      height: `${cellSize}`,
      background: `black`,
      border: `0.1px solid grey`,
    };
  }
};
