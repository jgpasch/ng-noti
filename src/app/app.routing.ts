import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' , canActivate: [AuthGuardService]},
  { path: '**', redirectTo: 'home'}
];

export const AppRouting = RouterModule.forRoot(routes);
