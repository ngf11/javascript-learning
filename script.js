//day 06
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
// } while (i <= 10);
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }
// let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }
// do {
//   console.log(i);
//   i--;
// } while (i > 0);
// let n = 100;
// for (let i = 0; i <= n; i++) {
//   console.log(i);
// }
for (let i = 1; i < 10; i++) {
  let pattern = "";
  let rev = "";
  for (let j = 0; j < i; j++) {
    pattern += "#";
  }
  for (let r = 10; r >= i; r--) {
    rev += "#";
  }
  console.log(`${pattern} ${rev}`);
}

for (let i = 0; i <= 10; i++) {
  console.log(`${i} X ${i} = ${i * i}`);
}
console.log("i  i^2  i^3 ");
for (let i = 0; i <= 10; i++) {
  console.log(`${i}  ${i * i}  ${i * i * i}`);
}
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
