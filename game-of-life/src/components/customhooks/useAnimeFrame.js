import React, { useEffect, useState } from "react";

//custom hook for using animation frame
export const useAnimationFrame = (
  timestamp,
  doAnimationCallback,
  continueA,
) => {
  //set prev timestamp
  const [prevTimeStamp, setTimeStamp] = useState(timestamp - 30);
  const [started, setStarted] = useState(false);
  const [continueAnimation, setContinueAnimation] = useState(continueA);

  useEffect(() => {
    //only start the animation frame if it's not started
    if (!started) {
      setStarted(true);
      requestAnimationFrame(onFrame);
    }
  }, [started]);

  //request the first animation frame to start the animation
  const onFrame = (timestamp) => {
    if (continueAnimation) {
      requestAnimationFrame(onFrame);
    }

    const elapsed = prevTimeStamp - timestamp;
    setTimeStamp(timestamp);
    console.log(`Current time: ${timestamp} ms, frame time: ${elapsed} ms`);

    //call callback function and passed in elapsed time
    doAnimationCallback(elapsed);
  };

  //stops the hook from calling the next animation frame
  const cancelAnimation = () => {
    setContinueAnimation(false);
  };
  return [cancelAnimation];
};
