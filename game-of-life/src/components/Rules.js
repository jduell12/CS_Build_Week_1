import React from "react";

const Rules = () => {
  return (
    <div>
      <h2>Rules</h2>
      <ul>
        <li>Each cell in the grid can be in one of two states: live or dead</li>
        <li>Every cell interacts with its eight neighbors</li>
        <ul>
          <li>
            Cells that are horizontally, vertically or diagonally adjacent to it
          </li>
        </ul>
        <li>At each generation the following will occur:</li>
        <ul>
          <li>
            Any live cell with fewer than 2 live neighbors dies (solitude)
          </li>
          <li>
            Any live cell with more than 3 live neighbors dies (overpopulation)
          </li>
          <li>Any live cell with only 2 or 3 live neighbors lives </li>
          <li>
            Any dead cell with exactly 3 live neighbors becomes a live cell
            (reproduction)
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Rules;
