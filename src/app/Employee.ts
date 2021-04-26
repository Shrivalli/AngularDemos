// export interface Employee
// {
//     eid:number;
//     ename:string;
//     Salary:number;
//     d:Department;
// }

// export interface Department
// {
//     Did:number;
//     Dname:string;
//    // emps:Employee[];
// }

export class Employee
{
    id:number;
    name:string;
    gender:string;
    email?:string;
    phonenumber?:number;
    contactPreference:string;
    dateOfBirth:Date;
    department:string;
    isActive:Boolean;
    photoPath?:string;
}


export class Department
{
    id:number;
    name:string;
}