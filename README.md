Planning the solution

Program RockPaperScissors

Game
    Start game with three buttons to choose from
        series of games will last 5 rounds
    When result from the game is presented
        restart loop and play again


Rules of the game need to be set with two players
    playerSelection & computerSelection
    If player chooses rock & computer chooses rock
        return draw
    If player chooses paper & computer chooses rock
        return player wins
    If player chooses scissors & computer chooses rock
        return computer wins
    If player chooses rock & computer chooses paper
        return computer wins
    If player chooses paper & computer chooses paper
        return draw
    If player chooses scissors & computer chooses paper
        return player wins
    If player chooses rock & computer chooses scissors
        return player wins
    If player chooses paper & computer chooses scissors
        return computer wins
    If player chooses scissors & computer chooses scissors
        return draw

computerPlay
    When promted computer randomly selects rock paper or scissors
    Returns selected value
    Uses that value against the playerselection

Result of player vs computer
    return result of the battle to console and alert