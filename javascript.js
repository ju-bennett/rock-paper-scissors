console.log ("Hello World");


// Create a new function named getComputerChoice
    // Create a variable named randomNumber and set it to a random number between 0 and 1
        // If the number is less than 1/3, return "rock"
        // If the number is greater than or equal to 1/3 but less than 2/3, return "paper"
        // If the number is greater than or equal to 2/3, return "scissors"

function getComputerChoice (){ 
    let randomNumber = Math.random();
    if (randomNumber < 1/3){
        return "rock";
    }
    if (randomNumber < 2/3){
        return "paper";
    }
    else {
        return "scissors";
    }
}
console.log(getComputerChoice());
