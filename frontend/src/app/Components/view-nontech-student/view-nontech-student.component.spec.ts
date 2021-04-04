import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNontechStudentComponent } from './view-nontech-student.component';

describe('ViewNontechStudentComponent', () => {
  let component: ViewNontechStudentComponent;
  let fixture: ComponentFixture<ViewNontechStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNontechStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNontechStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
