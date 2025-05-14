/*
let firstName = "ahmad";
let birthYear = 2008;
let currentYear = 2025;
let content = (`Hello my name is ${firstName} i am ${currentYear - birthYear} years old`);
document.getElementById("title").textContent = content;
*/

/*
let firstName = "ahmad";
let age = 15;
const remainedYears = 18 - age;
if(age>= 18){
    document.getElementById("title").textContent = "You are ready to get you license. 😎";
}
else{
    document.getElementById("title").textContent = `Sorry, ${remainedYears} years is remained until you become adult`;
}
*/

/*
let firstName = "ahmad";
let age = 1800;
if(age>=2000){
    document.getElementById("title").textContent = "You are born in 21th century";
}
else if ( age <= 1999 && age >= 1899 ){
    document.getElementById("title").textContent = "You are born in 19th century";
}
else{
    document.getElementById("title").textContent = "Sorry your birth year is outside scope of this program";
}
*/

/*
let input;
while (true) {
    input = prompt("Enter your favorite number");
    if ( input !== null && input.trim() !== "" && !isNaN(input)){
        input = Number(input);
        break;
    }
    else{
        alert("invalid input, try again and enter a number")
    }
}
if(input === 7){
    document.getElementById("title").textContent = "Ah, same as mine :)";
}
else{
    document.getElementById("title").textContent = "Ah cool mine is 7 :)"
}
*/