
const userInput = prompt('What do you choose? rock, paper, or scissors?');
const playerSelection = userInput;
const computerSelection = computerPick();





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


