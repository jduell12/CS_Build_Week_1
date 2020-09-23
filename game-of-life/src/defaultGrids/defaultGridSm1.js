export const defaultGridSm1 = [];

let id = 0;

//creates generic 10x10 grid
for (let i = 0; i < 25; i++) {
  for (let j = 0; j < 25; j++) {
    let newObj = {
      column: i,
      row: j,
      alive: false,
      clickable: true,
      id: id,
    };
    defaultGridSm1.push(newObj);
    id++;
  }
}
