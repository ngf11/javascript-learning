function fullName(firstName, lastName) {
  return `Hi, My name is ${firstName} ${lastName}`;
}
console.log(fullName("Nicolas", "Fuentes"));
const name = function (firstName, lastName) {
  return `Hi, My name is ${firstName} ${lastName}`;
};
console.log(name("Didi", "tinti"));
const datName = (firstName, lastName) =>
  `Hi, My name is ${firstName} ${lastName}`;
console.log(datName("Didi", "Wu"));
function add(a, b) {
  return a + b;
}
console.log(add(10, 1));
const areaOfARectangle = (length, width) => {
  return length * width;
};
console.log(areaOfARectangle(10, 4));
function permimeterOfARectangle(length, width) {
  return 2 * (length + width);
}
console.log(permimeterOfARectangle(10, 4));
function volumeOfPrism(length, width, height) {
  return length * width * height;
}
console.log(volumeOfPrism(10, 4, 2));
const areaOfACircl = (redius) => {
  return Math.PI * redius * redius;
};
console.log(areaOfACircl(15));
const circumOfCircle = (redius) => {
  return 2 * (Math.PI * redius);
};
console.log(circumOfCircle(15));
const densityOfASubstance = (mass, volume) => {
  return mass / volume;
};
function speedOfObject(distance, time) {
  return distance / time;
}
function weightOf(mass, gravity) {
  return mass * gravity;
}
const convertCelsiusToFahrenheit = (celsius) => {
  return celsius * 1.8 + 32;
};
console.log(convertCelsiusToFahrenheit(30));
