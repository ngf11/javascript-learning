//Day 6
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }
// for (let i = 0; i <= 10; i = i + 2) {
//   console.log(i);
// }
// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
// do {
//   console.log(i);
//   i++;
// } while (i <= 6);
// let i = 5;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }
// do {
//   console.log(i);
//   i--;
// } while (i >= 2);
// const fruits = ["Banana", "Apple", "Orange", "Mango"];
// for (const fruit of fruits) {
//   console.log(fruit);
// }
// for (const fruit of fruits) {
//   console.log([fruit, fruit.slice(0, 3).toUpperCase(), fruit.length]);
// }
// let reverseFruits = [];
// for (let i = fruits.length - 1; i >= 0; i--) {
//   const arr = fruits[i];
//   reverseFruits.push(arr);
// }
// console.log(reverseFruits);
// let pattern = 10;
// for (let i = 1; i < 10; i++) {
//   let empty = "";
//   for (let j = 1; j <= i; i++) {
//     empty += "#";
//   }
//   console.log(empty);
// }
// console.log("hell");
const num = 10;
for (let i = 1; i <= num; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "#";
  }
  console.log(row);
}
const pattern = 10;
for (let i = 10; i >= 0; i--) {
  let fila = "";
  for (let j = 10; j >= i; j--) {
    fila += "$";
  }
  console.log(fila);
}
