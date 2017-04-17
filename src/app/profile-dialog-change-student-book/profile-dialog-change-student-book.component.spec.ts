/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProfileDialogChangeStudentBookComponent } from './profile-dialog-change-student-book.component';

describe('ProfileDialogChangeStudentBookComponent', () => {
  let component: ProfileDialogChangeStudentBookComponent;
  let fixture: ComponentFixture<ProfileDialogChangeStudentBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDialogChangeStudentBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDialogChangeStudentBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
