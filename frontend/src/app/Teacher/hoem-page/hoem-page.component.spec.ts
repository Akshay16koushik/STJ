import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoemPageComponent } from './hoem-page.component';

describe('HoemPageComponent', () => {
  let component: HoemPageComponent;
  let fixture: ComponentFixture<HoemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoemPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
