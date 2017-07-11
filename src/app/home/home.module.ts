import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { SharedModule } from '../shared/shared.module';
import { SubscriptionService } from '../shared/services/subscription.service';
import { SidebarService } from '../shared/services/sidebar.service';
import { MinimizeMenuOnClickDirective } from './dashboard/minimize-menu-on-click.directive';

@NgModule({
  imports: [ HomeRoutingModule, CommonModule, SharedModule, RouterModule ],
  providers: [ SubscriptionService, SidebarService ],
  declarations: [ HomeComponent, HeaderComponent, DashboardComponent, MinimizeMenuOnClickDirective ],
  exports: []
})
export class HomeModule { }
