import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  imports: [ HttpModule ],
  providers: [ AuthGuardService, AuthService ]
})
export class SharedModule { }
