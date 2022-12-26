// Global variables for the score 
let yourScore=0;
let alienScore=0;
let currentScore;

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

// Function to find out who wins one game
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
        return "You Win";
    } else if(playerSelection == 3 && computerSelection == 1) {
        return "You Lost";
    }

   if(playerSelection === computerSelection) {
    return "Tie";
   } else if(playerSelection > computerSelection) {
    return "You Win";
   } else if(playerSelection < computerSelection) {
    return "You Lost";
   }
}


// So far the function asks the user for an input and generates an answer each loop for the computer
function game(){
    // GUI, making it better for user
    alert("Welcome to RPS, you will be playing against the Alien.\nFirst to 5 wins");

    for(let i = 0;i<100;i++) {
        let playerSelection = prompt("Choose your weapon: Rock,Paper or Scissors");
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = getComputerChoice();
        console.log("The Alien chose "+ computerSelection);
        currentScore = playRound(playerSelection,computerSelection);

        if(currentScore == "You Win") {
            yourScore += 1;
        } else if (currentScore == "You Lost") {
            alienScore +=1;
        }
        console.log("Your score is "+yourScore);
        console.log("The Alien score is "+alienScore);

        if(yourScore === 5 || alienScore === 5)
        break;
    }

    // Alerting the player they have won or lost
    if(yourScore == 5) {
        alert("You won the game! Earth is saved for now")
    } else if (alienScore == 5) {
        alert("You lost! Go and hide the Aliens are coming!")
    }
}


// Calling on the function to start the game
game();
