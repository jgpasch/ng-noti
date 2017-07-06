import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-middle-section',
  templateUrl: './card-middle-section.component.html',
  styleUrls: ['./card-middle-section.component.scss']
})
export class CardMiddleSectionComponent implements OnInit {
  @Input() token: string;

  constructor() { }

  ngOnInit() {
  }

}
