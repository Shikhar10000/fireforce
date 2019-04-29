import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsPageComponent } from './components/accounts-page/accounts-page.component';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { AccountsFormComponent } from './components/accounts-form/accounts-form.component';

@NgModule({
  declarations: [AccountsPageComponent, AccountsListComponent, AccountsFormComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    CoreModule
  ]
})
export class AccountsModule { }
