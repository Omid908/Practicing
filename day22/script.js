// let grid = [];
// outer: for (let i = 0; i < 3; i++) {
//   grid[i] = [];
//   for (let j = 0; j < 3; j++) {
//     let val = prompt(`[${i},${j}:Enter 'x' or 'o' or 'Exit'`);
//     if (val === "Exit") {
//       break outer;
//     }
//     if (val !== "x" && val !== "o") {
//       alert("Invalid input");
//       j--;
//       continue;
//     }
//     grid[i][j] = val;
//   }
// }
// console.table(grid);
// let i = 0;
// while (++i < 5) alert(i);
// for (let i = 1; i < 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }
// let i = 1;
// while (i <= 3) {
//   alert(`number ${i}`);
//   i++;
// }
// let newnum = prompt("Enter a number above 100");
// while (+newnum <= 100 && newnum != null) {
//   newnum = prompt("Enter a number above 100");
// }
// alert("You entered: " + newnum);
// let a = +prompt("Enter a value between 1 to 5");
// switch (a) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//     console.log("too small");
//     break;
//   case 5:
//     console.log("Exactly");
//     break;
//   default:
//     console.log("invalid input");
// }
// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }
// let counter = outer();
// counter(); // ?
// counter(); // ?
// function showmessage(name, message = ": hello") {
//   name = prompt("Enter you name");
//   name = "*" + name + "*";
//   console.log(name + message);
// }
// showmessage();
// function showcount(count) {
//   //   alert(count ?? "No count is defined here");
//   count = count || "empty";
//   console.log(count);
// }
// showcount();
// function checkage(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm("Do you have permission from your parents?");
//   }
// }
// let age = prompt("Enter your age");
// if (checkage(age)) {
//   alert("Access guaranteed");
// } else {
//   alert("Access Denied");
// }
// let square = (num) => {
//   return num * num;
// };
// console.log(square(3));
// function runCallback(callback) {
//   callback("🔥");
// }
// runCallback(function (msg) {
//   console.log("Message is:", msg);
// });
// runCallback();
// function showprime(n) {
//   nextPrime: for (let i = 2; i < n; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }
//     console.log(i);
//   }
// }
// showprime(12);
// let age = prompt("Enter your age: ");
// function checkage(age) {
//   age > 18 ? true : confirm("Did your parents allow you?");
// }
// checkage();
// let x = +prompt("Enter the number :");
// let n = +prompt("Enter the power: ");
// function pow(x, n) {
//   let result = 1;
//   for (let i = 1; i < n; i++) {
//     result = result * x;
//   }
//   return result;
// }
// alert(`result ${pow(x, n)}`);
// function ask(question, yes, no) {
//   if (confirm(question) ? yes() : no());
// }
// function showok() {
//   alert("You agreed");
// }
// function cancel() {
//   alert("You canceled");
// }
// ask("Do you want to go out?", showok, cancel);
// let age = prompt("Enter your age: ");
// let welcome =
//   age >= 18
//     ? function () {
//         alert("Greetings");
//       }
//     : function () {
//         alert("Welcome");
//       };
// welcome();
// function ask(question, yes, no) {
//   if (confirm(question) ? yes() : no());
// }
// ask(
//   "Do you agree?",
//   () => alert("You agreed"),
//   () => alert("You denied")
// );
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    debugger; // 🔥 This will pause execution every iteration
    result *= x;
  }

  return result;
}

let base = 2;
let exponent = 3;
let finalResult = pow(base, exponent);

console.log("Result:", finalResult);
