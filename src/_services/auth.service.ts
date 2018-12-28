import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    constructor(private http: Http, private cookieService: CookieService, private router: Router) {  }

    Signup(value) {
        const headers = new Headers();
        headers.append('Content-Type', 'Application/json');

        return this.http.post('/api/signup', JSON.stringify(value), { headers: headers })
            .map(res => {
                return res.json();
            });
    }

    Login(value) {
        const headers = new Headers();
        headers.append('Content-Type', 'Application/json');

        return this.http.post('/api/login', JSON.stringify(value), { headers: headers })
            .map(res => {
                return res.json();
            });
  }

  isLoggedIn(){
    if (this.cookieService.get('token') != null) {
      return true;
    } else {
      return false;
    }
  }
}
