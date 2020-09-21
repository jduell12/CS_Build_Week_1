import React, { useRef, useEffect, useState } from "react";

const Game = (props) => {
  const canvasRef = useRef(null);
  return (
    <div id="game">
      <canvas ref={canvasRef} width={props.width} height={props.height} />
      <button id="play">Play</button>
      <button id="pause">Pause</button>
      <button id="stop">Stop</button>
    </div>
  );
};

export default Game;
