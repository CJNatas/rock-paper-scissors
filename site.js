



function userInput(){
    let makeChoice = prompt('what do you choose?');
    if (makeChoice === 'rock'){
        return makeChoice;
    } else if (makeChoice === 'paper'){
        return makeChoice;
    } else if (makeChoice ==='scissors'){
        return makeChoice;
    } else
        alert('invalid input try again');
        play();
    }  

function computerPlay(){
    let things = ['rock', 'paper', 'scissors'];
    let thing = things[Math.floor(Math.random()*things.length)];
    alert('Computer Chose: ' + thing);
    return thing;
}




let playerScore = parseInt(0);
let computerScore = parseInt(0);
const roundScore = document.querySelector('.round');
    
function playRound(playerSelection, computerSelection) {
    
    
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection === computerSelection){
            alert('its a tie!');
            
        }   else if (playerSelection === "rock" && computerSelection === "paper"){
            alert('you lose!');
            computerScore++;
            
        }   else if (playerSelection === "paper" && computerSelection === "scissors"){
            alert('you lose!');
            computerScore++;
            
        }   else if (playerSelection === "scissors" && computerSelection === "rock"){
            alert('you lose!');
            computerScore++;
            
        }   else if (playerSelection === "rock" && computerSelection === "scissors"){
            alert('you win!')
            playerScore++;
            
        }   else if (playerSelection === "paper" && computerSelection === "rock"){
            alert('you win!')
            playerScore++;
            
        }   else if (playerSelection === "scissors" && computerSelection === "paper"){
            alert('you win!')
            playerScore++;
            
        }

    
}

let i = 0;
let play = () => {
    let playerSelection = userInput();
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log("Your score = " + playerScore);
    console.log("Computer's score = " + computerScore);
    i++;
    if (i !== 5) {
        play();
    }   else {
        alert("game over")
    }   
}

play();