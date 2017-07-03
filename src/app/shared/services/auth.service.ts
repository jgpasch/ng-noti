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

  login(postData) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${server.url}/auth/login`, postData)
      .map(res => res.json())
      .map(data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', this.getHandle(data.email));
        return data;
      });
  }

  register(postData) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
  return this.http.post(`${server.url}/auth/register`, postData)
    .map(res => res.json())
    .map(data => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', this.getHandle(data.email));
      return data;
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
