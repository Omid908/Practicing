const calcAverage = ( a , b , c ) => Number((( a + b + c ) / 3).toFixed(2));
let avgDolphins = calcAverage (78,95,82);
let avgKoalas = calcAverage (85,11,11);
function checkWinner ( avgDolphins , avgKoalas ){
    if ( avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
    }
    else if ( avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
    }
    else{
        console.log("No team wins...");
    }
}
checkWinner ( avgDolphins , avgKoalas );

const calcTip = bills => ( bills <= 300 && bills >= 50 ) ? bills * 0.15 : bills * 0.20;
const bills = [ 125 , 555 , 44 ];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0] , bills[1] + tips[1] , bills [2] + tips[2]];
console.log("Bills: ", bills);
console.log("Tips: ", tips);
console.log("Total", total);
