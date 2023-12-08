const people = [
  {
    name: "Nico Fuentes",
    age: 34,
    occupation: "Web Developer",
  },
  {
    name: "Didi TinTin",
    age: 3,
    occupation: "Everything All at once",
  },
  {
    name: "Siggy Acevedo",
    age: 36,
    occupation: "Records",
  },
  {
    name: "Milo Fuentes",
    age: 10,
    occupation: "Fat",
  },
];

const nameArr = people.map((person) => person.name);
console.log(nameArr);
const onlyThirty = people.filter((person) => {
  return person.age > 30;
});
const olderThenThirtyName = people
  .filter((person) => {
    return person.age > 30;
  })
  .map((person) => person.name);
console.log(onlyThirty);
console.log(olderThenThirtyName);
const ageTotal = people.reduce((total, number) => {
  console.log(`total:${total}`);
  console.log(`Number:${number.age}`);
  return total + number.age;
}, 0);
console.log(ageTotal);
