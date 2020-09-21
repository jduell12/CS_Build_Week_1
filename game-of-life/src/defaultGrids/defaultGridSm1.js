export const defaultGridSm1 = [];

let id = 1;

//creates generic 15x15 grid
for (let i = 1; i <= 15; i++) {
  for (let j = 1; j < 15; j++) {
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
