import { TestBed } from '@angular/core/testing';

import { CbscMarksService } from './cbsc-marks.service';

describe('CbscMarksService', () => {
  let service: CbscMarksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CbscMarksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
