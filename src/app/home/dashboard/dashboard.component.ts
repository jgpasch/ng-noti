import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../shared/services/subscription.service';
import { SidebarService } from '../../shared/services/sidebar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  menuDisplayed: boolean;
  subscriptions: any;

  constructor(private subSvc: SubscriptionService, private sidebarSvc: SidebarService) { }

  ngOnInit() {
    this.subSvc.getAllSubscriptions().subscribe((res) => {
      if (res) {
        this.subscriptions = res;
      }
    }, (err) => { console.log(err); });

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
        this.subscriptions[ind] = res;
      }
    });
  }

}
