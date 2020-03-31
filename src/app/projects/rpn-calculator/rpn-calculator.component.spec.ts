import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpnCalculatorComponent } from './rpn-calculator.component';

describe('RpnCalculatorComponent', () => {
  let component: RpnCalculatorComponent;
  let fixture: ComponentFixture<RpnCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpnCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpnCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
