import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Response } from '@angular/http'
import { Router } from '@angular/router'

import { AuthService } from '../_services/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService, private _router: Router) {
  }
  login: string;
  password: string;
  error: string;
  Login() {
    this._authService.configureToken(this.login, this.password);

  }
  ngOnInit() {
    // if(this._authService.checkCredentials()) {
    // this._router.navigate(['home']);
    // }
  }

}
