//day 08
const dog = {
  name: "milo",
  color: "White",
  legs: 4,
  age: 10,
  brak() {
    console.log(`Woolf Woolf`);
  },
};
console.log(Object.values(dog));
dog.breed = "BullDog";
dog.getDogInfo = () => {
  return Object.entries(dog);
};
// console.log(Object.values(dog));+
console.log("----");
console.log(dog.getDogInfo());
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
const usersArray = Object.values(users);
// const loggedInUsers = usersArray.filter(
//   (user) => user.isLoggedIn && user.points >= 50
// );
// console.log(loggedInUsers);
const skillsArr = usersArray.sort((a, b) => {
  if (a.skills.length > b.skills.length) {
    return -1;
  } else {
    return 1;
  }
});
console.log(skillsArr);

const mernStackUser = usersArray.filter((user) =>
  user.skills.includes("MongoDB", "Express", "React", "Node")
);
console.log(mernStackUser);
const newUser = Object.assign({}, users);
console.table(newUser);
newUser.Nico = nico;
console.table(newUser);
