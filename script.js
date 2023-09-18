//Day 7
function fullName(first, last) {
  console.log(` Hi, my name is ${first} ${last}`);
}
fullName("Nico", "Fuentes");
const addNumber = (a, b) => a + b;
console.log(addNumber(2, 2));
function areaOfRectangle(length, width) {
  return `The area of the rectangle is ${length * width}`;
}
console.log(areaOfRectangle(10, 5));
function perimeterOfRectangle(length, width) {
  return `The perimeter of the rectangle is ${
    2 * (parseInt(length) + parseInt(width))
  }`;
}
console.log(perimeterOfRectangle(10, 5));
function volumeOfRectPrism(length, width, height) {
  return `The volume of the prism is ${length * width * height}`;
}
const PI = 3.14;
console.log(volumeOfRectPrism(10, 6, 5));
function areaOfCircle(r) {
  return ` The area of the circle is ${r * r * PI}`;
}
console.log(areaOfCircle(5));
function circumOfCircle(r) {
  return `The circumference of a circle is ${2 * (PI * r)}`;
}
console.log(circumOfCircle(10));
function densityOfAnObject(mass, volume) {
  return `The density  of the obejec is ${mass / volume}`;
}
function speedOfAnObject(d, t) {
  return `The speed of an object is ${d / t}`;
}
console.log(speedOfAnObject(100, 80));
function weightOfsubtance(mass, gravity) {
  return `The weight of subtance is ${mass * gravity}`;
}
function convertCelsiusToFahrenheit(c) {
  const cal = (c * 9) / 5 + 32;
  return `${c}C is ${cal}F`;
}
console.log(convertCelsiusToFahrenheit(0));
console.log(convertCelsiusToFahrenheit(20));
