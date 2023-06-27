console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);
console.log("10" === 10);
console.log(Math.ceil(parseFloat(9.81)) == 10);
console.log("Python".includes("on"), "Jargon".includes("on"));
console.log("I hope this course is not full of jargon".search("jargon"));
console.log("I hope this course is not full of jargon".match("jargon"));
console.log("I hope this course is not full of jargon".includes("jargon"));
console.log(Math.floor(Math.random() * 101));
console.log(Math.floor(Math.random() * 51) + 50);
console.log(Math.floor(Math.random() * 256));
const str = "JavaScript";
const splitStr = str.split("");
const random = Math.floor(Math.random() * splitStr.length);
console.log(splitStr);
console.log(splitStr[random]);
console.log("1 1 1 1 1 \n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125\n ");
console.log(
  "You cannot end a sentence with because because because is a conjunction".indexOf(
    "because"
  )
);
console.log(
  "You cannot end a sentence with because because because is a conjunction".lastIndexOf(
    "because"
  )
);
console.log(
  "You cannot end a sentence with because because because is a conjunction".search(
    "beacuse"
  )
);
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
let slice = sentence.substr(31, 24);
console.log(slice);
console.log(
  "Love is the best thing in this world. Some found their love and some are still looking for their love.".match(
    /love/gi
  )
);
console.log(
  "You cannot end a sentence with because because because is a conjunction".match(
    /because/gi
  )
);
const sen =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching"
    .replace(/[^\w\s]/gi, "")
    .trim();
console.log(sen);
const salary =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let regEx = /\d+/g;
console.log(
  salary
    .match(regEx)
    .map(Number)
    .reduce(function (a, b) {
      return a + b;
    })
);
