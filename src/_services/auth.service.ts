import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { CookieService } from 'ngx-cookie';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(
    private http: Http,
    private cookieService: CookieService
  ) {}

  Signup(value) {
    const headers = new Headers();
    headers.append('Content-Type', 'Application/json');

    return this.http
      .post('/api/signup', JSON.stringify(value), { headers: headers })
      .pipe(
        map(res => {
          return res.json();
        })
      );
  }

  Login(value) {
    const headers = new Headers();
    headers.append('Content-Type', 'Application/json');

    return this.http
      .post('/api/login', JSON.stringify(value), { headers: headers })
      .pipe(
        map(res => {
          return res.json();
        })
      );
  }

  isLoggedIn() {
    if (this.cookieService.get('token') != null) {
      return true;
    } else {
      return false;
    }
  }
}
