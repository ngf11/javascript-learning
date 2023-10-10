function rgbColorGenerator() {
  let rgb = "";
  let rgbarr = [];
  for (let i = 0; i < 3; i++) {
    let rgbRandom = Math.floor(Math.random() * 256);
    rgbarr.push(rgbRandom);
  }
  rgb = `rgb(${rgbarr})`;
  console.log(rgb);
}
rgbColorGenerator();
function arrayOfHexaColors() {
  let numberOfColors = 5;
  const hexDeck = ["a", "b", "c", "d", "f", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  for (let i = 0; i < numberOfColors; i++) {
    let hexArr = [];
    let str = "";
    for (let j = 0; j < 6; j++) {
      let random = Math.floor(Math.random() * hexDeck.length);
      str = hexDeck[random];
      hexArr.push(str);
    }
    let hexStr = "#" + hexArr.join("").split("#");
    console.log(hexStr);
  }
}
arrayOfHexaColors();

function arrayOfRgbColors() {
  let numberRGB = 5;
}
