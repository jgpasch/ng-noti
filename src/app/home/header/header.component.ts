import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() menuToggle: EventEmitter<any> = new EventEmitter<any>();
  expanded = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    console.log('emitting: ', this.expanded);
    this.menuToggle.emit(this.expanded);
  }

  toggleMenu() {
    this.menuToggle.emit(1);
    if (this.expanded === true) {
      this.expanded = !this.expanded;
    } else {
      setTimeout(() => {
        this.expanded = !this.expanded;
      }, 150)
    }
  }

  logout() {
    this.router.navigate(['auth']);
    this.authService.logout();
  }

}
