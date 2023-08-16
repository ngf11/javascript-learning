// 00-1B-63-84-45-E6.
const macLetters = ["a", "b", "c", "d", "f", "A", "B", "C", "D", "F"];
const macNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function randomMacAddress() {
  let macLettersNum = macLetters.concat(macNums);
  let macAdd = [];
  for (let i = 0; i < 12; i++) {
    let random = Math.floor(Math.random() * macLettersNum.length);
    macAdd.push(macLettersNum[random]);
  }
  return macAdd.join("");
}
console.log(randomMacAddress());
