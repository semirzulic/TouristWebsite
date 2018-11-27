import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAttractionsComponent } from './map-attractions.component';

describe('MapAttractionsComponent', () => {
  let component: MapAttractionsComponent;
  let fixture: ComponentFixture<MapAttractionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapAttractionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapAttractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
