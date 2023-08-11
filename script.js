let letterNums =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWHYZ1234567890";
let numLetterSlit = letterNums.split("");
let char = [];
let randomInt = Math.floor(Math.random() * 22);
for (let i = 0; i <= randomInt; i++) {
  let random = Math.floor(Math.random() * numLetterSlit.length);
  char.push(numLetterSlit[random]);
}
console.log(char.join(""));
let hexArr = ["A", "B", "C", "E", "F", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const hexLength = 6;
let hexResultArr = [];
for (let i = 0; i < hexLength; i++) {
  let random = Math.floor(Math.random() * hexArr.length);
  hexResultArr.push(hexArr[random]);
}
let hexrResponse = `#${hexResultArr.join("")}`;
console.log(hexrResponse);
let rgbRandom = Math.floor(Math.random() * 256);
for (let i = 1; i <= 3; i++) {
  console.log(`rgb(${rgbRandom[i]}, ${rgbRandom[i]}, ${rgbRandom[i]})`);
}
