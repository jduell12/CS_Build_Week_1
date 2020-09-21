import React from "react";
import Gameboard from "./Gameboard";

const Game = () => {
  return (
    <div id="game">
      <Gameboard />
      <div>
        <button id="play">Play</button>
        <button id="pause">Pause</button>
        <button id="stop">Stop</button>
      </div>
    </div>
  );
};

export default Game;
