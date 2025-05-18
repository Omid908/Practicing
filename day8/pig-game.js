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
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');
btnroll.addEventListener('click', function(){
    const random = Math.trunc(Math.random() * 6 ) + 1;
    diceEL.classList.remove('hidden');
    diceEL.src=`dice-${random}.png`;
    if(random!==1){
        // add the point to current score , 
        currentscore += random;
        // and i got confused here need to come a check again.
        document.getElementById(`current--${activeplayer}`).textContent = currentscore;
    }
    else{
        //Switch player
        document.getElementById(`current--${activeplayer}`).textContent = 0;
        currentscore = 0;
        activeplayer = activeplayer === 1 ? 0 : 1;
        player0EL.classList.toggle('player--active');
        player1EL.classList.toggle('player--active');
    }
})