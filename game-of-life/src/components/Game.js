import React, { useRef, useState } from "react";

const Game = (props) => {
  const CELL_SIZE = 20;
  return (
    <div id="game">
      <div id="game-board"></div>
      <div>
        <button id="play">Play</button>
        <button id="pause">Pause</button>
        <button id="stop">Stop</button>
      </div>
    </div>
  );
};

export default Game;
