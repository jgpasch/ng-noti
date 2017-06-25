import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeRouting } from './home.routing';

@NgModule({
  imports: [ HomeRouting ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule { }
