import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSloteComponent } from './time-slote.component';

describe('TimeSloteComponent', () => {
  let component: TimeSloteComponent;
  let fixture: ComponentFixture<TimeSloteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeSloteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSloteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
