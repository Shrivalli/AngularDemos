import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './first/first.component';
import { RegisterComponent } from './register/register.component';
import { LaptopComponent } from './laptop/laptop.component';
import { UserComponent } from './user/user.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmpaddComponent } from './empadd/empadd.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    RegisterComponent,
    LaptopComponent,
    UserComponent,
    EmployeelistComponent,
    EmpaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
