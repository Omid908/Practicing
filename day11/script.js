//------------------- Input and changing the h1 text content  --------------------

// const person = {
//   fullName: "Ahmad",
//   lastName: "Ahmadi",
//   birthyear: 2003,
//   occupation: "Student",
// };
// greeting = function ({
//   fullName: newname,
//   lastName: last,
//   birthyear: birthy,
//   occupation: job,
// }) {
//   const currentyear = new Date().getFullYear();
//   const message = `Hello ${newname}, your last name is ${last}, you are currently ${
//     currentyear - birthy
//   } years old and your job is ${job}`;
//   document.querySelectorAll(".info").forEach((p) => {
//     p.textContent = message;
//   });
// };

// greeting(person);
// let username;
// let radius;
// let circumference;
// document.getElementById("btn").onclick = function () {
//   radius = document.getElementById("inp").value;
//   circumference = (2 * Math.PI * radius).toFixed(2);
//   document.querySelector(
//     ".heading"
//   ).textContent = `The radius of circle is ${circumference}`;
// };

//------------------- Increase and decrease buttons --------------------

// let increase = document.getElementById("increase");
// let decrease = document.getElementById("decrease");
// let reset = document.getElementById("reset");
// let label = document.getElementById("countlabel");
// let warning = document.getElementById("warning");
// let count = 0;
// function updateUI() {
//   label.textContent = count;
//   if (count <= 0) {
//     decrease.disabled = true;
//     warning.style.display = "block";
//   } else {
//     decrease.disabled = false;
//     warning.style.display = "none";
//   }
// }
// increase.onclick = function () {
//   count++;
//   updateUI();
// };
// decrease.onclick = function () {
//   count--;
//   updateUI();
// };
// reset.onclick = function () {
//   count = 0;
//   updateUI();
// };
// updateUI();

//------------------- Random number generator in range --------------------
// let max = 100;
// let min = 50;
// const random = Math.trunc(Math.random() * (max - min)) + min;
// document.getElementById("countlabel").textContent = random;

//------------------- Ternary Operator --------------------
// let student = true;
// let message = student ? "You are a student" : "You are not a student";
// console.log(message);
// let purchaseamount = 125;
// let discont = purchaseamount > 100 ? 10 : 0;
// console.log(
//   `Your total purchased amount is $${
//     purchaseamount - purchaseamount * (discont / 100)
//   }`
// );
//------------------- Switch --------------------
let day = 2;
switch (day) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
}
function getDayName(day) {
  const days = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednseday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };
  return days[day] || "invalid input ";
}
console.log(`Today is ${getDayName(1)}`);

let testscore = 23;
let grade;
switch (true) {
  case testscore > 90:
    grade = "A";
    break;
  case testscore > 80:
    grade = "B";
    break;
  case testscore < 50:
    grade = "F";
    break;
}
console.log(grade);
