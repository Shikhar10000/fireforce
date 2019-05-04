import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MaterialModule } from './modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FirestoreSettingsToken } from '@angular/fire/firestore';
import { DynamicFormModule } from './modules/dynamic-forms/dynamic-form.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MaterialModule,
    ReactiveFormsModule,
    DynamicFormModule,
  ],
  exports: [
    AngularFireModule,
    AngularFirestoreModule,
    MaterialModule,
    ReactiveFormsModule,
    DynamicFormModule,
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }]
})
export class CoreModule { }
