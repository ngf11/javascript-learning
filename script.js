const BMI = (w, h) => {
  let cal = w / (w * h);
  if (cal < 18.5) {
    return `Your BMI is ${cal} you are Underweight `;
  } else if (cal <= 24.9) {
    return `Your BMI is ${cal} you are Normal `;
  } else if (cla < 29.9) {
    return `Your BMI is ${cal} you are Overweight `;
  } else {
    return `Your BMI is ${cal} you are Obese `;
  }
};
console.log(BMI(90, 1.69));
