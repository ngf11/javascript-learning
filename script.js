const now = new Date();
let day = now.getDate();
let month = now.getMonth();
let year = now.getFullYear();
let hh = now.getHours();
let mm = now.getMinutes();

let hoursWorked = prompt("How many hours have you worked?");
let ratePerHour = prompt("What your rate per hour?");
let earnings = alert(
  `Enter hours: ${hoursWorked}\nEnter rate: ${ratePerHour}\nYour weekly Earnings:${
    hoursWorked * ratePerHour
  }`
);
