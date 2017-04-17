import { subscribeOn } from '@angular-cli/ast-tools/node_modules/rxjs/operator/subscribeOn';
import { Observable, Subscription } from 'angular-cli/node_modules/rxjs/Rx';
import { UnitOfWorkService } from '../_services/unit-of-work.service';
import { NavbarService } from '../_services/navbar.service';
import { GroupService } from '../_services/group.service';
import { Group } from '../_model/group';
import { Student } from '../_model/student';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StudentService } from '../_services/student.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit, OnDestroy {

  user: Student;
  group: Group;
  private subscription : Subscription[];
  constructor(private uof: UnitOfWorkService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.uof.StudentService.getStudentById(params['id']))
      .subscribe((user : Student) => {
        this.user = user;
        this.uof.NavbarService.sendMessage(`${this.user.Name} ${this.user.Surname}`);
        this.subscription.push(this.uof.GroupService.getGroupById(this.user.GroupId).subscribe(c => this.group = c.json()));
      });
  }
  onClick() {
    console.log(this.user);
  }

  ngOnDestroy(): void {
    this.subscription.forEach(s => s.unsubscribe());
  }

}
