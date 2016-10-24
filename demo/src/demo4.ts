"use strict";

import * as moment from 'moment';
import * as chalk from 'chalk';
const log = console.log;

import { IPerson } from './IPerson';

/* How we did it back in the good old JavaScript days */
let output = "Hi, I just wanted to tell you a story. \
              \nAbout a, zzzzzzzzz";
log(output);


var person: IPerson = {
    Firstname: "James",
    Lastname: "Kelley",
    Birthday: new Date('1990-04-10')
}

output = "Firstname: " + person.Firstname + " | Lastname: " + person.Lastname + " | Age: " + moment().diff(person.Birthday, 'years');
log(output);



/* Template strings */
// output = `Hi, I just wanted to tell you a story.
// About a, zzzzzzzzz`;
// log(output);

// output = `Firstname: ${person.Firstname} | Lastname: ${person.Lastname} | Age: ${moment().diff(person.Birthday, 'years')}`;
// log(output);