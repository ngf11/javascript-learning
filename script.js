let date = new Date();
console.log(date);
let year = date.getFullYear();
console.log(year);
let month = date.getMonth() + 1;
console.log(month);
let hh = date.getHours();
let mm = date.getMinutes();
let minSice70 = date.getTime();
console.log(minSice70);

// const hight = prompt("what is the hight of the trinagel?");
// const base = prompt("what is the base of the triangel?");
// let respons = alert(`Enter base:${base}\n
//  Enter height:${hight}\n
//  The area of the triangle is ${(base * hight) / 2}`);
// const length = prompt("enter the length of the regtangle");
// const width = prompt("enter the width of the rectangle");
// const areaP = alert(
//   `Enter length:${length}\nEnter width:${width}\nThe area of the rectangle:${
//     length * width
//   }\nThe area permimeter of the rectangle is:${
//     (parseFloat(length) + parseFloat(width)) * 2
//   }`
// );
// const PI = 3.14;
// const radius = prompt("What is the radius of the cricle?");
// const circunferances = alert(
//   `The area pf the circle is: ${
//     (PI * radius) ^ 2
//   }\n The circunferance of the circle is: ${2 * PI * radius}`
// );
// const x = prompt("enter the value of x");
// let y = x * x + 6 * x + 9;
// console.log(y);
// const hours = prompt("enter how many have you worked this week");
// const rate = prompt("What is your hourly rate?");
// const pay = alert(
//   `Enter hours: ${hours}\n Enter rate: ${rate}\n Your week earning:${
//     hours * rate
//   }`
// );
// const firsName = prompt("what is your name");
// const yourname =
//   firsName.length >= 7
//     ? alert("Your name is long as hell")
//     : alert("Your name is short as hell");
// let firsName = "Nicolas";
// let lastname = "Fuentes";
// const yourName =
//   firsName.length > lastname.length
//     ? alert(
//         `Your first name is ${firsName} is longer then your last nam, ${lastname}`
//       )
//     : alert("your last name is longer the your first name");
let myAge = 250;
let yourAge = 34;
console.log(`I am ${myAge - yourAge} years older then you`);
