import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
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
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  apiError;
  loading: boolean;
  @ViewChild('firstInput') firstInput;

  email = new FormControl('', [ Validators.required ]);
  password = new FormControl('', [ Validators.required ]);

  constructor(private authService: AuthService, private router: Router, private builder: FormBuilder) {
    this.loading = false;
    this.createForm();
  }

  createForm() {
    this.loginForm = this.builder.group({
      email: this.email,
      password: this.password
    });

    this.loginForm.valueChanges.subscribe(data => {
      this.apiError = null;
    })
  }

  swiped() {
    console.log('you sqiped');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;
      const creds = { email: this.loginForm.value.email, password: this.loginForm.value.password };
      this.authService.login(creds).subscribe((result) => {
        if (result) {
          this.loading = false;
          this.router.navigate(['home']);
        }
      }, (err) => {
        this.loading = false;
        if (err.status === 0) {
          this.apiError = 'Server error';
        } else {
          console.log(err);
          const body = JSON.parse(err._body)
          this.apiError = body.error;
          if (this.apiError.substring(0, 6) === 'crypto') {
            this.apiError = 'Incorrect email/password combination';
          }
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
