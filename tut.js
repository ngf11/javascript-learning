function userIdGenerator() {
  let lettersNumsSTR =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let splitLetterNum = lettersNumsSTR.split("");
  let userId = [];
  for (let i = 0; i < 30; i++) {
    let random = Math.floor(Math.random() * splitLetterNum.length);
    userId.push(splitLetterNum[random]);
  }
  return `User ID: ${userId.join("")}`;
}
console.log(userIdGenerator());
