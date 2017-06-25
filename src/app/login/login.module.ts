import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  imports: [ LoginRoutingModule, ReactiveFormsModule, CommonModule ],
  providers: [],
  declarations: [ LoginComponent, LoginFormComponent ],
  exports: []
})
export class LoginModule { }
