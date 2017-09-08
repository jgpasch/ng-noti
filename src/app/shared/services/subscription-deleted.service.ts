import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SubscriptionDeletedService {
  private subDeletedSource = new Subject<any>();

  subDeleted$ = this.subDeletedSource.asObservable();

  deleteSub(id: number) {
    this.subDeletedSource.next(id);
  }
}
