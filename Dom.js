// var variable = 1000;
// {
//   var variable = 2000;
// }
// let variable1 = variable;

// {
//   let variable = 3000; /*let is not accessible outside the block scope*/
// }

// console.log(variable1);

// Function CURRYING inn js -refres to the multiple aregument are being inistliazed in the sequnce of funtion

// function curredd(a){
//     return function(b){
//         return a+b;
//     }
// }

// const add=curredd(4);
// console.log(add(3));

// Lexical scope-is also known as static scope where inner function have access to variable decalred in thier outer part(parent)function

// function outerFunction() {
//   let outerVariable = "I am outside!";

//   function innerFunction() {
//     console.log(outerVariable); // Accessing the outer variable
//   }

//   innerFunction();
// }

// outerFunction(); // Output: I am outside!

// function createcounter() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }
// const counter = createcounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// console.log(
//   "10" + 100 + 10
// ); /* it fisrt consider it string so full it consider string 1010010*/

// console.log(
//   10 + 100 + "10"
// ); /* it consider first number then all consider number*/

// console.log(100);

// setTimeout(() => {
//   console.log(200);
// }, 3000);

// console.log(400);


// console.log("2" - 2); /*0*/
// console.log(2 - "2"); /*0*/


// compare an array with an element in JavaScript to check if that element exists 

// using in built includes() function

// const arr = [1, 2, 3, 4, 5];
// const element = 4;
// const found = arr.includes(element);
// console.log(found);


// const arr = [1, 2, 3, 4, 5, 6];
// const element = 3;
// let found = false;
// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] == element) {
//     found = true;
//     break;
//   }
// }
// console.log(found);



// function addnum(){
//   console.log("add");
//   return 202+202;
// }
// function subtractnum(){
//   console.log("subtract");
//   return 200-200;
// }
// let a=(addnum(),subtractnum());
// console.log(a);


// EVENT in JS
// events are actions or occurrences that happen in the browser that the system tells you about so you can respond to them — like when a user clicks a button, submits a form, moves the mouse, presses a key, etc.

// const button = document.getElementById("btn");
// const output = document.getElementById('output');



// button.addEventListener("click", function () {
//   output.textContent = "BUtton in clicker";
// })

// mouse event- mouseOver,mouseOut,moueseMove etc;
// keyboard event - keydonw,keyup,keypress etc;

// Borwser object model (BOM)-BOM allwow js to intract with the browser window and its feature 
// feature-window,document,history,location etc;

// what is function expression and its declartion-
// A function expression is when you define a function and assign it to a variable.
// const add = function (a, b) {
//   console.log(a + b);
// }


// let numVal = 2;
// let a = !--numVal;
// let b = !--numVal;
// console.log(a, b);

// what is immediate invoked funtion Expression
// it function that is executed as soon as defined

(function () {
  const name = "Vishal";
  console.log(`Hello, ${name}`);
})();

// Output: Hello, Vishal