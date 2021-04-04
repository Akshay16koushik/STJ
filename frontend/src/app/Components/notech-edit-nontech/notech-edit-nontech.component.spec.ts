import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotechEditNontechComponent } from './notech-edit-nontech.component';

describe('NotechEditNontechComponent', () => {
  let component: NotechEditNontechComponent;
  let fixture: ComponentFixture<NotechEditNontechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotechEditNontechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotechEditNontechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
