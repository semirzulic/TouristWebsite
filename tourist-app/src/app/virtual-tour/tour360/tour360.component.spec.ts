import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tour360Component } from './tour360.component';

describe('Tour360Component', () => {
  let component: Tour360Component;
  let fixture: ComponentFixture<Tour360Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tour360Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tour360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
