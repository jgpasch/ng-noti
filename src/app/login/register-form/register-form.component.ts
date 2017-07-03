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
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  apiError;
  @ViewChild('firstInput') firstInput;

  email = new FormControl('', [ Validators.required ]);
  password = new FormControl('', [ Validators.required ]);
  confirmPassword = new FormControl('', [ Validators.required ]);
  number = new FormControl('', [ Validators.required ]);

  constructor(private authService: AuthService, private router: Router, private builder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.builder.group({
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      number: this.number
    });

    this.registerForm.valueChanges.subscribe(data => {
      this.apiError = null;
    })
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // tslint:disable-next-line:max-line-length
      const creds = { email: this.registerForm.value.email, password: this.registerForm.value.password, number: this.registerForm.value.number };
      this.authService.register(creds).subscribe((result) => {
        if (result) {
          this.router.navigate(['home']);
        }
      }, (err) => {
        if (err.status === 0) {
        } else {
          console.log(err);
        }
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
