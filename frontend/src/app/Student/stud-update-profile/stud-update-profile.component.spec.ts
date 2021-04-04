import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudUpdateProfileComponent } from './stud-update-profile.component';

describe('StudUpdateProfileComponent', () => {
  let component: StudUpdateProfileComponent;
  let fixture: ComponentFixture<StudUpdateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudUpdateProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
