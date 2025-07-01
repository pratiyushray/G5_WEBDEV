// console.log("HELLO WORLD");

// let a =200;

// // let a =200;


// console.log(a);

// function abc(){
//     console.log("HELLO CLASS");
// }
// var b =3000;

// console.log(b);

// abc();

// console.log("END OF PROGRAM")


// var a = 0239


// console.log(a);

// let a = 100;



// console.log("Hloo");


// var a =200;

// console.log(a);

// console.log(xyz);

// xyz();

// function abc(){
//     console.log("THIS ")
// }

// var xyz = () =>{
//     console.log("This is XYZ Function");
// }

// console.log("END")

////////////////////////////////////////////////


function grandParent() {
    let a = 200;
    console.log(a);
    console.log(c);

    function parent() {

        let b = 300;
        console.log(b);

        function child() {
            let c = 400;
            let a = 9000;
            console.log(c);
            console.log(a);

        }
        child();


    }
    parent();
}

grandParent();

