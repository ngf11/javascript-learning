//js day 07
function fullName(first, last) {
  return ` ${first} ${last}`;
}
console.log(fullName("Didi", "TinTin"));
const sum = (a, b) => a + b;
console.log(sum(1, 10));
const areaOfRectangle = (l, w) => l * w;
const perimeterOfRectangle = (l, w) => 2 * (l + w);
console.log(perimeterOfRectangle(2, 5));
const volumeOfRectPrism = (l, w, h) => l * w * h;
const areaOfCircle = (r) => Math.PI * r * r;
const circumOfCircle = (r) => 2 * (Math.PI * r);
const density = (m, v) => m / v;
const speed = (d, t) => d / t;
const weight = (m, g) => m * g;
const convertCelsiusToFahrenheit = (c) => c * (9 / 5) + 32;
console.log(convertCelsiusToFahrenheit(40));
const BMI = (w, h) => {
  let cal = w / (w * h);
  if (cal < 18.5) {
    return `Your BMI is ${cal} you are Underweight `;
  } else if (cal <= 24.9) {
    return `Your BMI is ${cal} you are Normal `;
  } else if (cla < 29.9) {
    return `Your BMI is ${cal} you are Overweight `;
  } else {
    return `Your BMI is ${cal} you are Obese `;
  }
};
console.log(BMI(90, 1.69));

function fetchData() {
  return new Promise((resolve, reject) => {
    fetch("https://api.weather.gov/gridpoints/OKX/35,35/forecast")
      .then((responce) => responce.json())
      .then((data) => resolve(data.properties.periods[1].shortForecast));
  });
}
function displayData(weather) {
  console.log(weather);
}
function onError(error) {
  console.log("Error");
}

fetchData().then(displayData).catch("error");
