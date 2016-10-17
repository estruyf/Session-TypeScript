import * as chalk from 'chalk';
const log = console.log;

/* Number testing */

var test1: number = 1;
test1 += 3;

log("Should output 4:", test1);
log("");

// test1 += "2";

// log(typeof test1);
// log(typeof test1.toString());


/* String testing */

// var testString: string = "I'm a string";

// testString += 1;

// log(testString);


/* Unknown variable */
//test2 = 2 + 3;


/* ANY if you don't know it */
// var test2: any = {
//     nr: 1,
//     str: "2"
// };


/* Better way, create an interface */
// interface MyType {
//     nr: number;
//     str: string;
// }

// var test3: MyType = {
//     nr: 3,
//     str: "4"
// }

// test3.