"use strict";

import * as moment from 'moment';
import * as chalk from 'chalk';
const log = console.log;

import { IPerson } from './IPerson';
import { IEmployee } from './IEmployee';

import PersonTool from './demo6';


class EmployeeTool extends PersonTool {
    constructor(public employees: IEmployee[]) {
        super();

        let allPersons: IPerson[] = [];
        for (let employee of employees) {
            allPersons.push({
                Firstname: employee.Firstname,
                Lastname: employee.Lastname,
                Birthday: employee.Birthday
            })
        }
        
        this.persons = allPersons;
    }

    public getEmployeeDetails() {
        this.employees.forEach(employee => {
            let seniority = this.getWorkSeniority(employee.StartDate);
            if (seniority < 12) {
                log(`${employee.Lastname}, ${employee.Firstname} is working ${Math.floor(seniority/12)} months in our company.`);
            } else if (seniority > 12 && seniority < (12 * 5)) {
                log(`${employee.Lastname}, ${employee.Firstname} is working in our company for ${Math.floor(seniority/12)} years`);
            } else {
                log(chalk.bgCyan(`Congrats: ${employee.Lastname}, ${employee.Firstname} is working ${Math.floor(seniority/12)} years in our company`));
            }
        });
    }

    private getWorkSeniority(startdate: Date): number {
        return moment().diff(startdate, 'months');
    }

    public find(employeeNumber: number): IEmployee[];
    public find(firstName: string, lastName?: string): IEmployee[];
    public find(property1: any, property2?: any): IEmployee[] {
        if (typeof property1 === "string") {
            return this.employees.filter(employee => {
                if (employee.Firstname.toLowerCase() === property1.toLowerCase()) {
                    if (typeof property2 !== 'undefined') {
                        if (employee.Lastname.toLowerCase() === property2.toLowerCase()) {
                            return employee;
                        }
                    } else {
                        return employee;
                    }
                }
            });
        } else if (typeof property1 === "number") {
            return this.employees.filter(employee => {
                if (employee.EmployeeNumber === property1) {
                    return employee;
                }
            });
        }
    }
}

const eTool = new EmployeeTool(require('../data/employees.json').employees);
//eTool.getAllPersons();
// eTool.getEmployeeDetails();

//log(eTool.find("selman"));
//log(eTool.find("selman", "van hoog"));

//log(eTool.find(1234));