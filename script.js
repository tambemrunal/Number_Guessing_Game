'use strict';
let secretNum=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
let guess1=document.querySelector('.guess');

document.querySelector('.number').textContent='?';
document.querySelector('.check').addEventListener('click',function(){
    let guess=Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent="please Enter a number";
    }
    else if(guess==secretNum){
        document.querySelector('.message').textContent="Congrats you win the game";
        
        document.querySelector('body').style.backgroundColor='#60b347';
        
        guess1.disabled=true;
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=score;

        }
    }
    //guess is too high
    else if(guess>secretNum){
        if(score>1){
            document.querySelector('.message').textContent="Too high";
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='You lost the game';
        }
        
    }
    else if(guess<secretNum){
        if(score>1){
            document.querySelector('.message').textContent="Too low";
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='You lost the game';
        }

    }
    
    
})

document.querySelector('.again').addEventListener('click',function(){

    secretNum=Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent=secretNum;

    document.querySelector('body').style.backgroundColor='#222';
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('.message').textContent="start guessing...";
    document.querySelector('.guess').value='';

    guess1.disabled=false;


})



