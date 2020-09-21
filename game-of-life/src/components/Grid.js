import React from "react";
import { cellDisplay, gridDisplay } from "./customhooks/useDisplayHelpers";

const Grid = (grid, toggleLife, clickable, gridSize) => {
  return (
    <div className="grid" style={gridDisplay(gridSize)}>
      {grid.map((cell, i) => {
        return (
          <div
            key={cell.id}
            className={cell.alive ? "alive" : "dead"}
            onClick={clickable ? toggleLife : null}
            data-id={cell.id}
            style={cellDisplay(cell.alive, gridSize)}
          />
        );
      })}
    </div>
  );
};

export default Grid;