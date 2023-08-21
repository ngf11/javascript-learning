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
// function rgbColorGeneratorArry(amountHex) {
//   let hex = [];
//   for (let i = 0; i < amountHex; i++) {
//     for (let j = 0; j < 3; j++) {
//       let random = Math.floor(Math.random() * 256);
//       hex.push(random);
//     }
//   }
//   return `rgb(${hex.join(", ")})`;
// }
// console.log(rgbColorGeneratorArry(2));
function rgbColorGeneratorArry(amountHex) {
  let hex = [];
  for (let i = 0; i < amountHex; i++) {
    let rgbValues = [];
    for (let j = 0; j < 3; j++) {
      let random = Math.floor(Math.random() * 256);
      rgbValues.push(random);
    }
    hex.push(rgbValues);
  }
  return hex;
}
function formatRGB(rgbValues) {
  return `rgb(${rgbValues.join(", ")})`;
}

const rgbArray = rgbColorGeneratorArry(4);
for (const rgbValues of rgbArray) {
  console.log(formatRGB(rgbValues));
}
const rgb2hex = (r, g, b) => {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

console.log(rgb2hex(255, 255, 255));
