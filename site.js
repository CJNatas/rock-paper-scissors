<<<<<<< HEAD
=======

>>>>>>> 39760fec6f8f3857a567b78d9fb641d769763939
const userInput = prompt('What do you choose? rock, paper, or scissors?');
const playerSelection = userInput;
const computerSelection = computerPick();




<<<<<<< HEAD
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");



function playerPick(){

}

function computerPick(){
    let things = ['Rock', 'Paper', 'Scissors'];
    let thing = things[Math.floor(Math.random()*things.length)];
    console.log('The computer chose: ' + thing);
}

=======

function computerPick(){
    let things = ['rock', 'paper', 'scissors'];
    let computerInput = things[Math.floor(Math.random()*things.length)];
    return computerInput;
}


function playRound(playerSelection, computerSelection){
    if (playerSelection == rock && computerSelection == scissors){
        alert('Player wins!');
    }   else if (playerSelection == rock && computerSelection == paper){
        alert('Computer wins!');
    }   else (playerSelection == rock && computerSelection == rock)
        alert('It is a draw!');
    }

>>>>>>> 39760fec6f8f3857a567b78d9fb641d769763939

function playRound(playerSelection, computerSelection){
    if (playerSelection == rock && computerSelection == scissors){
        alert('Player wins!');
    }   else if (playerSelection == rock && computerSelection == paper){
        alert('Computer wins!');
    }   else if (playerSelection == rock && computerSelection == rock){
        alert('It is a draw!');
    }  
}