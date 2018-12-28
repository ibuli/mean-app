import { Component, OnInit, Input  } from '@angular/core';
import { Observable }  from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

import { AuthService } from '../../_services/auth.service';
import { AuthGuard } from '../../_guards/auth.guard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService) {  }

  isLoggedIn: boolean;

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    console.log(this.authService.isLoggedIn());
  }
}
