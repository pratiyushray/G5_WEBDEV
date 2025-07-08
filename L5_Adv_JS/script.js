console.log("START SCRIPT");

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Pransh will get the Placement");
//   }, 3000);
// });

// myPromise
// .then((res)=> console.log(res))
// .then(()=> setTimeout(()=> {
//     console.log("PRANSH PARTYY ")
// },2000))
// .then(()=> setTimeout(()=> {
//     console.log("PRANSH WILL WORK")
// },4000))
// .then(()=> setTimeout(()=> {
//     console.log("PRANSH GOT LAYED OFF")
// },1000))
// .catch((err)=> console.log(err));

// console.log(myPromise);


// function pranshPlacement(placementStep,delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Pransh will get the Placement " + placementStep);
//             console.log("Pransh will get the Placement " + placementStep);
//         }, delay);
//     });
// }

// pranshPlacement("PRANSH GOT THE PLACEMENT",5000)
// .then(()=> pranshPlacement("Party Time",3000))
// .then(() => pranshPlacement("Pransh Working", 4000))
// .then(()=> pranshPlacement("layoff",1000))
// .catch((err)=> console.log(err));



/////////////////////////////////////////////////////////


// const myPromise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Pransh will get the Placement");
//   }, 5000);
// });


// const myPromise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Pransh will get the Placement2");
//   }, 4000);
// });

// const myPromise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Pransh will get the Placement3");
//   }, 3000);
// });

// myPromise1.then((res)=>console.log(res)).catch((err)=> console.log(err))
// myPromise2.then((res)=>console.log(res)).catch((err)=> console.log(err))
// myPromise3.then((res)=>console.log(res)).catch((err)=> console.log(err))


///////////////////////////////////////////////////////////


const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("JetBlue Data");
  }, 3000);
});

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("EasyJet Data");
  }, 4000);
});

const myPromise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Latam Data");
  }, 2000);
});

const myPromise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Menzies Data");
  }, 5000);
});


// Promise.all([myPromise1,myPromise2,myPromise3,myPromise4]);

// 1. IF ALL RESOLVED : TB KYA OUTPUT HAI: [result1,result2,result3,result4]
// 2. IF ALL REjECTED : TB KYA OUTPUT HAI  : result1
// 3. SIRF 1 REJECT: TB KYA OUTPUT HAI reject4


// Promise.allSettled([myPromise1,myPromise2,myPromise3,myPromise4]);

// 1. IF ALL RESOLVED : TB KYA OUTPUT HAI [ {staus FUllfilled/rejected, reason/value}]
// 2. IF ALL REjECTED : TB KYA OUTPUT HAI 
// 3. SIRF 1 REJECT: TB KYA OUTPUT HAI[ { reject}]


// Promise.any([myPromise1,myPromise2,myPromise3,myPromise4]);

// 1. IF ALL RESOLVED : TB KYA OUTPUT HAI first fullfilled
// 2. IF ALL REjECTED : TB KYA OUTPUT HAI 
// 3. SIRF 1 REJECT: TB KYA OUTPUT HAI

// Promise.race([myPromise1,myPromise2,myPromise3,myPromise4]);

// 1. IF ALL RESOLVED : TB KYA OUTPUT HAI
// 2. IF ALL REjECTED : TB KYA OUTPUT HAI 
// 3. SIRF 1 REJECT: TB KYA OUTPUT HAI