"use strict";
import { PI, getCircumference, getArea, getVolume } from "./mathutility.js";
// -------------------------- .srot() ------------------------------
// let users = [
//   { name: "Ahmad", age: 15 },
//   { name: "Mohammad", age: 20 },
//   { name: "Ali", age: 25 },
// ];
// users.sort((a, b) => a - b); // Here while using arrow function no need for return keyword
// console.log(users);
// let numbers = [20, 5, 75, 9];
// numbers.sort((a, b) => {
//   // When using curly bracets always you should return the value if not it won't work
//   return a - b;
// });
// console.log(numbers);
// let fruits = ["Banana", "Apple", "Orange"];
// fruits.sort();
// console.log(fruits);
// const users = [
//   { name: "Ali", age: 25 },
//   { name: "Ahmad", age: 20 },
//   { name: "Zahra", age: 21 },
//   { name: "Omar", age: 25 },
// ];
//users.sort((a, b) => b.age - a.age);
//users.sort();
// users.sort(function (a, b) {
//   if (a.age !== b.age) {
//     return b.age - a.age;
//   } else {
//     return a.name.localeCompare(b.name);
//   }
// });
// console.log(users);
// -------------------------- date =() ------------------------------
//Date objects in JavaScript are your way to handle dates and times. They store and let you work with moments in time—like today’s date, a
//specific birthday, or a timestamp.
// const now = new Date();
// console.log(now);
// const mydate = new Date("2025-5-7");
// console.log(mydate.getMonth() + 1);
// -------------------------- Closures ------------------------------
// function creategame() {
//   let score = 100;
//   function increase(points) {
//     score += points;
//     console.log(`${score} points`);
//   }
//   function decrese(points) {
//     score = score - points;
//     console.log(`${score} points`);
//   }

//   function total(points) {
//     score = points;
//     console.log(`${points} points`);
//   }
//   return { increase, decrese, total };
// }
// const game = creategame();
// game.increase(4);
// game.decrese(2);
// game.total(8);
// score = 1000; // can't happen because of closure and limited scop and access that we have so we can't access this variable anymore
// it's private
// -------------------------- Settimeout() ------------------------------
// function hello() {
//   console.log("Hello");
// }
// setTimeout(hello, 3000);
// -------------------------- ES6 Module ------------------------------
// All these funcitons exist in mathutility.js
// let x = 9;
// console.log(PI);
// getArea(x);
// getCircumference(x);
// getVolume(x);

// -------------------------- Synctions and Asynction idk what's it's name ------------------------------

// const promise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("Done");
//   } else {
//     reject("Failed");
//   }
// });

// promise
//   .then((result) => console.log(result)) // "Done"
//   .catch((error) => console.error(error));

// -------------------------- Error handling try{} , catch {}, finally {} ------------------------------
// try     => runs code that may throw an error
// catch   => runs *only if* an error occurs in try block, gives you the error object error.message( this prints a human readable context of
//  error that you are facing in your program)
// finally => always runs after try/catch, used for cleanup or guaranteed execution, it always gets executed .
try {
  console.log("Hello");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("This one always executes");
}
console.log("You have reached the end");

const jsonString = '{"name": "Omid", "age": 20}'; // Change this to invalid JSON later to test

try {
  const data = JSON.parse(jsonString);

  if (!data.hasOwnProperty("name")) {
    throw new Error("It should have a name property ");
    console.log(data);
  }
} catch (error) {
  // Log the error message here

  console.log(error.message);
} finally {
  // Log the message that parsing is done
  console.log("Parsing is done");
}

console.log("Program finished");
