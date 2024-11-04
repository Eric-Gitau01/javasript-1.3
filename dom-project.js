function subscribe() {
    const buttonEl = document.getElementById('subscribe-btn')
    if (buttonEl.innerText === 'Subscribe') {
        buttonEl.innerHTML = 'Subscribed';
        buttonEl.classList.add('is-subscribed');
    } else {
        buttonEl.innerHTML = 'Subscribe';
        buttonEl.classList.remove('is-subscribed');
    }
}
////////////////////////////////////////////////////////////////

function handleCostKeydown() {
    if (event.key === 'Enter') {
        calculateTotal()
    }
}
function calculateTotal() {
    const inputEl = document.querySelector('.js-cost')
    let cost = Number(inputEl.value)

    if (cost < 40) {
        cost = cost + 40
    }

 

    document.querySelector('.js-total-cost').innerHTML = `$${cost}`
}

