
let playerSelection;
let computerSelection;
let playerCount = 0;
let cpuCount = 0;
let drawCount = 0;

const results = document.querySelector('.results');
const player_score = document.querySelector('.player_score');
const cpu_score = document.querySelector('.cpu_score');
const winner = document.querySelector('.winner');

let btns = document.querySelectorAll('button');

btns.forEach(function(item) {

    item.addEventListener('click', function(event) {
        results.textContent = '';
        playRound(event.target.className, getComputerChoice());
        
        if (playerCount == 5) {
            for (i = 1; i < btns.length; i++) {
                item.removeEventListener('click', arguments.callee);
            }
            winner.textContent = `YOU WON 5 GAMES!`;

        }else if (cpuCount == 5) {
            for (i = 1; i < btns.length; i++) {
                item.removeEventListener('click', arguments.callee);
            }
            winner.textContent = `YOU LOSE! CPU WINS 5`;
        }
    });
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
        return results.textContent = `IT'S A TIE!!`;
    
    } else {
        cpuCount++;
        cpu_score.textContent = `CPU WINS: ${cpuCount}`;
        return results.textContent = `You lose!! ${computerSelection.toUpperCase()} BEATS ${playerSelection.toUpperCase()}`;
    }
}
