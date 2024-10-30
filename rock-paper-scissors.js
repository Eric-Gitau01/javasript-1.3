// Try to get the saved score from local storage (browser memory), or set it to zero if there isn't one yet.
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};
updateScoreEl();

// Function that runs when the player chooses "rock".
function rock() {
    playGame('rock'); // Start the game with "rock" as the player’s choice.
}

// Function that runs when the player chooses "paper".
function paper() {
    playGame('paper'); // Start the game with "paper" as the player’s choice.
}

// Function that runs when the player chooses "scissors".
function scissors() {
    playGame('scissors'); // Start the game with "scissors" as the player’s choice.
}

// Function to reset the game score back to zero.
function resetScore() {
    score.wins = 0;      // Set wins to zero.
    score.losses = 0;    // Set losses to zero.
    score.ties = 0;      // Set ties to zero.
    localStorage.removeItem('score'); // Remove saved score from browser memory.
    updateScoreEl(); // Update the score on the webpage.

    // Show a message on the webpage to confirm the score was reset.
    document.getElementById('result-el').textContent = 'You have successfully reset the score';
}

// Main function to play the game. It takes the player's move (rock, paper, or scissors) as input.
function playGame(playerMove) {
    let result = ''; // Variable to store the result (win, lose, or tie).
    const computerMove = pickComputerMove(); // Get the computer's random move.

    // Check what the player chose, then determine the result based on the computer’s move.
    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'tie'; // Both chose rock, it's a tie.
        } else if (computerMove === 'paper') {
            result = 'lose'; // Computer chose paper, player loses.
        } else if (computerMove === 'scissors') {
            result = 'win'; // Computer chose scissors, player wins.
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'win'; // Computer chose rock, player wins.
        } else if (computerMove === 'paper') {
            result = 'tie'; // Both chose paper, it's a tie.
        } else if (computerMove === 'scissors') {
            result = 'lose'; // Computer chose scissors, player loses.
        }
    } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'lose'; // Computer chose rock, player loses.
        } else if (computerMove === 'paper') {
            result = 'win'; // Computer chose paper, player wins.
        } else if (computerMove === 'scissors') {
            result = 'tie'; // Both chose scissors, it's a tie.
        }
    }

    // Update the score based on whether the player won, lost, or tied.
    if (result === 'win') {
        score.wins++;
    } else if (result === 'lose') {
        score.losses++;
    } else if (result === 'tie') {
        score.ties++;
    }

    // Save the updated score in browser memory for future use.
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreEl();
    
    // Show the result of the game and updated score on the webpage.
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-move').innerHTML = `Computer chose ${computerMove}, you chose ${playerMove}. Result: ${result}
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
} 

function updateScoreEl() {
    document.getElementById('result-el').innerHTML = `Wins ${score.wins} Losses ${score.losses} Ties ${score.ties}`;
}

// Function to randomly choose a move for the computer.
function pickComputerMove() {
    const randomNumber = Math.random(); // Generate a random number between 0 and 1.
    let computerMove = ''; // Variable to store computer's move.

    // Choose rock, paper, or scissors based on the random number.
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove; // Return the computer's choice.
}
