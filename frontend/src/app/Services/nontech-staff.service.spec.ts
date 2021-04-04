import { TestBed } from '@angular/core/testing';

import { NontechStaffService } from './nontech-staff.service';

describe('NontechStaffService', () => {
  let service: NontechStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NontechStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
