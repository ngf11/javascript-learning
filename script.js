const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let codeChar = letters.split("");
let random = Math.floor(Math.random() * codeChar.length);
let letter = codeChar[random];
console.log(codeChar);
console.log(codeChar.length);
// console.log(codeChar[random]);
console.log(letter);
for (let i = 0; i <= letter.length; i++) {
  console.log(i);
}
