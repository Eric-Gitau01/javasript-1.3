// const age = 15;
// if (age >= 16) {
//     console.log('you can drive')
// } else if (age >= 14){
//     console.log('almost their')
// } else {
//     console.log('not yet')
// }

// console.log(0.2 >= 0 && 0.2 < 1 / 3);

// console.log( true || false ); // the or operator

// console.log( true && false ); // the and operator

// console.log( !true) // the not operator


if ('') {
    console.log('truthy')
}

const cartQuantity = '';

if (cartQuantity) {
    console.log('cart is not empty')
}

console.log('text' / 3);
let value
console.log(value);

//short cut for if statement
// Ternary Operators
true ? 'truthy' : 'falsy'

let age = 16

const result = (age >= 30) ? 'you can drive' : 'you cannot drive'

console.log(result)

const result1 = (age === 16 )&& 'you can drive'
console.log(result1)

const currency = undefined || 'USD'

console.log(currency)

const hour = 12;
const name = 'Eric'

if (hour < 6 && hour > 12) {
    console.log(`Good morning ${name}`)
} else if (hour < 12 && hour > 17) {
    console.log(`Good afternoon ${name}`)
} else {
    console.log(`Good evening ${name}`)
}

const ageP = 65;
const isHoliday = false;

if (ageP === 6 || ageP === 65 && !isHoliday) {
    console.log('Eligible for senior citizen discount')
} else {
    console.log('Not eligible for senior citizen discount')
}







