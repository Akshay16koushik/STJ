import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotechEditTeacherComponent } from './notech-edit-teacher.component';

describe('NotechEditTeacherComponent', () => {
  let component: NotechEditTeacherComponent;
  let fixture: ComponentFixture<NotechEditTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotechEditTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotechEditTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
