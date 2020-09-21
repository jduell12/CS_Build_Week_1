import React from "react";
import Grid from "./Grid";

const Game = () => {
  // const [] = useGrid();

  return (
    <div id="game">
      {/* <Grid /> */}
      <div>
        <button id="play">Play</button>
        <button id="pause">Pause</button>
        <button id="stop">Stop</button>
      </div>
    </div>
  );
};

export default Game;
