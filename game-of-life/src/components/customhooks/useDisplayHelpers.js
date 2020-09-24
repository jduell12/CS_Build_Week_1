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

export const cellDisplay = (alive, gridSize, color) => {
  let cellSize = 0;

  if (gridSize === 15) {
    cellSize = 20;
  } else if (gridSize === 25) {
    cellSize = 15;
  } else {
    cellSize = 10;
  }

  if (alive) {
    //generates random color
    if (color) {
      //generates random number between 0 and 16777215 then converts it to a string with base 16 aka generates hex code
      let color = Math.floor(Math.random() * 16777215).toString(16);
      //checks if random color is black to avoid marking a live cell as dead
      while (color === "000000") {
        color = Math.floor(Math.random() * 16777215).toString(16);
      }
      let randomColor = "#" + color;
      return {
        width: `${cellSize}`,
        height: `${cellSize}`,
        background: `${randomColor}`,
        border: `1px solid grey`,
      };
    }
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
