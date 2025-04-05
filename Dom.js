var variable = 1000;
{
  var variable = 2000;
}
let variable1 = variable;

{
  let variable = 3000; /*let is not accessible outside the block scope*/
}

console.log(variable1);

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

