//Day 2 first time around
// let word = "JavaScript";
// word[0] = "y";
// console.log(word);

// let nums = [4, "Hello, fat fuck", 11, 3];
// let nums2 = nums;
// nums2[1] = "sos un cornudo";
// console.log(nums);
// console.log(nums2);
// const pie = Math.PI;
// const PI = Math.ceil(pie);
// console.log(PI);
// const random = Math.floor(Math.random() * 101);
// console.log(random);
let challege = "30 Days of Javascript";
console.log(challege);
console.log(challege.length);
console.log(challege.toLocaleUpperCase());
console.log(challege.toLocaleLowerCase());
console.log(challege.substring(3, 7));
console.log(challege.length - 1);
console.log(challege.slice(3, challege.length - 1));
console.log(challege.slice(3, 20));
console.log(challege.includes("script"));
console.log(challege.split());
console.log(challege.split(" "));
console.log(
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(", ")
);
console.log(challege.replace("Javascript", "Python"));
console.log(challege.charAt(15));
console.log(challege.charCodeAt("J"));
console.log(challege.indexOf("30 Days of JavaScript"));
console.log(challege.lastIndexOf("30 Days of JavaScript"));
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
    "because"
  )
);
console.log(challege.trim());
console.log(challege.startsWith("3"));
console.log(challege.endsWith("t"));
console.log(challege.match("a"));
console.log("30 Days of", "Javascript".concat());
console.log(challege.repeat(2));
