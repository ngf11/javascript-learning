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
