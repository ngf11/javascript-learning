const now = new Date();
console.log(now);
let year = now.getFullYear();
console.log(year);
let month = now.getMonth();
console.log(month);
let day = now.getDate();
console.log(day);
let date = now.getDay();
console.log(date);
let secondsTillNow = now.getTime();
console.log(secondsTillNow);
// let base = prompt("Enter the base of the trinagle");
// let height = prompt("Enter the height of the trinagle");
// let area = alert(
//   `Enter base: ${base}\nEnter height: ${height}\nArea of the triangle: ${
//     base * height * 0.5
//   }`
// );
// let sideA = prompt("Enter side A");
// let sideB = prompt("Enter side B");
// let sideC = prompt("Enter side C");
// let paramiter = alert(
//   `Enter side A: ${sideA}\nEnter side B: ${sideB}\n Enter side C: ${sideC}\n paramiter : ${
//     parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC)
//   }`
// );
let legnth = prompt("Enter the length of the rectangle");
let width = prompt("Enter the width of the rectangle");
let areaAndPara = alert(
  `Enter length: ${legnth}\nEnter width: ${width}\nArea of the rectangle: ${
    legnth * width
  }\nParamiter of the rectangle${2 * (parseFloat(legnth) + parseFloat(width))}`
);
