import { Component, OnInit } from '@angular/core';
import { Laptop,LaptopService } from '../laptop.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
  Laptops:Laptop[];
  constructor(service:LaptopService) { 
this.Laptops=service.getlaptops();
//console.log(this.Laptops);
  }

  

  ngOnInit() {
  }

}
