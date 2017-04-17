import { Subscription } from 'rxjs/Rx';
import { Observable } from 'angular-cli/node_modules/rxjs/Rx';
import { AfterViewChecked } from 'angular-cli/node_modules/@angular/core/src/metadata/lifecycle_hooks';
import { AfterViewInit, OnDestroy } from 'angular-cli/node_modules/@angular/core';
import { PreloaderComponent } from '../preloader/preloader.component';
import { NavbarService } from '../_services/navbar.service';
import { Group } from '../_model/group';
import { Student } from '../_model/student';
import { AuthService } from '../_services/auth.service';
import { StudentService } from '../_services/student.service';
import { GroupService } from '../_services/group.service';
import { AfterContentChecked, AfterContentInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit, AfterViewChecked, OnDestroy {
  public group: Group;
  public students: Array<Student>;
  public monitor: Student;
  constructor(private pre: PreloaderComponent, private _groupService: GroupService, private _studentService: StudentService,
    private route: ActivatedRoute, private router: Router, private _a: NavbarService) {
  }

  ngOnInit() {
    var observer;
      this.route.params
        // (+) converts string 'id' to a number
        .switchMap((params: Params) => this._groupService.getGroupById(params['id']))
        .subscribe((group) => {
          this.group = group.json();
          var a1 = this._studentService.getStudentById(`${this.group.MonitorId}`);
          var a2 = this._studentService.getStudentById(`${this.group.MonitorId}`);
          Observable.forkJoin(a1, a2).subscribe(val => console.log(val), error => console.log(error), () => {
            console.log("completed") 
            this.pre.close();
          });
          this._a.sendMessage(this.group.Name);
        })
  }

  ngAfterContentInit(): void {


  }

  ngOnDestroy(): void {
    this.pre.open();
  }

  ngAfterViewChecked(): void {
  }
}
