import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable }  from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

import { AuthService } from '../../_services/auth.service';

const EMAIL_REGEX = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  isLoggedIn: boolean;
  data: any;
  isLoading: boolean;

  constructor(public formBuilder: FormBuilder,
              private authService: AuthService,
              private cookieService: CookieService,
              private router: Router) {
    this.LoginForm = this.formBuilder.group({
      email: ['', [ Validators.required,
                    Validators.pattern(EMAIL_REGEX) ]],
      password: ['', Validators.required ]
    });
  }

  ngOnInit() {
    // this.cookieService.removeAll();
    const token = this.cookieService.get('token');
    if (token != null) {
      this.isLoggedIn = this.authService.isLoggedIn();
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/login']);
      this.isLoggedIn = this.authService.isLoggedIn();
    }
  }
  Login() {
    this.isLoading = true;
    this.authService.Login(this.LoginForm.value).subscribe(
      res => {
        console.log(res);
        this.data = res.resObject;
        if (res.token !== undefined) {
          this.isLoading = false;
          const key = 'token';
          this.cookieService.put(key, res.token);
          this.isLoggedIn = this.authService.isLoggedIn();
          this.router.navigate(['/']);
        } else {
          alert(res.message);
          this.isLoading = false;
        }
      }
    );
  }
}
