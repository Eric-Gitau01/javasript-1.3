// // const product = {
// //     name: 'socks',
// //     price: 1090
// // }
// // console.log(product)
// // console.log(product.name)
// // console.log(product.price)

// // product.name ='cotton socks'

// // console.log(product.name)
// // product.newProperty = true;
// // console.log(product);
// // product.age = 22;
// // console.log(product);

// // delete product.newProperty;
// // console.log(product);

// const product2 = {
//     name: 'shirt',
//     'delivery-time': '1 day',
//     rating: {
//         stars: 4.5,
//         count: 87
//     },
//     fun: function function1 () {
//         console.log('function inside un object')
//     }
// }

// console.log(product2.name);
// console.log(product2['delivery-time']);
// console.log(product2['rating']['stars']);

// product2.fun();
// console.log(typeof JSON.stringify(product2))

// const jsonString = JSON.stringify(product2);

// JSON.parse(jsonString)
// console.log(JSON.parse(jsonString));



console.log('hello'.length)
console.log('hello'.toUpperCase())

const object = {
    message : 'hello'
}

const object2 = object;

object.message = 'good job!'
console.log(object2)

const object4 = {
    message : 'good job!',
    price : 444
}

// const message = object4.message
const { message, price } = object4
console.log(message)
console.log(price)

const object5 = {
   // message : message
    // message,
    // method: function function1() {
    //     console.log('hello')
    // }
    method() {
        console.log('world')
    }
}

console.log(object5)
object5.method()

// question 1
const product = {
    name: 'basketball',
    price: 2095

}


product.price += 500
console.log(product.price)
