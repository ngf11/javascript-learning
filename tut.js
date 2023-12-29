async function start() {
  const data = await fetch(
    "https://api.soccerdataapi.com/livescores/?auth_token=7336b77d2f4f9c28740cb42868508ed17e8ce4df"
  );
  const result = await data.json();
  const output = result.map((item) => item.country);
  console.log(output);
}

function start2() {
  return fetch(
    "https://api.soccerdataapi.com/livescores/?auth_token=7336b77d2f4f9c28740cb42868508ed17e8ce4df"
  )
    .then((response) => response.json())
    .then((data) => data.map((items) => console.log(items.league_name)));
}
start();
start2();
const BMI = (w, h) => {
  let cal = [(w * h) / w];
  if (cal < 18.5) {
    return `Your BMI is ${cal} you are Underweight `;
  } else if (cal <= 24.9) {
    return `Your BMI is ${cal} you are Normal `;
  } else if (cal < 29.9) {
    return `Your BMI is ${cal} you are Overweight `;
  } else {
    return `Your BMI is ${cal} you are Obese `;
  }
};
console.log(BMI(90, 169));

function findMax(...arg) {
  return Math.max(...arg);
}
console.log(findMax(10, 11, 12));
