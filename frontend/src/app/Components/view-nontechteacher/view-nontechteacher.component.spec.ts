import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNontechteacherComponent } from './view-nontechteacher.component';

describe('ViewNontechteacherComponent', () => {
  let component: ViewNontechteacherComponent;
  let fixture: ComponentFixture<ViewNontechteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNontechteacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNontechteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
