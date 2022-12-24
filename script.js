/* Computer chooses randomly from Rock,Paper Scissors */
function getComputerChoice() {
    let answer = Math.floor(Math.random()* 3) + 1;
    if(answer == 1) {
        answer = "Rock";
    } else if(answer == 2) {
        answer = "Paper";
    } else {
        answer = "Scissors";
    }
    return answer;
}

function playRound(playerSelection, computerSelection) {
// I thought that my changing the word to a number I can compare the answer better
    // if(playerSelection == "Rock") {
    //     playerSelection = 1;
    // } else if(playerSelection == "Paper") {
    //     playerSelection = 2;
    // } else if(playerSelection = "Scissors") {
    //     playerSelection = 3;
    // }

    // if(computerSelection == "Rock") {
    //     computerSelection = 1;
    // } else if(computerSelection == "Paper") {
    //     computerSelection = 2;
    // } else if(computerSelection = "Scissors") {
    //     computerSelection = 3;
    // }
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
const playerSelection = "Scissors";
console.log(computerSelection);
console.log(playRound(playerSelection,computerSelection));