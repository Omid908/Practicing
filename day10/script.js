// Shallow Copy and Deep Copy
/*
let jessica = {
    firstName : 'Jessica',
    lastName : 'William',
    family : ['Mary' , 'Max']
}
//Reference
let newJessica1 = jessica;
newJessica1.firstName = 'Jennifer';
console.log(jessica.firstName);
//Shallow Copy
let newJessica2 = {...jessica};
newJessica2.lastName = 'Davis';
newJessica2.family.push('John');
console.log(newJessica2.lastName);
console.log(jessica.family);
//Deep Copy
let newJessica3 = structuredClone(jessica);
newJessica3.firstName = 'Olivia';
newJessica3.family.push('Emma', 'Charlotte');
console.log(newJessica3.firstName);
console.log(newJessica3.family);
console.log(jessica.firstName);
console.log(jessica.family);
*/

const restaurant = {
  nameofRestaurant: "Classico Italiano",
  location: "idkstreet 80",
  catagories: ["Italian", "American", "Arabic", "Persian", "Turkish"],
  starterMenu: ["Garlic-Bread", "Bread", "Salad"],
  mainMenu: ["Pizza", "Pasta", "Lobya"],
  openinghours: {
    Thu: {
      open: 12,
      close: 22,
    },
    Wed: {
      open: 12,
      close: 22,
    },
    Fri: {
      open: 11,
      close: 22,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //We can define default values for each of argments so when user donesn't input any value then the default value will be there.
  orderdelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = "20:00",
    address,
  }) {
    console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at
    ${address} , in ${time} `);
  },
};
restaurant.orderdelivery({
  address: "Kabul , Afghanistan",
  mainIndex: 2,
  starterIndex: 2,
});

const {
  nameofRestaurant: newname,
  openinghours: hours,
  catagories: newcatagory,
} = restaurant;
console.log(newname, hours, newcatagory);

const { menu = [], starterMenu: newStartMenu = [] } = restaurant;
console.log(menu, newStartMenu);
let arr = [1, 2, 3];

let [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , , secondary] = restaurant.catagories;
console.log(main, secondary);
//Swithching
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainmeal] = restaurant.order(2, 0);
console.log(starter, mainmeal);
let a = 12;
let b = 13;
let c = 14;
const obj = { a: 1, b: 2, c: 3 };
({ b, a } = obj);
console.log(a, b);
const {
  Fri: { open, close },
} = hours;
console.log(open, close);
// Nested distructering
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);
// const nested2 = [2, 4, 5, 6, [2, 4, 3, 5, [2, 7, 8, 5]]];
// const [a, b, c, d, [e, f, g, h, [l, , ,]]] = nested2;
// console.log(a, b, c, e, f, h, i);
// //Default values if you define a variable to an array element that doesn't exist it'll be undefined but you can give a default value to
// //each of the variables so you won't encounter undefined in console.
// const [p = 1, q = 1, r = 1] = [9, 10];
// console.log(p, q, r);
