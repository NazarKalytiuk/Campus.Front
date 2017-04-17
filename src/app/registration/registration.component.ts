import { PreloaderComponent } from '../preloader/preloader.component';
import { NavbarService } from '../_services/navbar.service';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit, OnDestroy {

  constructor(private _pre: PreloaderComponent, private _navbarService: NavbarService, private elementRef: ElementRef) { }
  ngOnInit() {
    this._navbarService.sendMessage("Реєстрація");
    setTimeout(()=>{this._pre.close()}, 1000);
  }

  ngOnDestroy(): void {
    this._pre.open();
  }

}
