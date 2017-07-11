import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SidebarService {
  private subject = new Subject<boolean>();
  sidebarOpened = false;

  constructor() {
  }

  closeSidebar() {
    if (this.sidebarOpened) {
      this.sidebarOpened = !this.sidebarOpened;
      this.subject.next(this.sidebarOpened);
    }
  }

  setExpanded(expanded: boolean) {
    this.sidebarOpened = expanded;
    this.subject.next(this.sidebarOpened);
  }

  getMessage(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
