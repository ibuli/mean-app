import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';

import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { routing } from './app.routing';
import { AuthService } from '../_services/auth.service';
import { AuthGuard } from '../_guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing,
    CookieModule.forRoot()
  ],
  providers: [ AuthService, AuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
