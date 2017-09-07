import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { SidebarService } from '../../shared/services/sidebar.service';
import { CreateComponent } from '../dashboard/create/create.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  expanded: boolean;
  expandedText: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private sidebarSvc: SidebarService,
    public dialog: MdDialog) {
      this.expanded = this.sidebarSvc.sidebarOpened;
      this.expandedText = this.sidebarSvc.sidebarOpened;
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
      }, 250)
    }
  }

  addSub() {
    const ref = this.dialog.open(CreateComponent);
  }

  closeMenu() {
    this.expanded = !this.expanded;
    this.expandedText = !this.expandedText;
  }

  logout() {
    this.authService.logout();
  }
}
