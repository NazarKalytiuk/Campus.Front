import { Injectable } from '@angular/core';

@Injectable()
export class BaseService {
  baseUrl : string = `http://localhost:48086/api/`;
  constructor() { }

}
