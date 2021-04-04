import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotechEditStudentComponent } from './notech-edit-student.component';

describe('NotechEditStudentComponent', () => {
  let component: NotechEditStudentComponent;
  let fixture: ComponentFixture<NotechEditStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotechEditStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotechEditStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
