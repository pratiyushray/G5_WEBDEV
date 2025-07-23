// // // const { divOfTwo, xy } = require("./divOfTwo");
// // // const sumOfTwo = require("./sumOfTwo")

// // const {divOfTwo,subOfTwo,sumOfTwo} =  require("./calculate")

// // console.log("MODULE TUT")



// // // function subOfTwo(a,b){
// // //     console.log(a-b)   
// // //     //230 lines
// // //     //PAYMENT GATEWAY
// // //     return a/b;
// // // }



// // sumOfTwo(10,20);
// // divOfTwo(30,40);
// // console.log(xy);
// // subOfTwo(30,10)

// ////////////////////////


// //SYNCHRONOUS

// var a =2;
// var b =30;

// function call(){
//     console.log("CALL FUNCITON")
// }

// console.log(a);
// call();
// console.log(b);


// //ASYNCHRONOUS

// setTimeout(()=>{
//     console.log("THIS IS SETTIMEOUT")
// },2000)

// setTimeout(()=>{
//     console.log("THIS IS SETTIMEOUT1")
// },2000)

// setTimeout(()=>{
//     console.log("THIS IS SETTIMEOUT2")
// },4000)

// setTimeout(()=>{
//     console.log("THIS IS SETTIMEOUT3")
// },3000)

const  {addTwoNumber, subNumber, divNumber, multiplyNumber, helloWorld} = require("g5-npm-package");

console.log(addTwoNumber());
console.log(subNumber());
console.log(divNumber());
console.log(multiplyNumber());
console.log(helloWorld());
