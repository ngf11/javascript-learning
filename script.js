const dog = {};
console.log(dog);
dog.name = "Milo";
dog.color = "White";
dog.age = 11;
dog.bark = "Woof";
dog.greet = function () {
  console.log(this.bark);
};
console.log(dog);
dog.greet();
dog.breed = "Bulldog";
dog.getDoginfo = function () {
  console.log(` Hi ${this.name} i am a ${this.age} years old ${this.breed}`);
};
dog.getDoginfo();
