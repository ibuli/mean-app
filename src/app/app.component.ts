import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private authService: AuthService, private cookieService: CookieService, private router: Router) {
  }
  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    console.log('Checking in app component => ' + this.isLoggedIn);
  }

  logout() {
    this.isLoggedIn = false;
    this.cookieService.remove('token');
    this.router.navigate['/'];
  }


}
