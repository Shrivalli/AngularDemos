import { Component, OnInit } from '@angular/core';
import { Department, Employee } from '../Employee';

@Component({
  selector: 'app-empadd',
  templateUrl: './empadd.component.html',
  styleUrls: ['./empadd.component.css']
})
export class EmpaddComponent implements OnInit {
  previewphoto=false;
  employee: Employee={
    id:null,
    name:null,
    gender:null,
    contactPreference:null,
    isActive:null,
    phonenumber:null,
    photoPath:null,
    dateOfBirth:null,
    department:null
 
  };
  departments: Department[]=[
  {id:1,name:"HelpDesk"},
  {id:2,name:"HR"},
 {id:3,name:"IT"},
 {id:4,name:"Payroll"},
 {id:5,name:"admin"}
 ]
  
   togglePhotoPreview()
 {
 this.previewphoto=!this.previewphoto;
 }
   
   saveEmp(newEmployee:Employee):void
   {
     console.log(newEmployee);
   }
 
 
  constructor() { }

  ngOnInit() {
  }

}
