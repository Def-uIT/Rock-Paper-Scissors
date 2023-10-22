counting_player_score = 0;
counting_comp_score = 0;

function compPlay() {
    const AllItems = ["Rock", "Paper", "Sciccors"];
    let choice = Math.floor(Math.random() * AllItems.length);
    return choice;
    
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {button.addEventListener('click', () => {
    const playerChoice = button.id;
    const compChoice = compPlay();
    playGame(playerChoice, compChoice);
})})







function playGame(playerChoice, compChoice) {
    const winArray = [  [0, 2, 1], 
                        [1, 0, 2], 
                        [2, 1, 0] ];
                        
    const result = winArray[playerChoice][compChoice];
    
    const output = document.querySelector('.output p');
    const AllItems = ["Rock", "Paper", "Sciccors"];
    const player_score = document.querySelector('#player_score');
    const comp_score = document.querySelector('#comp_score');


    if (result == 0) {
        output.textContent = `Tie! You chose ${AllItems[playerChoice]} and Computer chose ${AllItems[compChoice]}!`;
    } else if (result == 1){
        output.textContent = `You win! You chose ${AllItems[playerChoice]} and Computer chose ${AllItems[compChoice]}!`;
        player_score.textContent = `${counting_player_score + 1}`;
        counting_player_score += 1;
    } else {
        output.textContent = `You lost! You chose ${AllItems[playerChoice]} and Computer chose ${AllItems[compChoice]}!`;
        comp_score.textContent = `${counting_comp_score + 1}`;
        counting_comp_score += 1;
    }

    if (((player_score.textContent) == "3") || ((comp_score.textContent) == "3")) {

        if (player_score.textContent == "3") {
            alert('You win!!! You are really better then comp');
        } else {
            alert('You lost!!! Maybe you are not so good...');
        }
        
        output.textContent = "Test your might!";
        player_score.textContent = "0";
        comp_score.textContent = "0";
        counting_player_score = 0;
        counting_comp_score = 0;
    }
}


