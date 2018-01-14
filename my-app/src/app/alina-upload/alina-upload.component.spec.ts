import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlinaUploadComponent } from './alina-upload.component';

describe('AlinaUploadComponent', () => {
  let component: AlinaUploadComponent;
  let fixture: ComponentFixture<AlinaUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlinaUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlinaUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
