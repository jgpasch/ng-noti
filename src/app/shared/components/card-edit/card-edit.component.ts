import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss']
})
export class CardEditComponent implements OnInit {
  @Output() leaveEdit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() sub: any;
  editForm: FormGroup;
  apiError;
  myVar = 'this is my placehodler';
  percent = new FormControl('', [Validators.required]);
  minVal = new FormControl('', [Validators.required]);
  maxVal = new FormControl('', [Validators.required]);
  minMaxPercentChange = new FormControl('', [Validators.required]);

  constructor(private builder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.editForm = this.builder.group({
      percent: this.percent,
      minVal: this.minVal,
      maxVal: this.maxVal,
      minMaxPercentChange: this.minMaxPercentChange
    });

    this.editForm.valueChanges.subscribe(data => {
      this.apiError = null;
    })
  }

  leaveEditMode() {
    this.leaveEdit.emit(true);
  }

}
