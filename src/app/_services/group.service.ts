import { BaseService } from './base.service';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, RequestOptions, Request, RequestMethod, Headers } from '@angular/http';

@Injectable()
export class GroupService extends BaseService {

  constructor(private http: Http, private _router : Router) {
    super();
   }

  getGroupById(Id : string) : Observable<Response> {
    return this.http.get(`${this.baseUrl}group/${Id}`);
  }
  getStudentsByGroupId(Id : string) : Observable<Response> {
    return this.http.get(`${this.baseUrl}student/getStudentsByGroupId/${Id}`);
  }

}
