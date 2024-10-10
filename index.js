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

// function getHumanChoice() {
//     let humanPick = prompt("Enter your choice (Rock, Paper, or Scissors):");

//     // Make the user input case-sensitive
//     let firstLetter = humanPick.slice(0, 1).toUpperCase();
//     let restOfWord = humanPick.slice(1).toLowerCase();
//     let wholeWord = firstLetter + restOfWord;

//     // Validate input
//     if (wholeWord === "Rock" || wholeWord === "Paper" || wholeWord === "Scissors") {
//         return wholeWord;
//     } else {
//         console.log("Invalid choice, defaulting to 'Rock'.");
//         return "Rock"; // Default value if invalid input
//     }
// }


// Score variables
let humanScore = 0;
let computerScore = 0;
let ties = 0;

// Game round function

function playRound(humanChoice, computerChoice) {
    const resultDiv = document.getElementById("result");
    console.log("Human chose: " + humanChoice);
    console.log("Computer chose: " + computerChoice);

    if (humanChoice === computerChoice) {
        ties++;
        console.log("It's a tie!");
        resultDiv.textContent = "It's a tie!";
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock")
    ) {
        humanScore++;
        console.log(humanChoice + " beats " + computerChoice + ", You Win!")
        resultDiv.textContent = `${humanChoice} beats ${computerChoice}, You Win!`;
    } else {
        computerScore++;
        console.log(computerChoice + " beats " + humanChoice + ", You Lose!")
    }
    resultDiv.textContent = `${computerChoice} beats ${humanChoice}, You Lose!`;
    updateScore();
    checkWinner();
}

function updateScore() {
    const scoreDiv = document.getElementById("score");
    scoreDiv.textContent = `Score - Human: ${humanScore} | Computer: ${computerScore} | Ties: ${ties}`;
}

// Function to check if a player has won the game
function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
        const resultDiv = document.getElementById("result");
        if (humanScore === 5) {
            resultDiv.textContent = "Congratulations! You won the game!";
        } else {
            resultDiv.textContent = "Sorry, the computer won the game.";
        }
        resetGame();
    }
}
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    ties = 0;
    updateScore();
}

// Event listeners for buttons
document.getElementById("rock").addEventListener("click", () => playRound("Rock", getComputerChoice()));
document.getElementById("paper").addEventListener("click", () => playRound("Paper", getComputerChoice()));
document.getElementById("scissors").addEventListener("click", () => playRound("Scissors", getComputerChoice()));

// Initialize score display
updateScore();


// Game loop (Best of 5 rounds)
function playGame() {
    // logic that plays 5 games, i < 5;
    for (let i = 0; i < 1; i++) {          
        playRound(getHumanChoice(), getComputerChoice());  
    }
 
    console.log("Final Score:");
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
































