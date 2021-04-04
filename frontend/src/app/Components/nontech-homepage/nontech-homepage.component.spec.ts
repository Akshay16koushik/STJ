import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NontechHomepageComponent } from './nontech-homepage.component';

describe('NontechHomepageComponent', () => {
  let component: NontechHomepageComponent;
  let fixture: ComponentFixture<NontechHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NontechHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NontechHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
