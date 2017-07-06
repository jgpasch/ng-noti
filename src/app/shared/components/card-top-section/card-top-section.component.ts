import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-top-section',
  templateUrl: './card-top-section.component.html',
  styleUrls: ['./card-top-section.component.scss']
})
export class CardTopSectionComponent implements OnInit {
  @Input() active: boolean;
  @Output() toggleActive: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  activeClicked() {
    console.log('o was clicekd');
    // this.toggleActive.emit(this.active);
  }

  ngOnInit() {
  }

}
