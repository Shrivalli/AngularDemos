import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   users:any;
  constructor(private apiservice:ApiService) { }

  ngOnInit() {
    //this.getusers();
  }

  // getusers():any
  // {
  //   //{{debugger}}
  //     this.users=this.apiservice.getUsers().subscribe(data=>{
  //       //this.users=data;
  //       console.log(data);
  //     })
  // }



}

export class User{

}