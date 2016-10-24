"use strict";

import * as moment from 'moment';
import * as chalk from 'chalk';
const log = console.log;

import { IPerson } from './IPerson';

export default class PersonTool {
    private _persons: Array<IPerson>;

    get persons(): IPerson[] {
        return this._persons;
    }
    
    set persons(allPersons: IPerson[]) {
        this._persons = allPersons;
    }

    public getAllPersons() {
        this._persons.forEach(person => {
            log(`${person.Lastname}, ${person.Firstname}: ${this.getAge(moment(person.Birthday))}`)
        });
    }

    private getAge(birthday: moment.Moment) {
        return moment().diff(birthday, 'years');
    }
}

// var pTool = new PersonTool();
// pTool.persons = require('../data/persons.json').persons;
// pTool.getAllPersons();