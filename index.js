// Computer's choice code
function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    if (randomNumber === 1) {
        return "Rock"
    } else if (randomNumber === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}
getComputerChoice();

// Human's choice code
function getHumanChoice() {
    let humanChoice = prompt("Enter your choice!")
    return humanChoice;
}
getHumanChoice();

// Score variables
const humanScore = 0;
const computerScore = 0;


