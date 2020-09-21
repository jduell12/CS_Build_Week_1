import React from "react";

/*
    Returns an array of neighbors for the current cell
    [north, north_east, east, south_east, south, south_west, west, north_west]
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
};
