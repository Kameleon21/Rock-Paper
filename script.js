/* Computer chooses randomly from Rock,Paper Scissors */
function getComputerChoice() {
    let answer = Math.floor(Math.random()* 3) + 1;
    if(answer == 1) {
        answer = "rock";
    } else if(answer == 2) {
        answer = "paper";
    } else {
        answer = "scissors";
    }
    return answer;
}

function playRound(playerSelection, computerSelection) {
// I thought that my changing the word to a number I can compare the answer better
    if(playerSelection == "rock") {
        playerSelection = 1;
    } else if(playerSelection == "paper") {
        playerSelection = 2;
    } else if(playerSelection == "scissors") {
        playerSelection = 3;
    }

    if(computerSelection == "rock") {
        computerSelection = 1;
    } else if(computerSelection == "paper") {
        computerSelection = 2;
    } else if(computerSelection == "scissors") {
        computerSelection = 3;
    }

    if(playerSelection == 1 && computerSelection == 3 ) {
        return "You win";
    } else if(playerSelection == 3 && computerSelection == 1) {
        return "You Lost";
    }
    // debugger;

   if(playerSelection === computerSelection) {
    return "Tie";
   } else if(playerSelection > computerSelection) {
    return "You Win";
   } else if(playerSelection < computerSelection) {
    return "You Lost";
   }
}

const computerSelection = getComputerChoice();
// Getting player input from the user using GUI
let playerSelection = prompt("Choose your weapon: Rock , Paper or Scissors");
// Making player answer case insensitive 
playerSelection = playerSelection.toLowerCase();
console.log(computerSelection);
console.log(playRound(playerSelection,computerSelection));