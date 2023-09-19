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
function bodyMassIndex(weight, height) {
  let bmi = weight / (height * height);
  console.log(bmi);
  if (bmi > 30) {
    return "Obese";
  } else if (bmi >= 25) {
    return "Overweight";
  } else if (bmi >= 18.5) {
    return "Normal weight";
  } else if (bmi <= 18) {
    return "Underweight";
  }
}
console.log(bodyMassIndex(84, 1.68));
function seasons(seasons) {
  if (seasons == "December" || seasons == "January" || seasons == "Febuary") {
    return "Winter";
  } else if (seasons == "March" || seasons == "April" || seasons == "May") {
    return "Spring";
  } else if (seasons == "June" || seasons == "July" || seasons == "August") {
    return "Summer";
  } else if (
    seasons == "September" ||
    seasons == "October" ||
    seasons == "November"
  ) {
    return "Fall";
  } else {
    return "That is not a month";
  }
}
console.log(seasons("Febuary"));
console.log(seasons("April"));
console.log(seasons("June"));
console.log(seasons("September"));
function findMax(...arg) {
  return Math.max(...arg);
}
console.log(findMax(8, 3, 6, 8, 11));
function printArray(array) {
  for (const arr of array) {
    console.log(arr);
  }
}
const nico = ["nico", 34, 1989, "Uruguay", "USA"];
printArray(nico);
