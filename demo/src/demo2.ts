import * as chalk from 'chalk';
const log = console.log;


log("");
log("-------------------------------");
log("");


let foo = 0;
log("Initial value:", foo);
if (typeof foo === "number") {
    let foo = 2;
}
log("After value:", foo);


// log("");
// log("-------------------------------");
// log("");

/* Showing the difference between var and let */
// function doSomeWork() {
//     var iamvar = "var";

//     if (true) {
//         iamvar = "new-var"
//         let iamlet = "let";
//     }

//     console.log('Show the var value:', iamvar);
//     console.log('Show the let value:', iamlet);
// }
// doSomeWork();


// log("");
// log("-------------------------------");
// log("");


// let functions = [];
// for (let i = 0; i < 5; i++) {
//     functions.push(function() {
//         log("Value:", i);
//     });
// }
// // Calling each of the functions
// for (let j = 0; j < 5; j++) {
//     functions[j](); // Returns 5 each time
// }


// log("");
// log("-------------------------------");
// log("");


/* Constants */
// const constVal = 0;
// if (typeof constVal === "number") {
//     constVal++;
// }


// const myArray = [1, 3, 5, 7];
// myArray = "test" // This will not work

// myArray.push(9); // Works because you are appending it to the array, so you are not manipulating the const itself
// log("Array:", myArray);