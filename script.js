console.log(typeof "10" == typeof 10);
console.log(parseFloat("9.8") == 10);
console.log(Math.round(parseFloat("9.8")) == 10);
console.log("jargon".includes("on"), "python".includes("on"));
console.log("I hope this course is not full of jargon".includes("jargon"));
console.log(Math.floor(Math.random() * 100));
console.log(Math.floor(Math.random() * 50) * 2);
console.log(Math.floor(Math.random() * 156));
let str = "JavaScript";
let strSlipt = str.split("");
console.log(strSlipt[Math.floor(Math.random() * strSlipt.length)]);
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 6\n45 1 5 25 125");
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
  "You cannot end a sentence with because because because is a conjunction".substring(
    31,
    54
  )
);
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
const earn =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
console.log(
  earn
    .match(/\d+/g)
    .map(Number)
    .reduce((a, b) => a + b)
); //match.map.reduce
