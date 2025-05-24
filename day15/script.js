"use strict";
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
const users = [
  { name: "Ali", age: 25 },
  { name: "Ahmad", age: 20 },
  { name: "Zahra", age: 21 },
  { name: "Omar", age: 25 },
];
//users.sort((a, b) => b.age - a.age);
//users.sort();
users.sort(function (a, b) {
  if (a.age !== b.age) {
    return b.age - a.age;
  } else {
    return a.name.localeCompare(b.name);
  }
});
console.log(users);
