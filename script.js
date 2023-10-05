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
