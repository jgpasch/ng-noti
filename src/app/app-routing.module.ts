import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRouting } from './app.routing';

@NgModule({
  imports: [ AppRouting ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
