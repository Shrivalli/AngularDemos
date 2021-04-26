import { Component } from '@angular/core';
import  *  as  data  from  'data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title:string;
  title = 'firstangapp';
  ename='Shrivalli';
  cname="CTS";

  ngOnInit(){
    console.log(data);

  }
}
