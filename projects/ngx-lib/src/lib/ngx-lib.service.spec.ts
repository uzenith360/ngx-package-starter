import { TestBed } from '@angular/core/testing';

import { NgxLibService } from './ngx-lib.service';

describe('NgxLibService', () => {
  let service: NgxLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
