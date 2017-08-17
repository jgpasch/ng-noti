import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

import { AuthService } from '../../shared/services/auth.service';
import { emailValidator } from './email-validator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  apiError;
  @ViewChild('firstInput') firstInput;

  email = new FormControl('', [ Validators.required, emailValidator() ]);
  password = new FormControl('', [ Validators.required ]);
  confirmPassword = new FormControl('', [ Validators.required ]);
  phoneNumber = new FormControl('', [ Validators.required ]);

  constructor(private authService: AuthService, private router: Router, private builder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.builder.group({
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      phoneNumber: this.phoneNumber
    });

    this.registerForm.valueChanges.subscribe(data => {
      this.apiError = null;
    })
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Check to see if passwords match
      if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
        this.apiError = 'Passwords must match';
        return false;
      }

      // tslint:disable-next-line:max-line-length
      const creds = { email: this.registerForm.value.email, password: this.registerForm.value.password, number: this.registerForm.value.phoneNumber };
      this.authService.register(creds).subscribe((result) => {
        if (result) {
          console.log('i shuld be here');
          this.router.navigate(['/auth/verify']);
        }
      }, (err) => {
        if (err.status === 0) {
        } else {
          const body = JSON.parse(err._body);
          this.apiError = body.error;
        }
        this.firstInput.nativeElement.focus();
      });
    } else {
      this.email.markAsTouched();
      this.email.markAsPristine();
      this.password.markAsTouched();
      this.password.markAsPristine();
    }
  }

  ngOnInit() {
    this.firstInput.nativeElement.focus();
  }

}
