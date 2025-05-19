// const calcAge = function ( birthyear ){
//     console.log(2025 - birthyear);
//     console.log(this);
// };
// calcAge(2003);

// const calcAgeArrow = birthyear => {
//     console.log(2025 - birthyear);
//     console.log(this);
// };
// calcAgeArrow(2003);

const jonas = {
    firstName : 'Jonas',
    birthYear : 2004,
    calcAge : function(){
        console.log(2025 - this.birthYear);
        const self = this;
        const isMillenial = function (){
        if(self.birthYear >= 1981 && self.birthYear <= 1996);
    };
        isMillenial();
    },
    greet : () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    }
}
jonas.greet();
jonas.calcAge();
