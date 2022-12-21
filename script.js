/* Computer chooses randomly from Rock,Paper Scissors */
function getComputerChoice() {
    let answer = Math.floor(Math.random()* 3) + 1;
    if(answer == 1) {
        answer = "Rock";
    } else if(answer == 2) {
        answer = "Paper";
    } else {
        answer = "Scissors"
    }
    console.log(answer);
}

getComputerChoice();