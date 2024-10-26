// const product = {
//     nameP : 'socks',
//     price: 1090
// };

// console.log(product);
// console.log(product.nameP);
// console.log(product.price);

// product.nameP = 'cotton socks';
// console.log(product.nameP);

// product.newProperty = true;
// console.log(typeof product);

// delete product.newProperty
// console.log(product)

const product2 = {
    name: 'shirts',
    'delivery-time' : '1 day',
    rating: {
        stars: 4.5,
        count: 87
    },
    fun: function function1 () {
        console.log('I am a function inside the object');
    }
}
console.log(product2.name);

console.log(product2['name']);
console.log(product2['delivery-time']);
console.log(product2['rating'].stars);
console.log(product2.rating.count)
product2.fun();
console.log(typeof console);

console.log(JSON.stringify(product2));

const jsonString = JSON.stringify(product2);
console.log(JSON.parse(jsonString))