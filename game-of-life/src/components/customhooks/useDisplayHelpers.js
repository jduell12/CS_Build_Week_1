//helper function that changes the amount of space given to each col and row within the grid
// sizes are 10x10, 15x15 or 30x30
export const gridDisplay = (gridSize) => {
  if (gridSize === 25) {
    return {
      display: "grid",
      gridTemplateColumns: `repeat(${gridSize}, 15px)`,
      gridTemplateRows: `repeat(${gridSize}, 15px)`,
    };
  } else if (gridSize === 38) {
    return {
      display: "grid",
      gridTemplateColumns: `repeat(${gridSize}, 10px)`,
      gridTemplateRows: `repeat(${gridSize}, 10px)`,
    };
  } else {
    return {
      display: "grid",
      gridTemplateColumns: `repeat(${gridSize}, 8px)`,
      gridTemplateRows: `repeat(${gridSize}, 8px)`,
    };
  }
};

export const cellDisplay = (alive, gridSize) => {
  let cellSize = 0;

  if (gridSize === 25) {
    cellSize = 15;
  } else if (gridSize === 38) {
    cellSize = 10;
  } else {
    cellSize = 8;
  }

  if (alive && cellSize != 8) {
    return {
      width: `${cellSize}`,
      height: `${cellSize}`,
      background: `white`,
      border: `1px solid grey`,
    };
  } else if (alive) {
    return {
      width: `${cellSize}`,
      height: `${cellSize}`,
      background: `white`,
      border: `0.1px solid grey`,
    };
  } else if (!alive && cellSize != 8) {
    return {
      width: `${cellSize}`,
      height: `${cellSize}`,
      background: `black`,
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
