import { TestBed } from '@angular/core/testing';

import { TeacherteacherService } from './teacherteacher.service';

describe('TeacherteacherService', () => {
  let service: TeacherteacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherteacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
