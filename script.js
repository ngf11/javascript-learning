const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let codeChar = letters.split("");
let randomLetterArray = [];
for (let i = 0; i <= 5; i++) {
  let random = Math.floor(Math.random() * codeChar.length);
  let letter = codeChar[random];
  randomLetterArray.push(letter);
}
console.log(randomLetterArray);
