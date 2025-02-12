// Function to get computer's choice
function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 1/3) {
        return "rock";
    } else if (randomNumber < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function to get human's choice
function getHumanChoice() {
    let humanChoice = prompt("Do you choose rock, paper, or scissors?").toLowerCase();
    while (!["rock", "paper", "scissors"].includes(humanChoice)) {
        humanChoice = prompt("Invalid choice! Please choose rock, paper, or scissors:").toLowerCase();
    }
    return humanChoice;
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}.`);
        return "tie";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
        return "human";
    } else {
        console.log(`The computer wins this round! ${computerChoice} beats ${humanChoice}.`);
        return "computer";
    }
}

// Function to play the game
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        console.log(`\nRound ${round}`);
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        let roundResult = playRound(humanSelection, computerSelection);

        if (roundResult === "human") {
            humanScore++;
        } else if (roundResult === "computer") {
            computerScore++;
        }

        console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    // Determine the final winner
    console.log("\nFinal Results:");
    if (humanScore > computerScore) {
        console.log("You win the game! 🎉");
    } else if (computerScore > humanScore) {
        console.log("The computer wins the game! 🤖");
    } else {
        console.log("It's a tie game! 😐");
    }
}

// Start the game
playGame();


