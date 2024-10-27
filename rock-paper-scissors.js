function rock () {
    playGame('rock');
}

function paper () {
    playGame('paper');
}

function scissors () {
    playGame('scissors');
}

function playGame (playerMove) {
    let result = '';
    const computerMove = pickComputerMove () ;

    if ( playerMove === 'rock') {
        if ( computerMove === 'rock') {
            result = 'tie'
        } else if ( computerMove === 'paper') {
            result = 'win'
        } else if ( computerMove === 'scissors') {
            result = 'lose'
        }
    } else if ( playerMove === 'paper') {
        if ( computerMove === 'rock') {
            result = 'lose'
        } else if ( computerMove === 'paper') {
            result = 'tie'
        } else if ( computerMove === 'scissors') {
            result = 'win'
        }
    } else if ( playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'win'
        } else if (computerMove === 'paper') {
            result = 'lose'
        } else if (computerMove === 'scissors') {
            result = 'tie'
        }
    }
    
    document.getElementById('result-el').textContent = `Computer chose ${computerMove}, you chose ${playerMove}. Result: ${result}`;
}  

function pickComputerMove () {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 3 / 3) {
        computerMove = 'scissors';
    }

    return computerMove;
}