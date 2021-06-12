
function userInput(){
    let choiceMap = '';
    let makeChoice = prompt('what do you choose?');
    if (makeChoice === 'rock'){
        return makeChoice;
    } else if (makeChoice === 'paper'){
        return makeChoice;
    } else if (makeChoice ==='scissors'){
        return makeChoice;
    } else
        alert('invalid restart game');
    }  

function computerPlay(){
    let things = ['rock', 'paper', 'scissors'];
    let thing = things[Math.floor(Math.random()*things.length)];
    alert('Computer Chose: ' + thing);
    return thing;
}

const playerSelection = userInput();
const computerSelection = computerPlay();
const playerScore = 0;
const computerScore =0;

function displayResults(playerScore, computerScore){
    if (playerScore === 5){
        alert('you win!');
    } else if (computerScore === 5){
        alert('computer wins!');
    }

}



    
function playRound(playerSelection, computerSelection,playerScore,computerScore) {
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection === computerSelection){
            alert('its a tie!');
        }   else if (playerSelection === "rock" && computerSelection === "paper"){
            alert('you lose!');
            computerScore = computerScore++;
        }   else if (playerSelection === "paper" && computerSelection === "scissors"){
            alert('you lose!');
            computerScore = computerScore++;
        }   else if (playerSelection === "scissors" && computerSelection === "rock"){
            alert('you lose!');
            computerScore = computerScore++;
        }   else {
            alert('you win!');
            playerScore = playerScore++;
        }
    return playerScore && computerScore;
    

    
}

playRound(playerSelection, computerSelection, playerScore, computerScore);