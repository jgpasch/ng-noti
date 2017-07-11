import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { SidebarService } from '../../shared/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  expanded = false;
  expandedText = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private sidebarSvc: SidebarService) {
    }

  ngOnInit() {
    this.sidebarSvc.getMessage().subscribe(expanded => {
      if (!expanded) {
        this.closeMenu();
      }
    });
  }

  openMenu() {
    this.expanded = !this.expanded;
    this.sidebarSvc.setExpanded(true);
    if (this.expandedText === true) {
      this.expandedText = !this.expandedText;
    } else {
      setTimeout(() => {
        this.expandedText = !this.expandedText;
      }, 150)
    }
  }

  closeMenu() {
    this.expanded = !this.expanded;
    this.expandedText = !this.expandedText;
  }

  logout() {
    this.router.navigate(['auth']);
    this.authService.logout();
  }
}
