function randomUserIp() {
  let usperIp = [];
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= Math.floor(Math.random() * 9); j++) {
      usperIp.push(j);
    }
  }
  console.log(usperIp.join(""));
}
randomUserIp();
function randomHexaNumberGenerator() {
  const hexDeck = ["a", "b", "c", "d", "f", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let hex = "";
  let hexArr = [];
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexDeck.length);
    hexArr.push(hexDeck[random]);
  }
  hex = "#" + hexArr.join("");
  console.log(hex);
}
randomHexaNumberGenerator();
function userIdGenerator() {
  let characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYAZ1234567890";
  let charactersSplit = characters.split("");
  let userIDArr = [];
  let userId = "";
  for (let i = 0; i < 7; i++) {
    let random = Math.floor(Math.random() * charactersSplit.length);
    userIDArr.push(charactersSplit[random]);
  }
  userId = userIDArr.join("");
  console.log(userId);
}
userIdGenerator();
const userIdGeneratedByUser = function () {
  let characterLenght = prompt("What is the lenght of the user Id's?");
  let numberOfId = prompt("How many Id's do you need?");
  let characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYAZ1234567890";
  let charactersSplit = characters.split("");
  let usersId = "";
  for (let i = 0; i < numberOfId; i++) {
    let userIDArr = [];
    for (let j = 0; j < characterLenght; j++) {
      let random = Math.floor(Math.random() * charactersSplit.length);
      userIDArr.push(charactersSplit[random]);
    }
    console.log(userIDArr);
    usersId = `${userIDArr.join("")}\n`;
  }
  console.log(usersId);
};
userIdGeneratedByUser();
