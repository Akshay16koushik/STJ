import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NontechStaffRegComponent } from './nontech-staff-reg.component';

describe('NontechStaffRegComponent', () => {
  let component: NontechStaffRegComponent;
  let fixture: ComponentFixture<NontechStaffRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NontechStaffRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NontechStaffRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
