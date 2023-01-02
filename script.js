// Global variables for the score 
let yourScore=0;
let computerScore=0;
let currentScore;

// The player presses the reset to get a new answer for computerSelection and playerAnswer
const computerArray = ['rock','paper','scissors']
let computerSelection = computerArray[Math.floor(Math.random()*computerArray.length)];
let computerAnswer = computerSelection;
const reset = document.getElementById('reset').addEventListener('click', () => {
    playerAnswer = undefined;
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

const paraOne = document.getElementById('para-one');
const paraTwo = document.getElementById('para-two');
const scoreAnswerOne = document.getElementById('para-one-answer');
const scoreAnswerTwo = document.getElementById('para-two-answer');
const checkAnswer = document.getElementById('Winner')
const scoreBoard = document.getElementById('score');


function checkWinner(yourScore,computerScore){
if(yourScore == 5 ) {
    checkAnswer.innerText = 'You won the game!' 
    scoreBoard.removeChild(paraOne);
    scoreBoard.removeChild(paraTwo)
    scoreBoard.appendChild(checkAnswer);
} else if(computerScore == 5 ) {
    checkAnswer.innerText = "You lost! Computer Won\n \t"
    scoreBoard.removeChild(paraOne);
    scoreBoard.removeChild(paraTwo)
    scoreBoard.appendChild(checkAnswer);
}
}

// Player presses on the play game button to initiated the game
const playGame = document.getElementById('play-game').addEventListener('click',() => {
    currentScore = playRound(playerAnswer,computerAnswer);
    if(currentScore == "You Win") {
        yourScore += 1;
    } else if (currentScore == "You Lost") {
        computerScore +=1;
    }

    scoreAnswerOne.innerText= `${computerScore}`;
    scoreAnswerTwo.innerText = `${yourScore}`
    paraOne.appendChild(scoreAnswerOne);
    paraTwo.appendChild(scoreAnswerTwo);

    checkWinner(yourScore,computerScore);
})

