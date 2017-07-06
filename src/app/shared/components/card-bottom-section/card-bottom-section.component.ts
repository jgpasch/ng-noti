import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-bottom-section',
  templateUrl: './card-bottom-section.component.html',
  styleUrls: ['./card-bottom-section.component.scss']
})
export class CardBottomSectionComponent implements OnInit {
  @Input() percent: number;
  @Input() minVal: number;
  @Input() maxVal: number;
  @Input() active: number;


  constructor() { }

  ngOnInit() {
  }

}
