import { Component, OnInit } from '@angular/core';
import {Employee} from '../Employee'

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
   
  //e:Employee={eid:100,ename:'Ram',Salary:4000,d:{Did:101,Dname:'Admin'}};
  constructor() { 
    // this.e.eid=100;
    // this.e.ename='Ram';
    // this.e.Salary=3000;
  }

  ngOnInit() {
  }

}
