import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsPageComponent } from './components/accounts-page/accounts-page.component';

const routes: Routes = [
    { path: 'accounts', component: AccountsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
