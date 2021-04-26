import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  Laptops:Laptop[]=
  [
    {Modelname:'General',Brandname:'Dell',Price:90000, Spec:'processortype1'},
    {Modelname:'Pavillion',Brandname:'HP',Price:87000, Spec:'processortype1'},
    {Modelname:'Business',Brandname:'Lenovo',Price:50000, Spec:'processortype1'},
    {Modelname:'Gaming',Brandname:'Dell',Price:47000, Spec:'processortype1'},

  ]
  constructor() {
        
}
getlaptops():Laptop[]{
  return this.Laptops;
}
}

export class Laptop
{
  Modelname:string;
    Brandname:string;
    Price:Number;
    Spec:string;
}
