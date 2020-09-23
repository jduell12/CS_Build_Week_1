export const defaultGridMed1 = [];

let id = 0;

//creates generic 15x15 grid
for (let i = 0; i < 38; i++) {
  for (let j = 0; j < 38; j++) {
    let newObj = {
      column: i,
      row: j,
      alive: false,
      clickable: true,
      id: id,
    };
    defaultGridMed1.push(newObj);
    id++;
  }
}
