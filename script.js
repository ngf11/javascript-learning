console.log(
  "The quote\n 'There is no exercise better for the heart than reaching down and lifting people up.' \nby \nJohn Holmes\n teaches us to help one another."
);
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);
console.log(typeof parseFloat("10") == 10);
console.log(typeof parseFloat("10") == typeof 10);
console.log(Math.round(parseFloat("9.8")) == 10);
console.log("python".includes("on"), "jargon".includes("on"));
console.log(Math.floor(Math.random() * 101));
console.log(Math.floor(Math.random() * 50) + 50);
console.log(Math.floor(Math.random() * 256));
let jsStr = "JavaScript";
let jsSlit = jsStr.split("");
let jsRam = Math.floor(Math.random() * jsSlit.length);
console.log(jsSlit[jsRam]);
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
console.log(
  "You cannot end a sentence with because because because is a conjunction".substr(
    31,
    24
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
sentence.replace(/[^\w\s]/gi, "");
console.log(sentence.replace(/[^\w\s]/gi, ""));
const howMuch =
  "Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'";

console.log(
  howMuch
    .match(/\d+/gi)
    .map(Number)
    .reduce((a, b) => {
      return a + b;
    })
);
