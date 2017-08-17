import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
  { path: '', component: LoginComponent,
    children: [
      { path: '', component: LoginFormComponent },
      { path: 'register', component: RegisterFormComponent},
      { path: 'verify', component: VerifyComponent}
    ]
  }
];

export const LoginRouting = RouterModule.forChild(routes);
