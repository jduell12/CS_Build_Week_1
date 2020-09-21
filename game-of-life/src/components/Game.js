import React, { useRef, useState } from "react";
import { useAnimationFrame } from "./useAnimeFrame";
import moment from "moment";

const Game = (props) => {
  const canvasRef = useRef(null);
  const [stopAnimation, setStopAnimation] = useState(false);

  const doAnimation = (elapsedTime) => {
    console.log(`elapsed time: ${elapsedTime}`);
    console.log(canvasRef.current);
  };

  //   const cancelAnimation = () => {};

  const [cancelAnimation] = useAnimationFrame(moment.now(), doAnimation);

  return (
    <div id="game">
      <canvas ref={canvasRef} width={props.width} height={props.height} />
      <button id="play" onClick={() => doAnimation}>
        Play
      </button>
      <button id="pause" onClick={() => cancelAnimation}>
        Pause
      </button>
      <button id="stop" onClick={() => cancelAnimation}>
        Stop
      </button>
    </div>
  );
};

export default Game;
