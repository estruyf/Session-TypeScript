import { IPerson } from './IPerson';

export interface IEmployee extends IPerson {
    JobTitle: string;
    Address: IAddress;
    StartDate: Date;
    Email: string;
    EmployeeNumber: number;
}

export interface IAddress {
    Street: string;
    Number: number;
    City: string;
    PostalCode: number;
    Country: string;
}