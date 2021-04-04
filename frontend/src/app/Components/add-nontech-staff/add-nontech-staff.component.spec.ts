import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNontechStaffComponent } from './add-nontech-staff.component';

describe('AddNontechStaffComponent', () => {
  let component: AddNontechStaffComponent;
  let fixture: ComponentFixture<AddNontechStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNontechStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNontechStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
