export enum Sex {
    Man,
    Woman
}

export interface IPerson {
    Firstname: string;
    Lastname: string;
    Birthday: Date;
    Sex?: Sex;
}