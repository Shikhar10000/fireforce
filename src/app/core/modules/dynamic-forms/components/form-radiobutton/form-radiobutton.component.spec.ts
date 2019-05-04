import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRadiobuttonComponent } from './form-radiobutton.component';

describe('FormRadiobuttonComponent', () => {
  let component: FormRadiobuttonComponent;
  let fixture: ComponentFixture<FormRadiobuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRadiobuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRadiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
