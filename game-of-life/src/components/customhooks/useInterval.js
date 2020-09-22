import { useRef, useEffect } from "react";

/*
                useInterval 
Function that runs setInterval function within a React component and allows a re-render of the components when the grid changes

cbFunction - function to run within useInterval
delay - how often the cbFunction should be called (in ms)
grid - current gird being displayed to user
clickable - boolean if grid is clickable or not
*/
export const useInterval = (cbFunction, delay, grid, clickable) => {
  const callBack = useRef();

  useEffect(() => {
    callBack.current = cbFunction;
  }, [cbFunction]);

  useEffect(() => {
    if (!clickable) {
      function time() {
        callBack.current();
      }

      if (delay != null) {
        let id = setInterval(time, delay);
        return () => clearInterval(id);
      }
    }
  }, [delay, grid, clickable]);
};
