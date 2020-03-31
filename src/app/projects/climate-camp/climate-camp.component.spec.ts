import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateCampComponent } from './climate-camp.component';

describe('ClimateCampComponent', () => {
  let component: ClimateCampComponent;
  let fixture: ComponentFixture<ClimateCampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimateCampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimateCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
