import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import server from '../../config/server';

@Injectable()
export class SubscriptionService {

  constructor(private http: Http) { }

  getAllSubscriptions() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('authorization', localStorage.getItem('token'));
    return this.http.get(`${server.url}/subscriptions`, { headers })
      .map(res => res.json())
      .map(res => {
        return res;
      });
  }

  toggleActive(sub: any) {
    const headers = new Headers();
    headers.append('authorization', localStorage.getItem('token'));
    const postData = Object.assign({}, sub, { active: !sub.active });
    console.log(postData);
    return this.http.put(`${server.url}/subscriptions/${sub.id}`, postData, { headers })
      .map(res => res.json())
      .map(res => {
        return res;
      });
  }
}
