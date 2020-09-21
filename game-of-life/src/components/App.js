import React from "react";
import Game from "./Game";
import Rules from "./Rules";
import About from "./About";

const App = () => {
  return (
    <div>
      <h1>Conway's Game of Life</h1>
      <div id="game-rules">
        <Game />
        <Rules />
      </div>
      <About />
    </div>
  );
};

export default App;
