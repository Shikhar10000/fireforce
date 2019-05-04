import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { InputComponent } from './components/input/input.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormDateComponent } from './components/form-date/form-date.component';
import { FormRadiobuttonComponent } from './components/form-radiobutton/form-radiobutton.component';
import { FormCheckboxComponent } from './components/form-checkbox/form-checkbox.component';
import { DynamicFieldComponent } from './directives/dynamic-field/dynamic-field.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    DynamicFormComponent,
    InputComponent,
    FormInputComponent,
    FormButtonComponent,
    FormSelectComponent,
    FormDateComponent,
    FormRadiobuttonComponent,
    FormCheckboxComponent,
    DynamicFieldComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    DynamicFormComponent
  ]
})
export class DynamicFormModule { }
