let resultEl = document.getElementById('result-el')

function flipCoin() {
    const randomNumber =  Math.random() 

    result = '';

    if (randomNumber >= 0 && randomNumber < 0.5) {
        result = 'head'
    } else if ( randomNumber >= 0.5 && randomNumber < 1) {
        result = 'tails'
    }

    resultEl.textContent = `you result is ${result}`
}