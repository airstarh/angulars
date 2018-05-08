import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlinaTextEditComponent } from './alina-text-edit.component';

describe('AlinaTextEditComponent', () => {
  let component: AlinaTextEditComponent;
  let fixture: ComponentFixture<AlinaTextEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlinaTextEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlinaTextEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
