// function sum(a, b) {
//     return a + b;
// }
// let ans2 = sum(2, 2);
// console.log(ans2);



// syncronous code

// function sum(n){
//     let ans=0;
//     for(let i=1;i<=n;i++){
//         ans=ans+i;
//     }
//     return ans;
// }
// const ans= sum(100);
// console.log(ans);
// let ann2=sum(10);
// console.log(ans2);



// function sum(n){
//     return n*(n+1);
// }
// let ans=sum(100);
// console.log(ans);


// let ans=0;
// for(let i=0;i<=10000;i++){
//     ans=ans+i;
// }
// console.log(ans);
// cpu bound example


// const fs=require("fs");

// function afterfileread(err,contents){
//     console.log(contents);
// }
// fs.readFile("a.txt","utf-8",afterfileread);



// setTimeout
// setTimeout in another async function which is used to execute code after some times



// function run(){
//     console.log("vishal is here");
// }
// setTimeout(run,5000);
// console.log("i will run imedailtely");


// the first run is i will run immedailety
// then run vishal is here after 5 sec



// async functiona and setTimeout same program with mix concept

// function timeout(){
//     console.log("vishal is running for president");

// }
// console.log("hii javascript");

// setTimeout(timeout,4000);

// console.log("somehting is here");

// let c=0;
// for(let i=0;i<=10000000000;i++){
//     c=c+1;
// }
// console.log("expensive operations");



// call stack data structure where it keep track the function call of the program it operate of LIFO
// last in first out

// function first(){
//     console.log("first");
// }
// function second(){
//     first();
//     console.log("second");
// }
// second();




// function setTimeoutsync(timeout) {
//     let starttime = new Date();
//     while (true) {
//         let currenttime = new Date();
//         if (currenttime.getTime() - starttime.getTime() > timeout) {
//             break;
//         }
//     }
// }


// setTimeoutsync(3000);
// console.log("vishal is here ");


// function fn(){
//     console.log("after timout");

// }
// setTimeout(fn,2000);

// let c=0;
// function increase(){
//     c++;
// }

// for(let i=0;i<10000000;i++){
//     c++;
// }
// for(let i=0;i<1000000;i++){
//     c++;
// }
// console.log("hellow");



// myfun();
// var myfun=function(){
//     console.log("i am first");
// }
// myfun();

// function myfun(){
//     console.log("second first");
// }

// myfun();
 
