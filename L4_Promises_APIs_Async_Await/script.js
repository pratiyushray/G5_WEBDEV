console.log("START SCRIPT");


// const newArr = arr.map((x)=>x*2);

// console.log(newArr);

// PROTOTYPES in JS

// let arr = [2,4,5,6,7,8];
// let arr2 = [5,5,5,6,7,8];


// function doubleData(x){
//     return x*x;
// }

// Array.prototype.mapReplica = function (logic){
//     let outputArr = [];
//     for (let i = 0;i< this.length;i++){
//         outputArr.push(logic(this[i]));
//     }
//     return outputArr;
// }

// const myProtoData = arr.mapReplica(doubleData);
// console.log(myProtoData);

// // //FILTER
// const words = ["spray", "elite", "exuberant", "destruction", "present"];

// const result = words.filter((word) => word.length > 6);

// console.log(result);





// const mapRep = words.mapReplica((word) => word.length > 6);
// console.log(mapRep)



// Array.prototype.mapReplica = function (logic){
//     let outputArr = [];
//     for (let i = 0;i< this.length;i++){
//         if (logic(this[i])){
//             outputArr.push(this[i]);
//         }
//     }
//     return outputArr;
// }


//////////////////////////////////////////////

// REDUCE in JS 

// const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 10;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// const sumWithInitial2 = array1.reduceReplica(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );
// console.log(sumWithInitial);
// Expected output: 10

const array1 = [1, 2, 3, 4];


// function myLogic(acc,curr){
//     return acc+curr
// }

Array.prototype.reduceReplica = function (logic,initialValue){
    let result = initialValue;
    for(let i=0;i<this.length;i++){
        result = logic(result,this[i])
    }
    return result;
}

const finalAnswer = array1.reduceReplica((acc,curr)=> acc+curr,10)
console.log(finalAnswer);

// const sumWithInitial2 = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );