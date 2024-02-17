const dog = {};
console.log(dog);
dog.name = "Milo";
dog.color = "White";
dog.age = 11;
dog.bark = "Woof";
dog.greet = () => console.log(this.bark);
console.log(dog);
dog.greet();
