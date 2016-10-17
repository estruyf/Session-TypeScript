"use strict";

import * as chalk from 'chalk';
const log = console.log;

/* Arrow functions */
var test = () => {
    log('Simpler function calls');
};

test();


/* For loops */
let results: string[] = ["result 1", "result 2", "result 3", "result 4"];

for (let i = 0; i < results.length; i++) {
    log(results[i]);
}

/* For of loops */
for (let item of results) {
    log(item);
}