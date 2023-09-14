// // Day 6
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// while (i <= 10) {
//     console.log(i);
//     i++;
// }
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }
// let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }
// let i = 5;
// do {
//   console.log(i);
//   i--;
// } while (i >= 0);
for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += "#";
  }
  console.log(str);
}
for (let i = 0; i <= 10; i++) {
  console.log(`${i}x${i} = ${i * i}`);
}
for (let i = 0; i <= 10; i++) {
  console.log(`${i}\t${i * i}\t${i * i * i}`);
}
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
