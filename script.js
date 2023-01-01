// Global variables for the score 
let yourScore=0;
let alienScore=0;
let currentScore;

// The player presses the reset to get a new answer for computerSelection and playerAnswer
let computerAnswer;
const reset = document.getElementById('reset').addEventListener('click', () => {
    playerAnswer = '';
    const computerArray = ['rock','paper','scissors']
    let computerSelection = computerArray[Math.floor(Math.random()*computerArray.length)];
    computerAnswer = computerSelection;
    console.log('Computer choose: '+computerAnswer);
})

// Player chooses and a value gets assigned to playerAnswer
let playerAnswer;
const img = document.querySelectorAll('img');
    img.forEach(img => {
        img.addEventListener('click', (e) => {
            if(e.target == rock) {
                playerAnswer = 'rock'
            } else if(e.target == paper) {
                playerAnswer = 'paper'
            } else {
                playerAnswer = 'scissors'
            }
            console.log('Player choose: '+playerAnswer);
            return playerAnswer;
        })
    });


// Two values passed through and go through the playRound function 
function playRound(playerAnswer, computerAnswer) {
    // I thought that my changing the word to a number I can compare the answer better
        if(playerAnswer == "rock") {
            playerAnswer = 1;
        } else if(playerAnswer == "paper") {
            playerAnswer = 2;
        } else if(playerAnswer == "scissors") {
            playerAnswer = 3;
        }
    
        if(computerAnswer == "rock") {
            computerAnswer = 1;
        } else if(computerAnswer == "paper") {
            computerAnswer = 2;
        } else if(computerAnswer == "scissors") {
            computerAnswer = 3;
        }
    
        if(playerAnswer == 1 && computerAnswer == 3 ) {
            return "You Win";
        } else if(playerAnswer == 3 && computerAnswer == 1) {
            return "You Lost";
        }
    
       if(playerAnswer === computerAnswer) {
        return  "Tie";
       } else if(playerAnswer > computerAnswer) {
        return "You Win";
       } else if(playerAnswer < computerAnswer) {
        return "You Lost";
       }
    }

// So far the function asks the user for an input and generates an answer each loop for the computer
function game(){
    // GUI, making it better for user
   




    // for(let i = 0;i<100;i++) {
    //     let playerAnswer() = prompt("Choose your weapon: Rock,Paper or Scissors");
    //     playerAnswer() = playerAnswer().toLowerCase();
    //     let answer1 = computerSelection;
    //     console.log("The Alien chose "+ answer1);
    //     currentScore = playRound(playerAnswer(),answer1);

    //     if(currentScore == "You Win") {
    //         yourScore += 1;
    //     } else if (currentScore == "You Lost") {
    //         alienScore +=1;
    //     }
    //     console.log("Your score is "+yourScore);
    //     console.log("The Alien score is "+alienScore);

    //     if(yourScore === 5 || alienScore === 5)
    //     break;
    // }
 

    // Alerting the player they have won or lost
    if(yourScore == 5) {
        alert("You won the game! Earth is saved for now")
    } else if (alienScore == 5) {
        alert("You lost! Go and hide the Aliens are coming!")
    }
}


// Player presses on the play game button to initiated the game
const playGame = document.getElementById('play-game').addEventListener('click',() => {
    console.log(playRound(playerAnswer,computerAnswer));
})
