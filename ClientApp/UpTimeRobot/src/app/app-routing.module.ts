import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponentComponent} from './login-component/login-component.component'
import {RegistrationComponentComponent} from './registration-component/registration-component.component'

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'register', component: RegistrationComponentComponent },
    { path: 'login', component: LoginComponentComponent },
     
   
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
