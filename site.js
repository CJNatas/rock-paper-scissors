



function userInput(){
    let makeChoice = prompt('5 rounds to the death, what is your weapon, rock, paper, or scissors?');
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
let roundScore = parseInt(0);
    
function playRound(playerSelection, computerSelection) {
    
    
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection === computerSelection){
            alert('its a tie!');
            roundScore++
        }   else if (playerSelection === "rock" && computerSelection === "paper"){
            alert('you lose!');
            computerScore++;
            roundScore++
        }   else if (playerSelection === "paper" && computerSelection === "scissors"){
            alert('you lose!');
            computerScore++;
            roundScore++
        }   else if (playerSelection === "scissors" && computerSelection === "rock"){
            alert('you lose!');
            computerScore++;
            roundScore++
        }   else if (playerSelection === "rock" && computerSelection === "scissors"){
            alert('you win!')
            playerScore++;
            roundScore++
        }   else if (playerSelection === "paper" && computerSelection === "rock"){
            alert('you win!')
            playerScore++;
            roundScore++
        }   else if (playerSelection === "scissors" && computerSelection === "paper"){
            alert('you win!')
            playerScore++;
            roundScore++
        }

    
}

let i = 0;
let play = () => {
    let playerSelection = userInput();
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log("Your score = " + playerScore);
    console.log("Computer's score = " + computerScore);
    console.log("Round : " + roundScore);
    i++;
    if (playerScore === 5){
        alert('player wins');
    }   else if (computerScore === 5){
        alert('computer wins');
    }   else {
        play();
    }
}   


play();