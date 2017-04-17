/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProfileDialogChangeBirthdateComponent } from './profile-dialog-change-birthdate.component';

describe('ProfileDialogChangeBirthdateComponent', () => {
  let component: ProfileDialogChangeBirthdateComponent;
  let fixture: ComponentFixture<ProfileDialogChangeBirthdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDialogChangeBirthdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDialogChangeBirthdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
