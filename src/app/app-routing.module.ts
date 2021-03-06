import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'First',
    component:FirstComponent
  },
  {
    path:'Register',
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
