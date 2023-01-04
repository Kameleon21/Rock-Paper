const paraOne = document.getElementById('para-one');
const paraTwo = document.getElementById('para-two');
const scoreAnswerOne = document.getElementById('para-one-answer');
const scoreAnswerTwo = document.getElementById('para-two-answer');
const checkAnswer = document.getElementById('Winner')
const scoreBoard = document.getElementById('score');
const maindiv = document.getElementById('para');
const result = document.getElementById('current-result');
const head = document.getElementById('header');
const topPara = document.getElementById('top-para');
const rock = document.getElementById('rock')
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

// Global variables for the score 
let yourScore=0;
let computerScore=0;
let currentScore;
let playerAnswer;

// adds up the scores each round and displays he result for that specific rounds
function addScore(currentScore) {
    if(currentScore === "You Win") {
        yourScore ++;
        result.textContent = `This round you won.`;
        scoreBoard.appendChild(result);
    } else if (currentScore === "You Lost") {
        computerScore ++;
        result.textContent = `This round you lost. `;
        scoreBoard.appendChild(result);
    } else if(currentScore ==='Tie') {
        result.textContent = `This round was a Tie`
        scoreBoard.appendChild(result);
    }
}

// checks for winner and deletes nodes and leaves only the result
function checkWinner(yourScore,computerScore){
    if(yourScore == 5 ) {
        checkAnswer.innerText = 'You won the game! \n\n\n If you want to play again, refresh this page.' 
        scoreBoard.removeChild(maindiv);
        scoreBoard.removeChild(checkAnswer);
        scoreBoard.removeChild(result);
        scoreBoard.appendChild(checkAnswer);
    } else if(computerScore == 5 ) {
        checkAnswer.innerText = "You lost! Computer Won \n\n\n If you want to play again, refresh this page."
        scoreBoard.removeChild(maindiv);
        scoreBoard.removeChild(checkAnswer);
        scoreBoard.removeChild(result);
        scoreBoard.appendChild(checkAnswer);
    }
    }

    // Two values passed through and go through the playRound function 
function playRound(playerAnswer, computerAnswer) {
    if(playerAnswer == "Rock") {
        playerAnswer = 1;
    } else if(playerAnswer == "Paper") {
        playerAnswer = 2;
    } else if(playerAnswer == "Scissors") {
        playerAnswer = 3;
    }

    if(computerAnswer == "Rock") {
        computerAnswer = 1;
    } else if(computerAnswer == "Paper") {
        computerAnswer = 2;
    } else if(computerAnswer == "Scissors") {
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

rock.addEventListener('click', () => {
    playerAnswer = 'Rock';
    currentScore = playRound(playerAnswer,computerAnswer());
    addScore(currentScore);
    // adds and appends the scores for each round
    scoreAnswerOne.textContent= `${computerScore}`;
    scoreAnswerTwo.textContent = `${yourScore}`
    paraOne.appendChild(scoreAnswerOne);
    paraTwo.appendChild(scoreAnswerTwo);
    checkWinner(yourScore,computerScore);
   
});

paper.addEventListener('click',() => {
    playerAnswer = 'Paper';
    currentScore = playRound(playerAnswer,computerAnswer());
    addScore(currentScore);
    // adds and appends the scores for each round
    scoreAnswerOne.textContent= `${computerScore}`;
    scoreAnswerTwo.textContent = `${yourScore}`
    paraOne.appendChild(scoreAnswerOne);
    paraTwo.appendChild(scoreAnswerTwo);
    checkWinner(yourScore,computerScore);
})

scissors.addEventListener('click',() => {
    playerAnswer = 'Scissors';
    currentScore = playRound(playerAnswer,computerAnswer());
    addScore(currentScore);
    // adds and appends the scores for each round
    scoreAnswerOne.textContent= `${computerScore}`;
    scoreAnswerTwo.textContent = `${yourScore}`
    paraOne.appendChild(scoreAnswerOne);
    paraTwo.appendChild(scoreAnswerTwo);
    checkWinner(yourScore,computerScore);
})

// Random answer generated each time for the computer when the function runs
const computerArray = ['Rock','Paper','Scissors']
function computerAnswer() {
   return computerArray[Math.floor(Math.random()*computerArray.length)];
};
// computerAnswer() = computerAnswer();