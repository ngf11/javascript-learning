let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();
let hh = now.getHours();
let mm = now.getMinutes();
console.log(now);
console.log(year);
console.log(day);
console.log(month);
console.log(`${hh}:${mm}`);
const areaOfTriangle = (b, h) => {
  return `Enter base: ${b}\nEnter height: ${h}\nThe area of the triangle is ${
    b * h * 0.5
  }`;
};
console.log(areaOfTriangle(10, 5));
// const perimeterOfATriangle = () => {
//   let sideA = prompt("Enter side A ");
//   let sideB = prompt("Enter side B ");
//   let sideC = prompt("Enter side C ");

//   return alert(
//     `Enter side A: ${sideA}\nEnter side B: ${sideB}\nEnter side C: ${sideC}\nThe perimeter of the triangle is: ${
//       parseInt(sideA) + parseInt(sideB) + parseInt(sideC)
//     }`
//   );
// };
// perimeterOfATriangle();
function areaPerimiterOfRectangle() {
  let width = prompt("What is the width?");
  let length = prompt("What is the length?");
  return alert(
    `Enter width: ${width}\nEnter length: ${length}\nArea: ${
      length * width
    }\nParamiter: ${2 * (parseInt(length) + parseInt(width))}`
  );
}
areaPerimiterOfRectangle();
