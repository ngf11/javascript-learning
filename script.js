// Day 2
let challege = "30 Days of JavaScript";
console.log(challege);
console.log(challege.length);
console.log(challege.toUpperCase());
console.log(challege.toLowerCase());
console.log(challege.substring(3, 7));
console.log(challege.slice(3, challege.length - 1));
console.log(challege.includes("Script"));
console.log(
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(", ")
);
console.log(" 30 Days Of JavaScript".replace("JavaScript", "Python"));
console.log(challege.charAt(15));
console.log(challege.charCodeAt("J"));
console.log(challege.indexOf("a"));
console.log(challege.lastIndexOf("a"));
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
    /because/gi
  )
);
console.log(" 30 Days Of JavaScript ");
console.log(" 30 Days Of JavaScript ".trim());
console.log(challege.startsWith("30"));
console.log(challege.endsWith("Script"));
console.log(challege.match(/a/gi));
console.log("30 Days of".concat("JavaScript"));
console.log(challege.repeat(2));
console.log(
  `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
);
console.log(
  `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
);
console.log(typeof "10" == typeof 10);
console.log(typeof parseFloat("10") == typeof 10);
console.log(parseFloat("9.8") == 10);
console.log(Math.round(parseFloat("9.8")) == 10);
console.log("Python".includes("on"), "jargon".includes("on"));
console.log("I hope this course is not full of jargon.".includes("jargon"));
console.log(Math.floor(Math.random() * 101));
console.log(Math.floor(Math.random() * 50) + 50);
console.log(Math.floor(Math.random() * 256));
let str = "JavaScript";
let split = str.split("");
console.log(split);
let random = Math.floor(Math.random() * split.length);
console.log(split[random]);
console.log(`1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125`);
let becuase =
  "You cannot end a sentence with because because because is a conjunction";
becuase.substring(31, 54);
// console.log(becuase.substring(31, 54));
console.log(becuase);
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
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
console.log(sentence.replace(/[^\w\s]/gi, ""));
// /\d+/g
let earns =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
console.log(
  earns
    .match(/\d+/g)
    .map(Number)
    .reduce((a, b) => {
      return a + b;
    })
);
