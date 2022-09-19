
let playerSelection;
let computerSelection;
let playerCount = 0;
let cpuCount = 0;
let drawCount = 0;

const results = document.querySelector('.results');
const player_score = document.querySelector('.player_score');
const cpu_score = document.querySelector('.cpu_score');
const winner = document.querySelector('.winner');
const btn_rock = document.querySelector('.rock');
const btn_paper = document.querySelector('.paper');
const btn_scissors = document.querySelector('.scissors');

btn_rock.addEventListener('click', function() {
    results.textContent = '';
    playRound('rock', getComputerChoice()); 

    if (playerCount == 5){
        btn_rock.removeEventListener('click', arguments.callee);
        winner.textContent = "YOU WON 5 GAMES";
    } else if (cpuCount == 5){
        winner.textContent = "YOU LOST, CPU WINS 5";
    }
});

btn_paper.addEventListener('click', function() {
    results.textContent = '';
    playRound('paper', getComputerChoice());

    if (playerCount == 5){
        btn_paper.removeEventListener('click', arguments.callee);
        winner.textContent = "YOU WON 5 GAMES";
    } else if (cpuCount == 5){
        winner.textContent = "YOU LOST, CPU WINS 5";
    }
});

btn_scissors.addEventListener('click', function() {
    results.textContent = '';
    playRound('scissors', getComputerChoice());

    if (playerCount == 5){
        btn_scissors.removeEventListener('click', arguments.callee);
        winner.textContent = "YOU WON 5 GAMES";
    } else if (cpuCount == 5){
        winner.textContent = "YOU LOST, CPU WINS 5";
    }
});

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

    computerSelection = getComputerChoice(); /* calls the getComputerChoice function */ 

    if (playerSelection == "rock" && computerSelection == "scissors") {
        playerCount++; /**Everytime a condition is evaluated, playerCount, drawCount and cpuCount can have their values incremented */
        player_score.textContent = `PLAYER WINS: ${playerCount}`;
        return results.textContent = `YOU WIN! ${playerSelection.toUpperCase()} BEATS ${computerSelection.toUpperCase()} !`;
        
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerCount++;
        player_score.textContent = `PLAYER WINS: ${playerCount}`;
        return results.textContent = `YOU WIN! ${playerSelection.toUpperCase()} BEATS ${computerSelection.toUpperCase()} !`;
        
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerCount++;
        player_score.textContent = `PLAYER WINS: ${playerCount}`;
        return results.textContent = `YOU WIN! ${playerSelection.toUpperCase()} BEATS ${computerSelection.toUpperCase()} !`;
         
    } else if (playerSelection == computerSelection) {
        playerCount++;
        cpuCount++;
        player_score.textContent = `PLAYER WINS: ${playerCount}`;
        cpu_score.textContent = `CPU WINS: ${cpuCount}`;
        return results.textContent = `IT'S A TIE ${playerSelection.toUpperCase()} CANNOT BEAT ${computerSelection.toUpperCase()} !`;
    
    } else {
        cpuCount++;
        cpu_score.textContent = `CPU WINS: ${cpuCount}`;
        return results.textContent = `You lose!! ${computerSelection.toUpperCase()} BEATS ${playerSelection.toUpperCase()}`;
    }
}
