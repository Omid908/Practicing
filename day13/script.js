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
//------------------- Class --------------------
//A class is a template for creating objects. better than constructor
//***** Note : Arrow functions doesn't have this. keyword so shouldn't be used in a class!
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
//   displayProduct() {
//     console.log(`Product is ${this.name} and it's price is ${this.price}`);
//   }
//   calculateTotal(saelstax) {
//     return this.price * (this.price + saelstax);
//   }
// }
// const tax = 0.5;
// const product1 = new Product("T-Shirt", 19.99);
// const total = product1.calculateTotal(tax).toFixed(2);
// product1.displayProduct();
// console.log(`The total amount ( with tax ) is $${total}`);
// class Hacker {
//   constructor(firstName, rank) {
//     this.firstName = firstName;
//     this.rank = rank;
//   }
//   introduction() {
//     console.log(`Hello i'm ${this.firstName}, my rank is ${this.rank}`);
//   }
// }
// const hacker1 = new Hacker("Ahmad", "Elite");
// hacker1.introduction();
//------------------- Static keyword --------------------
//A static method or property in JavaScript is one that belongs to the class itself, not to instances (objects) created from the class.
// class Hacker {
//   constructor(name) {
//     this.name = name;
//   }
//   sayhello() {
//     console.log(`Hello my name is ${this.name}`);
//   }
//   static powerlevel() {
//     console.log("Hackers are unstopable");
//   }
// }
// const newHacker = new Hacker("Ahmad");
// newHacker.sayhello();
// Hacker.powerlevel;
// class Scanner {
//   constructor(target, status = "idle") {
//     this.target = target;
//     this.status = status;
//   }
//   startScan() {
//     this.status = "scanning";
//     console.log(`Started scanning ${this.target}`);
//   }
//   stopScan() {
//     this.status = "stopped";
//     console.log(`Scan for ${this.target} is ${this.status}`);
//   }
//   static getSignature() {
//     console.log(`Scanner Signature: v1.0-SECURE`);
//   }
// }
// const newtarget = new Scanner("google.com", "idle");
// newtarget.startScan();
// newtarget.stopScan();
// Scanner.getSignature();
// class Circle {
//   static PI = Math.PI.toFixed(3);
//   static getDiameter(radius) {
//     return radius * this.PI;
//   }
//   static getCircumference(radius) {
//     return 2 * this.PI * radius;
//   }
//   static getArea(radius) {
//     return this.PI * Math.pow(radius, 2);
//   }
//   static Information(number) {
//     console.log(this.getDiameter(number).toFixed(2));
//     console.log(this.getCircumference(number).toFixed(2));
//     console.log(this.getArea(number).toFixed(2));
//   }
// }
// console.log(Circle.getArea(2).toFixed(2));
// Circle.Information(5);
//------------------- Inheritance --------------------
// class Parent {
//   greet() {
//     console.log("Hello from Parent");
//   }
// }
// class Child extends Parent {
//   childGreet() {
//     console.log("Hello from Child");
//   }
// }
// const child = new Child();
// child.greet();
// child.childGreet();
// class Scanner {
//   constructor(target) {
//     this.target = target;
//   }
//   scan() {
//     console.log(`Scanning ${this.target}`);
//   }
// }
// class XSSscanner extends Scanner {
//   payload() {
//     console.log(`<script>alert("XSS")</script>`);
//   }
// }
// const newtarget = new XSSscanner("google.com");
// newtarget.scan();
// newtarget.payload();
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Rabbit extends Animal {
  constructor(name, age, runspeed) {
    super(name, age);
    this.runspeed = runspeed;
  }
}
class Fish extends Animal {
  constructor(name, age, swimspeed) {
    super(name, age);
    this.swimspeed = swimspeed;
  }
}
class Hawk extends Animal {
  constructor(name, age, flyingspeed) {
    super(name, age);
    this.flyingspeed = flyingspeed;
  }
  introduction() {
    console.log(
      `this is a ${this.name} , it's age is ${this.age}, and flies with ${this.flyingspeed}km per hours`
    );
  }
}

const rabit = new Rabbit("rabbit", 25, 32);
const fish = new Fish("fish", 20, 12);
const hawk = new Hawk("hawk", 10, 320);
console.log(rabit);
console.log(fish);
hawk.introduction();
