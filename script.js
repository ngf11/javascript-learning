const numbres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letters = "abcdefghijklmnopqrstuvwxyz";

const letterSplit = letters.split("");
// console.log(letterSplit);
const password = [];
for (let i = 0; i < 5; i++) {
  let randomLetter = Math.floor(Math.random() * letterSplit.length);
  password.push(letterSplit[randomLetter]);
}
console.log(password);
const randomNums = [];
for (let i = 0; i < 5; i++) {
  let randomNum = Math.floor(Math.random() * numbres.length);
  randomNums.push(numbres[randomNum]);
}
console.log(randomNums);
const letterNums = numbres.concat(letterSplit);
const randomID = [];
console.log(letterNums);
for (let i = 0; i < 6; i++) {
  let randomLettersNums = Math.floor(Math.random() * letterNums.length);
  randomID.push(letterNums[randomLettersNums]);
}
console.log(randomID.join(""));
const passwordRandom = [];
let randomLength = Math.floor(Math.random() * 11 * 2);
for (let i = 0; i <= randomLength; i++) {
  let randomLettersNums = Math.floor(Math.random() * letterNums.length);
  passwordRandom.push(letterNums[randomLettersNums]);
}
let strPass = passwordRandom.join("");
console.log(strPass);
const hex = ["a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const hexDesArr = [];
for (let i = 0; i < 6; i++) {
  let randomLettersNums = Math.floor(Math.random() * hex.length);
  hexDesArr.push(hex[randomLettersNums]);
}
let strHexDes = hexDesArr.join("");
let hexDecRespond = `#${strHexDes}`;
// console.log(hexDesArr);
console.log(hexDecRespond);
const rgb = [];
for (let i = 0; i < 3; i++) {
  let rgbRandom = Math.floor(Math.random() * 255);
  rgb.push(rgbRandom);
}
console.log(rgb);
let rgbRandomRespond = `rgb(${rgb})`;
console.log(rgbRandomRespond);
