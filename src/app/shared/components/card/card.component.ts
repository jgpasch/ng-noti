import { Component, Input, OnInit, OnChanges, ViewEncapsulation } from '@angular/core';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit, OnChanges {
  @Input() sub: any;

  constructor(private subSvc: SubscriptionService) {
  }

  toggleActiveCb() {
    this.subSvc.toggleActive(this.sub).subscribe((res) => {
      if (res) {
        this.sub = res;
      }
    });
  }

  ngOnChanges() {
    console.log('a card has been changed');
  }

  ngOnInit() {
    console.log(this.sub);
  }

}
