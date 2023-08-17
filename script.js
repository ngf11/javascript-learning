// 00-1B-63-84-45-E6.
// const macLetters = ["a", "b", "c", "d", "f", "A", "B", "C", "D", "F"];
// const macNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// function randomMacAddress() {
//   let macLettersNum = macLetters.concat(macNums);
//   let macAdd = [];
//   for (let i = 0; i < 12; i++) {
//     let random = Math.floor(Math.random() * macLettersNum.length);
//     macAdd.push(macLettersNum[random]);
//   }
//   return macAdd.join("");
// }
// console.log(randomMacAddress());
// function randomHexaNumberGenerator() {
//   const hexArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];
//   const hex = [];
//   for (let i = 0; i < 6; i++) {
//     let random = Math.floor(Math.random() * hexArr.length);
//     hex.push(hexArr[random]);
//   }
//   return `#${hex.join("")}`;
// }
// console.log(randomHexaNumberGenerator());
// function userIdGenerator() {
//   let lettersNumsSTR =
//     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
//   let splitLetterNum = lettersNumsSTR.split("");
//   let userId = [];
//   for (let i = 0; i < 11; i++) {
//     let random = Math.floor(Math.random() * splitLetterNum.length);
//     userId.push(splitLetterNum[random]);
//   }
//   return `User ID: ${userId.join("")}`;
// }
// console.log(userIdGenerator());
// const numberOfCharacters = prompt("What is the length of the UserID's?");
// const userIDsGenerated = prompt("How many UserId?");
// const numUserIDsGenerated = parseInt(userIDsGenerated);
// const numNumberOfCharacters = parseInt(numberOfCharacters);
// function userIdGeneratorUser(numNumberOfCharacters, numUserIDsGenerated) {
//   let lettersNumsSTR =
//     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
//   let splitLetterNum = lettersNumsSTR.split("");
//   let userIds = [];
//   for (let i = 0; i < numUserIDsGenerated; i++) {
//     let userId = "";
//     for (let j = 0; j < numNumberOfCharacters; j++) {
//       let random = Math.floor(Math.random() * splitLetterNum.length);
//       userId += splitLetterNum[random];
//     }
//     userIds.push(userId);
//   }
//   return userIds;
// }
// userIdGeneratorUser();
// console.log(userIdGeneratorUser());
// console.log(typeof numUserIDsGenerated);
// console.log(typeof numNumberOfCharacters);
