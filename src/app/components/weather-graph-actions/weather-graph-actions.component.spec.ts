import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherGraphActionsComponent } from './weather-graph-actions.component';

describe('WeatherGraphActionsComponent', () => {
  let component: WeatherGraphActionsComponent;
  let fixture: ComponentFixture<WeatherGraphActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherGraphActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherGraphActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
