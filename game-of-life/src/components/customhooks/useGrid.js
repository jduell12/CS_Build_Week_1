import React, { useState, useCallback } from "react";
import { defaultGridSm1 } from "../../defaultGrids/defaultGridSm1";
import { getNeighbors } from "./useGetNeighbors";

export const useGrid = () => {
  const [grid, setGrid] = useState(defaultGridSm1);
  const [generation, setGeneration] = useState(0);
  const [clickable, setClickable] = useState(true);
  const [speed, setSpeed] = useState("");
  const [gridSize, setGridSize] = useState(15);

  /* 
    creates an array of objects where the alive property is randomly set to true or false  

    sets current generation to 0

    sets the current grid to the random grid created 
    
    returns memoized callback which increases run time of the program
    */
  const makeGridRandom = useCallback((num) => {
    let numberOfCells = num * num;
    let randomGrid = [];

    for (let i = 0; i < numberOfCells; i++) {
      randomGrid = [...randomGrid, { alive: Math.round(Math.random()) }];
    }

    setGeneration(0);
    setGrid(randomGrid);
  }, []);

  /*
    Checks if the random gird generated is valid. If not valid sends an alert to the user letting them know. 
    If the grid is valid the cells that should be changed will be based on the rules of Conway's Game of Life (found in Rules) and will increment the generation
  */
  const checkValidGrid = () => {
    let validGrid = false;

    const nextGeneration = grid.map((cell, i) => {
      let neighbors = getNeighbors(i, gridSize, gridSize);
      let livingNeighbors = 0;

      //counts the number of living neighbors around the cell
      neighbors.forEach((neigbor) => {
        grid[neigbor].alive ? (livingNeighbors += 1) : (livingNeighbors += 0);
      });

      //check if cell lives
      if (cell.alive && (livingNeighbors === 2 || livingNeighbors == 3)) {
        return cell;
      }

      //checks if cell dies from solitude or overpopulation
      if (cell.alive && (livingNeighbors < 2 || livingNeighbors >= 4)) {
        validGrid = true;
        //kills the cell
        return { ...cell, alive: false };
      }

      //checks if cell comes alive due to having 3 neighbors
      if (!cell.alive && livingNeighbors === 3) {
        validGrid = true;
        //cell comes alive (reprduction)
        return { ...cell, alive: true };
      }
      return cell;
    });

    if (validGrid) {
      setGeneration((generation += 1));
    } else {
      //allow user to make changes to grid
      setClickable(true);
      return alert(
        "Grid is invalid or no changes can be made due to the rules of the game. \n Change the cell configuration to continue.",
      );
    }

    setGrid(nextGeneration);
  };

  //maps over the current grid and returns a new grid that is changed based on if the current cell matches the data-id of the current target
  const changeLife = (event) => {
    const column = event.target.dataset.column;
    const row = event.target.dataset.row;
    const id = event.target.dataset.id;

    const newGrid = grid.map((cell) => {
      if (cell.id === id) {
        return {
          column: +column,
          row: +row,
          alive: !cell.alive,
          clickable: true,
          id: +id,
        };
      } else {
        return cell;
      }
    });

    setGrid(newGrid);
  };

  const setDefaultGrid = (event) => {
    event.preventDefault();
    if (event.target.value === "Clear Grid") {
      setGridSize(15);
      setGrid(defaultGridSm1);
      setGeneration(0);
    }
  };

  return [
    grid,
    setGrid,
    generation,
    setGeneration,
    clickable,
    setClickable,
    speed,
    setSpeed,
    checkValidGrid,
    changeLife,
    setDefaultGrid,
    makeGridRandom,
    gridSize,
    setGridSize,
  ];
};
