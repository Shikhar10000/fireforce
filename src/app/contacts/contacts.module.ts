import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { ContactsFormComponent } from './components/contacts-form/contacts-form.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';

@NgModule({
  declarations: [ContactsPageComponent, ContactsFormComponent, ContactsListComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    CoreModule,
  ]
})
export class ContactsModule { }
