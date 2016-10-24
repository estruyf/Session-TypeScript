"use strict";

import * as chalk from 'chalk';
const log = console.log;

/* Interfaces - https://www.typescriptlang.org/docs/handbook/interfaces.html */

// interface Person {
//     Firstname: string;
//     Lastname: string;
//     Birthday: Date;
// }

// var myvar: Person = {
//     Firstname: "James",
//     Lastname: "Kelley",
//     Birthday: new Date('1990-04-10')
// }

// //myvar.


// /* ANY if you don't know it // Could be handy with REST / API calls */
// var myany: any = {
//     nr: 4,
//     str: "2"
// };

// myany = "test";

// myany = 42;


// /* Interfaces with functions */
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
//         return `Hi ${person.Firstname}, you're a ${Sex[person.Sex]}. ${person.Single ? 'Are you looking for a partner?' : 'I see that you\'re not single anymore.' }`;
//     } else {
//         return `Sorry ${person.Firstname}, I'm not sure about you. Don't you want to tell if you're single or not?`;
//     }
// }

// log(personFunc({ 
//     Firstname: "James",
//     Lastname: "Kelley",
//     Birthday: new Date('1990-04-10'),
//     Sex: Sex.Man,
//     Single: false
// }));

// log(personFunc({ 
//     Firstname: "Ronnie",
//     Lastname: "Binder",
//     Birthday: new Date('1980-07-12'),
//     Sex: Sex.Woman,
//     Single: true
// }));

// log(personFunc({ 
//     Firstname: "Shawna",
//     Lastname: "Elliott",
//     Birthday: new Date('1986-11-16'),
//     Sex: Sex.Woman
// }));