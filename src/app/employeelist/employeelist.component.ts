import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employees:Employee[]=[
    {
    id:1,
    name:'Steve',
    gender:'Male',
    contactPreference:'Email',
    email:'steve@gmail.com'  ,
    dateOfBirth:new Date('01/03/2010'),
    department:'Apple',
    isActive:true,
    photoPath:'assets/billgates.jpeg'
    },
    {
      id:2,
      name:'Bill Gates',
      gender:'Male',
      contactPreference:'Phone',
      phonenumber:9850048765  ,
      dateOfBirth:new Date('01/03/2012'),
      department:'Microsoft',
      isActive:true,
      photoPath:'assets/billgates.jpeg',
      },
      {
        id:3,
        name:'Sundar',
        gender:'Male',
        contactPreference:'Email',
        email:'Sundar@gmail.com'  ,
        dateOfBirth:new Date('05/07/2010'),
        department:'Google',
        isActive:true,
        photoPath:'assets/billgates.jpeg',
        }
  ]
  constructor() { }

  ngOnInit() {
  }

}
