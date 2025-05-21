//------------------- For Loops --------------------
// for (let i = 10; i > 0; i--) {
//   if (i == 7) {
//     continue;
//     //Break; to break the loop and exit
//   }
//   console.log(i);
// }
// console.log("Happy New Year");
//------------------- Number Guessing Game --------------------
// const min = 1;
// const max = 10;
// let answer = Math.trunc(Math.random() * (max - min + 1)) + min;
// let attempt = 0;
// let guess;
// while (true) {
//   guess = window.prompt("Guess a number between 1 to 10:");
//   guess = Number(guess);
//   if (isNaN(guess)) {
//     window.alert("Enter a valid input");
//   } else if (guess <= 0 || guess > 10) {
//     window.alert("Guess should be between 1 to 10!");
//   } else {
//     attempt++;
//     if (guess > answer) {
//       window.alert("Too high , Try again");
//     } else if (guess < answer) {
//       window.alert("Too low , Try again");
//     } else if (answer === guess) {
//       window.alert(`You won :) in ${attempt} attempts`);
//       break;
//     }
//   }
// }
//------------------- Functions --------------------
// let isEven = function (num) {
//   return num % 2 === 0 ? "Even" : "Odd";
// };
// let add = function (a, b) {
//   return (result = a + b);
// };
// let isEmail = function (email) {
//   return email.includes("@") ? "Valid" : "Invalid";
// };
// console.log(isEmail("ahmad2@gmail.com"));
// console.log(add(3, 4));
// console.log(isEven(4));
//------------------- Temp Conversion Program --------------------
const textBox = document.getElementById("textBox");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const result = document.getElementById("result");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let temp = Number(textBox.value);
  if (toF.checked) {
    let far = temp * (9 / 5) + 32;
    result.textContent = `${temp}°F in Celcius is equal to ${far.toFixed(2)}°F`;
  } else if (toC.checked) {
    let cel = (5 / 9) * (temp - 32);
    result.textContent = `${temp}°C in Fahrenhiet is equal to ${cel.toFixed(
      2
    )}°C`;
  } else {
    result.textContent = "Select a Unit";
  }
});
