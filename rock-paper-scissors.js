// Function to start the game and determine the outcome
function playGame(playerMove) {
    // Call the function to get the computer's move
    const computerMove = pickComputerMove();

    // Initialize an empty string to store the result of the game
    let result = '';

    // Check if the player chose 'rock'
    if (playerMove === 'rock') {
        // Determine the result based on the computer's move
        if (computerMove === 'rock') {
            result = 'draw';  // If the computer also picks 'rock', it's a draw
        } else if (computerMove === 'scissors') {
            result = 'you win';  // If the computer picks 'scissors', the player wins
        } else if (computerMove === 'paper') {
            result = 'you lose';  // If the computer picks 'paper', the player loses
        }
    } 
    // Check if the player chose 'scissors'
    else if (playerMove === 'scissors') {
        // Determine the result based on the computer's move
        if (computerMove === 'rock') {
            result = 'you lose';  // If the computer picks 'rock', the player loses
        } else if (computerMove === 'scissors') {
            result = 'draw';  // If the computer also picks 'scissors', it's a draw
        } else if (computerMove === 'paper') {
            result = 'you win';  // If the computer picks 'paper', the player wins
        }
    } 
    // Check if the player chose 'paper'
    else if (playerMove === 'paper') {
        // Determine the result based on the computer's move
        if (computerMove === 'rock') {
            result = 'you win';  // If the computer picks 'rock', the player wins
        } else if (computerMove === 'scissors') {
            result = 'you lose';  // If the computer picks 'scissors', the player loses
        } else if (computerMove === 'paper') {
            result = 'draw';  // If the computer also picks 'paper', it's a draw
        }
    }

    // Display the result using an alert
    alert(`You picked ${playerMove} and the computer picked ${computerMove}. Result: ${result}`);
}

// Function to randomly pick the computer's move
function pickComputerMove() {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();

    // Declare a variable to store the computer's move
    let computerMoves = '';

    // Assign computer's move based on the value of randomNumber
    if (randomNumber < 0.33) {
        computerMoves = 'rock';  // If random number is less than 0.33, computer picks 'rock'
    } else if (randomNumber < 0.66) {
        computerMoves = 'scissors';  // If random number is between 0.33 and 0.66, computer picks 'scissors'
    } else {
        computerMoves = 'paper';  // If random number is greater than or equal to 0.66, computer picks 'paper'
    }

    // Return the computer's move
    return computerMoves;
}

// Function that runs when the player picks 'rock'
function rock() {
    // Call the playGame function with the player's choice of 'rock'
    playGame("rock");
}

// Function that runs when the player picks 'scissors'
function scissors() {
    // Call the playGame function with the player's choice of 'scissors'
    playGame("scissors");
}

// Function that runs when the player picks 'paper'
function paper() {
    // Call the playGame function with the player's choice of 'paper'
    playGame("paper");
}
