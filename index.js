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

    if (humanChoice === "1") {
        return "Rock"
    } else if (humanChoice === "2") {
        return "Paper"
    } else {
        return "Scissors"
    }



}
getHumanChoice();

// Score variables
const humanScore = 0;
const computerScore = 0;

// Game round
function playRound(humanChoice, computerChoice) {



if (humanSelection === "Rock" && computerSelection === "Scissors") {
    console.log("You lose! Rock beats scissors") 
} else if (computerSelection === "Rock" && humanSelection === "Scissors") {
    console.log("You lose! Rock beats scissors.")
} else if (humanSelection === "Paper" && computerSelection === "Rock") {
    console.log("You lose! Paper beats rock.") 
} else if (computerSelection === "Paper" && humanSelection === "Rock") {
    console.log("You lose! Paper beats rock.")
} else if (humanSelection === "Scissors" && computerSelection === "Paper") {
    console.log("You lose! Scissors beats paper.")
} else if(computerSelection === "Scissors" && humanSelection === "Paper") {
    console.log("You lose! Scissors beats paper.")
}  



}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(); 

playRound(humanSelection, computerSelection);






























// Made the user input case sensitive
// let firstLetter = humanChoice.slice(0, 1).toUpperCase();
// let restOfWord = humanChoice.slice(1).toLowerCase();
// let wholeWord = firstLetter + restOfWord;
// return wholeWord;
