import { TokenResponce } from '../_model/token.responce';
import { MenuService } from './menu.service';
import { BaseService } from './base.service';
import { Observable, Subject } from 'rxjs/Rx';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, Request, RequestMethod, RequestOptions, Response, URLSearchParams } from '@angular/http';

@Injectable()
export class AuthService extends BaseService {

  private subject = new Subject<any>();

  sendMessage(message: boolean) {
    this._authorized.next(message);
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }


  token: TokenResponce;
  profile: any;
  private _authorized = new Subject<any>();

  public authorized(): Observable<any> {
    this.checkCredentials();
    return this._authorized.asObservable();
  }
  constructor(private http: Http, private _router: Router, private _sidenavService: MenuService) { 
    super()
  }

  headers: Headers = new Headers();
  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['Login']);
  }
  public checkCredentials(): boolean {
    if (localStorage.getItem("token") === null) {
      return false;
    }
    else {
      this._authorized.next(true);
      return true;
    } 
  }

  configureToken(username: string, password: string) {
    let headers = new Headers({ 'Content-Type': 'x-www-form-urlencoded', 'Accept': '*/*' });
    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    body.append('username', 'nazarkalytiuk@gmail.com');
    body.append('password', 'Pass-1');
    body.append('grant_type', 'password');
    return this.http.post(`http://localhost:48086/token`, body.toString())
      .toPromise()   
      .then((response) => {
        this.token = response.json();
        console.log(this.token);
        localStorage.setItem("token", this.token.access_token);
        this.sendMessage(true);
        // this._router.navigate(['home']); 
        this.headers.append('Authorization', `Token ${this.token}`)
      })
  }
}
