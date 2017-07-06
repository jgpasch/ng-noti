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

}
