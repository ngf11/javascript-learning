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
  // let idLength = prompt("How long you want your id's?");
  // let numberOfId = prompt("How many new id's?");
  let idLength = 5;
  let numberOfId = 5;
  let char = "abcdefghijklmnopqrstuvxxwzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  let charArr = char.split("");
  let idArr = [];
  for (let i = 0; i <= numberOfId; i++) {
    let ID = "";
    for (let j = 0; j <= idLength; j++) {
      let random = Math.floor(Math.random() * charArr.length);

      ID += charArr[random];
    }
    idArr.push(ID);
  }
  return idArr;
};
console.log(userIdGeneratedByUser());
const rgbColorGenerator = () => {
  let rgbArr = [];
  for (let i = 0; i < 3; i++) {
    let random = Math.floor(Math.random() * 256);
    rgbArr.push(random);
  }
  let rgb = `rgb(${rgbArr})`;
  return rgb;
};
console.log(rgbColorGenerator());
const arrayOfHexaColors = () => {};
