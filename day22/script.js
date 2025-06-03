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
