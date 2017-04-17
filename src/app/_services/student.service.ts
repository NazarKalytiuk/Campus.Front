import { Student } from '../_model/student';
import { BaseService } from './base.service';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Request, RequestMethod, Headers } from '@angular/http';

@Injectable()
export class StudentService extends BaseService{

  constructor(private http: Http) { super() }

  getStudents() : Observable<Response> {
    return this.http.get(`${this.baseUrl}student`);
  }
  getStudentById(Id : string) : Observable<Student> {
    return this.http.get(`${this.baseUrl}student/${Id}`).map(resp=>resp.json() as Student);
  }

}
