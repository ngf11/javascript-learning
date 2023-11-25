// day 6 ex 2 num 1
const characters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
let charSplit = characters.split("");
console.log(charSplit);
let passCodeArr = [];
let passCodeId;
let random = Math.floor(Math.random() * 10 * 2);
console.log(random);
for (let i = 0; i < random; i++) {
  let randomChar = Math.floor(Math.random() * charSplit.length);
  passCodeArr.push(charSplit[randomChar]);
}
console.log(passCodeArr);
passCodeId = passCodeArr.join("");
console.log(passCodeId);

const lettersAndNumbers = ["a", "b", "c", "d", "f", 1, 2, 3, 4, 5, 6, 7, 8, 9];
let hex = [];
let hexStr = "";
for (let i = 0; i < 6; i++) {
  let random = Math.floor(Math.random() * lettersAndNumbers.length);
  hex.push(lettersAndNumbers[random]);
}
console.log(hex);
hexStr = "#" + hex.join("");
console.log(hexStr);
