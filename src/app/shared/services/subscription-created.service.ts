import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SubscriptionCreatedService {
  private subAnnouncedSource = new Subject<any>();

  subAnnounced$ = this.subAnnouncedSource.asObservable();

  announceSub(sub: any) {
    this.subAnnouncedSource.next(sub);
  }
}
