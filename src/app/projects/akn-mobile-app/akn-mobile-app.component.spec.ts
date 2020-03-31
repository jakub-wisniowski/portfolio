import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AknMobileAppComponent } from './akn-mobile-app.component';

describe('AknMobileAppComponent', () => {
  let component: AknMobileAppComponent;
  let fixture: ComponentFixture<AknMobileAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AknMobileAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AknMobileAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
