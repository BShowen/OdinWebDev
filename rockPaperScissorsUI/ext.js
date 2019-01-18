
const message = document.querySelector("#game-message");
const lineBreak = document.createElement("br");
const currentRound = document.querySelector('#round');

let playerScore = 0;
let computerScore = 0;
let round = 1;

// render html round 1
currentRound.textContent = `Round ${round}`;

// Called onclick event
function game(playerSelection) {
    round++;
    currentRound.textContent = `Round ${round}`;

    gamePlay(playerSelection, computerPlay());

    // if (playerScore > computerScore) {
    //     message.innerHTML = "Player Wins Match!" + `${gamePlay(playerSelection, computerPlay())} ` + 
    //     `<br>` + `Your Score: ${playerScore}` + `<br>` + `Computer Score: ${computerScore}`;
    // } else if (playerScore < computerScore) {
    //     message.innerHTML = "Computer Wins Match! " +`${gamePlay(playerSelection, computerPlay())} ` + 
    //     `<br>` + `Your Score: ${playerScore}` + `<br>` + `Computer Score: ${computerScore}`;
    // } else {
    //     message.innerHTML = "Match is a Draw! " +`${gamePlay(playerSelection, computerPlay())} ` + 
    //     `<br>` + `Your Score: ${playerScore}` + `<br>` + `Computer Score: ${computerScore}`;
    // }
    
}

function gamePlay(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        message.innerHTML = "You Win! Rock beats scissors!" + `<br>` + 
        `Your Score: ${playerScore}` + `<br>` + `Computer Score: ${computerScore}`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++;
        message.innerHTML = "You Lose! Paper beats rock!" + `<br>` + 
        `Your Score: ${playerScore}` + `<br>` + `Computer Score: ${computerScore}`;
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        message.innerHTML = "It's a draw! Rock vs rock." + `<br>` + 
        `Your Score: ${playerScore}` + `<br>` + `Computer Score: ${computerScore}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        message.innerHTML = "It's a draw! Scissors vs scissors." + `<br>` + 
        `Your Score: ${playerScore}` + `<br>` + `Computer Score: ${computerScore}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        message.innerHTML = "You win! Scissors beats paper!" + `<br>` + 
        `Your Score: ${playerScore}` + `<br>` + `Computer Score: ${computerScore}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        message.innerHTML = "You lose! rock beats scissors!" + `<br>` + 
        `Your Score: ${playerScore}` + `<br>` + `Computer Score: ${computerScore}`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        message.innerHTML = "You lose! Scissors beats paper!" + `<br>` + 
        `Your Score: ${playerScore}` + `<br>` + `Computer Score: ${computerScore}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        message.innerHTML = "You Win! Paper beats rock!" + `<br>` + 
        `Your Score: ${playerScore}` + `<br>` + `Computer Score: ${computerScore}`;
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        message.innerHTML = "It's a draw! Paper vs paper." + `<br>` + 
        `Your Score: ${playerScore}` + `<br>` + `Computer Score: ${computerScore}`;
    } else {
        return "error";
    }
}

function computerPlay() {
    options = ['rock', 'paper', 'scissors'];
    randomOption = Math.floor(Math.random() * 3);
    return options[randomOption];
}


// Call game function when html buttons are clicked
const buttons = document.querySelectorAll('button');
buttons.forEach((item) => {
    // Target the individual button names, pass as playerSelection
    item.addEventListener('click', (e) => {
        game(e.target.name);
    });
    
});

// console.log(buttons);