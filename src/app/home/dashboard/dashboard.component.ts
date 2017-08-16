import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../shared/services/subscription.service';
import { SidebarService } from '../../shared/services/sidebar.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  menuDisplayed: boolean;
  subscriptions: any;

  constructor(
    private subSvc: SubscriptionService,
    private sidebarSvc: SidebarService,
    private authSvc: AuthService) {
      this.menuDisplayed = this.sidebarSvc.sidebarOpened;
    }

  ngOnInit() {
    this.subSvc.getAllSubscriptions().subscribe((res) => {
      if (res) {
        console.log(res);
        this.subscriptions = res;
      }
    }, (err) => {
      // if 401, then likely token is expired, logout
      if (err.status === 401) {
        console.log('ya its here');
        this.authSvc.logout();
      }
    });

    this.sidebarSvc.getMessage().subscribe(expanded => {
      if (expanded) {
        this.menuDisplayed = true;
      } else {
        this.menuDisplayed = false;
      }
    })
  }

  toggleActiveCb(id: number) {
    let ind;
    const sub = this.subscriptions.filter((obj, i) => {
      if (obj.id === id) {
        ind = i;
        return true;
      } else {
        return false;
      }
    });
    this.subSvc.toggleActive(sub[0]).subscribe((res) => {
      if (res) {
        // this.subscriptions[ind] = res;
        this.subscriptions[ind].active = !this.subscriptions[ind].active;
      }
    });
  }

}
