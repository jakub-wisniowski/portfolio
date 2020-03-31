import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoAppComponent } from './lego-app.component';

describe('LegoAppComponent', () => {
  let component: LegoAppComponent;
  let fixture: ComponentFixture<LegoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegoAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
