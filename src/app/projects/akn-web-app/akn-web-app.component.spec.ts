import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AknWebAppComponent } from './akn-web-app.component';

describe('AknWebAppComponent', () => {
  let component: AknWebAppComponent;
  let fixture: ComponentFixture<AknWebAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AknWebAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AknWebAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
