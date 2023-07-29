// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// do {
//   console.log(i);
//   i++;
// } while (i <= 9);
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }
// let i = 11;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }
// do {
//   console.log(i);
//   i--;
// } while (i >= 1);
const num = 10;
for (let i = 1; i <= num; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "#";
  }
  console.log(row);
}
