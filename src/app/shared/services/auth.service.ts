import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Http, Headers } from '@angular/http';
import server from '../../config/server';

@Injectable()
export class AuthService {
  isLoggedIn: Boolean;

  constructor(private http: Http) { }

  isAuthenticated() {
    return (this.getToken() !== null) ? true : false;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUsername() {
    return localStorage.getItem('username');
  }

  login(data) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`http://localhost:8000/auth/login`, data, {headers})
      .map(res => res.json())
      .map(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('username', this.getHandle(res.user));
        return res;
      });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

  getHandle(email) {
    const index = email.indexOf('@');
    if (index > -1) {
      return email.slice(0, index);
    } else {
      return email;
    }
  }

}
