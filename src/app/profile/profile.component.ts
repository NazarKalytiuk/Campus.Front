import { PreloaderComponent } from '../preloader/preloader.component';
import { UnitOfWorkService } from '../_services/unit-of-work.service';
import { NavbarService } from '../_services/navbar.service';
import { AuthService } from '../_services/auth.service';
import { AfterViewInit, Component, Input, OnInit, AfterContentInit, OnDestroy } from '@angular/core';
import { Headers, Http, Request, RequestMethod, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { MdDialog } from '@angular/material';
import { ProfileDialogChangeNameComponent } from '../profile-dialog-change-name/profile-dialog-change-name.component'
import { NgSpinningPreloader } from 'ng2-spinning-preloader';
require('ng2-spinning-preloader/dist/ng-spinning-preloader.css');
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private pre: PreloaderComponent, private dialog: MdDialog, private _navbarService: NavbarService, private uof: UnitOfWorkService) {

  }

  public user: any;
  openDialog() {
    let dialofRef = this.dialog.open(ProfileDialogChangeNameComponent);
    dialofRef.afterClosed().subscribe(s => console.log(s))
  }

  ngOnInit() {
    this._navbarService.sendMessage("Профіль");
  }

  ngAfterViewInit(): void {
    setTimeout(() => { this.pre.close() }, 2000);
  }

  ngOnDestroy(): void {
    this.pre.open();
  }

}

