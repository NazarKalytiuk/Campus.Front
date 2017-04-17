import { UnitOfWorkService } from './_services/unit-of-work.service';
import { StudentService } from './_services/student.service';
import { GroupService } from './_services/group.service';
import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './_services/auth.service';
import { NavbarService } from './_services/navbar.service';
import { MenuService } from './_services/menu.service';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';

import {NgSpinningPreloader} from 'ng2-spinning-preloader';

import 'hammerjs';
import { ProfileComponent } from './profile/profile.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { GroupComponent } from './group/group.component';
import { ProfileDialogChangeNameComponent } from './profile-dialog-change-name/profile-dialog-change-name.component';
import { ProfileDialogChangeEmailComponent } from './profile-dialog-change-email/profile-dialog-change-email.component';
import { ProfileDialogChangePhoneComponent } from './profile-dialog-change-phone/profile-dialog-change-phone.component';
import { ProfileDialogChangeBirthdateComponent } from './profile-dialog-change-birthdate/profile-dialog-change-birthdate.component';
import { ProfileDialogChangeGroupComponent } from './profile-dialog-change-group/profile-dialog-change-group.component';
import { ProfileDialogChangeStudentBookComponent } from './profile-dialog-change-student-book/profile-dialog-change-student-book.component';
import { PreloaderComponent } from './preloader/preloader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent,
    RegistrationComponent,
    HomeComponent,
    AppNavbarComponent,
    ProfileComponent,
    AppFooterComponent,
    StudentComponent,
    TeacherComponent,
    GroupComponent,
    GroupComponent,
    RegistrationComponent,
    ProfileDialogChangeNameComponent,
    ProfileDialogChangeEmailComponent,
    ProfileDialogChangePhoneComponent,
    ProfileDialogChangeBirthdateComponent,
    ProfileDialogChangeGroupComponent,
    ProfileDialogChangeStudentBookComponent,
    PreloaderComponent,
  ],
  entryComponents: [
    AppComponent,
    ProfileDialogChangeNameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),

    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'profile/student/:id', component: StudentComponent },
      { path: 'group/:id', component: GroupComponent },
    ])
  ],
  providers: [AuthService, GroupService, StudentService, NavbarService, MenuService, UnitOfWorkService, NgSpinningPreloader, PreloaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
