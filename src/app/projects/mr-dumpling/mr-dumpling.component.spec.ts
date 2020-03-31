import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrDumplingComponent } from './mr-dumpling.component';

describe('MrDumplingComponent', () => {
  let component: MrDumplingComponent;
  let fixture: ComponentFixture<MrDumplingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrDumplingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrDumplingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
