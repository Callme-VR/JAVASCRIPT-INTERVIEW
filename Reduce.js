// The reduce()
// function in JavaScript is a powerful array method used to reduce an array to a single value by executing a callback
// function on each element of the array.

// accumulator-store vaalue of callback
// currentvalue-cureent element in loop
// initialvalue-starting value of accumulator
// Calculating totals(sum, product, etc.)
// Building objects from arrays
// Transforming data in a custom way
// Flattening or chaining arrays

// const nested = [
//     [1, 2],
//     [3, 4],
//     [5]
// ];

// const flat = nested.reduce((acc, curr) => acc.concat(curr), []);

// console.log(flat); // [1, 2, 3, 4, 5]


// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// const count = fruits.reduce((acc, fruit) => {
//     acc[fruit] = (acc[fruit] || 0) + 1;
//     return acc;
// }, {});

// console.log(count);

// { apple: 3, banana: 2, orange: 1 }



// const number = [12, 10, 20, 30];
// const total = number.reduce((sum, num) => sum + num, 0);
// console.log(total);


// Map ()-transform Every Element 
// create a new array by tranforming every element in original array

// const number = [1, 2, 3, 4];
// const doubled = number.map(num => num * 2);

// console.log(doubled); // [2, 4, 6, 8]

// const fruits = ['apple', 'banana', 'cherry'];
// const htmlList = fruits.map(fruit => `<li>${fruit}</li>`);

// console.log(htmlList);
// // ["<li>apple</li>", "<li>banana</li>", "<li>cherry</li>"]

// filter ()-keep only matching items
// create a new array containng only element that pass condition return true

// const number = [1, 2, 4, 5];
// const even = number.filter(num => num % 2 === 0);
// console.log(even);

const users = [{
        name: "Vishal",
        active: true
    },
    {
        name: "Arjun",
        active: false
    },
    {
        name: "Meena",
        active: true
    },
];

const activeUsers = users.filter(user => user.active);

console.log(activeUsers);
// [{ name: "Vishal", active: true }, { name: "Meena", active: true }]