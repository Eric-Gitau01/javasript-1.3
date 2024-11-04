// function function1() {
//     console.log('hello world');
//     console.log(2 + 2)
// }

// function1();

// function calculateTax (cost, taxPercent) {
//     console.log(cost * taxPercent);
// }

// calculateTax(2000, 0.2);
// calculateTax(5000); 

// function greet(name) {
//     if (!name) {
//         console.log('hi, there')
//     } else {
//         console.log(`hi, ${name}`)
//     }
// }

// greet('John');
// greet('simon')
// greet()

function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32
}



function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}


function convertTemperature(degrees, unit) {
    if (unit === 'C') {
        const result = convertToFahrenheit(degrees);
        return `${result}F`
    } else if (unit === 'F') {
        const result = convertToCelsius(degrees);
        return  `${result}C`;
    }
}

console.log(convertTemperature(25, 'C'));
let resultEl = '';

function convertLength(length, from, to) {
    if (from === 'km' && to === 'miles') {
        resultEl = `${length / 1.6} miles`;
        return resultEl;
    } else if (from === 'miles' && to === 'km') {
        resultEl = `${length * 1.6} km`;
        return resultEl;
    } else if (from === to) {
        return `${length} ${to}`;
    } else if (from === 'ft' && to === 'km') {
        resultEl = `${length / 3281} km`;
        return resultEl;
    } else if (from === 'km' && to === 'ft') {
        resultEl = `${length * 3281} ft`;
        return resultEl;
    } else if (from === 'ft' && to === 'miles') {
        resultEl = `${length / 5280} miles`;
        return resultEl;
    } else if (from === 'miles' && to === 'ft') {
        resultEl = `${length * 5280} ft`;
        return resultEl;
    } else {
        return 'Invalid unit conversion';
    }
}

console.log(convertLength(5, 'miles', 'km'));  // 8 km
console.log(convertLength(5, 'miles', 'ft'));  // 26400 ft
console.log(convertLength(5, 'lb', 'ft'));     // 16405 ft
