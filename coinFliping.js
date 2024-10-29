// Variable to store the user's guess
let userGuess = '';

// Function to store the user's guess as "head" or "tails"
function head() {
    userGuess = 'head'; // Set the guess to "head"
    document.getElementById('result-el').textContent = "You guessed Head! Now click 'Flip Coin' to see the result.";
}

function tails() {
    userGuess = 'tails'; // Set the guess to "tails"
    document.getElementById('result-el').textContent = "You guessed Tails! Now click 'Flip Coin' to see the result.";
}

// Function to simulate flipping the coin and check the user's guess
function flipCoin() {
    if (userGuess === '') {
        // If the user hasn't made a guess, prompt them to do so
        document.getElementById('result-el').textContent = "Please make a guess first!";
        return; // Exit the function until a guess is made
    }

    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
    let result = '';

    // Determine if the coin lands on "head" or "tails" based on random number
    if (randomNumber < 0.5) {
        result = 'head';
    } else {
        result = 'tails';
    }

    // Check if the user's guess matches the flip result
    if (userGuess === result) {
        document.getElementById('result-el').textContent = `The coin landed on ${result}. You are correct!`;
    } else {
        document.getElementById('result-el').textContent = `The coin landed on ${result}. You are wrong!`;
    }

    // Reset userGuess for the next round
    userGuess = '';
}
