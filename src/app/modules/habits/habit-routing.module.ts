import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabitsPageComponent } from './components/habits-page/habits-page.component';

const routes: Routes = [
    { path: 'habits', component: HabitsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitsRoutingModule { }
