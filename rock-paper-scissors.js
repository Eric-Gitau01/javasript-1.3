// Initialize score from localStorage or set to default if it doesn't exist
let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    losses: 0,
    ties: 0
};

// if (!score) {
//     score = {
//         win: 0,
//         losses: 0,
//         ties: 0
//     };
//     localStorage.setItem('score', JSON.stringify(score));
// }

// Function to start the game and determine the outcome
function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'rock') {
        if (computerMove === 'rock') result = 'draw';
        else if (computerMove === 'scissors') result = 'you win';
        else if (computerMove === 'paper') result = 'you lose';
    } 
    else if (playerMove === 'scissors') {
        if (computerMove === 'rock') result = 'you lose';
        else if (computerMove === 'scissors') result = 'draw';
        else if (computerMove === 'paper') result = 'you win';
    } 
    else if (playerMove === 'paper') {
        if (computerMove === 'rock') result = 'you win';
        else if (computerMove === 'scissors') result = 'you lose';
        else if (computerMove === 'paper') result = 'draw';
    }

    if (result === 'you win') {
        score.win += 1;
    } else if (result === 'you lose') {
        score.losses += 1;
    } else if (result === 'draw') {
        score.ties += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));

    alert(`You picked ${playerMove} and the computer picked ${computerMove}. Result: ${result}
    Wins: ${score.win}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

// Function to randomly pick the computer's move
function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMoves = '';

    if (randomNumber < 0.33) computerMoves = 'rock';
    else if (randomNumber < 0.66) computerMoves = 'scissors';
    else computerMoves = 'paper';

    return computerMoves;
}

// Function that runs when the player picks 'rock'
function rock() {
    playGame("rock");
}

// Function that runs when the player picks 'scissors'
function scissors() {
    playGame("scissors");
}

// Function that runs when the player picks 'paper'
function paper() {
    playGame("paper");
}

// Function to reset the score
function resetScore() {
    score = { win: 0, losses: 0, ties: 0 };
    localStorage.setItem('score', JSON.stringify(score));
    alert("Score reset successfully!");
}
