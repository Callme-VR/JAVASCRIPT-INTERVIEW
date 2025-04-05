// promisified version and promise 

// function setTimeoutPromisified(ms) {
//     let p = new Promise(resolve => setTimeout(resolve, ms));
//     return p;
// }

// function callback() {
//     console.log("after 3 second logged");
// }
// setTimeoutPromisified(3000).then(callback);


// function waitfor3sec(resolve){
//     setTimeout(resolve,3000);
// }
// function main(){
//     console.log("logged after 3 sec")
// }
// waitfor3sec(main);



// when resolve arguemnt is called then it called main() function



// function waitfor5sec(resolve) {
//     setTimeout(resolve, 4000);
// }

// function setTimeoutPromisified() {
//     return new Promise(waitfor5sec);
// }

// function main() {
//     console.log("main called after 5 sec");
// }
// setTimeoutPromisified().then(main);


// resolve is also  a function 


// function random(resolve) {
//     setTimeout(resolve, 3000);

// }
// let p = new Promise(random); /*supposed to retun u somthing eventually */

// // using eventual value retruned by product

// function callback() {
//     console.log("promise success");
// }

// p.then(callback);

// class Rectangle {
//     constructor() {

//     }
//     area() {

//     }
// }
// const rect = new Rectangle(1, 2);
// const rect2 = new Rectangle(2, 3);
// console.log(rect.area());




// ReadFile promosified version

// const fs=require('fs');
// function ReadTheFile(sendTheFileHere){
//     fs.readFile("a.txt","utf-8",function(err,data){
//         sendTheFileHere(data);
//     });
//     function readFile(filename){
//         return new promiseHooks(readFile)
//     }
// }
// const p=readFile();
// function callback(contents){
//     console.log(contents);
// }
// p.then(callback);



// function setTimeoutPromisified(time) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, time);
//     });
// }

// function callback() {
//     console.log("Time has passed");
// }

// const p = setTimeoutPromisified(5000);
// p.then(callback);



// cpu bounded function of promisified version



// function promisefn(resolve) {
//     let c = 0;
//     for (let i = 0; i < 100000; i++) {
//         c++;
//     }
//     resolve("hii there nothing");
// }

// let p = new Promise(promisefn);

// function callback() {
//     console.log("hello there");
// }
// p.then(callback);