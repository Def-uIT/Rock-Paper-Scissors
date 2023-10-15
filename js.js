const compChoice = function() {
    const AllItems = ["Rock", "Paper", "Sciccors"];
    let choice = Math.random * AllItems.length;
    return choice;
}

//const playerChoice = on click;

const playRound = function(playerChoice, compChoice) {
    const winArray = [ [0, 2, 1],
                        [1, 0, 2],
                        [2, 1, 0]  ];
    
    const result = winArray[playerChoice, compChoice];

    if (result == 0) {
        output.textContent = "Tie! You chose ${playerChoice} and Computer chose ${compChoice}!";
    } else if (result == 1){
        output.textContent = "You win! You chose ${playerChoice} and Computer chose ${compChoice}!";
        
    } else {
        output.textContent = "You lost! You chose ${playerChoice} and Computer chose ${compChoice}!";
    }
}


