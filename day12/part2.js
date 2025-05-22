//--------------------------- Arrays ---------------------------
// let fruits = ["Orange", "Apple", "Banana"];
// fruits.sort().reverse(); //Srots in alphabetical order and then reverses it
// for (let fruit of fruits) {
//   console.log(fruit);
// }
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(fruits[i]);
// }
//--------------------------- Spread Operator ---------------------------
// let fruits = ["Apple", "Orange", "Banana"];
// let vegetables = ["Cucumber", "Tomato", "Potato"];
// let numbers = [1, 2, 5, 6, 90, 25, 0];
// let min = Math.min(...numbers);
// let max = Math.max(...numbers);
// let newnum = min + max;
// console.log(min, max, newnum);
// let all = fruits.concat(vegetables);
// console.log(...fruits, ...vegetables, "Milk", "Butter");
// console.log(all);
//--------------------------- Rest Parameters ---------------------------
let fruit = function (...fruits) {
  console.log(...fruits);
};
let food1 = "Kabab";
let food2 = "Shawarma";
let food3 = "burger";
fruit(food1, food2, food3);
let cities = function (...city) {
  console.log(city);
};
let city1 = "London";
let city2 = "NewYork";
let city3 = "Dubai";
cities(city1, city2, city3);
let sum = function (...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
};
console.log(`Your total is $${sum(2, 3, 67, 567, 34)}`);
let avrg = function (...nums) {
  let result = 0;
  for (let num of nums) {
    result += num;
  }
  return result / nums.length;
};
let total = avrg(2, 3, 4, 8, 9, 10, 2, 3);
console.log(total);

let combining = function (...str) {
  return str.join(" ");
};
let fullname = combining("Ahmad", "Amiri");
console.log(fullname);
