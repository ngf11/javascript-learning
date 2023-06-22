console.log(typeof "10" == typeof 10);
console.log(Math.ceil(parseFloat("9.8")) == 10);
console.log("python".includes("on"));
console.log("I hope this course is not full of jargon".includes("jargon"));
const randomHundo = Math.floor(Math.random() * 101);
console.log(randomHundo);
const randomFifty = Math.floor(Math.random() * 51 + 50);
console.log(randomFifty);
const randomTwofifty = Math.floor(Math.random() * 256);
console.log(randomTwofifty);
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log("fizz");
  }
  if (i % 3 === 0) {
    console.log("buzz");
  }
  if (i % 2 === 0 && i % 3 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}
const str = "JavaScript";
const split = str.split("");
const randomStr = Math.floor(Math.random() * split.length);
console.log(split);
console.log(split[randomStr]);
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
const phrase =
  "You cannot end a sentence with because because because is a conjunction";
console.log(phrase.substr(30, 23));
