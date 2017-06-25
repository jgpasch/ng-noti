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
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  @ViewChild('firstInput') firstInput;

  email = new FormControl('', [ Validators.required ]);
  password = new FormControl('', [ Validators.required ]);

  constructor(private authService: AuthService, private router: Router, private builder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.builder.group({
      email: this.email,
      password: this.password
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const creds = { email: this.loginForm.value.email, password: this.loginForm.value.password };
      this.authService.login(creds).subscribe((result) => {
        if (result) {
          this.router.navigate(['home']);
        }
      }, (err) => {
        if (err.status === 0) {
        } else {
          console.log(err);
          const json = JSON.parse(err._body);
          this.firstInput.nativeElement.focus();
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
