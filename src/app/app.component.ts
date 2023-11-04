import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHomePage: boolean;

  constructor(private router: Router) {
    this.isHomePage = this.router.url === '/';

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = this.router.url === '/';
      }
    });
  }
}
