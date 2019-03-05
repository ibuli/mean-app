import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable }  from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

import { AuthService } from '../../_services/auth.service';

const EMAIL_REGEX = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  SignupForm: FormGroup;
  isLoggedIn: boolean;

  constructor(public formBuilder: FormBuilder,
              private authService: AuthService,
              private cookieService: CookieService,
              private router: Router) {
    this.SignupForm = this.formBuilder.group({
      username: ['', Validators.required ],
      email: ['', [ Validators.required,
                    Validators.pattern(EMAIL_REGEX) ]],
      password: ['', Validators.required ]
    });
   }
  ngOnInit() {
    const token = this.cookieService.get('token');
    if (token != null) {
      this.isLoggedIn = this.authService.isLoggedIn();
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/signup']);
      this.isLoggedIn = this.authService.isLoggedIn();
    }
  }

  Signup() {
    this.authService.Signup(this.SignupForm.value).subscribe(
      res => {
        alert(res.message);
        // this.toast.show(res.message);
      }
    );
  }
}
