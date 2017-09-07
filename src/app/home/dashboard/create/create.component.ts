import { Component, OnInit, ViewChild} from '@angular/core';
import { MdDialogRef, MdSnackBar } from '@angular/material';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { SubscriptionService } from '../../../shared/services/subscription.service';
import { SubscriptionCreatedService } from '../../../shared/services/subscription-created.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  @ViewChild('firstInput') firstInput;

  token = new FormControl('', [ Validators.required ]);
  percent = new FormControl('', [ Validators.required ]);
  minVal = new FormControl('', [ Validators.required ]);
  maxVal = new FormControl('', [ Validators.required ]);
  minMaxChange = new FormControl('', [ Validators.required ]);

  // password = new FormControl('', [ Validators.required ]);

  constructor(
    public dialogRef: MdDialogRef<CreateComponent>,
    private builder: FormBuilder,
    private subscriptionService: SubscriptionService,
    private snackBar: MdSnackBar,
    private subscriptionCreatedService: SubscriptionCreatedService
  ) {
    this.createSubForm();
  }

  createSubForm() {
    this.createForm = this.builder.group({
      token: this.token,
      percent: this.percent,
      minVal: this.minVal,
      maxVal: this.maxVal,
      minMaxChange: this.minMaxChange
    });

    // this.createForm.valueChanges.subscribe(data => {
    //   this.apiError = null;
    // })
  }

  onSubmit(another = false) {
    if (this.createForm.valid) {
      const values = this.createForm.value;
      const token = values.token;
      const percent = parseInt(values.percent, 10);
      const minVal = values.minVal ? parseInt(values.percent, 10) : 0;
      const maxVal = values.maxVal ? parseInt(values.percent, 10) : 0;
      const minMaxChange = values.minMaxChange ? parseInt(values.minMaxChange, 10) : 0;

      const postData = {
        token,
        percent,
        minVal,
        maxVal,
        minMaxChange
      };

      this.subscriptionService.createSubscription(postData)
        .subscribe(res => {
          console.log('announcing: ', res);
          this.subscriptionCreatedService.announceSub(res);
          this.snackBar.open('Subscription created!', 'Ok', { duration: 1500 });
          if (!another) {
            this.dialogRef.close();
          } else {
            this.clearForm();
            this.firstInput.nativeElement.focus();
          }
        });
    }
  }

  close() {
    console.log('closing now');
    this.dialogRef.close();
  }

  clearForm() {
    this.createForm.reset();
  }

  ngOnInit() {
    this.firstInput.nativeElement.focus();
  }

}
