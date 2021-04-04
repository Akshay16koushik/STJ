import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNontechstaffComponent } from './view-nontechstaff.component';

describe('ViewNontechstaffComponent', () => {
  let component: ViewNontechstaffComponent;
  let fixture: ComponentFixture<ViewNontechstaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNontechstaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNontechstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
