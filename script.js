//Day 06
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i}x${i}= ${i * i}`);
// }
// const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
// const newArr = [];
// for (let i = 0; i < countries.length; i++) {
//   newArr.push(countries[i].toUpperCase());
// }
// console.log(newArr);
// const numbers = [1, 2, 3, 4, 5];
// const newArr = [];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);
// for (let i = 0; i < numbers.length; i++) {
//   newArr.push(numbers[i] ** 2);
// }
// console.log(newArr);
// const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
// const newArr = [];
// for (let i = 0; i < countries.length; i++) {
//   newArr.push(countries[i].toUpperCase());
// }
// console.log(newArr);
// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
// let i = 5;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);
// const numbers = [1, 2, 3, 4, 5];
// for (const num of numbers) {
//   console.log(num);
// }
// for (const num of numbers) {
//   console.log(num * num);
// }
// let sum = 0;
// for (const num of numbers) {
//   sum += num;
// }
// console.log(sum);
// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];
// for (const tech of webTechs) {
//   console.log(tech.toUpperCase());
// }
// const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
// const newArr = [];
// for (const country of countries) {
//   newArr.push(country.toUpperCase());
// }
// console.log(newArr);
for (let i = 0; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
for (let i = 0; i <= 10; i++) {
  if (i === 8) {
    continue;
  }
  console.log(i);
}
