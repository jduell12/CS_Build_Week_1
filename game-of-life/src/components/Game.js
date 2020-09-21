import React from "react";
import Grid from "./Grid";
import { useInterval } from "./customhooks/useInterval";
import { useGrid } from "./customhooks/useGrid";

const Game = () => {
  const [
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
  ] = useGrid();

  useInterval(checkValidGrid, +speed || 500, grid, clickable);

  return (
    <div id="game">
      <h1>Generation: {generation}</h1>
      <Grid
        grid={grid}
        // setGrid={setGrid}
        changeLife={changeLife}
        clickable={clickable}
        // checkValidGrid={checkValidGrid}
        gridSize={gridSize}
      />
      <div>
        <button id="play">Play</button>
        <button id="pause">Pause</button>
        <button id="stop">Stop</button>
      </div>
    </div>
  );
};

export default Game;
