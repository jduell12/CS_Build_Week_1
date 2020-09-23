export const defaultGridLg1 = [];

let id = 0;

//creates generic 25x25 grid
for (let i = 0; i < 50; i++) {
  for (let j = 0; j < 50; j++) {
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
