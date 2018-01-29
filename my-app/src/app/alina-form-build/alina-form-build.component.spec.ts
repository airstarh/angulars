import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlinaFormBuildComponent } from './alina-form-build.component';

describe('AlinaFormBuildComponent', () => {
  let component: AlinaFormBuildComponent;
  let fixture: ComponentFixture<AlinaFormBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlinaFormBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlinaFormBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
