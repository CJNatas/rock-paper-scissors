const userInput = prompt('What do you choose? rock, paper, or scissors?');
const playerSelection = userInput;
const computerSelection = computerPick();




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


function playRound(playerSelection, computerSelection){
    if (playerSelection == rock && computerSelection == scissors){
        alert('Player wins!');
    }   else if (playerSelection == rock && computerSelection == paper){
        alert('Computer wins!');
    }   else if (playerSelection == rock && computerSelection == rock){
        alert('It is a draw!');
    }  
}