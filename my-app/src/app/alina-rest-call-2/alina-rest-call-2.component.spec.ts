import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlinaRestCall2Component } from './alina-rest-call-2.component';

describe('AlinaRestCall2Component', () => {
  let component: AlinaRestCall2Component;
  let fixture: ComponentFixture<AlinaRestCall2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlinaRestCall2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlinaRestCall2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
