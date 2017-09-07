import { Component, Input, OnInit, OnChanges, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
// import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit, OnChanges {
  @Input() sub: any;
  @Output() toggleActive: EventEmitter<number> = new EventEmitter<number>();
  editMode = false;

  constructor() {
  }

  toggleActiveCb(id) {
    this.toggleActive.emit(id);
  }

  editSubCb() {
    this.editMode = !this.editMode;
  }

  ngOnChanges() {
  }

  ngOnInit() {
  }

}
