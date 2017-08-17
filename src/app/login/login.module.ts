import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { VerifyComponent } from './verify/verify.component';

@NgModule({
  imports: [ LoginRoutingModule, ReactiveFormsModule, CommonModule ],
  providers: [],
  declarations: [ LoginComponent, LoginFormComponent, RegisterFormComponent, VerifyComponent ],
  exports: []
})
export class LoginModule { }
