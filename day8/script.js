'use strict';
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const closemodal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
} 
const openmodal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
console.log(btnsOpenModal);
for ( let i = 0 ; i < btnsOpenModal.length ; i++){
    btnsOpenModal[i].addEventListener('click', openmodal);
    }
btnCloseModal.addEventListener('click', closemodal);
overlay.addEventListener('click', closemodal);

document.addEventListener('keydown' , function(data){
    if(data.key === 'Escape' && !modal.classList.contains('hidden')){
            closemodal();
    }
});
