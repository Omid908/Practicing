// let user = {
//   name: "Ahmad",
//   age: 25,
//   job: "Bug bounty hacker",
// };
// let key = prompt("What you want to know about user? Name, Age or Job");
// alert(user[key]);
// console.log(user.job);
// let fruit = prompt("What kind of fruit do you want?");
// let bag = {
//   [fruit]: 5,
// };
// alert(bag[fruit]);
// let item = prompt("What item do you want?");
// let qty = +prompt("How many do you want?");
// let cart = {
//   [item]: qty,
// };
// alert(JSON.stringify(cart)); // to convert the object to string
// console.log(cart);
// let user = {
//   fname: "Ahmad",
//   age: 30,
//   job: "Waiter",
// };
// // let user1 = user("Ahmad", 30);
// // alert(user1.fname);
// let output = [];
// for (let key in user) {
//   output.push(key + ": " + user[key]);
// }
// alert(output.join("\n"));
// let user = {
//   name: "John",
//   surname: "Smith",
//   name: "Pete",
// };
// delete user.name;
// for (let key in user) {
//   console.log(key + ": " + user[key]);
// }
// let schedule = {};
// function isEmpty() {
//   for (let key in schedule) {
//     return false;
//   }
//   return true;
// }
// schedule["8:30"] = "Get Up";
// alert(isEmpty(schedule));
// for (let key in schedule) {
//   console.log(key + ": " + schedule[key]);
// }
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }
// alert(sum);

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
  for (let key in obj) {
    console.log(key + ": " + obj[key]);
  }
}
multiplyNumeric(menu);
alert(window.innerHeight);
document.body.style.background = "red";

// change it back after 1 second
setTimeout(() => (document.body.style.background = ""), 5000);
if (confirm("Go to Youtube?")) {
  location.href = "https://www.youtube.com";
}
for (let node of document.body.childNodes) {
  alert(node); // shows all nodes from the collection
}
