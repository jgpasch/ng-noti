import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-top-section',
  templateUrl: './card-top-section.component.html',
  styleUrls: ['./card-top-section.component.scss']
})
export class CardTopSectionComponent implements OnInit {
  @Input() active: boolean;
  @Input() id: number;
  @Input() token: string;
  @Output() toggleActive: EventEmitter<number> = new EventEmitter<number>();
  @Output() editSub: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  activeClicked() {
    this.toggleActive.emit(this.id);
  }

  editSubClicked() {
    this.editSub.emit(true);
  }

  ngOnInit() {
  }

}
