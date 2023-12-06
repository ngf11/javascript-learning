const users = [
  { firstName: "nico", lastName: "fuentes", age: 34 },
  { firstName: "siggy", lastName: "acevedo", age: 36 },
  { firstName: "didi", lastName: "fuentes", age: 3 },
  { firstName: "milo", lastName: "fat", age: 10 },
];
let output = users.map((user) => user.firstName + " " + user.lastName);
console.log(output);
let output2 = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(output2);
let output3 = users
  .filter((user) => user.age < 30)
  .map((item) => item.firstName);
console.log(output3);

let output4 = users.reduce((acc, user) => {
  if (user.age < 30) {
    acc.push(user.firstName);
  }
  return acc;
}, []);

console.log(output4);
