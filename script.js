// const enter = prompt("Enter your age");
// let responce =
//   enter >= 18
//     ? alert(`Enter your age: ${enter}\nYou are old enough to drive.`)
//     : alert(`Enter your age: ${enter}
// You need to wait ${18 - enter} years to drive.`);
// const myage = 34;
// let yourage = prompt("enter your age");
// if (myage > yourage) {
//   alert(`Enter your age: ${yourage}
//     You are younger .`);
// } else if (yourage > myage) {
//   alert(`Enter your age: ${yourage}
//     You are ${yourage - myage} years older than me.`);
// } else {
//   alert(" we are the same age");
// }
// let a = 4;
// let b = 33;
// if (a > b) {
//   console.log(`${a} is greater the ${b}`);
// } else {
//   console.log(`${b} is greater the ${a}`);
// }
// a > b
//   ? console.log(`${a} is greater the ${b}`)
//   : console.log(`${b} is greater the ${a}`);
// const num = prompt("enter any number");
// if (num % 2 === 0) {
//   alert("that is an even number");
// } else {
//   alert("that is an odd number ");
// }
// const grade = prompt("enter your grade in number");
// if (grade >= 80 && grade < 100) {
//   alert("A");
// } else if (grade >= 70) {
//   alert("B");
// } else if (grade >= 60) {
//   alert("C");
// } else if (grade >= 50) {
//   alert("D");
// } else {
//   alert("F");
// }
// switch (true) {
//   case grade > 80:
//     alert("A");
//     break;
//   case grade > 70:
//     alert("B");
//     break;
//   case grade > 60:
//     alert("C");
//     break;
//   case grade > 50:
//     alert("D");
//     break;
//   default:
//     alert("F");
// }
//Autumn, Winter, Spring or Summer.
// const month = new Date().getMonth() + 1;
// switch (month) {
//   case 1:
//   case 2:
//   case 3:
//     console.log("Winter");
//     break;
//   case 4:
//   case 5:
//   case 6:
//     console.log("Spring");
//     break;
//   case 7:
//   case 8:
//   case 9:
//     console.log("Summer");
//     break;
//   default:
//     alert("Autumn");
// }
// const getDay = prompt("What day is it?");
// let dia = getDay.toLocaleLowerCase();
// if (
//   dia == "monday" ||
//   dia == "tuesday" ||
//   dia == "wednsday" ||
//   dia == "thurday" ||
//   dia == "friday"
// ) {
//   alert(`${getDay} is a week day`);
// } else if (dia == "saturday" || dia == "sunday") {
//   alert(`${getDay} its the weekend`);
// } else {
//   alert(`thats not a day`);
// }
const day = new Date().getDay() + 1;
console.log(day);
