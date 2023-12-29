function showTime() {
  const now = new Date();
  let day = now.getDate();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let hh = now.getHours();
  let mm = now.getMinutes();
  return `${month}/${day}/${year} ${hh}:${mm}`;
}
console.log(showTime());
function swapValues(x, y) {
  let temp = x;
  let xOne = y;
  return `x = ${xOne}\ny= ${temp}`;
}
console.log(swapValues(1, 2));
// function reverseArray(arr) {
//   return arr.reverse();
// }
function reverseArray(arr) {
  let RevDevArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    let index = arr[i];
    RevDevArr.push(index);
  }
  return RevDevArr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
