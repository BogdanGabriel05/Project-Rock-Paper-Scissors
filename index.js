// Computer's choice code
function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    if (randomNumber === 1) {
        return "Rock";
    } else if (randomNumber === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Human's choice code
function getHumanChoice() {
    let humanPick = prompt("Enter your choice (Rock, Paper, or Scissors):");

    // Make the user input case-sensitive
    let firstLetter = humanPick.slice(0, 1).toUpperCase();
    let restOfWord = humanPick.slice(1).toLowerCase();
    let wholeWord = firstLetter + restOfWord;

    // Validate input
    if (wholeWord === "Rock" || wholeWord === "Paper" || wholeWord === "Scissors") {
        return wholeWord;
    } else {
        console.log("Invalid choice, defaulting to 'Rock'.");
        return "Rock"; // Default value if invalid input
    }
}

// Score variables
let humanScore = 0;
let computerScore = 0;
let ties = 0;

// Game round function
function playRound(humanChoice, computerChoice) {
    console.log(`Human chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        ties++;
        console.log("It's a tie!");
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock")
    ) {
        humanScore++;
        console.log(`${humanChoice} beats ${computerChoice}, You Win!`);
    } else {
        computerScore++;
        console.log(`${computerChoice} beats ${humanChoice}, You Lose!`);
    }
}

// Game loop (Best of 5 rounds)
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("Final Scores:");
    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);
    console.log("Ties: " + ties);

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry, the computer won the game.");
    } else {
        console.log("It's a tie overall!");
    }
}

// Start the game
playGame();

































// if (humanSelection === "Rock" && computerSelection === "Scissors") {
//     console.log("You lose! Rock beats scissors") 
// } else if (computerSelection === "Rock" && humanSelection === "Scissors") {
//     console.log("You lose! Rock beats scissors.")
// } else if (humanSelection === "Paper" && computerSelection === "Rock") {
//     console.log("You lose! Paper beats rock.") 
// } else if (computerSelection === "Paper" && humanSelection === "Rock") {
//     console.log("You lose! Paper beats rock.")
// } else if (humanSelection === "Scissors" && computerSelection === "Paper") {
//     console.log("You lose! Scissors beats paper.")
// } else if(computerSelection === "Scissors" && humanSelection === "Paper") {
//     console.log("You lose! Scissors beats paper.")
