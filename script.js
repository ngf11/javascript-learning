function generateColors(type, amount) {
  if (type == "rgb") {
    return rgbColorGeneratorArry(amount);
  } else if (type == "hex") {
    return hexColorGeneratorArry();
  } else {
    return "that is not a color type nor a amount of colors";
  }
}
function hexColorGeneratorArry(amountHex) {
  let hex = "";
  const hexLetters = [0, 1, 2, 3, 4, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  for (let i = 0; i < amountHex; i++) {
    let hexValues = [];
    for (let j = 0; j < 6; j++) {
      let random = Math.floor(Math.random() * hexLetters.length);
      hexValues.push(hexLetters[random]);
    }
    hex = `#${hexValues.join("")}`;
  }
  return hex;
}
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

  function formatRGB(rgbValues) {
    return `rgb(${rgbValues.join(", ")})`;
  }

  const rgbArray = hex;
  for (const rgbValues of rgbArray) {
    console.log(formatRGB(rgbValues));
  }
}
generateColors("rgb", 3);
generateColors("rgb", 1);
console.log(hexColorGeneratorArry(3));
