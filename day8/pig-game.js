'use strict';
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const score = [ 0 , 0 ];
let currentscore = 0;
let activeplayer = 0;
let playing = true;
let swithching = function(){
    document.getElementById(`current--${activeplayer}`).textContent = 0;
        currentscore = 0;
        activeplayer = activeplayer === 1 ? 0 : 1;
        player0EL.classList.toggle('player--active');
        player1EL.classList.toggle('player--active');
}
const renewing = function (){
    score[0] = 0;
    score[1] = 0;
    currentscore = 0;
    activeplayer = 0;
    playing = true;
    score0EL.textContent = 0;
    score1EL.textContent = 0;
    current0EL.textContent = 0;
    current1EL.textContent = 0;
    diceEL.classList.add('hidden');
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active');
    player0EL.classList.remove('player--winner');
    player1EL.classList.remove('player--winner');
}
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');
btnroll.addEventListener('click', function(){
    if(playing){
    const random = Math.trunc(Math.random() * 6 ) + 1;
    diceEL.classList.remove('hidden');
    diceEL.src=`dice-${random}.png`;
    if(random!==1){ 
        currentscore += random;
        // and i got confused here need to come a check again.
        document.getElementById(`current--${activeplayer}`).textContent = currentscore;
    }
    else{
        swithching();
    }
}
})
btnhold.addEventListener('click', function(){
    if(playing){
    score[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent = score[activeplayer];

    //check if the score is 100 to annouce the winner
    if(score[activeplayer] >= 20){
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
        playing = false;
        diceEL.classList.add('hidden');
    }
    else{
        swithching()
    }
}
})
btnnew.addEventListener('click',renewing);