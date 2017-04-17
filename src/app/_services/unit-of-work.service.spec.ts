/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UnitOfWorkService } from './unit-of-work.service';

describe('UnitOfWorkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnitOfWorkService]
    });
  });

  it('should ...', inject([UnitOfWorkService], (service: UnitOfWorkService) => {
    expect(service).toBeTruthy();
  }));
});
