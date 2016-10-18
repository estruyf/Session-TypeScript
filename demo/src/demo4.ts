"use strict";

import * as chalk from 'chalk';
const log = console.log;

import { IPerson } from './IPerson';

/* How we did it back in the good old JavaScript days */
let output = "Hi, I just wanted to tell you a story. \
              \nAbout a, zzzzzzzzz";
log(output);


var me: IPerson = {
    Firstname: "Elio",
    Lastname: "Struyf",
    Age: 31
}

output = "Firstname: " + me.Firstname + " | Lastname: " + me.Lastname + " | Age: " + me.Age;
log(output);



/* Template strings */
// output = `
// Hi, I just wanted to tell you a story.
// About a, zzzzzzzzz
// `;
// log(output);

// output = `Firstname: ${me.Firstname} | Lastname: ${me.Lastname} | Age: ${me.Age}`;
// log(output);