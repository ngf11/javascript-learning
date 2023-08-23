function isEmpty(item) {
  if (item.length == 0 || item == null) {
    return `${item} is empty`;
  }
}
let nico;
let you = "";
let bro = null;
let milo = undefined;
let arr = [];
console.log(
  isEmpty(nico),
  isEmpty(you),
  isEmpty(bro),
  isEmpty(milo),
  isEmpty(arr)
);
