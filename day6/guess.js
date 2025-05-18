'use strict';
const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');
const labelScore = document.querySelector('.label-score');
const labelHighScore = document.querySelector('.highscore');
const guessInput = document.querySelector('.guess');
const number = document.querySelector('.number');
const btnagain = document.querySelector('.again');
let secretNumber = Math.floor(Math.random() * 20 ) + 1;
let score = 20;
let highestscore = 0;
const displaymessage = function (msg){
    document.querySelector('.message').textContent = msg;
}
const updatescore = function(val){
    document.querySelector('.score').textContent = val;
}
const setBodySTyle = ( bgcolor, width ) => {
    document.querySelector('body').style.backgroundColor = bgcolor;
    number.style.width = width;
}
number.textContent = '?';
btnCheck.addEventListener('click',function(){
    const guess = Number(guessInput.value);
    console.log(guess);
    if(!guess){
        displaymessage("Enter a valid Number");
    }
    else if ( guess === secretNumber){
        displaymessage("You won!");
        document.querySelector('body').style.backgroundColor = '#60B345';
        number.style.width='30rem';
        number.textContent = secretNumber;
        if(score > highestscore){
            highestscore = score;
            labelHighScore.textContent = highestscore;
        }
    }
        else if( guess !== secretNumber ){
            if ( score > 1 ){
                displaymessage(guess > secretNumber ? "Too high" : "Too low");
                score--;
                updatescore(score);
                }
                else {
                    displaymessage("You lost the game");
                    updatescore(0);
                  }
            } 
})
btnagain.addEventListener('click', function(){
    updatescore(20);
    number.textContent = '?';
    guessInput.value = "";
    number.style.width = '15rem';
    secretNumber = Math.floor(Math.random() * 20) + 1;
    setBodySTyle('black' , '15rem');
})