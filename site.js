let userInput = prompt('What do you choose? rock, paper, or scissors?');
let computerInput;

function computerPlay(){
    let things = ['rock', 'paper', 'sissors'];
    let thing = things[Math.floor(Math.random()*things.length)];
    alert('Computer Chose: ' + thing);
}

const playerScore = 0;
const computerScore = 0;
const playerSelection = userInput;
const computerSelection = computerPlay();


    
function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection === computerSelection){
            alert('its a tie!');
        }   else if (playerSelection === "rock" && computerSelection === "paper"){
            alert('you lose!');
        }   else if (playerSelection === "paper" && computerSelection === "scissors"){
            alert('you lose!');
        }   else if (playerSelection === "scissors" && computerSelection === "rock"){
            alert('you lose!');
        }   else {
            alert('you win!');
        }
    
}  

playRound(playerSelection, computerSelection);