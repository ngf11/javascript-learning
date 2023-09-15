let lettersAndNums =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxwz12345647890";
let strSplit = lettersAndNums.split("");
const storeUserIds = [];
let ranNum = Math.floor(Math.random() * 22);
for (let i = 0; i < 1; i++) {
  let userId = "";
  for (let j = 0; j < ranNum; j++) {
    let random = Math.floor(Math.random() * strSplit.length);
    userId += strSplit[random];
  }
  storeUserIds.push(userId);
}
console.log(storeUserIds);
let hexNumsNLetters = "abcdef123456789";
let hexSplit = hexNumsNLetters.split("");
console.log(hexSplit);
for (let i = 0; i < 1; i++) {
  let hex = [];
  for (let j = 0; j < 6; j++) {
    let random = Math.floor(Math.random() * hexNumsNLetters.length);
    hex.push(hexNumsNLetters[random]);
  }
  console.log("#" + hex.join(""));
}
for (let i = 0; i < 1; i++) {
  let rgb = [];
  for (let j = 0; j < 3; j++) {
    let random = Math.floor(Math.random() * 256);
    rgb.push(random);
  }
  console.log(`rgb(${rgb})`);
}
