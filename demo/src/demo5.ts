"use strict";

import * as moment from 'moment';
import * as chalk from 'chalk';
const log = console.log;

import { Sex, IPerson } from './IPerson';

const persons: Array<IPerson> = require('../data/persons.json').persons;

/* Arrow functions */
var getAge = (person: IPerson): number => {
    var birthday = moment(person.Birthday);
    return moment().diff(birthday, 'years');
};

// Calculate the age of the first person
let age = getAge(persons[0]);
log(`${persons[0].Firstname} is ${age} years old.`)

// log('');
// log('------------------------------');
// log('');



/* For loops */
// for (let i = 0; i < persons.length; i++) {
//     log(`Person (old): ${persons[i].Firstname} is ${getAge(persons[i])} years old.`);
// }

// log('');
// log('------------------------------');
// log('');

// /* For of loops */
// for (let person of persons) {
//     log(`Person (new): ${person.Firstname} is ${getAge(person)} years old.`);
// }



// /* Function overloading */
// function findPerson(firstName: string): IPerson[];
// function findPerson(sex: number): IPerson[];
// function findPerson(prop: any): IPerson[] {
//     if (typeof prop === "string") {
//         return persons.filter(person => {
//             if (person.Firstname.toLowerCase() === prop.toLowerCase()) {
//                 return person;
//             }
//         });
//     } else if (typeof prop === "number") {
//         return persons.filter(person => {
//             if (person.Sex === prop) {
//                 return person;
//             }
//         });
//     }
// }

// log(findPerson("James"));

// log(findPerson(Sex.Man));
// log(findPerson(Sex.Woman));