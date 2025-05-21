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
let max = 100;
let min = 50;
const random = Math.trunc(Math.random() * (max - min)) + min;
document.getElementById("countlabel").textContent = random;
