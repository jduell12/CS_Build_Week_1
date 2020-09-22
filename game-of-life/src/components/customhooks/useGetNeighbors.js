/*
    Returns an array of neighbors for the current cell
    [north, north_east, east, south_east, south, south_west, west, north_west]

    Neighbor directions in relation to cell

    NW   N   NE
        ----
     W  |  |  E
        ----
    SW    S  SE
*/
export const getNeighbors = (cell, width, height) => {
  //get the numbers for the current cell, width and height of the grid
  cell = parseInt(cell);
  width = parseInt(width);
  height = parseInt(height);

  //gets cell total for the grid
  const SIZE = width * height;

  //checks that the cell has 8 neighbors
  if (SIZE < 9) {
    return new Error(
      `grid-neighbors: Minimum grid size is 9 cells. Provided grid is only ${SIZE} cells`,
    );
  }

  //checks that the current cell is not larger than the size of the grid
  if (cell >= SIZE) {
    return new Error(
      `grid-neighbors: Current cell is out of bounds for the current grid. Maximum cell is ${
        SIZE - 1
      }`,
    );
  }

  //initial setup to check for neighbors
  const leftMostCell = Math.floor(cell / width) * width;
  const rightMostCell = leftMostCell + width - 1;
  const SIZE_MINUS_WIDTH = SIZE - width;
  const CELL_MINUS_WIDTH = cell - width;
  const CELL_PLUS_WIDTH = cell + width;
  const CELL_MOD_WIDTH = cell % width;
  const TOP_RIGHT = width - 1;
  const BOTTOM_RIGHT = SIZE - 1;

  let north;
  let north_east;
  let east;
  let south_east;
  let south;
  let south_west;
  let west;
  let north_west;

  //north neighbor
  if (CELL_MINUS_WIDTH < 0) {
    //cell is top row will wrap around to bottom of grid
    north = SIZE_MINUS_WIDTH + cell;
  } else {
    north = CELL_MINUS_WIDTH;
  }

  //south neighbor
  if (CELL_PLUS_WIDTH >= SIZE) {
    //wrap around to top of grid
    south = cell - leftMostCell;
  } else {
    south = CELL_PLUS_WIDTH;
  }

  //east neighbor, north-east neighbor, south-east neighbor
  //checks if cell is in right most column
  if (CELL_MOD_WIDTH === TOP_RIGHT) {
    east = leftMostCell;
    //cell is top right corner
    if (cell === TOP_RIGHT) {
      north_east = SIZE_MINUS_WIDTH;
      south_east = leftMostCell + width;
    }
    //cell is bottom right corner
    else if (cell === BOTTOM_RIGHT) {
      north_east = leftMostCell - width;
      south_east = 0;
    } else {
      north_east = leftMostCell - width;
      south_east = leftMostCell + width;
    }
  } else {
    east = cell + 1;
    north_east = north + 1;
    south_east = south + 1;
  }

  //west neighbor, south-west neighbor, north-west neighbor
  //checks if cell is in left most column
  if (CELL_MOD_WIDTH === 0) {
    west = rightMostCell;

    //cell is top left corner
    if (cell === 0) {
      north_west = BOTTOM_RIGHT;
      south_west = rightMostCell + width;
    }
    //cell is bottom left corner
    else if (cell === SIZE_MINUS_WIDTH) {
      north_west = cell - 1;
      south_west = TOP_RIGHT;
    } else {
      north_west = cell - 1;
      south_west = rightMostCell + width;
    }
  } else {
    west = cell - 1;
    north_west = north - 1;
    south_west = south - 1;
  }

  return [
    north,
    north_east,
    east,
    south_east,
    south,
    south_west,
    west,
    north_west,
  ];
};
