import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlinaRestCallComponent } from './alina-rest-call.component';

describe('AlinaRestCallComponent', () => {
  let component: AlinaRestCallComponent;
  let fixture: ComponentFixture<AlinaRestCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlinaRestCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlinaRestCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
