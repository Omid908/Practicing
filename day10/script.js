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
