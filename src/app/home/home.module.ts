import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [ HomeRoutingModule, CommonModule ],
  providers: [],
  declarations: [ HomeComponent, HeaderComponent ],
  exports: []
})
export class HomeModule { }
