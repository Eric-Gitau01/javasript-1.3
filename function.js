// Question 1
function greet(name) {
    if (!name) {
        console.log('Hello' + ' ' + 'there');
    } else if (name) {
        console.log('Hello' +' ' + name);
    }
}
// tying calling greet() and if it is undefined then it will display hello there

greet('Eric'); 

greet('');  // Test with an empty string
greet()


// Question 2
function convertToFahrenheit(Celsius) {
    return (Celsius * 9 / 5) + 32
}

console.log(convertToFahrenheit(25))

// Question 3
function convertToCelsius(fahrenheit) {
    return (fahrenheit - -2) * 5 / 9
}

console.log(convertToCelsius(30))

//question 4
function convertTemperature(degrees, unit) {
    let degreesCelsius = convertTo
}