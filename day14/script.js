// class Person {
//   greet() {
//     console.log("Hello from Person");
//   }
// }
// class Student extends Person {
//   greet() {
//     console.log("Hello from students ;)");
//     super.greet();
//   }
// }
// const student = new Student();
// student.greet();

// class Device {
//   show() {
//     console.log("This is a generic device");
//   }
// }
// class Phone extends Device {
//   info() {
//     console.log("This is a smart phone");
//     super.show();
//   }
// }
// const ph = new Phone();
// ph.info();
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   introduction() {
//     console.log(`Hello i'm ${this.name} and i'm ${this.age} years old`);
//   }
// }
// class Admin extends User {
//   constructor(name, age, role) {
//     super(name, age);
//     this.role = role;
//   }
//   adminFunction() {
//     console.log(`${this.name} is ${this.age} years old ${this.role}`);
//   }
//   introduction() {
//     super.introduction();
//     console.log(`And i'm also a ${this.role}`);
//   }
// }
// const newadmin = new Admin("Ali", 30, "model");
// newadmin.adminFunction();
// newadmin.introduction();
//------------------- Setters and Getters ---------------------------
// We go for Setter to validate the inputs of the user to write them and for reading the user input we use the getter method
// class User {
//   constructor(username) {
//     this._username = username;
//   }
//   get username() {
//     return this._username;
//   }
//   set username(value) {
//     if (value.length < 5) {
//       console.log("too short !");
//       return value;
//     }
//     this._username = value;
//   }
// }
// const newuser = new User();
// newuser.username = "Ali";

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   set width(newwidth) {
//     if (newwidth > 0) {
//       this._width = newwidth;
//     } else {
//       console.error("width shouldn't be below zero.");
//     }
//   }
//   set height(newheight) {
//     if (newheight > 0) {
//       this._height = newheight;
//     } else {
//       console.error("Height can't be below zero.");
//     }
//   }
//   get width() {
//     return `${this._width.toFixed(1)}cm`;
//   }
//   get height() {
//     return `${this._height.toFixed(1)}cm`;
//   }
//   get area() {
//     return `${(this._width * this._height).toFixed(1)}cm^2`;
//   }
// }
// const rectangle = new Rectangle(5, 12);
// rectangle.width = -199;
// rectangle.height = "Pizza";
// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

// class Person {
//   constructor(firstname, lastname, age) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;
//   }
//   introduction() {
//     console.log(
//       `Hello i'm ${this.firstname} my lastname is ${this.lastname}, i'm currently ${this.age} years old`
//     );
//   }
//   set firstname(newname) {
//     if (typeof newname === "string" && newname.length > 4) {
//       this._firstname = newname;
//     } else {
//       console.error(
//         "Your name should be a string and have at least 4 characters."
//       );
//     }
//   }
//   set lastname(newlastname) {
//     if (typeof newlastname === "string" && newlastname.length >= 5) {
//       this._lastname = newlastname;
//     } else {
//       console.error("Your lastname should be a string with length of above 5");
//     }
//   }
//   set age(newage) {
//     if (typeof newage === "number" && newage >= 0) {
//       this._age = newage;
//     } else {
//       console.error("Age should be a number and be above zero");
//     }
//   }
//   get firstname() {
//     return this._firstname;
//   }
//   get lastname() {
//     return this._lastname;
//   }
//   get age() {
//     return this._age;
//   }
//   get fullname() {
//     return `${this._firstname} ${this.lastname}`;
//   }
// }
// const person1 = new Person("Ahmad", "Amiri", 25);
// person1.introduction();
// console.log(person1.fullname);

//------------------- Destructing arrays ---------------------------
// Destructuring means pulling values out of arrays or objects and assigning them to variables in a cleaner, faster way. Think of it like
// slicing up data with a scalpel — precise, elegant, deadly.
// const timeSpeed = [120, 130, 180, 200];
// [fastest, secondfastest, thirdfastest, slowest] = timeSpeed;
// console.log(fastest);
// console.log(slowest);

// const user = {
//   id: 333,
//   username: "Ali",
//   statusOfUser: {
//     bugreported: 12,
//     critical: 4,
//   },
// };
// const {
//   id,
//   username,
//   statusOfUser: { bugreported, critical } = reported,
// } = user;
// console.log(id);
// console.log(username);
// console.log(`Bug reported ${bugreported} which includs #${critical} Critical`);
const Person = {
  fullname: "Ahmad",
  lastname: "Amiri",
  age: 25,
  jbo: "Student",
  address: {
    street: "nowhere",
    city: "idk",
    country: "earth",
    zip_code: 0,
  },
};
function show() {
  for (let element in Person.address) {
    console.log(Person.address[element]);
  }
}
console.log(Person.fullname);
console.log(Person.lastname);
console.log(Person.address);
show();
