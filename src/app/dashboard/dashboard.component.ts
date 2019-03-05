import { Component, OnInit, Input  } from '@angular/core';
import { Observable }  from 'rxjs';
// import { CookieService } from 'ngx-cookie';
// import { Router } from '@angular/router';

import { AuthService } from '../../_services/auth.service';
// import { AuthGuard } from '../../_guards/auth.guard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private authService: AuthService) {  }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    console.log(this.authService.isLoggedIn());
  }
}
