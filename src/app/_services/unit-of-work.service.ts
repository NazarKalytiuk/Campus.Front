import { StudentService } from './student.service';
import { NavbarService } from './navbar.service';
import { MenuService } from './menu.service';
import { GroupService } from './group.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UnitOfWorkService {

  constructor(
    public AuthService: AuthService,
    public GroupService: GroupService,
    public MenuService: MenuService,
    public NavbarService: NavbarService,
    public StudentService: StudentService
  ) {
  }

}
