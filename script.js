function randomHexColorGenerator() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += Math.floor(Math.random() * 16).toString(16);
  }
  return hex;
}
console.log(randomHexColorGenerator());
const userIdGenerator = () => {
  let ID = "";
  let char = "abcdefghijklmnopqrstuvxxwzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  let charArr = char.split("");
  for (let i = 0; i <= 7; i++) {
    let random = Math.floor(Math.random() * charArr.length);

    ID += charArr[random];
  }
  return ID;
};
console.log(userIdGenerator());
const userIdGeneratedByUser = () => {
  let idLength = prompt("How long you want your id's?");
  let numberOfId = prompt("How many new id's?");
  let idArr = [];
  let ID = "";
  let char = "abcdefghijklmnopqrstuvxxwzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  let charArr = char.split("");
  for (let i = 0; i < numberOfId; i++) {
    for (let j = 0; j <= idLength; j++) {
      let random = Math.floor(Math.random() * charArr.length);

      ID += charArr[random];
    }
    idArr.push(ID);
  }
  console.log(idArr.length);
  idArr.map((items) => {
    console.log(items.length);
  });
  return idArr;
};
console.log(userIdGeneratedByUser());
//fix this a problem with the length of the id's
