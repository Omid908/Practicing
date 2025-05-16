'use strict';
/*
const ahmad = {
    firstname : "Ahmad",
    lastname : "Dastpak",
    age : "24",
    job : "teacher",
    location: "US"
}

const namekey = 'name';
console.log(ahmad['first' + namekey]);
console.log(ahmad['last' + namekey]);
console.log(ahmad.age);

const intrestedin = prompt ( "What do you want to know about this person ( firstname, lastname, age, job, location? ");
if(ahmad[intrestedin]){
    console.log(ahmad[intrestedin]);
} else{
    console.log("Property doesn't exist");
}
ahmad.friends = ["Ali", "Mohammad", "Ehsan"];
console.log(`${ahmad.firstname} has ${ahmad.friends.length} friends and his best friend is ${ahmad.friends[0]}`);

const ahmad = {
    firstname : "Ahmad",
    lastname : "Dastpak",
    birthyear : 2004,
    job : "teacher",
    driverLicense : false,
    location: "US",
    calcAge : function(){
        this.age = 2025 - this.birthyear;
        return this.age
    },
    getSummary : function(){
        console.log(`${this.firstname} is ${this.age} years old, he is a ${this.job} and he has ${this.driverLicense ? 'a': 'no'} driving license.`)
    }
};
console.log(ahmad.calcAge());
console.log(ahmad.age);
console.log(ahmad.getSummary());


const mark = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,
    calcBMI : function(){
        this.bmi =  this.mass / (this.height * this.height);
        return this.bmi;
    }
};
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI : function(){
        this.bmi =  this.mass / (this.height * this.height);
        return this.bmi;
    }
};
if( john.calcBMI() > mark.calcBMI()){
    console.log(`${john.fullName}'s BMI ${john.bmi} is higher than Mark Miller's ${mark.bmi}`);
} else{
    console.log(`${mark.fullName}'s BMI ${mark.bmi} is higher than John Smith's ${john.bmi}`);
}
*/

for ( let rep = 1 ; rep <= 10 ; rep ++){
    console.log(`Lifting weight repetation ${rep} 🏋️‍♂️`);
}