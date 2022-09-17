


let playerSelection;
let computerSelection;
let playerCount = 0;
let cpuCount = 0;
let drawCount = 0;

const results = document.getElementsByClassName('results');
const player_score = document.getElementsByClassName('player_score');
const cpu_score = document.getElementsByClassName('cpu_score');
const winner = document.getElementsByClassName('winner');

const btn_rock = document.getElementsByClassName('rock');
const btn_paper = document.getElementsByClassName('paper');
const btn_scissors = document.getElementsByClassName('scissors');

/* a function that gets a randomly generated number between 0, 2 and returns a lower case rock, paper, or scissors*/
function getComputerChoice() {

    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
/* a function that plays 1 round of rock, paper, scissors */
function playRound(playerSelection, computerSelection) { 

    playerSelection = btn.addEventListener('click', function (e){
        console.log(e);
    })
    computerSelection = getComputerChoice(); /* calls the getComputerChoice function */ 
    /**conditionals for comparing win/loss */
    if (playerSelection == "rock" && computerSelection == "scissors") {
        playerCount++; /**Everytime a condition is evaluated, playerCount, drawCount and cpuCount can have their values incremented */
        return console.log(`You win! ${playerSelection} beats ${computerSelection} !`);

    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerCount++;
        return console.log(`You win! ${playerSelection} beats ${computerSelection} !`);
        
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerCount++;
        return console.log(`You win! ${playerSelection} beats ${computerSelection} !`);
        
    } else if (playerSelection == computerSelection) {
        drawCount++
        return console.log(`It's a TIE! ${playerSelection} cannot beat ${computerSelection}`);
    
    } else {
        cpuCount++;
        return console.log(`You lose!! ${computerSelection} beats ${playerSelection}`);
    }
}

function game() {
    /*loop that interates the playRound function 5 times*/
    
    /**Once loop finishes after five iterations, print the win/draw/loss outcome to the console */
    console.log(`\ Wins: ${playerCount} | Draws: ${drawCount} | Losses: ${cpuCount}`); 
    /**Conditions to see who wins, if its a draw, and who loses */
    if (playerCount > cpuCount) {
        console.log(`You win with best of 5!`);
    } else if (playerCount < cpuCount) {
        console.log(`You lose with worst of 5!`);
    } else if (playerCount === cpuCount) {
        console.log(`It's a draw`);
    }
}

game(); /*runs the game*/