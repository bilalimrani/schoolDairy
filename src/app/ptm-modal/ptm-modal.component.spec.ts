import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtmModalComponent } from './ptm-modal.component';

describe('PtmModalComponent', () => {
  let component: PtmModalComponent;
  let fixture: ComponentFixture<PtmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtmModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
