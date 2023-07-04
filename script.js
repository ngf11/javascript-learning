const time = new Date();
console.log(time);
const month = time.getMonth() + 1;
const day = time.getDate();
console.log(day);
const dayNum = time.getDay();
console.log(dayNum);
const hh = time.getHours();
const mm = time.getMinutes();
const sec = time.getSeconds();
const timeSinceTheSenventies = time.getTime();
// const base = prompt("Enter the base of a Triangel", "Enter number here");
// const hight = prompt("Enter hight of the triangel", "Enter number here");
// const areaOfaTriangel = alert(0.5 * base * hight);
// const sideA = prompt("Enter side A here");
// const sideB = prompt("Enter side B here");
// const sideC = prompt("Enter side C here");
// const perimeter = alert(
//   `Enter side A: ${sideA}\n Enter side B:${sideB}\n Enter side C:${sideC}\n The perimeter of the triangle is ${
//     parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC)
//   } `
// );
// const length = prompt("Enter length");
// const width = prompt("Enter width");
// const perimeterAndArea = alert(
//   `The area of the rectangle is ${
//     parseFloat(length) * parseFloat(width)
//   } and the perimeter of the rectangle is ${
//     2 * (parseFloat(length) + parseFloat(width))
//   }`
// );
// console.log(Math.ceil(Math.PI));
// const pi = 3.14;
// const radius = prompt("enter the radius of a circl");
// const areaAndCincunference = alert(
//   `The area of the circle is ${pi * parseFloat(radius) * parseFloat(radius)}`
// );
// Slope is m = (y2-y1) / (x2-x1). Find the slope between point (2, 2) and point(6,10)
// const hours = prompt("How many hour have you worked this week?");
// const rate = prompt("What is your hourly rate?");
// const reponse = alert(
//   `Enter hours:${hours}\n Enter rate per hour:${rate}\n Your weekly earnings:${
//     hours * rate
//   }`
// );
// function nameLegnthgreet() {
//   const enterName = prompt("What is your name?");
//   if (enterName.length >= 7) {
//     return alert("Thats a long funcking name");
//   } else {
//     return alert("Thats a short fucnking name");
//   }
// }
// nameLegnthgreet();
// function enterName() {
//   const firstname = prompt("enter your first name?");
//   const lastname = prompt("enter your last name");
//   if (firstname.length > lastname.length) {
//     return alert(
//       `Your first name, ${firstname} is longer than your family name, ${lastname}`
//     );
//   } else {
//     return alert(
//       `Your last name, ${lastname} is longer that your first name,${firstname}`
//     );
//   }
// }
// enterName();
const myage = 333;
const enterAge = prompt("enter your age?");
const messege = alert(`I am ${myage - enterAge} years older the you`);
