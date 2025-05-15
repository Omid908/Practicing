const calcAverage = ( a , b , c ) => (( a + b + c ) / 3);
let scoreDolphins = calcAverage (99,99,99);
let scorekoalas = calcAverage (85,11,11);
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
checkWinner ( scoreDolphins , scoreKoalas );

/*
const calcAverage = ( a , b , c ) => Number((( a + b + c ) / 3).toFixed(2));
let avgDolphins = calcAverage (99,99,99);
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
*/