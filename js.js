const gameArray = ['Rock', 'Paper', 'Scissors'];
const buttons = document.querySelectorAll(".bnt");

function compChoice() {
    const AllItems = ["Rock", "Paper", "Sciccors"];
    let choice = Math.floor(Math.random() * AllItems.length);
    return choice;
    
}

buttons.forEach(button => {button.addEventListener('click', ()=>{

    playerChoice = button.id;
    compChoice = compChoice();
    playGame();
})

}

)

function playGame(playerChoice, compChoice) {
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


