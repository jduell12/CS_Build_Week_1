export const defaultGridLg1 = [];

let id = 0;

//creates generic 38x38 grid
for (let i = 0; i < 38; i++) {
  for (let j = 0; j < 38; j++) {
    let newObj = {
      column: i,
      row: j,
      alive: false,
      clickable: true,
      id: id,
    };
    defaultGridLg1.push(newObj);
    id++;
  }
}
