import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NontechstaffloginComponent } from './nontechstafflogin.component';

describe('NontechstaffloginComponent', () => {
  let component: NontechstaffloginComponent;
  let fixture: ComponentFixture<NontechstaffloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NontechstaffloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NontechstaffloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
