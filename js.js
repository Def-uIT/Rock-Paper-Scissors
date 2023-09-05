getComputerChoice = function() {
    const array = ['rock', 'paper', 'scissors'];
    return array[Math.floor(Math.random() * array.length)];
}

getPlayerChoice = function() {
    return prompt('Make your choice!').toLowerCase();
}

while (true) {
    checkWin = function(computerSelection, playerSelection) {
        if (computerSelection == 'rock' && playerSelection == 'paper') {
            answer = `You win! ${playerSelection} beats ${computerSelection}`;
            return answer;
        } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
            answer = `You lost! ${computerSelection} beats ${playerSelection}`;
            return answer;
        } else if (computerSelection == 'rock' && playerSelection == 'rock') {
            answer = `Tie! ${computerSelection} and ${playerSelection} are equal.`;
            return answer;
    
        } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
            answer = `You win! ${playerSelection} beats ${computerSelection}`;
            return answer;
        } else if (computerSelection == 'paper' && playerSelection == 'rock') {
            answer = `You lost! ${computerSelection} beats ${playerSelection}`;
            return answer;
        } else if (computerSelection == 'paper' && playerSelection == 'paper') {
            answer = `Tie! ${computerSelection} and ${playerSelection} are equal.`;
            return answer;
    
        } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
            answer = `You win! ${playerSelection} beats ${computerSelection}`;
            return answer;
        } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
            answer = `You lost! ${computerSelection} beats ${playerSelection}`;
            return answer;
        } else if (computerSelection == 'scissors' && playerSelection == 'scissors') {
            answer = `Tie! ${computerSelection} and ${playerSelection} are equal.`;
            return answer;
        }
    }
    
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    console.log(computerSelection);
    console.log(playerSelection);
    
    console.log(checkWin(computerSelection, playerSelection));
}
