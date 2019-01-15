
const message = document.querySelector("#game-message");

let playerScore = 0;
let computerScore = 0;
let round = 1;

function computerPlay() {
    options = ['rock', 'paper', 'scissors'];
    randomOption = Math.floor(Math.random() * 3);
    return options[randomOption];
}

function gamePlay(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return "You Win! Rock beats scissors!";
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++;
        return "You Lose! Paper beats rock!";
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return "It's a draw! Rock vs rock.";
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return "It's a draw! Scissors vs scissors.";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return "You win! Scissors beats paper!";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return "You lose! rock beats scissors!";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return "You lose! Scissors beats paper!";    
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return "You Win! Paper beats rock!";
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return "It's a draw! Paper vs paper.";
    } else {
        return "error";
    }
}

function game(playerSelection) {
    
    console.log(`Round: ${round} `);
    round++;
    // let playerSelection = prompt("Please choose rock, paper, or scissors.");
    //console.log(gamePlay(playerSelection, computerPlay()));
    message.textContent = `${gamePlay(playerSelection, computerPlay())}` + <br> + "testing";

    console.log(`Current score: Player ${playerScore}, Computer ${computerScore}`);
    if (playerScore > computerScore) {
        return "Player Wins Match!" + playerScore + ":" + computerScore;
    } else if (playerScore < computerScore) {
        return "Computer Wins Match! " + playerScore + ":" + computerScore;
    } else {
        return "Match is a draw!" + playerScore + ":" + computerScore;
    }
    
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