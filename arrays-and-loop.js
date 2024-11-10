// const myArray = [10, 20, 30, 40, 50];
// // console.log(myArray[3]);
// // myArray[0] = 99;
// // console.log(myArray[0]);

// // console.log(myArray.length);

// // myArray.push(60);
// // console.log(myArray)
// // myArray.splice(0, 2);

// // console.log(myArray);

// let i = 1;

// while (i <= 5) {
//     console.log(i)
//     i ++
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// }

// let randomNumber = 0;

// while (randomNumber < 0.5) {
//     randomNumber = Math.random();
// }
// console.log(randomNumber)t

// const todoList = [
//     'make dinner',
//     'clean the house',
//     'buy groceries'
// ];

// for (let i = 0; i <= todoList.length; i++) {
//     const value = todoList[i]
//     console.log(value);
// }

const nums = [1, 2, 3];
let total = 0;

for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    total += num;
}

console.log(total);

const numD = [];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    numD.push(num * 2);
    
}

console.log(numD);