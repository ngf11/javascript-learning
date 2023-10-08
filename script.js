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
  let hexArr = [];
  for (let i = 0; i < numberOfColors; i++) {
    let str = "";
    for (let j = 0; j < 6; j++) {
      let random = Math.floor(Math.random() * hexDeck.length);
      str = hexDeck[random];
    }
    hexArr.push(str);
  }
  console.log(hexArr);
}
arrayOfHexaColors();
