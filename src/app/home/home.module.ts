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
import { NoSubsComponent } from './dashboard/no-subs/no-subs.component';
import { CreateComponent } from './dashboard/create/create.component';

@NgModule({
  imports: [ HomeRoutingModule, CommonModule, SharedModule, RouterModule ],
  providers: [ SubscriptionService, SidebarService ],
  // tslint:disable-next-line:max-line-length
  declarations: [ HomeComponent, HeaderComponent, DashboardComponent, MinimizeMenuOnClickDirective, NoSubsComponent, CreateComponent ],
  exports: []
})
export class HomeModule { }
