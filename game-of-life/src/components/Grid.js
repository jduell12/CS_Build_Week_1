import React from "react";
import { cellDisplay, gridDisplay } from "./customhooks/useDisplayHelpers";

const Grid = ({ grid, changeLife, clickable, gridSize, color }) => {
  return (
    <div className="board" style={gridDisplay(gridSize)}>
      {grid.map((cell, i) => {
        return (
          <div
            id={i}
            key={Math.random() * gridSize}
            className={cell.alive ? "alive" : "dead"}
            onClick={clickable ? changeLife : null}
            data-id={cell.id}
            style={cellDisplay(cell.alive, gridSize, color)}
          />
        );
      })}
    </div>
  );
};

export default Grid;
