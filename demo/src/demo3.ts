"use strict";

import * as chalk from 'chalk';
const log = console.log;

/* Interfaces - https://www.typescriptlang.org/docs/handbook/interfaces.html */

interface Person {
    Firstname: string;
    Lastname: string;
    Age: number;
}

// var myvar: Person = {
//     Firstname: "Elio",
//     Lastname: "Struyf",
//     Age: 31
// }

// myvar.


/* ANY if you don't know it // Could be handy with REST / API calls */
// var myany: any = {
//     nr: 4,
//     str: "2"
// };

// myany = "test";

// myany = 42;


/* Interfaces with functions */
// enum Sex {
//     Man,
//     Woman
// }

// interface PersonDetails extends Person {
//     Sex: Sex,
//     Single?: boolean
// }

// var personFunc = (person: PersonDetails): string => {
//     if (typeof person.Single !== 'undefined') {
//         if (person.Sex === Sex.Man) {
//             return `Hi ${person.Firstname}, you are a man and ${person.Single ? 'single' : 'not single anymore.' }`;
//         }

//         if (person.Sex === Sex.Woman) {
//             return `Hi ${person.Firstname}, you are a woman. ${person.Single ? 'Are you looking for a partner?' : '' }`;
//         }
//     } else {
//         return `Sorry ${person.Firstname}, but I'm not sure about you. Don't you want to tell if you are single or not?`;
//     }
// }

// log(personFunc({ 
//     Firstname: "Elio",
//     Lastname: "Struyf",
//     Age: 31,
//     Sex: Sex.Man,
//     Single: false
// }));

// log(personFunc({ 
//     Firstname: "Yinthe",
//     Lastname: "Struyf",
//     Age: 4,
//     Sex: Sex.Woman,
//     Single: true
// }));

// log(personFunc({ 
//     Firstname: "Stephanie",
//     Lastname: "Unknown",
//     Age: 34,
//     Sex: Sex.Woman
// }));