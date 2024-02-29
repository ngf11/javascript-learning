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
