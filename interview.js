// template litrals- another way to create a string using Backticks ``
const name = "vishal";
const greeting = `hello ,${name}!`;
console.log(greeting);

// type of template litrals multilines,nesting template,expression,tagged template literals
// String interpolation

const a = 12,
    b = 34;
console.log(`sum of both number is ${a} and ${b} is ${a+b}`);

// optional chaining (?.)-is feature in js that allow you access deepley nested object
// it prevent from run time error and cleaner code.

// const person={
//     greet :()=>
//         "hello"
// }
// console.log(person?.greet?.());
// console.log(person?.saygoodbye?.());

// const user={
//     name:"vishal",
//     address:{
//         city:"bijnor",
//         country:"india"
//     }
// };
// console.log(user?.address?.city);
// console.log(user?.address?.country);
// console.log(user?.address?.email);


// feature of Es-6(ECMASCRIPT-2015)-it improved readiblity,perfomrance,developer exprenice

// 1-let and const
// 2-arrow function->
// shorter sytax fro function and automattically bind this from surrounding scope
const add = (a, b) => a + b;
console.log(add, (5, 3));

// 3-template litrals
// 4-spread and rest operator

// const arr1=[1,2,4];
// const arr2=[...arr1,5,6];
// console.log(arr2);

// 5-classes
// 6-promises aysncronous and async and awaits 
// 7-map and sets
// map-create a new array with transformed element and chaningn is possible in here 
// example
const number = [1, 2, 3, 4, 5];
const squarednumber = number.map(number => number * number);
console.log(squarednumber);

// for each 
// it does not return a new array just exectes a function on each element 
// give output in straight line format not return in array format

// const num=[1,2,3,4,5,6];
// num.forEach(num=>console.log(num*num));


// diffrence bewteen splice and slice method in js with exmpale
// slice->extract portion of array without modifying the original array
// splice->remove,add,replace and modifies the original Array

// const arr=[1,2,3,4,5];
// const newarr=arr.slice(1,4);
// console.log(newarr);
// console.log(arr);

// const arr=[1,2,3,4,5,6];
// const removed =arr.splice(1,2);
// console.log(removed);
// console.log(arr);

// how can we convert  obj into array in js

// Object.keys-it will return an pure array in string format

// const person = {
//     name: "vishal",
//     age: 23
// };
// const keysarray = Object.keys(person);
// console.log(keysarray);


// Object.values-it return array of values of an object

// const person2 = {
//     name: "vishalsingh",
//     city: "uttar pradesh"
// };
// const valuesget = Object.values(person2);
// console.log(valuesget);

// shift and unshift()method in js


// shift()-Remove the first element
// const numbers1 = [10, 20, 30, 40, 50];
// const firstelement = numbers1.shift();
// console.log(firstelement);
// console.log(numbers1);

// unshif()-add elements to biggning
// const number2 = [10, 20, 30];
// const addelement = number2.unshift(10);
// console.log(number2);
// console.log(addelement);

// Local storage and seesional stroage diffrences

// store local data with no expiration ,data remain until manully deleted;
// sessional Storage data stored temporarily when close broweser it automatticlay closed


// retrive a ch from string
// using bracket by index accessing[0]
// charAt() method- retrun ch at specific index
// slice mthod(index,index-1);-return substring of one character

let str = "vishal";
console.log(str.charAt(3));


// e = 0;
// console.log(e);
// it become the global implcite function

// temporal Dead zone is peroid bewteeen when a varibale is declred (using let and const)
// when it intialized during this time accessing variable it througha error 
// console.log(g); /* refrence error*/
// let g = 19; 
// console.log(g);