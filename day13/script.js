"use strict";
//------------------- Random Password Generator --------------------

// const generatePasswd = function (
//   passwordlength,
//   includeLowerCase,
//   includeUpperCase,
//   includeNumber,
//   includeSymbols
// ) {
//   const lowerchars = "abcdefghijklmnopqrstuvwxyz";
//   const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const numChars = "1234567890";
//   const symbols = "!@#$%^&*()_+?<>";

//   let allowedChars = "";
//   let password = "";

//   allowedChars += includeLowerCase ? lowerchars : "";
//   allowedChars += includeUpperCase ? upperCaseChars : "";
//   allowedChars += includeNumber ? numChars : "";
//   allowedChars += includeSymbols ? symbols : "";

//   if (passwordlength <= 0) {
//     return "Password length must be above 0";
//   }
//   if (allowedChars.length === 0) {
//     return "At least one of the options must be true! ";
//   }
//   for (let i = 0; i < passwordlength; i++) {
//     const randomIndex = Math.trunc(Math.random() * allowedChars.length);
//     password += allowedChars[randomIndex];
//   }

//   return password;
// };

// const passwordlength = 12;
// const includeLowerCase = true;
// const includeUpperCase = true;
// const includeNumber = true;
// const includeSymbols = true;

// const password = generatePasswd(
//   passwordlength,
//   includeLowerCase,
//   includeUpperCase,
//   includeNumber,
//   includeSymbols
// );

// console.log(`Generated password: ${password}`);

//------------------- Callback function --------------------

// A function that's passed as an argument to another function , and once the function is done the callbacked function will work
// to make sure that function is executed maybe after reading file ,network requests or interacting with databass is completed .
// function hello(callback) {
//   console.log("Hello");
//   callback();
// }
// function goodbye() {
//   console.log("Goodbye");
// }
// hello(goodbye);
// function sum(callback, x, y) {
//   result = x + y;
//   callback(result);
// }
// function display(result) {
//   console.log(result);
// }
// sum(display, 2, 9);
//------------------- For each Method --------------------

// Works only on Arrays and applies a function on each element of an array
// it's formula is like Array.foreach( function ) element , index , array
// let numbers = [1, 2, 3, 4, 5];
// let fruits = ["apple", "orange", "banana"];
// let display = function (element) {
//   console.log(element);
// };
// let uppercase = function (element, index, array) {
//   array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// };
// fruits.forEach(uppercase);
// fruits.forEach(display);
// let double = function (element, index, array) {
//   array[index] = element * 2;
// };
// numbers.forEach(double);
// numbers.forEach(display);
//------------------- .map() method --------------------

// “.map() creates a new array by applying a function to every item in the original array. and doesn't change the original array”
// const dates = ["2024-2-10", "2025-6-23", "2025-8-9"];
// const newd = dates.map(newdates);
// console.log(newd);
// function newdates(element) {
//   const parts = element.split("-");
//   return `${parts[1]} / ${parts[2]} / ${parts[0]}`;
// }
// let numbers = [5, 10, 15];
// const newn = numbers.map(function (numbers) {
//   return numbers + 10;
// });
// console.log(newn);

// const users = ["john@example.com", "alice@gmail.com", "bob@yahoo.com"];
// const domainname = users.map(function (users, email) {
//   let newdata = users.split("@")[1];
//   return newdata;
// });
// console.log(domainname);
//------------------- .filter() method --------------------

//.filter() goes through every element in an array and keeps only those that pass your test (the condition you give).
// const students = [16, 17, 16, 18, 20, 21, 17, 22];
// const teenagers = students.filter(teenager);
// function teenager(element) {
//   return element < 18;
// }
// console.log(teenagers);

// const emails = [
//   "john@example.com",
//   "hacker@evil.com",
//   "admin@gmail.com",
//   "spam@trash.com",
// ];
// const newdta = emails.filter(newemail);
// function newemail(element) {
//   let valid = element.split("@")[1];
//   return valid === "gmail.com";
// }
// console.log(newdta);

//------------------- .reduce() method --------------------

//.reduce() is a method that takes an array and “reduces” it to a single value — like a sum, product, or any combined result.
// const num = [10, 40, 25];
// const total = num.reduce(function (accumelator, element) {
//   return accumelator + element;
// });
// console.log(`Your total is $${total}`);

// const grades = [89, 96, 99, 10];
// const maximum = grades.reduce(function (accumelator, element) {
//   return Math.max(accumelator, element);
// });
// console.log(maximum);

//------------------- Functoin Declearation and Expression --------------------
// In function decleration you define a function and name it but can't use it as a value or argument in other places but with
//Function expression you pass the function as a value or variable and can use it in multiple places with no problem.
// const number = [1, 2, 3, 4, 5];
// const newnumber = number.map(function (element) {
//   return Math.pow(element, 2);
// });
// console.log(newnumber);
// const evennum = number.filter(function (element) {
//   return element % 2 === 0;
// });
// console.log(evennum);

// let hello = (firstName) => console.log(`Hi ${firstName}`);
// hello("Mohammad");

// const newnum = number.reduce(
//   (accumelator, element) => ({
//     sum: accumelator.sum + element,
//     product: accumelator.product * element,
//   }),
//   { sum: 0, product: 1 }
// );
// console.log(newnum);
//------------------- Objects ( begginer level ) --------------------
// *** Note: this. keyword doesn't work on arrow functions
// let person1 = {
//   firstName: "Ahmad",
//   lastName: "Amiri",
//   age: 25,
//   introduction: function () {
//     console.log(
//       `Hello i'm ${this.firstName} and my lastname is ${this.lastName}, i am ${this.age} years old`
//     );
//   },
//   eat: (food) => {
//     console.log(`Currently i'm eating ${food}`);
//   },
// };
// console.log(person1.firstName);
// person1.introduction();
// person1.eat("Burger");
//------------------- Constructor --------------------
// function Personality(name, lastName, age, behavior) {
//   this.name = name;
//   this.lastName = lastName;
//   this.age = age;
//   this.behavior = behavior;
//   this.introduction = function () {
//     console.log(
//       `Hey everyone i'm ${name}, my lastname is ${lastName} and i'm ${age} years old a fun fact about me is that i have a ${behavior} behavior :) `
//     );
//   };
// }
// const person1 = new Personality("Ahmad", "Amiri", 25, "Weird");
// person1.introduction();

// function Payload(type, value) {
//   (this.type = type),
//     (this.value = value),
//     (this.send = function () {
//       console.log(`Testing ${this.type} : Payload ${this.value}`);
//     });
// }
// const XSS = new Payload("XSS", "<script>alert(1)</script>");
// XSS.send();

// function Information(username, password) {
//   (this.username = username),
//     (this.password = password),
//     (this.login = function () {
//       console.log(`Trying login with ${this.username} : ${this.password}`);
//     });
// }
// const attempt1 = new Information("Ahmad", 1234);
// attempt1.login();
