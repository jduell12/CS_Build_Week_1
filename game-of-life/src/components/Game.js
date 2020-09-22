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

  useInterval(checkValidGrid, speed || 500, grid, clickable);

  return (
    <div id="game">
      <h1>Generation: {generation}</h1>
      <div className="grid-buttons">
        <Grid
          grid={grid}
          changeLife={changeLife}
          clickable={clickable}
          gridSize={gridSize}
        />
        <div className="side-buttons">
          <h3>Grid Sizes</h3>
          <button onClick={() => setGridSize(10)}>Small</button>
          <button onClick={() => setGridSize(15)}>Medium</button>
          <button onClick={() => setGridSize(30)}>Large</button>
        </div>
      </div>
      <div className="controls">
        <button onClick={() => setClickable(!clickable)}>
          {clickable ? "Play" : "Stop"}
        </button>
        <button onClick={() => checkValidGrid()}>Next Generation</button>
        <button onClick={() => makeGridRandom(15)}>Random Grid</button>
        <button value="Clear Grid" onClick={clickable ? setDefaultGrid : null}>
          Clear Grid
        </button>
      </div>
    </div>
  );
};

export default Game;
