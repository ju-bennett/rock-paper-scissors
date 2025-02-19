// Variables to track scores
let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");

// Function to get computer's choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to capitalize only the first letter of a sentence
function capitalizeSentence(sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

// Function to play a single round
function playRound(humanChoice) {
    if (humanScore === 5 || computerScore === 5) return; // Stop game if it's over

    let computerChoice = getComputerChoice();
    let resultMessage = "";

    if (humanChoice === computerChoice) {
        resultMessage = `it's a tie! You both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        resultMessage = `you win this round! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultMessage = `the computer wins this round! ${computerChoice} beats ${humanChoice}.`;
    }

    // Capitalize only the first letter of the sentence
    resultMessage = capitalizeSentence(resultMessage);

    updateResults(resultMessage);

    // Check if the game has ended
    if (humanScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

// Function to update results on the page
function updateResults(message) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <p>${message}</p>
        <p>Score: You - ${humanScore}, Computer - ${computerScore}</p>
    `;
}

// Function to announce the winner
function announceWinner() {
    const resultsDiv = document.getElementById("results");
    let winnerMessage = humanScore === 5 ? "Congratulations! You won the game! 🎉" 
                                         : "The computer wins the game! 🤖 Better luck next time!";
    resultsDiv.innerHTML += `<p><strong>${winnerMessage}</strong></p>`;

    // Disable all buttons after game ends
    buttons.forEach(button => button.disabled = true);

    createResetButton();
}

// Function to create a reset button
function createResetButton() {
    const resetButton = document.createElement("button");
    resetButton.textContent = "Play Again";
    resetButton.onclick = resetGame;
    document.body.appendChild(resetButton);
}

// Function to reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById("results").innerHTML = "<p>Game reset. Choose Rock, Paper, or Scissors to start again!</p>";
    
    // Re-enable buttons
    buttons.forEach(button => button.disabled = false);

    // Remove the reset button
    document.querySelector("button:last-of-type").remove();
}