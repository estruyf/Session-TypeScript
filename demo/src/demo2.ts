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