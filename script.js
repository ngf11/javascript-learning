// let rgbColorGeneratorArry = () => {
//   let num = parseInt(prompt("How many colors do you need?"));
//   let rgb = "".split(", ");
//   for (let i = 0; i < num; i++) {
//     for (let j = 0; j <= 3; j++) {
//       let random = Math.floor(Math.random() * 256);
//       rgb += random;
//     }
//   }
//   return rgb;
// };
// rgbColorGeneratorArry();
// console.log(rgbColorGeneratorArry());
// const amountHex = 5;
function rgbColorGeneratorArry(amountHex) {
  let hex = [];
  for (let i = 0; i < amountHex; i++) {
    for (let j = 0; j < 3; j++) {
      let random = Math.floor(Math.random() * 256);
      hex.push(random);
    }
  }
  return hex;
}
console.log(rgbColorGeneratorArry(2));
