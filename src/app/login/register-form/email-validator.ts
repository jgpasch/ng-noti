import { AbstractControl, ValidatorFn } from '@angular/forms';

// tslint:disable-next-line:max-line-length
const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const userEmail = control.value;
    const isEmail = emailRegex.test(userEmail);
    return isEmail ? null : {'invalidEmail': {userEmail}};
  };
}
