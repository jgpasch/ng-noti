import { Directive, HostListener } from '@angular/core';
import { SidebarService } from '../../shared/services/sidebar.service';

@Directive({
  selector: '[appMinimizeMenuOnClick]'
})
export class MinimizeMenuOnClickDirective {

  constructor(private sidebarSvc: SidebarService) { }

  @HostListener('click') onClick() {
    this.sidebarSvc.closeSidebar()
  }
}
