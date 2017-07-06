import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import server from '../../config/server';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SubscriptionService {

  constructor(private http: Http) { }

  getAllSubscriptions() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('authorization', localStorage.getItem('token'));
    return this.http.get(`${server.url}/subscriptions`, { headers })
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

  toggleActive(sub: any) {
    const headers = new Headers();
    headers.append('authorization', localStorage.getItem('token'));
    const postData = Object.assign({}, sub, { active: !sub.active });
    return this.http.put(`${server.url}/subscriptions/${sub.id}`, postData, { headers })
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }
}
