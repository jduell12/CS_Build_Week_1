import React, { useState, useCallback } from "react";
import { defaultGridSm1 } from "../defaultGrids/defaultGridSm1.js";

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

    const nextGeneration = grid.map((cell, i) => {});
  };
};
