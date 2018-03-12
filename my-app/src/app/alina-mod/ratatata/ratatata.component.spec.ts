import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatatataComponent } from './ratatata.component';

describe('RatatataComponent', () => {
  let component: RatatataComponent;
  let fixture: ComponentFixture<RatatataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatatataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatatataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
