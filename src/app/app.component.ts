import { MenuService } from './_services/menu.service';
import { NavbarService } from './_services/navbar.service';
import { GroupService } from './_services/group.service';
import { Component, EventEmitter, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { Http, Response, RequestOptions, Request, RequestMethod, Headers } from '@angular/http';
import { MdSidenav, MdDialog, MdDialogConfig } from "@angular/material";
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

require('ng2-spinning-preloader/dist/ng-spinning-preloader.css');

import { AuthService } from '../app/_services/auth.service'
import { NgSpinningPreloader } from "ng2-spinning-preloader";


@Component({
  selector: 'campus-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private ngSpinningPreloader: NgSpinningPreloader, private http: Http, private _authService : AuthService, private _groupService : GroupService, 
  private _navbarService : NavbarService, private _sidenavService : MenuService) {}

  ngOnInit(): void {
    this.ngSpinningPreloader.stop();
  }
}
