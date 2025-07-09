console.log("START SCRIPT");

// async function fetchDataProducts(){
//   const data =await fetch('https://dummyjson.com/products');
//   const finalData = await data.json();
//   console.log(finalData);
// }

// fetchDataProducts();


// const promiseByPransh = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve("I will complete the assignment by 1:PM")
//     },3000)
// });

// async function checkAssignment(){
//   const assignmentData = await promiseByPransh;
//   console.log(assignmentData);
// }

// checkAssignment();

//EVENT CAPTURING OR BUBBLING

// const grandParent = document.getElementById('grandparent');
// const parent = document.getElementById('parent');
// const child = document.getElementById('child');

// grandParent.addEventListener('click',()=>{
//   console.log("THIS IS GRANDPARENT DIV")
// },true);

// parent.addEventListener('click',()=>{
//   console.log("THIS IS PARENT DIV")
// },true);

// child.addEventListener('click',()=>{
//   console.log("THIS IS CHILD DIV")
// },true);


///////////////////////////////////////////////////////////////



// function admissionProcess(){
//   console.log(` Hi ${this.studentName}, from Class: ${this.studentClass} `)
// }


// const student1 = {
//   studentName:"Piyush",
//   studentClass:"G4"
// }

// const student2 = {
//   studentName:"Raghav",
//   studentClass:"G4"
// }

// // admissionProcess("Piyush","G5")

// //call()

// admissionProcess.call(student1);
// admissionProcess.call(student2);


function admissionProcess(studentZone, studentCampus){
  console.log(` Hi ${this.studentName}, from Class: ${this.studentClass}. Your Zone ${studentZone} : CAMPUS: ${studentCampus} `);
}
const student1 = {
  studentName:"Piyush",
  studentClass:"G4"
}

const student2 = {
  studentName:"Raghav",
  studentClass:"G4"
}
// admissionProcess("Piyush","G5")
//call()
// admissionProcess.call(student1,"Zeta Cluster"," Punjab Campus");
// admissionProcess.call(student2, "Alpha Cluster", "Himanchal Campus");


const b1 =admissionProcess.bind(student1,["Zeta Cluster"," Punjab Campus"]);
const b2= admissionProcess.bind(student2, "Alpha Cluster", "Himanchal Campus");

b1();
b2();