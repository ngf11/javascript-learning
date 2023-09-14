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
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);
let sumEven = 0;
let sumOdd = 0;
let sums = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  }
  if (i % 2 !== 0) {
    sumOdd += i;
  }
}
sums.push(sumOdd);
sums.push(sumEven);
console.log(sumEven, sumOdd, sums);
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (let i = 0; i < 1; i++) {
  let ranNum = [];
  for (let j = 1; j <= 5; j++) {
    let random = Math.floor(Math.random() * nums.length);
    ranNum.push(nums[random]);
  }
  console.log(ranNum);
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffleArray(nums);
let ranNum = nums.slice(0, 5);
console.log(ranNum);
let lettersAndNums =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxwz12345647890";
let strSplit = lettersAndNums.split("");
console.log(strSplit);
for (let i = 1; i <= 1; i++) {
  let userId = "";
  for (let j = 1; j < 6; j++) {
    let random = Math.floor(Math.random() * strSplit.length);
    userId += strSplit[random];
  }
  console.log(userId);
}
