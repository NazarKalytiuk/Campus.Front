import { Subject } from 'rxjs/Rx';
import { MenuService } from '../_services/menu.service';
import { AuthService } from '../_services/auth.service';
import { NavbarService } from '../_services/navbar.service';
import { MdSidenav } from '@angular/material';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {

  public title: string = "s";
  public showButton: boolean;
  constructor(private _a: NavbarService, private _authService: AuthService, private _sidenavService: MenuService, private _menuService: MenuService) {
  }

  onClick() {
    this._authService.sendMessage(true);
    console.log(this.showButton);
  }

  ngOnInit(): void {
    console.log("onInit")
    this._a.getMessage().subscribe(message => {
      this.title = message.text;
      console.log(message)
    });

    this._authService.authorized().subscribe(c => this.showButton = c);

    // this._authService.sendMessage(this._authService.checkCredentials());
    this._authService.checkCredentials();
    if(this._authService.checkCredentials())
    this.leftsidenav.open()
  }

  @Input() leftsidenav: MdSidenav;
}
