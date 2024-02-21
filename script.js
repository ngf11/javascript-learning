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
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
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
const copyUsers = Object.assign({}, users);
console.log(copyUsers);
const keys = Object.keys(copyUsers);
console.log(keys);
const values = Object.values(copyUsers);
console.log(values);
console.log("---Progress--");
const enteries = Object.entries(copyUsers.isLoggedIn >= 50);
const usersArray = Object.values(users);
const loggedInUsers = usersArray.filter(
  (user) => user.isLoggedIn && user.points >= 50
);
console.log(loggedInUsers);
console.log("--You got it--");
const mernStack = usersArray.filter((user) =>
  user.skills.includes("MongoDB" && "Express" && "React" && "Node")
    ? user
    : "No MERN stack Here"
);
console.log(mernStack);
