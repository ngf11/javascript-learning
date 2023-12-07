const items = [
  { name: "Rice", price: 5 },
  { name: "Book", price: 20 },
  { name: "Chiken", price: 10 },
  { name: "Monitor", price: 100 },
];
// let totalPrice = 0;
// items.forEach((item) => {
//   totalPrice += item.price;
// });
let totalPrice = items.reduce((total, item) => {
  console.log(`Total:${total}`);
  console.log(`item: ${item.price}`);
  return total + item.price;
}, 0);
console.log(totalPrice);
