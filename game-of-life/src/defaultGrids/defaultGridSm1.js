let defaultGridSM1 = [];

let id = 1;

//creates random 15x15 grid
for (let i = 1; i <= 15; i++) {
  for (let j = 1; j < 15; j++) {
    let checkAlive = Math.floor(Math.random() * 2);
    let newObj = {
      column: i,
      row: j,
      alive: checkAlive == 1 ? true : false,
      clickable: true,
      id: id,
    };
    defaultGridSM1.push(newObj);
    id++;
  }
}

export const defaultGridSM1;
