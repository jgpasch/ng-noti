import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('main') main;
  menuDisplayed: boolean;

  constructor() { }

  toggleMenu(expanded) {
    console.log('received: ', expanded);
    // if (this.main.nativeElement.classList.contains('menuDisplayed')) {
    //   this.main.nativeElement.classList.remove('menuDisplayed');
    //   this.menuDisplayed = false;
    // } else {
    //   console.log('im here');
    //   this.main.nativeElement.classList.add('menuDisplayed');
    //   this.menuDisplayed = true;
    // }
    if (!expanded) {
      this.main.nativeElement.classList.remove('menuDisplayed');
      this.menuDisplayed = false;
    } else {
      this.main.nativeElement.classList.add('menuDisplayed');
      this.menuDisplayed = true;
    }
  }

  ngOnInit() {
  }

}
