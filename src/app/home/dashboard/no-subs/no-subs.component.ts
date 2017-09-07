import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MdDialog } from '@angular/material';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-no-subs',
  templateUrl: './no-subs.component.html',
  styleUrls: ['./no-subs.component.scss']
})
export class NoSubsComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  createSub() {
    const ref = this.dialog.open(CreateComponent);
  }
}

