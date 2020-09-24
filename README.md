# Cellular Automata and Conway's "Game of Life"

Application that runs different "Game of Life" scenarios.

Project can be found at: https://conways-game-of-life-rosy.vercel.app/

# React Application

- Grid to display cells
- While not running a cell can be clicked to setup initial cell configuration
  - alive = white
  - dead = black

# Algorithm

- For each cell in the current generations grid:
  - examine the state of all eight neighbors of the cells
  - apply rules of life to determine if this cell will change states
    - each cell with 1 or no neighbors dies (solitude)
    - each cell with 4 or more neighbors dies (overpopulation)
    - each cell with 2 or 3 neighbors survives
    - each empty cell with 3 neighbors becomes populated
  - when loop completes:
    - swap current and next grids
    - repeat until simulation stopped
- Since this algorithm allows changes the state of cells based on pre-defined rules it is considered a Turing machine. Since it's able to emulate a Turing machine it's considered Turing complete
