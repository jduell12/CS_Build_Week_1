import React, { useState } from "react";
import Grid from "./Grid";
import { useInterval } from "./customhooks/useInterval";
import { useGrid } from "./customhooks/useGrid";

const Game = () => {
  const [color, setColor] = useState(false);

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
  ] = useGrid();

  useInterval(
    checkValidGrid,
    gridSize === 15 || gridSize == 25 ? 250 : 10,
    grid,
    clickable,
  );

  return (
    <div id="game">
      <h1>Generation: {generation}</h1>
      <div className="grid-buttons">
        <div id="color">
          <button onClick={() => setColor(!color)}>Random Cell Colors</button>
        </div>
        <Grid
          grid={grid}
          changeLife={changeLife}
          clickable={clickable}
          gridSize={gridSize}
          color={color}
        />
        <div className="side-buttons">
          <h2>
            {gridSize} x {gridSize}
          </h2>
          <h3>Grid Sizes</h3>
          <button value="Small" onClick={clickable ? setDefaultGrid : null}>
            Small
          </button>
          <button value="Medium" onClick={clickable ? setDefaultGrid : null}>
            Medium
          </button>
          <button value="Large" onClick={clickable ? setDefaultGrid : null}>
            Large
          </button>
        </div>
      </div>
      <h4>Random Colors : {color ? "On" : "Off"}</h4>
      <div className="controls">
        <div className="top">
          <button onClick={() => setClickable(!clickable)}>
            {clickable ? "Play" : "Stop"}
          </button>
          <button onClick={() => checkValidGrid()}>Next Generation</button>
        </div>
        <div className="bottom">
          <button onClick={() => makeGridRandom(gridSize)}>Random Grid</button>
          <button
            value="Clear Grid"
            onClick={clickable ? setDefaultGrid : null}
          >
            Clear Grid
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
