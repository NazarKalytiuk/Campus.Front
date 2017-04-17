import { UnitOfWorkService } from '../_services/unit-of-work.service';
import { MdSidenav } from '@angular/material';
import { ViewChild } from 'angular-cli/node_modules/@angular/core';
import { MenuService } from '../_services/menu.service';
import { MenuItem } from '../_model/menu';
import { AuthService } from '../_services/auth.service';
import { Component, ElementRef, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  public element: HTMLElement;
  public menu: Array<MenuItem> = new Array<MenuItem>();
  arrowIcon: string = "keyboard_arrow_down";
  constructor( private uof : UnitOfWorkService, private _l: MdSidenav) { }

  ngOnInit() {
    this.uof.MenuService.getMenu().subscribe(message => this.menu = message);
    this.uof.MenuService.getMenu().subscribe(message => this.menu = message);
    window.addEventListener("resize", this.resize.bind(this))
  }

  resize() {
    if (window.innerWidth < 800) {
      this._l.opened = false;
      this._l.mode = "over";
    }
    else {
      this._l.opened = true;
      this._l.mode = "side";
    }
  }
  changeMenu() {
    if (this.arrowIcon == "keyboard_arrow_down") {
      this.uof.MenuService.getSecondaryMenu().subscribe(message => this.menu = message);
      this.arrowIcon = "keyboard_arrow_up";
    }
    else {
      this.uof.MenuService.getMenu().subscribe(message => this.menu = message);
      this.arrowIcon = "keyboard_arrow_down";
    }
  }
}
