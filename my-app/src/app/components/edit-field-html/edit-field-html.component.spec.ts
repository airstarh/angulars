import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFieldHtmlComponent } from './edit-field-html.component';

describe('EditFieldHtmlComponent', () => {
  let component: EditFieldHtmlComponent;
  let fixture: ComponentFixture<EditFieldHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditFieldHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFieldHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
