import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {
  verifyForm: FormGroup;
  apiError;
  @ViewChild('firstInput') firstInput;

  code = new FormControl('', [ Validators.required ]);

  constructor(private authService: AuthService, private router: Router, private builder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.verifyForm = this.builder.group({
      code: this.code
    });

    this.verifyForm.valueChanges.subscribe(data => {
      this.apiError = null;
    });
  }

  ngOnInit() {
    this.firstInput.nativeElement.focus();
  }

  onSubmit() {
    this.authService.verify(this.verifyForm.value.code).subscribe(res => {
      console.log(res);
      this.router.navigate(['home']);
    }, (err) => {
      const body = JSON.parse(err._body);
      this.apiError = body.error;
      this.firstInput.nativeElement.focus();
    });
  }

}
