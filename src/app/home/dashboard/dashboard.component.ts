import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../shared/services/subscription.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  subscriptions: any;

  constructor(private subSvc: SubscriptionService) { }

  ngOnInit() {
    this.subSvc.getAllSubscriptions().subscribe((res) => {
      if (res) {
        this.subscriptions = res;
      }
    }, (err) => { console.log(err); });
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
