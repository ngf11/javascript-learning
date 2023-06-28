console.log(
  `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
);
console.log(
  "\tLove is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);
console.log(typeof "10" === typeof 10);
console.log(typeof parseFloat("10") === typeof 10);
console.log("Jargon".includes("on"), "Python".includes("on"));
console.log("I hope this course is not full of jargon".includes("jargon"));
console.log(Math.floor(Math.random() * 11));
console.log(Math.floor(Math.random() * 51) + 50);
console.log(Math.floor(Math.random() * 251));
const str = "JavaScript";
const split = str.split("");
console.log(split);
const random = Math.floor(Math.random() * split.length);
console.log(split[random]);
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
console.log(
  "You cannot end a sentence with because because because is a conjunction".substr(
    30,
    21
  )
);
console.log(
  "Love is the best thing in this world. Some found their love and some are still looking for their love.".match(
    /love/gi
  )
);
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
const regEx = /[^\w\s]/gi;
console.log(sentence.replace(regEx, ""));
const salary =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let regExs = /\d+/g;

console.log(
  salary
    .match(regExs)
    .map(Number)
    .reduce(function (a, b) {
      return a + b;
    })
);
